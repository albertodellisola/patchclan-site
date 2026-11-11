/* Dark Kingdom — entrou no site como beta v0.1 (EN, PT-BR e ES, traduzidos direto do japonês), 11/11/2026.
   Texto: notícia aprovada pelo dono (Redação dos Arautos, ~/darkkingdom-hack/midia/redacao/beta_v0.1) e fatos.json.
   Capa = C2 escolhida pelo dono (11/11/2026) em moldura larga 1902×827; fotos = ilustrações P1 e P3 da notícia. */

const bi = (pt, en, es) => ({ pt, en, es });

export const DARK_KINGDOM = {
  slug: 'dark-kingdom',
  nome: 'Dark Kingdom',
  subtitulo: '',
  jp: 'ダークキングダム',
  publisher: 'Telenet Japan', dev: 'Riot', ano: 1994, data: '29/04/1994',
  sistema: 'Super Famicom', mapper: "HiROM · 1,5 MB expandido para 2 MB",
  categoria: bi('Tradução', 'Translation', 'Traducción'),
  nivel: 'beta',
  versao: 'beta v0.1',
  capa: 'dark-kingdom/00-capa.jpg',
  patreon: 'https://www.patreon.com/patchclan/posts/dark-kingdom-rpg-175017891',
  linha: bi("Aliste-se e avance missão a missão neste RPG de 1994 que nunca saiu do Japão; um evento opcional decide qual dos dois finais você vê.",
            "Enlist and advance mission by mission in this 1994 RPG that never left Japan; an optional event decides which of its two endings you see.",
            "Alístate y avanza misión a misión en este RPG de 1994 que nunca salió de Japón; un evento opcional decide cuál de los dos finales ves."),
  resumo: {
  "pt": [
    "<b>Telenet Japan, sob a marca Riot, Super Famicom, 29 de abril de 1994.</b> Lançado só no Japão, <i>Dark Kingdom</i> é um RPG de missões: você começa se alistando e avança missão a missão. Segundo os fãs, um evento opcional decide qual dos dois finais você vê.",
    "A beta v0.1 traz o texto do jogo em inglês, português do Brasil e espanhol, traduzido direto do japonês: as falas, os menus, a loja, a arena, as batalhas e o save. O relógio de data do mapa-múndi também não mostra mais japonês. A ROM com o patch passa a ter 2 MB, e isso é esperado.",
    "Ainda é um beta: algumas falas do final e da cena do mapa-múndi não foram conferidas na tela. Dois bugs do cartucho original seguem sem conserto: um nome pode aparecer no lugar errado e travar a história, e voltar ao balcão de passaporte sem a permissão deixa o balcão vazio. Na arena, desistir no meio das lutas faz perder o dinheiro ganho, como no original."
  ],
  "en": [
    "<b>Telenet Japan, under the Riot label, Super Famicom, April 29, 1994.</b> Released only in Japan, <i>Dark Kingdom</i> is a mission-based RPG: you start by enlisting, then advance mission by mission. According to fans, an optional event decides which of its two endings you see.",
    "Beta v0.1 carries the game's text in English, Brazilian Portuguese and Spanish, translated directly from the Japanese: the dialogue, the menus, the shop, the arena, the battles and the save screen. The date clock on the world map no longer shows Japanese either. The patched ROM grows to 2 MB; that is expected.",
    "It is still a beta: a few lines of the ending and of the world-map scene were not checked on screen. Two bugs from the original cartridge are not fixed yet: a name can show up in the wrong place and block the story, and going back to the passport counter without the permission leaves it empty. In the arena, quitting mid-series forfeits the money you have won, as in the original."
  ],
  "es": [
    "<b>Telenet Japan, bajo el sello Riot, Super Famicom, 29 de abril de 1994.</b> Lanzado solo en Japón, <i>Dark Kingdom</i> es un RPG de misiones: empiezas alistándote y avanzas misión a misión. Según los fans, un evento opcional decide cuál de los dos finales ves.",
    "La beta v0.1 trae el texto del juego en inglés, portugués de Brasil y español, traducido directamente del japonés: los diálogos, los menús, la tienda, la arena, los combates y el guardado. El reloj de la fecha del mapamundi tampoco muestra ya japonés. La ROM con el parche pasa a ocupar 2 MB, y es lo esperado.",
    "Todavía es una beta: algunas frases del final y de la escena del mapamundi no se comprobaron en pantalla. Dos fallos del cartucho original siguen sin corregir: un nombre puede aparecer en el lugar equivocado y bloquear la historia, y volver al mostrador de pasaportes sin el permiso deja el mostrador vacío. En la arena, rendirse a mitad de los combates hace perder el dinero ganado, como en el original."
  ]
},
  numeros: [],
  grupos: [],
  patch: { versoes: { en: { arquivo: 'dark-kingdom-en.ips' }, pt: { arquivo: 'dark-kingdom-pt.ips' }, es: { arquivo: 'dark-kingdom-es.ips' } }, rom: 'Dark Kingdom (Japan).sfc', rom_md5: 'a2280cec6e0c79b4c4a03e48d8c8f72d' },
  fotos: [
    { f: 'dark-kingdom/noticia/p1-mapa.jpg', t: bi('O mapa-múndi', 'The world map', 'El mapamundi'),
      c: bi("O mapa-múndi na versão em inglês, com o relógio de data já sem japonês.",
            "The world map in the English version, with the date clock no longer in Japanese.",
            "El mapamundi en la versión en inglés, con el reloj de la fecha ya sin japonés.") },
    { f: 'dark-kingdom/noticia/p3-fala.jpg', t: bi('Uma fala em português', 'A line in Portuguese', 'Un diálogo en portugués'),
      c: bi("Uma fala com o retrato do personagem, na versão em português do Brasil.",
            "A dialogue box with a character portrait in the Brazilian Portuguese version.",
            "Un diálogo con el retrato del personaje, en la versión en portugués de Brasil.") }
  ]
};
