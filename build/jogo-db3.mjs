export const DB3 = {
  slug: 'dragon-ball-3',
  nome: 'Dragon Ball 3',
  subtitulo: 'Gokuu Den',
  jp: 'ドラゴンボール3 悟空伝',
  traducao_titulo: 'Legend of Goku',
  publisher: 'Bandai', dev: 'Bandai', ano: 1989, data: '1989',
  sistema: 'Famicom', mapper: 'Mapper 16 (Bandai FCG-1/2) · 128 KB PRG expanded to 256 KB · 256 KB CHR',
  categoria: { pt:'Tradução + arte', en:'Translation + artwork', es:'Traducción + arte' },
  nivel: 'beta',
  versao: 'English v1.0',
  capa: 'db3/01-titulo.png',
  linha: {
    pt: 'O RPG de tabuleiro com cartas do Dragon Ball. O trabalho difícil aqui não foi o texto — foi o <b>kanji desenhado</b>, que não é texto e não se traduz sozinho.',
    en: 'The Dragon Ball board-and-card RPG. The hard part here was not the text — it was the <b>drawn kanji</b>, which is not text and does not translate itself.'
  },
  resumo: {
    pt: [
      'Você anda num tabuleiro, tira cartas e luta com elas. Cada carta traz um <b>kanji</b> que diz o que ela faz — e esse kanji é <b>arte</b>, desenhada nos gráficos, não um caractere de fonte. Traduzir o jogo exigia redesenhar dez deles, um a um.',
      'O roteiro está inteiro em inglês: <b>1.305 mensagens</b>, dentro de uma caixa de três linhas por vinte e quatro colunas — sem código de "continua na próxima caixa" para socorrer quem estourar.'
    ],
    en: [
      'You move around a board, draw cards and fight with them. Each card carries a <b>kanji</b> saying what it does — and that kanji is <b>artwork</b>, drawn into the graphics, not a font character. Translating the game meant redrawing ten of them, one at a time.',
      'The script is fully in English: <b>1,305 messages</b>, inside a box of three lines by twenty-four columns — with no "continues in the next box" code to rescue anything that overflows.'
    ]
  },
  numeros: [
    { v: '1,305', r: { pt: 'mensagens traduzidas', en: 'messages translated' } },
    { v: '96',    r: { pt: 'nomes, golpes e nomes de batalha', en: 'names, techniques and battle names' } },
    { v: '10',    r: { pt: 'kanji redesenhados como arte', en: 'kanji redrawn as artwork' } },
    { v: '128→256', r: { pt: 'KB, a ROM expandida', en: 'KB, the ROM expanded' } }
  ],
  grupos: [
    { titulo: { pt: 'A tradução', en: 'The translation' }, itens: [
      { t: { pt: '<b>1.305 de 1.305 mensagens</b> em inglês — o roteiro inteiro', en: '<b>1,305 of 1,305 messages</b> in English — the entire script' }, foto: 'db3/04-dialogo.png' },
      { t: { pt: '<b>66 personagens e inimigos, 14 golpes, 16 nomes de batalha</b>, com o glossário casado com os nomes oficiais da Viz', en: '<b>66 characters and enemies, 14 techniques, 16 battle names</b>, with the glossary matched to the official Viz names' } },
      { t: { pt: 'O limite não é o comprimento do texto, é a <b>caixa</b>: três linhas por vinte e quatro colunas, e o jogo não tem código de continuação. <b>164 mensagens</b> tinham 45 ou mais glifos no japonês e foram comprimidas sem perder o sentido.', en: 'The limit is not the length of the text, it is the <b>box</b>: three lines by twenty-four columns, and the game has no continuation code. <b>164 messages</b> ran to 45 or more glyphs in Japanese and were compressed without losing their sense.' } },
      { t: { pt: 'Os <b>614 pares</b> de aspas japonesas「 」viraram aspas latinas <b>sem custar um byte</b>.', en: 'The <b>614 pairs</b> of Japanese quotation marks 「 」 became Latin quotes <b>at no byte cost</b>.' } }
    ]},
    { titulo: { pt: 'O que não era texto', en: 'What was not text' }, itens: [
      { t: { pt: '<b>Os dez kanji das cartas</b> — 拳 蹴 連 必 術 逃 ? 体 特 武 — são tiles de 16×16 desenhados à mão, não caracteres. Viraram abreviações latinas: <code>PCH KCK CMB FIN MAG RUN ? BDY SPC WPN</code>. Por isso a <code>かんじのカード</code> virou <b>symbol card</b> e não "kanji card": chamar de kanji viraria mentira na tela.', en: '<b>The ten card kanji</b> — 拳 蹴 連 必 術 逃 ? 体 特 武 — are hand-drawn 16×16 tiles, not characters. They became Latin abbreviations: <code>PCH KCK CMB FIN MAG RUN ? BDY SPC WPN</code>. That is why <code>かんじのカード</code> became <b>symbol card</b> and not "kanji card": calling it kanji would have been a lie on screen.' }, foto: 'db3/05-cartas.png' },
      { t: { pt: '<b>As seis bolas de defesa</b> traziam os numerais cursivos 一 a 六, também desenhados. Agora trazem <b>1 a 6</b>.', en: '<b>The six defence balls</b> carried the cursive numerals 一 to 六, also drawn. They now carry <b>1 to 6</b>.' } },
      { t: { pt: '<b>O título 悟空伝</b> — doze tiles por quatro, 96×32 pixels de arte — foi redesenhado como <code>LEGEND OF GOKU</code>, dentro do mesmo espaço.', en: '<b>The 悟空伝 title</b> — twelve tiles by four, 96×32 pixels of artwork — was redrawn as <code>LEGEND OF GOKU</code>, inside the same space.' }, foto: 'db3/01-titulo.png' }
    ]},
    { titulo: { pt: 'A senha, e a promessa de não quebrá-la', en: 'The password, and the promise not to break it' }, itens: [
      { t: { pt: '<b>A grade de senha virou letras latinas</b>, sem colisão entre símbolos — e <b>as senhas antigas continuam válidas</b>. Quem tem uma senha anotada de 1989 pode digitá-la aqui.', en: '<b>The password grid became Latin letters</b>, with no collisions between symbols — and <b>old passwords remain valid</b>. Anyone with a password written down since 1989 can type it in here.' }, foto: 'db3/06-senha.png' },
      { t: { pt: '<b>Tela de créditos do patch</b> antes do título — página branca, 5 segundos, pula com A ou START.', en: '<b>A patch credits screen</b> before the title — white page, 5 seconds, skippable with A or START.' }, foto: 'db3/02-creditos.png' }
    ]},
    { titulo: { pt: 'A ROM cresceu, e a original não foi tocada', en: 'The ROM grew, and the original was never touched' }, itens: [
      { t: { pt: 'O texto inglês não cabia na origem, então a ROM foi <b>expandida de 128 KB para 256 KB</b> de código. O construtor monta a ROM inteira do zero, <b>nunca escreve na original</b> (ela é somente leitura, e o MD5 é conferido ao abrir) e <b>aborta se qualquer byte mudar fora das regiões declaradas</b>.', en: 'The English text did not fit where it was, so the ROM was <b>expanded from 128 KB to 256 KB</b> of code. The builder assembles the whole ROM from scratch, <b>never writes to the original</b> (it is read-only, and the MD5 is checked on open) and <b>aborts if any byte changes outside the declared regions</b>.' } },
      { t: { pt: 'Um verificador confere <b>as 1.305 mensagens e os 112 nomes</b> na ROM montada antes de qualquer coisa sair.', en: 'A checker verifies <b>all 1,305 messages and 112 names</b> on the assembled ROM before anything ships.' } }
    ]},
    { titulo: { pt: 'Batalha e treino, fechados', en: 'Battle and training, closed', es: 'Combate y entrenamiento, cerrados' }, itens: [
      { t: { pt: 'As <b>40 mensagens</b> de batalha e treino, nos dois blocos do banco 3, estão traduzidas — <b>inclusive as que carregam um número no meio</b>, disfarçado de espaço. Era a última coisa que segurava o lançamento: encurtar o texto sem saber como o jogo posiciona esse número poria o algarismo no meio de uma palavra.',
             en: 'The <b>40 messages</b> of battle and training, across both blocks in bank 3, are translated — <b>including the ones carrying a number in the middle</b>, disguised as a space. It was the last thing holding up the release: shortening the text without knowing how the game places that number would put the digit inside a word.',
             es: 'Los <b>40 mensajes</b> de combate y entrenamiento, en los dos bloques del banco 3, están traducidos — <b>incluidos los que llevan un número en medio</b>, disfrazado de espacio. Era lo último que frenaba el lanzamiento: acortar el texto sin saber cómo coloca el juego ese número pondría la cifra dentro de una palabra.' } },
      { t: { pt: 'A versão do patch vai <b>queimada na tela de créditos</b>, e não só no nome do arquivo — quem baixa joga a imagem, não o nome. É assim que se sabe, meses depois, qual build está no cartucho.',
             en: 'The patch version is <b>burned into the credits screen</b>, not just into the file name — whoever downloads plays the image, not the name. That is how you know, months later, which build is on the cartridge.',
             es: 'La versión del parche va <b>grabada en la pantalla de créditos</b>, y no solo en el nombre del archivo — quien descarga juega la imagen, no el nombre. Así se sabe, meses después, qué build está en el cartucho.' } }
    ]}
  ],
  patch: { versoes: { en: { arquivo: 'dragon-ball-3-en.ips' }, pt: null, es: null }, rom: 'Dragon Ball 3 - Gokuu Den (Japan) (Rev 1).nes', rom_md5: '0bc3d5d7d1e7f2206ce1c157402ff944' },
  fotos: [
    { f: 'db3/01-titulo.png', t: { pt: 'Tela de título', en: 'Title screen' }, c: { pt: '悟空伝 redesenhado como <code>LEGEND OF GOKU</code>, dentro dos mesmos 96×32 pixels.', en: '悟空伝 redrawn as <code>LEGEND OF GOKU</code>, inside the same 96×32 pixels.' } },
    { f: 'db3/02-creditos.png', t: { pt: 'Créditos do patch', en: 'Patch credits' }, c: { pt: 'Página branca antes do título, cinco segundos, pulável.', en: 'A white page before the title, five seconds, skippable.' } },
    { f: 'db3/03-menu.png', t: { pt: 'Menu', en: 'Menu' }, c: { pt: '<code>GAME START</code> e <code>CONTINUE</code>, onde havia kana.', en: '<code>GAME START</code> and <code>CONTINUE</code>, where kana used to be.' } },
    { f: 'db3/04-dialogo.png', t: { pt: 'Diálogo', en: 'Dialogue' }, c: { pt: 'Três linhas por vinte e quatro colunas, e nenhum código de continuação para salvar quem estourar.', en: 'Three lines by twenty-four columns, and no continuation code to rescue an overflow.' } },
    { f: 'db3/05-cartas.png', t: { pt: 'As cartas', en: 'The cards' }, c: { pt: 'Os kanji desenhados viraram <code>FIN</code>, <code>KCK</code>, <code>PCH</code> — arte redesenhada, não texto traduzido.', en: 'The drawn kanji became <code>FIN</code>, <code>KCK</code>, <code>PCH</code> — artwork redrawn, not text translated.' } },
    { f: 'db3/06-senha.png', t: { pt: 'Senha', en: 'Password' }, c: { pt: 'Grade latina sem colisão — e as senhas de 1989 continuam funcionando.', en: 'A Latin grid with no collisions — and passwords from 1989 still work.' } },
    { f: 'db3/07-mapa.png', t: { pt: 'O tabuleiro', en: 'The board' }, c: { pt: 'Onde o jogo acontece: anda, tira carta, luta.', en: 'Where the game happens: move, draw a card, fight.' } }
  ]
};
