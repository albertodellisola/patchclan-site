/* OS GUIAS. Um por jogo, escrito aqui, lido no site — não existe download.

   O guia NÃO é o manual. O manual diz o que cada comando faz e usa a palavra exata
   que está na tela do patch. O guia diz como jogar BEM: o que priorizar, o que evitar,
   e as armadilhas do cartucho original. Um ensina a operar, o outro ensina a decidir.

   A ESTRUTURA É A MESMA do manual (build/manual-*.mjs), de propósito: o mesmo
   renderizador desenha os dois (paginaDoc em corpo.html), a mesma folha de estilo os
   imprime, e a mesma regra vale para o idioma — cada campo é {pt, en, es}, e o que não
   tiver espanhol cai no inglês.

     { slug, titulo:{pt,en,es}, intro:{pt,en,es},
       secoes: [ { id, titulo:{...}, foto?:'jogo/arquivo.png',
                   paras?:{pt:[],en:[],es:[]}, lista?:[{k, v:{...}}] } ] }

   Jogo sem guia simplesmente não ganha link — nada fica esmaecido, nada aparece vazio.
   Acrescentar um: escrever `guia-<jogo>.mjs`, importar aqui e pôr no objeto abaixo. */

export const GUIAS = {
};
