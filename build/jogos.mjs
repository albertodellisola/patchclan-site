/* A LISTA. Fonte única: gerar.mjs e semear.mjs importam daqui, para não divergirem.
   A ordem é a que aparece no site; os quatro primeiros vão para a home. */
import { FJ2 } from './jogo-fj2.mjs';
import { DB3 } from './jogo-db3.mjs';
import { CT }  from './jogo-ct.mjs';
import { GAIA, NEKKETSU } from './jogos-novos.mjs';
export const JOGOS = [FJ2, CT, DB3, GAIA, NEKKETSU];
