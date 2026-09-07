import { SEED } from './seed.mjs';
import { JOGOS } from './jogos.mjs';

const URL_ = process.env.SB_URL, KEY = process.env.SB_KEY;
const H = { apikey: KEY, Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' };

async function req(caminho, opt = {}) {
  const r = await fetch(URL_ + caminho, { ...opt, headers: { ...H, ...(opt.headers || {}) } });
  if (!r.ok) throw new Error(`${caminho} → ${r.status} ${await r.text()}`);
  return r.status === 204 ? null : r.json().catch(() => null);
}

// 1) conteudo
const linhas = Object.entries(SEED).map(([key, value]) => ({ key, value }));
await req('/rest/v1/content?on_conflict=key', {
  method: 'POST', body: JSON.stringify(linhas),
  headers: { Prefer: 'resolution=merge-duplicates' }
});
console.log('conteúdo:', linhas.map(l => l.key).join(', '));

// 1b) jogos: so os campos que o painel edita
const JOGOS_SEED = JOGOS.map((g, i) => ({
  slug: g.slug, ord: i,
  data: { nome: g.nome, subtitulo: g.subtitulo, status: g.status, linha: g.linha, resumo: g.resumo, pronto: g.pronto }
}));
await req('/rest/v1/games?on_conflict=slug', {
  method: 'POST', body: JSON.stringify(JOGOS_SEED),
  headers: { Prefer: 'resolution=merge-duplicates' }
});
console.log('jogos:', JOGOS_SEED.map(g => g.slug).join(', '));

// 2) posts
const POSTS = [
  { date:'2026-09-03', build:'v50', tag:'Foot Clan DX',
    title_pt:'O muro para de pegar a cor dos prédios', title_en:"The wall stops borrowing the buildings' colour",
    body_pt:['Na fase 1, o topo do muro herdava a paleta dos prédios do fundo e saía marrom. A correção foi separar a faixa de paleta por linha do mapa: o muro passou a ter a sua, e os prédios voltaram ao azul.','Na mesma rodada, a moto do fim de fase parou de vazar por sete paletas — as cabeças saíam verdes e a roda vermelha — e o bônus do Krang ganhou cor: Krang rosa, tartaruga verde de peito creme, e a bandana da tartaruga que você escolheu.'],
    body_en:['On stage 1 the top of the wall was inheriting the palette of the buildings behind it and coming out brown. The fix was to split the palette band by map line: the wall got its own, and the buildings went back to blue.','In the same pass, the end-of-stage motorbike stopped leaking across seven palettes — green heads, red wheel — and the Krang bonus round got colour: pink Krang, green turtle with a cream plastron, and the bandana of whichever turtle you picked.'] },
  { date:'2026-09-02', build:'v48', tag:'Foot Clan DX',
    title_pt:'Arte de verdade na escolha de fase', title_en:'Real artwork on the stage select',
    body_pt:['A tela de escolha de fase entrou no lugar da CONFIGURATION original, e as miniaturas deixaram de ser genéricas: rua, fábrica e Tecnodromo ganharam arte desenhada para elas.'],
    body_en:['The stage select screen replaced the original CONFIGURATION screen, and the thumbnails stopped being generic: the street, the factory and the Technodrome each got artwork drawn for them.'] },
  { date:'2026-09-01', build:'v43', tag:'Foot Clan DX',
    title_pt:'COWABUNGA, digitalizado', title_en:'COWABUNGA, digitised',
    body_pt:['O grito entra no canal de onda em 4 bits a 8 kHz, e toca ao confirmar a tartaruga, no fim de fase e como faixa 30 do teste de som.','O canal é alimentado por contagem de ciclos, com as interrupções desligadas em cada bloco de 32 amostras. Não dava para usar o timer: nesta ROM a interrupção de timer é o próprio driver de som, e recalibrar ela quebraria a música inteira.'],
    body_en:['The shout goes into the wave channel at 4-bit, 8 kHz, and plays when you confirm a turtle, at the end of a stage, and as track 30 of the sound test.','The channel is fed by cycle counting, with interrupts off around each block of 32 samples. The timer was not an option: in this ROM the timer interrupt is itself the sound driver, and recalibrating it would break the music.'] },
  { date:'2026-08-31', build:'v36', tag:'Foot Clan DX',
    title_pt:'Vinheta de fase, com o chefe em silhueta', title_en:'A stage vignette, with the boss in silhouette',
    body_pt:['Cada fase abre com uma vinheta no estilo do Turtles in Time. A silhueta do chefe não é desenho: é montada com os sprites e as poses do próprio jogo, lidos da memória enquanto ele roda.','O jogo em preto e branco continua intacto — a vinheta só existe no caminho de Game Boy Color.'],
    body_en:["Every stage now opens with a vignette in the style of Turtles in Time. The boss silhouette is not a drawing: it is assembled from the game's own sprites and poses, read out of memory while it runs.",'The black-and-white game is untouched — the vignette only exists on the Game Boy Color path.'] },
  { date:'2026-08-30', build:'v20', tag:'Foot Clan DX',
    title_pt:'Quatro idiomas, e o console lembra qual', title_en:'Four languages, and the console remembers which',
    body_pt:['Inglês, francês, espanhol e português do Brasil, trocáveis a qualquer momento pela tela de opções.','A escolha é gravada em SRAM com bateria, então sobrevive ao desligar — o cabeçalho do cartucho foi alterado para pedir a RAM salva que o original não tinha.'],
    body_en:['English, French, Spanish and Brazilian Portuguese, switchable at any time from the options screen.','The choice is written to battery-backed SRAM, so it survives power off — the cartridge header was changed to ask for the save RAM the original never had.'] }
];
await req('/rest/v1/posts', { method: 'POST', body: JSON.stringify(POSTS) });
console.log('posts:', POSTS.length);

// (os prints de cada jogo moram no build, em shots/ — não passam pelo banco)

// 4) usuario do painel
const email = process.env.ADMIN_EMAIL, senha = process.env.ADMIN_PASS;
const r = await fetch(`${URL_}/auth/v1/admin/users`, {
  method: 'POST', headers: H,
  body: JSON.stringify({ email, password: senha, email_confirm: true })
});
console.log('usuário:', r.ok ? email : `já existe ou falhou (${r.status})`);
