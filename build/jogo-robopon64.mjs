const bi = (pt, en, es) => ({ pt, en, es });

export const ROBOPON64 = {
  slug: 'robopon-64',
  nome: 'Robopon 64',
  subtitulo: '7tsu no Umi no Caramel',
  jp: 'ロボットポンコッツ64 七つの海のカラメル',
  traducao_titulo: 'Caramel of the Seven Seas',
  publisher: 'Hudson Soft', dev: 'Red Company', ano: 1999, data: '24/12/1999',
  sistema: 'Nintendo 64', mapper: '32 MB · CIC-6101 · texto em Shift-JIS · vídeo e texturas em HVQ2',
  categoria: bi('Tradução', 'Translation', 'Traducción'),
  nivel: 'alfa',
  capa: 'robopon64/01-titulo.png',
  linha: bi('O único Robopon de console, preso no Japão. A fonte já tem o alfabeto inteiro — o que falta é espaço: seis caracteres por campo.',
            'The only console Robopon, stuck in Japan. The font already holds the whole alphabet — what is missing is room: six characters per field.',
            'El único Robopon de consola, atrapado en Japón. La fuente ya tiene el alfabeto entero — lo que falta es espacio: seis caracteres por campo.'),
  resumo: {
    pt: ['A série <i>Robopon</i> saiu do Japão pelo Game Boy, com a <i>Sun Version</i> localizada pela Atlus em 2000. Este aqui não saiu: é o <b>único da série em console</b>, lançado para Nintendo 64 no Natal de 1999, e conta a viagem por sete mares atrás dos tesouros que revivem o robô lendário Caramel. Ele conversa com os cartuchos de Game Boy pelo <b>64GB Pak</b>, transferindo robôs de um jogo para o outro — e é justamente por isso que o elenco dele não é próprio: são <b>46 Robopon</b>, 45 vindos da primeira geração e um exclusivo, o <code>バケまる</code>.',
          'A parte difícil dos nossos hacks de 8 bits aqui não existe. O texto está em <b>Shift-JIS puro</b>, sem compressão e sem tabela inventada, e a fonte do jogo — <b>12×12 pixels, 272 glifos</b> — já traz o <b>alfabeto latino inteiro</b> nas 95 primeiras posições. Não há tile para desenhar, CHR para expandir nem mapper para trocar: traduzir é reescrever string. O obstáculo mudou de lugar. Os campos são de <b>tamanho fixo e sem tabela de ponteiros</b>, com <b>mediana de seis caracteres</b>, e o nome de robô cabe em cinco — prova disso é que nenhum dos 46 nomes japoneses usa seis.',
          'O glossário oficial não foi adivinhado. A lista da primeira geração marca quais Robopon aparecem no 64; filtrando por essa marca e mantendo a ordem, ela casou <b>45 de 45</b> com a ordem interna da ROM, entrada por entrada — pareamento por posição, não por nome, que é verificação bem mais forte. Daí saíram <code>ロボまる</code> = <b>Sunny</b>, <code>ムサシ</code> = <b>Sammi</b> e os outros 43. Esta versão é <b>alfa</b>: <b>1.420 strings</b> traduzidas e conferidas na ROM montada, incluindo nomes, peças, golpes, tipos, status e os menus de save. Falta o diálogo — <b>241 mensagens</b> que guardam códigos de cor e quebra de linha dentro da própria string. E o patch é <b>BPS, não IPS</b>: o IPS endereça com três bytes e para nos 16 MB, e metade das alterações deste jogo mora acima disso.'],
    en: ['The <i>Robopon</i> series left Japan on the Game Boy, with <i>Sun Version</i> localised by Atlus in 2000. This one did not: it is the <b>only console entry</b>, released for the Nintendo 64 at Christmas 1999, and it tells of a voyage across seven seas after the treasures that revive the legendary robot Caramel. It talks to the Game Boy cartridges through the <b>64GB Pak</b>, moving robots from one game to the other — which is exactly why its cast is not its own: <b>46 Robopon</b>, 45 drawn from the first generation and one exclusive, <code>バケまる</code>.',
          'The hard part of our 8-bit hacks simply is not here. The text sits in <b>plain Shift-JIS</b>, uncompressed and with no invented table, and the game font — <b>12×12 pixels, 272 glyphs</b> — already carries the <b>whole Latin alphabet</b> in its first 95 slots. There is no tile to draw, no CHR to expand, no mapper to swap: translating means rewriting strings. The obstacle moved elsewhere. Fields are <b>fixed width with no pointer table</b>, a <b>median of six characters</b>, and a robot name fits in five — the proof being that not one of the 46 Japanese names uses six.',
          'The official glossary was not guessed at. The first-generation list marks which Robopon appear in the 64; filtering on that mark and keeping the order, it matched <b>45 out of 45</b> against the ROM\'s internal order, entry by entry — paired by position rather than by name, which is far stronger verification. Out of it came <code>ロボまる</code> = <b>Sunny</b>, <code>ムサシ</code> = <b>Sammi</b> and the other 43. This release is <b>alpha</b>: <b>1,420 strings</b> translated and read back from the assembled ROM, covering names, parts, moves, types, stats and the save menus. The dialogue is still missing — <b>241 messages</b> that carry colour and line-break codes inside the string itself. And the patch is <b>BPS, not IPS</b>: IPS addresses in three bytes and stops at 16 MB, and half of this game\'s changes live above that.'],
    es: ['La serie <i>Robopon</i> salió de Japón por el Game Boy, con la <i>Sun Version</i> localizada por Atlus en 2000. Este no salió: es el <b>único de la serie en consola</b>, lanzado para Nintendo 64 en la Navidad de 1999, y cuenta el viaje por siete mares tras los tesoros que reviven al robot legendario Caramel. Se comunica con los cartuchos de Game Boy por el <b>64GB Pak</b>, transfiriendo robots de un juego a otro — y por eso mismo su elenco no es propio: son <b>46 Robopon</b>, 45 venidos de la primera generación y uno exclusivo, <code>バケまる</code>.',
          'La parte difícil de nuestros hacks de 8 bits aquí no existe. El texto está en <b>Shift-JIS puro</b>, sin compresión y sin tabla inventada, y la fuente del juego — <b>12×12 píxeles, 272 glifos</b> — ya trae el <b>alfabeto latino entero</b> en las 95 primeras posiciones. No hay tile que dibujar, CHR que ampliar ni mapper que cambiar: traducir es reescribir cadenas. El obstáculo cambió de sitio. Los campos son de <b>tamaño fijo y sin tabla de punteros</b>, con <b>mediana de seis caracteres</b>, y el nombre de robot cabe en cinco — la prueba es que ninguno de los 46 nombres japoneses usa seis.',
          'El glosario oficial no se adivinó. La lista de la primera generación marca qué Robopon aparecen en el 64; filtrando por esa marca y manteniendo el orden, casó <b>45 de 45</b> con el orden interno de la ROM, entrada por entrada — emparejado por posición y no por nombre, que es verificación mucho más fuerte. De ahí salieron <code>ロボまる</code> = <b>Sunny</b>, <code>ムサシ</code> = <b>Sammi</b> y los otros 43. Esta versión es <b>alfa</b>: <b>1.420 cadenas</b> traducidas y releídas de la ROM montada, con nombres, piezas, golpes, tipos, estados y los menús de guardado. Falta el diálogo — <b>241 mensajes</b> que guardan códigos de color y salto de línea dentro de la propia cadena. Y el parche es <b>BPS, no IPS</b>: el IPS direcciona con tres bytes y se detiene en los 16 MB, y la mitad de los cambios de este juego vive por encima.']
  },
  numeros: [
    { v: '46', r: bi('Robopon, 45 com nome oficial', 'Robopon, 45 with an official name', 'Robopon, 45 con nombre oficial') },
    { v: '1.420', r: bi('strings traduzidas nesta alfa', 'strings translated in this alpha', 'cadenas traducidas en esta alfa') },
    { v: '95', r: bi('letras latinas já na fonte', 'Latin letters already in the font', 'letras latinas ya en la fuente') },
    { v: '6', r: bi('caracteres por campo, na mediana', 'characters per field, median', 'caracteres por campo, en la mediana') }
  ],
  grupos: [],
  patch: { versoes: { en: { arquivo: 'robopon-64-en.bps' }, pt: null, es: null },
           rom: 'Robot Poncots 64 - 7tsu no Umi no Caramel (Japan).z64',
           rom_md5: '444f70a655ac89ca900f6fafaf926b16' },
  fotos: [
    { f: 'robopon64/01-titulo.png', t: bi('Tela de título', 'Title screen', 'Pantalla de título'),
      c: bi('O letreiro é textura numa cena 3D, e ainda está em japonês.',
            'The logo is a texture inside a 3D scene, still in Japanese.',
            'El logotipo es una textura dentro de una escena 3D, aún en japonés.') },
    { f: 'robopon64/02-save.png', t: bi('Menu de save traduzido', 'Translated save menu', 'Menú de guardado traducido'),
      c: bi('START, DELETE, NO DATA e B: CANCEL desenhados pelo próprio jogo.',
            'START, DELETE, NO DATA and B: CANCEL drawn by the game itself.',
            'START, DELETE, NO DATA y B: CANCEL dibujados por el propio juego.') }
  ]
};
