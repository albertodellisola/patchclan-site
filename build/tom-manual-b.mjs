// Manual do Tom Sawyer no VISUAL B do detonado (caixa e manual da Square de 1989). Dono, 23/11/2026: «atualizar o manual
// do jogo com o mesmo visual». O manual-tom.mjs continua GERADO pela localizacao-de-manual (site.py): este módulo só
// embrulha o html de cada seção na hora do build, então regerar o manual não perde o visual. O CSS (.dzsb.dztom.dzman)
// sai do ~/tom-detonado/extras/gera_mjs.py para build/tom-detonado.css (fonte: ~/tom-detonado/design/FINAL/manual.css).
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const KICKER = { pt: "Square's Tom Sawyer · Manual", en: "Square's Tom Sawyer · Manual", es: "Square's Tom Sawyer · Manual" };
const caixa = h => '<div class="dzsb dztom dzman"><div class="dz">' + h + '</div></div>';

function capa(m, l, h) {
  const figs = h.match(/<figure[\s\S]*?<\/figure>/g) || [];
  const resto = h.replace(/<figure[\s\S]*?<\/figure>\s*/g, '');
  return caixa('<header class="dzm-capa"><div class="dzm-capa-txt"><div class="dzm-logo" role="img" aria-label="Square\'s Tom Sawyer"></div>' +
    '<span class="dzm-kicker">' + esc(KICKER[l] || KICKER.en) + '</span><h1>' + esc((m.titulo || {})[l] || (m.titulo || {}).en) + '</h1>' + resto +
    '</div><div class="dzm-capa-fig">' + figs.join('') + '</div></header>');
}
function pagina(sec, i, l, h) {
  const n = sec.n != null ? sec.n : i + 1;
  const t = (sec.titulo || {})[l] || (sec.titulo || {}).en || '';
  return caixa('<article class="dzm-pag"><header class="dzm-cab"><span class="dzm-n">' + esc(n) + '</span><h2>' + esc(t) + '</h2></header>' +
    '<div class="dzm-txt">' + h + '</div></article>');
}
export function vestirManualTom(m) {
  return { ...m, secoes: m.secoes.map((sec, i) => {
    if (!sec.html) return sec;
    const html = {};
    for (const [l, h] of Object.entries(sec.html)) html[l] = i === 0 ? capa(m, l, h) : pagina(sec, i, l, h);
    return { ...sec, html };
  }) };
}
