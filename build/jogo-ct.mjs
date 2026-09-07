export const CT = {
  slug: 'captain-tsubasa',
  nome: 'Captain Tsubasa',
  subtitulo: 'Tecmo Theater Vol. 1',
  jp: 'キャプテン翼',
  publisher: 'Tecmo', dev: 'Tecmo', ano: 1988, data: '1988',
  sistema: 'Famicom', mapper: 'MMC1 · 128 KB PRG expanded to 256 KB · 128 KB CHR-ROM',
  categoria: { pt:'Tradução + melhorias', en:'Translation + improvement', es:'Traducción + mejoras' },
  nivel: 'release',
  capa: 'ct/01-titulo.png',
  linha: {
    pt: 'O futebol que é quase um RPG. Existiam <b>dezesseis letras latinas</b> no cartucho inteiro — as outras tiveram de ser desenhadas do nada.',
    en: 'The football game that is almost an RPG. There were <b>sixteen Latin letters</b> in the entire cartridge — the rest had to be drawn from nothing.'
  },
  resumo: {
    pt: [
      'O jogo que inventou o futebol por menu: você não controla o chute, você escolhe a ação e vê a animação decidir. Cada jogador tem <b>Guts</b>, e cada drible, passe e finalização gasta.',
      'Nesta tradução o jogo também <b>ganhou memória</b>: o original só guardava progresso por senha, e agora ele grava em bateria — sem inventar formato de save nenhum.'
    ],
    en: [
      'The game that invented menu-driven football: you do not control the shot, you pick the action and watch the animation decide. Every player has <b>Guts</b>, and every dribble, pass and shot spends them.',
      'In this translation the game also <b>gained a memory</b>: the original only kept progress by password, and now it writes to battery-backed save — without inventing any save format at all.'
    ]
  },
  numeros: [
    { v: '1,001', r: { pt: 'itens de texto inseridos', en: 'text items inserted' } },
    { v: '1,177', r: { pt: 'ponteiros corrigidos', en: 'pointers corrected' } },
    { v: '16', r: { pt: 'letras latinas existiam', en: 'Latin letters existed' } },
    { v: '0', r: { pt: 'bytes divergentes em 225 dumps', en: 'bytes differing across 225 dumps' } }
  ],
  grupos: [
    { titulo: { pt: 'A tradução', en: 'The translation' }, itens: [
      { t: { pt: '<b>1.001 itens de texto</b> em inglês, com <b>1.177 ponteiros</b> recalculados', en: '<b>1,001 text items</b> in English, with <b>1,177 pointers</b> recalculated' }, foto: 'ct/03-narrador.png' },
      { t: { pt: '<b>Fonte inglesa nova de 74 tiles.</b> No cartucho inteiro existiam exatamente <b>dezesseis letras latinas</b> — <code>ACDEFGHIKMRSUVWY</code>. As outras dez, mais as minúsculas e a pontuação, não existiam em lugar nenhum e tiveram de ser desenhadas do zero, casando com tipos feitos para kana.', en: '<b>A new 74-tile English font.</b> Across the entire cartridge there were exactly <b>sixteen Latin letters</b> — <code>ACDEFGHIKMRSUVWY</code>. The other ten, plus the lower case and the punctuation, did not exist anywhere and had to be drawn from nothing, matched to typefaces designed for kana.' } },
      { t: { pt: '<b>Três fontes em três bancos gráficos diferentes</b>, que não concordam entre si — a do campo, a da sala de aula e a da senha.', en: '<b>Three separate fonts living in three different graphics banks</b>, none of which agree with each other — the pitch, the classroom and the password screen.' }, foto: 'ct/02-sala.png' },
      { t: { pt: '<b>Ficha do jogador em inglês</b> — Level, Max Guts, Run, Pass, Shoot, Steal, Cut, Mark', en: '<b>Player cards in English</b> — Level, Max Guts, Run, Pass, Shoot, Steal, Cut, Mark' }, foto: 'ct/04-ficha.png' }
    ]},
    { titulo: { pt: 'Duas fileiras onde havia uma', en: 'Two rows where there was one' }, itens: [
      { t: { pt: 'O motor de texto do campo escrevia <b>uma fileira</b> por linha de roteiro: 14 e 18 colunas. Um código de controle novo faz cada linha ocupar <b>duas fileiras</b> — <b>28 e 36 colunas</b> — sem mexer no roteiro, na moldura, nem na contagem de linhas. É o que dá espaço para a narração inglesa caber sem virar telegrama.', en: 'The pitch text engine wrote <b>one row</b> per script line: 14 and 18 columns. A new control code makes each line occupy <b>two rows</b> — <b>28 and 36 columns</b> — without touching the script, the frame, or the line count. It is what lets English commentary fit without turning into a telegram.' }, foto: 'ct/03-narrador.png' },
      { t: { pt: '<b>Senha latinizada e aceita.</b> A grade virou letras latinas maiúsculas, minúsculas e dígitos, e a senha gerada passa pela rotina de validação original do jogo.', en: '<b>The password screen latinised, and accepted.</b> The grid became Latin capitals, lower case and digits, and a generated password passes the game’s own validation routine.' }, foto: 'ct/06-senha.png' }
    ]},
    { titulo: { pt: 'Um save que o jogo não tinha', en: 'A save the game never had' }, itens: [
      { t: { pt: 'O original de 1988 guarda progresso <b>só por senha</b>. Agora o jogo <b>grava em bateria</b>: salva ao abrir o <code>SCORE MEMO</code> do técnico e carrega no <code>CONTINUE</code> da tela de título.', en: 'The 1988 original keeps progress <b>by password only</b>. Now the game <b>writes to battery-backed save</b>: it saves when you open the coach’s <code>SCORE MEMO</code> and loads on <code>CONTINUE</code> at the title screen.' }, foto: 'ct/07-memo.png' },
      { t: { pt: '<b>Nada de serialização nova.</b> O estado guardado é exatamente o que a senha já guardava — os mesmos 24 bytes — provado por duas rotinas independentes do próprio jogo. A integridade usa <b>a mesma rotina que valida senha digitada</b>.', en: '<b>No new serialisation.</b> The state saved is exactly what the password already carried — the same 24 bytes — proved against two independent routines in the game itself. Integrity checking uses <b>the same routine that validates a typed password</b>.' }, foto: 'ct/08-save.png' },
      { t: { pt: 'São <b>97 bytes</b> de código novo em seis lugares. Testado desligando e ligando de verdade, com dois processos de emulador e um <code>.sav</code> real no meio: <b>0 de 4.096 bytes</b> de nametable diferentes depois do ciclo. Negativos cobertos: sem save, save corrompido em 1 bit, bateria gasta, e começar jogo novo sem apagar o save.', en: 'It is <b>97 bytes</b> of new code in six places. Tested by really powering off and on, with two emulator processes and a real <code>.sav</code> in between: <b>0 of 4,096 bytes</b> of nametable differ after the cycle. Negatives covered: no save, save corrupted by one bit, dead battery, and starting a new game without erasing the save.' } }
    ]},
    { titulo: { pt: 'Os logos', en: 'The logos' }, itens: [
      { t: { pt: '<b>Logo do título redesenhado</b> — <code>CAPTAIN TSUBASA</code> em duas linhas, no mesmo estilo e na mesma paleta, com a bola redesenhada e o avião movido para o canto. São <b>122 tiles</b> nos 127 disponíveis, e a tela reconstruída da ROM bate com o mockup em <b>0 pixels</b> de diferença.', en: '<b>The title logo redrawn</b> — <code>CAPTAIN TSUBASA</code> on two lines, in the same style and palette, with the ball redrawn and the aeroplane moved to the corner. It is <b>122 tiles</b> in the 127 available, and the screen reconstructed from the ROM matches the mockup at <b>0 pixels</b> of difference.' }, foto: 'ct/01-titulo.png' },
      { t: { pt: '<b>O logo pequeno da sala de aula</b>, feito de 13 sprites, redesenhado como <code>TSUBASA</code> em miniatura — só os bitmaps mudam, as posições são as do jogo.', en: '<b>The small classroom logo</b>, made of 13 sprites, redrawn as a miniature <code>TSUBASA</code> — only the bitmaps change, the positions are the game’s own.' } }
    ]},
    { titulo: { pt: 'Como se provou que nada quebrou', en: 'How it was proved nothing broke', es: 'Cómo se probó que nada se rompió' }, itens: [
      { t: { pt: '<b>A relocação foi provada por igualdade.</b> Uma build que só move o texto japonês, sem traduzir nada, foi comparada com a ROM original: <b>225 dumps, 0 bytes diferentes</b> em nametable, OAM e paleta no percurso inteiro. Se mover o texto tivesse quebrado alguma coisa, essa build já mostraria.',
             en: '<b>Relocation was proved by equality.</b> A build that only moves the Japanese text, translating nothing, was compared against the original ROM: <b>225 dumps, 0 bytes differing</b> in nametable, OAM and palette across the whole run. If moving the text had broken anything, that build would already show it.',
             es: '<b>La reubicación se probó por igualdad.</b> Una build que solo mueve el texto japonés, sin traducir nada, se comparó con la ROM original: <b>225 volcados, 0 bytes distintos</b> en nametable, OAM y paleta en todo el recorrido. Si mover el texto hubiera roto algo, esa build ya lo mostraría.' } },
      { t: { pt: '<b>Dois defeitos reais só apareceram nesse teste</b>, e não em nenhum outro: uma rotina que trocava de banco por byte estourava o quadro e fazia sumir uma linha do torneio, e uma string que mora na RAM — e que o jogo <b>escreve</b> — fazia os números das camisas saírem errados. Nenhum dos dois apareceria numa leitura de código.',
             en: '<b>Two real defects showed up only in that test</b>, and in no other: a routine switching banks byte by byte overran the frame and made a line of the tournament vanish, and a string that lives in RAM — and that the game <b>writes to</b> — made the shirt numbers come out wrong. Neither would have shown up in a code review.',
             es: '<b>Dos defectos reales aparecieron solo en esa prueba</b>, y en ninguna otra: una rutina que cambiaba de banco byte a byte desbordaba el cuadro y hacía desaparecer una línea del torneo, y una string que vive en la RAM — y que el juego <b>escribe</b> — hacía que los números de las camisetas salieran mal. Ninguno habría aparecido leyendo el código.' } },
      { t: { pt: 'O save novo foi testado <b>desligando e ligando de verdade</b>, com dois processos de emulador e um arquivo de save real de permeio — não com savestate, que não prova bateria nenhuma.',
             en: 'The new save was tested by <b>really powering off and on</b>, with two emulator processes and a real save file in between — not with a savestate, which proves nothing about a battery.',
             es: 'El guardado nuevo se probó <b>apagando y encendiendo de verdad</b>, con dos procesos de emulador y un archivo de guardado real de por medio — no con un savestate, que no prueba nada sobre la pila.' } }
    ]}
  ],
  patch: { versoes: { en: { arquivo: 'captain-tsubasa-en.ips' }, pt: null, es: null }, rom: 'Captain Tsubasa (Japan).nes', rom_md5: 'eeb77e6e0e0b5695f9a35f47979c4722' },
  fotos: [
    { f: 'ct/01-titulo.png', t: { pt: 'Tela de título', en: 'Title screen' }, c: { pt: 'O logo redesenhado em 122 tiles, com a bola nova e o avião no canto.', en: 'The logo redrawn in 122 tiles, with the new ball and the aeroplane in the corner.' } },
    { f: 'ct/03-narrador.png', t: { pt: 'Narração', en: 'Commentary' }, c: { pt: 'Quatro linhas onde cabiam duas: o código de controle novo dobra a largura útil.', en: 'Four lines where two used to fit: the new control code doubles the usable width.' } },
    { f: 'ct/02-sala.png', t: { pt: 'Sala de aula', en: 'Classroom' }, c: { pt: 'O menu do técnico — <code>SCOUT</code>, <code>MEMO</code>, <code>PLAY</code> — e a segunda fonte do jogo.', en: 'The coach’s menu — <code>SCOUT</code>, <code>MEMO</code>, <code>PLAY</code> — and the game’s second font.' } },
    { f: 'ct/04-ficha.png', t: { pt: 'Ficha do jogador', en: 'Player card' }, c: { pt: 'Level, Max Guts e os seis atributos, com a lista do elenco ao lado.', en: 'Level, Max Guts and the six stats, with the squad list beside it.' } },
    { f: 'ct/05-jogo.png', t: { pt: 'Em jogo', en: 'In play' }, c: { pt: 'O menu de ação durante a partida, com o Guts descendo a cada jogada.', en: 'The action menu during a match, with Guts draining on every play.' } },
    { f: 'ct/06-senha.png', t: { pt: 'Senha', en: 'Password' }, c: { pt: 'A grade latinizada — e a senha gerada passa na validação original do jogo.', en: 'The latinised grid — and a generated password passes the game’s own validation.' } },
    { f: 'ct/07-memo.png', t: { pt: 'Score Memo', en: 'Score Memo' }, c: { pt: 'O instante em que o jogo grava: a Sanae dá a senha, e o save vai junto.', en: 'The moment the game saves: Sanae reads out the password, and the save goes with it.' } },
    { f: 'ct/08-save.png', t: { pt: 'Carregado da bateria', en: 'Loaded from battery' }, c: { pt: 'Depois de desligar e ligar de verdade — <code>16th All-Japan Jr. Cup</code>, exatamente onde parou.', en: 'After a real power cycle — <code>16th All-Japan Jr. Cup</code>, exactly where it stopped.' } }
  ]
};
