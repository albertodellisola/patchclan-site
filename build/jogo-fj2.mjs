export const FJ2 = {
  slug: 'famicom-jump-2',
  nome: 'Famicom Jump II',
  subtitulo: 'Saikyou no 7 Nin',
  jp: 'ファミコンジャンプII 最強の7人',
  traducao_titulo: 'The Strongest Seven',
  publisher: 'Bandai', dev: 'Chunsoft', ano: 1991, data: '2 December 1991',
  sistema: 'Famicom', mapper: 'Mapper 153 (Bandai FCG) · 512 KB PRG · CHR-RAM · battery SRAM',
  primeiro: true,
  categoria: { pt:'Tradução + melhorias', en:'Translation + improvement', es:'Traducción + mejoras' },
  destaque: true,
  nivel: 'release',
  capa: 'fj2/01-tela-titulo.png',
  linha: {
    pt: 'O crossover de sete séries da Shōnen Jump. Nunca saiu do Japão, e nunca teve tradução — até agora.',
    en: 'The seven-series Shōnen Jump crossover. It never left Japan, and never had a translation — until now.'
  },
  resumo: {
    pt: [
      'RPG tático da Bandai com Goku, JoJo, o Ryotsu do Kochikame, Taruruto-kun, Tar-chan, Momotaro e Taison dividindo o mesmo campo de batalha. Três dos sete lutam por vez, a vida se conta em corações, e o alcance de caminhada é um atributo que sobe de nível. O próprio manual chama o sistema de <b>S·A·S, Simulation Action System</b>.',
      'O roteiro inteiro em inglês: <b>1.903 mensagens</b>, sem resumir e sem cortar frase. Foi a primeira tradução do Patch Clan, e continua sendo a única tradução inglesa deste jogo que consegui encontrar.'
    ],
    en: [
      "Bandai's tactical RPG, with Goku, JoJo, Kochikame's Ryotsu, Taruruto-kun, Tar-chan, Momotaro and Taison sharing one battlefield. Three of the seven fight at a time, health is counted in hearts, and walking range is a stat that levels up. The manual itself calls the system <b>S·A·S, Simulation Action System</b>.",
      "The whole script in English: <b>1,903 messages</b>, nothing summarised, nothing cut. It was Patch Clan's first translation, and as far as I can establish it is still the only English patch of this game that exists."
    ]
  },
  numeros: [
    { v: '1,903', r: { pt: 'mensagens traduzidas', en: 'messages translated' } },
    { v: '266',   r: { pt: 'itens, lugares e nomes', en: 'items, places and names' } },
    { v: '75',    r: { pt: 'glifos latinos desenhados', en: 'Latin glyphs drawn' } },
    { v: '2',     r: { pt: 'bytes que consertaram o jogo', en: 'bytes that fixed the game' } }
  ],
  grupos: [
    { titulo: { pt: 'A tradução', en: 'The translation' }, itens: [
      { t: { pt: '<b>1.903 mensagens</b> — o roteiro inteiro, sem resumo e sem frase cortada', en: '<b>1,903 messages</b> — the entire script, nothing summarised, no sentence cut' }, foto: 'fj2/05-espirito-jump-world.png' },
      { t: { pt: '<b>266 nomes</b> de itens, lugares, monstros e do grupo, encurtados só quando o campo da tela não comporta', en: '<b>266 names</b> for items, places, monsters and the party, shortened only where the on-screen field cannot hold them' }, foto: 'fj2/08-soulring.png' },
      { t: { pt: '<b>77 textos de menu</b> — status, loja, depósito, treino e título', en: '<b>77 menu strings</b> — status, shop, storage, training and title' }, foto: 'fj2/03-menu-ingles.png' },
      { t: { pt: '<b>13 mensagens de batalha</b> e as <b>6 páginas</b> do final', en: '<b>13 battle messages</b> and the <b>6 pages</b> of the ending' } },
      { t: { pt: '<b>Fonte latina de 75 glifos</b> desenhada para o jogo — maiúsculas, minúsculas, algarismos e pontuação — no lugar dos 141 tiles de kana do original', en: '<b>A 75-glyph Latin font</b> drawn for the game — capitals, lower case, digits and punctuation — replacing the original 141 kana tiles' } }
    ]},
    { titulo: { pt: 'Um bug de 1991, consertado', en: 'A 1991 bug, fixed' }, itens: [
      { t: { pt: 'Na abertura, o espírito diz que sete campeões foram escolhidos e nomeia os seis que faltam achar. <b>Desde 1991 ele nomeia sempre os mesmos seis</b> — quem começa como Taison é mandado procurar o Taison, e o Goku nunca é citado.', en: 'In the opening, a spirit says seven champions have been chosen and names the six you still have to find. <b>It has named the same six since 1991</b> — start as Taison and it sends you to go find Taison, and Goku is never named at all.' }, foto: 'fj2/06-lista-sete-campeoes.png' },
      { t: { pt: 'Não era limitação do cartucho: <b>o código certo já estava lá</b>. A cena tem um seletor de sete casos, um por herói inicial, e as sete variantes de texto estão gravadas na ROM. O seletor nunca disparava — o roteiro punha o número do herói no acumulador e a rotina chamada lia o registrador X, que trazia lixo da chamada anterior.', en: 'This was never a limitation of the cartridge: <b>the correct code is already in the ROM</b>. The scene has a seven-way selector, one branch per starting hero, and all seven text variants are sitting there. The selector never fired — the script loads the hero number into the accumulator and the routine it calls reads it from X, which still held leftovers from the previous call.' } },
      { t: { pt: 'A correção são <b>dois bytes</b>, apontando a carga para o registrador certo. Nada foi reescrito. <b>Seis das sete variantes não apareciam numa tela havia trinta e cinco anos.</b>', en: 'The fix is <b>two bytes</b>, pointing the load at the right register. Nothing was rewritten. <b>Six of the seven variants had not reached a screen in thirty-five years.</b>' }, foto: 'fj2/07-e-voce-tambem-goku.png' }
    ]},
    { titulo: { pt: 'Conteúdo novo', en: 'New content' }, itens: [
      { t: { pt: '<b>Prólogo de cinco páginas</b>, escrito do zero, recapitulando o <i>Famicom Jump: Eiyuu Retsuden</i> de 1989 — para quem chega ao segundo jogo sem ter jogado o primeiro', en: '<b>A five-page prologue</b>, newly written, recapping <i>Famicom Jump: Eiyuu Retsuden</i> (1989) — for anyone arriving at the second game without the first' }, foto: 'fj2/04-prologo-novo.png' },
      { t: { pt: '<b>Tela de créditos</b> antes do título: 5 segundos, pula com A ou START. Cabe inteira — código, paleta e texto — em 355 bytes de espaço morto do banco do título', en: '<b>A credits screen</b> before the title: 5 seconds, skippable with A or START. The whole thing — code, palette and text — fits in 355 bytes of dead space in the title bank' }, foto: 'fj2/02-creditos.png' },
      { t: { pt: '<b>Selo <code>DEFINITIVE EDITION</code></b> no rodapé do título, sem tirar nada e <b>sem gastar um byte a mais</b>: reescrever o escritor do subtítulo para ser dirigido por tabela liberou seis tiles, e o rodapé só precisava de quatro letras novas', en: '<b>A <code>DEFINITIVE EDITION</code> seal</b> on the title footer, taking nothing away and <b>costing zero extra bytes</b>: rewriting the subtitle routine to be table-driven freed six tile slots, and the seal needed only four letters that were not already there' }, foto: 'fj2/01-tela-titulo.png' },
      { t: { pt: '<b>Botão B contextual.</b> No original, falar com alguém custa abrir o menu; o B não fazia nada no campo. Agora o B fala com quem estiver à frente e, não havendo ninguém, examina o chão — a mesma divisão que o manual faz entre <code>はなす</code> e <code>しらべる</code>. O comando continua no menu para quem preferir.', en: '<b>A context-sensitive B button.</b> In the original, talking to someone costs a menu; B did nothing in the field. Now B talks to whoever is in front of you and, when nobody is, examines the ground — the same split the manual draws between <code>はなす</code> and <code>しらべる</code>. The menu command is still there for anyone who prefers it.' } }
    ]},
    { titulo: { pt: 'A engenharia', en: 'The engineering' }, itens: [
      { t: { pt: 'Medido em tradução real, o inglês ocupa <b>1,51×</b> os caracteres do japonês. Não cabia: faltavam cerca de <b>20 KB</b> — num cartucho no teto do mapper, com <b>zero bytes livres</b>.', en: 'Measured on the real translation, English runs <b>1.51×</b> the character count of the Japanese. It did not fit: the script was about <b>20 KB</b> over — on a cartridge at the mapper ceiling, with <b>zero free bytes</b>.' } },
      { t: { pt: 'Em vez de cortar texto, <b>troquei a compressão</b>. Um <b>Huffman de ordem 1</b> — a árvore escolhida pelo caractere anterior, em 26 grupos de contexto — leva o texto de 6,25 para <b>3,90 bits por caractere</b>. O decodificador tem <b>89 bytes</b> de 6502 escritos à mão.', en: 'Rather than trim text, <b>I replaced the compression</b>. An <b>order-1 Huffman coder</b> — the tree picked by the previous character, across 26 context groups — takes the script from 6.25 to <b>3.90 bits per character</b>. The decoder is <b>89 bytes</b> of hand-written 6502.' } },
      { t: { pt: 'As tabelas dos 26 grupos couberam nos <b>1.060 bytes</b> úteis do banco do dicionário antigo mais 65 bytes de enchimento no fim dele. O roteiro inglês fechou em <b>65,9 KB dentro de 68,1 KB</b> — folga de 2,2 KB num cartucho cujo maior vão livre tem 137 bytes.', en: 'The tables for the 26 groups fit in the <b>1,060 usable bytes</b> of the old dictionary bank plus 65 bytes of padding at the end of it. The English script closes at <b>65.9 KB inside 68.1 KB</b> — a 2.2 KB margin on a cartridge whose longest free run is 137 bytes.' } },
      { t: { pt: '<b>Cada compilação se confere.</b> Uma guarda aborta se qualquer byte fora das regiões declaradas mudar, e outra se duas partes do hack reivindicarem o mesmo byte. As 1.903 mensagens são decodificadas de volta <b>pelo decodificador 6502 real rodando sobre a ROM final</b> e comparadas com a fonte. Um teste de estresse de <b>30.000 quadros</b> com entrada aleatória roda ao lado do cenário exato que travava versões antigas.', en: '<b>Every build checks itself.</b> A guard aborts if any byte outside the declared regions moved, and a second one if two parts of the hack claim the same byte. All 1,903 messages are decoded back <b>by the real 6502 decoder running on the finished ROM</b> and compared to the source. A <b>30,000-frame</b> random-input stress test runs alongside the exact scenario that crashed earlier builds.' } }
    ]},
    { titulo: { pt: 'Quatro defeitos que eu mesmo introduzi', en: 'Four bugs I introduced myself' }, itens: [
      { t: { pt: 'Ficam registrados por honestidade. <b>A placa do título</b> perdeu a moldura branca e os raios rosa porque a primeira versão do logo apagou 47 tiles para caber — a arte foi devolvida na íntegra, com <b>zero pixels de diferença</b> conferidos por contagem.', en: 'They are recorded here for honesty. <b>The title plaque</b> lost its white border and pink rays because my first logo deleted 47 tiles to make room — the art was restored in full, at <b>zero pixels of difference</b>, checked by counting.' } },
      { t: { pt: 'A oitava imagem da animação da placa é a própria cauda do stream do fundo — a Bandai não guardou duas cópias. Com o logo novo esse ponteiro caía no meio do logo e, após ~46 s parado no título, a placa se enchia de lixo.', en: "The eighth frame of the plaque animation is the tail of the background stream itself — Bandai did not keep two copies. With the new logo that pointer landed in the middle of the logo, and after about 46 seconds sitting on the title screen the plaque filled with garbage." } },
      { t: { pt: '<b>Uma aspa a mais em cada troca de página</b> — 281 linhas extras ao longo do roteiro — era o que fazia a caixa de fala estourar e deixar um <b>balão fantasma</b> preso no cenário. As correções fecharam a classe inteira, e agora a compilação <b>simula o próprio motor de texto do jogo</b> sobre o roteiro final e aborta se alguma página passar de 21 colunas por 3 linhas.', en: '<b>A stray quotation mark at every page break</b> — 281 extra lines across the script — was the real cause of the dialogue box overflowing and leaving a <b>ghost balloon</b> stuck in the scenery. The fixes closed the whole class, and the build now <b>simulates the game’s own text engine</b> over the final script and aborts if any page exceeds 21 columns by 3 lines.' } }
    ]}
  ],
  patch: {
    versoes: { en: { arquivo: 'famicom-jump-2-en.ips' },
               pt: { arquivo: 'famicom-jump-2-pt.ips' },
               es: null },
    rom: 'Famicom Jump II - Saikyou no 7 Nin (Japan).nes',
    rom_md5: '47910069aa92dcac1b0fa4929cc7ceff'
  },
  fotos: [
    { f: 'fj2/01-tela-titulo.png', t: { pt: 'Tela de título', en: 'Title screen' }, c: { pt: 'O logo redesenhado pixel a pixel e o selo <code>DEFINITIVE EDITION</code>, que não custou um byte a mais.', en: 'The logo redrawn pixel by pixel, and the <code>DEFINITIVE EDITION</code> seal, which cost no extra bytes.' } },
    { f: 'fj2/02-creditos.png', t: { pt: 'Créditos do patch', en: 'Patch credits' }, c: { pt: 'Tela nova antes do título, em 355 bytes de espaço morto.', en: 'A new screen before the title, in 355 bytes of dead space.' } },
    { f: 'fj2/04-prologo-novo.png', t: { pt: 'Prólogo novo', en: 'New prologue' }, c: { pt: 'Cinco páginas escritas do zero, recapitulando o primeiro jogo de 1989.', en: 'Five newly written pages recapping the 1989 first game.' } },
    { f: 'fj2/05-espirito-jump-world.png', t: { pt: 'O espírito do Jump World', en: 'The spirit of Jump World' }, c: { pt: 'A abertura, agora em inglês.', en: 'The opening, now in English.' } },
    { f: 'fj2/06-lista-sete-campeoes.png', t: { pt: 'A lista dos sete', en: 'The champion list' }, c: { pt: 'A tela do bug: seis nomes que, até esta correção, eram sempre os mesmos.', en: 'The bug screenshot: six names that, until this fix, were always the same six.' } },
    { f: 'fj2/07-e-voce-tambem-goku.png', t: { pt: '"E você também, Goku."', en: '"That goes for you too, Goku."' }, c: { pt: 'A fala que ninguém tinha visto em trinta e cinco anos.', en: 'The line nobody had seen in thirty-five years.' } },
    { f: 'fj2/03-menu-ingles.png', t: { pt: 'Menus', en: 'Menus' }, c: { pt: 'Status, loja, depósito e treino — 77 textos.', en: 'Status, shop, storage and training — 77 strings.' } },
    { f: 'fj2/08-soulring.png', t: { pt: 'Itens', en: 'Items' }, c: { pt: 'Nomes e descrições, encurtados só quando o campo exige.', en: 'Names and descriptions, shortened only where the field demands it.' } }
  ]
};
