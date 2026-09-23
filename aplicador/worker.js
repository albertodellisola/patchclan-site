/* worker.js — roda conferirRom e aplicar fora da thread da página.

   Carrega os mesmos scripts da página (caminhos relativos a este arquivo) e responde
   a mensagens { id, fn: 'conferirRom'|'aplicar', args } com { id, valor } ou
   { id, erro: { codigo, message, detalhe } }. Os bytes do resultado voltam por
   TRANSFERÊNCIA (sem cópia). Quem conversa com ele é o próprio aplicador.js — a
   interface não precisa saber que ele existe. Durante o trabalho manda { id, progresso }
   quando a chamada pediu progresso. Nenhum fetch aqui. */
importScripts(
  'vendor/modules/BinFile.js',
  'vendor/modules/HashCalculator.js',
  'vendor/modules/RomPatcher.format.ips.js',
  'vendor/modules/RomPatcher.format.ups.js',
  'vendor/modules/RomPatcher.format.aps_n64.js',
  'vendor/modules/RomPatcher.format.aps_gba.js',
  'vendor/modules/RomPatcher.format.bps.js',
  'vendor/modules/RomPatcher.format.rup.js',
  'vendor/modules/RomPatcher.format.ppf.js',
  'vendor/modules/RomPatcher.format.bdf.js',
  'vendor/modules/RomPatcher.format.pmsr.js',
  'vendor/modules/RomPatcher.format.vcdiff.js',
  'vendor/RomPatcher.js',
  'aplicador.js'
);

self.onmessage = function (ev) {
  var d = ev.data, L = self.PCAplicador._local;
  Promise.resolve().then(function () {
    if (d.fn !== 'conferirRom' && d.fn !== 'aplicar') throw new Error('função desconhecida: ' + d.fn);
    /* o callback de progresso não atravessa o postMessage: veio como `true`, vira mensagem */
    var id = d.id, avisa = function (evp) { self.postMessage({ id: id, progresso: evp }); };
    var args = d.args.slice();
    if (d.fn === 'conferirRom' && args[3] && args[3].progresso) args[3] = { progresso: avisa };
    if (d.fn === 'aplicar' && args[2] && args[2].progresso) args[2].progresso = avisa;
    return L[d.fn].apply(null, args);
  }).then(function (valor) {
    var t = [];
    if (valor && valor.bytes && valor.bytes.buffer) t.push(valor.bytes.buffer);
    d = null;                                   /* solta a entrada antes de devolver */
    self.postMessage({ id: ev.data.id, valor: valor }, t);
  }, function (e) {
    self.postMessage({ id: ev.data.id, erro: {
      codigo: e.codigo || (e instanceof RangeError ? 'SEM_MEMORIA' : 'ERRO_INTERNO'),
      message: e.codigo ? e.message : (e instanceof RangeError
        ? 'O navegador não teve memória para abrir este arquivo. Feche outras abas ou use um computador com mais memória.'
        : 'Erro inesperado: ' + e.message),
      detalhe: L.semBytes(e.detalhe) } });
  });
};
