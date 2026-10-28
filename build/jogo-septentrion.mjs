/* Septentrion — entrou no site como beta v0.1 (EN, PT-BR e ES, traduzidos direto do japonês), 27/10/2026.
   Texto: fatos F01-F43 da Redação dos Arautos (~/septentrion-hack/midia/redacao/beta_v0.1/fatos.json), sem
   os itens de «nao_usar». Capa = thumb do Patreon aprovada pelo dono (op2, 1902×827). */

const bi = (pt, en, es) => ({ pt, en, es });

export const SEPTENTRION = {
  slug: 'septentrion',
  nome: 'Septentrion',
  subtitulo: '',
  jp: 'セプテントリオン',
  publisher: 'Human Entertainment', dev: 'Field', ano: 1993, data: '28/05/1993',
  sistema: 'Super Famicom', mapper: 'SHVC-TT · 1 MB expandido para 2 MB',
  categoria: bi('Tradução', 'Translation', 'Traducción'),
  nivel: 'beta',
  versao: 'beta v0.1',
  capa: 'septentrion/00-capa.jpg',
  patreon: 'https://www.patreon.com/patchclan/posts/septentrion-snes-173617939?pr=true',
  linha: bi('Um navio afunda e você tem 60 minutos para fugir com quem conseguir salvar. De volta o bar, a bebedeira e o pastor que a versão americana cortou.',
            'A ship is sinking and you have 60 minutes to escape with whoever you can save. The bar, the drinking and the minister the US release cut are back.',
            'Un barco se hunde y tienes 60 minutos para huir con quien logres salvar. Vuelven el bar, la borrachera y el pastor que la versión estadounidense recortó.'),
  resumo: {
    pt: ['<b>Field e Human Entertainment, Super Famicom, 28 de maio de 1993.</b> Um navio está afundando e o relógio do jogo marca 60 minutos para escapar; cada erro gasta 5. Há quatro protagonistas, com passaporte escrito no próprio cartucho — Caplice Wisher, Redwin Gardner, Luke Haines e Jeffery Howell —, e cada um tem uma pessoa-chave para salvar: a Amy, as crianças Stella, Harry e Jack, a Ismay e a Adela. São 31 sobreviventes para resgatar, o grupo tem no máximo 7 companheiros, quem morre não volta e o jogo não tem save. O melhor final de cada protagonista pede sair com a pessoa-chave e pelo menos 25 pontos de sobreviventes; são 19 cenas finais diferentes. Segundo o manual, a Field fez e publicou o jogo e a Human distribuiu.',
          'A versão americana, lançada como S.O.S. em abril de 1994, cerca de um ano depois da japonesa, fechou o bar do navio e apagou os dois personagens que ficavam lá, trocou a bebedeira do prólogo por enjoo de mar e fez do Redwin, pastor no japonês, um conselheiro. Também deixou o navio com dois capitães — a Ismay virou capitã, e o capitão Philips continuou lá — e fez a Kathryn, que perde um irmão no japonês, perder o marido. Esta é uma retradução feita direto da ROM japonesa; o inglês do S.O.S. não serviu de fonte, porque mudou nomes e pontos.',
          'A beta traz as 7.183 mensagens do jogo, inclusive os nomes da lista de sobreviventes, em inglês, português do Brasil e espanhol, com letra latina em negrito no lugar da japonesa. Quatro travas do cartucho estão consertadas: o fim sem resgatar a Amy com o Caplice, a conversa que parava quando a Akers ficava em cima do Alan com o Redwin, o corredor da Akers que congelava a tela com o Luke e o marinheiro morto da sala de controle que soltava o texto do final no meio da partida com o Jeffery. As três técnicas de speedrun do original ficaram como estão. Um defeito de falas segue aberto: com o Jeffery, certos companheiros cansados ficam calados.'],
    en: ['<b>Field and Human Entertainment, Super Famicom, May 28, 1993.</b> A ship is sinking and the in-game clock gives you 60 minutes to escape; each mistake costs 5. There are four playable protagonists, with passports written in the cartridge itself — Caplice Wisher, Redwin Gardner, Luke Haines and Jeffery Howell — and each has a key person to save: Amy, the kids Stella, Harry and Jack, Ismay and Adela. There are 31 survivors to rescue, your group holds at most 7 companions, a companion who dies does not come back, and the game has no save. Each protagonist\'s best ending asks you to leave with the key person and at least 25 points of survivors; there are 19 different final scenes. According to the manual, Field made and published the game and Human distributed it.',
          'The US release, titled S.O.S. in April 1994, about a year after the Japanese one, closed the ship\'s bar and removed the two characters who hung out there, swapped the prologue\'s drunkenness for seasickness, and turned Redwin, a minister in the Japanese, into a counselor. It also left the ship with two captains — Ismay became a captain, and Captain Philips is still there — and made Kathryn, who loses a brother in the Japanese, lose a husband instead. This is a retranslation made directly from the Japanese ROM; the English of S.O.S. was not used as a source, since it changed names and points.',
          'The beta carries all 7,183 messages of the game, including the names on the survivor list, in English, Brazilian Portuguese and Spanish, in bold Latin lettering instead of the Japanese font. Four cartridge lockups are fixed: the ending without rescuing Amy with Caplice, the conversation that stopped when Akers stood on top of Alan with Redwin, Akers\' corridor that froze the screen with Luke, and the dead sailor in the control room that played the ending text mid-game with Jeffery. The original\'s three speedrun techniques are left as they are. One dialogue bug remains open: with Jeffery, some tired companions stay silent.'],
    es: ['<b>Field y Human Entertainment, Super Famicom, 28 de mayo de 1993.</b> Un barco se hunde y el reloj del juego da 60 minutos para escapar; cada error gasta 5. Hay cuatro protagonistas, con pasaporte escrito en el propio cartucho — Caplice Wisher, Redwin Gardner, Luke Haines y Jeffery Howell —, y cada uno tiene una persona clave a la que salvar: Amy, los niños Stella, Harry y Jack, Ismay y Adela. Hay 31 supervivientes que rescatar, el grupo admite como máximo 7 compañeros, quien muere no vuelve y el juego no tiene guardado. El mejor final de cada protagonista exige salir con la persona clave y al menos 25 puntos de supervivientes; son 19 escenas finales distintas. Según el manual, Field hizo y publicó el juego y Human lo distribuyó.',
          'La versión estadounidense, lanzada como S.O.S. en abril de 1994, casi un año después de la japonesa, cerró el bar del barco y borró a los dos personajes que estaban allí, cambió la borrachera del prólogo por mareo y convirtió a Redwin, pastor en el japonés, en consejero. Además dejó el barco con dos capitanes — Ismay pasó a ser capitana y el capitán Philips siguió ahí — e hizo que Kathryn, que en el japonés pierde a un hermano, perdiera al marido. Esta es una retraducción hecha directamente de la ROM japonesa; el inglés de S.O.S. no sirvió de fuente, porque cambió nombres y puntos.',
          'La beta trae los 7.183 mensajes del juego, incluidos los nombres de la lista de supervivientes, en inglés, portugués de Brasil y español, con letra latina en negrita en lugar de la japonesa. Hay cuatro bloqueos del cartucho corregidos: el final sin rescatar a Amy con Caplice, la conversación que se paraba cuando Akers se ponía encima de Alan con Redwin, el pasillo de Akers que congelaba la pantalla con Luke y el marinero muerto de la sala de control que soltaba el texto del final a media partida con Jeffery. Las tres técnicas de speedrun del original se dejaron como están. Sigue abierto un fallo de diálogos: con Jeffery, algunos compañeros cansados se quedan callados.']
  },
  numeros: [],
  grupos: [],
  patch: { versoes: { en: { arquivo: 'septentrion-en.ips' }, pt: { arquivo: 'septentrion-pt.ips' }, es: { arquivo: 'septentrion-es.ips' } }, rom: 'Septentrion (Japan).sfc', rom_md5: '8390060497fa77efff7c1b2fb2ac1ca4' },
  fotos: [
    { f: 'septentrion/01-titulo.png', t: bi('Tela de título', 'Title screen', 'Pantalla de título'),
      c: bi('O navio na tempestade, com o logo em vermelho. É dele que você precisa escapar a tempo.',
            'The ship in the storm, under the red logo. It is the ship you have to escape before it sinks.',
            'El barco en la tormenta, con el logotipo en rojo. Es de él de quien tienes que escapar a tiempo.') },
    { f: 'septentrion/02-passaporte-caplice.png', t: bi('O passaporte do Caplice', 'Caplice\'s passport', 'El pasaporte de Caplice'),
      c: bi('A ficha de escolha: <code>Caplice Wisher, Age 23, architect</code>. O passaporte já vem em inglês no cartucho japonês; a legenda embaixo é da tradução.',
            'The character-select card: <code>Caplice Wisher, Age 23, architect</code>. The passport is already in English on the Japanese cartridge; the caption below is the translation.',
            'La ficha de selección: <code>Caplice Wisher, Age 23, architect</code>. El pasaporte ya viene en inglés en el cartucho japonés; el pie de foto es de la traducción.') },
    { f: 'septentrion/03-passaporte-redwin.png', t: bi('O passaporte do Redwin', 'Redwin\'s passport', 'El pasaporte de Redwin'),
      c: bi('<code>Redwin Gardner, Age 39, minister</code>: no japonês ele é pastor, e aqui volta a ser. A versão americana tinha COUNSELOR, conselheiro.',
            '<code>Redwin Gardner, Age 39, minister</code>: in the Japanese he is a minister, and here he is again. The US version had COUNSELOR.',
            '<code>Redwin Gardner, Age 39, minister</code>: en el japonés es pastor, y aquí vuelve a serlo. La versión estadounidense decía COUNSELOR, consejero.') },
    { f: 'septentrion/04-data.png', t: bi('O cartão de abertura', 'The opening card', 'La tarjeta de apertura'),
      c: bi('<code>September 13, 1921 - 7:11 PM / Off the coast of Hamblton…</code>: a data e a hora em que a história começa.',
            '<code>September 13, 1921 - 7:11 PM / Off the coast of Hamblton…</code>: the date and the hour the story starts.',
            '<code>September 13, 1921 - 7:11 PM / Off the coast of Hamblton…</code>: la fecha y la hora en que empieza la historia.') },
    { f: 'septentrion/05-camarote.png', t: bi('No camarote', 'In the cabin', 'En el camarote'),
      c: bi('No camarote, o Caplice chama a irmã: <code>Amy…</code>. As falas aparecem em letra latina em negrito, no lugar da japonesa.',
            'In the cabin, Caplice calls his sister: <code>Amy…</code>. The lines appear in bold Latin lettering, in place of the Japanese.',
            'En el camarote, Caplice llama a su hermana: <code>Amy…</code>. Los diálogos salen en letra latina en negrita, en lugar de la japonesa.') }
  ]
};
