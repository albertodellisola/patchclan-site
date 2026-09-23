/* Guarda: o catálogo está em dia com os patches que o site vai servir?
   Uso: node app/conferir_catalogo.mjs [--site ~/patchclan-site] [--ref HEAD|origin/main|worktree]
   Para cada item, lê o patch de onde ele sai de fato — patches/ do ref (release, GitHub Pages)
   ou patches-privados/ local (beta/alfa, o mesmo arquivo que o patreon_patches.py sobe) — e
   compara SHA-256 e tamanho com o catálogo. Sai com código 1 se algum divergir: é para rodar
   ANTES do push (ver INTEGRACAO.md). Só lê. */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const SITE = opt('--site', path.join(os.homedir(), 'patchclan-site'));
const REF = opt('--ref', 'worktree');
const cat = JSON.parse(fs.readFileSync(opt('--catalogo', path.join(import.meta.dirname, 'catalogo.json')), 'utf8'));
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
let ruins = 0;
for (const it of cat.jogos) {
  let b = null, onde;
  if (it.url_patch) {
    onde = `patches/${it.arquivo} (${REF})`;
    try { b = REF === 'worktree' ? fs.readFileSync(path.join(SITE, 'patches', it.arquivo))
                                 : execFileSync('git', ['-C', SITE, 'show', `${REF}:patches/${it.arquivo}`], { maxBuffer: 1 << 28 }); } catch {}
  } else {
    onde = `patches-privados/${it.arquivo}`;
    try { b = fs.readFileSync(path.join(SITE, 'patches-privados', it.arquivo)); } catch {}
  }
  const ok = b && sha(b) === it.sha256_patch && b.length === it.tamanho_patch;
  if (!ok) { ruins++; console.log(`DIVERGE ${it.chave}: ${b ? 'sha256 ' + sha(b).slice(0, 12) + ' ≠ catálogo ' + String(it.sha256_patch).slice(0, 12) : 'arquivo ausente'} — ${onde}`); }
}
console.log(ruins ? `${ruins} de ${cat.jogos.length} patches fora do catálogo: regere (node app/gerar_catalogo.mjs) antes de publicar`
                  : `catálogo em dia: ${cat.jogos.length}/${cat.jogos.length} patches com o SHA-256 que o site vai servir (${REF})`);
process.exit(ruins ? 1 : 0);
