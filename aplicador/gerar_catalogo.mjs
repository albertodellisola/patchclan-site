/* Gera app/catalogo.json — a lista de jogos que o aplicador oferece.

   Uso:  node app/gerar_catalogo.mjs [--ref origin/main] [--site ~/patchclan-site]

   LÊ, nunca escreve, o repositório do site. E lê o que está PUBLICADO (por padrão
   origin/main), não a árvore local: em 21/09/2026 a árvore de ~/patchclan-site
   estava 20 commits atrás do ar e com mudanças de outras sessões — pela árvore, o
   site não teria release nenhum; no ar há quatro. O ref é extraído com
   `git archive` para uma pasta temporária, que é apagada no fim.

   Para cada patch de cada jogo da lista (build/jogos.mjs → fichas):
     - url_patch: release  -> "/patches/<arquivo>" (a pasta patches/ do repositório, servida
                              pelo GitHub Pages — MESMA origem do site, com CORS
                              "access-control-allow-origin: *" e cache de 10 min na borda
                              Fastly, "cache-control: max-age=600"; conferido com curl -I em
                              21/09/2026: "server: GitHub.com", "via: varnish"). O GitHub Releases, que é de
                              onde o botão de download baixa para CONTAR, não manda
                              access-control-allow-origin: fetch() do navegador falha.
                  beta/alfa -> null. O arquivo sai pelo Patreon; a pessoa sobe aqui.
     - md5/crc32/sha1/tamanho da ROM original, medidos no ARQUIVO original (o md5 da
       ficha é conferido contra ele). No NES o md5 cobre o arquivo .nes INTEIRO, com
       cabeçalho; por isso vai também o `corpo` (md5 sem os 16 bytes + o cabeçalho
       original em hex), que é o que permite aceitar a mesma ROM com outro cabeçalho.
     - md5_patch e md5_resultado: o patch publicado é APLICADO aqui, com o mesmo
       aplicador.js do navegador, e o md5 do resultado vai para o catálogo. É a
       conferência de saída que o IPS, sozinho, não tem.

   Nada da ROM vai no catálogo além de hashes, tamanho e o cabeçalho iNES de 16 bytes.

   Nenhum DAT de terceiro (No-Intro, Redump) entra aqui: não há licença publicada para
   eles (FORMATOS.md, §4). Os hashes são medidos por nós, das ROMs que geraram os patches. */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
import { carregarAplicador } from './carregar_node.mjs';

const HOME = os.homedir();
const APP = import.meta.dirname;
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const SITE = opt('--site', path.join(HOME, 'patchclan-site'));
const REF = opt('--ref', 'origin/main');
const ADATA = '/Volumes/ADATA HV620S/DESENVOLVIMENTO';
const EXT_ROM = /\.(nes|sfc|smc|z64|n64|v64|md|gen|bin|gg|sms|gb|gbc|gba)$/i;
const PATREON_CASA = 'https://www.patreon.com/patchclan';

const md5 = b => crypto.createHash('md5').update(b).digest('hex');
const sha1 = b => crypto.createHash('sha1').update(b).digest('hex');
const git = (...a) => execFileSync('git', ['-C', SITE, ...a], { maxBuffer: 1 << 30 });

/* ---- 1. o que está publicado, numa pasta temporária */
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'pc-catalogo-'));
const commit = git('rev-parse', REF).toString().trim();
const tar = git('archive', REF, 'build', 'patches');
execFileSync('tar', ['-x', '-C', TMP], { input: tar });

const avisos = [];
try {
  const { JOGOS } = await import(pathToFileURL(path.join(TMP, 'build/jogos.mjs')).href);
  const fontePub = JSON.parse(fs.readFileSync(path.join(TMP, 'build/patches_fonte.json'), 'utf8'));
  let fonteLocal = {};
  try { fonteLocal = JSON.parse(fs.readFileSync(path.join(SITE, 'build/patches_fonte.json'), 'utf8')); } catch {}
  const links = JSON.parse(fs.readFileSync(path.join(SITE, '.links-patreon.json'), 'utf8'));

  const PC = carregarAplicador();
  const itens = [];
  const cacheRom = new Map();

  for (const g of JOGOS) {
    const p = g.patch || {};
    const porArquivo = new Map();
    for (const [idi, v] of Object.entries(p.versoes || {})) {
      if (!v || !v.arquivo) continue;
      if (!porArquivo.has(v.arquivo)) porArquivo.set(v.arquivo, []);
      porArquivo.get(v.arquivo).push(idi);
    }
    for (const [arquivo, idiomas] of porArquivo) {
      const chave = arquivo.replace(/\.[^.]+$/, '');
      const fonte = fontePub[chave] || fonteLocal[chave] || null;
      const md5Ficha = p.rom_md5 || (fonte && fonte.md5_original) || null;
      const release = g.nivel === 'release';

      /* bytes do patch: release = o que está em patches/ no ref publicado;
         beta/alfa = patches-privados/ local (o Storage recebe esse mesmo arquivo) */
      const fPatch = release ? path.join(TMP, 'patches', arquivo) : path.join(SITE, 'patches-privados', arquivo);
      const patch = fs.existsSync(fPatch) ? fs.readFileSync(fPatch) : null;
      if (!patch) avisos.push(`${chave}: patch não encontrado em ${release ? 'patches/ do ' + REF : 'patches-privados/'}`);
      if (!release && patch && links[chave] && links[chave].bytes !== patch.length) {
        avisos.push(`${chave}: patches-privados/ tem ${patch.length} B, o Storage registrou ${links[chave].bytes} B — md5_patch pode não bater com o que o Patreon entrega`);
      }

      const rom = acharOriginal(fonte, md5Ficha, g, cacheRom);
      if (!rom) avisos.push(`${chave}: ROM original não encontrada nesta máquina (md5 ${md5Ficha}); crc32/sha1/resultado ficam nulos`);

      const item = {
        slug: g.slug,
        chave,
        jogo: semEntidades(g.nome),
        tipo: g.tipo === 'hack' ? 'hack' : 'traducao',
        nivel: g.nivel,
        versao: g.versao || null,
        idioma: idiomas.join('+'),
        idiomas,
        idioma_rotulo: idiomas.map(i => i.toUpperCase()).join('/'),
        sistema: g.sistema || null,
        formato: path.extname(arquivo).slice(1).toLowerCase(),
        arquivo,
        url_patch: release ? '/patches/' + arquivo : null,
        url_patreon: release ? null : (g.patreon || PATREON_CASA),
        url_download_contado: release && p.release
          ? `https://github.com/albertodellisola/patchclan-site/releases/download/${p.release}/${arquivo}` : null,
        sha256_patch: patch ? crypto.createHash('sha256').update(patch).digest('hex') : null,
        sha1_patch: patch ? sha1(patch) : null,
        md5_patch: patch ? md5(patch) : null,   /* só compatibilidade: a identidade do patch é o SHA-256 */
        tamanho_patch: patch ? patch.length : null,
        nome_rom_esperada: semEntidades(p.rom) || null,
        regiao: regiaoDe(p.rom),
        md5_original: md5Ficha,
        crc32_original: null,
        sha1_original: null,
        tamanho_original: null,
        corpo: null,
        md5_resultado: null,
        crc32_resultado: null,
        tamanho_resultado: null
      };

      if (rom) {
        item.crc32_original = PC.util.crc32(rom);
        item.sha1_original = sha1(rom);
        item.tamanho_original = rom.length;
        if (PC.util.temINES(rom)) {
          const corpo = rom.subarray(16);
          item.corpo = { tipo: 'iNES', tamanho: corpo.length, md5: md5(corpo),
                         crc32: PC.util.crc32(corpo), cabecalho_hex: Buffer.from(rom.subarray(0, 16)).toString('hex') };
        }
      }

      if (rom && patch) {
        try {
          const r = await PC.aplicar(rom, patch, { esperado: { ...item, md5_resultado: null }, nomeRom: p.rom, nomePatch: arquivo });
          item.md5_resultado = r.conferencia.saida.md5;
          item.crc32_resultado = r.conferencia.saida.crc32;
          item.tamanho_resultado = r.bytes.length;
          /* conferência cruzada com a ROM traduzida declarada em patches_fonte.json */
          const trad = fonte && fonte.traduzida && localizar(fonte.traduzida, fonte.projeto);
          if (trad) {
            const mt = md5(fs.readFileSync(trad));
            if (mt !== item.md5_resultado) avisos.push(`${chave}: o patch publicado NÃO reproduz ${fonte.traduzida} (a traduzida local é outra build) — o catálogo usa o resultado do patch publicado`);
          }
        } catch (e) {
          avisos.push(`${chave}: falhou ao aplicar o patch publicado: ${e.codigo || ''} ${e.message}`);
        }
      }
      itens.push(item);
    }
  }

  const saida = {
    gerado_em: new Date().toISOString(),
    fonte: { repositorio: 'patchclan-site', ref: REF, commit },
    aviso: 'Hashes das ROMs ORIGINAIS e dos resultados, para conferência local no navegador. Nenhuma ROM é distribuída.',
    jogos: itens
  };
  fs.writeFileSync(path.join(APP, 'catalogo.json'), JSON.stringify(saida, null, 1) + '\n');
  console.log(`catalogo.json: ${itens.length} patches de ${new Set(itens.map(i => i.slug)).size} jogos (${REF} ${commit.slice(0, 7)})`);
  console.log(`  com URL (release): ${itens.filter(i => i.url_patch).map(i => i.chave).join(', ') || 'nenhum'}`);
  console.log(`  com md5_resultado: ${itens.filter(i => i.md5_resultado).length}/${itens.length}`);
  for (const a of avisos) console.log('  AVISO ' + a);
} finally {
  fs.rmSync(TMP, { recursive: true, force: true });
}

/* ---- auxiliares */

/* as fichas escrevem nome com entidade HTML ("Yaji &amp; Kita"); o catálogo é texto puro,
   e vira nome de arquivo (LAUDO D8) */
function semEntidades(t) {
  if (t == null) return t;
  const nomeadas = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
  return String(t).replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, c) =>
    c[0] === '#' ? String.fromCodePoint(c[1].toLowerCase() === 'x' ? parseInt(c.slice(2), 16) : parseInt(c.slice(1), 10))
                 : (nomeadas[c.toLowerCase()] ?? m));
}

function regiaoDe(nome) {
  const m = /\((Japan|USA|Europe|World|Korea|Brazil)[^)]*\)/i.exec(nome || '');
  return m ? m[1] : null;
}

/* Caminho relativo a ~ (como em patches_fonte.json). Projetos arquivados estão no
   ADATA, em pasta ou dentro de um .tar em _arquivo_projetos/. */
function localizar(rel, projeto) {
  const cands = [path.join(HOME, rel), path.join(ADATA, rel)];
  for (const c of cands) if (fs.existsSync(c)) return c;
  return null;
}

function doTar(rel) {
  const proj = rel.split('/')[0];
  const t = path.join(ADATA, '_arquivo_projetos', proj + '.tar');
  if (!fs.existsSync(t)) return null;
  for (const membro of [rel, './' + rel]) {
    try { return execFileSync('tar', ['-xOf', t, membro], { maxBuffer: 1 << 28, stdio: ['ignore', 'pipe', 'ignore'] }); } catch {}
  }
  return null;
}


function acharOriginal(fonte, md5Alvo, g, cache) {
  if (!md5Alvo) return null;
  if (cache.has(md5Alvo)) return cache.get(md5Alvo);
  let achou = null;
  const aceita = b => b && md5(b) === md5Alvo ? b : null;
  if (fonte && fonte.original) {
    const f = localizar(fonte.original);
    achou = aceita(f ? fs.readFileSync(f) : doTar(fonte.original));
  }
  if (!achou) {
    /* sem entrada em patches_fonte: procurar pelo md5 nas pastas de ROM dos projetos locais */
    for (const d of fs.readdirSync(HOME).filter(n => n.endsWith('-hack'))) {
      for (const sub of ['original', 'rom', 'orig', 'referencia']) {
        const dir = path.join(HOME, d, sub);
        if (!fs.existsSync(dir)) continue;
        for (const n of fs.readdirSync(dir)) {
          if (!EXT_ROM.test(n)) continue;
          const f = path.join(dir, n);
          const st = fs.statSync(f);
          if (!st.isFile() || st.size > 64 << 20) continue;
          achou = aceita(fs.readFileSync(f));
          if (achou) break;
        }
        if (achou) break;
      }
      if (achou) break;
    }
  }
  if (!achou) {
    /* projetos arquivados no ADATA: o manifesto .sha256.json de cada .tar lista os
       membros; tenta só os que estão numa pasta de ROM original */
    const dir = path.join(ADATA, '_arquivo_projetos');
    const manifs = fs.existsSync(dir) ? fs.readdirSync(dir).filter(n => /-hack\.sha256\.json$/.test(n)) : [];
    for (const m of manifs) {
      let membros;
      try { membros = Object.keys(JSON.parse(fs.readFileSync(path.join(dir, m), 'utf8')).arquivos || {}); } catch { continue; }
      for (const rel of membros.filter(k => /\/(original|rom|orig)\/[^/]+$/.test(k) && EXT_ROM.test(k))) {
        achou = aceita(doTar(rel));
        if (achou) break;
      }
      if (achou) break;
    }
  }
  cache.set(md5Alvo, achou);
  return achou;
}
