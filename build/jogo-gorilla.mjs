const bi = (pt, en, es) => ({ pt, en, es });

export const GORILLA = {
  slug: 'gorilla-man',
  nome: 'The Gorilla Man',
  subtitulo: 'ゴリラーマン',
  jp: 'ゴリラーマン',
  publisher: 'Yonezawa / S’Pal', dev: 'Party Room 21', ano: 1992, data: '1992',
  sistema: 'Famicom', mapper: 'MMC3 · 512 KB · CHR-RAM de 8 KB',
  categoria: bi('Tradução', 'Translation', 'Traducción'),
  nivel: 'alfa',
  capa: 'gorilla/01-titulo.png',
  linha: bi('O jogo de tabuleiro do mangá de Harold Sakuishi que nunca saiu do Japão — e que até hoje não tinha patch nenhum, em idioma nenhum.',
            'The board game from Harold Sakuishi’s manga that never left Japan — and until now had no patch at all, in any language.',
            'El juego de mesa del manga de Harold Sakuishi que nunca salió de Japón — y que hasta hoy no tenía ningún parche, en ningún idioma.'),
  resumo: {
    pt: [
      '<i>Gorilla-Man</i> é o mangá de <b>Harold Sakuishi</b> — o mesmo de <i>Beck</i> — sobre um calouro de colégio com cara de gorila e um metro e noventa de altura. O cartucho de 1992 transformou aquilo num <b>jogo de tabuleiro escolar</b>: três cenários, seis personagens, e o dia letivo dividido em casas de evento, minijogos e provas. Nunca saiu do Japão e nunca teve tradução — <b>nem parcial, nem em outro idioma</b>.',
      'O texto do jogo não é um sistema só, são <b>quatro</b>: o motor de mensagens do tabuleiro, o do quiz, o das cartas e o dos minijogos, cada um com a sua tabela de ponteiros e o seu jeito de quebrar linha. Além deles há o que não é texto e sim <b>desenho</b>: os nomes dos personagens em kanji 16×16, os títulos de evento, o cartaz do gorila, o papel de parede do caça-níquel e o logotipo da tela de título. Esses não se traduzem escrevendo — se traduzem redesenhando tile por tile e remontando os metatiles da tela.',
      'Esta é uma <b>alfa, e ela mostra</b>: menus, nomes, classificação, cartas, os briefings, o quiz, a briga, <b>todos os minijogos</b>, as telas do modo Party, os 52 títulos de evento e o logotipo do título estão em inglês. Mas o jogo <b>ainda não foi jogado do começo ao fim</b> em nenhum dos três cenários, e dois deles congelam no final por um <b>bug do cartucho original</b>, que existe no japonês e ainda não foi corrigido aqui. A coluna vertical <code>〇月×日</code> do quadro-negro fica em japonês de propósito: é enfeite de sala de aula.'
    ],
    en: [
      '<i>Gorilla-Man</i> is the manga by <b>Harold Sakuishi</b> — the author of <i>Beck</i> — about a high-school freshman with a gorilla’s face and a six-foot-three frame. The 1992 cartridge turned that into a <b>school board game</b>: three scenarios, six characters, and the school day split into event squares, minigames and tests. It never left Japan and never had a translation — <b>not even a partial one, in any language</b>.',
      'The game’s text is not one system but <b>four</b>: the board message engine, the quiz engine, the card engine and the minigame engine, each with its own pointer table and its own way of breaking lines. Beyond those there is what is not text at all but <b>artwork</b>: the characters’ names as 16×16 kanji, the event titles, the gorilla poster, the slot machine wallpaper and the title screen logo. Those are not translated by typing — they are redrawn tile by tile and the screen’s metatiles rebuilt.',
      'This is an <b>alpha, and it shows</b>: menus, names, standings, cards, the briefings, the quiz, the fight, <b>every minigame</b>, the Party mode screens, the 52 event titles and the title logo are in English. But the game <b>has not yet been played through to the end</b> in any of the three scenarios, and two of them freeze at the finish because of a <b>bug in the original cartridge</b>, present in the Japanese and not yet fixed here. The vertical column <code>〇月×日</code> on the blackboard stays Japanese on purpose: it is classroom decoration.'
    ],
    es: [
      '<i>Gorilla-Man</i> es el manga de <b>Harold Sakuishi</b> — el mismo de <i>Beck</i> — sobre un novato de instituto con cara de gorila y casi dos metros de altura. El cartucho de 1992 convirtió aquello en un <b>juego de mesa escolar</b>: tres escenarios, seis personajes, y la jornada lectiva dividida en casillas de evento, minijuegos y exámenes. Nunca salió de Japón y nunca tuvo traducción — <b>ni parcial, ni en ningún idioma</b>.',
      'El texto del juego no es un sistema, son <b>cuatro</b>: el motor de mensajes del tablero, el del concurso, el de las cartas y el de los minijuegos, cada uno con su tabla de punteros y su forma de cortar línea. Además está lo que no es texto sino <b>dibujo</b>: los nombres de los personajes en kanji de 16×16, los títulos de evento, el cartel del gorila, el papel pintado de la tragaperras y el logotipo de la pantalla de título. Esos no se traducen escribiendo — se redibujan tile a tile y se rehacen los metatiles de la pantalla.',
      'Esta es una <b>alfa, y se nota</b>: menús, nombres, clasificación, cartas, los briefings, el concurso, la pelea, <b>todos los minijuegos</b>, las pantallas del modo Party, los 52 títulos de evento y el logotipo del título están en inglés. Pero el juego <b>todavía no se ha jugado de principio a fin</b> en ninguno de los tres escenarios, y dos de ellos se congelan al final por un <b>fallo del cartucho original</b>, presente en el japonés y aún sin corregir aquí. La columna vertical <code>〇月×日</code> de la pizarra sigue en japonés a propósito: es decoración de aula.'
    ]
  },
  numeros: [
    { v: '52', r: bi('títulos de evento redesenhados', 'event titles redrawn', 'títulos de evento redibujados') },
    { v: '4', r: bi('motores de texto diferentes', 'different text engines', 'motores de texto diferentes') },
    { v: '512 KB', r: bi('de ROM, no teto do mapper', 'of ROM, at the mapper’s ceiling', 'de ROM, en el techo del mapper') },
    { v: '0', r: bi('patches anteriores, em idioma nenhum', 'earlier patches, in any language', 'parches anteriores, en ningún idioma') }
  ],
  grupos: [
    { titulo: bi('O que este cartucho ensinou', 'What this cartridge taught', 'Lo que enseñó este cartucho'), itens: [
      { t: bi('<b>Item de bloco de texto sem ponteiro é suspeito de não ser texto.</b> O build reempacotava o texto do tabuleiro por cima de uma <b>tabela de 23 ponteiros</b> que o extrator tinha engolido como se fossem três strings — eram as únicas três, entre 84, sem ponteiro algum apontando para elas. O dado era preservado, mas mudava de lugar: o jogo lia lixo como endereço e travava em laço infinito.',
              '<b>A text-block item with no pointer is suspect of not being text.</b> The build was repacking the board text over a <b>table of 23 pointers</b> that the extractor had swallowed as if they were three strings — the only three, out of 84, with no pointer aiming at them. The data was preserved but moved: the game read garbage as an address and hung in an infinite loop.',
              '<b>Un elemento de bloque de texto sin puntero es sospechoso de no ser texto.</b> El build reempaquetaba el texto del tablero encima de una <b>tabla de 23 punteros</b> que el extractor se había tragado como si fueran tres cadenas — las únicas tres, de 84, sin ningún puntero apuntándolas. El dato se conservaba pero cambiaba de sitio: el juego leía basura como dirección y se colgaba en un bucle infinito.'), foto: 'gorilla/03-tabuleiro.png' },
      { t: bi('<b>Ponteiro só existe em tabela medida.</b> A busca cega por pares de bytes reescreveu <b>código</b>: um <code>JSR $8099</code> virou <code>ORA</code>, e era ali que o quiz travava. Também desviava um <code>BNE</code> e gravava "ponteiro" dentro do próprio texto novo. O conserto não foi pular a faixa que doeu — foi parar de procurar às cegas.',
              '<b>A pointer only exists inside a measured table.</b> Blind searching for byte pairs rewrote <b>code</b>: a <code>JSR $8099</code> became <code>ORA</code>, and that was where the quiz hung. It also redirected a <code>BNE</code> and wrote a "pointer" inside the new text itself. The fix was not to skip the range that hurt — it was to stop searching blind.',
              '<b>Un puntero solo existe dentro de una tabla medida.</b> La búsqueda ciega de pares de bytes reescribió <b>código</b>: un <code>JSR $8099</code> se convirtió en <code>ORA</code>, y ahí era donde se colgaba el concurso. También desviaba un <code>BNE</code> y escribía un "puntero" dentro del propio texto nuevo. El arreglo no fue saltarse el rango que dolía — fue dejar de buscar a ciegas.') },
      { t: bi('<b>Os mesmos oito tiles servem a dois lugares.</b> O nome do personagem aparece numa fileira de oito na barra de status e, <b>partido em quatro e quatro</b>, no balão sobre a peça do tabuleiro. Centralizar em pixel em vez de em tile fazia o balão cortar cada letra ao meio — e só nos nomes de comprimento ímpar, o que escondeu o defeito até um print do dono mostrar <code>ABE</code> virado em pedaços.',
              '<b>The same eight tiles serve two places.</b> A character’s name shows as a row of eight on the status bar and, <b>split four and four</b>, in the balloon above the board piece. Centring by pixel instead of by tile made the balloon cut every letter in half — and only for odd-length names, which hid the defect until a screenshot showed <code>ABE</code> in pieces.',
              '<b>Los mismos ocho tiles sirven a dos sitios.</b> El nombre del personaje aparece en una fila de ocho en la barra de estado y, <b>partido en cuatro y cuatro</b>, en el globo sobre la ficha del tablero. Centrar por píxel en vez de por tile hacía que el globo cortara cada letra por la mitad — y solo en los nombres de longitud impar, lo que escondió el defecto hasta que una captura mostró <code>ABE</code> hecho pedazos.'), foto: 'gorilla/02-evento.png' }
    ]},
    { titulo: bi('O que falta', 'What is missing', 'Lo que falta'), itens: [
      { t: bi('<b>Jogar do começo ao fim.</b> Nenhum dos três cenários foi percorrido inteiro. Dois deles <b>congelam no final</b> — é bug do cartucho japonês, não da tradução, e ainda não foi diagnosticado.',
              '<b>A full playthrough.</b> None of the three scenarios has been played all the way through. Two of them <b>freeze at the end</b> — a bug in the Japanese cartridge, not in the translation, and still undiagnosed.',
              '<b>Jugar de principio a fin.</b> Ninguno de los tres escenarios se ha recorrido entero. Dos de ellos <b>se congelan al final</b> — es un fallo del cartucho japonés, no de la traducción, y sigue sin diagnosticar.') },
      { t: bi('<b>Telas que ninguém viu ainda.</b> O jogo das carteiras e o cardápio do Wolf Ramen aparecem em situações raras e nunca foram alcançados nos testes automáticos. Enquanto não forem vistos na tela, não dá para afirmar que estão em inglês.',
              '<b>Screens nobody has seen yet.</b> The desk game and the Wolf Ramen menu show up in rare situations and were never reached in automated testing. Until they are seen on screen, there is no claiming they are in English.',
              '<b>Pantallas que nadie ha visto aún.</b> El juego de los pupitres y la carta del Wolf Ramen aparecen en situaciones raras y nunca se alcanzaron en las pruebas automáticas. Mientras no se vean en pantalla, no se puede afirmar que estén en inglés.') }
    ]}
  ],
  patch: {
    versoes: { en: { arquivo: 'gorilla-man-en.ips' }, pt: null, es: null },
    rom: 'Gorilla Man, The (Japan).nes',
    rom_md5: '2377df3f6909fa9fd858ab03791e8db9'
  },
  fotos: [
    { f: 'gorilla/01-titulo.png', t: bi('Tela de título', 'Title screen', 'Pantalla de título'),
      c: bi('O logotipo redesenhado a partir da arte do dono do projeto.', 'The logo redrawn from the project owner’s artwork.', 'El logotipo redibujado a partir del arte del dueño del proyecto.') },
    { f: 'gorilla/02-evento.png', t: bi('Casa de evento', 'Event square', 'Casilla de evento'),
      c: bi('Os 52 títulos de evento são desenho, não texto: foram redesenhados um a um.', 'The 52 event titles are artwork, not text: each one was redrawn.', 'Los 52 títulos de evento son dibujo, no texto: se redibujaron uno a uno.') },
    { f: 'gorilla/03-tabuleiro.png', t: bi('O tabuleiro', 'The board', 'El tablero'),
      c: bi('Menu de comando, barra de status e o nome do personagem, todos em inglês.', 'Command menu, status bar and the character’s name, all in English.', 'Menú de comandos, barra de estado y el nombre del personaje, todo en inglés.') }
  ]
};
