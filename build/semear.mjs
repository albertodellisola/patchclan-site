import { SEED } from './seed.mjs';
import { JOGOS } from './jogos.mjs';
import { POSTS } from './posts.mjs';

const URL_ = process.env.SB_URL, KEY = process.env.SB_KEY;
const H = { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' };

async function req(caminho, opt = {}) {
  const r = await fetch(URL_ + caminho, { ...opt, headers: { ...H, ...(opt.headers || {}) } });
  if (!r.ok) throw new Error(`${caminho} → ${r.status} ${await r.text()}`);
  return r.status === 204 ? null : r.json().catch(() => null);
}

// 1) conteudo
const linhas = Object.entries(SEED).map(([key, value]) => ({ key, value }));
await req('/rest/v1/content?on_conflict=key', {
  method: 'POST', body: JSON.stringify(linhas),
  headers: { Prefer: 'resolution=merge-duplicates' }
});
console.log('conteúdo:', linhas.map(l => l.key).join(', '));

// 1b) jogos: so os campos que o painel edita
const JOGOS_SEED = JOGOS.map((g, i) => ({
  slug: g.slug, ord: i,
  data: { nome: g.nome, subtitulo: g.subtitulo, status: g.status, linha: g.linha, resumo: g.resumo, pronto: g.pronto }
}));
await req('/rest/v1/games?on_conflict=slug', {
  method: 'POST', body: JSON.stringify(JOGOS_SEED),
  headers: { Prefer: 'resolution=merge-duplicates' }
});
console.log('jogos:', JOGOS_SEED.map(g => g.slug).join(', '));

// 2) posts — a mesma lista que vai embutida no index.html
await req('/rest/v1/posts', { method: 'POST', body: JSON.stringify(POSTS) });
console.log('posts:', POSTS.length);

// (os prints de cada jogo moram no build, em shots/ — não passam pelo banco)

// 4) usuario do painel
const email = process.env.ADMIN_EMAIL, senha = process.env.ADMIN_PASS;
const r = await fetch(`${URL_}/auth/v1/admin/users`, {
  method: 'POST', headers: H,
  body: JSON.stringify({ email, password: senha, email_confirm: true })
});
console.log('usuário:', r.ok ? email : `já existe ou falhou (${r.status})`);
