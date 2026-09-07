export const ES_DB3 = {
  grupos: [
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
      '<b>Pantalla de créditos del parche</b> antes del título — página blanca, 5 segundos, se salta con A o START.'
    ]},
    { titulo: 'La ROM creció, y la original nunca se tocó', itens: [
      'El texto inglés no cabía donde estaba, así que la ROM se <b>amplió de 128 KB a 256 KB</b> de código. El constructor monta la ROM entera desde cero, <b>nunca escribe en la original</b> (es de solo lectura, y el MD5 se comprueba al abrir) y <b>aborta si cambia cualquier byte fuera de las regiones declaradas</b>.',
      'Un verificador comprueba <b>los 1.305 mensajes y los 112 nombres</b> en la ROM montada antes de que salga nada.'
    ]},
    { titulo: 'Lo que sigue abierto', itens: [
      'Cinco mensajes de combate siguen en japonés <b>a propósito</b>. Llevan <b>campos numéricos disfrazados de espacio</b> (<code>ゴクウの レベルが ␣␣␣␣ になった!</code>), y todavía no está medido si el juego encuentra la posición del número por desplazamiento fijo o buscando el blanco. Si es fijo, acortar el prefijo en inglés pone el número en mitad de una palabra — cambiaría un defecto legible por uno ilegible.',
      'Cinco frases de entrenamiento comparten sufijos — tres punteros caen en la misma dirección — y reempaquetarlas exige reescribir la tabla de punteros con ellas. Por eso la etiqueta es <b>beta</b>.'
    ]}
  ],
  fotos: [
    { t: 'Pantalla de título', c: '悟空伝 redibujado como <code>LEGEND OF GOKU</code>, dentro de los mismos 96×32 píxeles.' },
    { t: 'Créditos del parche', c: 'Una página blanca antes del título, cinco segundos, se salta.' },
    { t: 'Menú', c: '<code>GAME START</code> y <code>CONTINUE</code>, donde antes había kana.' },
    { t: 'Diálogo', c: 'Tres líneas por veinticuatro columnas, y ningún código de continuación que rescate un desbordamiento.' },
    { t: 'Las cartas', c: 'Los kanji dibujados pasaron a <code>FIN</code>, <code>KCK</code>, <code>PCH</code> — ilustración redibujada, no texto traducido.' },
    { t: 'Contraseña', c: 'Una rejilla latina sin colisiones — y las contraseñas de 1989 siguen funcionando.' },
    { t: 'El tablero', c: 'Donde ocurre el juego: avanza, roba carta, lucha.' }
  ]
};
