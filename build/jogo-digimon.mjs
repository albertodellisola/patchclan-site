/* Digimon Story: Super Xros Wars — Blue e Red (Nintendo DS) — entram no site como BETA v0.1 EN (24/10/2026),
   por ordem literal do dono: «subir as duas como beta com o patch no Patreon e fora do site gratuito.»
   Builds: Blue aed76ac3 (md5 aed76ac320114814061e4ffaec26aaa0), Red d34ca37d (md5 d34ca37d0bdbf2cf7bed984c7bcd4e3f).
   Duas fichas, porque são dois cartuchos com ROM original e patch próprios (o patch de um não serve no outro).
   Formato do patch: BPS (a ROM de DS tem 64 MB e o IPS não endereça além de 16 MB), como o SRW64 e o Robopon 64.
   A `capa` é a thumbnail tradicional escolhida pelo dono (Arautos); enquanto não vem, vale uma tela provisória LOCAL. */

const bi = (pt, en, es) => ({ pt, en, es });

function ficha(c) {
  const B = c.cor === 'blue';
  const nome = B ? 'Blue' : 'Red';
  const jpCor = B ? 'ブルー' : 'レッド';
  const outra = B ? 'Red' : 'Blue';
  return {
    slug: `digimon-xros-wars-${c.cor}`,
    nome: `Digimon Story: Super Xros Wars ${nome}`,
    subtitulo: `Digimon Story: Chō Cross Wars ${nome}`,
    jp: `デジモンストーリー 超クロスウォーズ ${jpCor}`,
    publisher: 'Bandai Namco', dev: 'Bandai Namco', ano: 2011, data: '03/03/2011',
    sistema: 'Nintendo DS', mapper: 'Cartucho de 64 MB · texto em arquivos de mensagens, com fonte nova de largura variável',
    categoria: bi('Tradução', 'Translation', 'Traducción'),
    nivel: 'beta',
    capa: `digimon-xros-wars-${c.cor}/00-capa.jpg`,
    patreon: null,
    linha: bi(
      `Um RPG de Digimon para o DS em que você funde monstros para criar outros maiores, cuida de uma ilha-fazenda e conduz batalhas pelo Command Ring. Esta é a versão ${nome}, agora toda em inglês.`,
      `A Digimon RPG for the DS where you fuse monsters into bigger ones, look after a farm island and run battles through the Command Ring. This is the ${nome} version, now entirely in English.`,
      `Un RPG de Digimon para la DS en el que fusionas monstruos para crear otros mayores, cuidas una isla granja y diriges los combates con el Command Ring. Esta es la versión ${nome}, ahora entera en inglés.`),
    resumo: {
      pt: [
        `<b>Bandai Namco, Nintendo DS, 3 de março de 2011.</b> <i>Digimon Story: Super Xros Wars</i> saiu em duas versões irmãs, <i>Red</i> e <i>Blue</i>, e só no Japão. A ideia que dá nome ao jogo é o <i>Xros</i>: juntar Digimon para formar um novo, com a lista de requisitos de força, defesa e amizade que aparece na tela de DigiFusion. Entre uma batalha e outra há a DigiFarm, uma ilha onde você cria seus monstros, o Quest Monitor com as missões, a loja e o Command Ring, o anel de comandos da luta.`,
        `Este patch cobre o cartucho <b>${nome}</b>: 15.977 textos, de diálogos e menus a golpes, itens e missões, estão em inglês, numa fonte de largura variável feita para o DS. O patch do ${outra} é outro arquivo, porque os dois cartuchos são diferentes e um patch não serve no outro. Sai como beta pelo Patreon: ainda falta zerar o jogo do começo ao fim na versão traduzida, e quatro telas de cobertura (tutorial, Zenmetsu, o final R1 e a Jumpfes) ficaram de fora desta versão.`
      ],
      en: [
        `<b>Bandai Namco, Nintendo DS, March 3, 2011.</b> <i>Digimon Story: Super Xros Wars</i> came out in two sister versions, <i>Red</i> and <i>Blue</i>, in Japan only. The idea behind the name is <i>Xros</i>: joining Digimon to form a new one, with the requirements list for strength, defense and friendship that shows on the DigiFusion screen. Between battles there is the DigiFarm, an island where you raise your monsters, the Quest Monitor with its missions, the shop, and the Command Ring that runs the fights.`,
        `This patch covers the <b>${nome}</b> cartridge: 15,977 texts, from dialogue and menus to moves, items and quests, are in English, in a variable-width font made for the DS. The ${outra} patch is a separate file, because the two cartridges differ and one patch does not work on the other. It comes out as a beta through Patreon: the translated game has not yet been played from start to finish, and four coverage screens (the tutorial, Zenmetsu, the R1 ending and Jumpfes) are left out of this version.`
      ],
      es: [
        `<b>Bandai Namco, Nintendo DS, 3 de marzo de 2011.</b> <i>Digimon Story: Super Xros Wars</i> salió en dos versiones hermanas, <i>Red</i> y <i>Blue</i>, solo en Japón. La idea que da nombre al juego es el <i>Xros</i>: unir Digimon para formar uno nuevo, con la lista de requisitos de fuerza, defensa y amistad que aparece en la pantalla de DigiFusion. Entre combate y combate hay la DigiFarm, una isla donde crías a tus monstruos, el Quest Monitor con las misiones, la tienda y el Command Ring, el anillo de órdenes de la lucha.`,
        `Este parche cubre el cartucho <b>${nome}</b>: 15.977 textos, de diálogos y menús a ataques, objetos y misiones, están en inglés, con una fuente de ancho variable hecha para la DS. El parche de ${outra} es otro archivo, porque los dos cartuchos son distintos y un parche no sirve en el otro. Sale como beta por Patreon: aún falta terminar el juego traducido de principio a fin, y cuatro pantallas de cobertura (el tutorial, Zenmetsu, el final R1 y Jumpfes) quedan fuera de esta versión.`
      ]
    },
    numeros: [],
    grupos: [],
    patch: { tipo: 'BPS', versoes: { en: { arquivo: `digimon-xros-wars-${c.cor}-en.bps` }, pt: null, es: null },
             rom: c.rom, rom_md5: c.rom_md5 },
    fotos: [
      { f: `digimon-xros-wars-${c.cor}/01-digifusion.png`, t: bi('DigiFusion', 'DigiFusion', 'DigiFusion'),
        c: bi('O menu da fusão: <code>DIGIFUSION</code>, <code>DNA POWER-UP</code>, <code>CREATE MELODY</code> e <code>DIGIMON LIST</code>, e a explicação em cima, <i>Create a new Digimon from multiple material Digimon using a DigiScore.</i>',
              'The fusion menu: <code>DIGIFUSION</code>, <code>DNA POWER-UP</code>, <code>CREATE MELODY</code> and <code>DIGIMON LIST</code>, with the explanation above, <i>Create a new Digimon from multiple material Digimon using a DigiScore.</i>',
              'El menú de la fusión: <code>DIGIFUSION</code>, <code>DNA POWER-UP</code>, <code>CREATE MELODY</code> y <code>DIGIMON LIST</code>, con la explicación arriba, <i>Create a new Digimon from multiple material Digimon using a DigiScore.</i>') },
      { f: `digimon-xros-wars-${c.cor}/02-requisitos.png`, t: bi('Requisitos da fusão', 'Fusion requirements', 'Requisitos de la fusión'),
        c: bi('A tela do <code>DigiFusion Reqs.</code>: os Digimon que entram, o resultado e os mínimos de nível, força, defesa e amizade.',
              'The <code>DigiFusion Reqs.</code> screen: the Digimon that go in, the result and the minimums for level, strength, defense and friendship.',
              'La pantalla de <code>DigiFusion Reqs.</code>: los Digimon que entran, el resultado y los mínimos de nivel, fuerza, defensa y amistad.') },
      { f: `digimon-xros-wars-${c.cor}/03-quest-monitor.png`, t: bi('Quest Monitor', 'Quest Monitor', 'Quest Monitor'),
        c: bi('A lista de missões, com o objetivo escrito em inglês: <i>Find the Digimon Flying Squad!</i>',
              'The mission list, with the goal written in English: <i>Find the Digimon Flying Squad!</i>',
              'La lista de misiones, con el objetivo escrito en inglés: <i>Find the Digimon Flying Squad!</i>') },
      { f: `digimon-xros-wars-${c.cor}/04-command-ring.png`, t: bi('Command Ring', 'Command Ring', 'Command Ring'),
        c: bi('A batalha: o anel de comandos embaixo e a ficha do Digimon em cima, com <code>Strength</code>, <code>Wisdom</code>, <code>Speed</code>, <code>Defense</code>, <code>Strong</code>, <code>Weak</code> e <code>Status</code>.',
              'The battle: the command ring below and the Digimon\'s data page above, with <code>Strength</code>, <code>Wisdom</code>, <code>Speed</code>, <code>Defense</code>, <code>Strong</code>, <code>Weak</code> and <code>Status</code>.',
              'La batalla: el anillo de órdenes abajo y la ficha del Digimon arriba, con <code>Strength</code>, <code>Wisdom</code>, <code>Speed</code>, <code>Defense</code>, <code>Strong</code>, <code>Weak</code> y <code>Status</code>.') },
      { f: `digimon-xros-wars-${c.cor}/05-digifarm.png`, t: bi('DigiFarm', 'DigiFarm', 'DigiFarm'),
        c: bi('A ilha-fazenda: <i>Please pick an option.</i> e o menu <code>Talk</code>, <code>Train</code>, <code>Work</code>, <code>DigiBytes</code>.',
              'The farm island: <i>Please pick an option.</i> and the menu <code>Talk</code>, <code>Train</code>, <code>Work</code>, <code>DigiBytes</code>.',
              'La isla granja: <i>Please pick an option.</i> y el menú <code>Talk</code>, <code>Train</code>, <code>Work</code>, <code>DigiBytes</code>.') },
    ]
  };
}

export const DIGIMON_BLUE = ficha({ cor: 'blue', rom: 'Digimon Story - Chou Cross Wars Blue (Japan).nds', rom_md5: '025e25ac74a5bfadaab6f2befb4c228d' });
export const DIGIMON_RED  = ficha({ cor: 'red',  rom: 'Digimon Story - Chou Cross Wars Red (Japan).nds',  rom_md5: '710a38c987028d5cc71c959a88d2ed8b' });
