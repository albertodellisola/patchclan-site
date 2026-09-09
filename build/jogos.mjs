/* A LISTA. Fonte única: gerar.mjs e semear.mjs importam daqui, para não divergirem.

   A ORDEM É A QUE APARECE, e a home mostra TODOS. Ela é agrupada por estado e,
   dentro de cada estado, por apelo ao público — decisão do dono em 09/09/2026:
     1) os release   2) os beta    3) os alfa
   Promover ou rebaixar um projeto é mover a linha daqui e trocar o `nivel` no
   arquivo do jogo. O placar do herói e os grupos da página de projetos se
   recalculam sozinhos. */
import { FJ2 } from './jogo-fj2.mjs';
import { DB3 } from './jogo-db3.mjs';
import { CT }  from './jogo-ct.mjs';
import { TOM } from './jogo-tom.mjs';
import { GAIA, NEKKETSU, ULTRAMAN2, ULTRAMAN3, HANJUKU, MONSTERMAKER } from './jogos-novos.mjs';
import { GUEVARA, GOZONJI, MKR2, MANIAC, PMS64, ROBOPON, BURAI } from './jogos-r34.mjs';

export const JOGOS = [
  /* release — jogo inteiro em inglês, cada linha lida, patch publicado */
  FJ2, CT, GUEVARA,
  /* beta — já jogado do começo ao fim, em ordem de apelo ao público */
  DB3, MKR2, GOZONJI,
  /* alfa — o começo do caminho, em ordem de apelo ao público */
  PMS64, MANIAC, GAIA, NEKKETSU, ULTRAMAN2, TOM, HANJUKU, ULTRAMAN3, ROBOPON, BURAI, MONSTERMAKER
];
