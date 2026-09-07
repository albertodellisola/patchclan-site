export const ES_FJ2 = {
  grupos: [
    { titulo: 'La traducción', itens: [
      '<b>1.903 mensajes</b> — el guion entero, sin resumir, sin una frase cortada',
      '<b>266 nombres</b> de objetos, lugares, monstruos y del grupo, acortados solo donde el campo de la pantalla no da',
      '<b>77 textos de menú</b> — estado, tienda, almacén, entrenamiento y título',
      '<b>13 mensajes de combate</b> y las <b>6 páginas</b> del final',
      '<b>Una fuente latina de 75 glifos</b> dibujada para el juego — mayúsculas, minúsculas, cifras y puntuación — en lugar de los 141 tiles de kana del original'
    ]},
    { titulo: 'Un error de 1991, corregido', itens: [
      'En la apertura, el espíritu dice que se han elegido siete campeones y nombra a los seis que faltan por encontrar. <b>Desde 1991 nombra siempre a los mismos seis</b> — si empiezas como Taison te manda a buscar a Taison, y a Goku no lo nombra nunca.',
      'No era una limitación del cartucho: <b>el código correcto ya estaba en la ROM</b>. La escena tiene un selector de siete casos, uno por héroe inicial, y las siete variantes de texto están grabadas. El selector no disparaba nunca — el guion ponía el número del héroe en el acumulador y la rutina llamada lo leía del registro X, que traía basura de la llamada anterior.',
      'La corrección son <b>dos bytes</b>, apuntando la carga al registro correcto. No se reescribió nada. <b>Seis de las siete variantes no habían llegado a una pantalla en treinta y cinco años.</b>'
    ]},
    { titulo: 'Contenido nuevo', itens: [
      '<b>Un prólogo de cinco páginas</b>, escrito de cero, que recapitula <i>Famicom Jump: Eiyuu Retsuden</i> (1989) — para quien llega al segundo juego sin el primero',
      '<b>Una pantalla de créditos</b> antes del título: 5 segundos, se salta con A o START. Cabe entera — código, paleta y texto — en 355 bytes de espacio muerto del banco del título',
      '<b>Un sello <code>DEFINITIVE EDITION</code></b> en el pie del título, sin quitar nada y <b>sin gastar un byte de más</b>: reescribir la rutina del subtítulo para que fuera dirigida por tabla liberó seis tiles, y el sello solo necesitaba cuatro letras que no estuvieran ya',
      '<b>Botón B contextual.</b> En el original, hablar con alguien cuesta abrir el menú; la B no hacía nada en el campo. Ahora la B habla con quien tengas delante y, si no hay nadie, examina el suelo — la misma división que hace el manual entre <code>はなす</code> y <code>しらべる</code>. El comando sigue en el menú para quien lo prefiera.'
    ]},
    { titulo: 'La ingeniería', itens: [
      'Medido en traducción real, el inglés ocupa <b>1,51×</b> los caracteres del japonés. No cabía: faltaban unos <b>20 KB</b> — en un cartucho en el techo del mapper, con <b>cero bytes libres</b>.',
      'En vez de cortar texto, <b>cambié la compresión</b>. Un <b>Huffman de orden 1</b> — el árbol elegido por el carácter anterior, en 26 grupos de contexto — lleva el texto de 6,25 a <b>3,90 bits por carácter</b>. El decodificador son <b>89 bytes</b> de 6502 escritos a mano.',
      'Las tablas de los 26 grupos cupieron en los <b>1.060 bytes</b> útiles del banco del diccionario antiguo más 65 bytes de relleno al final. El guion inglés cerró en <b>65,9 KB dentro de 68,1 KB</b> — un margen de 2,2 KB en un cartucho cuyo mayor hueco libre tiene 137 bytes.',
      '<b>Cada compilación se comprueba a sí misma.</b> Una guarda aborta si cambia cualquier byte fuera de las regiones declaradas, y otra si dos partes del hack reclaman el mismo byte. Los 1.903 mensajes se decodifican de vuelta <b>con el decodificador 6502 real corriendo sobre la ROM final</b> y se comparan con el original. Una prueba de estrés de <b>30.000 fotogramas</b> con entrada aleatoria corre junto al escenario exacto que colgaba las versiones antiguas.'
    ]},
    { titulo: 'Cuatro fallos que introduje yo mismo', itens: [
      'Quedan registrados por honestidad. <b>La placa del título</b> perdió el borde blanco y los rayos rosas porque mi primer logo borró 47 tiles para caber — la ilustración se devolvió entera, con <b>cero píxeles de diferencia</b>, comprobado contando.',
      'El octavo fotograma de la animación de la placa es la propia cola del stream del fondo — Bandai no guardó dos copias. Con el logo nuevo ese puntero caía en mitad del logo y, tras unos 46 segundos parado en el título, la placa se llenaba de basura.',
      '<b>Una comilla de más en cada salto de página</b> — 281 líneas extra a lo largo del guion — era la causa real de que la caja de diálogo se desbordara y dejara un <b>globo fantasma</b> atrapado en el escenario. Las correcciones cerraron la clase entera, y ahora la compilación <b>simula el propio motor de texto del juego</b> sobre el guion final y aborta si alguna página pasa de 21 columnas por 3 líneas.'
    ]}
  ],
  fotos: [
    { t: 'Pantalla de título', c: 'El logo redibujado píxel a píxel, y el sello <code>DEFINITIVE EDITION</code>, que no costó bytes de más.' },
    { t: 'Créditos del parche', c: 'Una pantalla nueva antes del título, en 355 bytes de espacio muerto.' },
    { t: 'Prólogo nuevo', c: 'Cinco páginas escritas de cero que recapitulan el primer juego de 1989.' },
    { t: 'El espíritu del Jump World', c: 'La apertura, ahora en español.' },
    { t: 'La lista de los siete', c: 'La pantalla del error: seis nombres que, hasta esta corrección, eran siempre los mismos seis.' },
    { t: '"Y tú también, Goku."', c: 'La frase que nadie había visto en treinta y cinco años.' },
    { t: 'Menús', c: 'Estado, tienda, almacén y entrenamiento — 77 textos.' },
    { t: 'Objetos', c: 'Nombres y descripciones, acortados solo donde el campo lo exige.' }
  ],
  manual: {
    titulo: 'Manual del jugador',
    intro: 'Este manual describe el juego <b>tal como aparece en el parche en inglés</b>. Todo comando citado aquí es la palabra exacta que está en pantalla — no es una traducción del manual japonés, es el juego que vas a jugar.',
    secoes: [
      { titulo: 'La historia', paras: [
        'El mundo de los mangas de la Jump ha sido invadido. Un espíritu te llama y dice que se han elegido <b>siete campeones</b> para enfrentar lo que viene — y nombra a los seis que faltan por encontrar, cerrando con “y tú también”.',
        'Empiezas con uno de los siete y sales a buscar a los demás. Antes de eso, el parche añade un <b>prólogo de cinco páginas</b> que cuenta el primer juego de 1989 — quien nunca jugó <i>Eiyuu Retsuden</i> no se pierde nada.' ]},
      { titulo: 'Los siete héroes', paras: [
        'Siete series de la Weekly Shōnen Jump comparten el mismo campo de batalla. <b>Tres luchan a la vez</b>; del cuarto en adelante, los que quedan fuera entrenan y siguen ganando experiencia.' ]},
      { titulo: 'Empezar a jugar', paras: [
        'La pantalla de créditos del parche abre antes del título y se va sola en cinco segundos — <b>A</b> o <b>START</b> la salta al momento.',
        'En el título, <b><code>New Game</code></b> empieza de cero y <b><code>Continue</code></b> carga uno de los tres diarios guardados. Al empezar, el juego pide <b><code>Begin with</code></b>: es la elección de cuál de los siete héroes controlas primero. <b>Esa elección cambia el discurso de apertura</b> — y es lo que estaba roto en el cartucho original desde 1991.' ]},
      { titulo: 'En el mapa', paras: [
        'Caminas con la cruceta. Puertas, escaleras y recoger objetos son <b>automáticos</b> — no hay comandos para eso.',
        '<b>En este parche, la B es un botón de acción comodín:</b> habla con quien tengas delante y, si no hay nadie, examina el suelo bajo tus pies. Es la misma división que hacen los dos comandos del menú, en una sola pulsación. Los comandos siguen en el menú para quien los prefiera.' ]},
      { titulo: 'El combate — el sistema S·A·S', paras: [
        'No es un RPG de menú. El manual original llama al sistema <b>S·A·S, Simulation Action System</b>, y es táctico: la lucha ocurre <b>sobre el propio escenario</b>, a pantalla completa, sin ventana de comandos permanente y sin ningún número de vida.',
        '<b>El turno es por bando:</b> actúa todo tu grupo, después los enemigos. Cada héroe se mueve libremente dentro de su <b>alcance</b> — y el alcance es un atributo que <b>sube de nivel</b>, junto al ataque y la defensa.',
        '<b>No existe un paso de elegir objetivo.</b> La puntería es la posición: atacas a quien esté al alcance de donde te paraste. Pulsar <b>A</b> a secas ya ataca. La <b>B</b> cicla el globo entre atacar, defender, mover y <b><code>Special</code></b>, y la <b>A</b> confirma.' ]},
      { titulo: 'Hacerse más fuerte', paras: [
        'Subir de nivel aumenta los corazones, el ataque, la defensa y el <b>alcance de movimiento</b>. No hay barra de experiencia en pantalla — el juego avisa cuando subes.',
        'Los héroes <b>fuera del grupo activo</b> no están parados: entrenan y ganan experiencia solos. Cambiar de favorito no cuesta nada, y por eso vale la pena reclutar a todos.',
        'El dinero se llama <b><code>Zeni</code></b>. En las tiendas usas <b><code>Buy</code></b> y <b><code>Sell</code></b>, y el juego pregunta la cantidad en <b><code>Qty</code></b>.' ]},
      { titulo: 'Guardar, y la velocidad del texto', paras: [
        'Entra en <b><code>Plan</code></b> y elige <b><code>Save</code></b>. Puedes guardar <b>en cualquier parte del mapa</b> — las excepciones son mazmorras e interiores de ciudad. Hay <b>tres diarios</b>, y <b><code>Diary</code></b> los copia y los borra.',
        '<b><code>Speed</code></b> ajusta la velocidad del texto. <code>Fast</code> y <code>Slow</code> son los extremos de una escala de <b>ocho niveles</b>, no las dos únicas opciones — conviene ajustarlo antes de enfrentar el guion entero.',
        '<b><code>Order</code></b> cambia el orden del grupo, y así eliges cuáles tres de los siete entran en la próxima pelea.' ]},
      { titulo: 'Qué cambia en este parche', paras: [
        '<b>La lista de los siete campeones es correcta.</b> En el cartucho original el espíritu nombra siempre a los mismos seis héroes, sea cual sea el tuyo. Empezar como Taison te mandaba a buscar a Taison; a Goku no lo nombraba nunca. El código correcto estaba en la ROM y no se ejecutaba. Aquí se ejecuta.',
        '<b>Un prólogo de cinco páginas</b> se añadió antes de la primera línea de diálogo, recapitulando el juego de 1989.',
        '<b>El botón B pasó a ser una acción comodín</b> en el mapa, como se describe arriba. No se quitó nada: los comandos siguen en el menú.',
        '<b>Nada más fue alterado.</b> Dificultad, tasa de encuentros, tablas de objetos, economía y balance son los de 1991. Esto es una traducción, no un remaster.' ]}
    ]
  }
};
