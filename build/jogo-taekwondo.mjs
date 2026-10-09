/* Taekwon-Do / 跆拳道 (Super Famicom, Human Entertainment, 28/06/1994). Ficha medida em
   ~/taekwondo-hack (RETOMAR.md, revisao/b651ff2b/FECHADA.json, diagramacao/, referencia/FINAIS.md)
   e frases conferidas contra midia/ineditismo.json: o jogo saiu também na Coreia do Sul
   (18/07/1994, Hyundai), então nada de "Japan-only" nem de "primeira tradução".
   Uma ROM só carrega os dois idiomas (a tela de idioma escolhe), por isso o IPS do inglês e o
   do espanhol são o mesmo arquivo com dois nomes — RELEASE v1.0, build 48374f32 (a b651ff2b com a
   abertura ENGLISH AND SPANISH, 06/10/2026, mesmo link). O português é ROM separada (inglês + português),
   RELEASE v1.0, build 06fcd93d. */

const bi = (pt, en, es) => ({ pt, en, es });

const PLAYLIST = 'https://www.youtube.com/playlist?list=PLBwKv6IMY2kU';
const link = txt => `<a href="${PLAYLIST}" target="_blank" rel="noopener">${txt}</a>`;

export const TAEKWONDO = {
  slug: 'taekwondo',
  nome: 'Taekwon-Do',
  subtitulo: '',
  jp: '跆拳道',
  publisher: 'Human Entertainment', dev: 'Human Entertainment', ano: 1994, data: '28/06/1994',
  sistema: 'Super Famicom', mapper: 'LoROM (FastROM) · 1 MB expandido para 2 MB · sem bateria: o progresso vai por senha',
  categoria: bi('Tradução', 'Translation', 'Traducción'),
  nivel: 'release',
  versao: 'English v1.1 · Español v1.1 · Português v1.1',
  capa: 'taekwondo/00-capa-patreon.jpg',
  linha: bi('Taekwondo de competição, lançado em 1994 só no Japão e na Coreia do Sul. A tela que escolhia japonês ou coreano agora escolhe inglês ou espanhol.',
            'Competition taekwondo, released in 1994 only in Japan and South Korea. The screen that picked Japanese or Korean now picks English or Spanish.',
            'Taekwondo de competición, lanzado en 1994 solo en Japón y Corea del Sur. La pantalla que elegía japonés o coreano ahora elige inglés o español.'),
  resumo: {
    pt: ['A Human Entertainment lançou este jogo no Super Famicom em <b>28 de junho de 1994</b>. Em 18 de julho ele saiu também na Coreia do Sul, pela Hyundai, num cartucho só em coreano. O cartucho japonês abre numa tela <code>LANGUAGE SELECTION</code> com duas opções, japonês ou coreano, e cada idioma tem o seu elenco: no coreano, os oito lutadores japoneses viram coreanos. O patch põe <code>IN ENGLISH ?</code> e <code>IN SPANISH ?</code> no lugar dessas duas opções, de modo que a ROM traduzida não mostra mais japonês nem coreano.',
          'É taekwondo de competição, com árbitro, contagem de quedas e decisão. No torneio normal você sai do campeonato japonês, vai ao mundial de Seul e, no segundo ano, chega à final em Pyongyang, lutada sem árbitro. No modo Edit você cria o próprio lutador e treina no dojo: o mestre mostra cada golpe, pergunta se você quer aprender e, no fim, luta com você. Há também torneio por equipes, versus contra a CPU ou contra outra pessoa, e o progresso fica numa senha, porque o cartucho não tem bateria.',
          'Os <b>32 golpes</b> ficaram em coreano romanizado, do jeito que se fala na academia: <i>dollyo chagi</i>, <i>yop chagi</i>, <i>naeryo chagi</i>. Os nomes saíram do que a própria Human escreveu no lado coreano do cartucho, e o par <i>chigi</i>/<i>chagi</i> volta a separar golpe de mão e chute nos dois idiomas. A ROM passou de 1 para <b>2 MB</b>. A narração de abertura passa antes da escolha de idioma, por isso fica só em inglês.',
          'Os <b>539 textos</b> de cada idioma foram revisados contra o japonês, e as <b>1.065 caixas</b> de texto foram medidas uma a uma. Todo texto do espanhol foi visto na tela. A versão em inglês foi até os <b>7 finais</b> (três terminam nos créditos, um no título por equipes depois de um continue e três no game over), e cada final foi gravado do começo ao fim: os vídeos estão ' + link('nesta playlist do YouTube') + '.',
          'O português vem num patch à parte, porque o cartucho só tem dois lugares de idioma: aplicado à mesma ROM japonesa, ele dá uma ROM com <code>IN ENGLISH ?</code> e <code>EM PORTUGUÊS ?</code>. O texto em português também foi revisado contra o japonês e visto na tela, e essa ROM foi jogada até os 7 finais.'],
    en: ['Human Entertainment released this game on the Super Famicom on <b>June 28, 1994</b>. On July 18 it also came out in South Korea, from Hyundai, on a Korean-only cartridge. The Japanese cartridge opens on a <code>LANGUAGE SELECTION</code> screen with two choices, Japanese or Korean, and each language has its own cast: in Korean, the eight Japanese fighters become Korean. The patch puts <code>IN ENGLISH ?</code> and <code>IN SPANISH ?</code> where those two choices were, so the translated ROM no longer shows Japanese or Korean.',
          'This is competition taekwondo, with a referee, a down count and decisions. In the normal tournament you start at the Japan championship, go on to the world championship in Seoul and, in the second year, reach the final in Pyongyang, fought with no referee. In Edit mode you build your own fighter and train at the dojo: the master shows you each technique, asks whether you want to learn it and, at the end, fights you himself. There is also a team tournament, versus against the CPU or another person, and your progress is kept as a password, because the cartridge has no battery.',
          'The <b>32 techniques</b> are in romanized Korean, the way they are said in a training hall: <i>dollyo chagi</i>, <i>yop chagi</i>, <i>naeryo chagi</i>. The names come from what Human itself wrote on the Korean side of the cartridge, and the <i>chigi</i>/<i>chagi</i> pair once again tells hand strikes from kicks in both languages. The ROM grew from 1 to <b>2 MB</b>. The opening narration runs before you pick a language, so it is in English only.',
          'All <b>539 texts</b> in each language were checked against the Japanese, and all <b>1,065 text boxes</b> were measured one by one. Every Spanish text was seen on screen. The English version went through all <b>7 endings</b> (three end on the credits, one on the team title after a continue, and three on game over), and each ending was recorded start to finish: the videos are ' + link('in this YouTube playlist') + '.',
          'Portuguese comes as a separate patch, because the cartridge only has two language slots: applied to the same Japanese ROM, it gives you a ROM with <code>IN ENGLISH ?</code> and <code>EM PORTUGUÊS ?</code>. The Portuguese text was also checked against the Japanese and seen on screen, and that ROM was played through all 7 endings.'],
    es: ['Human Entertainment lanzó este juego en Super Famicom el <b>28 de junio de 1994</b>. El 18 de julio salió también en Corea del Sur, de la mano de Hyundai, en un cartucho solo en coreano. El cartucho japonés abre en una pantalla <code>LANGUAGE SELECTION</code> con dos opciones, japonés o coreano, y cada idioma tiene su propio elenco: en coreano, los ocho luchadores japoneses pasan a ser coreanos. El parche pone <code>IN ENGLISH ?</code> e <code>IN SPANISH ?</code> en lugar de esas dos opciones, así que la ROM traducida ya no muestra japonés ni coreano.',
          'Es taekwondo de competición, con árbitro, cuenta de caídas y decisión. En el torneo normal empiezas en el campeonato de Japón, pasas al mundial de Seúl y, en el segundo año, llegas a la final de Pyongyang, que se pelea sin árbitro. En el modo Edit creas tu propio luchador y entrenas en el dojo: el maestro te enseña cada técnica, te pregunta si quieres aprenderla y, al final, pelea contigo. Hay además torneo por equipos, versus contra la CPU o contra otra persona, y el progreso se guarda en una contraseña, porque el cartucho no tiene batería.',
          'Las <b>32 técnicas</b> quedaron en coreano romanizado, como se dicen en el gimnasio: <i>dollyo chagi</i>, <i>yop chagi</i>, <i>naeryo chagi</i>. Los nombres salen de lo que la propia Human escribió en el lado coreano del cartucho, y el par <i>chigi</i>/<i>chagi</i> vuelve a distinguir golpe de mano y patada en los dos idiomas. La ROM pasó de 1 a <b>2 MB</b>. La narración de apertura va antes de elegir idioma, por eso queda solo en inglés.',
          'Los <b>539 textos</b> de cada idioma se revisaron contra el japonés, y las <b>1.065 cajas</b> de texto se midieron una por una. Todo el texto en español se vio en pantalla. La versión en inglés llegó a los <b>7 finales</b> (tres terminan en los créditos, uno en el título por equipos después de un continue y tres en game over), y cada final se grabó de principio a fin: los vídeos están ' + link('en esta lista de YouTube') + '.',
          'El portugués llega en un parche aparte, porque el cartucho solo tiene dos lugares de idioma: aplicado a la misma ROM japonesa, da una ROM con <code>IN ENGLISH ?</code> y <code>EM PORTUGUÊS ?</code>. El texto en portugués también se revisó contra el japonés y se vio en pantalla, y esa ROM se jugó hasta los 7 finales.']
  },
  numeros: [
    { v: '539', r: bi('textos traduzidos em cada idioma, revisados contra o japonês', 'translated texts in each language, checked against the Japanese', 'textos traducidos en cada idioma, revisados contra el japonés') },
    { v: '32', r: bi('golpes com o nome em coreano romanizado', 'techniques named in romanized Korean', 'técnicas con el nombre en coreano romanizado') },
    { v: '7', r: bi('finais, cada um gravado do começo ao fim', 'endings, each recorded start to finish', 'finales, cada uno grabado de principio a fin') }
  ],
  grupos: [],
  patch: { versoes: { en: { arquivo: 'taekwondo-en.ips' }, pt: { arquivo: 'taekwondo-pt.ips' }, es: { arquivo: 'taekwondo-es.ips' } }, rom: 'Taekwon-Do (Japan) (Ja,Ko).sfc', rom_md5: 'e9eb2c3d0b6e21baafbfc4b614e04a3f' },
  fotos: [
    { f: 'taekwondo/01-titulo.png', t: bi('Tela de título', 'Title screen', 'Pantalla de título'),
      c: bi('O logo do jogo, que o cartucho japonês já trazia em letra latina.', 'The game\'s logo, which the Japanese cartridge already had in Latin script.', 'El logo del juego, que el cartucho japonés ya traía en letra latina.') },
    { f: 'taekwondo/02-creditos.png', t: bi('Créditos do patch', 'Patch credits', 'Créditos del parche'),
      c: bi('A tela de abertura da tradução, antes do título, com a versão.', 'The translation opening screen, before the title, with the version.', 'La pantalla de apertura de la traducción, antes del título, con la versión.') },
    { f: 'taekwondo/03-idioma.png', t: bi('Escolha de idioma', 'Language select', 'Selección de idioma'),
      c: bi('Inglês e espanhol no lugar do japonês e do coreano.', 'English and Spanish in place of Japanese and Korean.', 'Inglés y español en lugar de japonés y coreano.') },
    { f: 'taekwondo/04-dojo.png', t: bi('No dojo', 'At the dojo', 'En el dojo'),
      c: bi('O mestre no fim do treino do modo Edit.', 'The master at the end of Edit mode training.', 'El maestro al final del entrenamiento del modo Edit.') },
    { f: 'taekwondo/05-regras.png', t: bi('As regras', 'The rules', 'Las reglas'),
      c: bi('O árbitro explica como se vence a luta.', 'The referee explains how a bout is won.', 'El árbitro explica cómo se gana el combate.') },
    { f: 'taekwondo/06-final.png', t: bi('A final em Pyongyang', 'The final in Pyongyang', 'La final en Pyongyang'),
      c: bi('Logo no começo, um chute tira o árbitro do caminho.', 'Early on, a kick sends the referee flying out of the way.', 'Al poco de empezar, una patada quita al árbitro de en medio.') }
  ]
};
