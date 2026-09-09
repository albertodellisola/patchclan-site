// Manual em inglês do Captain Tsubasa, escrito sobre o jogo TRADUZIDO.
// Mecânica confirmada no manual japonês da Tecmo (citado no glossário do projeto por página)
// e nas telas do patch. Todo comando citado é a string exata que aparece no jogo.
export const MANUAL_CT = {
  slug: 'captain-tsubasa',
  titulo: { pt: 'Manual do jogador', en: "Player's manual", es: 'Manual del jugador' },
  intro: {
    pt: 'Este manual descreve o jogo <b>como ele aparece no patch em inglês</b>. Todo comando e todo atributo citado aqui é a palavra exata que está na tela.',
    en: 'This manual describes the game <b>as it appears in the English patch</b>. Every command and every stat named here is the exact word on screen.',
    es: 'Este manual describe el juego <b>tal como aparece en el parche en inglés</b>. Todo comando y todo atributo citado aquí es la palabra exacta que está en pantalla.'
  },
  secoes: [
    { id: 'story', titulo: { pt: 'A história', en: 'The story', es: 'La historia' }, foto: 'ct/01-titulo.png',
      paras: {
        pt: ['Você comanda o <b>Nankatsu</b> de Tsubasa Ozora pelo campeonato nacional de escolas, e depois pela seleção japonesa Jr. Youth. Cada adversário é um time real do mangá, com os craques e os golpes deles.',
             'A campanha vai da fase de grupos às oitavas, quartas, semifinal e final — e o técnico avisa antes de cada jogo o que esperar do próximo adversário.'],
        en: ['You manage Tsubasa Ozora’s <b>Nankatsu</b> through the national schools championship, and then the Japanese Jr. Youth side. Every opponent is a real team from the manga, with their aces and their signature moves.',
             'The run goes from the group stage to the last 16, the quarters, the semi-final and the final — and the coach tells you before each match what to expect from the next opponent.'],
        es: ['Diriges al <b>Nankatsu</b> de Tsubasa Ozora por el campeonato nacional escolar, y después a la selección japonesa Jr. Youth. Cada rival es un equipo real del manga, con sus cracks y sus técnicas.',
             'La campaña va de la fase de grupos a octavos, cuartos, semifinal y final — y el entrenador avisa antes de cada partido qué esperar del siguiente rival.']
      }},
    { id: 'two', titulo: { pt: 'Dois jogos num só', en: 'Two games in one', es: 'Dos juegos en uno' }, foto: 'ct/02-sala.png',
      paras: {
        pt: ['<b>Fora de campo</b> o jogo é uma aventura: você anda por cenários, conversa e procura gente. É assim que Misaki é encontrado em Paris, com os comandos <code>Move</code>, <code>Ask</code>, <code>Look</code> e <code>Quit</code>.',
             '<b>Em campo</b> o jogo vira outra coisa. Você não controla o chute: escolhe a ação e vê a animação decidir. É futebol por menu, e foi este jogo que o inventou.',
             'Na sala do técnico você escolhe <code>Info</code> para saber do adversário, <code>Salvar</code> para gravar o progresso e receber a senha, e <code>Jogar</code> para começar a partida.'],
        en: ['<b>Off the pitch</b> the game is an adventure: you walk around locations, talk and look for people. That is how Misaki is found in Paris, with the commands <code>Move</code>, <code>Ask</code>, <code>Look</code> and <code>Quit</code>.',
             '<b>On the pitch</b> the game becomes something else. You do not control the shot: you pick the action and watch the animation decide. This is menu football, and this is the game that invented it.',
             'In the coach’s room you pick <code>SCOUT</code> to hear about the opponent, <code>SAVE</code> to store your progress and read your password, and <code>PLAY</code> to start the match.'],
        es: ['<b>Fuera del campo</b> el juego es una aventura: recorres escenarios, hablas y buscas gente. Así se encuentra a Misaki en París, con los comandos <code>Move</code>, <code>Ask</code>, <code>Look</code> y <code>Quit</code>.',
             '<b>En el campo</b> el juego se convierte en otra cosa. No controlas el disparo: eliges la acción y ves cómo la animación decide. Es fútbol por menú, y fue este juego quien lo inventó.',
             'En la sala del entrenador eliges <code>DATOS</code> para saber del rival, <code>GRABAR</code> para guardar el progreso y recibir la contraseña, y <code>JUGAR</code> para empezar el partido.']
      }},
    { id: 'match', titulo: { pt: 'Durante a partida', en: 'During a match', es: 'Durante el partido' }, foto: 'ct/05-jogo.png',
      paras: {
        pt: ['Quando a bola é sua, o jogo pergunta <b><code>Action?</code></b> e para. À direita fica a ficha de quem está com a bola — posição, nome e os atributos que importam naquele instante.',
             'À esquerda ficam o <b>relógio</b> e o <b>placar</b>, com os dois times abreviados em quatro letras. A partida corre em tempo de jogo: cada ação consome segundos do relógio.',
             'A <b>narradora</b> comenta cada lance numa caixa de fala. No original essa caixa tinha uma fileira de texto por linha de roteiro; neste patch são <b>duas</b>, o que é o que permite a narração em inglês caber sem virar telegrama.'],
        en: ['When the ball is yours, the game asks <b><code>Action?</code></b> and stops. On the right is the card of whoever has the ball — position, name, and the stats that matter at that moment.',
             'On the left are the <b>clock</b> and the <b>score</b>, with both sides abbreviated to four letters. The match runs on game time: every action spends seconds off the clock.',
             'The <b>commentator</b> calls each play in a speech box. In the original that box held one row of text per script line; in this patch it holds <b>two</b>, which is what lets English commentary fit without turning into a telegram.'],
        es: ['Cuando la pelota es tuya, el juego pregunta <b><code>Action?</code></b> y se detiene. A la derecha está la ficha de quien lleva el balón — posición, nombre y los atributos que importan en ese instante.',
             'A la izquierda están el <b>reloj</b> y el <b>marcador</b>, con ambos equipos abreviados en cuatro letras. El partido corre en tiempo de juego: cada acción consume segundos del reloj.',
             'La <b>narradora</b> comenta cada jugada en un bocadillo. En el original ese bocadillo tenía una fila de texto por línea de guion; en este parche tiene <b>dos</b>, que es lo que permite que la narración en inglés quepa sin volverse telegrama.']
      }},
    { id: 'guts', titulo: { pt: 'Guts — o recurso que decide tudo', en: 'Guts — the resource that decides everything', es: 'Guts — el recurso que lo decide todo' },
      paras: {
        pt: ['<b>Guts é a coisa mais importante do jogo.</b> Cada jogador tem uma reserva, e <b>toda ação gasta</b>: driblar, passar, chutar, desarmar, cortar. Quanto mais Guts você põe num lance, maior a chance de ele dar certo.',
             'Quando acaba, o jogo diz <b><code>Not enough Guts!!</code></b> e a jogada não sai. Um craque sem Guts perde a bola para um zagueiro comum — e é por isso que o jogo é de administração, não de reflexo.',
             'Guts não volta durante o tempo. Gastar tudo no primeiro tempo é como se perde uma final.']
      , en: ['<b>Guts is the most important thing in the game.</b> Every player has a reserve, and <b>every action spends it</b>: dribbling, passing, shooting, tackling, cutting. The more Guts you put into a play, the better its chance of coming off.',
             'When it runs out, the game says <b><code>Not enough Guts!!</code></b> and the play does not happen. An ace with no Guts loses the ball to an ordinary defender — which is why this is a game of management, not reflexes.',
             'Guts does not come back during play. Spending it all in the first half is how finals are lost.']
      , es: ['<b>Guts es lo más importante del juego.</b> Cada jugador tiene una reserva, y <b>toda acción la gasta</b>: regatear, pasar, disparar, entrar, cortar. Cuanto más Guts pongas en una jugada, mayor su probabilidad de salir bien.',
             'Cuando se acaba, el juego dice <b><code>Not enough Guts!!</code></b> y la jugada no sale. Un crack sin Guts pierde el balón ante un defensa cualquiera — y por eso este es un juego de gestión, no de reflejos.',
             'El Guts no se recupera durante el tiempo de juego. Gastarlo todo en la primera parte es como se pierden las finales.'] }},
    { id: 'card', titulo: { pt: 'A ficha do jogador', en: 'The player card', es: 'La ficha del jugador' }, foto: 'ct/04-ficha.png',
      paras: {
        pt: ['Cada jogador tem um nível e sete números. Ganhar partidas sobe o nível de todo o elenco — o técnico avisa: <i>“Well done, men! You have all leveled up.”</i>'],
        en: ['Every player has a level and seven numbers. Winning matches raises the whole squad — the coach says so: <i>“Well done, men! You have all leveled up.”</i>'],
        es: ['Cada jugador tiene un nivel y siete números. Ganar partidos sube el nivel de toda la plantilla — el entrenador lo dice: <i>“Well done, men! You have all leveled up.”</i>']
      },
      lista: [
        { k: 'Level', v: { pt: 'O nível do jogador. Sobe ao vencer.', en: 'The player’s level. It rises when you win.', es: 'El nivel del jugador. Sube al ganar.' } },
        { k: 'Max Guts', v: { pt: 'O tanque cheio de Guts daquele jogador — o teto do que ele pode gastar numa partida.', en: 'That player’s full Guts tank — the ceiling on what he can spend in a match.', es: 'El depósito lleno de Guts de ese jugador — el techo de lo que puede gastar en un partido.' } },
        { k: 'Run', v: { pt: 'Drible: passar pelo marcador com a bola.', en: 'Dribbling: getting past your marker with the ball.', es: 'Regate: superar al marcador con el balón.' } },
        { k: 'Pass', v: { pt: 'Passe: fazer a bola chegar a quem você quer.', en: 'Passing: getting the ball to who you meant.', es: 'Pase: hacer que el balón llegue a quien quieres.' } },
        { k: 'Shoot', v: { pt: 'Chute a gol.', en: 'Shooting at goal.', es: 'Disparo a puerta.' } },
        { k: 'Steal', v: { pt: 'Desarme: tomar a bola de quem a tem.', en: 'Tackling: taking the ball off whoever has it.', es: 'Entrada: quitarle el balón a quien lo tiene.' } },
        { k: 'Cut', v: { pt: 'Corte: interceptar um passe no caminho.', en: 'Cutting: intercepting a pass in flight.', es: 'Corte: interceptar un pase en el camino.' } },
        { k: 'Mark', v: { pt: 'Marcação: grudar no homem e tirar o espaço dele.', en: 'Marking: sticking to your man and taking his space away.', es: 'Marcaje: pegarte a tu hombre y quitarle el espacio.' } }
      ]},
    { id: 'moves', titulo: { pt: 'Os golpes especiais', en: 'The special moves', es: 'Las técnicas especiales' },
      paras: {
        pt: ['Cada craque tem um golpe próprio, que custa muito Guts e vale a pena quando vai decidir. Eles são do mangá, e o adversário também os tem — o técnico avisa qual esperar.'],
        en: ['Every ace has a move of their own, which costs a lot of Guts and is worth it when it decides something. They come from the manga, and the opposition has them too — the coach tells you which to expect.'],
        es: ['Cada crack tiene una técnica propia, que cuesta mucho Guts y vale la pena cuando va a decidir. Vienen del manga, y el rival también las tiene — el entrenador avisa cuál esperar.']
      },
      lista: [
        { k: 'Drive Shot', v: { pt: 'O chute do Tsubasa, com a bola descendo no fim.', en: 'Tsubasa’s shot, with the ball dipping at the end.', es: 'El disparo de Tsubasa, con el balón cayendo al final.' } },
        { k: 'Overhead Kick', v: { pt: 'A bicicleta do Tsubasa.', en: 'Tsubasa’s bicycle kick.', es: 'La chilena de Tsubasa.' } },
        { k: 'Tiger Shot', v: { pt: 'O petardo do Hyuga — o chute mais forte do torneio.', en: 'Hyuga’s cannon — the hardest shot in the tournament.', es: 'El cañonazo de Hyuga — el disparo más fuerte del torneo.' } },
        { k: 'Razor Shot', v: { pt: 'O chute rasteiro do Soda, o “matador de craques”.', en: 'Soda’s low shot — he is called the Ace Killer.', es: 'El disparo raso de Soda, el “matador de cracks”.' } },
        { k: 'Twin Shot', v: { pt: 'O chute a dois dos gêmeos Tachibana.', en: 'The Tachibana twins’ two-man shot.', es: 'El disparo a dos de los gemelos Tachibana.' } },
        { k: 'Skylab Hurricane', v: { pt: 'A jogada aérea dos gêmeos, um subindo no outro.', en: 'The twins’ aerial move, one launching off the other.', es: 'La jugada aérea de los gemelos, uno subiendo sobre el otro.' } },
        { k: 'Diving Header', v: { pt: 'O cabeceio mergulhado do Izawa, do Oda e do Takei.', en: 'The diving header of Izawa, Oda and Takei.', es: 'El cabezazo en plancha de Izawa, Oda y Takei.' } },
        { k: 'Face Block', v: { pt: 'A defesa de cara do Ishizaki, o “gutsman” do time.', en: 'Ishizaki’s face block — he is the team’s gutsman.', es: 'El bloqueo con la cara de Ishizaki, el “gutsman” del equipo.' } }
      ]},
    { id: 'save', titulo: { pt: 'Guardar o progresso', en: 'Keeping your progress', es: 'Guardar el progreso' }, foto: 'ct/07-memo.png',
      paras: {
        pt: ['O jogo de 1988 guarda progresso por <b>senha</b>. Abra <code>Salvar</code> na sala do técnico e a Sanae dita a sua — a grade agora é de letras latinas, maiúsculas, minúsculas e algarismos, e a senha gerada passa pela rotina de validação original do jogo.',
             '<b>Neste patch o jogo também grava em bateria.</b> Ele salva no mesmo instante em que mostra a senha, e carrega no <code>CONTINUE</code> da tela de título. Não é um save novo: é exatamente o que a senha já guardava, escrito na memória do cartucho.',
             'Com um save presente, <b>segurar B no <code>CONTINUE</code></b> abre a tela de senha mesmo assim. <code>KICK OFF</code> começa jogo novo e <b>não apaga</b> o que estava salvo.']
      , en: ['The 1988 game keeps progress by <b>password</b>. Open <code>SAVE</code> in the coach’s room and Sanae reads yours out — the grid is now Latin capitals, lower case and digits, and the generated password passes the game’s own validation routine.',
             '<b>In this patch the game also writes to battery.</b> It saves at the very moment it shows you the password, and loads on <code>CONTINUE</code> at the title screen. This is not a new save: it is exactly what the password already carried, written into the cartridge’s memory.',
             'With a save present, <b>holding B on <code>CONTINUE</code></b> opens the password screen anyway. <code>KICK OFF</code> starts a new game and <b>does not erase</b> what was saved.']
      , es: ['El juego de 1988 guarda el progreso por <b>contraseña</b>. Abre <code>GRABAR</code> en la sala del entrenador y Sanae te dicta la tuya — la rejilla ahora es de letras latinas, mayúsculas, minúsculas y cifras, y la contraseña generada pasa por la rutina de validación original del juego.',
             '<b>En este parche el juego también graba con pila.</b> Guarda en el mismo instante en que muestra la contraseña, y carga en el <code>CONTINUE</code> de la pantalla de título. No es un guardado nuevo: es exactamente lo que la contraseña ya llevaba, escrito en la memoria del cartucho.',
             'Con una partida guardada, <b>mantener B en <code>CONTINUE</code></b> abre la pantalla de contraseña igualmente. <code>KICK OFF</code> empieza partida nueva y <b>no borra</b> lo guardado.'] }},
    { id: 'options', titulo: { pt: 'Opções', en: 'Options', es: 'Opciones' },
      paras: {
        pt: ['O patch acrescenta um menu de opções com duas coisas que mudam muito como o jogo se lê.'],
        en: ['The patch adds an options menu with two things that change a lot about how the game reads.'],
        es: ['El parche añade un menú de opciones con dos cosas que cambian mucho cómo se lee el juego.']
      },
      lista: [
        { k: 'Text speed', v: { pt: 'Cinco velocidades: <code>Slow</code>, <code>Normal</code>, <code>Quick</code>, <code>Fast</code> e <code>Full</code>. A última põe a frase inteira na tela de uma vez.', en: 'Five speeds: <code>Slow</code>, <code>Normal</code>, <code>Quick</code>, <code>Fast</code> and <code>Full</code>. The last one puts the whole line on screen at once.', es: 'Cinco velocidades: <code>Slow</code>, <code>Normal</code>, <code>Quick</code>, <code>Fast</code> y <code>Full</code>. La última pone la frase entera de golpe.' } },
        { k: 'Narration', v: { pt: 'Liga e desliga o comentário jogada a jogada. Desligado, a partida corre bem mais rápido.', en: 'Turns the play-by-play commentary on and off. With it off, the match runs a good deal faster.', es: 'Activa y desactiva el comentario jugada a jugada. Desactivado, el partido corre bastante más rápido.' } }
      ]},
    { id: 'patch', titulo: { pt: 'O que é diferente neste patch', en: 'What is different in this patch', es: 'Qué cambia en este parche' }, foto: 'ct/08-save.png',
      paras: {
        pt: ['<b>Save com bateria</b>, descrito acima. O jogo original não tinha nenhum.',
             '<b>Duas fileiras de texto por linha de roteiro</b> na narração da partida — de 14 e 18 colunas para 28 e 36.',
             '<b>Menu de opções</b> com velocidade de texto e narração.',
             '<b>Logo do título redesenhado</b>, e o logo pequeno da sala de aula também.',
             '<b>Uma fonte inglesa inteira</b>: no cartucho existiam dezesseis letras latinas, e as outras foram desenhadas do zero.',
             '<b>Isto é uma beta.</b> Faltam a tela de créditos e a tela de erro de senha, e a lista de nomes do final ainda precisa mudar de coluna. Nada disso impede jogar a campanha inteira.']
      , en: ['<b>Battery save</b>, described above. The original game had none.',
             '<b>Two rows of text per script line</b> in match commentary — from 14 and 18 columns to 28 and 36.',
             '<b>An options menu</b> with text speed and narration.',
             '<b>The title logo redrawn</b>, and the small classroom logo with it.',
             '<b>A whole English font</b>: the cartridge held sixteen Latin letters, and the rest were drawn from nothing.',
             '<b>This is a beta.</b> The credits screen and the password-error screen are still missing, and the ending name list has yet to move a column. None of that stops you playing the whole campaign.']
      , es: ['<b>Guardado con pila</b>, descrito arriba. El juego original no tenía ninguno.',
             '<b>Dos filas de texto por línea de guion</b> en la narración del partido — de 14 y 18 columnas a 28 y 36.',
             '<b>Un menú de opciones</b> con velocidad de texto y narración.',
             '<b>El logo del título redibujado</b>, y el logo pequeño del aula con él.',
             '<b>Una fuente inglesa entera</b>: en el cartucho había dieciséis letras latinas, y las demás se dibujaron de la nada.',
             '<b>Esto es una beta.</b> Faltan la pantalla de créditos y la de error de contraseña, y la lista de nombres del final aún debe cambiar de columna. Nada de eso impide jugar la campaña entera.'] }}
  ]
};
