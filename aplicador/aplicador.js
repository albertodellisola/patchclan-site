/* aplicador.js — o núcleo do aplicador de patch do Patch Clan, sem DOM.

   Expõe window.PCAplicador (globalThis.PCAplicador). Depende dos arquivos de
   vendor/ (núcleo do Rom Patcher JS, de Marc Robledo, licença MIT), carregados
   ANTES deste, como <script> comuns:

     vendor/modules/BinFile.js, vendor/modules/HashCalculator.js,
     vendor/modules/RomPatcher.format.*.js, vendor/RomPatcher.js

   REGRA DA CASA: a ROM nunca sai do navegador. Este arquivo só faz fetch em duas
   coisas — o catálogo e o PATCH publicado. Nenhum hash, nome ou byte da ROM é
   enviado a lugar nenhum, e não há analytics aqui.

   As assinaturas estão documentadas em API.md. Mudou uma assinatura, mude o
   API.md junto: a interface do designer é escrita sobre ele. */
(function (raiz) {
  'use strict';

  var VERSAO = '1.3.0';

  /* Endereço deste arquivo, para achar o worker.js ao lado (só existe em página). */
  var URL_SCRIPT = (typeof document !== 'undefined' && document.currentScript && document.currentScript.src) || null;

  /* ---------------------------------------------------------------- erros */

  /* Todo erro previsto sai como PCErro, com `codigo` estável (a interface decide
     o texto) e `mensagem` em português pronta para mostrar. */
  function PCErro(codigo, mensagem, detalhe) {
    var e = new Error(mensagem);
    e.name = 'PCErro';
    e.codigo = codigo;
    e.mensagem = mensagem;
    if (detalhe !== undefined) e.detalhe = detalhe;
    return e;
  }

  /* ---------------------------------------------------------------- bytes */

  /* Aceita ArrayBuffer, qualquer TypedArray/DataView ou BinFile e devolve um
     Uint8Array que É DONO do próprio buffer. Isto não é zelo: o construtor do
     BinFile, quando recebe um TypedArray, usa `source.buffer` INTEIRO — uma
     subarray de um buffer maior viraria o arquivo errado, sem erro. */
  function paraU8(x) {
    if (x == null) throw PCErro('ENTRADA_VAZIA', 'Nenhum arquivo foi recebido.');
    if (x instanceof Uint8Array) {
      return (x.byteOffset === 0 && x.byteLength === x.buffer.byteLength) ? x : x.slice();
    }
    /* toString em vez de instanceof: ArrayBuffer vindo de outro realm (iframe, worker, vm) também vale */
    if (Object.prototype.toString.call(x) === '[object ArrayBuffer]') return copiar(new Uint8Array(x));
    if (ArrayBuffer.isView(x)) return copiar(new Uint8Array(x.buffer, x.byteOffset, x.byteLength));
    if (typeof BinFile === 'function' && x instanceof BinFile) return paraU8(x._u8array);
    throw PCErro('ENTRADA_INVALIDA', 'O arquivo não veio como bytes (ArrayBuffer ou Uint8Array).');
  }

  /* cópia num Uint8Array DESTE realm (o BinFile testa `instanceof ArrayBuffer`) */
  function copiar(v) { var r = new Uint8Array(v.length); r.set(v); return r; }

  function binFile(u8, nome) {
    var b = new BinFile(u8.buffer.byteLength === u8.byteLength && u8.byteOffset === 0 ? u8.buffer : u8.slice().buffer);
    if (nome) b.fileName = nome;
    return b;
  }

  function hex8(n) { return ('00000000' + (n >>> 0).toString(16)).slice(-8); }

  function juntar(a, b) {
    var r = new Uint8Array(a.length + b.length);
    r.set(a, 0); r.set(b, a.length);
    return r;
  }

  function deHex(s) {
    var r = new Uint8Array(s.length / 2);
    for (var i = 0; i < r.length; i++) r[i] = parseInt(s.substr(i * 2, 2), 16);
    return r;
  }

  /* ---------------------------------------------------------------- hashes */

  /* ------------------------------------------------ progresso e cancelamento

     Uma operação (conferirRom ou aplicar) tem um "relator": recebe a fração de cada
     passada de hash / aplicação e emite { etapa, pct, feitos, total } ao callback
     `progresso`, no máximo uma vez por ponto percentual. É também onde o pedido de
     cancelar é visto (fora do worker; no worker, cancelar = terminate). */
  var rel = null, pedidoCancelar = false;

  function Relator(cb, total) {
    this.cb = cb; this.total = total || 0; this.etapa = 'ler';
    this.ini = 0; this.fim = 0; this.a = 0; this.b = 1; this.ultimo = -1;
  }
  /* etapa da interface ('ler' | 'aplicar' | 'conferir') e a faixa de % que ela ocupa */
  Relator.prototype.fase = function (etapa, ini, fim) { this.etapa = etapa; this.ini = ini; this.fim = fim; this.a = 0; this.b = 1; this.emite(0); };
  /* sub-faixa dentro da fase (uma passada de hash dentro de 'ler', p. ex.) */
  Relator.prototype.sub = function (a, b) { this.a = a; this.b = b; this.emite(0); };
  Relator.prototype.emite = function (fr) {
    if (pedidoCancelar) { pedidoCancelar = false; throw PCErro('CANCELADO', 'Cancelado.'); }
    var f = this.a + (this.b - this.a) * Math.min(1, Math.max(0, fr));
    var pct = Math.floor(this.ini + (this.fim - this.ini) * f);
    /* nunca volta (várias passadas na mesma faixa), mas toda troca de etapa é avisada */
    if (!this.cb || (pct <= this.ultimo && this.etapa === this.ultimaEtapa)) return;
    this.ultimo = Math.max(pct, this.ultimo); this.ultimaEtapa = this.etapa;
    pct = this.ultimo;
    this.cb({ etapa: this.etapa, pct: pct, feitos: Math.round(this.total * pct / 100), total: this.total });
  };
  function avanca(fr) { if (rel) rel.emite(fr); }
  var PASSO_PROGRESSO = 1 << 22;   /* 4 MB entre avisos */

  /* ------------------------------------------------ MD5 e CRC32 próprios

     O MD5 do HashCalculator corta um Uint8Array novo a cada 64 bytes (11 milhões de
     cópias num CD) e não informa progresso. Estes leem os blocos no lugar e avisam a
     cada 4 MB. Conferidos contra o md5 do Node em teste_node.mjs. */
  var MD5_K = [0xd76aa478,0xe8c7b756,0x242070db,0xc1bdceee,0xf57c0faf,0x4787c62a,0xa8304613,0xfd469501,
    0x698098d8,0x8b44f7af,0xffff5bb1,0x895cd7be,0x6b901122,0xfd987193,0xa679438e,0x49b40821,
    0xf61e2562,0xc040b340,0x265e5a51,0xe9b6c7aa,0xd62f105d,0x02441453,0xd8a1e681,0xe7d3fbc8,
    0x21e1cde6,0xc33707d6,0xf4d50d87,0x455a14ed,0xa9e3e905,0xfcefa3f8,0x676f02d9,0x8d2a4c8a,
    0xfffa3942,0x8771f681,0x6d9d6122,0xfde5380c,0xa4beea44,0x4bdecfa9,0xf6bb4b60,0xbebfbc70,
    0x289b7ec6,0xeaa127fa,0xd4ef3085,0x04881d05,0xd9d4d039,0xe6db99e5,0x1fa27cf8,0xc4ac5665,
    0xf4292244,0x432aff97,0xab9423a7,0xfc93a039,0x655b59c3,0x8f0ccc92,0xffeff47d,0x85845dd1,
    0x6fa87e4f,0xfe2ce6e0,0xa3014314,0x4e0811a1,0xf7537e82,0xbd3af235,0x2ad7d2bb,0xeb86d391].map(function (x) { return x | 0; });
  var MD5_S = [7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,
    4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21];
  var MD5_G = [];
  (function () { for (var i = 0; i < 64; i++) MD5_G[i] = i < 16 ? i : i < 32 ? (5 * i + 1) % 16 : i < 48 ? (3 * i + 5) % 16 : (7 * i) % 16; })();

  function md5Bloco(h, u8, o, M) {
    for (var j = 0; j < 16; j++, o += 4) M[j] = u8[o] | (u8[o + 1] << 8) | (u8[o + 2] << 16) | (u8[o + 3] << 24);
    var a = h[0], b = h[1], c = h[2], d = h[3], f, t, x, i;
    for (i = 0; i < 64; i++) {
      if (i < 16) f = (b & c) | (~b & d);
      else if (i < 32) f = (d & b) | (~d & c);
      else if (i < 48) f = b ^ c ^ d;
      else f = c ^ (b | ~d);
      t = d; d = c; c = b;
      x = (a + f + MD5_K[i] + M[MD5_G[i]]) | 0;
      b = (b + ((x << MD5_S[i]) | (x >>> (32 - MD5_S[i])))) | 0;
      a = t;
    }
    h[0] = (h[0] + a) | 0; h[1] = (h[1] + b) | 0; h[2] = (h[2] + c) | 0; h[3] = (h[3] + d) | 0;
  }

  function md5Puro(u8) {
    var h = [0x67452301, 0xefcdab89 | 0, 0x98badcfe | 0, 0x10325476], M = new Int32Array(16);
    var n = u8.length, cheio = n - (n % 64), o = 0, prox = PASSO_PROGRESSO;
    for (; o < cheio; o += 64) {
      md5Bloco(h, u8, o, M);
      if (o >= prox) { prox += PASSO_PROGRESSO; avanca(o / n); }
    }
    var resto = n - cheio, cauda = new Uint8Array(resto < 56 ? 64 : 128);
    cauda.set(u8.subarray(cheio));
    cauda[resto] = 0x80;
    var bitsBaixo = (n % 0x20000000) * 8, bitsAlto = Math.floor(n / 0x20000000), L = cauda.length - 8;
    for (var k = 0; k < 4; k++) { cauda[L + k] = (bitsBaixo >>> (8 * k)) & 255; cauda[L + 4 + k] = (bitsAlto >>> (8 * k)) & 255; }
    for (o = 0; o < cauda.length; o += 64) md5Bloco(h, cauda, o, M);
    avanca(1);
    var s = '';
    for (var w = 0; w < 4; w++) for (k = 0; k < 4; k++) s += ('0' + ((h[w] >>> (8 * k)) & 255).toString(16)).slice(-2);
    return s;
  }

  /* CRC32 "slicing-by-8": 8 tabelas, 8 bytes por volta (a tabela simples fazia ~30 MB/s) */
  var CRC_T = (function () {
    var t = new Int32Array(256 * 8), i, k, c;
    for (i = 0; i < 256; i++) { c = i; for (k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[i] = c; }
    for (i = 0; i < 256; i++) for (k = 1; k < 8; k++) t[k * 256 + i] = (t[(k - 1) * 256 + i] >>> 8) ^ t[t[(k - 1) * 256 + i] & 255];
    return t;
  })();
  function crc32Puro(u8) {
    var T = CRC_T, c = -1, n = u8.length, i = 0;
    while (i < n) {
      var fimTrecho = Math.min(n, i + PASSO_PROGRESSO), fim8 = i + ((fimTrecho - i) & ~7);
      for (; i < fim8; i += 8) {
        var a = c ^ (u8[i] | (u8[i + 1] << 8) | (u8[i + 2] << 16) | (u8[i + 3] << 24));
        c = T[1792 + (a & 255)] ^ T[1536 + ((a >>> 8) & 255)] ^ T[1280 + ((a >>> 16) & 255)] ^ T[1024 + (a >>> 24)] ^
            T[768 + u8[i + 4]] ^ T[512 + u8[i + 5]] ^ T[256 + u8[i + 6]] ^ T[u8[i + 7]];
      }
      for (; i < fimTrecho; i++) c = T[(c ^ u8[i]) & 255] ^ (c >>> 8);
      avanca(i / n);
    }
    avanca(1);
    return hex8(~c);
  }

  /* A mesma ROM é medida em vários passos DENTRO de uma operação (conferir, candidato,
     catálogo). O cache vive só enquanto a operação roda (comRelator abre e fecha) e é
     jogado fora no fim: um array alterado pelo chamador entre duas chamadas nunca herda
     o hash velho (LAUDO D9, que pegou a versão anterior com WeakMap permanente). */
  var cacheOp = null;
  function md5(u8) {
    if (cacheOp && cacheOp.md5.has(u8)) return cacheOp.md5.get(u8);
    var v = md5Puro(ehU8Local(u8) ? u8 : paraU8(u8));
    if (cacheOp && typeof u8 === 'object') cacheOp.md5.set(u8, v);
    return v;
  }
  function crc32(u8) {
    if (cacheOp && cacheOp.crc.has(u8)) return cacheOp.crc.get(u8);
    var v = crc32Puro(ehU8Local(u8) ? u8 : paraU8(u8));
    if (cacheOp && typeof u8 === 'object') cacheOp.crc.set(u8, v);
    return v;
  }
  function ehU8Local(x) { return x instanceof Uint8Array; }   /* subarray serve: estes hashes leem no lugar */
  function shaHex(algo, u8) {
    var c = raiz.crypto && raiz.crypto.subtle;
    if (!c) return Promise.resolve(null);   /* http:// sem contexto seguro: sem SHA, o resto funciona */
    return c.digest(algo, paraU8(u8)).then(function (buf) {
      var v = new Uint8Array(buf), s = '';
      for (var i = 0; i < v.length; i++) s += ('0' + v[i].toString(16)).slice(-2);
      return s;
    });
  }
  function sha1(u8) { return shaHex('SHA-1', u8); }
  function sha256(u8) { return shaHex('SHA-256', u8); }

  /* Identidade de um ARQUIVO DE PATCH: SHA-1 e SHA-256, nunca CRC32. O CRC32 de todo
     BPS/UPS inteiro dá sempre 2144DF1C (o arquivo termina no próprio CRC32), então
     não distingue patch nenhum. (FORMATOS.md, armadilha 9) */
  function hashArquivo(bytes) {
    var u8 = paraU8(bytes);
    return Promise.all([sha1(u8), sha256(u8)]).then(function (h) {
      return { sha1: h[0], sha256: h[1], tamanho: u8.length };
    });
  }

  /* ---------------------------------------------------------------- sistemas */

  function extensao(nome) {
    var m = /\.([a-z0-9]+)$/i.exec(nome || '');
    return m ? m[1].toLowerCase() : '';
  }

  function temINES(u8) {
    return u8.length > 16 && u8[0] === 0x4E && u8[1] === 0x45 && u8[2] === 0x53 && u8[3] === 0x1A;
  }

  /* Ordem de bytes da ROM de N64 pelos 4 primeiros bytes (o valor fixo 0x80371240):
       80 37 12 40  .z64  big-endian, a ordem "nativa" — a que os nossos md5 cobrem
       37 80 40 12  .v64  byteswapped (pares trocados)
       40 12 37 80  .n64  little-endian (palavras de 32 bits invertidas) */
  function ordemN64(u8) {
    if (u8.length < 0x1000 || u8.length % 4) return null;
    var a = u8[0], b = u8[1], c = u8[2], d = u8[3];
    if (a === 0x80 && b === 0x37 && c === 0x12 && d === 0x40) return 'z64';
    if (a === 0x37 && b === 0x80 && c === 0x40 && d === 0x12) return 'v64';
    if (a === 0x40 && b === 0x12 && c === 0x37 && d === 0x80) return 'n64';
    return null;
  }

  function paraZ64(u8, ordem) {
    var r = new Uint8Array(u8.length), i;
    if (ordem === 'v64') {
      for (i = 0; i < u8.length; i += 2) { r[i] = u8[i + 1]; r[i + 1] = u8[i]; }
    } else if (ordem === 'n64') {
      for (i = 0; i < u8.length; i += 4) { r[i] = u8[i + 3]; r[i + 1] = u8[i + 2]; r[i + 2] = u8[i + 1]; r[i + 3] = u8[i]; }
    } else {
      r.set(u8);
    }
    return r;
  }

  /* .smd do Mega Drive (Super Magic Drive): 512 B de cabeçalho + blocos de 16 KB
     com os bytes ímpares na primeira metade e os pares na segunda. Detecção e ordem
     iguais às do Genesis Plus GX (core/loadrom.c): não há "SEGA" em 0x100, o tamanho
     é múltiplo de 512 e o número de setores de 512 B é ímpar (o do cabeçalho). Para
     cada bloco: dst[2i] = bloco[0x2000 + i], dst[2i+1] = bloco[i]. */
  function ehSMD(u8) {
    if (u8.length < 512 + 0x4000 || u8.length % 512 || !((u8.length / 512) & 1)) return false;
    return !(u8[0x100] === 0x53 && u8[0x101] === 0x45 && u8[0x102] === 0x47 && u8[0x103] === 0x41);
  }
  function desintercalarSMD(u8) {
    var corpo = u8.subarray(512), r = new Uint8Array(corpo.length);
    for (var b = 0; b + 0x4000 <= corpo.length; b += 0x4000) {
      for (var i = 0; i < 0x2000; i++) {
        r[b + 2 * i] = corpo[b + 0x2000 + i];
        r[b + 2 * i + 1] = corpo[b + i];
      }
    }
    var resto = corpo.length % 0x4000;          /* sobra que não fecha bloco: copia como está */
    if (resto) r.set(corpo.subarray(corpo.length - resto), corpo.length - resto);
    return r;
  }

  /* Cabeçalho de copiadora do SNES: 512 bytes antes da ROM, que é múltipla de 1 KB. */
  function temCopiadoraSNES(u8, nome) {
    var ext = extensao(nome);
    var extOk = !ext || ['sfc', 'smc', 'swc', 'fig', 'bin'].indexOf(ext) >= 0;
    return extOk && u8.length > 512 && (u8.length % 1024) === 512;
  }

  /* As versões da ROM que o aplicador aceita testar, em ordem. Cada uma diz como
     foi feita — é isso que aparece em `cabecalho` para a pessoa entender por que
     a ROM dela, que não bateu inteira, bateu depois. */
  function candidatos(u8, nome, esperado) {
    var lista = [{ bytes: u8, cabecalho: { tipo: null, removido: false, descricao: 'arquivo inteiro, como veio' } }];
    var cab = esperado && esperado.corpo && esperado.corpo.cabecalho_hex;

    if (temINES(u8)) {
      var corpo = u8.subarray(16);
      /* Mesmo corpo, cabeçalho diferente (NES 2.0, lixo "DiskDude!" nos bytes 7-15,
         mapper declarado de outro jeito): o md5 do catálogo cobre o arquivo COM o
         cabeçalho original, então se usa o cabeçalho ORIGINAL guardado no catálogo —
         não um reconstruído. Só entra se o corpo bater (conferido em conferirRom). */
      if (cab) lista.push({ bytes: juntar(deHex(cab), corpo), corpo: corpo,
        cabecalho: { tipo: 'iNES', removido: false, substituido: true,
          descricao: 'cabeçalho iNES trocado pelo do cartucho original (o conteúdo do jogo é o mesmo)' } });
      lista.push({ bytes: corpo.slice(), cabecalho: { tipo: 'iNES', removido: true, descricao: 'sem o cabeçalho iNES de 16 bytes' } });
      /* trainer de 512 B (byte 6, bit 2) logo depois do cabeçalho: o RomPatcher não trata */
      if ((u8[6] & 0x04) && u8.length > 16 + 512) {
        var semTrainer = u8.subarray(16 + 512);
        if (cab) lista.push({ bytes: juntar(deHex(cab), semTrainer), corpo: semTrainer,
          cabecalho: { tipo: 'iNES+trainer', removido: true, substituido: true,
            descricao: 'sem o trainer de 512 bytes, com o cabeçalho iNES do cartucho original' } });
        lista.push({ bytes: semTrainer.slice(), cabecalho: { tipo: 'iNES+trainer', removido: true,
          descricao: 'sem o cabeçalho iNES e sem o trainer de 512 bytes' } });
      }
    } else if (cab && (extensao(nome) === 'nes' || !extensao(nome) ||
               (esperado.corpo && u8.length === esperado.corpo.tamanho))) {
      /* extensão qualquer (.bin, .rom): vale quando o tamanho é exatamente o do corpo */
      /* ROM de NES sem cabeçalho nenhum: põe o cabeçalho original na frente. */
      lista.push({ bytes: juntar(deHex(cab), u8), corpo: u8,
        cabecalho: { tipo: 'iNES', removido: false, adicionado: true,
          descricao: 'a ROM veio sem cabeçalho iNES; foi posto o do cartucho original' } });
    }

    if (temCopiadoraSNES(u8, nome) ||
        (esperado && esperado.tamanho_original && u8.length === esperado.tamanho_original + 512 && !temINES(u8))) {
      /* sem excluir o que "parece" .smd: todo SNES + 512 B tem o tamanho de um .smd, e o candidato
         só vale se o hash bater (SNES .rom com cabeçalho era recusado com motivo falso, teste t2) */
      lista.push({ bytes: u8.slice(512), cabecalho: { tipo: 'SNES copiadora', removido: true, descricao: 'sem o cabeçalho de copiadora de 512 bytes' } });
    }

    if (ehSMD(u8)) {
      lista.push({ bytes: desintercalarSMD(u8), cabecalho: { tipo: 'SMD', removido: true, convertido: true,
        descricao: 'arquivo .smd (cabeçalho de 512 bytes e blocos intercalados) convertido para .bin' } });
    }

    var ordem = ordemN64(u8);
    if (ordem && ordem !== 'z64') {
      lista.push({ bytes: paraZ64(u8, ordem), cabecalho: { tipo: 'N64 ' + ordem, removido: false, convertido: true,
        descricao: 'ordem de bytes .' + ordem + ' convertida para .z64 (big-endian)' } });
    }
    return lista;
  }

  /* ---------------------------------------------------------------- shim do núcleo

     O vcdiff.js do núcleo (linha 161) chama uma função GLOBAL `adler32(binFile, pos, len)`
     para conferir cada janela do xdelta, e ela não existe em lugar nenhum do Rom Patcher —
     a interface dele só não tropeça porque aplica com validate=false. Nós aplicamos com
     validate=true, e todo xdelta padrão (Adler-32 ligado) caía em "adler32 is not defined"
     (LAUDO D2). O shim fica AQUI, fora do vendor, e vale no worker também (o worker carrega
     este arquivo). Mesmo valor (sem sinal) que o winHeader.adler32 lido do patch. */
  if (typeof raiz.adler32 !== 'function') {
    raiz.adler32 = function (bf, pos, len) { return bf.hashAdler32(pos, len); };
  }

  /* ---------------------------------------------------------------- catálogo */

  var catalogo = null;

  function carregarCatalogo(url) {
    url = url || 'catalogo.json';
    return raiz.fetch(url, { cache: 'no-cache', credentials: 'omit' }).then(function (r) {
      if (!r.ok) throw PCErro('CATALOGO_INDISPONIVEL', 'Não foi possível carregar a lista de jogos (' + r.status + ').');
      return r.json();
    }).then(function (j) {
      var lista = Array.isArray(j) ? j : j.jogos;
      if (!Array.isArray(lista)) throw PCErro('CATALOGO_INVALIDO', 'A lista de jogos veio num formato inesperado.');
      catalogo = lista;
      return lista;
    });
  }

  /* ---------------------------------------------------------------- patch */

  var NOMES_FORMATO = { IPS: 'IPS', UPS: 'UPS', BPS: 'BPS', APS: 'APS (N64)', APSGBA: 'APS (GBA)',
    PPF: 'PPF', RUP: 'RUP', BDF: 'BSDIFF', PMSR: 'PMSR', VCDIFF: 'xdelta (VCDIFF)' };

  /* O parser de IPS do núcleo lê até o fim do arquivo e não exige o EOF: um IPS cortado
     no meio (download interrompido) virava uma ROM meio patcheada, sem aviso (LAUDO D3).
     Aqui o IPS tem de estar INTEIRO: cada registro completo e o marcador EOF no fim.
     Depois do EOF valem 0 bytes, os 3 do truncamento (Lunar IPS) ou o JSON do EBP. */
  function conferirIPSInteiro(u8) {
    var o = 5, n = u8.length;
    while (true) {
      if (o + 3 > n) return 'o arquivo acaba antes do marcador de fim (EOF)';
      if (u8[o] === 0x45 && u8[o + 1] === 0x4F && u8[o + 2] === 0x46) {
        var resto = n - (o + 3);
        if (resto === 0 || resto === 3 || u8[o + 3] === 0x7B /* '{' do EBP */) return null;
        /* dado depois do EOF que não é truncamento nem EBP: pode ser um registro no
           endereço 0x454F46 (raro, o Flips evita). Tenta seguir como registro. */
      }
      if (o + 5 > n) return 'o último registro está cortado';
      var tam = (u8[o + 3] << 8) | u8[o + 4];
      o += 5;
      if (tam === 0) { if (o + 3 > n) return 'o último registro está cortado'; o += 3; }
      else { if (o + tam > n) return 'o último registro está cortado'; o += tam; }
    }
  }

  function analisarPatch(u8, nome) {
    if (u8.length >= 5 && u8[0] === 0x50 && u8[1] === 0x41 && u8[2] === 0x54 && u8[3] === 0x43 && u8[4] === 0x48) {
      var defeito = conferirIPSInteiro(u8);
      if (defeito) throw PCErro('PATCH_INVALIDO', 'O patch IPS está incompleto: ' + defeito +
        '. Quase sempre é download interrompido — baixe o patch de novo.');
    }
    var f = binFile(u8, nome || 'patch.bin');
    var p;
    try { p = RomPatcher.parsePatchFile(f); }
    catch (e) { throw PCErro('PATCH_INVALIDO', 'O arquivo de patch está corrompido ou incompleto: ' + e.message); }
    if (!p) throw PCErro('PATCH_DESCONHECIDO', 'Formato de patch não reconhecido. Os aceitos são IPS, BPS, UPS, xdelta (VCDIFF), PPF, APS, RUP e BSDIFF.');
    return p;
  }

  function formatoDe(p) {
    var n = p.constructor && p.constructor.name;
    if (n === 'IPS' && p.EBPmetadata) return 'EBP (IPS com metadados)';
    return NOMES_FORMATO[n] || n || 'desconhecido';
  }

  function identificarPatch(bytes, nome) {
    var u8 = paraU8(bytes);
    var p = analisarPatch(u8, nome);
    var r = { formato: formatoDe(p), confereEntrada: false, confereSaida: false };
    var n = p.constructor.name;
    if (n === 'BPS') {
      r.confereEntrada = true; r.crcEntrada = hex8(p.sourceChecksum); r.tamanhoEntrada = p.sourceSize;
      r.confereSaida = true;   r.crcSaida = hex8(p.targetChecksum);   r.tamanhoSaida = p.targetSize;
    } else if (n === 'UPS') {
      r.confereEntrada = true; r.crcEntrada = hex8(p.checksumInput);  r.tamanhoEntrada = p.sizeInput;
      r.confereSaida = true;   r.crcSaida = hex8(p.checksumOutput);   r.tamanhoSaida = p.sizeOutput;
    } else if (n === 'RUP') {
      r.confereEntrada = true; r.md5Entrada = (p.files || []).map(function (x) { return x.sourceMD5; });
      r.confereSaida = true;
    } else if (n === 'APS' || n === 'APSGBA' || n === 'PMSR') {
      r.confereEntrada = typeof p.validateSource === 'function';
    } else if (n === 'PPF') {
      /* PPF 2 sempre, PPF 3 quando o byte 57 liga: 1024 B do disco que a imagem tem de
         ter em 0x9320 (BIN) ou 0x80A0 (GI). O RomPatcher lê e nunca compara — quem
         compara é verificadorDe(), abaixo. */
      r.confereEntrada = !!(p.blockCheck && p.blockCheck.length === 1024);
      if (r.confereEntrada) r.blocoValidacao = { offset: offsetBlocoPPF(p), tamanho: 1024 };
      if (p.version === 2 && p.inputFileSize) r.tamanhoEntrada = p.inputFileSize;
    } else if (n === 'VCDIFF') {
      /* o xdelta confere cada janela por adler32, quando o arquivo traz; não há crc da ROM inteira */
      r.confereSaida = false;
    }
    if (n === 'IPS') {
      r.aviso = 'IPS não guarda conferência nenhuma: aplicado na ROM errada, ele "funciona" e entrega um jogo quebrado. Confira a ROM pelo MD5 antes.';
    }
    return r;
  }

  /* ---------------------------------------------------------------- ROM */

  /* esperado: um item do catálogo (usa md5_original, crc32_original, tamanho_original
     e corpo) ou um objeto simples { md5 } / { crc32 }. Sem esperado, só mede. */
  function conferirRom(bytesRom, esperado, nomeArquivo) {
    var u8 = paraU8(bytesRom);
    if (!u8.length) throw PCErro('ENTRADA_VAZIA', 'O arquivo da ROM está vazio (0 byte).');
    var alvoMd5 = esperado && (esperado.md5_original || esperado.md5) || null;
    var alvoCrc = esperado && (esperado.crc32_original || esperado.crc32) || null;
    var alvoTam = esperado && esperado.tamanho_original || null;
    var corpo = esperado && esperado.corpo || null;

    if (rel) rel.sub(0, 0.6);
    var m = md5(u8);
    if (rel) rel.sub(0.6, 0.85);
    var c32 = crc32(u8);
    if (rel) rel.sub(0.85, 1);
    var res = { ok: null, md5: m, crc32: c32, sha1: null, tamanho: u8.length,
      cabecalho: { tipo: null, removido: false }, motivo: '', bytes: u8 };

    return sha1(u8).then(function (s) {
      if (rel) rel.sub(1, 1);
      res.sha1 = s;
      if (!alvoMd5 && !alvoCrc) { res.motivo = 'Sem ROM esperada para comparar: só medida.'; return res; }

      var cands = candidatos(u8, nomeArquivo, esperado);
      for (var i = 0; i < cands.length; i++) {
        var c = cands[i];
        /* tamanho primeiro: md5 de 64 MB em JavaScript custa, e tamanho diferente já decide */
        if (alvoTam && c.bytes.length !== alvoTam) continue;
        /* NES com cabeçalho trocado: o CORPO é que tem de bater com o do catálogo */
        if (c.corpo && corpo) {
          if (c.corpo.length !== corpo.tamanho || md5(c.corpo) !== corpo.md5) continue;
        }
        var bate = alvoMd5 ? md5(c.bytes) === alvoMd5 : crc32(c.bytes) === alvoCrc;
        if (bate) {
          res.ok = true;
          res.bytes = c.bytes;
          res.cabecalho = c.cabecalho;
          res.motivo = i === 0 ? 'A ROM é exatamente a esperada.' : 'A ROM é a esperada: ' + c.cabecalho.descricao + '.';
          if (i > 0) { res.normalizada = { md5: md5(c.bytes), crc32: crc32(c.bytes), tamanho: c.bytes.length }; }
          return res;
        }
      }
      res.ok = false;
      res.motivo = motivoRecusa(u8, esperado, nomeArquivo, res);
      if (esperado.md5_resultado && res.md5 === esperado.md5_resultado) res.jaTraduzida = true;
      return res;
    });
  }

  function motivoRecusa(u8, esperado, nome, hashes) {
    if (esperado && esperado.md5_resultado && hashes && hashes.md5 === esperado.md5_resultado) {
      return 'Esta ROM já está traduzida com este patch: é exatamente o resultado dele. Não precisa aplicar de novo.';
    }
    var partes = ['Esta não é a ROM que o patch espera.'];
    var dif = esperado && esperado.tamanho_original ? u8.length - esperado.tamanho_original : 0;
    if (dif === 16 || dif === -16 || dif === 512 || dif === -512) {
      partes.push('A diferença de tamanho é de exatamente ' + Math.abs(dif) + ' bytes, o tamanho de um cabeçalho ' +
        (Math.abs(dif) === 16 ? 'iNES' : 'de copiadora') + ' — mas, mesmo ' + (dif > 0 ? 'sem' : 'com') +
        ' ele, o conteúdo não bate: é outra revisão, outra região ou uma ROM já modificada.');
    }
    if (esperado && esperado.nome_rom_esperada) partes.push('O patch vai sobre "' + esperado.nome_rom_esperada + '".');
    if (esperado && esperado.tamanho_original && u8.length !== esperado.tamanho_original) {
      partes.push('O tamanho não bate: a sua tem ' + u8.length.toLocaleString('pt-BR') + ' bytes, a esperada tem ' +
        esperado.tamanho_original.toLocaleString('pt-BR') + '.');
    } else {
      partes.push('O tamanho bate, mas o conteúdo é outro — outra revisão, outra região, ou uma ROM já modificada.');
    }
    var ref = [];
    if (esperado.md5_original || esperado.md5) ref.push('MD5 ' + (esperado.md5_original || esperado.md5));
    if (esperado.crc32_original) ref.push('CRC32 ' + esperado.crc32_original);
    if (esperado.sha1_original) ref.push('SHA-1 ' + esperado.sha1_original);
    partes.push('Procure a ROM com ' + ref.join(', ') + '.');
    return partes.join(' ');
  }

  /* ---------------------------------------------------------------- aplicar */

  /* Nome do arquivo de saída. O TEXTO é da interface (ui.arquivo_saida_modelo); o
     aplicador só preenche e põe a extensão, que depende do que aconteceu com os bytes
     (.smd vira .bin, N64 sai .z64).
       opcoes.nomeSaida        nome pronto, sem extensão — usado como veio
       opcoes.modeloNomeSaida  modelo com {jogo} {idioma} {versao} {rom} {patch}
       opcoes.valoresNome      valores que a interface quer impor (ex.: {idioma:'English'})
     Sem nada disso: MODELO_PADRAO (sem marca no nome; a decisão de pôr "[Patch Clan]" é do dono). */
  var MODELO_PADRAO = { catalogo: '{jogo} ({idioma}) {versao}', livre: '{patch}' };
  function nomeSaidaDe(opcoes, ext) {
    var e = opcoes.esperado, base;
    if (opcoes.nomeSaida) {
      base = String(opcoes.nomeSaida);
    } else {
      var v = {
        jogo: e ? (e.jogo || '') : '',
        idioma: e ? (e.idioma_rotulo || (e.idioma || '').toUpperCase()) : '',
        versao: e ? versaoCurta(e.versao, e.idiomas || [e.idioma]) : '',
        rom: (e && e.nome_rom_esperada ? e.nome_rom_esperada : (opcoes.nomeRom || 'rom')).replace(/\.[^.]+$/, ''),
        patch: (opcoes.nomePatch || 'rom').replace(/\.[^.]+$/, '')
      };
      var imp = opcoes.valoresNome || {};
      for (var k in imp) if (imp[k] != null) v[k] = String(imp[k]);
      var modelo = opcoes.modeloNomeSaida || (e ? MODELO_PADRAO.catalogo : MODELO_PADRAO.livre);
      base = modelo.replace(/\{(\w+)\}/g, function (_, n) { return v[n] != null ? v[n] : ''; });
    }
    base = base.replace(/[\\/:*?"<>|\u0000-\u001f]/g, ' ')   /* proibidos em nome de arquivo */
               .replace(/\(\s*\)|\[\s*\]/g, '')              /* parêntese vazio de campo vazio */
               .replace(/\s+/g, ' ').trim() || 'rom';
    if (!ext && e && e.nome_rom_esperada) ext = extensao(e.nome_rom_esperada);
    return base + (ext ? '.' + ext : '');
  }

  /* "English v1.0 · Português v1.0" -> a versão do idioma deste patch, sem o nome
     do idioma ("v1.0"). Texto de versão sem número não vai para o nome do arquivo. */
  var NOME_IDIOMA = { en: 'english', pt: 'portugu', es: 'espa' };
  function versaoCurta(versao, idiomas) {
    if (!versao) return '';
    var partes = String(versao).split(/\s*[·|]\s*/), escolhida = partes[0];
    if (partes.length > 1) {
      for (var i = 0; i < partes.length; i++) {
        var low = partes[i].toLowerCase();
        if (idiomas.some(function (id) { return NOME_IDIOMA[id] && low.indexOf(NOME_IDIOMA[id]) === 0; })) { escolhida = partes[i]; break; }
      }
    }
    var m = /v\d+(?:\.\d+)*/i.exec(escolhida);
    if (!m) return '';
    var resto = escolhida.replace(/^(english|portugu\S*|espa\S*)\s*/i, '');
    return /^v\d/i.test(resto) ? m[0] : resto.trim();
  }

  function offsetBlocoPPF(p) { return p.version === 3 && p.imageType === 1 ? 0x80A0 : 0x9320; }

  /* A conferência de entrada de um patch de terceiro. É NOSSA, e roda antes de aplicar:
     o RomPatcher.applyPatch vem com requireValidation desligado (FORMATOS.md, §1), e
     aqui não se depende dele. Devolve null quando o formato não traz conferência. */
  function verificadorDe(patch, info) {
    var n = patch.constructor.name;
    if (info.crcEntrada) {
      return { metodo: 'crc32 do patch', exige: 'CRC32 ' + info.crcEntrada,
        testa: function (b) { return (!info.tamanhoEntrada || b.length === info.tamanhoEntrada) && crc32(b) === info.crcEntrada; } };
    }
    if (n === 'PPF' && info.confereEntrada) {
      var off = offsetBlocoPPF(patch), bloco = patch.blockCheck;
      return { metodo: 'bloco de validação do PPF', exige: '1024 bytes em 0x' + off.toString(16).toUpperCase(),
        testa: function (b) {
          if (patch.version === 2 && patch.inputFileSize && b.length !== patch.inputFileSize) return false;
          if (b.length < off + 1024) return false;
          for (var i = 0; i < 1024; i++) if (b[off + i] !== bloco[i]) return false;
          return true;
        } };
    }
    if (n === 'RUP') {
      var lista = [];
      (patch.files || []).forEach(function (f) { lista.push(f.sourceMD5, f.targetMD5); });
      return { metodo: 'md5 do patch (RUP)', exige: 'MD5 ' + (info.md5Entrada || []).join(' ou '),
        testa: function (b) { return lista.indexOf(md5(b)) >= 0; } };
    }
    if (typeof patch.validateSource === 'function') {
      return { metodo: 'conferência do patch', exige: n === 'APS' ? 'ID e CRC do cabeçalho N64' : 'a ROM original do patch',
        testa: function (b) { return !!patch.validateSource(binFile(b, 'rom.bin')); } };
    }
    return null;
  }

  /* opcoes:
       esperado        item do catálogo (modo "jogo nosso") — confere a ROM rigidamente
       nomeRom         nome do arquivo da ROM (extensão ajuda a achar cabeçalho)
       nomePatch       nome do arquivo do patch (dá o nome da saída no modo livre)
       forcar          true = aplica mesmo com a entrada não conferindo (SÓ modo livre;
                       com `esperado` é ignorado: jogo nosso nunca sai de ROM errada)
     Devolve Promise<{ bytes, nomeSaida, conferencia:{ entrada, saida }, formato }>. */
  function aplicar(bytesRom, bytesPatch, opcoes) {
    opcoes = opcoes || {};
    var u8Rom = paraU8(bytesRom), u8Patch = paraU8(bytesPatch);
    if (!u8Rom.length) throw PCErro('ENTRADA_VAZIA', 'O arquivo da ROM está vazio (0 byte).');
    if (!u8Patch.length) throw PCErro('ENTRADA_VAZIA', 'O arquivo do patch está vazio (0 byte).');
    var patch = analisarPatch(u8Patch, opcoes.nomePatch);
    var info = identificarPatch(u8Patch, opcoes.nomePatch);
    var esperado = opcoes.esperado || null;
    var hashPatch = null;

    return Promise.resolve().then(function () {
      if (rel) rel.fase('ler', 0, 50);
      return hashArquivo(u8Patch);
    }).then(function (hp) {
      hashPatch = hp;
      if (esperado) {
        if (!patchEhOPublicado(esperado, u8Patch, hp)) {
          throw PCErro('PATCH_NAO_E_ESTE', 'Este arquivo de patch não é o ' + (esperado.jogo || 'do jogo escolhido') +
            ' que o Patch Clan publicou (SHA-256 diferente). Baixe de novo pelo link oficial.');
        }
        return conferirRom(u8Rom, esperado, opcoes.nomeRom).then(function (c) {
          if (!c.ok) throw PCErro('ROM_NAO_CONFERE', c.motivo, semBytes(c));
          return { bytes: c.bytes, entrada: { conferida: true, metodo: 'md5 do catálogo', ok: true,
            md5: c.md5, crc32: c.crc32, sha1: c.sha1, cabecalho: c.cabecalho, motivo: c.motivo } };
        });
      }
      /* modo livre: a conferência que o patch traz, tentada na ROM como veio e nas
         versões sem cabeçalho / desintercalada / convertida */
      var ver = verificadorDe(patch, info);
      if (ver) {
        var cands = candidatos(u8Rom, opcoes.nomeRom, null);
        for (var i = 0; i < cands.length; i++) {
          if (ver.testa(cands[i].bytes)) {
            var c0 = cands[i];
            return { bytes: c0.bytes, entrada: { conferida: true, metodo: ver.metodo, ok: true,
              crc32: info.crcEntrada || undefined, cabecalho: c0.cabecalho,
              motivo: 'A ROM confere com o que o patch exige (' + ver.exige + ')' +
                (c0.cabecalho.tipo ? ' — ' + c0.cabecalho.descricao : '') + '.' } };
          }
        }
        if (!opcoes.forcar) throw PCErro('ROM_NAO_CONFERE', 'O patch foi feito para outra ROM: ele exige ' + ver.exige +
          (info.crcEntrada ? ' e a sua tem CRC32 ' + crc32(u8Rom) : ', e a sua não confere') + '.',
          { metodo: ver.metodo, exige: ver.exige, crcRom: crc32(u8Rom) });
        return { bytes: u8Rom, entrada: { conferida: true, ok: false, forcado: true, metodo: ver.metodo,
          motivo: 'Aplicado à força numa ROM que o patch não reconhece.' } };
      }
      return { bytes: u8Rom, entrada: { conferida: false, ok: null, metodo: 'nenhum',
        motivo: 'Este formato não traz conferência da ROM de entrada.' } };
    }).then(function (ent) {
      var rom = binFile(ent.bytes, opcoes.nomeRom || 'rom.bin');
      var saidaBin;
      /* validar=true liga as conferências DO NÚCLEO (entrada e saída do BPS/UPS/APS/RUP,
         adler32 por janela do xdelta) por cima da nossa. Só desliga quando a pessoa
         mandou forçar uma ROM que não confere. */
      var validar = !ent.entrada.forcado;
      if (rel) { rel.fase('aplicar', 50, 50); rel.fase('aplicar', 50, 70); }   /* o núcleo não informa progresso: salta ao fim da faixa */
      try { saidaBin = patch.apply(rom, validar); }
      catch (e) {
        if (e && e.name === 'PCErro') throw e;
        if (/Source ROM checksum mismatch/i.test(e.message)) throw PCErro('ROM_NAO_CONFERE', 'O patch foi feito para outra ROM (a conferência do próprio patch recusou).');
        if (/Target ROM checksum mismatch|checksum mismatch/i.test(e.message)) {
          /* quando a entrada NÃO foi conferida (xdelta, IPS…), resultado errado quase sempre é ROM errada */
          throw PCErro('SAIDA_NAO_CONFERE', ent.entrada.conferida
            ? 'O resultado não confere com o que o patch declara. Nada foi salvo. Tente baixar o patch de novo.'
            : 'O resultado não confere com o que o patch declara, e este formato não confere a ROM antes. Quase sempre é a ROM: ' +
              'o patch foi feito para outra (outra revisão, outra região, com ou sem cabeçalho). Nada foi salvo.');
        }
        if (/allocation failed|out of memory|Invalid array length|Array buffer/i.test(e.message)) {
          throw PCErro('SEM_MEMORIA', 'O navegador não teve memória para este arquivo. Feche outras abas ou use um computador com mais memória.');
        }
        if (e instanceof TypeError || e instanceof RangeError) {
          /* leitura além do fim do patch: arquivo cortado ou estragado (LAUDO D10, xdelta truncado) */
          throw PCErro('PATCH_INVALIDO', 'O patch está incompleto ou corrompido (o arquivo acaba antes do que ele mesmo declara). Baixe o patch de novo.');
        }
        var msg = /secondary decompressor|deltaIndicator/.test(e.message)
          ? 'Este xdelta foi gerado com compressão secundária, que o aplicador não lê. Quem fez o patch precisa gerá-lo com "xdelta3 -S none".'
          : /custom code table/.test(e.message)
          ? 'Este xdelta usa tabela de código personalizada, que o aplicador não lê.'
          : 'O patch não pôde ser aplicado: ' + e.message;
        throw PCErro('FALHA_AO_APLICAR', msg);
      }
      var saida = paraU8(saidaBin._u8array);
      if (rel) { rel.fase('conferir', 70, 100); rel.sub(0, 0.7); }
      var mSaida = md5(saida);
      if (rel) rel.sub(0.7, 1);
      var conf = { conferida: false, ok: null, md5: mSaida, crc32: crc32(saida), tamanho: saida.length };
      if (esperado && esperado.md5_resultado) {
        conf.conferida = true; conf.metodo = 'md5 do catálogo'; conf.ok = conf.md5 === esperado.md5_resultado;
      } else if (info.crcSaida) {
        conf.conferida = true; conf.metodo = 'crc32 do patch'; conf.ok = conf.crc32 === info.crcSaida;
      }
      if (conf.ok === false && !ent.entrada.forcado) {
        throw PCErro('SAIDA_NAO_CONFERE', 'O resultado não é o esperado (' + conf.metodo + ' diferente). Nada foi salvo. Tente baixar o patch de novo.', conf);
      }
      var ext = esperado && esperado.nome_rom_esperada ? extensao(esperado.nome_rom_esperada) : extensao(opcoes.nomeRom);
      if (ent.entrada.cabecalho && ent.entrada.cabecalho.tipo === 'SMD') ext = 'bin';
      /* N64 sai sempre em .z64 quando os bytes estão em big-endian — a ficha pode chamar a ROM
         de ".n64" (Pocket Monsters Stadium) e os bytes serem .z64 */
      if (ordemN64(saida) === 'z64') ext = 'z64';
      return {
        bytes: saida,
        nomeSaida: nomeSaidaDe(opcoes, ext),
        formato: info.formato,
        conferencia: { entrada: ent.entrada, saida: conf,
          patch: { sha1: hashPatch.sha1, sha256: hashPatch.sha256, tamanho: hashPatch.tamanho } }
      };
    });
  }

  /* cópia rasa sem o campo `bytes` — detalhe de erro não carrega a ROM */
  function semBytes(o) {
    if (!o || typeof o !== 'object') return o;
    var r = {}; for (var k in o) if (k !== 'bytes') r[k] = o[k];
    return r;
  }

  /* O patch é o publicado? SHA-256 quando o catálogo traz; md5_patch só para catálogo antigo. */
  function patchEhOPublicado(item, u8, hp) {
    if (item.sha256_patch) return !!hp.sha256 && hp.sha256 === item.sha256_patch;
    if (item.md5_patch) return md5(u8) === item.md5_patch;
    return true;
  }

  /* Baixa o patch publicado de um item do catálogo. Só o PATCH trafega. */
  function baixarPatch(item) {
    if (!item || !item.url_patch) {
      return Promise.reject(PCErro('PATCH_SO_NO_PATREON', 'Este patch sai pelo Patreon do jogo. Baixe o arquivo lá e suba aqui.'));
    }
    /* ?v=<sha256>: o site (GitHub Pages) guarda o arquivo por 10 min na borda; o patch é
       atualizado NO MESMO LINK, e o catálogo novo não pode receber o arquivo velho */
    var url = item.url_patch + (item.sha256_patch ? (item.url_patch.indexOf('?') < 0 ? '?' : '&') + 'v=' + item.sha256_patch.slice(0, 16) : '');
    return raiz.fetch(url, { credentials: 'omit' }).then(function (r) {
      if (!r.ok) throw PCErro('PATCH_INDISPONIVEL', 'Não foi possível baixar o patch (' + r.status + ').');
      return r.arrayBuffer();
    }).then(function (ab) {
      var u8 = new Uint8Array(ab);
      return hashArquivo(u8).then(function (hp) {
        if (!patchEhOPublicado(item, u8, hp)) {
          throw PCErro('PATCH_NAO_E_ESTE', 'O patch baixado não bate com o catálogo (SHA-256 diferente). Recarregue a página.');
        }
        return u8;
      });
    });
  }

  /* ---------------------------------------------------------------- worker */

  /* Na página, conferirRom e aplicar rodam em app/worker.js: md5 de 16 MB em JavaScript
     leva segundos e travaria a tela. A API é a mesma (Promise). Dentro do worker e no
     Node não há `document`, e as funções rodam direto.

     Os bytes vão ao worker por CÓPIA, a não ser que a chamada peça `transferir: true`
     (aí o ArrayBuffer da página é transferido e fica vazio do lado de cá — é o que
     evita ter duas cópias de uma imagem de CD na memória). O resultado volta sempre
     por transferência, sem cópia. */
  var worker = null, pendentes = {}, proximoId = 1;

  function usarWorker() {
    return raiz.PCAplicador && raiz.PCAplicador.usarWorker !== false &&
      typeof Worker === 'function' && typeof document !== 'undefined' && !!URL_SCRIPT;
  }

  function falhaGeral(err) {
    Object.keys(pendentes).forEach(function (id) { pendentes[id].rejeita(err); });
    pendentes = {};
    if (worker) { try { worker.terminate(); } catch (e) {} }
    worker = null;
  }

  function obterWorker() {
    if (worker) return worker;
    worker = new Worker(new URL('worker.js', URL_SCRIPT).href);
    worker.onmessage = function (ev) {
      var d = ev.data, p = pendentes[d.id];
      if (!p) return;
      if (d.progresso) { if (p.progresso) { try { p.progresso(d.progresso); } catch (e) {} } return; }
      delete pendentes[d.id];
      if (d.erro) {
        var e = PCErro(d.erro.codigo, d.erro.message, d.erro.detalhe);
        p.rejeita(e);
      } else {
        p.resolve(d.valor);
      }
    };
    worker.onerror = function (ev) {
      /* o que chega aqui é o worker morrendo — quase sempre falta de memória */
      if (ev && ev.preventDefault) ev.preventDefault();
      falhaGeral(PCErro('SEM_MEMORIA', 'O navegador não teve memória para abrir este arquivo. Feche outras abas ou use um computador com mais memória.'));
    };
    return worker;
  }

  function bufferDe(x) {
    if (!x) return null;
    if (Object.prototype.toString.call(x) === '[object ArrayBuffer]') return x;
    if (ArrayBuffer.isView(x) && x.byteOffset === 0 && x.byteLength === x.buffer.byteLength) return x.buffer;
    return null;
  }

  function chamarWorker(fn, args, transferir, progresso) {
    return new Promise(function (resolve, rejeita) {
      var id = proximoId++, t = [];
      if (transferir) {
        [args[0], fn === 'aplicar' ? args[1] : null].forEach(function (x) {
          var b = bufferDe(x); if (b && t.indexOf(b) < 0) t.push(b);
        });
      }
      pendentes[id] = { resolve: resolve, rejeita: rejeita, progresso: progresso || null };
      try { obterWorker().postMessage({ id: id, fn: fn, args: args }, t); }
      catch (e) { delete pendentes[id]; rejeita(PCErro('SEM_MEMORIA', 'O navegador não conseguiu passar o arquivo para processamento: ' + e.message)); }
    });
  }

  /* Roda `fn` com um relator ligado ao callback `progresso` (sem worker, e dentro dele). */
  function comRelator(progresso, total, fn) {
    var antes = rel, cacheAntes = cacheOp;
    rel = new Relator(progresso || null, total);
    cacheOp = { md5: new Map(), crc: new Map() };
    pedidoCancelar = false;
    var fecha = function () { rel = antes; cacheOp = cacheAntes; };
    var r;
    try { r = fn(); } catch (e) { fecha(); return Promise.reject(e); }
    return Promise.resolve(r).then(function (v) {
      if (rel && rel.cb) rel.cb({ etapa: 'pronto', pct: 100, feitos: rel.total, total: rel.total });
      fecha(); return v;
    }, function (e) { fecha(); throw e; });
  }
  function tamanhoDe(x) { return x ? (x.byteLength != null ? x.byteLength : x.length) || 0 : 0; }

  function conferirRomLocal(bytesRom, esperado, nomeArquivo, opcoesExtras) {
    var pr = opcoesExtras && opcoesExtras.progresso;
    return comRelator(pr, tamanhoDe(bytesRom), function () {
      if (rel) rel.fase('ler', 0, 100);
      return conferirRom(bytesRom, esperado, nomeArquivo);
    });
  }
  function aplicarLocal(bytesRom, bytesPatch, opcoes) {
    return comRelator(opcoes && opcoes.progresso, tamanhoDe(bytesRom), function () {
      return aplicar(bytesRom, bytesPatch, opcoes);
    });
  }

  /* opcoesExtras (4º argumento, opcional): { transferir: true, progresso: fn(ev) } */
  function conferirRomPub(bytesRom, esperado, nomeArquivo, opcoesExtras) {
    var ox = opcoesExtras || {};
    if (usarWorker()) return chamarWorker('conferirRom', [bytesRom, esperado || null, nomeArquivo || null, { progresso: !!ox.progresso }],
      ox.transferir, ox.progresso);
    return conferirRomLocal(bytesRom, esperado, nomeArquivo, ox);
  }

  function aplicarPub(bytesRom, bytesPatch, opcoes) {
    if (usarWorker()) {
      var o = {}; for (var k in (opcoes || {})) o[k] = opcoes[k];
      var tr = !!o.transferir, pr = o.progresso; delete o.transferir;
      o.progresso = !!pr;                          /* função não atravessa o postMessage */
      return chamarWorker('aplicar', [bytesRom, bytesPatch, o], tr, pr);
    }
    return aplicarLocal(bytesRom, bytesPatch, opcoes);
  }

  /* Cancela o que estiver rodando. Na página: encerra o worker (a próxima chamada abre
     outro) e rejeita as Promises pendentes com CANCELADO. Sem worker: a operação para
     no próximo aviso de progresso (a cada 4 MB). */
  function cancelar() {
    if (worker) { falhaGeral(PCErro('CANCELADO', 'Cancelado.')); return true; }
    if (rel) { pedidoCancelar = true; return true; }
    return false;
  }

  raiz.PCAplicador = {
    versao: VERSAO,
    usarWorker: true,
    carregarCatalogo: carregarCatalogo,
    get catalogo() { return catalogo; },
    identificarPatch: identificarPatch,
    conferirRom: conferirRomPub,
    aplicar: aplicarPub,
    baixarPatch: baixarPatch,
    cancelar: cancelar,
    /* as versões sem worker — o worker.js chama estas */
    _local: { conferirRom: conferirRomLocal, aplicar: aplicarLocal, semBytes: semBytes },
    /* utilitários expostos para a interface e para os testes */
    util: { md5: md5, crc32: crc32, sha1: sha1, sha256: sha256, hashArquivo: hashArquivo,
            ordemN64: ordemN64, temINES: temINES, ehSMD: ehSMD, desintercalarSMD: desintercalarSMD }
  };
})(typeof window !== 'undefined' ? window : globalThis);
