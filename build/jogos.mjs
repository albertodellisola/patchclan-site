/* A LISTA. Fonte única: gerar.mjs e semear.mjs importam daqui, para não divergirem.

   A ORDEM É A QUE APARECE, e a home mostra TODOS. Ela é agrupada por estado e,
   dentro de cada estado, por apelo ao público — decisão do dono em 09/09/2026:
     1) os release   2) os beta    3) os alfa
   Os beta, desde 07/10/2026, vão por data (a mais recente primeiro): BETA_DESDE.

   O AGRUPAMENTO É AUTOMÁTICO, e é de propósito. A lista abaixo guarda só a ordem
   de APELO; quem separa release de beta de alfa é o `nivel` do próprio jogo.
   Promover um projeto passou a ser trocar UMA palavra no arquivo dele — o ícone
   sobe sozinho.

   Antes isto era ordem manual, e derivou em silêncio: em 09/09/2026 o Gaia Saver
   estava `nivel: 'beta'` sentado no meio dos alfa, e o Monster Maker acabara de
   virar beta e continuava na última posição da página. Duas fontes de verdade
   para a mesma coisa sempre acabam assim. */
import { FJ2 } from './jogo-fj2.mjs';
import { DB3 } from './jogo-db3.mjs';
import { CT }  from './jogo-ct.mjs';
import { TOM } from './jogo-tom.mjs';
import { GAIA, NEKKETSU, ULTRAMAN2, ULTRAMAN3, HANJUKU, MONSTERMAKER } from './jogos-novos.mjs';
import { GUEVARA, GOZONJI, MKR2, MANIAC, PMS64, ROBOPON, BURAI } from './jogos-r34.mjs';
import { YYHG } from './jogo-yyhg.mjs';
import { SFG } from './jogo-sfg.mjs';
import { PSG } from './jogo-psg.mjs';
import { GORILLA } from './jogo-gorilla.mjs';
import { SRW64 } from './jogo-srw64.mjs';
import { GORILLA_FIX } from './jogo-gorilla-fix.mjs';
import { MANIAC_FIX } from './jogo-maniac-fix.mjs';
import { SD } from './jogo-slamdunk.mjs';
import { LINKBATTLER } from './jogo-linkbattler.mjs';
import { TAEKWONDO } from './jogo-taekwondo.mjs';
import { FJ1 } from './jogo-fj1.mjs';
import { AAG } from './jogo-aag.mjs';

/* Só a ordem de apelo ao público. O estado NÃO se declara aqui. */

/* Saíram do site em 10/09/2026, a pedido do dono, ATÉ EXISTIR PATCH de cada um: o
   BURAI, que voltou na mesma noite com o patch alfa build 14, e o MANIAC (Maniac
   Mansion), que voltou em 12/09/2026 com o patch alfa v0.6. Enquanto estiveram fora
   nada foi apagado: ficha, fotos e resumo continuaram inteiros em `jogos-r34.mjs`. */
const APELO = [
  FJ2, CT, GUEVARA, DB3, MKR2,
  TOM, ULTRAMAN2,
  PMS64, MANIAC, GAIA, NEKKETSU, GOZONJI, HANJUKU, ULTRAMAN3, ROBOPON, BURAI, MONSTERMAKER,
  YYHG,  /* entrou em 12/09/2026, beta: cai no fim do grupo dos beta */
  GORILLA /* entrou em 12/09/2026, alfa: cai no fim do grupo dos alfa */,
  SFG    /* entrou em 12/09/2026, alfa: cai no fim do grupo dos alfa */,
  PSG,   /* entrou em 12/09/2026, alfa: cai no fim do grupo dos alfa */
  GORILLA_FIX, /* 19/09/2026, o 1º Hacks/Fixes (tipo 'hack': só aparece nessa aba) */
  MANIAC_FIX, /* 21/09/2026, o 2º Hacks/Fixes: os 3 bugs do cartucho (B6, B11, B17) */
  SD,         /* 25/09/2026, beta: cai no fim do grupo dos beta */
  SRW64,      /* 27/09/2026, beta: cai no fim do grupo dos beta */
  LINKBATTLER, /* 30/09/2026, beta: cai no fim do grupo dos beta, vizinho do 64 */
  TAEKWONDO,  /* 03/10/2026, release v1.0 EN+ES (build b651ff2b): cai no fim do grupo dos release */
  FJ1         /* 05/10/2026, beta Definitive Edition v2.0 build 1 (EN/PT/ES, sobre a v1.03 do BlackPaladin): cai no fim do grupo dos beta */,
  AAG         /* 07/10/2026, beta v0.1 build 1 (EN/PT/ES juntas, Mega-CD): cai no fim do grupo dos beta */
];

const POSTO = { release: 0, beta: 1, alfa: 2 };

/* BETAS: da mais recente para a mais antiga (dono, 07/10/2026). A primeira beta fica
   colada nos release. A data é o dia em que o jogo virou beta no site, medida no
   histórico do index.html no origin/main; empate no mesmo dia vai pela hora do commit.
   Beta nova (ou jogo que sobe para beta) ganha a linha dela aqui, com data e hora.
   Sem a linha, o gerar.mjs para com erro, e o jogo não cai num lugar qualquer. */
const BETA_DESDE = {
  'after-armageddon-gaiden':       '2026-10-07T03:42',
  'famicom-jump-1':                '2026-10-05T20:33',
  'ninja-burai-densetsu':          '2026-10-04T00:26',
  'super-robot-wars-link-battler': '2026-09-30T10:16',
  'super-robot-wars-64':           '2026-09-27T10:07',
  'slam-dunk':                     '2026-09-25T08:10',
  'famicom-jump-2':                '2026-09-16T23:02',
  'dragon-ball-3':                 '2026-09-16T23:02',
  'guevara':                       '2026-09-16T22:11',
  'nekketsu-kakutou-densetsu':     '2026-09-09T23:55',
  'gaia-saver':                    '2026-09-09T20:26',
  'tom-sawyer':                    '2026-09-09T12:51',
  'ultraman-club-2':               '2026-09-09T12:51',
};

for (const g of APELO) {
  if (!(g.nivel in POSTO)) {
    throw new Error(`jogos.mjs: "${g.slug}" tem nivel "${g.nivel}", que não existe em POSTO`);
  }
}

for (const g of APELO) {
  if (g.nivel === 'beta' && !BETA_DESDE[g.slug]) {
    throw new Error(`jogos.mjs: "${g.slug}" é beta e não tem data em BETA_DESDE`);
  }
}

/* sort estável: release e alfa ficam na ordem de apelo; beta vai da mais recente à mais antiga */
export const JOGOS = [...APELO].sort((a, b) =>
  POSTO[a.nivel] - POSTO[b.nivel] ||
  (a.nivel === 'beta' ? BETA_DESDE[b.slug].localeCompare(BETA_DESDE[a.slug]) : 0));
