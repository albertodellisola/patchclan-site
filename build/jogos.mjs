/* A LISTA. Fonte única: gerar.mjs e semear.mjs importam daqui, para não divergirem.

   A ORDEM É A QUE APARECE, e a home mostra TODOS. Ela é agrupada por estado e,
   dentro de cada estado, por apelo ao público — decisão do dono em 09/09/2026:
     1) os release   2) os beta    3) os alfa
   Dentro de cada estado, a ordem é de LANÇAMENTO, a mais recente primeiro: os beta
   desde 07/10/2026, e os release e os alfa também desde 24/10/2026 (dono: «reordenar
   todos releases, alpha e beta ... em ordem decrescente de lançamento»). Tabela DESDE.

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
import { DB3_FIX } from './jogo-db3-fix.mjs';
import { SD } from './jogo-slamdunk.mjs';
import { LINKBATTLER } from './jogo-linkbattler.mjs';
import { TAEKWONDO } from './jogo-taekwondo.mjs';
import { FJ1 } from './jogo-fj1.mjs';
import { AAG } from './jogo-aag.mjs';
import { MAKAMAKA } from './jogo-makamaka.mjs';
import { NEKOZAMURAI } from './jogo-nekozamurai.mjs';
import { DIGIMON_BLUE, DIGIMON_RED } from './jogo-digimon.mjs';

/* Só a ordem de apelo ao público. O estado NÃO se declara aqui. */

/* Saíram do site em 10/09/2026, a pedido do dono, ATÉ EXISTIR PATCH de cada um: o
   BURAI, que voltou na mesma noite com o patch alfa build 14, e o MANIAC (Maniac
   Mansion), que voltou em 12/09/2026 com o patch alfa v0.6. Enquanto estiveram fora
   nada foi apagado: ficha, fotos e resumo continuaram inteiros em `jogos-r34.mjs`. */
const APELO = [
  FJ2, CT, GUEVARA, DB3, MKR2,
  TOM, ULTRAMAN2,
  PMS64, MANIAC, GAIA, NEKKETSU, GOZONJI, HANJUKU, ULTRAMAN3, ROBOPON, BURAI, MONSTERMAKER,
  YYHG,  /* entrou em 12/09/2026, beta; vai por DESDE */
  GORILLA /* entrou em 12/09/2026, alfa; vai por DESDE */,
  SFG    /* entrou em 12/09/2026, alfa; vai por DESDE */,
  PSG,   /* entrou em 12/09/2026, alfa; vai por DESDE */
  GORILLA_FIX, /* 19/09/2026, o 1º Hacks/Fixes (tipo 'hack': só aparece nessa aba) */
  MANIAC_FIX, /* 21/09/2026, o 2º Hacks/Fixes: os 3 bugs do cartucho (B6, B11, B17) */
  SD,         /* 25/09/2026, beta; vai por DESDE */
  SRW64,      /* 27/09/2026, beta; vai por DESDE */
  LINKBATTLER, /* 30/09/2026, beta; vai por DESDE */
  TAEKWONDO,  /* 03/10/2026, release v1.0 EN+ES (build b651ff2b); vai por DESDE */
  FJ1         /* 05/10/2026, beta Definitive Edition v2.0 build 1 (EN/PT/ES, sobre a v1.03 do BlackPaladin); vai por DESDE */,
  AAG         /* 07/10/2026, beta v0.1 build 1 (EN/PT/ES juntas, Mega-CD); vai por DESDE */,
  DB3_FIX     /* 16/10/2026, o 3º Hacks/Fixes: os 8 defeitos do cartucho do Dragon Ball 3 (tipo 'hack': só aparece nessa aba) */,
  MAKAMAKA    /* 19/10/2026, beta v0.1 EN (build fce2c319): tradução + bugs do cartucho; vai por DESDE */,
  NEKOZAMURAI /* 22/10/2026, alfa v0.1 EN (os 3 discos num zip de 3 xdelta, md5 f2250142): o 1º PlayStation; vai por DESDE */,
  DIGIMON_BLUE /* 24/10/2026, beta v0.1 EN (build aed76ac3, BPS md5 071d7ef4): o 1º Nintendo DS; vai por DESDE */,
  DIGIMON_RED  /* 24/10/2026, beta v0.1 EN (build d34ca37d, BPS md5 dd32b2c1); vai por DESDE */
];

const POSTO = { release: 0, beta: 1, alfa: 2 };

/* LANÇAMENTO: da mais recente para a mais antiga, dentro de cada estado (beta desde
   07/10/2026; release e alfa desde 24/10/2026). A data é o dia em que o jogo ENTROU no
   estado atual no site, medida no histórico do index.html no origin/main (um jogo que
   caiu de estado e voltou conta a volta); empate no mesmo commit vai pela ordem de APELO.
   Jogo novo, ou que muda de estado, ganha (ou troca) a linha dele aqui, com data e hora.
   Sem a linha, o gerar.mjs para com erro, e o jogo não cai num lugar qualquer. */
const DESDE = {
  /* release */
  'ultraman-club-2':               '2026-10-23T03:22',
  'pocket-monsters-stadium':       '2026-10-23T00:32',
  'famicom-jump-1':                '2026-10-22T06:28',
  'dragon-ball-3-bugfix':          '2026-10-16T09:52',
  'dragon-ball-3':                 '2026-10-11T05:13',
  'taekwondo':                     '2026-10-03T08:21',
  'maniac-mansion-bugfix':         '2026-09-21T13:29',
  'maniac-mansion':                '2026-09-19T22:13',
  'gorilla-man-bugfix':            '2026-09-19T07:51',
  'gorilla-man':                   '2026-09-19T07:06',
  'magic-knight-rayearth-2':       '2026-09-19T06:17',
  'yu-yu-hakusho-gaiden':          '2026-09-18T23:31',
  /* beta */
  'digimon-xros-wars-red':         '2026-10-24T12:00',
  'digimon-xros-wars-blue':        '2026-10-24T12:01',
  'maka-maka':                     '2026-10-19T14:00',
  'shining-force-gaiden':          '2026-10-17T07:20',
  'after-armageddon-gaiden':       '2026-10-07T03:42',
  'ninja-burai-densetsu':          '2026-10-04T00:26',
  'super-robot-wars-link-battler': '2026-09-30T10:16',
  'super-robot-wars-64':           '2026-09-27T10:07',
  'slam-dunk':                     '2026-09-25T08:10',
  'famicom-jump-2':                '2026-09-16T23:02',
  'guevara':                       '2026-09-16T22:11',
  'nekketsu-kakutou-densetsu':     '2026-09-09T23:55',
  'gaia-saver':                    '2026-09-09T20:26',
  'tom-sawyer':                    '2026-09-09T12:51',
  /* alfa */
  'neko-zamurai':                  '2026-10-22T06:21',
  'captain-tsubasa':               '2026-09-16T23:02',
  'gozonji':                       '2026-09-16T23:02',
  'ultraman-club-3':               '2026-09-16T23:02',
  'monster-maker':                 '2026-09-16T23:02',
  'phantasy-star-gaiden':          '2026-09-13T21:56',
  'hanjuku-hero':                  '2026-09-09T11:57',
  'robot-poncots-64':              '2026-09-09T11:57',
};

for (const g of APELO) {
  if (!(g.nivel in POSTO)) {
    throw new Error(`jogos.mjs: "${g.slug}" tem nivel "${g.nivel}", que não existe em POSTO`);
  }
}

for (const g of APELO) {
  if (!DESDE[g.slug]) {
    throw new Error(`jogos.mjs: "${g.slug}" (${g.nivel}) não tem data de lançamento em DESDE`);
  }
}

/* sort estável: por estado e, dentro dele, do lançamento mais recente ao mais antigo */
export const JOGOS = [...APELO].sort((a, b) =>
  POSTO[a.nivel] - POSTO[b.nivel] ||
  DESDE[b.slug].localeCompare(DESDE[a.slug]));
