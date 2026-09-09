const bi = (pt, en, es) => ({ pt, en, es });

export const PMS = {
  slug: 'pocket-monsters-stadium',
  nome: 'Pocket Monsters Stadium',
  subtitulo: 'ポケモンスタジアム',
  jp: 'ポケモンスタジアム',
  publisher: 'Nintendo', dev: 'Creatures Inc.', ano: 1998, data: '1998',
  sistema: 'Nintendo 64', mapper: 'CIC-6103 · 16 MB · texto EUC-JP em claro · compressão Yay0',
  categoria: bi('Tradução', 'Translation', 'Traducción'),
  nivel: 'alfa',
  capa: 'pms/02-titulo.png',
  linha: bi('O primeiro Stadium, com 42 Pokémon jogáveis, que nunca saiu do Japão — e que até hoje não tinha patch nenhum, nem parcial.',
            'The first Stadium, with 42 usable Pokémon, that never left Japan — and until now had no patch at all, not even a partial one.',
            'El primer Stadium, con 42 Pokémon jugables, que nunca salió de Japón — y que hasta hoy no tenía ningún parche, ni parcial.'),
  resumo: {
    pt: [
      'O <i>Pokémon Stadium</i> que saiu no Ocidente é, na verdade, o <b>segundo</b> Stadium japonês. O primeiro, de agosto de 1998, ficou no Japão: só <b>42 Pokémon</b> podiam lutar, o modo principal eram os torneios das quatro copas, e a Nintendo decidiu que aquilo era pouco para exportar. Trinta e sete anos depois, é o único jogo de Pokémon do console que ninguém tinha traduzido — nem parcialmente.',
      'O texto não estava onde se esperava. Não é Shift-JIS, que é o que se procura primeiro num jogo japonês: é <b>EUC-JP</b>, em claro, sem compressão, com as strings terminadas em zero e alinhadas a quatro bytes. Foram seis varreduras perdidas antes de a resposta aparecer — e ela apareceu lendo a <b>memória do jogo rodando</b>, não a ROM: um savestate mostrou os bytes <code>A4 D2 A4 F3 A4 B7</code>, que são <code>ひんし</code>, o estado de Pokémon derrotado. A ROM inteira tem <b>2.739 strings e 74,5 KB de texto</b>.',
      'Esta é uma <b>alfa, e ela mostra</b>: cerca de <b>2.100 strings estão em inglês</b> — as 151 espécies com a sua categoria, os 165 golpes, os 81 itens, os tipos, os estados e os menus — mas as <b>descrições longas ainda estão em japonês</b>: as entradas de Pokédex, as descrições de golpe e de item, que são dois terços do volume. Há também um travamento conhecido ao entrar na batalha contra o computador, ainda sem diagnóstico. O patch está aqui porque a página acompanha o trabalho, não porque o trabalho acabou.'
    ],
    en: [
      'The <i>Pokémon Stadium</i> released in the West is really the <b>second</b> Japanese Stadium. The first one, from August 1998, stayed in Japan: only <b>42 Pokémon</b> could battle, the main mode was the four cup tournaments, and Nintendo decided that was too thin to export. Thirty-seven years later it is the only Pokémon game on the console nobody had translated — not even in part.',
      'The text was not where you would look for it. It is not Shift-JIS, which is the first thing you try on a Japanese game: it is <b>EUC-JP</b>, in the clear, uncompressed, NUL-terminated and aligned to four bytes. Six sweeps were wasted before the answer turned up — and it turned up in the <b>running game’s memory</b>, not in the ROM: a savestate showed the bytes <code>A4 D2 A4 F3 A4 B7</code>, which spell <code>ひんし</code>, the fainted status. The whole ROM holds <b>2,739 strings and 74.5 KB of text</b>.',
      'This is an <b>alpha, and it shows</b>: about <b>2,100 strings are in English</b> — the 151 species with their categories, the 165 moves, the 81 items, the types, the statuses and the menus — but the <b>long descriptions are still Japanese</b>: the Pokédex entries and the move and item descriptions, which are two thirds of the volume. There is also a known hang when starting a battle against the computer, still undiagnosed. The patch is here because the page follows the work, not because the work is done.'
    ],
    es: [
      'El <i>Pokémon Stadium</i> que salió en Occidente es en realidad el <b>segundo</b> Stadium japonés. El primero, de agosto de 1998, se quedó en Japón: solo <b>42 Pokémon</b> podían combatir, el modo principal eran los torneos de las cuatro copas, y Nintendo decidió que aquello era poco para exportar. Treinta y siete años después, es el único juego de Pokémon de la consola que nadie había traducido — ni parcialmente.',
      'El texto no estaba donde uno lo busca. No es Shift-JIS, que es lo primero que se prueba en un juego japonés: es <b>EUC-JP</b>, en claro, sin comprimir, terminado en cero y alineado a cuatro bytes. Se perdieron seis barridos antes de que apareciera la respuesta — y apareció leyendo la <b>memoria del juego en marcha</b>, no la ROM: un savestate mostró los bytes <code>A4 D2 A4 F3 A4 B7</code>, que son <code>ひんし</code>, el estado de Pokémon debilitado. La ROM entera tiene <b>2.739 cadenas y 74,5 KB de texto</b>.',
      'Esta es una <b>alfa, y se nota</b>: unas <b>2.100 cadenas están en inglés</b> — las 151 especies con su categoría, los 165 movimientos, los 81 objetos, los tipos, los estados y los menús — pero las <b>descripciones largas siguen en japonés</b>: las entradas de Pokédex y las descripciones de movimiento y objeto, que son dos tercios del volumen. Hay además un cuelgue conocido al entrar en combate contra la máquina, todavía sin diagnóstico. El parche está aquí porque la página acompaña el trabajo, no porque el trabajo haya terminado.'
    ]
  },
  numeros: [
    { v: '2.739', r: bi('strings de texto na ROM', 'text strings in the ROM', 'cadenas de texto en la ROM') },
    { v: '74,5 KB', r: bi('de texto japonês ao todo', 'of Japanese text in all', 'de texto japonés en total') },
    { v: '42', r: bi('Pokémon jogáveis no original', 'Pokémon usable in the original', 'Pokémon jugables en el original') },
    { v: '0', r: bi('patches anteriores, nem parciais', 'earlier patches, not even partial', 'parches anteriores, ni parciales') }
  ],
  grupos: [
    { titulo: bi('O que este cartucho ensinou', 'What this cartridge taught', 'Lo que enseñó este cartucho'), itens: [
      { t: bi('<b>EUC-JP, não Shift-JIS.</b> Kana em <code>0xA4xx</code> e <code>0xA5xx</code>, kanji a partir de <code>0xB0A1</code>. Procurar só Shift-JIS num jogo japonês é procurar na faixa de bytes errada, e a varredura devolve zero sem dizer por quê.',
              '<b>EUC-JP, not Shift-JIS.</b> Kana at <code>0xA4xx</code> and <code>0xA5xx</code>, kanji from <code>0xB0A1</code>. Searching only for Shift-JIS in a Japanese game means searching the wrong byte range, and the sweep returns nothing without telling you why.',
              '<b>EUC-JP, no Shift-JIS.</b> Kana en <code>0xA4xx</code> y <code>0xA5xx</code>, kanji desde <code>0xB0A1</code>. Buscar solo Shift-JIS en un juego japonés es buscar en el rango de bytes equivocado, y el barrido devuelve cero sin decir por qué.'), foto: 'pms/02-titulo.png' },
      { t: bi('<b>O CIC decide o checksum e o endereço de carga.</b> Este cartucho é CIC-6103: o CRC usa a semente <code>0xA3886759</code> e soma no fim, não XOR — e o IPL3 subtrai <code>0x100000</code> do endereço do cabeçalho. Errar qualquer um dos dois faz o cartucho travar antes do primeiro quadro.',
              '<b>The CIC decides both the checksum and the load address.</b> This cartridge is CIC-6103: the CRC uses seed <code>0xA3886759</code> and adds at the end instead of XOR — and IPL3 subtracts <code>0x100000</code> from the header address. Getting either wrong hangs the cartridge before the first frame.',
              '<b>El CIC decide el checksum y la dirección de carga.</b> Este cartucho es CIC-6103: el CRC usa la semilla <code>0xA3886759</code> y suma al final, no XOR — y el IPL3 resta <code>0x100000</code> a la dirección de la cabecera. Equivocarse en cualquiera de los dos cuelga el cartucho antes del primer fotograma.') },
      { t: bi('<b>A tela de créditos sobe a própria fonte.</b> No N64 não há CHR: a tela programa o vídeo do zero, desenha 44 glifos 8×8 seus e devolve o controle ao jogo. Mora em 1.186 bytes de espaço morto que o próprio jogo zera logo depois — por isso escrever ali não tira nada de ninguém.',
              '<b>The credits screen uploads its own font.</b> There is no CHR on the N64: the screen programs the video hardware from scratch, draws its own 44 8×8 glyphs and hands control back to the game. It lives in 1,186 bytes of dead space that the game itself wipes moments later — which is why writing there takes nothing from anyone.',
              '<b>La pantalla de créditos sube su propia fuente.</b> En N64 no hay CHR: la pantalla programa el vídeo desde cero, dibuja sus 44 glifos de 8×8 y devuelve el control al juego. Vive en 1.186 bytes de espacio muerto que el propio juego borra poco después — por eso escribir ahí no le quita nada a nadie.'), foto: 'pms/01-creditos.png' }
    ]},
    { titulo: bi('O que falta', 'What is missing', 'Lo que falta'), itens: [
      { t: bi('<b>571 descrições longas</b> continuam em japonês — Pokédex, golpes e itens. São dois terços do volume de texto, e escaparam porque a varredura rejeitava a quebra de linha <code>0x0A</code>: toda string de múltiplas linhas ficava invisível.',
              '<b>571 long descriptions</b> are still Japanese — Pokédex, moves and items. They are two thirds of the text volume, and they escaped because the sweep rejected the line break <code>0x0A</code>: every multi-line string was invisible.',
              '<b>571 descripciones largas</b> siguen en japonés — Pokédex, movimientos y objetos. Son dos tercios del volumen de texto, y se escaparon porque el barrido rechazaba el salto de línea <code>0x0A</code>: toda cadena de varias líneas quedaba invisible.') },
      { t: bi('<b>Um travamento conhecido</b> ao escolher o adversário e entrar na batalha contra o computador. Ainda sem diagnóstico: os especificadores de formato foram conferidos nas 2.116 traduções e não há divergência.',
              '<b>A known hang</b> when choosing the opponent and starting a battle against the computer. Still undiagnosed: format specifiers were checked across all 2,116 translations and none diverge.',
              '<b>Un cuelgue conocido</b> al elegir rival y entrar en combate contra la máquina. Aún sin diagnóstico: los especificadores de formato se comprobaron en las 2.116 traducciones y ninguno diverge.') }
    ]}
  ],
  patch: {
    versoes: { en: { arquivo: 'pocket-monsters-stadium-en.ips' }, pt: null, es: null },
    rom: 'Pocket Monsters Stadium (J) [!].n64',
    rom_md5: '7159f1b35af48ec43236ddfcc2c73b5c'
  },
  fotos: [
    { f: 'pms/01-creditos.png', t: bi('Créditos do patch', 'Patch credits', 'Créditos del parche'),
      c: bi('Tela nova antes do título, com a fonte que ela mesma sobe.', 'A new screen before the title, with the font it uploads itself.', 'Pantalla nueva antes del título, con la fuente que ella misma sube.') },
    { f: 'pms/02-titulo.png', t: bi('Tela de título', 'Title screen', 'Pantalla de título'),
      c: bi('O Stadium que ficou no Japão.', 'The Stadium that stayed in Japan.', 'El Stadium que se quedó en Japón.') }
  ]
};
