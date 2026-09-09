/* Traduções para o espanhol. Casam por caminho com os objetos de dados:
   cada string aqui vira o campo `es` do par {pt, en} correspondente.
   O que faltar cai no inglês, por desenho — nunca fica em branco. */
export const ES = {
  seed: {
    hero: {
      kicker: 'Brasil · desde 2026 · un clan de uno solo',
      title:  'Algunos juegos nunca aprendieron inglés.',
      accent: 'Eso fue solo el principio.',
      lede: 'Patch Clan es un grupo de rom hacking de una sola persona. Traducimos juegos que nunca tuvieron lanzamiento en inglés — punteros, fuente, saltos de línea y todo lo demás — y no paramos ahí: pantallas que el original no tenía, errores de treinta y cinco años corregidos, y todo lo que quepa en un cartucho que siempre tuvo sitio.',
      note: 'Solo parches, nunca ROMs. Gratis, y va a seguir así. El primero fue <b>Famicom Jump II</b>, y sigue siendo el buque insignia.'
    },
    patreon: {
      chamada: 'Lo que compra una suscripción son <b>horas</b>. En un juego así pasan unas doscientas antes de que una sola palabra en inglés llegue a la pantalla: desensamblar el motor, encontrar el texto, entender el empaquetado, y entonces escribir las herramientas que leen y reescriben.',
      promessa: 'Tres cosas que no cambian: <b>no se distribuye ninguna ROM</b>, solo parches. <b>Todo parche terminado es gratis</b> para todo el mundo, mecenas o no. Y <b>no se promete ninguna fecha</b>, porque nunca he acertado una.',
      tiers: []
    },
    rules: [
      { title: 'Parches, nunca ROMs', text: 'Tú traes tu propio volcado. Aquí no se aloja nada con derechos de autor, nunca.' },
      null,
      { title: 'Ninguna fecha prometida', text: 'Ni en publicaciones ni en respuestas. Sale cuando se lee bien.' },
      { title: 'Una persona, lenta a propósito', text: 'Y cada línea se lee en voz alta antes de salir — en hardware, a tamaño real.' }
    ],
    who: {
      paras: [
        'Patch Clan es <b>Sonix</b> — ex-<b>Central Brasileira de Traduções</b>, la CBT, uno de los grupos que construyeron la escena de traducción brasileña cuando un parche viajaba por mensaje de foro y todo el mundo aprendía hex editing en un archivo de texto que otro escribió a las dos de la mañana.',
        'Escribo mis propias herramientas para cada juego, porque las de uso general se detienen en la parte interesante: un desensamblador 6502 con mapa de bancos por mapper, desempaquetadores de texto a nivel de bit, un ensamblador 6502 en Python, y un emulador sin ventana dirigido por Lua que arranca la ROM y fotografía la pantalla sin abrir nada.',
        'Un clan de uno solo, lo que es un chiste hasta que notas que también es el cronograma, el control de calidad y el responsable de lanzamiento.'
      ],
      sign: 'traductor, hacker, revisor, clan'
    },
    footer: { tagline: 'Parches para juegos que nunca hablaron inglés' }
  },
  jogos: {
    'famicom-jump-2': {
      status: 'Publicado',
      linha: 'El crossover de siete series de la Shōnen Jump. Nunca salió de Japón, y nunca tuvo traducción — hasta ahora.',
      resumo: [
        'RPG táctico de Bandai con Goku, JoJo, el Ryotsu de KochiKame, Taruruto-kun, Tar-chan, Momotaro y Taison compartiendo el mismo campo de batalla. Tres de los siete luchan a la vez, la vida se cuenta en corazones, y el alcance de movimiento es un atributo que sube de nivel. El propio manual llama al sistema <b>S·A·S, Simulation Action System</b>.',
        'El guion entero en inglés: <b>1.903 mensajes</b>, sin resumir y sin cortar frases. Fue la primera traducción de Patch Clan, y sigue siendo el único parche en inglés de este juego que he podido encontrar.'
      ],
      numeros: ['mensajes traducidos','objetos, lugares y nombres','glifos latinos dibujados','bytes que arreglaron el juego']
    },
    'captain-tsubasa': {
      status: 'Beta',
      linha: 'El fútbol que es casi un RPG. En todo el cartucho existían <b>dieciséis letras latinas</b> — las demás hubo que dibujarlas de la nada.',
      resumo: [
        'El juego que inventó el fútbol por menú: no controlas el disparo, eliges la acción y ves cómo la animación decide. Cada jugador tiene <b>Guts</b>, y cada regate, pase y remate los gasta.',
        'En esta traducción el juego también <b>ganó memoria</b>: el original solo guardaba el progreso por contraseña, y ahora graba con pila — sin inventar ningún formato de guardado.'
      ],
      numeros: ['elementos de texto insertados','punteros corregidos','letras latinas existían','bytes distintos en 225 volcados']
    },
    'dragon-ball-3': {
      status: 'Release',
      linha: 'El RPG de tablero y cartas de Dragon Ball. Lo difícil aquí no fue el texto — fue el <b>kanji dibujado</b>, que no es texto y no se traduce solo.',
      resumo: [
        'Avanzas por un tablero, robas cartas y luchas con ellas. Cada carta lleva un <b>kanji</b> que dice lo que hace — y ese kanji es <b>ilustración</b>, dibujada en los gráficos, no un carácter de fuente. Traducir el juego exigía redibujar diez de ellos, uno a uno.',
        'El guion está entero en inglés: <b>1.305 mensajes</b>, dentro de una caja de tres líneas por veinticuatro columnas — sin código de "continúa en la siguiente caja" que rescate a nadie.'
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
