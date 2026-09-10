/* Os projetos que entraram depois dos três primeiros. Cada um traz o que já foi
   MEDIDO no seu próprio repositório — nada aqui é promessa. */

const bi = (pt, en, es) => ({ pt, en, es });

export const ULTRAMAN2 = {
  slug: 'ultraman-club-2',
  nome: 'Ultraman Club 2',
  subtitulo: 'Kaettekita Ultraman Club',
  jp: '帰ってきたウルトラマン倶楽部',
  publisher: 'Shinsei', dev: 'Tsuburaya Prod.', ano: 1989, data: '1989',
  sistema: 'Famicom', mapper: 'MMC3 · 128 KB PRG expandido para 256 KB',
  categoria: bi('Tradução', 'Translation', 'Traducción'),
  nivel: 'beta',
  capa: 'u2/01-titulo.png',
  linha: bi('O RPG em que Zoffy, Ace, Taro e Seven viram bonecos de cabeça grande — e o bestiário inteiro, perto de noventa monstros, saiu em inglês.',
            'The RPG where Zoffy, Ace, Taro and Seven become big-headed figures — with the whole bestiary, close to ninety monsters, now in English.',
            'El RPG en el que Zoffy, Ace, Taro y Seven son muñecos cabezones — y el bestiario entero, cerca de noventa monstruos, salió en inglés.'),
  resumo: {
    pt: [
      'A Tsuburaya deixou os Ultras virarem bonecos de cabeça grande e os pôs num RPG de Famicom, com a Shinsei, em 1989. O elenco é o panteão inteiro — Ultraman, <b>Zoffy</b>, Ace, Taro, Seven, Jack, a Mãe e o Pai de Ultra, o Rei de Ultra — e o mapa é feito dos lugares que a série construiu ao longo de vinte anos: a <b>Terra dos Ultras</b>, a Vila do Pigmon, o <b>Cemitério de Monstros</b>. Do outro lado, os alienígenas de sempre: Baltan, Metron, Guts.',
      'O patch em <b>inglês está publicado</b>, com <b>653 entradas de texto</b>: 447 mensagens de diálogo, batalha, descrição de item, sequência final e créditos; 56 de menu, golpes e itens; e <b>146 entradas de combate</b> que carregam o bestiário inteiro, perto de noventa monstros. Cada nome de kaiju foi conferido contra o manual japonês e contra a nomenclatura consagrada da série — num patch de tradução, nome errado é o defeito que o fã enxerga primeiro. A fonte do jogo nem tinha <code>.</code> <code>,</code> <code>\'</code> <code>-</code>: os quatro glifos foram desenhados sobre kanji que o texto traduzido não usa mais.',
      'As <b>146 entradas de combate</b> são o quarto bloco de texto da ROM, e só apareceram porque a varredura foi refeita na ROM já <i>montada</i>. Na ROM original os bytes de ponteiro do bloco caem na faixa do kana, e a análise o havia descartado como dado binário — é o lembrete de que uma tradução termina quando a ROM inteira foi varrida, não quando a lista de tabelas conhecidas acabou. Até quatro partículas japonesas escaparam de qualquer varredura de tabela, porque estão escritas dentro do código como <code>LDA #$AC</code> no meio da rotina de batalha, colando kana no fim do nome do monstro na tela. Nem o inglês cabia no cartucho como ele saiu de fábrica: a ROM foi <b>expandida de 128 para 256 KB</b>, com os bancos 14 e 15 duplicados no fim, porque no MMC3 o banco fixo é sempre o último. O que ficou gravado é lido de volta e comparado byte a byte com o roteiro: <b>653 entradas, zero divergências</b>.'
    ],
    en: [
      'Tsuburaya let the Ultras become big-headed chibi figures and put them in a Famicom RPG, with Shinsei, in 1989. The cast is the whole pantheon — Ultraman, <b>Zoffy</b>, Ace, Taro, Seven, Jack, the Mother and Father of Ultra, Ultraman King — and the map is built from places the series raised over twenty years: the <b>Land of Ultra</b>, Pigmon Village, the <b>Monster Graveyard</b>. On the other side, the usual aliens: Baltan, Metron, Guts.',
      'The <b>English patch is published</b>, carrying <b>653 text entries</b>: 447 messages of dialogue, battle, item descriptions, the ending sequence and the credits; 56 for menus, moves and items; and <b>146 battle entries</b> holding the entire bestiary, close to ninety monsters. Every kaiju name was checked against the Japanese manual and against the series\' settled nomenclature — in a translation patch, a wrong name is the defect a fan spots first. The game\'s font did not even have <code>.</code> <code>,</code> <code>\'</code> <code>-</code>: those four glyphs were drawn over kanji the translated text no longer uses.',
      'Those <b>146 battle entries</b> are the ROM\'s fourth text block, and they only surfaced because the sweep was run again on the <i>built</i> ROM. In the original ROM the block\'s pointer bytes fall inside the kana range, and the analysis had dismissed it as binary data — a reminder that a translation ends when the whole ROM has been swept, not when the list of known tables runs out. Four Japanese particles escaped every table sweep as well, because they are written inside the program as <code>LDA #$AC</code> in the middle of the battle routine, gluing kana onto the end of the monster\'s name on screen. Not even English fit the cartridge as it shipped: the ROM was <b>expanded from 128 to 256 KB</b>, with banks 14 and 15 duplicated at the end, because on MMC3 the fixed bank is always the last one. What ends up written is read back and compared byte for byte against the script: <b>653 entries, zero mismatches</b>.'
    ],
    es: [
      'Tsuburaya dejó que los Ultras se volvieran muñecos cabezones y los puso en un RPG de Famicom, con Shinsei, en 1989. El reparto es el panteón entero — Ultraman, <b>Zoffy</b>, Ace, Taro, Seven, Jack, la Madre y el Padre de Ultra, el Rey de Ultra — y el mapa está hecho de los lugares que la serie levantó a lo largo de veinte años: la <b>Tierra de los Ultras</b>, la Aldea de Pigmon, el <b>Cementerio de Monstruos</b>. Al otro lado, los alienígenas de siempre: Baltan, Metron, Guts.',
      'El parche en <b>inglés está publicado</b>, con <b>653 entradas de texto</b>: 447 mensajes de diálogo, combate, descripción de objeto, secuencia final y créditos; 56 de menú, golpes y objetos; y <b>146 entradas de combate</b> que llevan el bestiario entero, cerca de noventa monstruos. Cada nombre de kaiju se cotejó con el manual japonés y con la nomenclatura asentada de la serie — en un parche de traducción, un nombre mal puesto es el defecto que el aficionado ve primero. La fuente del juego ni siquiera tenía <code>.</code> <code>,</code> <code>\'</code> <code>-</code>: los cuatro glifos se dibujaron sobre kanji que el texto traducido ya no usa.',
      'Esas 146 entradas de combate son el cuarto bloque de texto de la ROM, y solo aparecieron porque el barrido se rehízo sobre la ROM ya <i>montada</i>. En la ROM original los bytes de puntero del bloque caen en el rango del kana, y el análisis lo había descartado como dato binario — es el recordatorio de que una traducción termina cuando se ha barrido la ROM entera, no cuando se acaba la lista de tablas conocidas. Cuatro partículas japonesas escaparon también de cualquier barrido de tabla, porque están escritas dentro del código como <code>LDA #$AC</code> en mitad de la rutina de combate, pegando kana al final del nombre del monstruo en pantalla. Ni el inglés cabía en el cartucho tal como salió de fábrica: la ROM se <b>amplió de 128 a 256 KB</b>, con los bancos 14 y 15 duplicados al final, porque en el MMC3 el banco fijo es siempre el último. Lo que queda grabado se lee de vuelta y se compara byte a byte con el guion: <b>653 entradas, cero divergencias</b>.'
    ]
  },
  numeros: [
    { v: '653', r: bi('entradas de texto traduzidas', 'text entries translated', 'entradas de texto traducidas') },
    { v: '4', r: bi('blocos de texto na ROM', 'text blocks in the ROM', 'bloques de texto en la ROM') },
    { v: '128→256', r: bi('KB, a ROM expandida', 'KB, the ROM expanded', 'KB, la ROM ampliada') },
    { v: '22×4', r: bi('a caixa de fala, em colunas', 'the dialogue box, in columns', 'la caja de diálogo, en columnas') }
  ],
  grupos: [
    { titulo: bi('O que já entrou', 'What is already in', 'Lo que ya entró'), itens: [
      { t: bi('<b>447 mensagens</b> de diálogo, batalha, descrições de item, a sequência final e os créditos — em três grupos de texto.',
              '<b>447 messages</b> of dialogue, battle, item descriptions, the ending sequence and the credits — across three text groups.',
              '<b>447 mensajes</b> de diálogo, combate, descripciones de objetos, la secuencia final y los créditos — en tres grupos de texto.'), foto: 'u2/03-encontro.png' },
      { t: bi('<b>146 entradas</b> de combate: as mensagens de ação, os gritos de golpe e o <b>bestiário inteiro</b> — cerca de 90 monstros. Este quarto bloco só apareceu ao varrer kana na ROM <i>montada</i>: os bytes de ponteiro dele caem na faixa do kana e a análise da ROM original o descartou como dado binário.',
              '<b>146 battle entries</b>: action messages, attack shouts and the <b>whole bestiary</b> — about 90 monsters. This fourth block only surfaced when scanning kana in the <i>built</i> ROM: its pointer bytes fall in the kana range and the original-ROM analysis dismissed it as binary data.',
              '<b>146 entradas</b> de combate: mensajes de acción, gritos de técnica y el <b>bestiario entero</b> — unos 90 monstruos. Este cuarto bloque solo apareció al barrer kana en la ROM <i>construida</i>.'), foto: 'u2/04-menu-batalha.png' },
      { t: bi('<b>56 entradas</b> de menu, golpes, itens e nomes de monstro, e mais <b>4 partículas japonesas cravadas no código</b> — <code>は</code> e <code>に</code>, que nenhuma varredura de tabela acha porque estão escritas como <code>LDA #$AC</code> no meio da rotina de batalha.',
              '<b>56 entries</b> for menus, moves, items and monster names, plus <b>4 Japanese particles hardcoded in the code</b> — <code>は</code> and <code>に</code>, which no table scan finds because they are written as <code>LDA #$AC</code> inside the battle routine.',
              '<b>56 entradas</b> de menú, técnicas, objetos y nombres de monstruo, y <b>4 partículas japonesas grabadas en el código</b>.'), foto: 'u2/05-combate.png' },
      { t: bi('A <b>tela de título</b> redesenhada em 120 tiles, a partir da arte em inglês — e a paleta 1 igualada à 0, porque a tabela de atributos ainda marcava branco na faixa onde ficava o texto japonês pequeno.',
              'The <b>title screen</b> redrawn in 120 tiles from the English artwork — and palette 1 matched to palette 0, because the attribute table still marked white over the band where the small Japanese text used to be.',
              'La <b>pantalla de título</b> redibujada en 120 tiles a partir del arte en inglés.'), foto: 'u2/01-titulo.png' },
      { t: bi('A ROM foi <b>expandida de 128 KB para 256 KB</b>. Os bancos 14 e 15 são duplicados no fim: no MMC3 o banco fixo é sempre o <i>último</i> da ROM, e crescer sem copiá-los deixa o vetor de reset em área vazia — tela verde no boot.',
              'The ROM was <b>expanded from 128 KB to 256 KB</b>. Banks 14 and 15 are duplicated at the end: on MMC3 the fixed bank is always the <i>last</i> one, and growing without copying them leaves the reset vector in empty space — green screen on boot.',
              'La ROM fue <b>ampliada de 128 KB a 256 KB</b>.') },
      { t: bi('<b>Round-trip verificado:</b> o que está gravado na ROM é lido de volta e comparado, byte a byte, com o roteiro em inglês — 653 entradas, zero divergências. E um verificador de caixa confere 22 colunas por 4 linhas no diálogo, e 22 colunas no combate, antes de qualquer coisa sair.',
              '<b>Round-trip verified:</b> what is written in the ROM is read back and compared, byte for byte, against the English script — 653 entries, zero mismatches. And a box checker confirms 22 columns by 4 lines in dialogue, and 22 columns in battle, before anything ships.',
              '<b>Round-trip verificado:</b> lo grabado en la ROM se lee de vuelta y se compara, byte a byte, con el guion en inglés — 653 entradas, cero divergencias.'), foto: 'u2/02-creditos.png' }
    ]},
    { titulo: bi('O que falta para sair do alfa', 'What is left before it leaves alpha', 'Lo que falta para salir del alfa'), itens: [
      { t: bi('<b>Percorrer o jogo do começo ao fim.</b> A cobertura do texto foi medida por varredura, não por jogatina: a Terra dos Ultras, o cemitério de monstros e o final não foram vistos na tela.',
              '<b>Playing the game end to end.</b> Text coverage was measured by scanning, not by playing: the Land of Ultra, the monster graveyard and the ending have not been seen on screen.',
              '<b>Recorrer el juego de principio a fin.</b> La cobertura se midió por barrido, no jugando.') },
      { t: bi('Conferir na tela as <b>146 linhas de combate</b> uma a uma. Elas cabem por medição — nome mais mensagem em 22 colunas — mas nem todas foram vistas renderizadas.',
              'Checking the <b>146 battle lines</b> on screen, one by one. They fit by measurement — name plus message within 22 columns — but not all have been seen rendered.',
              'Comprobar en pantalla las <b>146 líneas de combate</b>, una a una.') }
    ]}
  ],
  patch: { versoes: { en: { arquivo: 'ultraman-club-2-en.ips' }, pt: null, es: null },
           rom: 'Ultraman Club 2 - Kaettekita Ultraman Club (Japan).nes',
           rom_md5: '1e479bfe8e4d3c36de37dfb96aa8e68c' },
  fotos: [
    { f: 'u2/01-titulo.png', t: bi('Tela de título', 'Title screen', 'Pantalla de título'),
      c: bi('O logo redesenhado em 120 tiles. O limite não foi a CHR, foi o fluxo da nametable: 145 bytes fixos.',
            'The logo redrawn in 120 tiles. The limit was not the CHR but the nametable stream: a fixed 145 bytes.',
            'El logo redibujado en 120 tiles.') },
    { f: 'u2/02-creditos.png', t: bi('Tela do patch', 'Patch screen', 'Pantalla del parche'),
      c: bi('358 bytes no vão livre do banco fixo, com o vetor de RESET desviado. O © é o glifo do próprio jogo — a fonte não tem parênteses.',
            '358 bytes in the free gap of the fixed bank, with the RESET vector diverted. The © is the game’s own glyph — the font has no parentheses.',
            '358 bytes en el hueco libre del banco fijo, con el vector de RESET desviado.') },
    { f: 'u2/03-encontro.png', t: bi('Encontro', 'Encounter', 'Encuentro'),
      c: bi('O bestiário saiu do quarto bloco de texto — o que a análise da ROM original tinha descartado como dado binário.',
            'The bestiary came from the fourth text block — the one the original-ROM analysis had dismissed as binary data.',
            'El bestiario salió del cuarto bloque de texto.') },
    { f: 'u2/04-menu-batalha.png', t: bi('Menu de batalha', 'Battle menu', 'Menú de combate'),
      c: bi('Os comandos cabem porque a caixa foi medida na tela: interior nas colunas 5 a 27, texto começando na 6.',
            'The commands fit because the box was measured on screen: interior from column 5 to 27, text starting at 6.',
            'Los comandos caben porque la caja se midió en pantalla.') },
    { f: 'u2/05-combate.png', t: bi('Em combate', 'In battle', 'En combate'),
      c: bi('O jogo concatena nome e mensagem na mesma linha — o teto de 22 colunas vale para os dois somados.',
            'The game concatenates name and message on the same line — the 22-column ceiling applies to both together.',
            'El juego concatena nombre y mensaje en la misma línea.') }
  ]
};

export const NEKKETSU = {
  slug: 'nekketsu-kakutou-densetsu',
  nome: 'Nekketsu Kakutou Densetsu',
  subtitulo: 'Fighting Legend',
  jp: '熱血格闘伝説',
  publisher: 'Technos Japan', dev: 'Technos Japan', ano: 1992, data: '1992',
  sistema: 'Famicom', mapper: 'MMC3 · expansão 128→256 KB provada',
  categoria: bi('Tradução + arte', 'Translation + artwork', 'Traducción + arte'),
  nivel: 'beta',
  capa: 'nk/01-titulo.png',
  linha: bi('A série de brigões de colégio que o Ocidente conheceu como River City Ransom. Este é o de luta: 19 combates em duplas, quatro jogadores na mesa.',
            'The school-brawler series the West met as River City Ransom. This one is the fighter: 19 tag bouts, four players on one Famicom.',
            'La serie de matones de instituto que Occidente conoció como River City Ransom. Este es el de lucha: 19 combates por parejas, cuatro jugadores.'),
  resumo: {
    pt: [
      'No Japão o Kunio é uma instituição: o brigão de colégio que virou uma família inteira de jogos da Technos. O Ocidente conheceu um deles com outro nome e outro elenco, <i>River City Ransom</i>. Este, de 1992, é o de luta — o modo história são <b>19 combates em duplas</b>, com quinze vitórias até o chefe, o modo batalha aceita <b>até quatro jogadores</b> pelo adaptador do Famicom, e o lutador que você inventa guarda nome, aniversário e tipo sanguíneo dentro da senha.',
      'O texto está inteiro em inglês: <b>266 strings</b>, traduzidas do zero e revisadas linha a linha, com o validador em zero erro. Para escrevê-las foi desenhada uma <b>fonte latina completa</b> — a-z e pontuação — em <b>81 tiles novos</b>, deixando <b>175 tiles do original intactos</b>, e o logo do título saiu refeito em latinas como <code>NEKKETSU / FIGHTING LEGEND</code>.',
      'O texto deste jogo cabe em <b>6.120 bytes e não tem compressão nenhuma</b>: cada frase ocupa exatamente o que escreve, então não há dicionário de onde tirar folga — é a fonte e a expansão da ROM, de <b>128 para 256 KB</b>, que abrem lugar, e por isso vieram antes. A expansão foi provada pelo caminho mais duro que existe: uma build que só move o texto japonês, sem traduzir nada, sai <b>idêntica à original</b>. E o inglês está confirmado na ROM rodando, não em simulação — a build de teste abre no portão do colégio com a primeira fala na fonte nova: <i>The gates of Nekketsu High.</i> Não há patch para instalar; esta página é para acompanhar.'
    ],
    en: [
      'In Japan, Kunio is an institution: the school brawler who grew into a whole family of Technos games. The West met one of them under another name and another cast, <i>River City Ransom</i>. This one, from 1992, is the fighter — story mode is <b>19 tag bouts</b>, fifteen wins to reach the boss, battle mode takes <b>up to four players</b> through the Famicom adapter, and the fighter you invent keeps his name, birthday and blood type inside the password.',
      'The text is entirely in English: <b>266 strings</b>, translated from scratch and reviewed line by line, with the validator at zero errors. Writing them meant drawing a <b>complete Latin font</b> — a-z and punctuation — across <b>81 new tiles</b>, leaving <b>175 of the original tiles untouched</b>, and the title logo was remade in Latin letters as <code>NEKKETSU / FIGHTING LEGEND</code>.',
      'This game\'s text fits in <b>6,120 bytes with no compression at all</b>: every line occupies exactly what it writes, so there is no dictionary to squeeze slack out of — the font and the ROM expansion, from <b>128 to 256 KB</b>, are what open room, which is why they came first. That expansion was proved the hardest way there is: a build that only moves the Japanese text, translating none of it, comes out <b>identical to the original</b>. And English is confirmed on the running ROM, not in simulation — the test build opens at the school gate with its first line in the new font: <i>The gates of Nekketsu High.</i> There is no patch to install; this page is here to follow along.'
    ],
    es: [
      'En Japón, Kunio es una institución: el matón de instituto que se convirtió en toda una familia de juegos de Technos. Occidente conoció a uno de ellos con otro nombre y otro reparto, <i>River City Ransom</i>. Este, de 1992, es el de lucha — el modo historia son <b>19 combates por parejas</b>, con quince victorias hasta el jefe, el modo batalla admite <b>hasta cuatro jugadores</b> por el adaptador del Famicom, y el luchador que te inventas guarda nombre, cumpleaños y grupo sanguíneo dentro de la contraseña.',
      'El texto está entero en inglés: <b>266 cadenas de texto</b>, traducidas de cero y revisadas línea a línea, con el validador sin un solo error. Para escribirlas se dibujó una <b>fuente latina completa</b> — la a-z y la puntuación — en <b>81 tiles nuevos</b>, dejando <b>175 tiles del original intactos</b>, y el logo del título salió rehecho en letras latinas como <code>NEKKETSU / FIGHTING LEGEND</code>.',
      'El texto de este juego cabe en <b>6.120 bytes, sin compresión de ningún tipo</b>: cada frase ocupa exactamente lo que escribe, así que no hay diccionario del que sacar holgura — son la fuente y la ampliación de la ROM, de <b>128 a 256 KB</b>, las que abren sitio, y por eso vinieron antes. La ampliación se probó por el camino más duro que existe: una compilación que solo mueve el texto japonés, sin traducir nada, sale <b>idéntica a la original</b>. Y el inglés está confirmado con la ROM en marcha, no en simulación — la compilación de prueba abre en la puerta del instituto con la primera frase en la fuente nueva: <i>The gates of Nekketsu High.</i> No hay parche que instalar; esta página es para seguir el proyecto.'
    ]
  },
  numeros: [
    { v: '266', r: bi('strings, todas traduzidas', 'strings, all translated', 'strings, todas traducidas') },
    { v: '81',  r: bi('tiles novos de fonte latina', 'new Latin font tiles', 'tiles nuevos de fuente latina') },
    { v: '175', r: bi('tiles originais intactos', 'original tiles untouched', 'tiles originales intactos') },
    { v: '0',   r: bi('erros no validador', 'errors in the validator', 'errores en el validador') }
  ],
  grupos: [
    { titulo: bi('O que já está provado', 'What is already proved', 'Lo que ya está probado'), itens: [
      { t: bi('<b>Tradução completa</b> — 266 strings, revisadas linha a linha, com o validador em zero erro.',
              '<b>Translation complete</b> — 266 strings, reviewed line by line, with the validator at zero errors.',
              '<b>Traducción completa</b> — 266 strings, revisadas línea por línea, con el validador en cero errores.') },
      { t: bi('<b>Fonte latina completa</b>: a-z e pontuação, em 81 tiles novos, com <b>175 tiles originais intactos</b>.',
              '<b>Complete Latin font</b>: a-z and punctuation, in 81 new tiles, with <b>175 original tiles untouched</b>.',
              '<b>Fuente latina completa</b>: a-z y puntuación, en 81 tiles nuevos, con <b>175 tiles originales intactos</b>.') },
      { t: bi('<b>Inglês confirmado em jogo.</b> A build de teste abre com a primeira fala na fonte nova — não é simulação, é a ROM rodando.',
              '<b>English confirmed in game.</b> The test build opens with the first line in the new font — not a simulation, the ROM running.',
              '<b>Inglés confirmado en juego.</b> La build de prueba abre con la primera frase en la fuente nueva — no es simulación, es la ROM corriendo.'), foto: 'nk/02-jogo.png' },
      { t: bi('<b>Logo do título redesenhado</b> — <code>NEKKETSU / FIGHTING LEGEND</code>, no lugar do japonês.',
              '<b>Title logo redrawn</b> — <code>NEKKETSU / FIGHTING LEGEND</code>, in place of the Japanese.',
              '<b>Logo del título redibujado</b> — <code>NEKKETSU / FIGHTING LEGEND</code>, en lugar del japonés.'), foto: 'nk/01-titulo.png' },
      { t: bi('A expansão de 128 para 256 KB está <b>provada</b>, e o motor de inserção tem guarda: uma build que só move o texto japonês sai idêntica à original.',
              'The expansion from 128 to 256 KB is <b>proved</b>, and the insertion engine has a guard: a build that only moves the Japanese text comes out identical to the original.',
              'La ampliación de 128 a 256 KB está <b>probada</b>, y el motor de inserción tiene guarda: una build que solo mueve el texto japonés sale idéntica a la original.') }
    ]},
    { titulo: bi('O que falta', 'What is left', 'Lo que falta'), itens: [
      { t: bi('<b>A senha em alfabeto latino.</b> Ela é digitada em hiragana, e a fonte nova tomou justamente os slots de kana — sem converter o teclado, a senha sai misturada.',
              '<b>The password in Latin letters.</b> It is typed in hiragana, and the new font took exactly the kana slots — without converting the keyboard, the password comes out mixed.',
              '<b>La contraseña en alfabeto latino.</b> Se escribe en hiragana, y la fuente nueva tomó justamente los slots de kana — sin convertir el teclado, la contraseña sale mezclada.') },
      { t: bi('Gráficos que ainda são japoneses: a carta de desafio, as quatro faixas de estilo, os nomes dos dezesseis lutadores na seleção e o cabeçalho da escolha de estágio.',
              'Graphics that are still Japanese: the challenge letter, the four style banners, the sixteen fighters’ names on the select screen and the stage-select header.',
              'Gráficos que siguen en japonés: la carta de desafío, las cuatro bandas de estilo, los nombres de los dieciséis luchadores en la selección y el encabezado de la elección de escenario.') }
    ]}
  ],
  patch: { versoes: { en: { arquivo: 'nekketsu-kakutou-densetsu-en.ips' }, pt: null, es: null }, rom: 'Nekketsu Kakutou Densetsu (Japan).nes', rom_md5: 'c56d957bbe700b422f97cd8fe4515c54' },
  fotos: [
    { f: 'nk/01-titulo.png', t: bi('Título redesenhado', 'Redrawn title', 'Título redibujado'),
      c: bi('<code>NEKKETSU / FIGHTING LEGEND</code> — o logo japonês refeito em latinas.',
            '<code>NEKKETSU / FIGHTING LEGEND</code> — the Japanese logo remade in Latin letters.',
            '<code>NEKKETSU / FIGHTING LEGEND</code> — el logo japonés rehecho en letras latinas.') },
    { f: 'nk/02-jogo.png', t: bi('Inglês em jogo', 'English in game', 'Inglés en juego'),
      c: bi('A primeira fala na fonte nova, na ROM rodando: “The gates of Nekketsu High.”',
            'The first line in the new font, on the running ROM: “The gates of Nekketsu High.”',
            'La primera frase en la fuente nueva, en la ROM corriendo: “The gates of Nekketsu High.”') }
  ]
};

export const GAIA = {
  slug: 'gaia-saver',
  nome: 'Gaia Saver',
  subtitulo: 'Hero Saidai no Sakusen',
  jp: 'ガイアセイバー ヒーロー最大の作戦',
  traducao_titulo: "Hero's Greatest Operation",
  publisher: 'Banpresto', dev: 'Banpresto', ano: 1993, data: '1993',
  sistema: 'Super Famicom', mapper: 'SNES · ROM de 2 MB · fonte de 512 glifos 16×16 · ponteiros long de 24 bits',
  categoria: bi('Tradução', 'Translation', 'Traducción'),
  nivel: 'beta',
  capa: 'gaia/01-titulo.png',
  linha: bi('Ultraman, Kamen Rider e Gundam no mesmo grupo: o herói gigante, o justiceiro de moto e os robôs pilotados, num RPG de Super Famicom.',
            'Ultraman, Kamen Rider and Gundam in one party: the giant hero, the masked rider and the piloted robots, in a single Super Famicom RPG.',
            'Ultraman, Kamen Rider y Gundam en el mismo grupo: el héroe gigante, el justiciero en moto y los robots pilotados, en un RPG de Super Famicom.'),
  resumo: {
    pt: [
      'São três franquias que no Japão têm o tamanho que os super-heróis americanos têm aqui, e quase ninguém fora de lá sabe que elas dividem um RPG. <b>Ultraman</b> é o herói gigante da televisão japonesa que aparece na hora do monstro; <b>Kamen Rider</b> é o justiceiro mascarado de motocicleta; <b>Gundam</b> são os robôs pilotados. A Banpresto pôs os três no mesmo grupo, num RPG de <b>Super Famicom</b> — o crossover <i>Compati Hero</i>, a linha em que os heróis gigantes encolhem para duas cabeças de altura e brigam lado a lado, sem que ninguém pare para explicar como.',
      'O jogo foi desenhado para kana de largura cheia, e é isso que decide a tradução: medido no roteiro original, <b>98% das linhas japonesas cabem em 15 caracteres</b>. O inglês não vive nisso. A fonte foi refeita à <b>meia largura, 8 pixels por caractere</b>, e a caixa passou a comportar <b>29 colunas</b> — número medido na tela, não estimado: com 30 a página embaralha, com 29 renderiza limpa. O limite de <b>29 colunas por 3 linhas</b> é imposto por código a cada compilação, e a <b>tela de título</b> já mostra <code>GAIA SAVER</code> em latinas.',
      'É o único projeto de Super Famicom da casa, e é outra classe de problema: <b>512 glifos de 16×16</b>, 497 entradas de tabela, ponteiros longos de 24 bits e uma ROM de 2 MB. O roteiro foi extraído inteiro — <b>1.884 mensagens</b>, 94,1 KB de texto — e o extrator faz o caminho de volta: <b>1.875 de 1.875 mensagens</b> voltam byte a byte iguais, que é como se prova que nenhuma fala ficou fora da tabela. Hoje o <b>diálogo está 100% traduzido</b> — as 1.884 mensagens — e com ele a interface inteira: os 81 nomes de item, os 22 golpes, as 39 descrições, a tela de save, os menus de configuração, os cinco rótulos do menu de campo, os atributos das fichas de personagem e o cartão de capítulo. Os <b>420 nomes</b> couberam em <b>5.375 dos 5.376 bytes</b> disponíveis, um byte de folga. A realocação segue <b>1.525 ponteiros confiáveis</b>, todos em tabelas de registros do banco <code>$06</code>; os 105 candidatos soltos foram deixados em paz depois de a análise mostrar que eram falsos positivos — um deles a própria instrução <code>LDA $218000,x</code>. Uma varredura tela a tela, feita sempre em boot limpo, não achou japonês em nenhuma delas. Falta o que nenhuma medição substitui: jogar do começo ao fim.'
    ],
    en: [
      'These are three franchises that in Japan carry the weight American superheroes carry here, and almost nobody outside knows they share an RPG. <b>Ultraman</b> is the giant hero of Japanese television who turns up when the monster does; <b>Kamen Rider</b> is the masked motorcycle vigilante; <b>Gundam</b> are the piloted robots. Banpresto put all three in one party, in a <b>Super Famicom</b> RPG — the <i>Compati Hero</i> crossover, the line where the giant heroes shrink to two heads tall and fight side by side, with nobody stopping to explain how.',
      'The game was drawn for full-width kana, and that is what decides the translation: measured on the original script, <b>98% of the Japanese lines fit in 15 characters</b>. English does not live in that. The font was rebuilt at <b>half width, 8 pixels per character</b>, and the box came to hold <b>29 columns</b> — a number measured on screen rather than estimated: at 30 the page scrambles, at 29 it renders cleanly. The limit of <b>29 columns by 3 lines</b> is enforced in code on every build, and the <b>title screen</b> already reads <code>GAIA SAVER</code> in Latin letters.',
      'It is the house\'s only Super Famicom project, and a different class of problem: <b>512 glyphs at 16×16</b>, 497 table entries, 24-bit long pointers and a 2 MB ROM. The script was extracted whole — <b>1,884 messages</b>, 94.1 KB of text — and the extractor makes the return trip: <b>1,875 of 1,875 messages</b> come back byte for byte identical, which is how you prove no line was left out of the table. The <b>dialogue is now 100% translated</b> — all 1,884 messages — and the whole interface with it: the 81 item names, the 22 techniques, the 39 descriptions, the save screen, the config menus, the five field-menu labels, the character-sheet stats and the chapter card. The <b>420 names</b> fit <b>5,375 of the 5,376 bytes</b> available, one byte to spare. Relocation follows <b>1,525 trustworthy pointers</b>, all in record tables in bank <code>$06</code>; the 105 loose candidates were left alone once analysis showed them to be false positives — one of them the instruction <code>LDA $218000,x</code> itself. A screen-by-screen sweep, always from a clean boot, found Japanese on none of them. What is left is the thing no measurement replaces: playing it start to finish.'
    ],
    es: [
      'Son tres franquicias que en Japón tienen el tamaño que aquí tienen los superhéroes americanos, y casi nadie fuera de allí sabe que comparten un RPG. <b>Ultraman</b> es el héroe gigante de la televisión japonesa que aparece a la hora del monstruo; <b>Kamen Rider</b> es el justiciero enmascarado en motocicleta; <b>Gundam</b> son los robots pilotados. Banpresto puso a los tres en el mismo grupo, en un RPG de <b>Super Famicom</b> — el crossover <i>Compati Hero</i>, la línea en la que los héroes gigantes encogen hasta dos cabezas de altura y pelean codo con codo, sin que nadie se pare a explicar cómo.',
      'El juego se diseñó para kana de ancho completo, y eso es lo que decide la traducción: medido sobre el guion original, el <b>98% de las líneas japonesas cabe en 15 caracteres</b>. El inglés no cabe ahí. La fuente se rehízo a <b>media anchura, 8 píxeles por carácter</b>, y la caja pasó a admitir <b>29 columnas</b> — un número medido en pantalla, no estimado: con 30 la página se descuadra, con 29 se dibuja limpia. El límite de <b>29 columnas por 3 líneas</b> lo impone el código en cada compilación, y la <b>pantalla de título</b> ya muestra <code>GAIA SAVER</code> en letras latinas.',
      'Es el único proyecto de Super Famicom de la casa, y es otra clase de problema: <b>512 glifos de 16×16</b>, 497 entradas de tabla, punteros largos de 24 bits y una ROM de 2 MB. El guion se extrajo entero — <b>1.884 mensajes</b>, 94,1 KB de texto — y el extractor hace el camino de vuelta: <b>1.875 de 1.875 mensajes</b> vuelven byte a byte iguales, que es como se prueba que ninguna frase quedó fuera de la tabla. Hoy el <b>diálogo está 100% traducido</b> — los 1.884 mensajes — y con él toda la interfaz: los 81 nombres de objeto, las 22 técnicas, las 39 descripciones, la pantalla de guardado, los menús de configuración, las cinco etiquetas del menú de campo, los atributos de las fichas de personaje y la tarjeta de capítulo. Los <b>420 nombres</b> cupieron en <b>5.375 de los 5.376 bytes</b> disponibles, un byte de holgura. La reubicación sigue <b>1.525 punteros fiables</b>, todos en tablas de registros del banco <code>$06</code>; los 105 candidatos sueltos se dejaron en paz después de que el análisis mostrara que eran falsos positivos — uno de ellos la propia instrucción <code>LDA $218000,x</code>. Un barrido pantalla por pantalla, hecho siempre desde un arranque limpio, no encontró japonés en ninguna. Falta lo que ninguna medición sustituye: jugarlo de principio a fin.'
    ]
  },
  numeros: [
    { v: '1.884', r: bi('mensagens extraídas', 'messages extracted', 'mensajes extraídos') },
    { v: '100%', r: bi('do diálogo traduzido', 'of the dialogue translated', 'del diálogo traducido') },
    { v: '1875/1875', r: bi('round-trip byte-idêntico', 'round-trip byte-identical', 'round-trip byte-idéntico') },
    { v: '29×3', r: bi('o limite de página, imposto no build', 'the page limit, enforced at build', 'el límite de página, impuesto en el build') }
  ],
  grupos: [
    { titulo: bi('O que já está resolvido', 'What is already solved', 'Lo que ya está resuelto'), itens: [
      { t: bi('<b>A fonte e a tabela de caracteres</b> — 512 glifos de 16×16 e 497 entradas, validadas no emulador.',
              '<b>The font and the character table</b> — 512 glyphs at 16×16 and 497 entries, validated on the emulator.',
              '<b>La fuente y la tabla de caracteres</b> — 512 glifos de 16×16 y 497 entradas, validadas en el emulador.') },
      { t: bi('<b>O empacotamento do roteiro</b>, com a paginação própria do jogo, e <b>1.884 mensagens extraídas</b> — 94 KB de texto. O extrator faz round-trip: <b>1.875 de 1.875 mensagens voltam byte-idênticas</b>.',
              '<b>The script encoding</b>, with the game’s own pagination, and <b>1,884 messages extracted</b> — 94 KB of text. The extractor round-trips: <b>1,875 of 1,875 messages come back byte-identical</b>.',
              '<b>El empaquetado del guion</b>, con la paginación propia del juego, y <b>1.884 mensajes extraídos</b> — 94 KB de texto. El extractor hace round-trip: <b>1.875 de 1.875 mensajes vuelven byte-idénticos</b>.') },
      { t: bi('<b>Meia largura para o inglês</b> — 8 pixels por caractere, 32 colunas, provado na tela. Sem isso o inglês não caberia num jogo desenhado para kana de largura cheia.',
              '<b>Half-width for English</b> — 8 pixels per character, 32 columns, proved on screen. Without it English would not fit a game drawn for full-width kana.',
              '<b>Media anchura para el inglés</b> — 8 píxeles por carácter, 32 columnas, probado en pantalla. Sin eso el inglés no cabría en un juego dibujado para kana de ancho completo.') },
      { t: bi('<b>A tela de título traduzida</b> — o logo <code>GAIA SAVER</code> e o subtítulo <code>HERO’S GREATEST OPERATION</code>, com o caminho provado por round-trip.',
              '<b>The title screen translated</b> — the <code>GAIA SAVER</code> logo and the <code>HERO’S GREATEST OPERATION</code> subtitle, with the pipeline proved by round-trip.',
              '<b>La pantalla de título traducida</b> — el logo <code>GAIA SAVER</code> y el subtítulo <code>HERO’S GREATEST OPERATION</code>, con el camino probado por round-trip.'), foto: 'gaia/01-titulo.png' },
      { t: bi('<b>420 nomes traduzidos</b>, cabendo em 5.375 dos 5.376 bytes disponíveis — um byte de folga.',
              '<b>420 names translated</b>, fitting in 5,375 of the 5,376 bytes available — one byte to spare.',
              '<b>420 nombres traducidos</b>, cabiendo en 5.375 de los 5.376 bytes disponibles — un byte de margen.') },
      { t: bi('<b>O diálogo inteiro</b> — as 1.884 mensagens, conferidas seguindo os 1.561 ponteiros vivos, e não por contagem de arquivo.',
              '<b>The whole dialogue</b> — all 1,884 messages, checked by following the 1,561 live pointers rather than by counting files.',
              '<b>Todo el diálogo</b> — los 1.884 mensajes, comprobados siguiendo los 1.561 punteros vivos y no por conteo de archivos.') },
      { t: bi('<b>A interface inteira</b> — 81 nomes de item, 22 golpes, 39 descrições, a tela de save e os menus de configuração.',
              '<b>The whole interface</b> — 81 item names, 22 techniques, 39 descriptions, the save screen and the config menus.',
              '<b>Toda la interfaz</b> — 81 nombres de objeto, 22 técnicas, 39 descripciones, la pantalla de guardado y los menús de configuración.') },
      { t: bi('<b>O menu de campo</b> — <code>STATS · SKILL · EQUIP · ITEMS · SETUP</code>. O tilemap dele não estava na ROM crua: vinha de um pedaço comprimido, que foi decodificado, editado, recomprimido e realocado.',
              '<b>The field menu</b> — <code>STATS · SKILL · EQUIP · ITEMS · SETUP</code>. Its tilemap was not in the raw ROM: it came from a compressed chunk, which was decoded, edited, recompressed and relocated.',
              '<b>El menú de campo</b> — <code>STATS · SKILL · EQUIP · ITEMS · SETUP</code>. Su tilemap no estaba en la ROM cruda: venía de un bloque comprimido, que se decodificó, editó, recomprimió y reubicó.') },
      { t: bi('<b>O que nenhuma varredura de texto acha</b> — o contador de população, os atributos das fichas de personagem e o cartão de capítulo (<code>PART 1</code>), que não são texto: são tiles cravados no código e em tilemaps crus.',
              '<b>What no text sweep finds</b> — the population counter, the character-sheet stats and the chapter card (<code>PART 1</code>), which are not text: they are tiles hard-coded in the program and in raw tilemaps.',
              '<b>Lo que ningún barrido de texto encuentra</b> — el contador de población, los atributos de las fichas de personaje y la tarjeta de capítulo (<code>PART 1</code>), que no son texto: son tiles incrustados en el código y en tilemaps crudos.') }
    ]},
    { titulo: bi('O que falta', 'What is left', 'Lo que falta'), itens: [
      { t: bi('<b>Jogar do começo ao fim.</b> É o único item aberto, e é o que separa a etiqueta de hoje da release: medição não substitui partida. Uma varredura tela a tela, sempre em boot limpo, não achou japonês em nenhuma — mas varredura vê as telas por onde ela passou.',
              '<b>Playing it start to finish.</b> It is the only open item, and it is what separates today\u2019s label from a release: measurement does not stand in for a playthrough. A screen-by-screen sweep, always from a clean boot, found Japanese on none of them \u2014 but a sweep only sees the screens it walked through.',
              '<b>Jugarlo de principio a fin.</b> Es el único punto abierto, y es lo que separa la etiqueta de hoy de la release: la medición no sustituye a una partida. Un barrido pantalla por pantalla, siempre desde un arranque limpio, no encontró japonés en ninguna \u2014 pero un barrido solo ve las pantallas por las que pasó.') },
      { t: bi('<b>Português e espanhol</b>, que ainda não começaram — o caminho já está aberto pelo inglês.',
              '<b>Portuguese and Spanish</b>, which have not started — the path is already cut by the English build.',
              '<b>Portugués y español</b>, que aún no han empezado — el camino ya está abierto por el inglés.') }
    ]}
  ],
  patch: { versoes: { en: { arquivo: 'gaia-saver-en.ips' }, pt: null, es: null },
           rom: 'Gaia Saver - Hero Saidai no Sakusen (Japan).sfc',
           rom_md5: '0ab069047f1b03983241c014f8378555' },
  fotos: [
    { f: 'gaia/01-titulo.png', t: bi('Tela de título', 'Title screen', 'Pantalla de título'),
      c: bi('O logo redesenhado em latinas, com o subtítulo <code>THE GREATEST HERO OPERATION</code> na faixa.',
            'The logo redrawn in Latin letters, with the <code>THE GREATEST HERO OPERATION</code> subtitle on the band.',
            'El logo redibujado en latinas, con el subtítulo <code>THE GREATEST HERO OPERATION</code> en la banda.') },
    { f: 'gaia/02-abertura.png', t: bi('A abertura, em inglês', 'The opening, in English', 'La apertura, en inglés'),
      c: bi('O prólogo do jogo rodando traduzido, sobre a arte original — meia largura, 32 colunas.',
            'The game’s prologue running translated, over the original artwork — half-width, 32 columns.',
            'El prólogo del juego corriendo traducido, sobre el arte original — media anchura, 32 columnas.') }
  ]
};

export const ULTRAMAN3 = {
  slug: 'ultraman-club-3',
  nome: 'Ultraman Club 3',
  subtitulo: '',
  jp: 'ウルトラマン倶楽部3',
  publisher: 'Yutaka', dev: 'Tsuburaya Prod.', ano: 1991, data: '1991',
  sistema: 'Famicom', mapper: 'Famicom',
  categoria: bi('Correção de bugs + tradução', 'Bug fixes + translation', 'Corrección de bugs + traducción'),
  nivel: 'beta',
  capa: 'u3/01-titulo.png',
  linha: bi('A continuação em que os Ultras guardam kaiju em cápsulas — e onde a cápsula da página 8, que travava a batalha, caiu antes da tradução.',
            'The sequel where the Ultras store kaiju in capsules — and where the page-8 capsule, which hung the battle, fell before the translation did.',
            'En esta secuela los Ultras guardan kaiju en cápsulas, y la cápsula de la página 8, que colgaba el combate, cayó antes que el texto.'),
  resumo: {
    pt: [
      'Tsuburaya de novo, agora com a Yutaka, em 1991, e continuação direta do <i>Ultraman Club 2</i>. Aqui os monstros vão para dentro de <b>cápsulas</b> — trinta lugares de inventário, um nibble por kaiju — e a viagem passa pela <b>Nebulosa M78</b>, o endereço de onde os Ultras vêm.',
      'Este projeto começou de trás para frente, de propósito: <b>consertar os defeitos do jogo original vem antes de traduzir</b>, porque escrever inglês por cima de um defeito só produz uma tela quebrada noutro idioma. O primeiro já caiu. Em batalha, no menu de cápsulas, a página 8 desenha só duas entradas, mas o cursor anda por tabela fixa e chega às duas vagas vazias; confirmar ali fazia o jogo ler o atributo que sobrou da página anterior — <b>travava na maioria das vezes</b> e, de vez em quando, invocava um Pestar corrompido com efeito aleatório. <b>Vinte e dois bytes</b> no banco 29 fazem as duas linhas nascerem recusáveis: o cursor ainda entra e o A não faz nada, exatamente como o próprio jogo já se comporta com outras duas cápsulas.',
      'Nada disso vale sem medição. O conserto foi verificado em <b>teste A/B contra a ROM original</b>, com um teste de regressão por cima, e o construtor <b>aborta se os bytes originais não baterem</b> — além de imprimir os <b>22 códigos de Game Genie</b> equivalentes, para quem preferir o mesmo efeito sem gerar ROM nenhuma. A engenharia reversa também entregou ferramenta: duas escritas na memória invocam qualquer um dos <b>80 encontros</b> do jogo, em qualquer ponto, o que torna reproduzível o que antes dependia de sorte. E o texto já está levantado: <b>338 mensagens</b>, com offset, tamanho e referências de cada uma. Não há patch para instalar; esta página acompanha o projeto.'
    ],
    en: [
      'Tsuburaya again, now with Yutaka, in 1991, and a direct sequel to <i>Ultraman Club 2</i>. Here the monsters go into <b>capsules</b> — thirty inventory slots, one nibble per kaiju — and the journey passes through <b>Nebula M78</b>, the address the Ultras come from.',
      'This project started backwards on purpose: <b>fixing the original game\'s defects comes before translating it</b>, because writing English over a defect only produces a broken screen in another language. The first one has fallen. In battle, in the capsule menu, page 8 draws only two entries, but the cursor walks a fixed table and reaches the two empty slots; confirming there made the game read the attribute left over from the previous page — it <b>hung most of the time</b> and, now and then, summoned a corrupted Pestar with a random effect. <b>Twenty-two bytes</b> in bank 29 make those two rows refusable from birth: the cursor still enters and A does nothing, exactly as the game already behaves with two other capsules.',
      'None of that counts without measurement. The fix was verified in an <b>A/B test against the original ROM</b>, with a regression test on top, and the builder <b>aborts if the original bytes do not match</b> — besides printing the <b>22 equivalent Game Genie codes</b>, for anyone who would rather have the same effect without generating a ROM at all. The reverse engineering also produced a tool: two writes to memory summon any of the game\'s <b>80 encounters</b>, at any point, which makes reproducible what used to depend on luck. And the text is already surveyed: <b>338 messages</b>, each with its offset, size and references. There is no patch to install; this page follows the project.'
    ],
    es: [
      'Tsuburaya otra vez, ahora con Yutaka, en 1991, y secuela directa de <i>Ultraman Club 2</i>. Aquí los monstruos van dentro de <b>cápsulas</b> — treinta huecos de inventario, un nibble por kaiju — y el viaje pasa por la <b>Nebulosa M78</b>, la dirección de donde vienen los Ultras.',
      'Este proyecto empezó al revés a propósito: <b>arreglar los defectos del juego original va antes que traducirlo</b>, porque escribir inglés encima de un defecto solo produce una pantalla rota en otro idioma. El primero ya cayó. En combate, en el menú de cápsulas, la página 8 dibuja solo dos entradas, pero el cursor recorre una tabla fija y llega a los dos huecos vacíos; confirmar ahí hacía que el juego leyera el atributo que sobraba de la página anterior — <b>colgaba la mayoría de las veces</b> y, de vez en cuando, invocaba un Pestar corrupto con efecto aleatorio. <b>Veintidós bytes</b> en el banco 29 hacen que esas dos filas nazcan rechazables: el cursor sigue entrando y la A no hace nada, exactamente como el propio juego ya se comporta con otras dos cápsulas.',
      'Nada de eso vale sin medición. El arreglo se verificó en <b>prueba A/B contra la ROM original</b>, con una prueba de regresión encima, y el constructor <b>aborta si los bytes originales no coinciden</b> — además de imprimir los <b>22 códigos de Game Genie</b> equivalentes, para quien prefiera el mismo efecto sin generar ninguna ROM. La ingeniería inversa dejó además una herramienta: dos escrituras en memoria invocan cualquiera de los <b>80 encuentros</b> del juego, en cualquier punto, lo que hace reproducible lo que antes dependía de la suerte. Y el texto ya está inventariado: <b>338 mensajes</b>, con desplazamiento, tamaño y referencias de cada uno. No hay parche que instalar; esta página sigue el proyecto.'
    ]
  },
  numeros: [
    { v: '3', r: bi('bugs do jogo original', 'bugs in the original game', 'bugs del juego original') },
    { v: '1', r: bi('corrigido e medido', 'fixed and measured', 'corregido y medido') },
    { v: '22', r: bi('códigos Game Genie do conserto', 'Game Genie codes for the fix', 'códigos Game Genie del arreglo') }
  ],
  grupos: [
    { titulo: bi('Os bugs, um a um', 'The bugs, one by one', 'Los bugs, uno a uno'), itens: [
      { t: bi('<b>A cápsula da página 8 — CORRIGIDO.</b> Causa achada, conserto escrito e medido, com teste A/B contra a ROM original e teste de regressão. O construtor <b>aborta se os bytes originais não baterem</b>, e imprime os 22 códigos Game Genie equivalentes.',
              '<b>The page-8 capsule — FIXED.</b> Cause found, fix written and measured, with an A/B test against the original ROM and a regression test. The builder <b>aborts if the original bytes do not match</b>, and prints the 22 equivalent Game Genie codes.',
              '<b>La cápsula de la página 8 — CORREGIDO.</b> Causa encontrada, arreglo escrito y medido, con prueba A/B contra la ROM original y prueba de regresión. El constructor <b>aborta si los bytes originales no coinciden</b>, e imprime los 22 códigos Game Genie equivalentes.'), foto: 'u3/01-titulo.png' },
      { t: bi('<b>O warp do Ace Robot — NÃO REPRODUZIDO.</b> A investigação está registrada: formato do save decodificado, RAM mapeada, hipótese levantada. Sem reproduzir, não se conserta — e não se finge que consertou.',
              '<b>The Ace Robot warp — NOT REPRODUCED.</b> The investigation is on record: save format decoded, RAM mapped, hypothesis raised. Without reproducing it, you do not fix it — and you do not pretend you did.',
              '<b>El warp del Ace Robot — NO REPRODUCIDO.</b> La investigación está registrada: formato del save decodificado, RAM mapeada, hipótesis planteada. Sin reproducirlo, no se arregla — y no se finge que se arregló.') },
      { t: bi('<b>O Seven voando — NÃO INVESTIGADO.</b> Depende de um save feito no próprio jogo, não de savestate.',
              '<b>Seven flying — NOT INVESTIGATED.</b> It depends on a save made in the game itself, not a savestate.',
              '<b>El Seven volando — NO INVESTIGADO.</b> Depende de una partida guardada en el propio juego, no de un savestate.') }
    ]}
  ],
  patch: { versoes: { en: { arquivo: 'ultraman-club-3-en.ips' }, pt: null, es: null }, rom: 'Ultraman Club 3 (Japan).nes', rom_md5: '25cd707a6cf845bb4d2df34b2cca6254' },
  fotos: [
    { f: 'u3/01-titulo.png', t: bi('Tela de título', 'Title screen', 'Pantalla de título'),
      c: bi('Build em inglês. A logo japonesa deu lugar à inglesa, redesenhada pixel a pixel nas quatro cores da paleta original; o crédito de 1991 à Tsuburaya e à Yutaka continua onde estava.',
            'English build. The Japanese logo gave way to the English one, redrawn pixel by pixel in the original palette\'s four colours; the 1991 credit to Tsuburaya and Yutaka stays where it was.',
            'Build en inglés. El logo japonés dio paso al inglés, redibujado píxel a píxel con los cuatro colores de la paleta original; el crédito de 1991 a Tsuburaya y a Yutaka sigue donde estaba.') }
  ]
};

export const HANJUKU = {
  slug: 'hanjuku-hero',
  nome: 'Hanjuku Hero',
  subtitulo: '半熟英雄',
  jp: '半熟英雄',
  publisher: 'Square', dev: 'Square', ano: 1988, data: '1988',
  sistema: 'Famicom', mapper: 'MMC1 modo 3 · 128 KB PRG · CHR-RAM · save com bateria',
  categoria: bi('Tradução', 'Translation', 'Traducción'),
  nivel: 'alfa',
  capa: 'hj/01-titulo.png',
  linha: bi('O herói é literalmente um ovo meio cozido. Estratégia da Square em 1988: você comanda um reino e solta monstros de dentro dos ovos.',
            'The hero is literally a soft-boiled egg. Square strategy, 1988: you command a kingdom and hatch your monsters out of the eggs.',
            'El héroe es literalmente un huevo medio cocido. Estrategia de Square, 1988: diriges un reino y sacas los monstruos de dentro de los huevos.'),
  resumo: {
    pt: [
      '<i>Hanjuku</i> quer dizer <b>meio cozido</b>, e o herói é um ovo — o nome é a piada. Antes de a Square ser sinônimo de Final Fantasy, ela tinha esta estratégia cômica em tempo real, de 1988, em que você comanda um reino e solta monstros de dentro dos ovos. É série própria dela, licenciada de ninguém, e continuou no Japão por décadas, em vários consoles, sem nunca sair de lá.',
      'Num cartucho assim, o primeiro trabalho não é traduzir: é provar que você está lendo o texto certo. O encoding foi quebrado com <b>provas independentes</b> — o byte gravado <b>é o índice do tile na VRAM</b>, código igual a <code>0x74</code> mais o índice da fonte, e o mapeamento fecha por dois caminhos, com あ, ャ e o espaço batendo e o japonês decodificado saindo corrido e legível. A consequência é imediata: tudo abaixo de <code>0x74</code> é código de controle. Um encoding quase certo produz texto que parece japonês e não é, e a tradução inteira nasce torta por cima dele.',
      'A fonte latina já está na build, com os três blocos de nomes em inglês — <b>112 das 399 strings</b> —, e o construtor aborta se um byte mudar fora das regiões declaradas. A armadilha do jogo apareceu cedo e já foi contornada: <b>a fonte tem duas cópias na ROM</b>, em <code>0x14000</code> e em <code>0x06784</code>, e patchear só uma <b>não muda um pixel na tela</b>, porque a tela de entrada de nome carrega a outra — e nela as casas de katakana guardam os cantos da janela. O aperto também não é onde parece: somando tudo há <b>10,8 KB livres</b> na ROM, mas o banco 2, de onde o texto de batalha é lido, tem <b>371 bytes de folga para 4,3 KB de texto</b>. Até o vazio engana — o enchimento é a palavra <code>OSMOT</code> repetida, e é ela que dá vetores falsos aos bancos 0 a 6. Não há patch para instalar; esta página acompanha o projeto.'
    ],
    en: [
      '<i>Hanjuku</i> means <b>soft-boiled</b>, and the hero is an egg — the name is the joke. Before Square was a synonym for Final Fantasy, it had this 1988 real-time comic strategy game, where you command a kingdom and hatch monsters out of eggs. It is Square\'s own series, licensed from nobody, and it carried on in Japan for decades across several consoles without ever leaving.',
      'In a cartridge like this, the first job is not translating: it is proving you are reading the right text. The encoding was broken with <b>independent proofs</b> — the stored byte <b>is the tile index in VRAM</b>, the code being <code>0x74</code> plus the font index, and the mapping closes by two routes, with あ, ャ and the space all matching and the decoded Japanese coming out as readable running text. The consequence is immediate: everything below <code>0x74</code> is a control code. An encoding that is nearly right produces text that looks Japanese and is not, and the whole translation grows crooked on top of it.',
      'The Latin font is already in the build, with the three name blocks in English — <b>112 of the 399 strings</b> — and the builder aborts if a byte changes outside the declared regions. The game\'s trap showed up early and has been worked around: <b>the font has two copies in the ROM</b>, at <code>0x14000</code> and at <code>0x06784</code>, and patching only one <b>does not change a pixel on screen</b>, because the name-entry screen loads the other — and there the katakana slots hold the window corners. The squeeze is not where it looks, either: adding everything up there are <b>10.8 KB free</b> in the ROM, but bank 2, where the battle text is read from, has <b>371 bytes of slack for 4.3 KB of text</b>. Even the emptiness misleads — the filler is the word <code>OSMOT</code> repeated, and it is what gives banks 0 to 6 their fake vectors. There is no patch to install; this page follows the project.'
    ],
    es: [
      '<i>Hanjuku</i> quiere decir <b>medio cocido</b>, y el héroe es un huevo — el nombre es el chiste. Antes de que Square fuera sinónimo de Final Fantasy, tenía esta estrategia cómica en tiempo real, de 1988, en la que diriges un reino y sacas monstruos de dentro de los huevos. Es una serie propia de Square, no una licencia de nadie, y siguió en Japón durante décadas, en varias consolas, sin salir nunca de allí.',
      'En un cartucho así, el primer trabajo no es traducir: es probar que estás leyendo el texto correcto. La codificación se rompió con <b>pruebas independientes</b> — el byte guardado <b>es el índice del tile en la VRAM</b>, el código es <code>0x74</code> más el índice de la fuente, y el mapeo cierra por dos caminos, con あ, ャ y el espacio coincidiendo y el japonés decodificado saliendo corrido y legible. La consecuencia es inmediata: todo lo que hay por debajo de <code>0x74</code> es código de control. Una codificación casi correcta produce texto que parece japonés y no lo es, y la traducción entera nace torcida encima de ella.',
      'La fuente latina ya está en la compilación, con los tres bloques de nombres en inglés — <b>112 de las 399 cadenas</b> —, y el constructor aborta si cambia un byte fuera de las regiones declaradas. La trampa del juego apareció pronto y ya está sorteada: <b>la fuente tiene dos copias en la ROM</b>, en <code>0x14000</code> y en <code>0x06784</code>, y parchear solo una <b>no cambia un píxel en pantalla</b>, porque la pantalla de entrada de nombre carga la otra — y ahí las casillas de katakana guardan las esquinas de la ventana. La estrechez tampoco está donde parece: sumándolo todo hay <b>10,8 KB libres</b> en la ROM, pero el banco 2, de donde se lee el texto de combate, tiene <b>371 bytes de holgura para 4,3 KB de texto</b>. Hasta el vacío engaña — el relleno es la palabra <code>OSMOT</code> repetida, y es ella la que da vectores falsos a los bancos 0 a 6. No hay parche que instalar; esta página sigue el proyecto.'
    ]
  },
  numeros: [
    { v: '399', r: bi('strings no jogo', 'strings in the game', 'strings en el juego') },
    { v: '112', r: bi('já traduzidas', 'translated so far', 'ya traducidas') },
    { v: '128', r: bi('KB de PRG, com CHR-RAM', 'KB of PRG, with CHR-RAM', 'KB de PRG, con CHR-RAM') }
  ],
  grupos: [
    { titulo: bi('O que já foi medido', 'What is already measured', 'Lo que ya está medido'), itens: [
      { t: bi('<b>O encoding do texto, quebrado com provas independentes</b> — cada mapeamento de caractere fecha por dois caminhos, e o japonês decodificado sai corrido e legível. Encoding "quase certo" produz texto que parece japonês e não é.',
              '<b>The text encoding, broken with independent proofs</b> — every character mapping closes by two routes, and the decoded Japanese comes out as readable running text. An encoding that is "nearly right" produces text that looks Japanese and is not.',
              '<b>El encoding del texto, roto con pruebas independientes</b> — cada mapeo de carácter cierra por dos caminos, y el japonés decodificado sale corrido y legible. Un encoding "casi correcto" produce texto que parece japonés y no lo es.'), foto: 'hj/01-titulo.png' },
      { t: bi('<b>CHR-RAM outra vez</b>, como no Tom Sawyer: os gráficos moram no código, não num bloco do arquivo.',
              '<b>CHR-RAM again</b>, as in Tom Sawyer: the graphics live in the program, not in a block of the file.',
              '<b>CHR-RAM otra vez</b>, como en Tom Sawyer: los gráficos viven en el código, no en un bloque del archivo.') },
      { t: bi('<b>112 de 399 strings</b> traduzidas — os três blocos de nomes. O resto do roteiro é o próximo passo.',
              '<b>112 of 399 strings</b> translated — the three name blocks. The rest of the script is the next step.',
              '<b>112 de 399 strings</b> traducidas — los tres bloques de nombres. El resto del guion es el siguiente paso.') }
    ]}
  ],
  patch: { versoes: { en: { arquivo: 'hanjuku-hero-en.ips' }, pt: null, es: null }, rom: 'Hanjuku Hero (Japan).nes', rom_md5: '60e08c13d85400b77b90b9d581f26fce' },
  fotos: [
    { f: 'hj/01-titulo.png', t: bi('Tela de título', 'Title screen', 'Pantalla de título'),
      c: bi('ROM original — o subtítulo <code>HANJUKU HERO</code> já vem em latinas de fábrica.',
            'Original ROM — the <code>HANJUKU HERO</code> subtitle already comes in Latin letters from the factory.',
            'ROM original — el subtítulo <code>HANJUKU HERO</code> ya viene en latinas de fábrica.') }
  ]
};

export const MONSTERMAKER = {
  slug: 'monster-maker',
  nome: 'Monster Maker',
  subtitulo: '7 Tsu no Hihou',
  jp: 'モンスターメーカー 7つの秘宝',
  traducao_titulo: 'The Seven Treasures',
  publisher: 'Sofel', dev: 'U-Kikaku · Show-Kikaku', ano: 1991, data: '1991',
  sistema: 'Famicom', mapper: 'MMC1 · 256 KB PRG expandido para 512 KB · CHR-RAM de 8 KB · save com bateria',
  categoria: bi('Tradução', 'Translation', 'Traducción'),
  nivel: 'beta',
  capa: 'mm/01-titulo.png',
  linha: bi('A fonte do cartucho tinha três letras latinas. O motor de texto alcançava 48 KB. O inglês pedia 49,6.',
            'The cartridge font held three Latin letters. The text engine reached 48 KB. The English asked for 49.6.',
            'La fuente del cartucho tenía tres letras latinas. El motor de texto alcanzaba 48 KB. El inglés pedía 49,6.'),
  resumo: {
    pt: ['<i>Monster Maker</i> nasceu como jogo de cartas japonês — monstro, tesouro e masmorra distribuídos carta a carta — e foi popular o bastante para virar RPG de Famicom em <i>7 Tsu no Hihou</i>, os sete tesouros. Fora do Japão o nome não diz nada a ninguém, e é exatamente esse o tipo de cartucho que some da história por não ter idioma, não por não prestar. Ele salva em bateria e abre com um prólogo que começa em <code>はるかなる むかし</code>, num tempo muito distante, antes de perguntar se você começa do zero ou retoma um dos dois livros do tempo.',
          'A fonte tinha <b>512 tiles</b> e exatamente <b>três letras latinas</b> — <b>H</b>, <b>M</b> e <b>P</b>, as de HP e MP. O alfabeto inteiro foi desenhado e <b>77 tiles</b> foram reescritos sobre as casas de kana; o plano 1 de cada letra é o plano 0 invertido, e é por isso que a segunda metade da fonte inteira cabe em <b>oito bytes</b>. Os <b>1.386 blocos</b> do roteiro saíram do cartucho, <b>1.370 deles com texto para traduzir</b>, e hoje estão em inglês dentro da ROM — junto com <b>266 nomes</b> de item, magia, monstro e loja, que o menu acha por tabela de ponteiros.',
          'O obstáculo não era o espaço, era o endereçamento. <b>Toda referência de texto deste motor cabe em 16 bits, e dois deles são o banco</b>: o jogo inteiro só enxerga <b>48 KB</b> de texto, e o inglês pedia <b>49,6 KB</b>. A saída foi deixar no lugar de cada fala um atalho de <b>quatro bytes</b> — assim nenhum ponteiro de evento precisou ser tocado, e eles estão espalhados por tabelas que ninguém mapeou — e mandar o texto para oito bancos da expansão, <b>128 KB</b>, alcançados por um roteador que ocupa <b>zero byte</b> do banco fixo: ele entra trocando os três bytes de uma chamada distante que já existia. <b>O patch ainda não está no ar</b>: falta jogar o jogo do começo ao fim, que é a única coisa que medição nenhuma substitui.'],
    en: ['<i>Monster Maker</i> began as a Japanese card game — monster, treasure and dungeon dealt card by card — and was popular enough to become a Famicom RPG in <i>7 Tsu no Hihou</i>, the seven treasures. Outside Japan the name means nothing to anyone, and that is exactly the sort of cartridge that vanishes from history for having no language rather than for being no good. It saves to battery and opens on a prologue beginning <code>はるかなる むかし</code>, in a time long past, before asking whether you start from scratch or resume one of the two books of time.',
          'The font held <b>512 tiles</b> and exactly <b>three Latin letters</b> — <b>H</b>, <b>M</b> and <b>P</b>, the ones from HP and MP. The whole alphabet was drawn and <b>77 tiles</b> rewritten over the kana slots; plane 1 of every letter is plane 0 inverted, which is why the entire second half of the font fits in <b>eight bytes</b>. The script\'s <b>1,386 blocks</b> came out of the cartridge, <b>1,370 of them with text to translate</b>, and today they sit in the ROM in English — along with <b>266 names</b> of items, spells, monsters and shops, which the menu finds through pointer tables.',
          'The obstacle was not space, it was addressing. <b>Every text reference in this engine fits in 16 bits, and two of them are the bank</b>: the whole game can only see <b>48 KB</b> of text, and the English asked for <b>49.6 KB</b>. The way out was to leave a <b>four-byte</b> shortcut where each line used to be — so not one event pointer had to be touched, and they are scattered through tables nobody has mapped — and send the text to eight banks of the expansion, <b>128 KB</b>, reached by a router that costs <b>zero bytes</b> of the fixed bank: it goes in by replacing the three inline bytes of a far call that was already there. <b>The patch is not out yet</b>: the game still has to be played end to end, which is the one thing no measurement replaces.'],
    es: ['<i>Monster Maker</i> nació como juego de cartas japonés — monstruo, tesoro y mazmorra repartidos carta a carta — y fue popular lo bastante para convertirse en RPG de Famicom en <i>7 Tsu no Hihou</i>, los siete tesoros. Fuera de Japón el nombre no le dice nada a nadie, y ese es exactamente el tipo de cartucho que desaparece de la historia por no tener idioma, no por no valer. El cartucho guarda con pila y abre con un prólogo que empieza en <code>はるかなる むかし</code>, en un tiempo muy lejano, antes de preguntar si empiezas de cero o retomas uno de los dos libros del tiempo.',
          'La fuente tenía <b>512 tiles</b> y exactamente <b>tres letras latinas</b> — <b>H</b>, <b>M</b> y <b>P</b>, las de HP y MP. Se dibujó el alfabeto entero y se reescribieron <b>77 tiles</b> sobre las casillas de kana; el plano 1 de cada letra es el plano 0 invertido, y por eso la segunda mitad de la fuente entera cabe en <b>ocho bytes</b>. Los <b>1.386 bloques</b> del guion salieron del cartucho, <b>1.370 de ellos con texto que traducir</b>, y hoy están en inglés dentro de la ROM — junto con <b>266 nombres</b> de objeto, magia, monstruo y tienda, que el menú encuentra por tabla de punteros.',
          'El obstáculo no era el espacio, era el direccionamiento. <b>Toda referencia de texto de este motor cabe en 16 bits, y dos de ellos son el banco</b>: el juego entero solo ve <b>48 KB</b> de texto, y el inglés pedía <b>49,6 KB</b>. La salida fue dejar en el lugar de cada frase un atajo de <b>cuatro bytes</b> — así no hubo que tocar ni un puntero de evento, y están repartidos por tablas que nadie ha mapeado — y mandar el texto a ocho bancos de la ampliación, <b>128 KB</b>, alcanzados por un enrutador que ocupa <b>cero bytes</b> del banco fijo: entra cambiando los tres bytes de una llamada lejana que ya existía. <b>El parche aún no está publicado</b>: falta jugar el juego de principio a fin, que es lo único que ninguna medición sustituye.']
  },
  numeros: [
    { v: '1.370', r: bi('falas do roteiro em inglês', 'lines of script in English', 'frases del guion en inglés') },
    { v: '266', r: bi('nomes de item, magia e monstro', 'item, spell and monster names', 'nombres de objeto, magia y monstruo') },
    { v: '128 KB', r: bi('de texto alcançável, contra 48 do motor original', 'of reachable text, against the engine\'s original 48', 'de texto alcanzable, frente a los 48 del motor original') }
  ],
  grupos: [],
  patch: { versoes: { en: { arquivo: 'monster-maker-en.ips' }, pt: null, es: null }, rom: 'Monster Maker - 7 Tsu no Hihou (Japan).nes', rom_md5: 'b10e90e81f3bdbe5a232ee34d746327e' },
  fotos: [
    { f: 'mm/01-titulo.png', t: bi('Tela de título', 'Title screen', 'Pantalla de título'),
      c: bi('O subtítulo já em inglês: <code>THE SEVEN TREASURES</code>.', 'The subtitle already in English: <code>THE SEVEN TREASURES</code>.', 'El subtítulo ya en inglés: <code>THE SEVEN TREASURES</code>.') },
    { f: 'mm/02-prologo.png', t: bi('O prólogo em inglês', 'The prologue in English', 'El prólogo en inglés'),
      c: bi('A caixa mede <b>26 colunas por três linhas</b> — a linha que sobra entre elas é onde o japonês desenhava o dakuten.', 'The box measures <b>26 columns by three lines</b> — the spare line between them is where Japanese drew the dakuten.', 'La caja mide <b>26 columnas por tres líneas</b> — la línea que sobra entre ellas es donde el japonés dibujaba el dakuten.') },
    { f: 'mm/03-templo.png', t: bi('O templo do deus mau', 'The temple of the evil god', 'El templo del dios malo'),
      c: bi('Cada uma destas frases mora num banco que o motor original não alcançava: no lugar dela ficou um atalho de quatro bytes.', 'Every one of these lines lives in a bank the original engine could not reach: what stayed behind is a four-byte shortcut.', 'Cada una de estas frases vive en un banco que el motor original no alcanzaba: en su lugar quedó un atajo de cuatro bytes.') }
  ]
};
