export const ES_DB3 = {
  grupos: [
    { titulo: "Lo que trae la versión 1.1", itens: [
      "El juego ahora <b>guarda</b>, en <b>dos espacios</b>, cada uno con una <b>copia de reserva</b>. El menú tiene <code>Guardar</code>, y el <code>CONTINUE</code> del título abre los dos espacios. La contraseña sigue valiendo, así que quien prefiera apuntarla puede seguir haciéndolo. El guardado se probó en emulador (Mesen y FCEUmm), todavía no en cartucho.",
      "Al encender, una pantalla nueva, con <b>ilustración propia</b>, pregunta la <b>velocidad del texto</b>: rápida o normal. En rápida, los diálogos van <b>el doble de deprisa</b> y las cartas del mapa llegan antes a la mano.",
      "<b>Manteniendo la cruceta</b>, Goku avanza casilla tras casilla hasta que el camino gira. En el mapa, el cursor de las cartas <b>da la vuelta</b> de la quinta a la primera.",
      "El combate es más ágil: la carta del enemigo se queda a la vista <b>medio segundo</b>, la pausa tras cada golpe es más corta y, elegidas las cartas del duelo, el juego <b>sigue solo</b>, con medio segundo para deshacer la última carta con <b>B</b>.",
      "Las <b>estrellas</b> de cada carta aparecen como <b>número</b>. La casilla del mapa que aún llevaba el kanji 魔 tiene <b>dibujo nuevo</b>, la cabeza de un demonio, y es la casilla del demonio en los tres idiomas.",
      "Desapareció el <b>marco a rayas</b> rosa y blanco del borde del mapa, y las <b>líneas que parpadeaban</b> bajo las cartas del enemigo y en la caja de texto, en los combates y en la aventura, ya no se mueven. También se corrigió un fallo del cartucho original que dejaba a Goku en el nivel 31 con vida máxima cero.",
      "En portugués, los nombres siguen el doblaje brasileño: <b>Mestre Karin</b>, <b>Vovó Uranai</b>, <b>Exército Red Ribbon</b>, <b>Piccolo Daimaoh</b>, <b>Tao Pai Pai</b>, Akkuman y Sarg. Metálico. En español, el Popo de los combates pasa a ser <b>Mr. Popo</b>. El manual se actualizó a la vez, en los tres idiomas."
    ]},
    { titulo: 'La traducción', itens: [
      '<b>1.305 de 1.305 mensajes</b> en inglés — el guion entero',
      '<b>66 personajes y enemigos, 14 técnicas, 16 nombres de batalla</b>, con el glosario casado con los nombres oficiales de Viz',
      'El límite no es la longitud del texto, es la <b>caja</b>: tres líneas por veinticuatro columnas, y el juego no tiene código de continuación. <b>164 mensajes</b> llegaban a 45 o más glifos en japonés y se comprimieron sin perder el sentido.',
      'Los <b>614 pares</b> de comillas japonesas 「 」 pasaron a comillas latinas <b>sin costar un byte</b>.'
    ]},
    { titulo: 'Lo que no era texto', itens: [
      '<b>Los diez kanji de las cartas</b> — 拳 蹴 連 必 術 逃 ? 体 特 武 — son tiles de 16×16 dibujados a mano, no caracteres. Pasaron a ser abreviaturas latinas: <code>PCH KCK CMB FIN MAG RUN ? BDY SPC WPN</code>. Por eso la <code>かんじのカード</code> pasó a ser <b>symbol card</b> y no "kanji card": llamarla kanji sería mentira en pantalla.',
      '<b>Las seis bolas de defensa</b> llevaban los numerales cursivos 一 a 六, también dibujados. Ahora llevan <b>1 a 6</b>.',
      '<b>El título 悟空伝</b> — doce tiles por cuatro, 96×32 píxeles de ilustración — fue redibujado como <code>LEGEND OF GOKU</code>, dentro del mismo espacio.'
    ]},
    { titulo: 'La contraseña, y la promesa de no romperla', itens: [
      '<b>La rejilla de contraseña pasó a letras latinas</b>, sin colisiones entre símbolos — y <b>las contraseñas antiguas siguen valiendo</b>. Quien tenga una anotada de 1989 puede escribirla aquí.',
      '<b>Pantalla de Patch Clan</b> antes del título, con los personajes del juego y la versión del parche — 5 segundos, se salta con A o START.'
    ]},
    { titulo: 'La ROM creció, y la original nunca se tocó', itens: [
      'El texto inglés no cabía donde estaba, así que la ROM se <b>amplió de 128 KB a 256 KB</b> de código. El constructor monta la ROM entera desde cero, <b>nunca escribe en la original</b> (es de solo lectura, y el MD5 se comprueba al abrir) y <b>aborta si cambia cualquier byte fuera de las regiones declaradas</b>.',
      'Un verificador comprueba <b>los 1.305 mensajes y los 112 nombres</b> en la ROM montada antes de que salga nada.'
    ]}
  ],
  fotos: [
    { t: 'Pantalla de título', c: '悟空伝 redibujado como <code>LEGEND OF GOKU</code>, dentro de los mismos 96×32 píxeles.' },
    { t: 'Pantalla de Patch Clan', c: 'Los personajes del juego alrededor y la versión del parche en el centro. Cinco segundos, se salta.' },
    { t: 'Menú', c: '<code>GAME START</code> y <code>CONTINUE</code>, donde antes había kana.' },
    { t: 'Diálogo', c: 'Tres líneas por veinticuatro columnas, y ningún código de continuación que rescate un desbordamiento.' },
    { t: 'Las cartas', c: 'Los kanji dibujados pasaron a <code>FIN</code>, <code>KCK</code>, <code>PCH</code> — ilustración redibujada, no texto traducido.' },
    { t: 'Contraseña', c: 'Una rejilla latina sin colisiones — y las contraseñas de 1989 siguen funcionando.' },
    { t: 'El tablero', c: 'Donde ocurre el juego: avanza, roba carta, lucha.' },
    { t: 'Velocidad del texto (v1.1)', c: 'Pantalla nueva al encender, con Goku en la Nube Kinton: rápida o normal.' },
    { t: 'Continuar desde el guardado (v1.1)', c: '<code>CONTINUE</code> muestra los dos espacios de guardado, y la rejilla de contraseña sigue ahí.' },
    { t: 'Menú con Guardar (v1.1)', c: 'El menú de SELECT tiene ahora la opción de guardar.' },
    { t: 'Guardado (v1.1)', c: 'Baba da la contraseña y el juego guarda en el espacio elegido, las dos cosas a la vez.' },
    { t: 'Estrellas en número (v1.1)', c: 'Cada carta muestra sus estrellas como número, arriba.' },
    { t: 'Tablero sin marco (v1.1)', c: 'El marco a rayas del borde desapareció, y las líneas que parpadeaban ya no se mueven.' },
    { t: 'Nombres del doblaje (v1.1)', c: 'En portugués, Korin pasa a ser Mestre Karin, como en el doblaje brasileño.' }
  ]
};
