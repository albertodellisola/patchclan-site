import { SEED } from './seed.mjs';
import { JOGOS } from './jogos.mjs';
import { POSTS } from './posts.mjs';
import { MANUAL_FJ2 } from './manual-fj2.mjs';
import { MANUAL_DB3 } from './manual-db3.mjs';
import { MANUAL_CT } from './manual-ct.mjs';
import { ES } from './es.mjs';
import { ES_FJ2 } from './es-fj2.mjs';
import { ES_CT } from './es-ct.mjs';
import { ES_DB3 } from './es-db3.mjs';
import fs from 'node:fs';
import path from 'node:path';

const RAIZ = path.resolve(import.meta.dirname, '..');

// o manual em PDF: existe se o arquivo existe. Idioma sem arquivo fica esmaecido no site.
for (const g of JOGOS) {
  g.manual_pdf = {};
  for (const idi of ['en', 'pt', 'es']) {
    const nome = `${g.slug}-${idi}.pdf`;
    const f = path.join(RAIZ, 'manuais', nome);
    g.manual_pdf[idi] = fs.existsSync(f)
      ? { arquivo: nome, tamanho: Math.round(fs.statSync(f).size / 1024) + ' KB' }
      : null;
  }
}

// o tamanho de cada patch vem do arquivo, nunca digitado a mao
for (const g of JOGOS) {
  for (const [idi, v] of Object.entries(g.patch.versoes)) {
    if (!v) continue;
    const f = path.join(RAIZ, 'patches', v.arquivo);
    if (!fs.existsSync(f)) { g.patch.versoes[idi] = null; continue; }
    v.tamanho = Math.round(fs.statSync(f).size / 1024) + ' KB';
  }
}

// funde o espanhol: cada string do ES vira o campo `es` do par {pt,en} correspondente
function por(alvo, es) {
  if (alvo == null || es == null) return;
  if (typeof es === 'string') { alvo.es = es; return; }
  if (Array.isArray(es)) { es.forEach((v, i) => por(alvo[i], v)); return; }
  for (const [k, v] of Object.entries(es)) por(alvo[k], v);
}
const S = SEED;
por(S.hero, ES.seed.hero);
por(S.patreon, { chamada: ES.seed.patreon.chamada });
ES.seed.patreon.tiers.forEach((t, i) => { por(S.patreon.tiers[i].nota, t.nota); t.itens.forEach((x, k) => por(S.patreon.tiers[i].itens[k], x)); });
ES.seed.rules.forEach((r, i) => { if (!r) return; por(S.rules.items[i].title, r.title); por(S.rules.items[i].text, r.text); });
ES.seed.who.paras.forEach((x, i) => por(S.who.paras[i], x));
por(S.who.sign, ES.seed.who.sign);
por(S.footer.tagline, ES.seed.footer.tagline);
const ES_POR_JOGO = { 'famicom-jump-2': ES_FJ2, 'captain-tsubasa': ES_CT, 'dragon-ball-3': ES_DB3 };
for (const g of JOGOS) {
  const x = ES_POR_JOGO[g.slug];
  if (x) {
    (x.grupos || []).forEach((gr, i) => {
      por(g.grupos[i].titulo, gr.titulo);
      (gr.itens || []).forEach((it, k) => por(g.grupos[i].itens[k].t, it));
    });
    (x.fotos || []).forEach((f, i) => { por(g.fotos[i].t, f.t); por(g.fotos[i].c, f.c); });
  }
  const t = ES.jogos[g.slug]; if (!t) continue;
  por(g.status, t.status); por(g.linha, t.linha);
  if (t.resumo) g.resumo.es = t.resumo;
  (t.numeros || []).forEach((n, i) => por(g.numeros[i].r, n));
}

// o manual do FJ2 foi escrito em EN/PT; o espanhol vem do es-fj2
por(MANUAL_FJ2.titulo, ES_FJ2.manual.titulo);
por(MANUAL_FJ2.intro, ES_FJ2.manual.intro);
ES_FJ2.manual.secoes.forEach((sec, i) => {
  const alvo = MANUAL_FJ2.secoes[i]; if (!alvo) return;
  por(alvo.titulo, sec.titulo);
  if (sec.paras && alvo.paras) alvo.paras.es = sec.paras;
});

const head  = fs.readFileSync(path.join(RAIZ, 'build/head.html'), 'utf8');
const corpo = fs.readFileSync(path.join(RAIZ, 'build/corpo.html'), 'utf8');

/* prints por idioma: shots/<jogo>/<idi>/<arquivo> e a variante de shots/<jogo>/<arquivo>.
   A lista sai do disco, nao de cadastro: print que nao existe nunca vira link quebrado. */
const IDIOMAS_PRINT = ['pt', 'es'];
function variantes() {
  const m = {};
  IDIOMAS_PRINT.forEach(l => (m[l] = {}));
  const raiz = path.join(RAIZ, 'shots');
  for (const jogo of fs.readdirSync(raiz)) {
    if (!fs.statSync(path.join(raiz, jogo)).isDirectory()) continue;
    for (const l of IDIOMAS_PRINT) {
      const dir = path.join(raiz, jogo, l);
      if (!fs.existsSync(dir)) continue;
      for (const f of fs.readdirSync(dir)) {
        if (!/\.(png|gif|jpe?g)$/i.test(f)) continue;
        const base = `${jogo}/${f}`;
        if (!fs.existsSync(path.join(raiz, base))) {
          console.warn(`aviso: ${jogo}/${l}/${f} nao tem print base ${base} — ignorado`);
          continue;
        }
        m[l][base] = `${jogo}/${l}/${f}`;
      }
    }
  }
  return m;
}
const VARIANTES = variantes();

function montar(seed, extraHead = '', shots = VARIANTES) {
  const c = corpo.replace('__SEED__', JSON.stringify(seed))
                 .replace('__SHOTS_IDI__', JSON.stringify(shots));
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Patch Clan — a one-person rom hacking workshop. English patches for Famicom and Super Famicom games that never left Japan.">
<meta name="color-scheme" content="light dark">
${head}${extraHead}
<style>html,body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
${c.trim()}
</body>
</html>
`;
}

// 1) index.html do site: imagens como arquivos em shots/
const seedArquivos = { content: SEED, games: JOGOS, posts: POSTS, manuais: { 'famicom-jump-2': MANUAL_FJ2, 'dragon-ball-3': MANUAL_DB3, 'captain-tsubasa': MANUAL_CT } };
fs.writeFileSync(path.join(RAIZ, 'index.html'), montar(seedArquivos));

// 2) artifact: as mesmas imagens embutidas, porque a previa nao serve arquivos relativos
const b64 = new Map();
function embutir(rel) {
  if (!b64.has(rel)) {
    const p = path.join(RAIZ, 'shots', rel);
    b64.set(rel, 'data:image/png;base64,' + fs.readFileSync(p).toString('base64'));
  }
  return b64.get(rel);
}
const clone = JSON.parse(JSON.stringify(seedArquivos));
clone.games.forEach(g => {
  g.capa = embutir(g.capa);
  (g.fotos || []).forEach(f => { f.f = embutir(f.f); });
  (g.grupos || []).forEach(gr => (gr.itens || []).forEach(i => { if (i.foto) i.foto = embutir(i.foto); }));
});
Object.values(clone.manuais || {}).forEach(m => {
  (m.secoes || []).forEach(sec => { if (sec.foto) sec.foto = embutir(sec.foto); });
});
// no artifact o prefixo 'shots/' atrapalha: neutraliza-o com uma <base> inofensiva
// o Artifact envolve o conteudo sozinho: entrega so <head> util + corpo, sem wrappers
const shotsArt = {};
for (const l of IDIOMAS_PRINT) {
  shotsArt[l] = {};
  for (const [base, alt] of Object.entries(VARIANTES[l])) {
    if (!b64.has(base)) continue;              /* print que o site nao usa nao pesa no artifact */
    shotsArt[l][b64.get(base)] = embutir(alt);
  }
}
const corpoArt = corpo.replace('__SEED__', JSON.stringify(clone))
                      .replace('__SHOTS_IDI__', JSON.stringify(shotsArt));
const art = head + '\n' + corpoArt.trim() + '\n';
fs.writeFileSync(path.join(RAIZ, 'build/artifact.html'), art);

const kb = n => Math.round(n / 1024);
console.log(`index.html: ${kb(fs.statSync(path.join(RAIZ,'index.html')).size)} KB (imagens em shots/)`);
console.log(`artifact  : ${kb(art.length)} KB (imagens embutidas)`);
console.log(`jogos: ${JOGOS.map(g => g.slug).join(', ')} · posts: ${POSTS.length}`);
console.log(`prints por idioma: ${IDIOMAS_PRINT.map(l => `${l} ${Object.keys(VARIANTES[l]).length}`).join(' · ')}`);
