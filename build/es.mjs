/* Traduções para o espanhol. Casam por caminho com os objetos de dados:
   cada string aqui vira o campo `es` do par {pt, en} correspondente.
   O que faltar cai no inglês, por desenho — nunca fica em branco. */
export const ES = {
  seed: {
    hero: {
      kicker: 'Brasil · desde 2026 · taller de rom hacking',
      title:  'Algunos juegos nunca aprendieron inglés.',
      accent: 'Eso fue solo el principio.',
      lede: 'Patch Clan es un grupo de rom hacking. Traducimos juegos que nunca tuvieron lanzamiento en inglés — punteros, fuente, saltos de línea y todo lo demás — y no paramos ahí: pantallas que el original no tenía, errores de treinta y cinco años corregidos, y todo lo que quepa en un cartucho que siempre tuvo sitio.',
      note: 'Solo parches, nunca ROMs. Gratis, y va a seguir así. El primero fue <b>Famicom Jump II</b>, y sigue siendo el buque insignia.'
    },
    patreon: {
      chamada: 'Lo que compra una suscripción son <b>horas</b>. En un juego así pasan unas doscientas antes de que una sola palabra en inglés llegue a la pantalla: desensamblar el motor, encontrar el texto, entender el empaquetado, y entonces escribir las herramientas que leen y reescriben.',
      promessa: 'Tres cosas que no cambian: <b>no se distribuye ninguna ROM</b>, solo parches. <b>Todo parche terminado es gratis</b> para todo el mundo, mecenas o no. Y <b>no se promete ninguna fecha</b>, porque una fecha prometida se convierte en prisa, y la prisa se nota en el texto.',
      tiers: []
    },
    rules: [
      { title: 'Parches, nunca ROMs', text: 'Tú traes tu propio volcado. Aquí no se aloja nada con derechos de autor, nunca.' },
      null,
      { title: 'Ninguna fecha prometida', text: 'Ni en publicaciones ni en respuestas. Sale cuando se lee bien.' },
      { title: 'Lento a propósito', text: 'Y cada línea se lee en voz alta antes de salir — en hardware, a tamaño real.' }
    ],
    who: {
      paras: [
        'Patch Clan es <b>Sonix</b> — ex-<b>Central Brasileira de Traduções</b>, la CBT, uno de los grupos que construyeron la escena de traducción brasileña cuando un parche viajaba por mensaje de foro y todo el mundo aprendía hex editing en un archivo de texto que otro escribió a las dos de la mañana.',
        'Escribimos nuestras propias herramientas para cada juego, porque las de uso general se detienen en la parte interesante: un desensamblador 6502 con mapa de bancos por mapper, desempaquetadores de texto a nivel de bit, un ensamblador 6502 en Python, y un emulador sin ventana dirigido por Lua que arranca la ROM y fotografía la pantalla sin abrir nada.',
        'El cronograma, el control de calidad y el lanzamiento son parte del mismo trabajo que el parche: nada sale por plazo, sale cuando se lee bien.'
      ],
      sign: 'traducción, hacking, revisión, clan'
    },
    footer: { tagline: 'Parches para juegos que nunca hablaron inglés' }
  },
  jogos: {
    'famicom-jump-2': {
      status: 'Publicado',
      linha: 'Goku, JoJo y cinco más de la Shōnen Jump en un mismo campo. La B pasó a ser una acción comodín, y dos bytes despertaron una escena de 1991.',
      resumo: [
        'La <i>Weekly Shōnen Jump</i> es la revista semanal en la que Dragon Ball salió capítulo a capítulo, y en 1991 Bandai y Chunsoft pusieron siete de sus series en el mismo campo de batalla: Goku, JoJo, el policía Ryotsu de <i>Kochikame</i>, Taruruto, Ta-chan, Momotaro y Taison. Tres de los siete entran a la vez, la vida se cuenta en corazones y hasta el alcance de movimiento es un atributo que sube de nivel — el manual llama al sistema <b>S·A·S, Simulation Action System</b>.',
        'Hablar con alguien costaba abrir el menú y elegir <code>はなす</code>; en el campo, la <b>B</b> no hacía nada — la rutina existía y terminaba en <code>RTS</code>. Ahora <b>la B es una acción comodín</b>: habla con quien tengas delante y, si no hay nadie, examina el suelo bajo tus pies, que es la misma división que hace el manual de 1991 entre los dos comandos. Son <b>19 bytes</b> en el tramo del kernel que está siempre mapeado, más 3 en el banco 30, y el comando sigue en el menú para quien lo prefiera. Con él llega un <b>prólogo de cinco páginas que no existe en el original</b>: el niño llevado al interior de la revista, el Rey Demonio Piccolo reuniendo a los villanos, los dieciséis héroes — porque seis de esos siete nombres no dicen nada fuera de Japón, y el juego da por hecho que leíste la revista y jugaste al <i>Famicom Jump</i> de 1989.',
        'Y una escena volvió a funcionar. En la apertura, el espíritu nombra a los seis campeones que quedan por encontrar, y el original mostraba <b>siempre los mismos seis</b>, fuera cual fuera el héroe inicial: quien empezaba como Taison oía su propio nombre en la lista, y a Goku no se le nombraba nunca. El selector de siete casos y las siete variantes de texto estaban grabados en la ROM en 1991 y no se disparaban nunca, porque el guion ponía el número en un registro y la rutina leía otro. <b>Dos bytes</b> después, seis variantes que nunca habían llegado a una pantalla llegan. El guion entero está traducido, en un cartucho en el techo del mapper 153 con <b>cero bytes libres</b>: en lugar de recortar texto, la compresión se cambió por un <b>Huffman de orden 1</b> que lleva el texto de 6,25 a <b>3,90 bits por carácter</b>, y en cada compilación las <b>1.903 posiciones de mensaje</b> de la ROM se decodifican de vuelta con el decodificador 6502 real y se comparan con el texto de origen. Publicado en <b>inglés, portugués y español</b>.'
      ],
      numeros: ['mensajes traducidos','objetos, lugares y nombres','glifos latinos dibujados','bytes que arreglaron el juego']
    },
    'captain-tsubasa': {
      status: 'Beta',
      linha: 'En España este fútbol por menú de 1988 perdió la licencia y Tsubasa se volvió Robin Field. Este parche traduce el cartucho japonés.',
      resumo: [
        'No disparas: eliges. Cada jugada es un elemento de menú, la animación decide el resto, y el <b>Guts</b> de cada jugador baja con cada regate, pase y tiro. Tecmo, 1988 — de aquí desciende todo el fútbol por turnos que vino después.',
        'En España este cartucho sí llegó, en 1993, y llegó cambiado: se publicó como <i>Tecmo Cup Football Game</i>, con la licencia retirada, el protagonista convertido en <b>Robin Field</b>, rubio y adulto, y hasta las selecciones cambiadas de país. Esta traducción parte del japonés y se queda con él: <b>TSUBASA</b>, <b>HYUGA</b>, <b>WAKABAYASHI</b>, <b>MISAKI</b>, <b>SCHNEIDER</b>, <b>PIERRE</b>, con Nankatsu, la selección japonesa y los extranjeros del torneo internacional, y <b>Guts sigue siendo Guts</b>, porque es marca de la serie. La versión en portugués va a otro sitio: Brasil nunca dobló la serie de 1983, que es el arco de este juego, así que usa el reparto de <i>Captain Tsubasa J</i>, que Rede Manchete emitió en 1997 — <b>BENJI</b>, <b>NEIA</b> y el <b>Entrenador MILANI</b> en pantalla, en el campo de cinco columnas.',
        'Dos cosas cambiaron en la forma de jugar. El original de 1988 devolvía una <b>contraseña para anotar en papel</b>, y escribirla de vuelta era el único camino para continuar; ahora <code>GRABAR</code>, en el menú del entrenador, <b>graba en el cartucho</b> y el <code>CONTINUE</code> carga, con la pantalla de contraseña ahí para quien mantenga pulsada la <b>B</b>. No se inventó ningún formato de guardado: quedan grabados exactamente los <b>24 bytes</b> que la contraseña ya describía, comprobados por la misma rutina que valida una contraseña escrita, en <b>97 bytes</b> de código nuevo. Y la caja de narración se dobló — un código de control nuevo hace que cada línea de guion ocupe dos filas, de <b>14 a 28 columnas</b> en las ventanas del partido y de <b>18 a 36</b> en las mayores, sin tocar el marco ni el conteo de líneas. La fuente hubo que dibujarla: en todo el cartucho existían <b>dieciséis letras latinas</b>, <code>ACDEFGHIKMRSUVWY</code>, y las demás nacieron de cero en 74 tiles. Que mover el texto no rompiera nada se probó por igualdad: <b>225 volcados, 0 bytes distintos</b> contra la ROM original.'
      ],
      numeros: ['elementos de texto insertados','punteros corregidos','letras latinas existían','bytes distintos en 225 volcados']
    },
    'dragon-ball-3': {
      status: 'Release',
      linha: 'Dragon Ball en cartas, 1989. El número de defensa era un kanji dibujado en la ilustración; ahora es una cifra que se puede leer.',
      resumo: [
        'Este es el Dragon Ball de tablero: avanzas por el mapa, robas una carta y luchas con ella. El juego vuelve a contar la saga de Goku desde el principio — la caza de las <b>Bolas de Dragón</b>, el Torneo de Artes Marciales, el Rey Piccolo — y es Bandai la que lleva el manga al Famicom en 1989, con la baraja decidiendo el turno años antes de que aquello fuera un género.',
        'Cada carta lleva una bola con el <b>número de defensa</b> debajo, y ese número era un <b>numeral kanji</b> dibujado en los gráficos: 一二三四五六. No es adorno — el juego te manda compararlo. Karin solo acepta una carta con defensa igual o mayor que la suya, y Mr. Popo acepta cualquier carta que gane en estrellas, técnica <i>o</i> defensa. Quien no leía kanji jugaba dos de los tres entrenamientos a ciegas. Las seis bolas se repintaron con <b>cifra latina</b>, y las ilustraciones se parecen tanto entre sí que solo <b>53 píxeles difieren</b> en los seis bloques de 16×16, todos en el centro donde vivía el kanji. Los diez kanji de las cartas — 拳 蹴 連 必 術 逃 ? 体 特 武 — también son tiles dibujados a mano, y pasaron a ser etiquetas de tres letras en una <b>minifuente de 5×7 px</b> hecha para el caso: tres letras de 5 px ocupan 15 de los 16 px de la casilla, sin espacio entre ellas. El sentido de cada una se cotejó con el manual de Bandai de 1989, y fue él quien corrigió la carta 体, que no es defensa: 体当り es una embestida, un ataque.',
        'El guion entero está en inglés — <b>1.305 de 1.305 mensajes</b>, más los 40 de combate y entrenamiento — dentro de una caja de <b>tres líneas por veinticuatro columnas</b> que el juego no sabe continuar en la pantalla siguiente. <b>164 mensajes</b> pasaban de 45 glifos en japonés y se reescribieron para caber sin perder el sentido, y <b>254</b> de los que quedaron cierran sin una columna de sobra. El título 悟空伝 se rehízo como <code>LEGEND OF GOKU</code> dentro de los mismos 96×32 píxeles, la ROM creció de <b>128 a 256 KB</b>, y la rejilla de contraseña pasó a letras latinas sin colisiones entre símbolos: <b>quien tenga una contraseña anotada en 1989 puede escribirla aquí</b>.'
      ],
      numeros: ['mensajes traducidos','nombres, técnicas y nombres de batalla','kanji redibujados como ilustración','KB, la ROM ampliada']
    }
  },
  labels: {
    traducoes: 'Las traducciones', atualizacoes: 'Novedades', apoie: 'Apoya al clan',
    regras: 'Reglas de la casa', quem: 'Quién', verTraducao: 'Ver la traducción →',
    projetoAtual: 'Proyecto actual', tudoQueEntrou: 'Todo lo que entró', asTelas: 'Las pantallas',
    todasTraducoes: '← Todas las traducciones', oPrimeiro: 'El primero',
    primeiraTraducao: 'La primera traducción del clan', apoiarPatreon: 'Apoyar en Patreon',
    horas: 'Lo que compras son horas.', manual: 'Manual', apoiar: 'Apoyar'
  }
};

/* a dobra nova já nasce com o espanhol no seed; nada a acrescentar aqui */
