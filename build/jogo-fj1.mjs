/* Famicom Jump: Heroes History, Definitive Edition: entra no site como BETA (05/10/2026).
   Copy do roteirista dos Arautos, 2ª rodada (depois do CETICO.md e do CHECAGEM.md). Fonte única de fatos:
   ~/fj1-analise/midia/site/DOSSIE.md (seções citadas ao lado de cada bloco) + CHECAGEM.md.
   Base: a tradução inglesa v1.03 do BlackPaladin, revisada e ampliada em parceria com ele
   (crédito "Translation: BlackPaladin & Patch Clan").
   A frase de beta no resumo §3 é decisão do coordenador (05/10), por cima da regra 2 do REGRAS.md.
   Fora de propósito: a seta ▼ e a seção 8 da vitrine (defeitos da nossa inserção, DOSSIE §4c),
   B1/B2/B3/B7 (não consertados, §4d), md5 de build (rodada 10, regra 16), erros de digitação da v1.03
   exibidos entre aspas (CETICO 1). 78 (releitura) e 51 (nomes) foram duas passadas separadas
   (PROXIMA_ABA.md:186-188 e 1061): o texto diz "numa passada à parte", sem somar.
   Fotos: shots/ (DESIGNER.md final de 05/10); o 10 saiu. O «g» da foto 04 é o desenho da fonte do jogo. */

const bi = (pt, en, es) => ({ pt, en, es });

export const FJ1 = {
  slug: 'famicom-jump-1',
  nome: 'Famicom Jump: Heroes History',
  subtitulo: 'Definitive Edition',
  jp: 'ファミコンジャンプ 英雄列伝',
  publisher: 'Bandai', dev: 'TOSE', ano: 1989, data: '25/02/1989',
  sistema: 'Famicom',
  mapper: 'Mapper 16 (Bandai), submapper 5 · 256 KB PRG · CHR 128 → 256 KB · EEPROM 24C02 de 256 B',
  categoria: bi('Tradução', 'Translation', 'Traducción'),
  nivel: 'beta',
  versao: 'Definitive Edition BETA v2.0 build 1',
  capa: 'fj1/00-capa-patreon.jpg',
  patreon: 'https://www.patreon.com/patchclan/posts/famicom-jump-171676028?pr=true',

  /* DOSSIE §1, §2, §3.5-3.7. */
  linha: bi("O jogo dos 20 anos da Shōnen Jump na tradução do BlackPaladin, agora com save, botão de falar, pausa na briga e versões em português e espanhol.",
            "Shōnen Jump's 20th anniversary game in BlackPaladin's translation, now with saving, a talk button, pause in fights, and Portuguese and Spanish.",
            "El juego de los 20 años de la Shōnen Jump en la traducción de BlackPaladin, ahora con guardado, botón para hablar, pausa, portugués y español."),

  resumo: {
    pt: [
      /* §1 + D1 (©1988 na tela, lançamento em 1989) */
      "<i>Famicom Jump: Eiyuu Retsuden</i> saiu em 25 de fevereiro de 1989 (a tela de título traz o © de 1988), da Bandai com a TOSE, para comemorar os 20 anos da <i>Weekly Shōnen Jump</i>. Um garoto que está lendo a revista é puxado para dentro dela e precisa salvar o Mundo Jump do Piccolo Daimaō, recrutando heróis de Dragon Ball, Hokuto no Ken, JoJo, Saint Seiya, Kinnikuman, City Hunter e outras séries. É um RPG de ação, com lutas de chefe no estilo de jogo de luta, minijogos de tiro, esporte e corrida e, no fim, uma batalha por comando entre 16 heróis e 13 vilões. A abertura, a do garoto que cai na revista, já vinha em inglês no cartucho japonês.",
      /* §2 */
      "Quem abriu o jogo inteiro para quem não lê japonês foi o <b>BlackPaladin</b>. Ele traduziu as 682 falas, os nomes de personagens e itens, os minijogos, os menus, a tela da senha e o final, trocou a fonte por uma com minúsculas e fez o inglês caber praticamente no espaço que o japonês ocupava no cartucho. Para isso, onde a linha de 17 letras ia partir uma palavra, ele chegou a juntar duas no texto de um jeito que a própria quebra de linha separa de novo na tela, um truque que quem joga nem percebe. A v1.0 saiu em 22 de agosto de 2022 e a v1.03 em 21 de março de 2025, com o título <i>Heroes History</i>. Com ele trabalharam Zynk Oxhyde, que redesenhou o logotipo como <i>Famicom Jump / HEROES HISTORY</i>, phonymike e Gideon Zhi na programação, cccmar nos testes, Cavery210 nos relatos de bug e scum, que ajustou a v1.03 para rodar no Mesen.",
      /* §2 (D8), §3, beta */
      "Esta <b>Definitive Edition</b> mantém o texto dele, revisado fala a fala com o japonês, e foi feita em parceria com ele: a tela de abertura traz o crédito <i>Translation: BlackPaladin &amp; Patch Clan</i>. Ela acrescenta save, botão de falar, pausa na briga, uma caixa de fala mais larga e duas línguas novas. Abaixo, cada mudança com o antes e o depois. É uma beta: a edição ainda não foi jogada de ponta a ponta nas três línguas.",
      /* §3.7 */
      "As duas ROMs novas, em <b>português do Brasil</b> e em <b>espanhol latino</b>, foram traduzidas direto do japonês: as 682 falas, com os nomes das dublagens de cada língua. A fonte do jogo não tinha acentos, e eles foram desenhados no estilo das letras dela."
    ],
    en: [
      "<i>Famicom Jump: Eiyuu Retsuden</i> came out on February 25, 1989 (the title screen carries a 1988 copyright), from Bandai with TOSE, to mark the 20th anniversary of <i>Weekly Shōnen Jump</i>. A boy reading the magazine gets pulled inside it and has to save Jump World from King Piccolo, recruiting heroes from Dragon Ball, Fist of the North Star, JoJo, Saint Seiya, Kinnikuman, City Hunter and more. It is an action RPG, with boss fights played like a fighting game, shooting, sports and racing minigames and, at the end, a command battle between 16 heroes and 13 villains. The opening, the boy falling into the magazine, was already in English on the Japanese cartridge.",
      "<b>BlackPaladin</b> is the one who opened the whole game to people who don't read Japanese. He translated all 682 lines, the character and item names, the minigames, the menus, the password screen and the ending, swapped in a font with lower case, and fit the English into almost exactly the space the Japanese took up on the cartridge. To get there, where a 17-letter line was about to split a word, he sometimes joined two words in the text in a way the line break itself pulls apart again on screen, a trick players never notice. v1.0 came out on August 22, 2022 and v1.03 on March 21, 2025, under the title <i>Heroes History</i>. Working with him were Zynk Oxhyde, who redrew the logo as <i>Famicom Jump / HEROES HISTORY</i>, phonymike and Gideon Zhi on programming, cccmar on testing, Cavery210 on bug reports, and scum, who made v1.03 run in Mesen.",
      "This <b>Definitive Edition</b> keeps his text, reviewed line by line against the Japanese, and was made in partnership with him: the opening screen carries the credit <i>Translation: BlackPaladin &amp; Patch Clan</i>. It adds saving, a talk button, pause in fights, a wider text box and two new languages. Every change is listed below, before and after. This is a beta: the edition has not yet been played start to finish in all three languages.",
      "The two new ROMs, in <b>Brazilian Portuguese</b> and <b>Latin American Spanish</b>, were translated straight from the Japanese: all 682 lines, with the names each language's dub uses. The game's font had no accents, so they were drawn to match its letters."
    ],
    es: [
      "<i>Famicom Jump: Eiyuu Retsuden</i> salió el 25 de febrero de 1989 (la pantalla de título lleva el © de 1988), de Bandai con TOSE, para celebrar los 20 años de la <i>Weekly Shōnen Jump</i>. Un chico que está leyendo la revista termina adentro de ella y tiene que salvar el Mundo Jump de Piccolo Daimaō, reclutando héroes de Dragon Ball, Hokuto no Ken, JoJo, Saint Seiya, Kinnikuman, City Hunter y otras series. Es un RPG de acción, con peleas contra jefes al estilo de juego de pelea, minijuegos de disparos, deportes y carreras y, al final, una batalla por comandos entre 16 héroes y 13 villanos. La introducción, la del chico que cae en la revista, ya venía en inglés en el cartucho japonés.",
      "El que abrió el juego entero a quienes no leen japonés fue <b>BlackPaladin</b>. Tradujo las 682 líneas, los nombres de personajes y objetos, los minijuegos, los menús, la pantalla de contraseña y el final, cambió la fuente por una con minúsculas y logró que el inglés cupiera casi en el mismo espacio que el japonés ocupaba en el cartucho. Para eso, donde la línea de 17 letras iba a partir una palabra, a veces juntaba dos en el texto de manera que el propio salto de línea las vuelve a separar en pantalla, un truco que el jugador ni nota. La v1.0 salió el 22 de agosto de 2022 y la v1.03 el 21 de marzo de 2025, con el título <i>Heroes History</i>. Con él trabajaron Zynk Oxhyde, que redibujó el logotipo como <i>Famicom Jump / HEROES HISTORY</i>, phonymike y Gideon Zhi en la programación, cccmar en las pruebas, Cavery210 en los reportes de errores y scum, que hizo que la v1.03 corriera en Mesen.",
      "Esta <b>Definitive Edition</b> conserva su texto, revisado línea por línea con el japonés, y se hizo en colaboración con él: la pantalla de inicio lleva el crédito <i>Translation: BlackPaladin &amp; Patch Clan</i>. Suma guardado, botón para hablar, pausa en las peleas, una caja de diálogo más ancha y dos idiomas nuevos. Abajo está cada cambio, con el antes y el después. Es una beta: la edición todavía no se ha jugado de principio a fin en los tres idiomas.",
      "Las dos ROMs nuevas, en <b>portugués de Brasil</b> y en <b>español latino</b>, se tradujeron directamente del japonés: las 682 líneas, con los nombres de los doblajes de cada idioma. La fuente del juego no tenía acentos, y se dibujaron al estilo de sus letras."
    ]
  },

  numeros: [
    { v: '682', r: bi('falas, traduzidas do japonês para o português e o espanhol', 'lines, translated from Japanese into Portuguese and Spanish', 'líneas, traducidas del japonés al portugués y al español') },
    { v: '17 → 22', r: bi('letras por linha na caixa de fala de cima', 'letters per line in the upper text box', 'letras por línea en la caja de diálogo de arriba') },
    { v: '78', r: bi('falas do inglês ajustadas ao sentido do japonês', 'English lines brought closer to the Japanese meaning', 'líneas del inglés ajustadas al sentido del japonés') },
    { v: '3', r: bi('ROMs, uma por idioma', 'ROMs, one per language', 'ROMs, una por idioma') }
  ],

  grupos: [
    /* DOSSIE §3.2 e §3.3 + CHECAGEM */
    { titulo: bi('O que mudou no inglês', 'What changed in the English', 'Qué cambió en el inglés'), itens: [
      { t: bi("<b>Quatro falas que faltavam voltaram.</b> Saíam vazias ou com um pedaço de outra fala, embora no japonês todas tenham texto. A mais visível: quando o Shenron surge, a caixa do pedido ficava em branco e agora diz «Revive our friends!». As outras três são a fala sobre a nuvem («Master Roshi's Flying Nimbus would let me fly‥»), uma recusa numa luta («I-I can't raise a hand to my teacher!») e «Out of energy‥ no strength left‥».",
              "<b>Four missing lines are back.</b> They came out blank or with a piece of another line, though every one has text in the Japanese. The most visible: when Shenron appears, the wish box used to be empty and now reads «Revive our friends!». The other three are the line about the cloud («Master Roshi's Flying Nimbus would let me fly‥»), a refusal in a fight («I-I can't raise a hand to my teacher!») and «Out of energy‥ no strength left‥».",
              "<b>Volvieron cuatro líneas que faltaban.</b> Salían vacías o con un pedazo de otra línea, aunque en japonés todas tienen texto. La más visible: cuando aparece Shenron, la caja del deseo quedaba en blanco y ahora dice «Revive our friends!». Las otras tres son la línea sobre la nube («Master Roshi's Flying Nimbus would let me fly‥»), una negativa en una pelea («I-I can't raise a hand to my teacher!») y «Out of energy‥ no strength left‥»."), foto: 'fj1/02-shenron-antes-depois.png' },
      { t: bi("<b>Restaurante.</b> Três frases que saíam como letras sem sentido, do tipo «EGvHKt JeneMX!», agora estão em inglês: «Oh dear, sir‥ You can't eat! Not enough!».",
              "<b>Restaurant.</b> Three lines that came out as garbled letters, along the lines of «EGvHKt JeneMX!», are now in English: «Oh dear, sir‥ You can't eat! Not enough!».",
              "<b>Restaurante.</b> Tres frases que salían como letras sin sentido, del tipo «EGvHKt JeneMX!», ahora están en inglés: «Oh dear, sir‥ You can't eat! Not enough!».") },
      { t: bi("<b>O roteiro inteiro relido contra o japonês.</b> 78 falas mudaram para ficar mais perto do sentido original. A do beisebol, por exemplo, ficou «Isn't baseball / something you eat?». Numa delas, «Kaioh» estava no lugar de Tonchinkan: no japonês é かいとう とんちんかん, o ladrão Tonchinkan.",
              "<b>The whole script reread against the Japanese.</b> 78 lines changed to sit closer to the original meaning. The baseball line, for one, is now «Isn't baseball / something you eat?». In one of them, «Kaioh» stood where Tonchinkan should be: the Japanese is かいとう とんちんかん, Tonchinkan the thief.",
              "<b>El guion entero releído contra el japonés.</b> Cambiaron 78 líneas para quedar más cerca del sentido original. La del béisbol, por ejemplo, quedó «Isn't baseball / something you eat?». En una de ellas, «Kaioh» estaba en el lugar de Tonchinkan: en japonés es かいとう とんちんかん, el ladrón Tonchinkan.") },
      { t: bi("<b>Nomes.</b> Numa passada à parte, 51 falas trocaram nome para seguir os oficiais americanos (Viz e Funimation). Nas falas fica sempre Master Roshi, onde antes apareciam também Muten Roshi e Turtle Hermit, e ainda Flying Nimbus e 44 Magnum escrito de um jeito só. Na loja, o item continua Kinto'un.",
              "<b>Names.</b> In a separate pass, 51 lines changed names to follow the official American ones (Viz and Funimation). In dialogue it is always Master Roshi, where Muten Roshi and Turtle Hermit also showed up before, plus Flying Nimbus and 44 Magnum spelled one way. In the shop, the item is still Kinto'un.",
              "<b>Nombres.</b> En una pasada aparte, 51 líneas cambiaron de nombre para seguir los oficiales de Estados Unidos (Viz y Funimation). En los diálogos queda siempre Master Roshi, donde antes también aparecían Muten Roshi y Turtle Hermit, además de Flying Nimbus y 44 Magnum escrito de una sola forma. En la tienda, el objeto sigue siendo Kinto'un.") },
      { t: bi("<b>Grafia e sentido.</b> Acertos de ortografia e concordância, e cada nome com uma grafia só: Nyorai, Musou, Vacuum, Keppaden. Onde a fala pede o Jotaro, agora diz «…see Jotaro again.», e uma fala que estava no passado voltou ao futuro, como no japonês («now revive»).",
              "<b>Spelling and meaning.</b> Spelling and agreement fixes, and one spelling per name: Nyorai, Musou, Vacuum, Keppaden. Where the line means Jotaro, it now says «…see Jotaro again.», and a line that had slipped into the past is back in the future, as in the Japanese («now revive»).",
              "<b>Ortografía y sentido.</b> Arreglos de ortografía y concordancia, y una sola grafía por nombre: Nyorai, Musou, Vacuum, Keppaden. Donde la línea habla de Jotaro, ahora dice «…see Jotaro again.», y una línea que estaba en pasado volvió al futuro, como en el japonés («now revive»).") },
      { t: bi("<b>Detalhes de tela.</b> Saíram o ponto sozinho numa linha, a frase começando com minúscula, as linhas abertas com espaço e palavras grudadas, e uma fala de luta que escrevia fora da caixa agora fica dentro dela.",
              "<b>On-screen details.</b> Gone are the period alone on a line, sentences starting in lower case, lines opening with a space and run-together words, and a fight line that spilled outside its box now stays inside it.",
              "<b>Detalles de pantalla.</b> Ya no hay punto solo en una línea, frases que empiecen con minúscula, líneas que abran con espacio ni palabras pegadas, y una línea de pelea que se salía de la caja ahora queda adentro.") },
      { t: bi("<b>Créditos finais.</b> 12 grafias da equipe japonesa voltaram à forma do romaji do cartucho original, e «Satoshi Kodama» passou a Satoshi Shimomura.",
              "<b>End credits.</b> 12 spellings in the Japanese staff list now follow the original cartridge's romaji, and «Satoshi Kodama» became Satoshi Shimomura.",
              "<b>Créditos finales.</b> 12 grafías del equipo japonés volvieron al romaji del cartucho original, y «Satoshi Kodama» pasó a Satoshi Shimomura.") },
      { t: bi("<b>Loja.</b> Os nomes de duas linhas ficavam por cima do ícone; agora o nome vai ao lado do desenho e o preço em cima, nas três línguas.",
              "<b>Shop.</b> Two-line item names used to sit on top of the icon; now the name goes beside the picture and the price above it, in all three languages.",
              "<b>Tienda.</b> Los nombres de dos líneas quedaban encima del ícono; ahora el nombre va al lado del dibujo y el precio arriba, en los tres idiomas."), foto: 'fj1/07-loja-nova.png' },
      { t: bi("<b>Grade da senha.</b> Quatro casas mostravam pedaços de letra, onde o japonês tinha sílabas. Viraram ♥ ★ ● ▲, e as senhas que já existem continuam valendo.",
              "<b>Password grid.</b> Four cells showed scraps of letters, where the Japanese had syllables. They are now ♥ ★ ● ▲, and existing passwords still work.",
              "<b>Cuadrícula de la contraseña.</b> Cuatro casillas mostraban pedazos de letra, donde el japonés tenía sílabas. Ahora son ♥ ★ ● ▲, y las contraseñas que ya existen siguen valiendo.") }
    ]},
    /* DOSSIE §3.5, §3.6 e §4a. Esperar e jogar do jeito antigo continua funcionando (pag:247). */
    { titulo: bi('Jogabilidade e save', 'Gameplay and saving', 'Jugabilidad y guardado'), itens: [
      { t: bi("<b>Botão de falar.</b> O amigo só falava depois de 1,1 a 1,6 segundo com o herói parado na frente dele, e tem o mesmo desenho do inimigo: apertar A por reflexo batia nele e derrubava a Alma do herói. Agora, apertar A quando o amigo está esperando faz ele falar na hora. Inimigo continua levando o golpe, e quem preferir esperar ainda pode.",
              "<b>Talk button.</b> Your ally only spoke after 1.1 to 1.6 seconds of the hero standing still in front of him, and he looks just like an enemy: pressing A on reflex hit him and knocked down the hero's Soul. Now pressing A while your ally is waiting makes him talk right away. Enemies still take the hit, and anyone who would rather wait still can.",
              "<b>Botón para hablar.</b> El aliado solo hablaba después de 1,1 a 1,6 segundos con el héroe quieto frente a él, y se ve igual que un enemigo: apretar A por reflejo lo golpeaba y le bajaba el Alma al héroe. Ahora, si aprietas A cuando el aliado está esperando, habla de inmediato. El enemigo sigue recibiendo el golpe, y quien prefiera esperar todavía puede.") },
      { t: bi("<b>Save.</b> O original só guardava o progresso numa senha de 40 caracteres. Agora, quando o monólito mostra a senha, o jogo grava; ao ligar, o CONTINUE já abre com a senha escrita e o cursor no Enter, e basta apertar A. A senha continua funcionando. Depois de um game over, o título volta com o cursor já em CONTINUE.",
              "<b>Saving.</b> The original only kept your progress as a 40-character password. Now, when the monolith shows the password, the game saves; at power-on, CONTINUE opens with the password already filled in and the cursor on Enter, so you just press A. The password still works. After a game over, the title comes back with the cursor already on CONTINUE.",
              "<b>Guardado.</b> El original solo guardaba el progreso en una contraseña de 40 caracteres. Ahora, cuando el monolito muestra la contraseña, el juego guarda; al encender, CONTINUE ya abre con la contraseña escrita y el cursor en Enter, y basta con apretar A. La contraseña sigue funcionando. Después de un game over, el título vuelve con el cursor ya en CONTINUE."), foto: 'fj1/06-continue-com-senha.png' },
      { t: bi("<b>Pausa na briga.</b> O original não tinha. START congela relógio, inimigos e tudo o mais; outro START retoma.",
              "<b>Pause in fights.</b> The original had none. START freezes the clock, the enemies and everything else; press START again to resume.",
              "<b>Pausa en las peleas.</b> El original no tenía. START congela el reloj, los enemigos y todo lo demás; otro START la quita.") },
      { t: bi("<b>Recarga do tiro.</b> Com a Alma baixa, a espera entre um tiro e outro chegava a 4,2 segundos; agora é de 3,2. O resto da curva ficou igual.",
              "<b>Shot recharge.</b> With a low Soul, the wait between shots reached 4.2 seconds; now it is 3.2. The rest of the curve is unchanged.",
              "<b>Recarga del disparo.</b> Con el Alma baja, la espera entre un disparo y otro llegaba a 4,2 segundos; ahora es de 3,2. El resto de la curva quedó igual.") },
      { t: bi("<b>Compra repetida.</b> O cartucho deixava comprar de novo um item que você já tinha, cobrava e não entregava nada. Agora a loja avisa, «Cola is already yours!»; A ainda compra, B desiste.",
              "<b>Buying twice.</b> The cartridge let you buy an item you already owned, took the money and gave you nothing. Now the shop warns you, «Cola is already yours!»; A still buys, B backs out.",
              "<b>Compra repetida.</b> El cartucho dejaba comprar otra vez un objeto que ya tenías, cobraba y no entregaba nada. Ahora la tienda avisa, «Cola is already yours!»; A compra de todos modos y B cancela."), foto: 'fj1/08-aviso-compra-repetida.png' },
      { t: bi("<b>Batalha final.</b> No caminho dos duelos, Run zerava as vitórias sem aviso. Agora o primeiro Run avisa, «Run again: wins are lost», e só o segundo sai. O jogo também lembra o último herói escolhido e corta uma confirmação repetida.",
              "<b>Final battle.</b> On the path of duels, Run wiped your wins without warning. Now the first Run warns you, «Run again: wins are lost», and only the second one leaves. The game also remembers the last hero you picked and drops a repeated confirmation.",
              "<b>Batalla final.</b> En el camino de los duelos, Run borraba las victorias sin avisar. Ahora el primer Run avisa, «Run again: wins are lost», y solo el segundo sale. El juego también recuerda el último héroe elegido y se salta una confirmación repetida."), foto: 'fj1/09-batalha-final-aviso.png' },
      { t: bi("<b>Texto mais rápido.</b> Nas falas do mapa, segurar A escreve duas letras por quadro, e a abertura passa em cerca de metade do tempo. Nunca na briga nem em minijogo.",
              "<b>Faster text.</b> In map dialogue, holding A prints two letters per frame, and the opening plays in about half the time. Never in fights or minigames.",
              "<b>Texto más rápido.</b> En los diálogos del mapa, mantener A escribe dos letras por cuadro, y la introducción pasa en más o menos la mitad del tiempo. Nunca en peleas ni en minijuegos.") },
      { t: bi("<b>Viagens que pulam.</b> A animação da viagem no tempo dura 526 quadros, perto de 9 segundos, e se repete o jogo todo. Agora A ou START pula, e você chega à mesma era e ao mesmo lugar. A outra viagem animada, a da entrega, também pula, com o mesmo destino.",
              "<b>Skippable trips.</b> Mr. Time's time-travel animation runs 526 frames, close to 9 seconds, and comes back all game long. Now A or START skips it, and you land in the same era and the same place. The other travel animation, the Express Delivery, skips too, with the same destination.",
              "<b>Viajes que se saltan.</b> La animación del viaje en el tiempo dura 526 cuadros, casi 9 segundos, y se repite todo el juego. Ahora A o START la salta, y llegas a la misma época y al mismo lugar. El otro viaje animado, el de la entrega, también se salta, con el mismo destino.") }
    ]},
    /* DOSSIE §3.7 + CHECAGEM:104-105 (b9_pt.py:101, b10_es.py:128) */
    { titulo: bi('Português e espanhol', 'Portuguese and Spanish', 'Portugués y español'), itens: [
      { t: bi("<b>Direto do japonês.</b> As 682 falas, com os nomes das dublagens, como Shenlong e, no português, Torre Karin (no espanhol, Torre de Karin). Nomes do próprio jogo viraram Mundo Jump e Time-kun nas duas línguas.",
              "<b>Straight from the Japanese.</b> All 682 lines, with the dub names, like Shenlong and, in Portuguese, Torre Karin (Torre de Karin in Spanish). The game's own names became Mundo Jump and Time-kun in both languages.",
              "<b>Directo del japonés.</b> Las 682 líneas, con los nombres de los doblajes, como Shenlong y, en español, Torre de Karin (en portugués, Torre Karin). Los nombres propios del juego quedaron como Mundo Jump y Time-kun en los dos idiomas."), foto: 'fj1/04-portugues-em-jogo.png' },
      { t: bi("<b>Acentos desenhados.</b> A fonte não tinha nenhum. Os novos seguem o estilo das letras do jogo e cabem nas duas caixas: em português á ã é ê ç ó í ô É ú Á à õ; em espanhol á ñ ü é Ú í ó ¿ ¡ ú Ó Á É.",
              "<b>Accents, drawn.</b> The font had none. The new ones follow the style of the game's letters and fit both text boxes: in Portuguese á ã é ê ç ó í ô É ú Á à õ; in Spanish á ñ ü é Ú í ó ¿ ¡ ú Ó Á É.",
              "<b>Acentos dibujados.</b> La fuente no tenía ninguno. Los nuevos siguen el estilo de las letras del juego y caben en las dos cajas: en portugués á ã é ê ç ó í ô É ú Á à õ; en español á ñ ü é Ú í ó ¿ ¡ ú Ó Á É.") },
      { t: bi("<b>O resto do jogo também.</b> Os painéis (Vida, Alma e Força; em espanhol, Poder), status, menus, estações, trem, minijogos como o treino do Karin, «Viagem no‥ ‥tempo!» e «Viaje en el‥ ‥tiempo!», e os cargos e títulos dos créditos finais. A abertura, a do garoto que cai na revista, também está nas duas línguas, só em maiúsculas e sem acento, porque a fonte daquela tela não tem acentos.",
              "<b>The rest of the game too.</b> The panels (Vida, Alma and Força; in Spanish, Poder), status, menus, stations, the train, minigames like Karin's training, «Viagem no‥ ‥tempo!» and «Viaje en el‥ ‥tiempo!», and the roles and titles in the end credits. The opening, the boy falling into the magazine, is in both languages too, in capitals and without accents, because that screen's font has none.",
              "<b>El resto del juego también.</b> Los paneles (Vida, Alma y Poder; en portugués, Força), estado, menús, estaciones, tren, minijuegos como el entrenamiento de Karin, «Viagem no‥ ‥tempo!» y «Viaje en el‥ ‥tiempo!», y los cargos y títulos de los créditos finales. La introducción, la del chico que cae en la revista, también está en los dos idiomas, solo en mayúsculas y sin acentos, porque la fuente de esa pantalla no los tiene."), foto: 'fj1/05-espanhol-karin.png' }
    ]},
    /* DOSSIE §3.1, §3.4, §3.8, D4 + CHECAGEM:117 (a ROM japonesa já era NES 2.0, sub 4) */
    { titulo: bi('Por dentro do cartucho', 'Inside the cartridge', 'Dentro del cartucho'), itens: [
      { t: bi("<b>Tela da edição.</b> Antes do título entra uma tela com o Shenron nas bordas, desenhado com a arte do próprio jogo, o nome da edição, a versão, o crédito da tradução e o site. Fica 5 segundos e pula com A ou START, e há uma por idioma. A tela de título original vem logo depois, intacta.",
              "<b>Edition screen.</b> Before the title comes a screen with Shenron around the border, drawn from the game's own art, plus the edition name, the version, the translation credit and the site. It stays 5 seconds and A or START skips it, and there is one per language. The original title screen follows, untouched.",
              "<b>Pantalla de la edición.</b> Antes del título aparece una pantalla con Shenron en los bordes, hecho con el arte del propio juego, el nombre de la edición, la versión, el crédito de la traducción y el sitio. Dura 5 segundos y se salta con A o START, y hay una por idioma. La pantalla de título original viene justo después, intacta."), foto: 'fj1/01-tela-da-edicao-en.png' },
      { t: bi("<b>Caixa de 22 letras.</b> A caixa de fala de cima passou de 17 para 22 letras por linha e quebra por palavra, então o truque de juntar palavras deixou de ser necessário. A caixa de baixo continua com 17.",
              "<b>A 22-letter box.</b> The upper text box went from 17 to 22 letters per line and wraps by word, so the word-joining trick is no longer needed. The lower box stays at 17.",
              "<b>Caja de 22 letras.</b> La caja de diálogo de arriba pasó de 17 a 22 letras por línea y corta por palabra, así que el truco de juntar palabras ya no hace falta. La caja de abajo sigue con 17."), foto: 'fj1/03-caixa-17-22-letras.png' },
      { t: bi("<b>Texto comprimido.</b> O roteiro passou a ser guardado em pares de letras, e o bloco de memória onde ele fica foi de 15.191 para 10.079 bytes, cerca de um terço a menos. Foi isso que abriu espaço para o texto mais longo do português e do espanhol sem crescer a parte do programa. Na tela, o texto sai igual.",
              "<b>Compressed text.</b> The script is now stored as letter pairs, and the memory block that holds it went from 15,191 to 10,079 bytes, about a third smaller. That is what made room for the longer Portuguese and Spanish text without growing the program. On screen, the text looks the same.",
              "<b>Texto comprimido.</b> El guion ahora se guarda en pares de letras, y el bloque de memoria donde vive pasó de 15.191 a 10.079 bytes, cerca de un tercio menos. Eso es lo que hizo lugar para el texto más largo del portugués y del español sin agrandar el programa. En pantalla, el texto sale igual.") },
      { t: bi("<b>O mesmo chip, mais gráficos.</b> Continua o mapper 16 da Bandai, e o programa segue com 256 KB, o máximo que esse mapper endereça. Só a memória de gráficos dobrou, de 128 para 256 KB, para a arte da tela da edição: o arquivo vai de 393.232 para 524.304 bytes. O cabeçalho NES 2.0 agora declara o chip com memória de save (submapper 5, bateria, 256 bytes).",
              "<b>Same chip, more graphics.</b> It is still Bandai's mapper 16, and the program stays at 256 KB, the most that mapper can address. Only graphics memory doubled, from 128 to 256 KB, for the edition screen's art: the file goes from 393,232 to 524,304 bytes. The NES 2.0 header now declares the chip with save memory (submapper 5, battery, 256 bytes).",
              "<b>El mismo chip, más gráficos.</b> Sigue siendo el mapper 16 de Bandai, y el programa se queda en 256 KB, lo máximo que ese mapper direcciona. Solo la memoria de gráficos se duplicó, de 128 a 256 KB, para el arte de la pantalla de la edición: el archivo pasa de 393.232 a 524.304 bytes. La cabecera NES 2.0 ahora declara el chip con memoria de guardado (submapper 5, batería, 256 bytes).") }
    ]}
  ],

  /* DOSSIE §5 + CHECAGEM:124 (sem "conferido no Mesen"). Sem md5 de build. */
  patch: {
    versoes: { en: { arquivo: 'famicom-jump-1-en.ips' },
               pt: { arquivo: 'famicom-jump-1-pt.ips' },
               es: { arquivo: 'famicom-jump-1-es.ips' } },
    rom: 'Famicom Jump - Eiyuu Retsuden (Japan).nes',
    rom_md5: '8d8f6600197f0f4e9f92c5ef72ec9b9d',
    nota: bi("ROM japonesa com cabeçalho, 393.232 bytes · CRC32 80B4C1DE (sem cabeçalho: 393.216 bytes, CRC32 D343C66A, os mesmos que o readme do BlackPaladin pede). Cada IPS vai sobre essa ROM japonesa limpa, não sobre a v1.03 já traduzida, e dá uma ROM de 524.304 bytes. O save usa a EEPROM 24C02 do chip da Bandai, declarada no cabeçalho (mapper 16, submapper 5); o Mesen emula essa EEPROM. Em emulador sem ela, o CONTINUE funciona como no original, pela senha. Serve em Flips, Lunar IPS ou ROM Patcher JS.",
             "Headered Japanese ROM, 393,232 bytes · CRC32 80B4C1DE (headerless: 393,216 bytes, CRC32 D343C66A, the same ones BlackPaladin's readme asks for). Each IPS goes on that clean Japanese ROM, not on the already translated v1.03, and produces a 524,304-byte ROM. Saving uses the 24C02 EEPROM of the Bandai chip, declared in the header (mapper 16, submapper 5); Mesen emulates that EEPROM. In an emulator without it, CONTINUE works as in the original, by password. Works with Flips, Lunar IPS or ROM Patcher JS.",
             "ROM japonesa con cabecera, 393.232 bytes · CRC32 80B4C1DE (sin cabecera: 393.216 bytes, CRC32 D343C66A, los mismos que pide el readme de BlackPaladin). Cada IPS va sobre esa ROM japonesa limpia, no sobre la v1.03 ya traducida, y da una ROM de 524.304 bytes. El guardado usa la EEPROM 24C02 del chip de Bandai, declarada en la cabecera (mapper 16, submapper 5); Mesen emula esa EEPROM. En un emulador sin ella, CONTINUE funciona como en el original, con la contraseña. Sirve con Flips, Lunar IPS o ROM Patcher JS.")
  },

  /* Legendas só com o que se vê (DIRETOR.md): 06 sem "grava no cartucho", 08 sem "A compra, B desiste". */
  fotos: [
    { f: 'fj1/01-tela-da-edicao-en.png', t: bi('Tela da edição', 'Edition screen', 'Pantalla de la edición'),
      c: bi("O Shenron e as esferas na moldura e, no painel, <code>DEFINITIVE EDITION</code>, a versão, o crédito <code>TRANSLATION: BLACKPALADIN &amp; PATCH CLAN</code> e <code>WWW.PATCHCLAN.COM</code>. Aparece antes do título e pula com A ou START.",
           "Shenron and the Dragon Balls around the frame and, on the panel, <code>DEFINITIVE EDITION</code>, the version, the credit <code>TRANSLATION: BLACKPALADIN &amp; PATCH CLAN</code> and <code>WWW.PATCHCLAN.COM</code>. It shows before the title and A or START skips it.",
           "Shenron y las esferas en el marco y, en el panel, <code>DEFINITIVE EDITION</code>, la versión, el crédito <code>TRANSLATION: BLACKPALADIN &amp; PATCH CLAN</code> y <code>WWW.PATCHCLAN.COM</code>. Aparece antes del título y se salta con A o START.") },
    { f: 'fj1/02-shenron-antes-depois.png', t: bi('O pedido ao Shenron', 'The wish to Shenron', 'El deseo a Shenron'),
      c: bi("À esquerda, na v1.03, o Shenron surge e a caixa de fala sai vazia. À direita, a mesma cena com «Revive our friends!».",
           "Left, in v1.03, Shenron appears and the text box comes out empty. Right, the same scene with «Revive our friends!».",
           "A la izquierda, en la v1.03, aparece Shenron y la caja de diálogo sale vacía. A la derecha, la misma escena con «Revive our friends!».") },
    { f: 'fj1/03-caixa-17-22-letras.png', t: bi('17 e 22 letras', '17 and 22 letters', '17 y 22 letras'),
      c: bi("A mesma fala da abertura nas duas larguras. Em cima, a v1.03: «King Piccolo is / about to conquer / Jump World!». Embaixo, a caixa de 22 letras: «King Piccolo is about / to conquer / Jump World!».",
           "The same opening line at both widths. Top, v1.03: «King Piccolo is / about to conquer / Jump World!». Bottom, the 22-letter box: «King Piccolo is about / to conquer / Jump World!».",
           "La misma línea de la introducción en los dos anchos. Arriba, la v1.03: «King Piccolo is / about to conquer / Jump World!». Abajo, la caja de 22 letras: «King Piccolo is about / to conquer / Jump World!».") },
    { f: 'fj1/04-portugues-em-jogo.png', t: bi('Em português', 'In Portuguese', 'En portugués'),
      c: bi("Uma conversa na ROM em português: «Ah, meu Bastão Mágico! Valeu! Pra agradecer, vou te dar uma força!» e, na caixa de baixo, «Ganhou a Máquina de Histórias! Entra em livros.».",
           "A conversation on the Portuguese ROM: «Ah, meu Bastão Mágico! Valeu! Pra agradecer, vou te dar uma força!» and, in the lower box, «Ganhou a Máquina de Histórias! Entra em livros.».",
           "Una conversación en la ROM en portugués: «Ah, meu Bastão Mágico! Valeu! Pra agradecer, vou te dar uma força!» y, en la caja de abajo, «Ganhou a Máquina de Histórias! Entra em livros.».") },
    { f: 'fj1/05-espanhol-karin.png', t: bi('Em espanhol', 'In Spanish', 'En español'),
      c: bi("O treino do Karin na ROM em espanhol: o retrato do Karin, «Entreno Karin», «Tiempo» e «Capturas», e o salão de colunas embaixo.",
           "Karin's training on the Spanish ROM: Karin's portrait, «Entreno Karin», «Tiempo» and «Capturas», and the hall of columns below.",
           "El entrenamiento de Karin en la ROM en español: el retrato de Karin, «Entreno Karin», «Tiempo» y «Capturas», y el salón de columnas abajo.") },
    { f: 'fj1/06-continue-com-senha.png', t: bi('A senha no campo', 'The password, filled in', 'La contraseña en el campo'),
      c: bi("A tela «What was your password?» com os 40 caracteres já no campo e o cursor no fim. Na segunda linha da grade, os símbolos ♥ ★ ● ▲.",
           "The «What was your password?» screen with all 40 characters already in the field and the cursor at the end. On the grid's second row, the symbols ♥ ★ ● ▲.",
           "La pantalla «What was your password?» con los 40 caracteres ya en el campo y el cursor al final. En la segunda fila de la cuadrícula, los símbolos ♥ ★ ● ▲.") },
    { f: 'fj1/07-loja-nova.png', t: bi('A loja', 'The shop', 'La tienda'),
      c: bi("O preço, 100, em cima de cada item e o nome ao lado do desenho: Love Potion, Air Car, Dragon Radar e Kinto'un. Embaixo, «Buy what?» e 10000 Zeni.",
           "The price, 100, above each item and the name beside the picture: Love Potion, Air Car, Dragon Radar and Kinto'un. Below, «Buy what?» and 10000 Zeni.",
           "El precio, 100, arriba de cada objeto y el nombre al lado del dibujo: Love Potion, Air Car, Dragon Radar y Kinto'un. Abajo, «Buy what?» y 10000 Zeni.") },
    { f: 'fj1/08-aviso-compra-repetida.png', t: bi('Já é seu', 'Already yours', 'Ya es tuyo'),
      c: bi("A Cola no primeiro espaço da loja e o aviso «Cola is already yours! 100 Zeni, sir».",
           "Cola in the shop's first slot and the warning «Cola is already yours! 100 Zeni, sir».",
           "La Cola en el primer espacio de la tienda y el aviso «Cola is already yours! 100 Zeni, sir».") },
    { f: 'fj1/09-batalha-final-aviso.png', t: bi('Antes da batalha final', 'Before the final battle', 'Antes de la batalla final'),
      c: bi("O retrato do Jaki e a caixa «Run again: wins are lost» sobre o menu Fight / Run. Embaixo, o caminho até o castelo, com o marcador GOAL.",
           "Jaki's portrait and the box «Run again: wins are lost» over the Fight / Run menu. Below, the path to the castle, with the GOAL marker.",
           "El retrato de Jaki y la caja «Run again: wins are lost» sobre el menú Fight / Run. Abajo, el camino al castillo, con el marcador GOAL.") }
  ]
};
