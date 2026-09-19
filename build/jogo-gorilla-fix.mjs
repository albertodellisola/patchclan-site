const bi = (pt, en, es) => ({ pt, en, es });

/* O primeiro Hacks/Fixes (19/09/2026): o cartucho japonês com os dois bugs de fábrica
   corrigidos e NADA mais — sem tradução, sem save, sem tela de créditos. O patch sai de
   ~/gorilla-hack/scripts/constroi_bugfix.py (que confere o IPS byte a byte); a tradução
   inglesa, que já traz os mesmos dois consertos, é a ficha `gorilla-man`. */
export const GORILLA_FIX = {
  slug: 'gorilla-man-bugfix',
  tipo: 'hack',
  nome: 'The Gorilla Man',
  subtitulo: 'Bugfix',
  jp: 'ゴリラーマン',
  publisher: 'Yonezawa / S’Pal', dev: 'Party Room 21', ano: 1992, data: '1992',
  sistema: 'Famicom', mapper: 'MMC3 · 512 KB · CHR-RAM de 8 KB',
  categoria: bi('Correção de bugs', 'Bug fix', 'Corrección de errores'),
  nivel: 'release',
  versao: 'Bugfix v1.0',
  capa: 'gorilla/00-capa-patreon.jpg',
  linha: bi('O cartucho japonês de 1992 sem os dois bugs que impediam de terminar a partida. O jogo continua todo em japonês.',
            'The 1992 Japanese cartridge minus the two bugs that kept a game from reaching its end. Everything stays in Japanese.',
            'El cartucho japonés de 1992 sin los dos fallos que impedían terminar la partida. Todo sigue en japonés.'),
  resumo: {
    pt: [
      'Este patch é para quem quer jogar <i>The Gorilla Man</i> <b>em japonês, como saiu em 1992</b>, e chegar ao fim. Ele não traduz nada e não acrescenta nada: sem save, sem tela nova, sem texto trocado. Muda só o que impedia o cartucho de ser terminado. São <b>34 bytes</b>, em seis pontos da ROM.',
      '<b>1. Dois dos três cenários congelavam no final.</b> Em 「退学なんていやだ！」 e 「謎の美少女」, depois da ilustração do final, o jogo travava ao apertar A. Nenhum emulador contornava: ignorar a instrução inválida só dava tela preta. Só 「めざせ！白武高校革命」 chegava ao fim. A causa: para escrever a última fala, a rotina de fim de partida troca de banco de memória e volta <b>sem religar o banco de onde veio</b>. O retorno cai no meio de outro código e a CPU acaba num byte que não é instrução. Com o patch, a rotina religa o banco antes de voltar, e os três cenários terminam e voltam à tela de título.',
      '<b>2. Um jogador com HP 0 encerrava a partida de todos.</b> Bastava um personagem zerar a vida, num evento ou num minijogo, para a partida acabar para os seis, com uma tela de GAME OVER que não sai nem com A nem com START, só com reset. O cartucho desenha essa tela com capricho, então pode ter sido de propósito. Mas ela tira o jogo de quem estava vivo, e o relato de quem jogou é de bug. Com o patch, a vida continua podendo chegar a zero e todo o resto das regras fica igual. Só não se liga mais a flag que encerrava a partida (quatro pontos: o tabuleiro e as três cópias do motor de minijogo).',
      'Quer o jogo em inglês? A <a href="#/jogo/gorilla-man">tradução do Patch Clan</a> já traz estes dois consertos. Não aplique os dois patches juntos: cada um vai sobre a ROM japonesa original.'
    ],
    en: [
      'This patch is for anyone who wants to play <i>The Gorilla Man</i> <b>in Japanese, as it shipped in 1992</b>, and actually reach the end. It translates nothing and adds nothing: no save, no new screen, no text changed. It only changes what kept the cartridge from being finished. That is <b>34 bytes</b>, in six places in the ROM.',
      '<b>1. Two of the three scenarios froze at the ending.</b> In 「退学なんていやだ！」 and 「謎の美少女」, after the ending illustration, the game locked up when you pressed A. Emulators could not get around it either: skipping the invalid instruction only gave a black screen. Only 「めざせ！白武高校革命」 made it to the end. The cause: to print the last line, the end-of-game routine switches memory banks and returns <b>without switching back the bank it came from</b>. The return lands in the middle of other code and the CPU ends up on a byte that is not an instruction. With the patch, the routine restores the bank before returning, and all three scenarios end and go back to the title screen.',
      '<b>2. One player at 0 HP ended the game for everyone.</b> A single character running out of HP, in an event or a minigame, was enough to end the match for all six, with a GAME OVER screen that A and START cannot leave, only reset. The cartridge draws that screen with care, so it may have been intentional. But it throws out the players who were still standing, and people who played it report it as a bug. With the patch, HP can still reach zero and every other rule stays the same. The flag that ended the match is simply never set (in four places: the board and the three copies of the minigame engine).',
      'Want the game in English? The <a href="#/jogo/gorilla-man">Patch Clan translation</a> already includes both fixes. Do not stack the two patches: each one goes on the original Japanese ROM.'
    ],
    es: [
      'Este parche es para quien quiere jugar <i>The Gorilla Man</i> <b>en japonés, tal como salió en 1992</b>, y llegar al final. No traduce nada ni añade nada: sin guardado, sin pantalla nueva, sin texto cambiado. Solo cambia lo que impedía terminar el cartucho. Son <b>34 bytes</b>, en seis puntos de la ROM.',
      '<b>1. Dos de los tres escenarios se congelaban en el final.</b> En 「退学なんていやだ！」 y 「謎の美少女」, después de la ilustración del final, el juego se colgaba al pulsar A. Los emuladores tampoco lo salvaban: ignorar la instrucción inválida solo daba pantalla negra. Solo 「めざせ！白武高校革命」 llegaba al final. La causa: para escribir la última frase, la rutina de fin de partida cambia de banco de memoria y vuelve <b>sin restaurar el banco del que venía</b>. El retorno cae en medio de otro código y la CPU acaba en un byte que no es instrucción. Con el parche, la rutina restaura el banco antes de volver, y los tres escenarios terminan y regresan a la pantalla de título.',
      '<b>2. Un jugador con 0 de vida acababa la partida de todos.</b> Bastaba con que un personaje se quedara sin vida, en un evento o en un minijuego, para que la partida terminara para los seis, con una pantalla de GAME OVER de la que no se sale ni con A ni con START, solo con reset. El cartucho dibuja esa pantalla con cuidado, así que pudo ser intencionado. Pero deja fuera a quien seguía en pie, y quien lo jugó lo describe como fallo. Con el parche, la vida puede seguir llegando a cero y todas las demás reglas se mantienen. Solo deja de activarse la bandera que terminaba la partida (en cuatro puntos: el tablero y las tres copias del motor de minijuegos).',
      '¿Quieres el juego en inglés? La <a href="#/jogo/gorilla-man">traducción de Patch Clan</a> ya trae estos dos arreglos. No apliques los dos parches juntos: cada uno va sobre la ROM japonesa original.'
    ]
  },
  numeros: [
    { v: '2', r: bi('bugs de fábrica corrigidos', 'factory bugs fixed', 'fallos de fábrica corregidos') },
    { v: '34', r: bi('bytes mudados, e só eles', 'bytes changed, and only those', 'bytes cambiados, y solo esos') },
    { v: '3/3', r: bi('finais alcançáveis (eram 1 de 3)', 'endings reachable (it was 1 of 3)', 'finales alcanzables (era 1 de 3)') },
    { v: '0', r: bi('textos traduzidos: o jogo é o japonês', 'texts translated: the game stays Japanese', 'textos traducidos: el juego sigue en japonés') }
  ],
  grupos: [
    { titulo: bi('O que foi corrigido, em detalhe', 'What was fixed, in detail', 'Qué se corrigió, en detalle'), itens: [
      { t: bi('<b>Final dos cenários 1 e 2.</b> O fim de partida entra pelo banco 60 e salta para o tratador em <code>$D71D</code>. Para imprimir a fala, ele liga os bancos 20/21 (<code>LDA #$0A / JSR $C252</code>) e termina em <code>$D7F1</code> com <code>LDA #$00 / STA $62 / RTS</code>, sem devolver o par 60/61. O <code>RTS</code> cai em <code>$806C</code> do banco 20, no meio de uma instrução, a pilha fica desalinhada e o jogo termina num <code>JAM</code> em <code>$BA08</code>. O cenário 3 escapa porque carrega outra cena antes desse retorno. <b>Conserto:</b> <code>$D7F1</code> vira <code>JMP $FFA4</code>, num trecho vazio do banco fixo, que faz o mesmo <code>LDA/STA</code> e religa o par 60/61 por <code>$C252</code> antes do <code>RTS</code> (com <code>PHP/PLP</code> para devolver os flags como no original).',
              '<b>Ending of scenarios 1 and 2.</b> The end of the match comes in through bank 60 and jumps to the handler at <code>$D71D</code>. To print the line, it maps banks 20/21 (<code>LDA #$0A / JSR $C252</code>) and ends at <code>$D7F1</code> with <code>LDA #$00 / STA $62 / RTS</code>, without restoring the 60/61 pair. The <code>RTS</code> lands at <code>$806C</code> in bank 20, in the middle of an instruction, the stack goes out of step and the game ends on a <code>JAM</code> at <code>$BA08</code>. Scenario 3 escapes because it loads another scene before that return. <b>Fix:</b> <code>$D7F1</code> becomes <code>JMP $FFA4</code>, in an empty stretch of the fixed bank, which does the same <code>LDA/STA</code> and maps the 60/61 pair back through <code>$C252</code> before the <code>RTS</code> (with <code>PHP/PLP</code> so the flags come back as in the original).',
              '<b>Final de los escenarios 1 y 2.</b> El fin de partida entra por el banco 60 y salta al manejador en <code>$D71D</code>. Para escribir la frase, activa los bancos 20/21 (<code>LDA #$0A / JSR $C252</code>) y termina en <code>$D7F1</code> con <code>LDA #$00 / STA $62 / RTS</code>, sin devolver el par 60/61. El <code>RTS</code> cae en <code>$806C</code> del banco 20, en medio de una instrucción, la pila se desalinea y el juego acaba en un <code>JAM</code> en <code>$BA08</code>. El escenario 3 se salva porque carga otra escena antes de ese retorno. <b>Arreglo:</b> <code>$D7F1</code> pasa a ser <code>JMP $FFA4</code>, en un tramo vacío del banco fijo, que hace el mismo <code>LDA/STA</code> y vuelve a activar el par 60/61 por <code>$C252</code> antes del <code>RTS</code> (con <code>PHP/PLP</code> para devolver los flags como en el original).') },
      { t: bi('<b>HP 0.</b> A conta que tira vida (<code>$EBCA</code> no banco fixo e as cópias do motor de minijogo nos bancos 23, 51 e 57) faz <code>SBC</code> e, se der zero, <code>LDA #$01 / STA $04A8</code>. Quem lê <code>$04A8</code> salta para a cena <code>$1B</code> do jogador zerado, e daí para o fim da partida. <b>Conserto:</b> esses 5 bytes viram <code>NOP</code> nos quatro lugares. A vida ainda vai a 0. Nada mais na ROM escreve em <code>$04A8</code> (varredura de <code>STA/INC/STX/STY</code>), e quem lê a flag só testa se é diferente de zero.',
              '<b>HP 0.</b> The HP subtraction (<code>$EBCA</code> in the fixed bank and the minigame engine copies in banks 23, 51 and 57) does <code>SBC</code> and, on zero, <code>LDA #$01 / STA $04A8</code>. Whatever reads <code>$04A8</code> jumps to scene <code>$1B</code> for the fallen player, and from there to the end of the match. <b>Fix:</b> those 5 bytes become <code>NOP</code> in all four places. HP still reaches 0. Nothing else in the ROM writes <code>$04A8</code> (a sweep for <code>STA/INC/STX/STY</code>), and every reader only tests it for non-zero.',
              '<b>HP 0.</b> La resta de vida (<code>$EBCA</code> en el banco fijo y las copias del motor de minijuegos en los bancos 23, 51 y 57) hace <code>SBC</code> y, si da cero, <code>LDA #$01 / STA $04A8</code>. Quien lee <code>$04A8</code> salta a la escena <code>$1B</code> del jugador caído, y de ahí al fin de la partida. <b>Arreglo:</b> esos 5 bytes pasan a <code>NOP</code> en los cuatro sitios. La vida sigue llegando a 0. Nada más en la ROM escribe en <code>$04A8</code> (barrido de <code>STA/INC/STX/STY</code>), y quien lee la bandera solo comprueba si es distinta de cero.') }
    ]},
    { titulo: bi('Como foi conferido', 'How it was checked', 'Cómo se comprobó'), itens: [
      { t: bi('<b>Os dois bugs foram reproduzidos na ROM japonesa original</b>, pelo mesmo robô que joga pelas regras do jogo: os cenários 1 e 2 travaram em <code>$BA08</code> logo depois da ilustração do final, e com vida 1 nos seis personagens o primeiro a zerar levou todos ao GAME OVER.',
              '<b>Both bugs were reproduced on the original Japanese ROM</b>, by the same bot that plays by the game’s rules: scenarios 1 and 2 locked up at <code>$BA08</code> right after the ending illustration, and with 1 HP on all six characters the first to fall took everyone to GAME OVER.',
              '<b>Los dos fallos se reprodujeron en la ROM japonesa original</b>, con el mismo robot que juega según las reglas del juego: los escenarios 1 y 2 se colgaron en <code>$BA08</code> justo después de la ilustración del final, y con 1 de vida en los seis personajes el primero en caer llevó a todos al GAME OVER.') },
      { t: bi('<b>Os consertos são os da tradução, byte a byte.</b> Os mesmos dois consertos estão na tradução inglesa do Patch Clan, que foi jogada até os três finais desde o power-on, com a vida zerada em todos os personagens numa partida inteira sem fim precoce. Este patch aplica só eles sobre a ROM japonesa: fora esses 34 bytes, a ROM é idêntica à original, e o IPS aplicado reproduz a ROM consertada byte a byte.',
              '<b>The fixes are the translation’s, byte for byte.</b> The same two fixes are in the Patch Clan English translation, which was played to all three endings from power-on, including a full match with every character at 0 HP and no early end. This patch applies only them on the Japanese ROM: apart from those 34 bytes the ROM is identical to the original, and the IPS reproduces the fixed ROM byte for byte.',
              '<b>Los arreglos son los de la traducción, byte a byte.</b> Los mismos dos arreglos están en la traducción inglesa de Patch Clan, que se jugó hasta los tres finales desde el encendido, incluida una partida entera con la vida a cero en todos los personajes y sin final anticipado. Este parche aplica solo esos arreglos sobre la ROM japonesa: fuera de esos 34 bytes, la ROM es idéntica a la original, y el IPS reproduce la ROM corregida byte a byte.') }
    ]}
  ],
  patch: {
    versoes: { jp: { arquivo: 'gorilla-man-bugfix.ips' } },
    rom: 'Gorilla Man, The (Japan).nes',
    rom_md5: '2377df3f6909fa9fd858ab03791e8db9',
    nota: bi('ROM com cabeçalho iNES, 524.304 bytes · CRC32 218EAA50 (sem cabeçalho: CRC32 9FD718FD, SHA-1 d477320dc99b294b5d26995f1527eca0233f2f46). Depois do patch: MD5 a56c1a3e679aa61b143e1ccebdfab6aa. Serve em Flips, Lunar IPS ou ROM Patcher JS.',
             'Headered iNES ROM, 524,304 bytes · CRC32 218EAA50 (headerless: CRC32 9FD718FD, SHA-1 d477320dc99b294b5d26995f1527eca0233f2f46). After patching: MD5 a56c1a3e679aa61b143e1ccebdfab6aa. Works with Flips, Lunar IPS or ROM Patcher JS.',
             'ROM con cabecera iNES, 524.304 bytes · CRC32 218EAA50 (sin cabecera: CRC32 9FD718FD, SHA-1 d477320dc99b294b5d26995f1527eca0233f2f46). Tras el parche: MD5 a56c1a3e679aa61b143e1ccebdfab6aa. Sirve con Flips, Lunar IPS o ROM Patcher JS.')
  },
  fotos: [
    { f: 'gorilla-fix/01-final-cenario1.png', t: bi('Final do cenário 1', 'Scenario 1 ending', 'Final del escenario 1'),
      c: bi('Onde o cartucho congelava. Com o patch, o jogo segue até a tela de título.', 'Where the cartridge froze. With the patch, the game carries on to the title screen.', 'Donde el cartucho se congelaba. Con el parche, el juego sigue hasta la pantalla de título.') },
    { f: 'gorilla-fix/02-final-cenario2.png', t: bi('Final do cenário 2', 'Scenario 2 ending', 'Final del escenario 2'),
      c: bi('O segundo final que travava. Também chega à tela de título.', 'The second ending that froze. It also reaches the title screen.', 'El segundo final que se colgaba. También llega a la pantalla de título.') },
    { f: 'gorilla-fix/03-final-cenario3.png', t: bi('Final do cenário 3', 'Scenario 3 ending', 'Final del escenario 3'),
      c: bi('A eleição: o único final que o cartucho original deixava ver.', 'The election: the only ending the original cartridge let you see.', 'La elección: el único final que dejaba ver el cartucho original.') }
  ]
};
