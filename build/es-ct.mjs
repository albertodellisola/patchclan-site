export const ES_CT = {
  grupos: [
    { titulo: 'La traducción', itens: [
      '<b>1.001 elementos de texto</b> en inglés, con <b>1.177 punteros</b> recalculados',
      '<b>Una fuente inglesa nueva de 74 tiles.</b> En todo el cartucho existían exactamente <b>dieciséis letras latinas</b> — <code>ACDEFGHIKMRSUVWY</code>. Las otras diez, más las minúsculas y la puntuación, no existían en ninguna parte y hubo que dibujarlas de cero, casando con tipografías hechas para kana.',
      '<b>Tres fuentes en tres bancos gráficos distintos</b>, que no concuerdan entre sí — la del campo, la del aula y la de la contraseña.',
      '<b>Fichas de jugador en inglés</b> — Level, Max Guts, Run, Pass, Shoot, Steal, Cut, Mark'
    ]},
    { titulo: 'Dos filas donde había una', itens: [
      'El motor de texto del campo escribía <b>una fila</b> por línea de guion: 14 y 18 columnas. Un código de control nuevo hace que cada línea ocupe <b>dos filas</b> — <b>28 y 36 columnas</b> — sin tocar el guion, el marco ni el conteo de líneas. Es lo que permite que la narración inglesa quepa sin volverse telegrama.',
      '<b>Contraseña latinizada y aceptada.</b> La rejilla pasó a letras latinas mayúsculas, minúsculas y cifras, y la contraseña generada pasa por la rutina de validación original del juego.'
    ]},
    { titulo: 'Un guardado que el juego no tenía', itens: [
      'El original de 1988 guarda el progreso <b>solo por contraseña</b>. Ahora el juego <b>graba con pila</b>: guarda al abrir el <code>SCORE MEMO</code> del entrenador y carga en el <code>CONTINUE</code> de la pantalla de título.',
      '<b>Sin inventar serialización.</b> El estado guardado es exactamente lo que la contraseña ya llevaba — los mismos 24 bytes — probado contra dos rutinas independientes del propio juego. La integridad usa <b>la misma rutina que valida una contraseña escrita</b>.',
      'Son <b>97 bytes</b> de código nuevo en seis sitios. Probado apagando y encendiendo de verdad, con dos procesos de emulador y un <code>.sav</code> real de por medio: <b>0 de 4.096 bytes</b> de nametable distintos tras el ciclo. Negativos cubiertos: sin guardado, guardado corrupto en 1 bit, pila gastada, y empezar partida nueva sin borrar lo guardado.'
    ]},
    { titulo: 'Los logos', itens: [
      '<b>Logo del título redibujado</b> — <code>CAPTAIN TSUBASA</code> en dos líneas, en el mismo estilo y la misma paleta, con el balón redibujado y el avión movido a la esquina. Son <b>122 tiles</b> de los 127 disponibles, y la pantalla reconstruida desde la ROM coincide con el mockup con <b>0 píxeles</b> de diferencia.',
      '<b>El logo pequeño del aula</b>, hecho de 13 sprites, redibujado como <code>TSUBASA</code> en miniatura — solo cambian los bitmaps, las posiciones son las del juego.'
    ]},
    { titulo: 'Prueba, y lo que sigue abierto', itens: [
      '<b>La reubicación se probó por igualdad.</b> Una compilación que solo mueve el texto japonés, sin traducirlo, se comparó con la original: <b>225 volcados, 0 bytes distintos</b> en nametable, OAM y paleta en todo el recorrido. Dos defectos reales aparecieron solo en esa prueba.',
      'Sigue abierto: el <b>motor de créditos</b> no está reubicado, la pantalla de <b>error de contraseña</b> tiene 19 caracteres fijos en el código, y la lista de nombres del <b>final</b> aún debe cambiar de columna. Por eso la etiqueta es <b>beta</b>, y no lanzamiento.'
    ]}
  ],
  fotos: [
    { t: 'Pantalla de título', c: 'El logo redibujado en 122 tiles, con el balón nuevo y el avión en la esquina.' },
    { t: 'Narración', c: 'Cuatro líneas donde cabían dos: el código de control nuevo dobla el ancho útil.' },
    { t: 'Aula', c: 'El menú del entrenador — <code>SCOUT</code>, <code>MEMO</code>, <code>PLAY</code> — y la segunda fuente del juego.' },
    { t: 'Ficha del jugador', c: 'Level, Max Guts y los seis atributos, con la lista de la plantilla al lado.' },
    { t: 'En juego', c: 'El menú de acción durante el partido, con el Guts bajando en cada jugada.' },
    { t: 'Contraseña', c: 'La rejilla latinizada — y la contraseña generada pasa la validación original del juego.' },
    { t: 'Score Memo', c: 'El instante en que el juego guarda: Sanae dicta la contraseña, y el guardado va con ella.' },
    { t: 'Cargado de la pila', c: 'Tras apagar y encender de verdad — <code>16th All-Japan Jr. Cup</code>, exactamente donde se quedó.' }
  ]
};
