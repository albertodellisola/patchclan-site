export const SEED = {
  hero: {
    kicker: { pt: 'Brasil · desde 2026 · oficina de rom hacking', en: 'Brazil · est. 2026 · a rom hacking workshop' },
    title:  { pt: 'Alguns jogos nunca aprenderam inglês.', en: 'Some games never learned English.' },
    accent: { pt: 'Isso foi só o começo.', en: 'That was only the start.' },
    lede: {
      pt: 'O Patch Clan é um grupo de rom hacking. A gente traduz jogos que nunca tiveram lançamento em inglês — ponteiros, fonte, quebra de linha e tudo — e não para aí: telas que o original não tinha, bugs de trinta e cinco anos consertados, e o que mais couber num cartucho que sempre teve espaço.',
      en: 'Patch Clan is a rom hacking group. We translate games that never had an English release — pointers, font, line breaks and all — and then keep going: screens the original never had, thirty-five-year-old bugs fixed, and whatever else the cartridge always had room for.'
    },
    note: {
      pt: 'Só patches, nunca ROMs. De graça, e vai continuar. O primeiro foi o <b>Famicom Jump II</b>, e ele continua sendo o carro-chefe.',
      en: 'Patches only, never ROMs. Free, and staying that way. The first one was <b>Famicom Jump II</b>, and it is still the flagship.'
    }
  },
  patreon: {
    url: 'https://www.patreon.com/patchclan',
    nome: 'Sonix',
    chamada: {
      pt: 'O que uma assinatura compra são <b>horas</b>. Num jogo destes, umas duzentas passam antes de uma palavra em inglês chegar à tela: desmontar o motor, achar o texto, entender o empacotamento, e então escrever as ferramentas que leem e reescrevem.',
      en: 'What a pledge buys is <b>hours</b>. On a game like these, roughly two hundred of them pass before one English word reaches the screen: disassembling the engine, locating the text, working out the packing scheme, then writing the tools that read and rewrite it.'
    },
    promessa: {
      pt: 'Três coisas que não mudam: <b>nenhuma ROM é distribuída</b>, só patches. <b>Todo patch pronto é de graça</b> para todo mundo, apoiador ou não. E <b>nenhuma data é prometida</b>, porque data prometida vira pressa, e pressa aparece no texto.',
      en: 'Three things that never change: <b>no ROMs are distributed</b>, only patches. <b>Every finished patch is free</b> for everyone, patron or not. And <b>no dates are promised</b>, because a promised date turns into a rush, and the rush shows up in the text.'
    },
    rodape: {
      pt: 'Apoiar não dá acesso antecipado exclusivo a tradução nenhuma — dá o patch mais cedo e o relato de como ele foi feito. Ninguém paga para poder jogar.',
      en: 'A pledge does not buy exclusive access to any translation — it buys the patch earlier and the account of how it was built. Nobody pays for access to a translation.'
    },
    tiers: [
      { nome: 'Two Bytes', preco: '$3', periodo: { pt: '/mês', en: '/month' },
        nota: { pt: 'os dois bytes que consertaram o Famicom Jump II', en: 'the two bytes that fixed Famicom Jump II' },
        itens: [
          { pt: 'Todo patch no dia em que sai, com as notas de versão e a lista de correções', en: 'Every patch the day it ships, with the release notes and the fix list' },
          { pt: 'Registro mensal do build: o que foi medido, o que quebrou, o que coube', en: 'Monthly build log: what was measured, what broke, what fit' },
          { pt: 'Voto em qual jogo em andamento recebe o próximo bloco de horas', en: 'A vote on which game in progress gets the next block of hours' },
          { pt: 'Os patches continuam de graça para todo mundo, sempre', en: 'Patches stay free for everybody, always' }
        ] },
      { nome: 'Bank Switch', preco: '$8', periodo: { pt: '/mês', en: '/month' }, destaque: true,
        nota: { pt: 'a troca de banco, que é como um cartucho de 1988 cabe mais do que devia', en: 'bank switching, which is how a 1988 cartridge holds more than it should' },
        itens: [
          { pt: 'Tudo do <b>Two Bytes</b>', en: 'Everything in <b>Two Bytes</b>' },
          { pt: 'O devlog longo, uma ou duas vezes por mês: desmontagem comentada, a aritmética de bytes por trás de cada decisão, e capturas saídas direto do emulador sem janela', en: 'The long devlog, once or twice a month: disassembly walkthroughs, the byte arithmetic behind each decision, screenshots straight from the headless emulator harness' },
          { pt: 'Patches beta antes do lançamento público, com a lista de defeitos conhecidos', en: 'Beta patches before public release, with the known-issues list' },
          { pt: 'Discord de apoiadores — traga o seu mapper, a sua fonte ou a sua ROM travada', en: 'Patron Discord — bring your own mapper, font, or stuck ROM' },
          { pt: 'Seu nome no README do patch', en: 'Your name in the patch README' }
        ] },
      { nome: 'The Seventh Hero', preco: '$15', periodo: { pt: '/mês', en: '/month' },
        nota: { pt: 'o sétimo escolhido do Famicom Jump II é você', en: 'the seventh champion in Famicom Jump II is you' },
        itens: [
          { pt: 'Tudo do <b>Bank Switch</b>', en: 'Everything in <b>Bank Switch</b>' },
          { pt: '<b>Seu nome na tela de créditos do jogo</b>, desenhado em tiles, em todo patch lançado enquanto você estiver apoiando', en: '<b>Your name on the game’s credits screen</b>, drawn in tiles, in every patch released while you are pledged' },
          { pt: 'A caixa de ferramentas: desmontador 6502, montador em Python, empacotador Huffman, construtor de fonte e o harness Lua — com notas para apontá-los para a sua própria ROM', en: 'The toolchain: 6502 disassembler, Python assembler, Huffman packer, font builder, Lua harness, with notes for pointing them at your own ROM' },
          { pt: 'Post-mortems, inclusive dos fracassos, antes de virarem públicos', en: 'Post-mortems, including the failures, before they go public' }
        ] }
    ]
  },
  rules: { items: [
    { title: { pt: 'Patches, nunca ROMs', en: 'Patches, never ROMs' },
      text: { pt: 'Você traz o seu próprio dump. Nada com direito autoral fica hospedado aqui, nunca.', en: 'You bring your own dump. Nothing copyrighted is hosted here, ever.' } },
    { title: { pt: 'De graça, para sempre', en: 'Free, permanently' },
      text: { pt: 'Sem página de doação obrigatória, sem acesso antecipado exclusivo, sem build que só apoiador joga.', en: 'No mandatory donation, no exclusive early access, no build only patrons get to play.' } },
    { title: { pt: 'Nenhuma data prometida', en: 'No dates promised' },
      text: { pt: 'Nem em post, nem em resposta. Sai quando estiver lendo certo.', en: 'Not in posts, not in replies. It ships when it reads right.' } },
    { title: { pt: 'Devagar de propósito', en: 'Slow on purpose' },
      text: { pt: 'E cada linha é lida em voz alta antes de sair — no hardware, no tamanho real.', en: 'And every line gets read out loud before it ships — on hardware, at size.' } }
  ]},
  who: {
    paras: [
      { pt: 'O Patch Clan tem raiz na <b>Central Brasileira de Traduções</b>, a CBT, um dos grupos que construíram a cena de tradução brasileira quando patch andava por post de fórum e todo mundo aprendia hex editing num arquivo de texto que outro alguém escreveu às duas da manhã.',
        en: 'Patch Clan has its roots in <b>Central Brasileira de Traduções</b>, the CBT, one of the groups that built the Brazilian translation scene back when a patch travelled by forum post and everyone learned hex editing from a text file somebody else wrote at two in the morning.' },
      { pt: 'A gente escreve as próprias ferramentas para cada jogo, porque as de uso geral param na parte interessante: um desmontador 6502 com mapa de bancos por mapper, desempacotadores de texto a nível de bit, um montador 6502 em Python, e um emulador sem janela dirigido por Lua que dá boot na ROM e fotografa a tela sem abrir nada.',
        en: 'We write our own tools for every game, because the general-purpose ones stop at the interesting part: a 6502 disassembler with a per-mapper bank map, bit-level text unpackers, a 6502 assembler in Python, and a headless emulator driven by Lua that boots the ROM and screenshots it with no window open.' },
      { pt: 'O cronograma, o controle de qualidade e o lançamento fazem parte do mesmo trabalho que o patch: nada sai por prazo, sai quando está lendo certo.',
        en: 'The schedule, the QA and the release are part of the same job as the patch itself: nothing ships to a deadline, it ships when it reads right.' }
    ],
    sign: { pt: 'tradução, hacking, revisão, clã', en: 'translation, hacking, proofreading, clan' }
  },
  footer: {
    tagline: { pt: 'Patches para jogos que nunca falaram inglês', en: 'Patches for games that never spoke English' }
  }
};

/* Os três feitos que o site mostra em "não é só tradução".
   Cada um aponta para o jogo onde aconteceu. */
SEED.provas = { itens: [
  { jogo: 'famicom-jump-2', etiqueta: { pt:'Correção de bug', en:'Bug fix', es:'Corrección de bug' },
    numero: '35', unidade: { pt:'anos depois', en:'years later', es:'años después' },
    texto: { pt:'O jogo tinha sete variantes de uma fala e seis nunca apareciam, por causa de um registrador trocado. A correção foram <b>dois bytes</b>.',
             en:'The game had seven variants of one line and six never appeared, because of a swapped register. The fix was <b>two bytes</b>.',
             es:'El juego tenía siete variantes de una frase y seis nunca aparecían, por un registro cambiado. La corrección fueron <b>dos bytes</b>.' } },
  { jogo: 'famicom-jump-2', etiqueta: { pt:'Engenharia', en:'Engineering', es:'Ingeniería' },
    numero: '6,25 → 3,90', unidade: { pt:'bits por caractere', en:'bits per character', es:'bits por carácter' },
    texto: { pt:'O inglês não cabia. Em vez de cortar texto, troquei a compressão por um Huffman de ordem 1 — decodificador de <b>89 bytes</b> de 6502.',
             en:'English did not fit. Rather than trim text, I replaced the compression with an order-1 Huffman coder — an <b>89-byte</b> 6502 decoder.',
             es:'El inglés no cabía. En vez de cortar texto, cambié la compresión por un Huffman de orden 1 — decodificador de <b>89 bytes</b> de 6502.' } },
  { jogo: 'captain-tsubasa', etiqueta: { pt:'Função nova', en:'New feature', es:'Función nueva' },
    numero: { pt:'senha → bateria', en:'password → battery', es:'contraseña → pila' }, unidade: { pt:'progresso salvo', en:'progress saved', es:'progreso guardado' },
    texto: { pt:'O jogo de 1988 só guardava por senha. Agora grava em bateria — os mesmos 24 bytes que a senha carregava, em <b>97 bytes</b> de código novo.',
             en:'The 1988 game only kept progress by password. Now it writes to battery — the same 24 bytes the password carried, in <b>97 bytes</b> of new code.',
             es:'El juego de 1988 solo guardaba por contraseña. Ahora graba con pila — los mismos 24 bytes que llevaba la contraseña, en <b>97 bytes</b> de código nuevo.' } }
]};

SEED.promessas = { itens: [
  { titulo: { pt:'Só patches', en:'Patches only', es:'Solo parches' },
    texto:  { pt:'Nunca ROMs.', en:'Never ROMs.', es:'Nunca ROMs.' } },
  { titulo: { pt:'Lançamentos livres', en:'Free releases', es:'Lanzamientos libres' },
    texto:  { pt:'Para todo mundo.', en:'For everyone.', es:'Para todo el mundo.' } },
  { titulo: { pt:'Nenhum prazo falso', en:'No fake deadlines', es:'Ningún plazo falso' },
    texto:  { pt:'Sai quando estiver pronto.', en:'It ships when it is ready.', es:'Sale cuando esté listo.' } }
]};

SEED.hero.ctas = {
  projetos: { pt:'Explorar projetos', en:'Explore projects', es:'Explorar proyectos' },
  apoiar:   { pt:'Apoie o clã', en:'Support the clan', es:'Apoya al clan' },
  regra:    { pt:'Só patches. Nunca ROMs. Sempre de graça.', en:'Patches only. Never ROMs. Always free.', es:'Solo parches. Nunca ROMs. Siempre gratis.' }
};

SEED.patreon.horas = { numero: '200+', rotulo: { pt:'horas antes de uma palavra chegar à tela', en:'hours before one word reaches the screen', es:'horas antes de que una palabra llegue a la pantalla' },
  passos: [ { pt:'Desmontar', en:'Disassemble', es:'Desensamblar' }, { pt:'Entender', en:'Understand', es:'Entender' },
            { pt:'Programar', en:'Program', es:'Programar' }, { pt:'Testar', en:'Test', es:'Probar' }, { pt:'Reescrever', en:'Rewrite', es:'Reescribir' } ] };
SEED.patreon.tiers[1].recomendado = true;

/* Primeira dobra reescrita: a promessa curta, o CTA ligado à missão,
   e o texto longo empurrado para a página Sobre, onde ele não disputa com o clique. */
SEED.hero.eyebrow = {
  pt: 'Rom hacking · Tradução · Preservação',
  en: 'Rom hacking · Translation · Preservation',
  es: 'Rom hacking · Traducción · Preservación'
};
SEED.hero.curta = {
  pt: 'Traduções completas, bugs de décadas corrigidos e melhorias que respeitam o hardware original.',
  en: 'Complete translations, decades-old bugs fixed, and improvements that respect the original hardware.',
  es: 'Traducciones completas, bugs de décadas corregidos y mejoras que respetan el hardware original.'
};
SEED.hero.ctas.apoiar = { pt: 'Ajude o próximo jogo', en: 'Help the next game', es: 'Ayuda al próximo juego' };
SEED.hero.ctas.apoiarNota = {
  pt: 'financie o desenvolvimento, os testes e a preservação',
  en: 'fund the development, the testing and the preservation',
  es: 'financia el desarrollo, las pruebas y la preservación'
};
SEED.hero.ativo = { pt: 'Ativo', en: 'Active', es: 'Activo' };
SEED.marca = { selo: { pt: 'Rom hacking artesanal', en: 'Handmade rom hacking', es: 'Rom hacking artesanal' } };
/* o parágrafo longo continua existindo — mudou de lugar, para a página Sobre */
SEED.who.abertura = SEED.hero.lede;

/* Acabamento da dobra: o eyebrow passa a dizer o que os três projetos de fato fazem
   (traduzir e melhorar), o número volta a ser concreto, e o CTA nomeia o projeto,
   não o jogo — porque o trabalho já não é só tradução. */
SEED.hero.eyebrow = {
  pt: 'Rom hacking · Tradução · Melhorias',
  en: 'Rom hacking · Translation · Improvement',
  es: 'Rom hacking · Traducción · Mejoras'
};
SEED.hero.curta = {
  pt: 'Traduções completas, <b>bugs de trinta e cinco anos consertados</b> e melhorias que respeitam o hardware original.',
  en: 'Complete translations, <b>35-year-old bugs fixed</b>, and improvements that respect the original hardware.',
  es: 'Traducciones completas, <b>bugs de treinta y cinco años corregidos</b> y mejoras que respetan el hardware original.'
};
SEED.hero.ctas.apoiar = { pt: 'Apoie o próximo projeto', en: 'Support the next project', es: 'Apoya el próximo proyecto' };
SEED.hero.ctas.apoiarNota = {
  pt: 'Financie as horas, os testes e o hardware.',
  en: 'Fund the hours, the testing and the hardware.',
  es: 'Financia las horas, las pruebas y el hardware.'
};

/* Os três níveis, reescritos em 07/09/2026 — valores e contrapartidas novos.
   Fonte única: aqui ficam os três idiomas, e o es.mjs não toca mais nisto. */
SEED.patreon.tiers = [
  { nome: 'Two Bytes', preco: '$3', periodo: { pt: '/mês', en: '/month', es: '/mes' },
    nota: { pt: 'os dois bytes que consertaram o Famicom Jump II',
            en: 'the two bytes that fixed Famicom Jump II',
            es: 'los dos bytes que arreglaron Famicom Jump II' },
    itens: [
      { pt: '<b>Só quero ajudar.</b> É exatamente isto: nenhuma contrapartida, nenhuma fila, nada exclusivo.',
        en: '<b>I just want to help.</b> That is exactly it: no perks, no queue, nothing exclusive.',
        es: '<b>Solo quiero ayudar.</b> Es exactamente eso: ninguna contrapartida, ninguna fila, nada exclusivo.' },
      { pt: 'Todo patch continua <b>gratuito para todo mundo</b>, apoiador ou não.',
        en: 'Every patch stays <b>free for everyone</b>, patron or not.',
        es: 'Todo parche sigue siendo <b>gratis para todo el mundo</b>, mecenas o no.' }
    ] },

  { nome: 'Bank Switch', preco: '$10', periodo: { pt: '/mês', en: '/month', es: '/mes' }, recomendado: true,
    nota: { pt: 'a troca de banco, que é como um cartucho de 1988 guarda mais do que devia',
            en: 'bank switching, which is how a 1988 cartridge holds more than it should',
            es: 'el cambio de banco, que es cómo un cartucho de 1988 guarda más de lo que debería' },
    itens: [
      { pt: '<b>Patches beta antes do lançamento público</b>, com a lista de defeitos conhecidos — o build que já se joga inteiro, mas ainda não passou pela última leitura.',
        en: '<b>Beta patches before public release</b>, with the known-issues list — the build you can already play through, but which has not had its final read-through.',
        es: '<b>Parches beta antes del lanzamiento público</b>, con la lista de defectos conocidos — la build que ya se juega entera, pero que aún no ha pasado la última lectura.' },
      { pt: '<b>Participe das pesquisas sobre os próximos jogos.</b> Qual cartucho vale a pena abrir, em que ordem, e o que se procura antes de decidir — a conversa acontece com você dentro.',
        en: '<b>Take part in the research on the next games.</b> Which cartridge is worth opening, in what order, and what gets measured before deciding — the conversation happens with you in it.',
        es: '<b>Participa en la investigación sobre los próximos juegos.</b> Qué cartucho vale la pena abrir, en qué orden, y qué se mide antes de decidir — la conversación ocurre contigo dentro.' },
      { pt: '<b>Seu nome nos agradecimentos do site</b>, enquanto o apoio durar.',
        en: '<b>Your name in the site’s thanks</b>, for as long as the pledge lasts.',
        es: '<b>Tu nombre en los agradecimientos del sitio</b>, mientras dure el apoyo.' }
    ] },

  { nome: 'The Seventh Hero', preco: '$25', periodo: { pt: '/mês', en: '/month', es: '/mes' },
    nota: { pt: 'o sétimo escolhido do Famicom Jump II é você',
            en: 'the seventh champion in Famicom Jump II is you',
            es: 'el séptimo elegido de Famicom Jump II eres tú' },
    itens: [
      { pt: 'Tudo do <b>Bank Switch</b>.',
        en: 'Everything in <b>Bank Switch</b>.',
        es: 'Todo lo de <b>Bank Switch</b>.' },
      { pt: '<b>Acesso a todas as versões alfa das traduções</b> — as builds em montagem, antes mesmo do beta, com o texto ainda mudando e as telas ainda meio japonesas. É ver o trabalho acontecendo, não o resultado dele.',
        en: '<b>Access to every alpha build of the translations</b> — the builds still being assembled, before the beta, with the text still moving and the screens still half Japanese. It is watching the work happen, not its result.',
        es: '<b>Acceso a todas las versiones alfa de las traducciones</b> — las builds aún en montaje, antes del beta, con el texto todavía cambiando y las pantallas aún medio japonesas. Es ver el trabajo ocurriendo, no su resultado.' }
    ] }
];

/* Os níveis novos dão beta e alfa antes do público — então duas frases da página
   viraram mentira e foram reescritas. O princípio não mudou: o patch PRONTO é de
   graça para todo mundo. O que a assinatura antecipa é o build inacabado. */
SEED.patreon.rodape = {
  pt: 'O patch pronto é sempre gratuito para todo mundo. O que a assinatura antecipa é o build <b>inacabado</b> — o beta com defeitos conhecidos, o alfa com telas ainda meio japonesas — e o relato de como ele está sendo feito. Ninguém paga para poder jogar a versão final.',
  en: 'The finished patch is always free for everyone. What a pledge brings forward is the <b>unfinished</b> build — the beta with its known issues, the alpha with screens still half Japanese — and the account of how it is being made. Nobody pays to play the finished version.',
  es: 'El parche terminado siempre es gratis para todo el mundo. Lo que la suscripción adelanta es la build <b>inacabada</b> — la beta con sus defectos conocidos, la alfa con pantallas aún medio japonesas — y el relato de cómo se está haciendo. Nadie paga por jugar la versión final.'
};
SEED.patreon.promessa = {
  pt: 'Três coisas que não mudam: <b>nenhuma ROM é distribuída</b>, só patches. <b>Todo patch pronto é de graça</b> para todo mundo, apoiador ou não. E <b>nenhuma data é prometida</b>, porque data prometida vira pressa, e pressa aparece no texto.',
  en: 'Three things that never change: <b>no ROMs are distributed</b>, only patches. <b>Every finished patch is free</b> for everyone, patron or not. And <b>no dates are promised</b>, because a promised date turns into a rush, and the rush shows up in the text.',
  es: 'Tres cosas que no cambian: <b>no se distribuye ninguna ROM</b>, solo parches. <b>Todo parche terminado es gratis</b> para todo el mundo, mecenas o no. Y <b>no se promete ninguna fecha</b>, porque nunca he acertado una.'
};
SEED.rules.items[1] = {
  title: { pt: 'Todo patch pronto é de graça', en: 'Every finished patch is free', es: 'Todo parche terminado es gratis' },
  text:  { pt: 'Para todo mundo, apoiador ou não. O que apoiador recebe antes é build inacabado — nunca a versão final.',
           en: 'For everyone, patron or not. What patrons get early is an unfinished build — never the finished version.',
           es: 'Para todo el mundo, mecenas o no. Lo que reciben antes los mecenas es una build inacabada — nunca la versión final.' }
};

/* A régua dos três níveis. Ela vale para toda tradução do clã, e é a mesma escada
   do Patreon: alfa no Seventh Hero, beta no Bank Switch, release para todo mundo. */
SEED.niveis = {
  titulo: { pt: 'Como as traduções são classificadas', en: 'How the translations are classified', es: 'Cómo se clasifican las traducciones' },
  intro: {
    pt: 'Três níveis, e só três. O nível não é otimismo: ele descreve <b>o que dá para fazer com o patch hoje</b>.',
    en: 'Three levels, and only three. The level is not optimism: it describes <b>what you can do with the patch today</b>.',
    es: 'Tres niveles, y solo tres. El nivel no es optimismo: describe <b>qué se puede hacer con el parche hoy</b>.'
  },
  itens: [
    { chave: 'release', marca: '✓',
      texto: { pt: 'O jogo inteiro em inglês, cada linha lida antes de sair, e o patch publicado. Nenhuma pendência conhecida. <b>De graça para todo mundo.</b>',
               en: 'The whole game in English, every line read before shipping, and the patch published. No known pending work. <b>Free for everyone.</b>',
               es: 'El juego entero en inglés, cada línea leída antes de salir, y el parche publicado. Ninguna pendencia conocida. <b>Gratis para todo el mundo.</b>' } },
    { chave: 'beta', marca: '●',
      texto: { pt: '<b>Já foi jogado do começo ao fim em inglês</b>, mas há pendências <b>conhecidas e listadas</b> na página do projeto, e a leitura final ainda não aconteceu. Vai antes para quem apoia no <b>Bank Switch</b>.',
               en: '<b>It has been played start to finish in English</b>, but there are <b>known and listed</b> pending items on the project page, and the final read-through has not happened. It goes first to <b>Bank Switch</b> patrons.',
               es: '<b>Ya se ha jugado de principio a fin en inglés</b>, pero hay pendencias <b>conocidas y listadas</b> en la página del proyecto, y la lectura final aún no ha ocurrido. Va antes a quien apoya en <b>Bank Switch</b>.' } },
    { chave: 'alfa', marca: '○',
      texto: { pt: 'Ainda não se sabe se dá para jogar em inglês do começo ao fim — texto incompleto, telas em japonês, sem build montada, ou uma build que ninguém atravessou ainda. É o trabalho acontecendo. Vai antes para quem apoia no <b>The Seventh Hero</b>.',
               en: 'It is not yet known whether it can be played in English start to finish — incomplete text, Japanese screens, no assembled build, or a build nobody has crossed yet. This is the work happening. It goes first to <b>The Seventh Hero</b> patrons.',
               es: 'Todavía no se sabe si se puede jugar en inglés de principio a fin — texto incompleto, pantallas en japonés, sin build montada, o una build que nadie ha atravesado aún. Es el trabajo ocurriendo. Va antes a quien apoya en <b>The Seventh Hero</b>.' } }
  ]
};

/* A régua, escrita pelas etapas (17/09/2026). O gerador confere que o nível de cada
   jogo bate com a linha dele em etapas.mjs: release = as seis; beta = hacking e
   tradução feitos; alfa = o resto. A mesma versão foi gravada no Supabase. */
SEED.niveis = {
  titulo: { pt: 'Release, beta e alfa', en: 'Release, beta and alpha', es: 'Release, beta y alfa' },
  intro: {
    pt: 'Três níveis, e só três. Cada um é definido pelas <b>seis etapas</b> que a ficha do projeto mostra (hacking, tradução, revisão, arte, testes e longplay), e não por otimismo.',
    en: 'Three levels, and only three. Each one is defined by the <b>six stages</b> shown on the project page (hacking, translation, editing, art, testing and longplay), not by optimism.',
    es: 'Tres niveles, y solo tres. Cada uno se define por las <b>seis etapas</b> que muestra la ficha del proyecto (hacking, traducción, revisión, arte, pruebas y longplay), y no por optimismo.'
  },
  itens: [
    { chave: 'release', marca: '✓',
      texto: { pt: 'As <b>seis etapas feitas</b>: o jogo inteiro em inglês, revisado com o manual original, sem japonês em imagem, <b>jogado até todos os finais</b> e com cada final gravado em vídeo. É o único nível em que o site publica a lista completa do que entrou. <b>De graça para todo mundo.</b>',
               en: '<b>All six stages done</b>: the whole game in English, edited against the original manual, no Japanese left in images, <b>played through to every ending</b>, and every ending recorded on video. It is the only level where the site publishes the full list of what went in. <b>Free for everyone.</b>',
               es: '<b>Las seis etapas hechas</b>: el juego entero en inglés, revisado con el manual original, sin japonés en imágenes, <b>jugado hasta todos los finales</b> y con cada final grabado en video. Es el único nivel en el que el sitio publica la lista completa de lo que entró. <b>Gratis para todo el mundo.</b>' } },
    { chave: 'beta', marca: '●',
      texto: { pt: '<b>Hacking e tradução feitos</b>: o roteiro inteiro já está em inglês dentro do jogo. Ainda há etapa aberta (revisão, arte, testes ou longplay), e a ficha mostra qual. Vai antes para quem apoia no <b>Bank Switch</b>.',
               en: '<b>Hacking and translation done</b>: the whole script is already in English inside the game. Some stage is still open (editing, art, testing or longplay), and the project page shows which. It goes first to <b>Bank Switch</b> patrons.',
               es: '<b>Hacking y traducción hechos</b>: el guion entero ya está en inglés dentro del juego. Todavía hay alguna etapa abierta (revisión, arte, pruebas o longplay), y la ficha muestra cuál. Va antes a quien apoya en <b>Bank Switch</b>.' } },
    { chave: 'alfa', marca: '○',
      texto: { pt: '<b>Ainda falta inserir ou traduzir parte do jogo</b>, então pode haver menus, telas ou falas em japonês. É o trabalho acontecendo. Vai antes para quem apoia no <b>The Seventh Hero</b>.',
               en: '<b>Part of the game still has to be inserted or translated</b>, so some menus, screens or lines may still be in Japanese. This is the work happening. It goes first to <b>The Seventh Hero</b> patrons.',
               es: '<b>Todavía falta insertar o traducir parte del juego</b>, así que puede haber menús, pantallas o diálogos en japonés. Es el trabajo ocurriendo. Va antes a quien apoya en <b>The Seventh Hero</b>.' } }
  ],
  fecho: {
    pt: 'O nível sobe quando a etapa foi <b>provada</b>, não quando parece estar quase. A ficha mostra em que etapa cada projeto está; o detalhe do que falta dentro de cada uma fica fora do site, porque mudaria toda semana.',
    en: 'A level goes up when a stage has been <b>proved</b>, not when it looks nearly there. The project page shows which stage each project has reached; the detail of what is missing inside each stage stays off the site, because it would change every week.',
    es: 'El nivel sube cuando la etapa se ha <b>probado</b>, no cuando parece que casi. La ficha muestra en qué etapa está cada proyecto; el detalle de lo que falta dentro de cada una queda fuera del sitio, porque cambiaría cada semana.'
  }
};

/* A FILA. Não é um quarto nível: release, beta e alfa dizem o que dá para jogar hoje,
   e a fila diz o que ainda não começou. Por isso ela não tem selo, não tem card e não
   entra no placar — é uma lista, e o site diz que é. */
SEED.fila = {
  titulo: { pt: 'Na fila', en: 'Next in line', es: 'En la cola' },
  intro: {
    pt: 'O que vem depois. Nenhum destes cartuchos foi aberto ainda — quando um deles for, ganha página própria e sai desta lista. Todos passaram pela mesma pergunta, feita <b>antes</b> de qualquer entusiasmo: “este jogo já tem patch em inglês?” — e em todos a resposta foi não.',
    en: 'What comes next. None of these cartridges has been opened yet — the day one is, it gets its own page and leaves this list. All of them went through the same question, asked <b>before</b> any enthusiasm: “does this game already have an English patch?” — and for all of them the answer was no.',
    es: 'Lo que viene después. Ninguno de estos cartuchos se ha abierto todavía — el día que uno se abra, tendrá página propia y saldrá de esta lista. Todos pasaron por la misma pregunta, hecha <b>antes</b> que cualquier entusiasmo: “¿este juego ya tiene parche en inglés?” — y en todos la respuesta fue no.'
  },
  criterio: {
    pt: 'O padrão que organiza a lista é o <b>órfão de série</b>: a comunidade traduz o primeiro jogo e para. Foi o caso do Famicom Jump, e é o caso de quase tudo aqui.',
    en: 'The pattern that organises this list is the <b>orphan sequel</b>: the community translates the first game and stops. That was the case with Famicom Jump, and it is the case with almost everything here.',
    es: 'El patrón que organiza esta lista es el <b>huérfano de serie</b>: la comunidad traduce el primer juego y se detiene. Fue el caso de Famicom Jump, y es el caso de casi todo lo que hay aquí.'
  },
  itens: [
    { nome: 'SD Gundam Gaiden: Knight Gundam Monogatari 2', sistema: 'Famicom', ano: 1991,
      porque: { pt: 'O primeiro foi traduzido e a série parou aí. RPG, IP de primeira linha, nenhum projeto público em andamento.',
                en: 'The first was translated and the series stopped there. An RPG, a first-rank IP, and no public project under way.',
                es: 'El primero fue traducido y la serie se detuvo ahí. RPG, IP de primera línea, ningún proyecto público en marcha.' } },
    { nome: 'SD Gundam Gaiden: Knight Gundam Monogatari 3', sistema: 'Famicom', ano: 1992,
      porque: { pt: 'O mesmo caso do 2, e pela mesma razão: as resenhas do primeiro pedem os dois sequels.',
                en: 'The same case as 2, for the same reason: reviews of the first ask for both sequels.',
                es: 'El mismo caso que el 2, por la misma razón: las reseñas del primero piden ambas secuelas.' } },
    { nome: 'Hokuto no Ken 4: Shichisei Haken Den', sistema: 'Famicom', ano: 1991,
      porque: { pt: 'Órfão desde que o terceiro saiu em inglês, em 2024. <b>A conferir antes de começar:</b> há sinal de projeto pessoal ativo no fórum.',
                en: 'Orphaned since the third came out in English in 2024. <b>To check before starting:</b> there is a sign of an active personal project on the forum.',
                es: 'Huérfano desde que el tercero salió en inglés, en 2024. <b>A comprobar antes de empezar:</b> hay señal de un proyecto personal activo en el foro.' } },
    { nome: 'Slam Dunk 2: IH Yuushou e no Michi', sistema: 'Super Famicom', ano: 1995,
      porque: { pt: 'Nenhum dos quatro jogos de Slam Dunk tem patch em inglês. Um projeto de fórum procurou gente em 2017 e morreu ali.',
                en: 'None of the four Slam Dunk games has an English patch. A forum project looked for people in 2017 and died there.',
                es: 'Ninguno de los cuatro juegos de Slam Dunk tiene parche en inglés. Un proyecto de foro buscó gente en 2017 y murió ahí.' } },
    { nome: 'Hokuto no Ken 6 · 7', sistema: 'Super Famicom', ano: 1992,
      porque: { pt: 'O sétimo aparece em listas públicas de “SNES ainda sem tradução”. Nenhum patch encontrado para os dois.',
                en: 'The seventh shows up in public lists of “SNES still untranslated”. No patch found for either.',
                es: 'El séptimo aparece en listas públicas de “SNES aún sin traducir”. Ningún parche encontrado para los dos.' } }
  ],
  aviso: {
    pt: 'Estar na fila <b>não é promessa</b>, e a ordem não está decidida. É nessa lista que a conversa acontece com quem apoia no <b>Bank Switch</b>: qual cartucho vale a pena abrir, e em que ordem.',
    en: 'Being in the queue is <b>not a promise</b>, and the order is not decided. This list is where the conversation happens with <b>Bank Switch</b> patrons: which cartridge is worth opening, and in what order.',
    es: 'Estar en la cola <b>no es una promesa</b>, y el orden no está decidido. En esta lista ocurre la conversación con quien apoya en <b>Bank Switch</b>: qué cartucho vale la pena abrir, y en qué orden.'
  }
};

/* A equipe: cinco cargos, sem nomes. Cada cargo é uma etapa por onde todo patch
   passa — a mesma lista que a faixa da ficha de cada jogo mostra (etapas.mjs). */
SEED.equipe = {
  intro: { pt: 'Cinco cargos e seis etapas. A ficha de cada projeto mostra em que etapa ele está. Só vira release o patch que passou pelas seis.',
           en: 'Five roles and six stages. Each project page shows which stage it has reached. Only a patch that has cleared all six becomes a release.',
           es: 'Cinco cargos y seis etapas. La ficha de cada proyecto muestra en qué etapa está. Solo es release el parche que pasó por las seis.' },
  cargos: [
    { nome: { pt: 'Direção e hacking', en: 'Direction and hacking', es: 'Dirección y hacking' },
      texto: { pt: 'Escolhe o jogo e abre o cartucho: ponteiros, fonte, expansão e as ferramentas de cada projeto.',
               en: 'Picks the game and opens the cartridge: pointers, font, expansion, and the tools each project needs.',
               es: 'Elige el juego y abre el cartucho: punteros, fuente, expansión y las herramientas de cada proyecto.' } },
    { nome: { pt: 'Tradução', en: 'Translation', es: 'Traducción' },
      texto: { pt: 'Do japonês para inglês, português e espanhol.',
               en: 'From Japanese into English, Portuguese and Spanish.',
               es: 'Del japonés al inglés, portugués y español.' } },
    { nome: { pt: 'Revisão', en: 'Editing', es: 'Revisión' },
      texto: { pt: 'Texto que soa natural, nomes consistentes do começo ao fim, e que cabe na caixa.',
               en: 'Text that reads naturally, names consistent from start to finish, and lines that fit the box.',
               es: 'Texto que suena natural, nombres coherentes de principio a fin, y que cabe en la caja.' } },
    { nome: { pt: 'Arte', en: 'Art', es: 'Arte' },
      texto: { pt: 'Tela de título, logos, fontes e todo texto que mora dentro de imagem.',
               en: 'Title screen, logos, fonts, and every piece of text that lives inside an image.',
               es: 'Pantalla de título, logos, fuentes y todo texto que vive dentro de una imagen.' } },
    { nome: { pt: 'Testes', en: 'Testing', es: 'Pruebas' },
      texto: { pt: 'Joga até todos os finais, caça bug, registra o que ainda está quebrado e grava o longplay.',
               en: 'Plays through to every ending, hunts bugs, logs what is still broken, and records the longplay.',
               es: 'Juega hasta todos los finales, caza bugs, registra lo que sigue roto y graba el longplay.' } }
  ],
  /* a ordem e os ids batem com ETAPAS_ORDEM em etapas.mjs */
  etapas: [
    { id: 'direcao',  curto: { pt: 'Hacking', en: 'Hacking', es: 'Hacking' },
      criterio: { pt: 'O texto entra no jogo pelas nossas ferramentas, e a ROM traduzida inteira sai delas.',
                  en: 'Text goes into the game through our own tools, and the full translated ROM comes out of them.',
                  es: 'El texto entra al juego por nuestras herramientas, y la ROM traducida entera sale de ellas.' } },
    { id: 'traducao', curto: { pt: 'Tradução', en: 'Translation', es: 'Traducción' },
      criterio: { pt: 'O roteiro inteiro em inglês, dentro do jogo: falas, menus, nomes e créditos.',
                  en: 'The whole script in English, inside the game: dialogue, menus, names and credits.',
                  es: 'El guion entero en inglés, dentro del juego: diálogos, menús, nombres y créditos.' } },
    { id: 'revisao',  curto: { pt: 'Revisão', en: 'Editing', es: 'Revisión' },
      criterio: { pt: 'Uma leitura do roteiro inteiro, conferida com o manual e os guias japoneses originais.',
                  en: 'One read of the whole script, checked against the original Japanese manual and guides.',
                  es: 'Una lectura del guion entero, cotejada con el manual y las guías japonesas originales.' } },
    { id: 'arte',     curto: { pt: 'Arte', en: 'Art', es: 'Arte' },
      criterio: { pt: 'Nenhum japonês sobrando em imagem: título, logos, placas e texturas.',
                  en: 'No Japanese left inside images: title, logos, signs and textures.',
                  es: 'Nada de japonés en imágenes: título, logos, carteles y texturas.' } },
    { id: 'testes',   curto: { pt: 'Testes', en: 'Testing', es: 'Pruebas' },
      criterio: { pt: 'O jogo traduzido atravessado até todos os finais, sem pendência aberta.',
                  en: 'The translated game played through to every ending, with nothing left open.',
                  es: 'El juego traducido recorrido hasta todos los finales, sin nada pendiente.' } },
    { id: 'longplay', curto: { pt: 'Longplay', en: 'Longplay', es: 'Longplay' },
      criterio: { pt: 'Cada final gravado em vídeo, do começo ao fim, na versão traduzida.',
                  en: 'Every ending recorded on video, start to finish, in the translated version.',
                  es: 'Cada final grabado en video, de principio a fin, en la versión traducida.' } }
  ],
  estados: {
    feito:     { pt: 'feito', en: 'done', es: 'hecho' },
    andamento: { pt: 'em andamento', en: 'in progress', es: 'en curso' },
    nao:       { pt: 'não começou', en: 'not started', es: 'sin empezar' }
  }
};

/* Chamada reescrita em 17/09/2026, quando o site ficou sem release: nada de
   "traduções completas" nem "sempre de graça" — de graça é o release; beta e
   alfa saem antes para quem apoia. A mesma versão foi gravada no Supabase. */
SEED.hero.curta = {
  pt: 'Traduções de jogos que o Japão guardou para si, <b>bugs de trinta e cinco anos consertados</b> e melhorias que respeitam o hardware original.',
  en: 'Translations of games Japan kept to itself, <b>35-year-old bugs fixed</b>, and improvements that respect the original hardware.',
  es: 'Traducciones de juegos que Japón se guardó, <b>bugs de treinta y cinco años corregidos</b> y mejoras que respetan el hardware original.'
};
SEED.hero.ctas.projetos = { pt: 'Ver as traduções', en: 'See the translations', es: 'Ver las traducciones' };
SEED.hero.ctas.regra = {
  pt: 'Só patches. Nunca ROMs. Todo release, de graça.',
  en: 'Patches only. Never ROMs. Every release, free.',
  es: 'Solo parches. Nunca ROMs. Todo release, gratis.'
};
SEED.hero.note = {
  pt: 'Só patches, nunca ROMs. Todo release sai de graça, para todo mundo; beta e alfa saem antes para quem apoia.',
  en: 'Patches only, never ROMs. Every release is free for everyone; betas and alphas go first to patrons.',
  es: 'Solo parches, nunca ROMs. Todo release sale gratis para todo el mundo; beta y alfa salen antes para quien apoya.'
};
