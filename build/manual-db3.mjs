// Manual em inglês do Dragon Ball 3, escrito sobre o jogo TRADUZIDO.
// Fonte de mecânica: manual japonês da Bandai (1989), páginas 6-8, 23 e 25.
// Todo símbolo citado é a abreviação latina que o patch desenhou no lugar do kanji.
export const MANUAL_DB3 = {
  slug: 'dragon-ball-3',
  titulo: { pt: 'Manual do jogador', en: "Player's manual", es: 'Manual del jugador' },
  intro: {
    pt: 'Este manual descreve o jogo <b>como ele aparece no patch em inglês</b>. Os símbolos das cartas citados aqui são as abreviações latinas que substituíram os kanji desenhados — é o que você vai ver na tela.',
    en: 'This manual describes the game <b>as it appears in the English patch</b>. The card symbols named here are the Latin abbreviations that replaced the drawn kanji — they are what you will see on screen.',
    es: 'Este manual describe el juego <b>tal como aparece en el parche en inglés</b>. Los símbolos de las cartas citados aquí son las abreviaturas latinas que sustituyeron a los kanji dibujados — es lo que verás en pantalla.'
  },
  secoes: [
    { id: 'story', titulo: { pt: 'A história', en: 'The story', es: 'La historia' }, foto: 'db3/04-dialogo.png',
      paras: {
        pt: ['Goku e Bulma têm apenas a Esfera de Quatro Estrelas e o Radar do Dragão. O jogo segue a saga desde a busca pelas esferas até o Torneio das Artes Marciais e o Rei Demônio Piccolo.',
             'Você avança por um <b>tabuleiro</b>, tira cartas e luta com elas. Não é um RPG de menu: a carta decide quanto você anda, quem ataca primeiro e qual golpe sai.'],
        en: ['Goku and Bulma have only the 4-Star Ball and the Dragon Radar. The game follows the saga from the search for the balls through the Martial Arts Tournament and King Piccolo.',
             'You move across a <b>board</b>, draw cards and fight with them. This is not a menu RPG: the card decides how far you move, who attacks first, and which move comes out.'],
        es: ['Goku y Bulma solo tienen la Bola de Cuatro Estrellas y el Radar del Dragón. El juego sigue la saga desde la búsqueda de las bolas hasta el Torneo de Artes Marciales y el Rey Demonio Piccolo.',
             'Avanzas por un <b>tablero</b>, robas cartas y luchas con ellas. No es un RPG de menú: la carta decide cuánto te mueves, quién ataca primero y qué técnica sale.']
      }},
    { id: 'card', titulo: { pt: 'Como ler uma carta', en: 'How to read a card', es: 'Cómo leer una carta' }, foto: 'db3/05-cartas.png',
      paras: {
        pt: ['<b>Esta é a peça central do jogo.</b> Fora do modo aventura, tudo é feito com cartas — e cada carta tem <b>três campos</b>, que servem para coisas diferentes.'],
        en: ['<b>This is the heart of the game.</b> Outside adventure mode everything is done with cards — and every card has <b>three fields</b>, each used for something different.'],
        es: ['<b>Esta es la pieza central del juego.</b> Fuera del modo aventura todo se hace con cartas — y cada carta tiene <b>tres campos</b>, cada uno para algo distinto.']
      },
      lista: [
        { k: { pt: 'Estrelas (1–7)', en: 'Stars (1–7)', es: 'Estrellas (1–7)' },
          v: { pt: 'No tabuleiro, Goku anda <b>tantas casas quantas forem as estrelas</b>. Na batalha, <b>quem tem o número maior ataca</b>, e esse número também é a força do ataque. <b>Exceção que decide partidas: o 1 do Goku vence o 7 do inimigo.</b>',
               en: 'On the board, Goku moves <b>as many squares as there are stars</b>. In battle, <b>the higher number attacks</b>, and that number is also the attack power. <b>The exception that decides fights: Goku’s 1 beats the enemy’s 7.</b>',
               es: 'En el tablero, Goku avanza <b>tantas casillas como estrellas</b>. En combate, <b>ataca quien tenga el número mayor</b>, y ese número es también la fuerza del ataque. <b>La excepción que decide partidas: el 1 de Goku vence al 7 del enemigo.</b>' } },
        { k: { pt: 'Símbolo', en: 'Symbol', es: 'Símbolo' },
          v: { pt: 'Diz <b>qual golpe sai</b> quando você ataca. No original era um kanji desenhado; aqui é uma abreviação latina — a tabela está na próxima seção.',
               en: 'Says <b>which move comes out</b> when you attack. In the original this was a drawn kanji; here it is a Latin abbreviation — the table is in the next section.',
               es: 'Dice <b>qué técnica sale</b> cuando atacas. En el original era un kanji dibujado; aquí es una abreviatura latina — la tabla está en la sección siguiente.' } },
        { k: { pt: 'Número de defesa', en: 'Defence number', es: 'Número de defensa' },
          v: { pt: 'De 1 a 7, é a <b>força de quem defende</b>. No original vinha em algarismo kanji (一 a 七) e é <b>coisa diferente do símbolo</b> — confundir os dois é o erro clássico neste jogo.',
               en: 'From 1 to 7, this is <b>the defending side’s strength</b>. In the original it was written in kanji numerals (一 to 七) and it is <b>a different thing from the symbol</b> — mixing the two up is the classic mistake in this game.',
               es: 'De 1 a 7, es <b>la fuerza de quien defiende</b>. En el original venía en numeral kanji (一 a 七) y es <b>algo distinto del símbolo</b> — confundir ambos es el error clásico de este juego.' } }
      ]},
    { id: 'symbols', titulo: { pt: 'Os dez símbolos', en: 'The ten symbols', es: 'Los diez símbolos' },
      paras: {
        pt: ['Cada um destes era um <b>kanji desenhado à mão</b> num tile de 16×16. Não são texto e não existe tabela de caracteres para trocá-los: foram <b>redesenhados um a um</b> como abreviações latinas.'],
        en: ['Each of these was a <b>hand-drawn kanji</b> in a 16×16 tile. They are not text and there is no character table to swap them: they were <b>redrawn one by one</b> as Latin abbreviations.'],
        es: ['Cada uno de estos era un <b>kanji dibujado a mano</b> en un tile de 16×16. No son texto y no hay tabla de caracteres para cambiarlos: fueron <b>redibujados uno a uno</b> como abreviaturas latinas.']
      },
      lista: [
        { k: 'PCH', v: { pt: '拳 — soco', en: '拳 — punch', es: '拳 — puñetazo' } },
        { k: 'KCK', v: { pt: '蹴 — chute', en: '蹴 — kick', es: '蹴 — patada' } },
        { k: 'CMB', v: { pt: '連 — combo de socos e chutes', en: '連 — a combo of punches and kicks', es: '連 — combo de puñetazos y patadas' } },
        { k: 'FIN', v: { pt: '必 — golpe especial, gasta pontos', en: '必 — special move, spends points', es: '必 — técnica especial, gasta puntos' } },
        { k: 'WPN', v: { pt: '武 — arma: o Bastão Mágico', en: '武 — weapon: the Power Pole', es: '武 — arma: el Bastón Sagrado' } },
        { k: 'BDY', v: { pt: '体 — investida com o corpo. <b>É ataque</b>, não defesa: foi o manual que corrigiu esta leitura no meio do projeto', en: '体 — a body slam. <b>It is an attack</b>, not a defence: the manual corrected this reading mid-project', es: '体 — embestida con el cuerpo. <b>Es ataque</b>, no defensa: el manual corrigió esta lectura a mitad del proyecto' } },
        { k: 'RUN', v: { pt: '逃 — fugir da luta', en: '逃 — escape the fight', es: '逃 — huir del combate' } },
        { k: 'SPC', v: { pt: '特 — técnica especial <b>do inimigo</b>', en: '特 — the <b>enemy’s</b> special technique', es: '特 — técnica especial <b>del enemigo</b>' } },
        { k: 'MAG', v: { pt: '術 — magia <b>do inimigo</b>', en: '術 — the <b>enemy’s</b> magic', es: '術 — magia <b>del enemigo</b>' } }
      ]},
    { id: 'hud', titulo: { pt: 'A tela', en: 'The screen', es: 'La pantalla' }, foto: 'db3/07-mapa.png',
      paras: {
        pt: ['A barra de baixo mostra tudo o que importa, e não há tela de status separada no meio da luta.'],
        en: ['The bottom bar shows everything that matters, and there is no separate status screen in the middle of a fight.'],
        es: ['La barra inferior muestra todo lo que importa, y no hay pantalla de estado aparte en mitad del combate.']
      },
      lista: [
        { k: { pt: 'Vida', en: 'Life', es: 'Vida' }, v: { pt: 'Atual / máxima. A máxima sobe com o nível; a atual se recupera com comida e itens.', en: 'Current / maximum. The maximum grows with level; the current is restored by food and items.', es: 'Actual / máxima. La máxima sube con el nivel; la actual se recupera con comida y objetos.' } },
        { k: { pt: 'Pontos de especial', en: 'Special points', es: 'Puntos de especial' }, v: { pt: 'O que os golpes <code>FIN</code> gastam. Recupera com o livro de segredos.', en: 'What <code>FIN</code> moves spend. Restored by the book of secrets.', es: 'Lo que gastan las técnicas <code>FIN</code>. Se recupera con el libro de secretos.' } },
        { k: { pt: 'Treino', en: 'Training', es: 'Entrenamiento' }, v: { pt: 'Pontos ganhos em luta e em treino. Acumular sobe o <b>nível</b>.', en: 'Points earned in fights and training. Accumulating them raises your <b>level</b>.', es: 'Puntos ganados en combate y entrenamiento. Acumularlos sube el <b>nivel</b>.' } },
        { k: { pt: 'Nível', en: 'Level', es: 'Nivel' }, v: { pt: 'Aumenta <b>Speed, Power, Technique e Toughness</b> — e com eles a força do ataque e da defesa.', en: 'Raises <b>Speed, Power, Technique and Toughness</b> — and with them attack and defence strength.', es: 'Aumenta <b>Speed, Power, Technique y Toughness</b> — y con ellos la fuerza de ataque y defensa.' } }
      ]},
    { id: 'training', titulo: { pt: 'Os três treinos', en: 'The three trainings', es: 'Los tres entrenamientos' },
      paras: {
        pt: ['Treinar é um jogo de cartas contra um mestre, e <b>cada mestre compara um campo diferente</b> da carta. Saber qual é qual é a diferença entre treinar e perder tempo.'],
        en: ['Training is a card game against a master, and <b>each master compares a different field</b> of the card. Knowing which is which is the difference between training and wasting time.'],
        es: ['Entrenar es un juego de cartas contra un maestro, y <b>cada maestro compara un campo distinto</b> de la carta. Saber cuál es cuál es la diferencia entre entrenar y perder el tiempo.']
      },
      lista: [
        { k: 'Roshi', v: { pt: 'Compara as <b>estrelas</b>', en: 'Compares the <b>stars</b>', es: 'Compara las <b>estrellas</b>' } },
        { k: 'Korin', v: { pt: 'Compara o <b>número de defesa</b>', en: 'Compares the <b>defence number</b>', es: 'Compara el <b>número de defensa</b>' } },
        { k: 'Mr.Popo', v: { pt: 'Compara <b>os três campos</b> — estrelas, número de defesa e símbolo. É o treino mais duro e o que mais rende.', en: 'Compares <b>all three fields</b> — stars, defence number and symbol. The hardest training, and the one that pays most.', es: 'Compara <b>los tres campos</b> — estrellas, número de defensa y símbolo. El entrenamiento más duro y el que más rinde.' } }
      ]},
    { id: 'adventure', titulo: { pt: 'Modo aventura', en: 'Adventure mode', es: 'Modo aventura' }, foto: 'db3/03-menu.png',
      paras: {
        pt: ['É o único modo sem cartas. Dentro de vilas e cenários você usa comandos para investigar e conversar. As mensagens cabem em <b>três linhas por vinte e quatro colunas</b> — o jogo não tem código de "continua na próxima caixa", e é por isso que a tradução foi comprimida onde precisou.'],
        en: ['This is the only mode without cards. Inside towns and locations you use commands to investigate and talk. Messages fit in <b>three lines by twenty-four columns</b> — the game has no "continues in the next box" code, which is why the translation was compressed where it had to be.'],
        es: ['Es el único modo sin cartas. Dentro de pueblos y escenarios usas comandos para investigar y hablar. Los mensajes caben en <b>tres líneas por veinticuatro columnas</b> — el juego no tiene código de "continúa en la siguiente caja", y por eso la traducción se comprimió donde hizo falta.']
      }},
    { id: 'help', titulo: { pt: 'Cartas de ajuda e itens', en: 'Help cards and items', es: 'Cartas de ayuda y objetos' },
      paras: {
        pt: ['Além das cartas de ataque existem <b>dezesseis cartas de ajuda</b>, cada uma com um personagem que faz uma coisa: <b>Bulma, Korin, Kami, Krillin, Obo, Puar, Gatch, Oolong, Chaozu, Arale, Yajiro, Roshi, Popo, Yamcha, Tien</b> e <b>Baba</b>.',
             'Os itens curam, protegem ou transportam — comida, o casco de tartaruga, a roupa pesada de treino, o feijão mágico, a Nuvem Voadora e o livro de segredos que devolve os pontos de especial.'],
        en: ['Besides the attack cards there are <b>sixteen help cards</b>, each a character who does one thing: <b>Bulma, Korin, Kami, Krillin, Obo, Puar, Gatch, Oolong, Chaozu, Arale, Yajiro, Roshi, Popo, Yamcha, Tien</b> and <b>Baba</b>.',
             'Items heal, protect or carry you — food, the turtle shell, the heavy training gi, the magic bean, the Flying Nimbus, and the book of secrets that gives special points back.'],
        es: ['Además de las cartas de ataque hay <b>dieciséis cartas de ayuda</b>, cada una con un personaje que hace una cosa: <b>Bulma, Korin, Kami, Krillin, Obo, Puar, Gatch, Oolong, Chaozu, Arale, Yajiro, Roshi, Popo, Yamcha, Tien</b> y <b>Baba</b>.',
             'Los objetos curan, protegen o transportan — comida, el caparazón de tortuga, el gi de entrenamiento pesado, la judía mágica, la Nube Voladora y el libro de secretos que devuelve los puntos de especial.']
      }},
    { id: 'password', titulo: { pt: 'A senha', en: 'The password', es: 'La contraseña' }, foto: 'db3/06-senha.png',
      paras: {
        pt: ['O jogo não tem bateria: o progresso volta por <b>senha</b>, escolhida em <code>CONTINUE</code>. A grade agora é de letras latinas, maiúsculas e minúsculas, sem símbolos que se confundam.',
             '<b>As senhas antigas continuam valendo.</b> Se você tem uma anotada desde 1989, pode digitá-la aqui — a codificação não foi mexida, só o desenho das teclas.'],
        en: ['The game has no battery: progress comes back by <b>password</b>, chosen at <code>CONTINUE</code>. The grid is now Latin letters, upper and lower case, with no symbols that can be confused.',
             '<b>Old passwords still work.</b> If you have one written down since 1989, you can type it in here — the encoding was not touched, only the drawing of the keys.'],
        es: ['El juego no tiene pila: el progreso vuelve por <b>contraseña</b>, elegida en <code>CONTINUE</code>. La rejilla ahora es de letras latinas, mayúsculas y minúsculas, sin símbolos que se confundan.',
             '<b>Las contraseñas antiguas siguen valiendo.</b> Si tienes una anotada desde 1989, puedes escribirla aquí — la codificación no se tocó, solo el dibujo de las teclas.']
      }},
    { id: 'patch', titulo: { pt: 'O que é diferente neste patch', en: 'What is different in this patch', es: 'Qué cambia en este parche' }, foto: 'db3/01-titulo.png',
      paras: {
        pt: ['<b>O título</b> 悟空伝 foi redesenhado como <code>LEGEND OF GOKU</code>, dentro dos mesmos 96×32 pixels de arte.',
             '<b>Os dez símbolos de carta e os seis números de defesa</b> eram desenhos, não texto, e foram redesenhados. É por isso que a "carta de kanji" virou <b>symbol card</b> na tradução: depois de trocar o desenho, chamar de kanji seria mentira na tela.',
             '<b>Uma tela de créditos do patch</b> abre antes do título e sai com A ou START.',
             '<b>Cinco mensagens de batalha continuam em japonês de propósito.</b> Elas carregam um número no meio, disfarçado de espaço, e ainda não está medido se o jogo o posiciona por deslocamento fixo. Encurtar o texto em inglês antes de saber disso poria o número no meio de uma palavra — trocaria um defeito legível por um ilegível.']
      , en: ['<b>The title</b> 悟空伝 was redrawn as <code>LEGEND OF GOKU</code>, inside the same 96×32 pixels of artwork.',
             '<b>The ten card symbols and the six defence numbers</b> were drawings, not text, and were redrawn. That is why the "kanji card" became a <b>symbol card</b> in the translation: once the drawing changed, calling it kanji would be a lie on screen.',
             '<b>A patch credits screen</b> opens before the title and clears with A or START.',
             '<b>Five battle messages are still in Japanese on purpose.</b> They carry a number in the middle, disguised as a space, and it is not yet measured whether the game places it by fixed offset. Shortening the English before knowing that would put the number in the middle of a word — trading a legible defect for an illegible one.']
      , es: ['<b>El título</b> 悟空伝 fue redibujado como <code>LEGEND OF GOKU</code>, dentro de los mismos 96×32 píxeles de ilustración.',
             '<b>Los diez símbolos de carta y los seis números de defensa</b> eran dibujos, no texto, y fueron redibujados. Por eso la "carta de kanji" pasó a ser <b>symbol card</b> en la traducción: una vez cambiado el dibujo, llamarlo kanji sería mentira en pantalla.',
             '<b>Una pantalla de créditos del parche</b> abre antes del título y se salta con A o START.',
             '<b>Cinco mensajes de combate siguen en japonés a propósito.</b> Llevan un número en medio, disfrazado de espacio, y todavía no está medido si el juego lo coloca por desplazamiento fijo. Acortar el inglés sin saberlo pondría el número en mitad de una palabra — cambiaría un defecto legible por uno ilegible.'] }}
  ]
};
