export const TOM = {
  slug: 'tom-sawyer',
  nome: "Square's Tom Sawyer",
  subtitulo: 'スクウェアのトム・ソーヤ',
  jp: 'スクウェアのトム・ソーヤ',
  publisher: 'Square', dev: 'Square', ano: 1989, data: '1989',
  sistema: 'Famicom', mapper: 'MMC1 (SUROM viável) · 256 KB PRG · CHR-RAM de 8 KB · save com bateria',
  categoria: { pt: 'Tradução', en: 'Translation', es: 'Traducción' },
  nivel: 'beta',
  capa: 'tom/01-titulo.png',
  linha: {
    pt: 'A Square pegou Mark Twain e fez um RPG com Tom e Huck. O livro é americano; o jogo ficou no Japão, e a ROM teve de dobrar para caber.',
    en: 'Square took Mark Twain and made an RPG with Tom and Huck. The book is American; the game stayed in Japan, and the ROM had to double.',
    es: 'Square tomó la novela de Mark Twain y montó un RPG con Tom y Huck. El libro es americano; el juego se quedó en Japón, y la ROM tuvo que duplicarse.'
  },
  resumo: {
    pt: [
      'De todos os cartuchos deste catálogo, este é o único cuja história você provavelmente já leu. Em 1989 a Square — dois anos antes do <i>Final Fantasy IV</i> — pegou o romance do Mark Twain e fez um RPG de Famicom com Tom e Huck, no Mississippi de 1855. E o resultado tem cara de Square: retrato do personagem na caixa de fala, um menu de campo que diz <code>EXAMINE / TAKE  DIG / ITEM</code>, porque num jogo de Tom Sawyer cavar precisa ser comando, e um inventário onde cabem uma barraca e uma bola de gude.',
      'Boa parte do que se ia acrescentar já vinha de fábrica: o cartucho <b>salva em bateria</b>, e o menu de abertura de 1989 já trazia <code>CONTINUE / START / SPEED 5</code> — ajuste de velocidade de texto, e já em inglês. O que faltava era o resto. As <b>576 mensagens</b> e os <b>70 nomes</b> estão traduzidos, escritos numa fonte latina de <b>61 tiles novos</b> desenhados sobre as casas de kana que o inglês não usa, mais os dez dígitos, sem tocar em nenhum gráfico de tela — e a tela de título saiu redesenhada como <code>SQUARE\'S / TOM SAWYER</code>, provada em jogo.',
      'O inglês custou espaço: medido neste cartucho, ele ocupa <b>1,63×</b> o japonês, e a ROM inteira tinha <b>6,2 KB livres</b>, fragmentados, com a maior região contígua em 1.168 bytes e o bloco de texto do banco 6 fechando com 9 bytes de sobra. A saída foi expandir para <b>512 KB</b> pelo caminho SUROM — como o jogo usa CHR-RAM, os registradores de banco de CHR estão ociosos e o bit 4 vira o A18 do PRG —, com uma cópia do banco fixo na metade nova, sem a qual o cartucho perde o kernel e trava no boot. Depois disso a varredura foi refeita e devolveu mais <b>2,1 KB de japonês vivo</b> que a extração do roteiro não pegava: nomes de item, dois menus de batalha, os créditos escondidos. E há um segredo: um <b>código de oito caracteres digitado no campo de nome</b>, que no original era <code>ホワイトラビット</code>, o coelho branco, e agora se digita <code>WHITERAB</code>. Não há patch para instalar; esta página acompanha o trabalho.'
    ],
    en: [
      'Of every cartridge in this catalogue, this is the only one whose story you have probably already read. In 1989 Square — two years before <i>Final Fantasy IV</i> — took Mark Twain\'s novel and made a Famicom RPG with Tom and Huck, on the 1855 Mississippi. And the result looks like Square: a character portrait in the dialogue box, a field menu reading <code>EXAMINE / TAKE  DIG / ITEM</code>, because in a Tom Sawyer game digging has to be a command, and an inventory with room for a tent and a marble.',
      'Much of what you would think to add was already there in 1989: the cartridge <b>saves to battery</b>, and the boot menu already offered <code>CONTINUE / START / SPEED 5</code> — a text-speed setting, already in English. What was left was everything else. The <b>576 messages</b> and <b>70 names</b> are translated, written in a Latin font of <b>61 new tiles</b> drawn over the kana slots English does not use, plus the ten digits, without touching a single screen graphic — and the title screen was redrawn as <code>SQUARE\'S / TOM SAWYER</code>, proved in game.',
      'English cost space: measured on this cartridge, it runs <b>1.63×</b> the Japanese, and the whole ROM had <b>6.2 KB free</b>, fragmented, the largest contiguous region at 1,168 bytes and the bank 6 text block closing with 9 bytes to spare. The way out was expanding to <b>512 KB</b> by the SUROM route — because the game uses CHR-RAM, the CHR bank registers sit idle and bit 4 becomes PRG A18 — with a copy of the fixed bank in the new half, without which the cartridge loses its kernel and hangs at boot. After that the sweep was run again and returned another <b>2.1 KB of live Japanese</b> the script extraction had not reached: item names, two battle menus, the hidden credits. And there is a secret: an <b>eight-character code typed into the name field</b>, which in the original was <code>ホワイトラビット</code>, the white rabbit, and is now typed <code>WHITERAB</code>. There is no patch to install; this page follows the work.'
    ],
    es: [
      'De todos los cartuchos de este catálogo, este es el único cuya historia probablemente ya has leído. En 1989 Square — dos años antes de <i>Final Fantasy IV</i> — tomó la novela de Mark Twain e hizo un RPG de Famicom con Tom y Huck, en el Misisipi de 1855. Y el resultado tiene cara de Square: retrato del personaje en la caja de diálogo, un menú de campo que dice <code>EXAMINE / TAKE  DIG / ITEM</code>, porque en un juego de Tom Sawyer cavar tiene que ser un comando, y un inventario donde caben una tienda de campaña y una canica.',
      'Buena parte de lo que uno pensaría en añadir ya venía de fábrica: el cartucho <b>guarda con pila</b>, y el menú de arranque de 1989 ya traía <code>CONTINUE / START / SPEED 5</code> — ajuste de velocidad de texto, y ya en inglés. Lo que quedaba era todo lo demás. Los <b>576 mensajes</b> y los <b>70 nombres</b> están traducidos, escritos en una fuente latina de <b>61 tiles nuevos</b> dibujados sobre las casillas de kana que el inglés no usa, más las diez cifras, sin tocar ni un gráfico de pantalla — y la pantalla de título salió rediseñada como <code>SQUARE\'S / TOM SAWYER</code>, probada en juego.',
      'El inglés costó espacio: medido en este cartucho, ocupa <b>1,63×</b> lo que el japonés, y la ROM entera tenía <b>6,2 KB libres</b>, fragmentados, con la mayor región contigua en 1.168 bytes y el bloque de texto del banco 6 cerrando con 9 bytes de sobra. La salida fue ampliar a <b>512 KB</b> por el camino SUROM — como el juego usa CHR-RAM, los registros de banco de CHR están ociosos y el bit 4 pasa a ser el A18 del PRG —, con una copia del banco fijo en la mitad nueva, sin la cual el cartucho pierde el kernel y se cuelga al arrancar. Después de eso el barrido se rehízo y devolvió otros <b>2,1 KB de japonés vivo</b> que la extracción del guion no alcanzaba: nombres de objeto, dos menús de combate, los créditos escondidos. Y hay un secreto: un <b>código de ocho caracteres escrito en el campo de nombre</b>, que en el original era <code>ホワイトラビット</code>, el conejo blanco, y ahora se escribe <code>WHITERAB</code>. No hay parche que instalar; esta página sigue el trabajo.'
    ]
  },
  numeros: [
    { v: '0', r: { pt: 'blocos de gráfico no arquivo', en: 'graphics blocks in the file', es: 'bloques de gráfico en el archivo' } },
    { v: '113', r: { pt: 'tiles livres para 61 necessários', en: 'free tiles for the 61 needed', es: 'tiles libres para los 61 necesarios' } },
    { v: '12', r: { pt: 'letras latinas já existem', en: 'Latin letters already exist', es: 'letras latinas ya existen' } },
    { v: '2', r: { pt: 'linhas por caixa de fala', en: 'lines per dialogue box', es: 'líneas por caja de diálogo' } }
  ],
  grupos: [
    { titulo: { pt: 'O problema que este jogo traz', en: 'The problem this game brings', es: 'El problema que trae este juego' }, itens: [
      { t: { pt: '<b>CHR-RAM, não CHR-ROM.</b> Nos outros três, os desenhos ficam num bloco do arquivo e se editam direto. Aqui esse bloco <b>não existe</b>: os tiles moram junto com o código e são copiados para a memória de vídeo em tempo de execução. Achar a fonte é achar a <b>rotina que a carrega</b>, não a figura.',
             en: '<b>CHR-RAM, not CHR-ROM.</b> In the other three, the drawings sit in a block of the file and are edited directly. Here that block <b>does not exist</b>: the tiles live alongside the code and are copied into video memory at run time. Finding the font means finding the <b>routine that uploads it</b>, not the picture.',
             es: '<b>CHR-RAM, no CHR-ROM.</b> En los otros tres, los dibujos están en un bloque del archivo y se editan directamente. Aquí ese bloque <b>no existe</b>: los tiles viven junto al código y se copian a la memoria de vídeo en tiempo de ejecución. Encontrar la fuente es encontrar la <b>rutina que la carga</b>, no la imagen.' }, foto: 'tom/01-titulo.png' },
      { t: { pt: 'A boa notícia, medida: <b>os tiles estão crus, sem compressão</b> — a fonte está em <code>0x017720</code>, com 140 tiles. Não há descompressor a vencer, nem para a fonte nem para as imagens.',
             en: 'The good news, measured: <b>the tiles are raw, uncompressed</b> — the font sits at <code>0x017720</code>, 140 tiles. There is no decompressor to defeat, for the font or for the pictures.',
             es: 'La buena noticia, medida: <b>los tiles están crudos, sin compresión</b> — la fuente está en <code>0x017720</code>, con 140 tiles. No hay descompresor que vencer, ni para la fuente ni para las imágenes.' } }
    ]},
    { titulo: { pt: 'O que já foi medido', en: 'What is already measured', es: 'Lo que ya está medido' }, itens: [
      { t: { pt: '<b>A fonte cabe.</b> Reciclando os kana — que o inglês não usa — sobram <b>113 tiles</b> para os cerca de 61 necessários (A-Z, a-z e pontuação). Sem fonte de largura variável e sem tocar em gráfico de tela.',
             en: '<b>The font fits.</b> Recycling the kana — which English does not use — leaves <b>113 tiles</b> for the roughly 61 needed (A-Z, a-z and punctuation). With no variable-width font and without touching any screen graphic.',
             es: '<b>La fuente cabe.</b> Reciclando los kana — que el inglés no usa — sobran <b>113 tiles</b> para los aproximadamente 61 necesarios (A-Z, a-z y puntuación). Sin fuente de ancho variable y sin tocar ningún gráfico de pantalla.' } },
      { t: { pt: 'O alfabeto latino tem de cair na faixa de códigos <code>$09-$8E</code>: acima de <code>$90</code> o motor arrasta um diacrítico para a linha de cima, e <code>$D0-$D3</code> estão reservados para inserir o nome do personagem.',
             en: 'The Latin alphabet has to land in the code range <code>$09-$8E</code>: above <code>$90</code> the engine drags a diacritic onto the line above, and <code>$D0-$D3</code> are reserved for inserting the character’s name.',
             es: 'El alfabeto latino tiene que caer en el rango de códigos <code>$09-$8E</code>: por encima de <code>$90</code> el motor arrastra un diacrítico a la línea de arriba, y <code>$D0-$D3</code> están reservados para insertar el nombre del personaje.' } },
      { t: { pt: '<b>Doze letras latinas já existem</b> na ROM — <code>A C D E N O P I R S T U</code> e os dígitos, o suficiente para escrever <code>CONTINUE</code>, <code>START</code>, <code>SPEED</code> e <code>SQUARE</code>. As outras catorze, mais todas as minúsculas, precisam ser desenhadas.',
             en: '<b>Twelve Latin letters already exist</b> in the ROM — <code>A C D E N O P I R S T U</code> and the digits, enough to write <code>CONTINUE</code>, <code>START</code>, <code>SPEED</code> and <code>SQUARE</code>. The other fourteen, plus every lower-case letter, have to be drawn.',
             es: '<b>Doce letras latinas ya existen</b> en la ROM — <code>A C D E N O P I R S T U</code> y las cifras, suficiente para escribir <code>CONTINUE</code>, <code>START</code>, <code>SPEED</code> y <code>SQUARE</code>. Las otras catorce, más todas las minúsculas, hay que dibujarlas.' }, foto: 'tom/02-menu.png' },
      { t: { pt: '<b>O menu de opções já existe e já está em inglês.</b> O jogo de 1989 abre com <code>CONTINUE / START / SPEED 5</code> — inclusive o ajuste de velocidade de texto que os outros hacks tiveram de acrescentar. Aqui não se cria tela nova.',
             en: '<b>The options menu already exists, and is already in English.</b> The 1989 game opens with <code>CONTINUE / START / SPEED 5</code> — including the text-speed setting the other hacks had to add. Here no new screen gets built.',
             es: '<b>El menú de opciones ya existe, y ya está en inglés.</b> El juego de 1989 abre con <code>CONTINUE / START / SPEED 5</code> — incluido el ajuste de velocidad de texto que los otros hacks tuvieron que añadir. Aquí no se crea ninguna pantalla nueva.' } },
      { t: { pt: '<b>A restrição mais dura é a caixa de fala:</b> retrato do personagem à esquerda, duas linhas de texto, e a linha útil curta por causa do retrato. Inglês é mais largo que kana, e sem fonte de largura variável não há como encolher.',
             en: '<b>The hardest constraint is the dialogue box:</b> a character portrait on the left, two lines of text, and a short usable line because of the portrait. English is wider than kana, and with no variable-width font there is no way to shrink it.',
             es: '<b>La restricción más dura es la caja de diálogo:</b> retrato del personaje a la izquierda, dos líneas de texto, y la línea útil corta por el retrato. El inglés es más ancho que el kana, y sin fuente de ancho variable no hay forma de encogerlo.' }, foto: 'tom/03-dialogo.png' },
      { t: { pt: '<b>Expansão para 512 KB é viável</b> pelo caminho SUROM: como o jogo usa CHR-RAM, os registradores de banco de CHR estão ociosos e o bit 4 vira o A18 do PRG. <b>Só será usada se a conta do roteiro exigir</b> — até agora não exigiu.',
             en: '<b>Expansion to 512 KB is viable</b> by the SUROM route: because the game uses CHR-RAM, the CHR bank registers are idle and bit 4 becomes PRG A18. <b>It will only be used if the script arithmetic demands it</b> — so far it has not.',
             es: '<b>La expansión a 512 KB es viable</b> por la vía SUROM: como el juego usa CHR-RAM, los registros de banco de CHR están ociosos y el bit 4 pasa a ser PRG A18. <b>Solo se usará si la cuenta del guion lo exige</b> — hasta ahora no lo ha exigido.' } }
    ]},
    { titulo: { pt: 'O que vem a seguir', en: 'What comes next', es: 'Lo que viene' }, itens: [
      { t: { pt: 'O roteiro está sendo extraído. Depois dele vêm a tabela de caracteres, a fonte latina desenhada e a reinserção — e só então existe algo jogável para chamar de beta.',
             en: 'The script is being extracted. After it come the character table, the drawn Latin font and the reinsertion — and only then is there something playable to call a beta.',
             es: 'El guion se está extrayendo. Después vienen la tabla de caracteres, la fuente latina dibujada y la reinserción — y solo entonces habrá algo jugable que llamar beta.' } },
      { t: { pt: '<b>Nenhuma data é prometida</b>, aqui como em tudo o mais.',
             en: '<b>No date is promised</b>, here as anywhere else.',
             es: '<b>No se promete ninguna fecha</b>, aquí como en todo lo demás.' } }
    ]}
  ],
  patch: {
    versoes: { en: null, pt: null, es: null },
    rom: 'Square no Tom Sawyer (Japan).nes',
    rom_md5: 'b7e85ec90d071443ea69614c02a7a0a0'
  },
  fotos: [
    { f: 'tom/01-titulo.png', t: { pt: 'Tela de título', en: 'Title screen', es: 'Pantalla de título' },
      c: { pt: 'ROM original. O título é texto em katakana, não um logo desenhado — o que torna a troca barata.',
           en: 'Original ROM. The title is katakana text, not a drawn logo — which makes replacing it cheap.',
           es: 'ROM original. El título es texto en katakana, no un logo dibujado — lo que abarata el reemplazo.' } },
    { f: 'tom/02-menu.png', t: { pt: 'Menu de abertura', en: 'Boot menu', es: 'Menú de arranque' },
      c: { pt: 'ROM original — e já em inglês, com ajuste de velocidade de texto de fábrica.',
           en: 'Original ROM — and already in English, with a factory text-speed setting.',
           es: 'ROM original — y ya en inglés, con ajuste de velocidad de texto de fábrica.' } },
    { f: 'tom/03-dialogo.png', t: { pt: 'A caixa de fala', en: 'The dialogue box', es: 'La caja de diálogo' },
      c: { pt: 'ROM original. Retrato à esquerda e duas linhas: é esta a restrição que decide a tradução.',
           en: 'Original ROM. Portrait on the left and two lines: this is the constraint that decides the translation.',
           es: 'ROM original. Retrato a la izquierda y dos líneas: esta es la restricción que decide la traducción.' } },
    { f: 'tom/06-abertura.png', t: { pt: 'A abertura', en: 'The opening', es: 'La apertura' },
      c: { pt: 'ROM original. Missouri, 1855 — o texto que abre o jogo.',
           en: 'Original ROM. Missouri, 1855 — the text that opens the game.',
           es: 'ROM original. Misuri, 1855 — el texto que abre el juego.' } },
    { f: 'tom/04-campo.png', t: { pt: 'No campo', en: 'In the field', es: 'En el campo' },
      c: { pt: 'ROM original. O Mississippi da Square, em tiles.',
           en: "Original ROM. Square's Mississippi, in tiles.",
           es: 'ROM original. El Misisipi de Square, en tiles.' } },
    { f: 'tom/05-status.png', t: { pt: 'Status', en: 'Status', es: 'Estado' },
      c: { pt: 'ROM original. HP, AP, DP e QP já saem em letras latinas; os comandos, não.',
           en: 'Original ROM. HP, AP, DP and QP already come out in Latin letters; the commands do not.',
           es: 'ROM original. HP, AP, DP y QP ya salen en letras latinas; los comandos no.' } }
  ]
};
