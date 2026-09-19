/* Gate do texto do site — regra do dono (19/09/2026).

   O site diz que o jogo foi TESTADO, JOGADO, CONFERIDO. Nunca diz COMO: nada de bot,
   robô que joga, teste ou jogatina automática, emulador sem janela, harness, roteiro de
   botões, speedrun assistido, nem IA. Não é mentir — é não anunciar a ferramenta.

   Vale para todo texto que vai à tela, nos três idiomas:
     - repositório: o gerar.mjs chama confere() sobre tudo o que entra no index.html;
     - painel (Supabase): o trigger da migration 20260919120000_gate_texto.sql barra a
       gravação com a mesma lista. Mudou aqui, mude lá.
   Conferir o que está no ar agora:  node build/gate_texto.mjs --supabase

   As regras são por FRASE, não por palavra solta: "portas são automáticas" (mecânica de
   jogo) e os robôs do Robot Poncots passam; "robô que joga" e "testes automáticos" não. */

const PERTO = '[^.;:!?]{0,60}?';
const TESTE = '(?:test\\w*|prueb\\w*|probad\\w*|jog(?:a|ou|ad\\w*|ando|atina)|play(?:s|ed|ing|through)?|jueg(?:a|an)|jug(?:ó|ad\\w*|ando)|partida\\w*|gameplay|QA|verific\\w*|conferid\\w*|reproduz\\w*|reproduc\\w*|rota\\w*|routes?|ruta\\w*|captur\\w*)';
const AUTO = '(?:autom[aá]t\\w*|automatiz\\w*|automated|automation)';
const ROBO = '(?:bots?|rob[oô]s?|robots?)';

/* \b do JavaScript não conhece acento: "botón" casaria com "bot". Toda regra passa a usar
   fronteira de palavra Unicode. */
const L = '[\\p{L}\\p{N}_]';
const FRONTEIRA = `(?:(?<=${L})(?!${L})|(?<!${L})(?=${L}))`;
const uni = re => new RegExp(re.source.replaceAll('\\b', FRONTEIRA), re.flags.replace('u', '') + 'u');

export const REGRAS = [
  [/\bbots?\b/i, 'bot'],
  [new RegExp(`\\b${ROBO}\\b${PERTO}\\b${TESTE}\\b`, 'i'), 'robô que joga/testa'],
  [new RegExp(`\\b${TESTE}\\b${PERTO}\\b${ROBO}\\b`, 'i'), 'jogado/testado por robô'],
  [new RegExp(`\\b${AUTO}\\b${PERTO}\\b${TESTE}\\b`, 'i'), 'automação no teste/jogo'],
  [new RegExp(`\\b${TESTE}\\b${PERTO}\\b${AUTO}\\b`, 'i'), 'teste/jogo automático'],
  [/\bheadless\b|\bno window\b|\bwithout (?:a|any) window\b|\bsem (?:abrir )?janela\b(?! de)|\bsin (?:abrir )?ventana\b(?! de)|sem abrir nada|sin abrir nada/i, 'emulador sem janela'],
  [/\bharness\w*|\b(?:driven by|dirigid[oa] por|guiad[oa] por)\s+(?:um |a |un )?(?:Lua|script\w*|roteiro\w*|guion\w*)|\bLua (?:harness|script)/i, 'emulador dirigido por script'],
  [/\btool[- ]assisted\b|\bTAS\b|speedrun\w* assist\w*|assisted speedrun|\binput scripts?\b|\broteiros? de (?:botões|entrada|input)|\bguion(?:es)? de (?:botones|entrada)/i, 'jogada por roteiro'],
  [/piloto autom[aá]tico|\bauto-?pilot\b|sem interven[cç][aã]o humana|without human|sin intervenci[oó]n humana|\bunattended\b|desassistid\w*/i, 'sem gente jogando'],
  [/\b(?:joga|jogou|jogam)\s+sozinh\w*|\bplays? (?:it|them)sel(?:f|ves)\b|\bplayed (?:it|them)sel(?:f|ves)\b|\bjuegan? sol[oa]s?\b|\bjugó sol[oa]\b/i, 'joga sozinho'],
  [/\b(?:joga|jogou|jogam|plays?|played|juega|juegan|jugó)\b[^.]{0,20}\b(?:pelas|by|según|segun|conforme)\s+(?:as |the |las |its |sus )?(?:próprias |own |propias )?(?:regras|rules|reglas)\b/i, 'joga pelas regras (a caçadora)'],
  [/\bca[cç]adora\b|\bcazadora\b/i, 'caçadora'],
  [/\bIA\b|\bAI\b|\bLLMs?\b/, 'IA'],
  [/intelig[eê]ncia artificial|artificial intelligence|\bChatGPT\b|\bGPT-?\d|\bOpenAI\b|\bAnthropic\b|machine learning|aprendizad[oa] de m[aá]quina|aprendizaje autom[aá]tico/i, 'IA'],
  [/\b(?:dois|duas|two|dos|tr[eê]s|three|\d+)\s+agent(?:e|es|s)\b|\bagent(?:e|es|s)?\s+(?:de revis|revisor|review)/i, 'agentes de revisão'],
].map(([re, nome]) => [uni(re), nome]);

/* Nomes que são do JOGO, não da ferramenta. Saem antes de conferir. Claude e Gemini ficam
   fora das regras pelo mesmo motivo (Claude é personagem do Shining Force). */
const NOMES_DE_JOGO = /Ace Robot|Robot Poncots|Robopon/g;
const limpa = s => s.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').replace(NOMES_DE_JOGO, '·');

/* Devolve [{onde, regra, trecho}] para cada string de `obj` que casa. */
export function acha(obj, onde = '') {
  const achados = [];
  (function anda(v, p) {
    if (typeof v === 'string') {
      const t = limpa(v);
      for (const [re, nome] of REGRAS) {
        const m = t.match(re);
        if (m) {
          const i = m.index;
          achados.push({ onde: p, regra: nome, trecho: t.slice(Math.max(0, i - 50), i + m[0].length + 50) });
        }
      }
    } else if (Array.isArray(v)) v.forEach((x, i) => anda(x, `${p}[${i}]`));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) anda(x, p ? `${p}.${k}` : k);
  })(obj, onde);
  return achados;
}

export function confere(obj, onde = '') {
  const a = acha(obj, onde);
  if (!a.length) return;
  const lista = a.map(x => `  ${x.onde}  [${x.regra}]\n    …${x.trecho}…`).join('\n');
  throw new Error(`gate_texto: ${a.length} trecho(s) anunciam automação/IA no texto do site. ` +
    `Diga só "testado", "jogado", "conferido" — sem dizer como:\n${lista}`);
}

/* node build/gate_texto.mjs --supabase : confere o que o painel pôs no ar */
if (import.meta.url === `file://${process.argv[1]}` && process.argv.includes('--supabase')) {
  const fs = await import('node:fs');
  const path = await import('node:path');
  const cfg = fs.readFileSync(path.resolve(import.meta.dirname, '../config.js'), 'utf8');
  const url = cfg.match(/url\s*:\s*['"]([^'"]+)/)[1], anon = cfg.match(/anon\s*:\s*['"]([^'"]+)/)[1];
  const H = { apikey: anon, Authorization: 'Bearer ' + anon };
  const tab = {};
  for (const t of ['content?select=key,value', 'posts?select=*', 'games?select=slug,data'])
    tab[t.split('?')[0]] = await (await fetch(`${url}/rest/v1/${t}`, { headers: H })).json();
  const a = acha(tab);
  if (!a.length) { console.log('gate_texto: Supabase limpo'); process.exit(0); }
  for (const x of a) console.log(`${x.onde}  [${x.regra}]\n  …${x.trecho}…`);
  process.exit(5);
}
