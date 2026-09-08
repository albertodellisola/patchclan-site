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
  nivel: 'alfa',
  capa: 'u2/01-titulo.png',
  linha: bi('O RPG em que os Ultraman viram bonecos de cabeça grande e enfrentam os monstros da série.',
            'The RPG where the Ultramen become big-headed chibi figures and fight the monsters of the series.',
            'El RPG donde los Ultraman se vuelven figuras chibi y enfrentan a los monstruos de la serie.'),
  resumo: {
    pt: ['Um RPG da Tsuburaya em que os Ultraman viram bonecos de cabeça grande e enfrentam os monstros da série. Nunca saiu do Japão.',
         'Sai da Tsuburaya com a Shinsei, em 1989, e nunca deixou o Japão. Esta é uma versão <b>alfa</b>: o texto está todo em inglês e verificado, mas o jogo ainda não foi percorrido do começo ao fim.'],
    en: ['A Tsuburaya RPG where the Ultramen become big-headed chibi figures and fight the monsters of the series. It never left Japan.',
         'It comes from Tsuburaya with Shinsei, in 1989, and never left Japan. This is an <b>alpha</b>: the text is all in English and verified, but the game has not yet been played end to end.'],
    es: ['Un RPG de Tsuburaya donde los Ultraman se vuelven figuras chibi y enfrentan a los monstruos de la serie. Nunca salió de Japón.',
         'Sale de Tsuburaya con Shinsei, en 1989, y nunca dejó Japón. Esta es una versión <b>alfa</b>: el texto está todo en inglés y verificado, pero el juego aún no se ha recorrido de principio a fin.']
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
  nivel: 'alfa',
  capa: 'nk/01-titulo.png',
  linha: bi('O jogo de luta do Kunio-kun: dezesseis lutadores, quatro estilos e um torneio de rua que sai do pátio da escola.',
            "The Kunio-kun fighting game: sixteen fighters, four styles, and a street tournament that starts in the school yard.",
            'El juego de lucha de Kunio-kun: dieciséis luchadores, cuatro estilos y un torneo callejero que sale del patio de la escuela.'),
  resumo: {
    pt: ['O Kunio e dezesseis lutadores num torneio de rua. É o mesmo motor da série Kunio-kun, e o texto é curto e denso — 266 strings, sem compressão nenhuma.',
         'É o mesmo motor da série Kunio-kun, com o texto curto e denso que ela sempre teve — e um logo de título que o clã redesenhou em latinas.'],
    en: ['Kunio and sixteen fighters in a street tournament. It is the same engine as the rest of the Kunio-kun series, and the text is short and dense — 266 strings, with no compression at all.',
         'It is the same engine as the rest of the Kunio-kun series, with the short, dense text it always had — and a title logo the clan redrew in Latin letters.'],
    es: ['Kunio y dieciséis luchadores en un torneo callejero. Es el mismo motor del resto de la serie Kunio-kun, y el texto es corto y denso — 266 strings, sin compresión alguna.',
         'Es el mismo motor del resto de la serie Kunio-kun, con el texto corto y denso que siempre tuvo — y un logo de título que el clan redibujó en latinas.']
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
  patch: { versoes: { en: null, pt: null, es: null }, rom: 'Nekketsu Kakutou Densetsu (Japan).nes', rom_md5: '—' },
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
  nivel: 'alfa',
  capa: 'gaia/01-titulo.png',
  linha: bi('O primeiro projeto de <b>Super Famicom</b> do clã: o crossover Compati Hero, com Ultraman, Kamen Rider e Gundam no mesmo RPG.',
            'The clan’s first <b>Super Famicom</b> project: the Compati Hero crossover, with Ultraman, Kamen Rider and Gundam in one RPG.',
            'El primer proyecto de <b>Super Famicom</b> del clan: el crossover Compati Hero, con Ultraman, Kamen Rider y Gundam en un mismo RPG.'),
  resumo: {
    pt: ['Ultraman, Kamen Rider e Gundam dividindo um RPG de Super Famicom — o crossover Compati Hero da Banpresto, que nunca saiu do Japão.',
         'É o projeto que tirou o clã do 8 bits: fonte de 512 glifos de 16×16, ponteiros longos de 24 bits e uma ROM de 2 MB — outra classe de problema.'],
    en: ['Ultraman, Kamen Rider and Gundam sharing a Super Famicom RPG — Banpresto’s Compati Hero crossover, which never left Japan.',
         'This is the project that took the clan off 8-bit: a 512-glyph 16×16 font, 24-bit long pointers and a 2 MB ROM — a different class of problem.'],
    es: ['Ultraman, Kamen Rider y Gundam compartiendo un RPG de Super Famicom — el crossover Compati Hero de Banpresto, que nunca salió de Japón.',
         'Es el proyecto que sacó al clan de los 8 bits: fuente de 512 glifos de 16×16, punteros largos de 24 bits y una ROM de 2 MB — otra clase de problema.']
  },
  numeros: [
    { v: '1.884', r: bi('mensagens extraídas', 'messages extracted', 'mensajes extraídos') },
    { v: '1.467', r: bi('já traduzidas', 'translated so far', 'ya traducidos') },
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
              '<b>420 nombres traducidos</b>, cabiendo en 5.375 de los 5.376 bytes disponibles — un byte de margen.') }
    ]},
    { titulo: bi('O que falta', 'What is left', 'Lo que falta'), itens: [
      { t: bi('<b>417 mensagens</b> ainda por traduzir, das 1.884.',
              '<b>417 messages</b> still to translate, of the 1,884.',
              '<b>417 mensajes</b> aún por traducir, de los 1.884.') },
      { t: bi('<b>O menu principal continua em japonês</b> — ele é gráfico pré-desenhado, não texto, e os tiles ainda não foram localizados. É o mesmo tipo de problema dos kanji das cartas do Dragon Ball 3.',
              '<b>The main menu is still Japanese</b> — it is pre-drawn artwork, not text, and the tiles have not been located yet. It is the same class of problem as the card kanji in Dragon Ball 3.',
              '<b>El menú principal sigue en japonés</b> — es gráfico predibujado, no texto, y los tiles aún no se han localizado. Es el mismo tipo de problema que los kanji de las cartas de Dragon Ball 3.') }
    ]}
  ],
  patch: { versoes: { en: null, pt: null, es: null }, rom: 'Gaia Saver - Hero Saidai no Sakusen (Japan).sfc', rom_md5: '—' },
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
  nivel: 'alfa',
  capa: 'u3/01-titulo.png',
  linha: bi('Aqui a ordem se inverteu: <b>os defeitos do jogo original vêm antes da tradução</b>. Não faz sentido entregar uma tradução bonita de um jogo que trava.',
            'Here the order was reversed: <b>the original game’s defects come before the translation</b>. There is no sense in shipping a beautiful translation of a game that breaks.',
            'Aquí el orden se invirtió: <b>los defectos del juego original van antes de la traducción</b>. No tiene sentido entregar una traducción bonita de un juego que se rompe.'),
  resumo: {
    pt: ['O terceiro Ultraman Club, agora com a Yutaka. Este projeto começou de trás para frente: em vez de traduzir primeiro, a decisão foi <b>consertar os defeitos do jogo original antes</b> — não faz sentido entregar uma tradução bonita de um jogo que trava.',
         'Os Ultraman de volta, agora com a Yutaka em 1991 — e com defeitos de fábrica que este projeto trata como parte do trabalho, não como detalhe.'],
    en: ['The third Ultraman Club, now with Yutaka. This project started backwards: instead of translating first, the decision was to <b>fix the original game’s defects first</b> — there is no sense in shipping a beautiful translation of a game that breaks.',
         'The Ultramen again, now with Yutaka in 1991 — and with factory defects this project treats as part of the work, not as a footnote.'],
    es: ['El tercer Ultraman Club, ahora con Yutaka. Este proyecto empezó al revés: en vez de traducir primero, la decisión fue <b>arreglar los defectos del juego original antes</b> — no tiene sentido entregar una traducción bonita de un juego que se rompe.',
         'Los Ultraman de vuelta, ahora con Yutaka en 1991 — y con defectos de fábrica que este proyecto trata como parte del trabajo, no como un detalle.']
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
  patch: { versoes: { en: null, pt: null, es: null }, rom: 'Ultraman Club 3 (Japan).nes', rom_md5: '—' },
  fotos: [
    { f: 'u3/01-titulo.png', t: bi('Tela de título', 'Title screen', 'Pantalla de título'),
      c: bi('ROM original. Tsuburaya e Yutaka, 1991.', 'Original ROM. Tsuburaya and Yutaka, 1991.', 'ROM original. Tsuburaya y Yutaka, 1991.') }
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
  linha: bi('O outro Square de 1988: estratégia em tempo real, um reino para comandar e monstros que saem de dentro de ovos.',
            'The other Square of 1988: real-time strategy, a kingdom to command, and monsters that hatch out of eggs.',
            'El otro Square de 1988: estrategia en tiempo real, un reino que comandar y monstruos que salen de huevos.'),
  resumo: {
    pt: ['Um jogo de estratégia da Square em que você comanda um reino e solta monstros de dentro de ovos. Virou série no Japão e nunca saiu de lá.',
         'O nome é uma piada: <i>hanjuku</i> é “meio cozido”, e o herói é um ovo. Virou série no Japão e nunca saiu de lá.'],
    en: ['A Square strategy game where you command a kingdom and hatch monsters out of eggs. It became a series in Japan and never left.',
         'The name is a joke: <i>hanjuku</i> means “soft-boiled”, and the hero is an egg. It became a series in Japan and never left.'],
    es: ['Un juego de estrategia de Square donde comandas un reino y sacas monstruos de huevos. Se volvió serie en Japón y nunca salió de allí.',
         'El nombre es una broma: <i>hanjuku</i> es “pasado por agua”, y el héroe es un huevo. Se volvió serie en Japón y nunca salió de allí.']
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
  patch: { versoes: { en: null, pt: null, es: null }, rom: 'Hanjuku Hero (Japan).nes', rom_md5: '60e08c13d85400b77b90b9d581f26fce' },
  fotos: [
    { f: 'hj/01-titulo.png', t: bi('Tela de título', 'Title screen', 'Pantalla de título'),
      c: bi('ROM original — o subtítulo <code>HANJUKU HERO</code> já vem em latinas de fábrica.',
            'Original ROM — the <code>HANJUKU HERO</code> subtitle already comes in Latin letters from the factory.',
            'ROM original — el subtítulo <code>HANJUKU HERO</code> ya viene en latinas de fábrica.') }
  ]
};
