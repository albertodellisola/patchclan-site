/* Yu Yu Hakusho Gaiden (Mega Drive, Sega 1994). Ficha medida em ~/yyhg-hack
   (RETOMAR.md) — nada aqui é promessa. */

const bi = (pt, en, es) => ({ pt, en, es });

export const YYHG = {
  slug: 'yu-yu-hakusho-gaiden',
  nome: 'Yu Yu Hakusho Gaiden',
  subtitulo: '',
  jp: '幽☆遊☆白書 外伝',
  traducao_titulo: 'Battle to Unite the Demon Plane',
  publisher: 'Sega', dev: 'Sega', ano: 1994, data: '28/01/1994',
  sistema: 'Mega Drive', mapper: '2 MB expandidos para 4 MB · SRAM de 16 KB com bateria',
  categoria: bi('Tradução', 'Translation', 'Traducción'),
  nivel: 'beta',
  capa: 'yyhg/01-titulo.png',
  linha: bi('Nenhum ponteiro de texto existe em claro na ROM: eles moram dentro de scripts comprimidos.',
            'Not one text pointer exists in the open in this ROM: they live inside compressed scripts.',
            'Ningún puntero de texto existe a la vista en la ROM: viven dentro de scripts comprimidos.'),
  resumo: {
    pt: ['<i>Yu Yu Hakusho Gaiden</i> se passa dois dias antes do Torneio das Trevas: o Toguro aparece na frente do Yusuke, marca o encontro e vai embora. Daí cada um dos quatro — Yusuke, Kuwabara, Hiei e Kurama — anda pela cidade no seu próprio capítulo, esbarra em demônios que colhem uma emoção humana, e os quatro acabam no Mundo das Trevas. É aventura com menu de <b>Look</b>, <b>Talk</b> e <b>Move</b>, e a briga é de ação, com barra de energia do bicho no alto da tela.',
          'Ele nunca saiu do Japão nem ganhou tradução: o único projeto conhecido, de 2012, parou no despejo do roteiro. O texto é o que prende. Cada fala são <b>códigos de 12 bits</b> empacotados três em quatro, e <b>nenhum ponteiro existe em claro na ROM</b> — eles moram dentro dos vinte scripts de evento, que o jogo descomprime para a RAM. Reponteirar exigiria recomprimir tudo.',
          'A saída foi não tocar em script nenhum: no lugar da primeira palavra de cada fala japonesa entra um <b>desvio de quatro bytes</b> que manda o leitor para o texto novo, lá no fim de uma ROM que passou de 2 para <b>4 MB</b>. As <b>1.531 falas</b> saíram em inglês, com uma fonte de <b>duas letras por célula</b> — assim a caixa de diálogo, de 13 células, passou a caber <b>26 letras por linha</b> sem mexer no desenhador. A batalha também está em inglês: o nome do herói na caixa de status e os <b>36 nomes de inimigo</b> da barra de cima. <b>É beta</b>: falta jogar do começo ao fim, e os menus que só aparecem fundo no jogo ainda não foram vistos na tela.'],
    en: ['<i>Yu Yu Hakusho Gaiden</i> takes place two days before the Dark Tournament: Toguro shows up in front of Yusuke, sets the date and leaves. Then each of the four — Yusuke, Kuwabara, Hiei and Kurama — walks the city in his own chapter, runs into demons harvesting a human emotion, and all four end up in the Demon World. It is an adventure game driven by <b>Look</b>, <b>Talk</b> and <b>Move</b>, and the fighting is action, with the creature\'s energy bar across the top of the screen.',
          'It never left Japan and was never translated: the only known project, from 2012, stopped at the script dump. The text is what holds it. Every line is <b>12-bit codes</b> packed four to three words, and <b>not one pointer exists in the open in the ROM</b> — they live inside the twenty event scripts, which the game decompresses into RAM. Repointing would mean recompressing everything.',
          'The way out was to touch no script at all: where the first word of each Japanese line used to be there is now a <b>four-byte detour</b> sending the reader to the new text, at the end of a ROM grown from 2 to <b>4 MB</b>. All <b>1,531 lines</b> came out in English, with a font of <b>two letters per cell</b> — so the 13-cell dialogue box now holds <b>26 letters per line</b> with the renderer untouched. Battle is in English too: the hero\'s name in the status box and the <b>36 enemy names</b> in the top bar. <b>This is a beta</b>: the game still has to be played end to end, and the menus that only appear deep in the game have not been seen on screen yet.'],
    es: ['<i>Yu Yu Hakusho Gaiden</i> ocurre dos días antes del Torneo Oscuro: Toguro aparece ante Yusuke, fija la cita y se va. Después cada uno de los cuatro — Yusuke, Kuwabara, Hiei y Kurama — recorre la ciudad en su propio capítulo, se topa con demonios que cosechan una emoción humana, y los cuatro acaban en el Mundo Demoníaco. Es aventura con menú de <b>Look</b>, <b>Talk</b> y <b>Move</b>, y la pelea es de acción, con la barra de energía del bicho arriba de la pantalla.',
          'Nunca salió de Japón ni tuvo traducción: el único proyecto conocido, de 2012, se detuvo en el volcado del guion. Lo que traba es el texto. Cada frase son <b>códigos de 12 bits</b> empaquetados cuatro en tres, y <b>ningún puntero existe a la vista en la ROM</b> — viven dentro de los veinte scripts de evento, que el juego descomprime a la RAM. Repuntear exigiría recomprimirlo todo.',
          'La salida fue no tocar ningún script: donde estaba la primera palabra de cada frase japonesa entra un <b>desvío de cuatro bytes</b> que manda el lector al texto nuevo, al final de una ROM que pasó de 2 a <b>4 MB</b>. Las <b>1.531 frases</b> salieron en inglés, con una fuente de <b>dos letras por celda</b> — así la caja de diálogo, de 13 celdas, pasó a admitir <b>26 letras por línea</b> sin tocar el dibujante. La batalla también está en inglés: el nombre del héroe en la caja de estado y los <b>36 nombres de enemigo</b> de la barra superior. <b>Es una beta</b>: falta jugarlo de principio a fin, y los menús que solo aparecen hondo en el juego aún no se han visto en pantalla.']
  },
  numeros: [
    { v: '1.531', r: bi('falas do roteiro em inglês', 'lines of script in English', 'frases del guion en inglés') },
    { v: '36', r: bi('nomes de inimigo na barra de batalha', 'enemy names in the battle bar', 'nombres de enemigo en la barra de batalla') },
    { v: '4 bytes', r: bi('o desvio que dispensou recomprimir os scripts', 'the detour that spared recompressing the scripts', 'el desvío que evitó recomprimir los scripts') }
  ],
  grupos: [],
  patch: { versoes: { en: { arquivo: 'yu-yu-hakusho-gaiden-en.ips' }, pt: null, es: null },
           rom: 'Yu Yu Hakusho Gaiden (Japan).md', rom_md5: 'a339561a0d46fee4c2569de0b237a02b' },
  fotos: [
    { f: 'yyhg/01-titulo.png', t: bi('Tela de título', 'Title screen', 'Pantalla de título'),
      c: bi('O logo novo usa as cores que o jogo já carregava: ele entra no fade e escurece atrás do menu de opções, como o original.',
            'The new logo uses the colours the game already loaded: it joins the fade and dims behind the options menu, like the original.',
            'El logo nuevo usa los colores que el juego ya cargaba: entra en el fundido y se oscurece tras el menú de opciones, como el original.') },
    { f: 'yyhg/02-dialogo.png', t: bi('A primeira fala do jogo', 'The first line of the game', 'La primera frase del juego'),
      c: bi('A caixa tem 13 células por linha. Com duas letras por célula, cabem <b>26 letras</b> — e o desenhador do jogo não foi tocado.',
            'The box is 13 cells wide. With two letters per cell it holds <b>26 letters</b> — and the game\'s renderer was never touched.',
            'La caja tiene 13 celdas por línea. Con dos letras por celda caben <b>26 letras</b> — y el dibujante del juego no se tocó.') },
    { f: 'yyhg/03-batalha.png', t: bi('Batalha', 'Battle', 'Batalla'),
      c: bi('O nome do bicho sai de uma fonte de 8×8 que já tinha o alfabeto; o do herói, de uma segunda fonte de 31 glifos, realocada com pares de letras.',
            'The creature\'s name comes from an 8×8 font that already had the alphabet; the hero\'s, from a second font of 31 glyphs, relocated with letter pairs.',
            'El nombre del bicho sale de una fuente de 8×8 que ya tenía el alfabeto; el del héroe, de una segunda fuente de 31 glifos, reubicada con pares de letras.') },
    { f: 'yyhg/04-opcoes.png', t: bi('Opções', 'Options', 'Opciones'),
      c: bi('Os rótulos já eram ingleses no cartucho japonês. Só a velocidade da mensagem estava em katakana.',
            'The labels were already English on the Japanese cartridge. Only the message speed was in katakana.',
            'Las etiquetas ya eran inglesas en el cartucho japonés. Solo la velocidad del mensaje estaba en katakana.') }
  ]
};
