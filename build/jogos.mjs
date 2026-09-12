/* A LISTA. Fonte única: gerar.mjs e semear.mjs importam daqui, para não divergirem.

   A ORDEM É A QUE APARECE, e a home mostra TODOS. Ela é agrupada por estado e,
   dentro de cada estado, por apelo ao público — decisão do dono em 09/09/2026:
     1) os release   2) os beta    3) os alfa

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

/* Só a ordem de apelo ao público. O estado NÃO se declara aqui. */

/* FORA DA LISTA TEMPORARIAMENTE — 10/09/2026, pedido do dono: MANIAC (Maniac
   Mansion) sai do site ATÉ EXISTIR PATCH dele. Os dados NÃO foram apagados:
   continuam inteiros em `jogos-r34.mjs`, com fotos, resumo e ficha. Para trazer
   de volta, basta devolvê-lo ao array abaixo — na posição marcada — e rodar
   `node build/gerar.mjs`. Enquanto estiver fora, a rota `#/jogo/maniac-mansion`
   cai na página de projetos e ele não entra no placar do herói.
   O BURAI saiu junto e VOLTOU em 10/09/2026 (noite), com o patch alfa build 14. */
const APELO = [
  FJ2, CT, GUEVARA, DB3, MKR2,
  TOM, ULTRAMAN2,
  PMS64, /* MANIAC, */ GAIA, NEKKETSU, GOZONJI, HANJUKU, ULTRAMAN3, ROBOPON, BURAI, MONSTERMAKER,
  YYHG   /* entrou em 12/09/2026, beta: cai no fim do grupo dos beta */
];

const POSTO = { release: 0, beta: 1, alfa: 2 };

for (const g of APELO) {
  if (!(g.nivel in POSTO)) {
    throw new Error(`jogos.mjs: "${g.slug}" tem nivel "${g.nivel}", que não existe em POSTO`);
  }
}

/* sort estável: preserva a ordem de apelo dentro de cada grupo */
export const JOGOS = [...APELO].sort((a, b) => POSTO[a.nivel] - POSTO[b.nivel]);
