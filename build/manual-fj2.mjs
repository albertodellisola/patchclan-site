// Manual em inglês do Famicom Jump II, escrito sobre o jogo TRADUZIDO:
// todo comando citado aqui é a string exata que aparece na tela do patch.
export const MANUAL_FJ2 = {
  slug: 'famicom-jump-2',
  titulo: { pt: 'Manual do jogador', en: "Player's manual" },
  intro: {
    pt: 'Este manual descreve o jogo <b>como ele aparece no patch em inglês</b>. Todo comando citado aqui é a palavra exata que está na tela — não é tradução do manual japonês, é o jogo que você vai jogar.',
    en: 'This manual describes the game <b>as it appears in the English patch</b>. Every command named here is the exact word on screen — this is not a translation of the Japanese manual, it is the game you are going to play.'
  },
  secoes: [
    { id: 'story', titulo: { pt: 'A história', en: 'The story' }, foto: 'fj2/05-espirito-jump-world.png',
      paras: {
        pt: ['O mundo dos mangás da Jump foi invadido. Um espírito chama você e diz que <b>sete campeões</b> foram escolhidos para enfrentar o que vem — e nomeia os seis que faltam encontrar, fechando com “e você também”.',
             'Você começa com um dos sete e sai atrás dos outros. Antes disso, o patch acrescenta um <b>prólogo de cinco páginas</b> que conta o primeiro jogo de 1989 — quem nunca jogou o <i>Eiyuu Retsuden</i> não perde nada da história.'],
        en: ['The world of the Jump manga has been invaded. A spirit calls you and says <b>seven champions</b> have been chosen to face what is coming — then names the six you still have to find, closing with “and you as well.”',
             'You start as one of the seven and go looking for the others. Before that, the patch adds a <b>five-page prologue</b> recapping the 1989 first game — anyone who never played <i>Eiyuu Retsuden</i> misses nothing of the story.']
      }},
    { id: 'heroes', titulo: { pt: 'Os sete heróis', en: 'The seven heroes' },
      paras: { pt: ['Sete séries da Weekly Shōnen Jump dividem o mesmo campo de batalha. <b>Três lutam por vez</b>; do quarto em diante, os que ficam de fora treinam e continuam ganhando experiência.'],
               en: ['Seven Weekly Shōnen Jump series share one battlefield. <b>Three fight at a time</b>; from the fourth onward, whoever sits out trains and keeps earning experience.'] },
      lista: [
        { k: 'Goku', v: { pt: 'Dragon Ball', en: 'Dragon Ball' } },
        { k: 'JoJo', v: { pt: "JoJo's Bizarre Adventure — Jotaro Kujo", en: "JoJo's Bizarre Adventure — Jotaro Kujo" } },
        { k: 'Ryotsu', v: { pt: 'KochiKame — o policial', en: 'KochiKame — the policeman' } },
        { k: 'Taruruto', v: { pt: 'Magical Taruruto-kun', en: 'Magical Taruruto-kun' } },
        { k: 'Ta-chan', v: { pt: 'Jungle King Tar-chan', en: 'Jungle King Tar-chan' } },
        { k: 'Momotaro', v: { pt: 'Sakigake!! Otokojuku', en: 'Sakigake!! Otokojuku' } },
        { k: 'Taison', v: { pt: 'Rokudenashi Blues', en: 'Rokudenashi Blues' } }
      ]},
    { id: 'start', titulo: { pt: 'Começar a jogar', en: 'Starting the game' }, foto: 'fj2/02-creditos.png',
      paras: {
        pt: ['A tela de créditos do patch abre antes do título e sai sozinha em cinco segundos — <b>A</b> ou <b>START</b> pula na hora.',
             'No título, <b><code>New Game</code></b> começa do zero e <b><code>Continue</code></b> carrega um dos três diários salvos. Ao começar, o jogo pede <b><code>Begin with</code></b>: é a escolha de qual dos sete heróis você controla primeiro. <b>Essa escolha muda a fala de abertura</b> — e é ela que estava quebrada no cartucho original desde 1991.'],
        en: ['The patch credits screen opens before the title and clears itself in five seconds — <b>A</b> or <b>START</b> skips it immediately.',
             'At the title, <b><code>New Game</code></b> starts fresh and <b><code>Continue</code></b> loads one of three saved diaries. On starting, the game asks <b><code>Begin with</code></b>: this is the choice of which of the seven heroes you control first. <b>That choice changes the opening speech</b> — and it is the thing that was broken in the original cartridge since 1991.']
      }},
    { id: 'field', titulo: { pt: 'No mapa', en: 'On the map' }, foto: 'fj2/03-menu-ingles.png',
      paras: {
        pt: ['Você anda com a cruz direcional. Porta, escada e pegar item são <b>automáticos</b> — não existem comandos para isso.',
             '<b>No patch, o botão B é ação coringa:</b> ele fala com quem estiver à frente e, não havendo ninguém, examina o chão sob os seus pés. É a mesma divisão que os dois comandos do menu fazem, num aperto só. Os comandos continuam no menu para quem preferir.'],
        en: ['You walk with the D-pad. Doors, stairs and picking things up are <b>automatic</b> — there are no commands for them.',
             '<b>In this patch, B is a wildcard action button:</b> it talks to whoever is in front of you and, when nobody is, examines the ground under your feet. It is the same split the two menu commands make, in a single press. The menu commands are still there for anyone who prefers them.']
      },
      lista: [
        { k: 'Talk', v: { pt: 'Conversa com o personagem à sua frente', en: 'Talks to the character in front of you' } },
        { k: 'Look', v: { pt: 'Examina o lugar onde você está parado', en: 'Examines the place you are standing on' } },
        { k: 'Item', v: { pt: 'Abre a mochila — <code>Use</code>, <code>Give</code>, <code>Drop</code>', en: 'Opens the bag — <code>Use</code>, <code>Give</code>, <code>Drop</code>' } },
        { k: 'Stat', v: { pt: 'Mostra a ficha do herói: corações, atributos e nível', en: 'Shows a hero’s card: hearts, stats and level' } },
        { k: 'Gear', v: { pt: 'Equipamento', en: 'Equipment' } },
        { k: 'Plan', v: { pt: 'Salvar, velocidade de texto, ordem do grupo e diário', en: 'Saving, text speed, party order and the diary' } }
      ]},
    { id: 'battle', titulo: { pt: 'A batalha — o sistema S·A·S', en: 'Battle — the S·A·S system' },
      paras: {
        pt: ['Não é um RPG de menu. O manual original chama o sistema de <b>S·A·S, Simulation Action System</b>, e ele é tático: a luta acontece <b>em cima do próprio cenário</b>, em tela cheia, sem janela de comando permanente e sem número de vida nenhum na tela.',
             '<b>O turno é por lado:</b> o seu grupo inteiro age, depois os inimigos. Cada herói se move livremente dentro do <b>alcance</b> dele — e alcance é um atributo que <b>sobe de nível</b>, ao lado de ataque e defesa.',
             '<b>Não existe passo de escolher alvo.</b> A mira é a posição: você ataca quem estiver ao alcance de onde você parou. Apertar <b>A</b> sozinho já ataca. O <b>B</b> cicla o balão entre atacar, defender, mover e <b><code>Special</code></b>, e o <b>A</b> confirma.'],
        en: ['This is not a menu RPG. The original manual calls the system <b>S·A·S, Simulation Action System</b>, and it is tactical: the fight happens <b>on the scenery itself</b>, full screen, with no permanent command window and no health number anywhere.',
             '<b>Turns are by side:</b> your whole party acts, then the enemies. Each hero moves freely within their own <b>range</b> — and range is a stat that <b>levels up</b>, alongside attack and defence.',
             '<b>There is no target-selection step.</b> Aim is position: you attack whoever is within reach of where you stopped. Pressing <b>A</b> on its own already attacks. <b>B</b> cycles the balloon between attack, defend, move and <b><code>Special</code></b>, and <b>A</b> confirms.']
      },
      lista: [
        { k: { pt: 'Vida', en: 'Health' }, v: { pt: 'Contada em <b>corações</b>, não em números. Começa com cinco e sobe de nível.', en: 'Counted in <b>hearts</b>, not numbers. You start with five, and they grow with levels.' } },
        { k: { pt: 'Cor do herói', en: 'Hero colour' }, v: { pt: 'A cor <b>é</b> o estado: dois corações restantes fica roxo, um coração fica vermelho, envenenado fica azul.', en: 'The colour <b>is</b> the state: two hearts left turns purple, one heart turns red, poisoned turns blue.' } },
        { k: 'Special', v: { pt: 'O golpe especial custa <b>um coração</b> — não existe barra de magia.', en: 'The special move costs <b>one heart</b> — there is no magic bar.' } },
        { k: { pt: 'Fugir', en: 'Escaping' }, v: { pt: 'Não há comando: você <b>anda até a borda da tela</b>. Falhar dá <code>Enemy circled you!</code> — o inimigo cortou seu caminho. Alcance de movimento alto ajuda a escapar.', en: 'There is no command: you <b>walk to the edge of the screen</b>. Failing gives <code>Enemy circled you!</code> — the enemy cut you off. A high movement range helps you get away.' } },
        { k: { pt: 'Derrota', en: 'Defeat' }, v: { pt: 'Se o grupo inteiro cai, você volta ao Grande Santuário e perde <b>metade do dinheiro</b>. Se um herói sobreviver, todos são curados de graça.', en: 'If the whole party falls you return to the Great Shrine and lose <b>half your money</b>. If one hero survives, everyone is healed for free.' } }
      ]},
    { id: 'stronger', titulo: { pt: 'Ficar mais forte', en: 'Getting stronger' }, foto: 'fj2/08-soulring.png',
      paras: {
        pt: ['Subir de nível aumenta os corações, o ataque, a defesa e o <b>alcance de movimento</b>. Não há barra de experiência na tela — o jogo avisa quando sobe.',
             'Os heróis que <b>não estão no grupo ativo</b> não ficam parados: eles treinam e ganham experiência sozinhos. Trocar de favorito não custa nada, e é a razão pela qual vale recrutar todo mundo.',
             'Dinheiro se chama <b><code>Zeni</code></b>. Nas lojas você usa <b><code>Buy</code></b> e <b><code>Sell</code></b>, e o jogo pergunta a quantidade em <b><code>Qty</code></b>.']
      , en: ['Levelling raises hearts, attack, defence and <b>movement range</b>. There is no experience bar on screen — the game tells you when you go up.',
             'Heroes <b>outside the active party</b> are not idle: they train and earn experience on their own. Switching favourites costs nothing, which is why recruiting everyone is worth it.',
             'Money is called <b><code>Zeni</code></b>. In shops you use <b><code>Buy</code></b> and <b><code>Sell</code></b>, and the game asks how many in <b><code>Qty</code></b>.'] }},
    { id: 'save', titulo: { pt: 'Salvar, e a velocidade do texto', en: 'Saving, and text speed' },
      paras: {
        pt: ['Entre em <b><code>Plan</code></b> e escolha <b><code>Save</code></b>. Você pode salvar <b>em qualquer lugar do mapa</b> — a exceção são dungeons e o interior das cidades. São <b>três diários</b>, e <b><code>Diary</code></b> copia e apaga.',
             '<b><code>Speed</code></b> ajusta a velocidade do texto. <code>Fast</code> e <code>Slow</code> são as pontas de uma escala de <b>oito níveis</b>, não as duas únicas opções — vale mexer nisso antes de encarar o roteiro inteiro.',
             '<b><code>Order</code></b> muda a ordem do grupo, e é assim que você escolhe quais três dos sete entram na próxima luta.']
      , en: ['Go into <b><code>Plan</code></b> and choose <b><code>Save</code></b>. You can save <b>anywhere on the overworld</b> — the exceptions are dungeons and the insides of towns. There are <b>three diaries</b>, and <b><code>Diary</code></b> copies and erases them.',
             '<b><code>Speed</code></b> sets the text speed. <code>Fast</code> and <code>Slow</code> are the ends of an <b>eight-level</b> scale, not the only two options — worth setting before you take on the whole script.',
             '<b><code>Order</code></b> changes the party order, and that is how you pick which three of the seven go into the next fight.'] }},
    { id: 'patch', titulo: { pt: 'O que é diferente neste patch', en: 'What is different in this patch' }, foto: 'fj2/06-lista-sete-campeoes.png',
      paras: {
        pt: ['<b>A lista dos sete campeões está certa.</b> No cartucho original o espírito nomeia sempre os mesmos seis heróis, seja qual for o seu. Começar como Taison mandava você procurar o Taison; o Goku nunca era citado. O código correto já estava na ROM e nunca era executado. Aqui ele executa.',
             '<b>Um prólogo de cinco páginas</b> foi acrescentado antes da primeira fala, recapitulando o jogo de 1989.',
             '<b>O botão B virou ação coringa</b> no mapa, como descrito acima. Nada foi tirado: os comandos continuam no menu.',
             '<b>Nada mais foi alterado.</b> Dificuldade, taxa de encontro, tabelas de item, economia e balanceamento são os de 1991. Esta é uma tradução, não um remaster.']
      , en: ['<b>The champion list is correct.</b> In the original cartridge the spirit always names the same six heroes, whichever one is yours. Starting as Taison sent you off to find Taison; Goku was never named at all. The correct code was in the ROM and never ran. Here it runs.',
             '<b>A five-page prologue</b> was added before the first line of dialogue, recapping the 1989 game.',
             '<b>The B button became a wildcard action</b> on the map, as described above. Nothing was removed: the commands are still in the menu.',
             '<b>Nothing else was changed.</b> Difficulty, encounter rate, item tables, economy and balance are the 1991 ones. This is a translation, not a remaster.'] }}
  ]
};
