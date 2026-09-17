/* As cinco etapas por onde todo patch passa, por jogo. É a faixa da ficha do
   projeto, e os nomes dos cargos vêm de SEED.equipe.

   Seis etapas, três valores: 'feito' · 'andamento' · 'nao' (não começou).

   O critério de cada etapa, para não derivar entre sessões:
     direcao   pipeline de inserção funcionando e build completa gerada por ele
     traducao  roteiro INTEIRO do inglês traduzido e inserido
     revisao   uma passada de revisão sobre o roteiro inteiro, conferida com o
               manual e os guias japoneses
     arte      nenhum japonês em imagem na build (título, logos, tiles, texturas)
     testes    a build traduzida atravessada até TODOS os finais, sem pendência
     longplay  cada final gravado em vídeo, do power-on, na build traduzida
               (<jogo>_longplay_A.mp4, _B...; em 16/09/2026 nenhum projeto tinha)

   Guarda em gerar.mjs: release exige as de EXIGE_RELEASE em 'feito', e todo jogo da lista
   precisa de uma linha aqui. Mudou o estado de um projeto? Atualize a linha. */
export const ETAPAS_ORDEM = ['direcao', 'traducao', 'revisao', 'arte', 'testes', 'longplay'];

/* O que release exige: as SEIS. Decisão do dono em 17/09/2026, que rebaixou
   Guevara e Rayearth 2 para beta por isso. A página Sobre diz o mesmo
   (SEED.equipe.intro): mudou aqui, muda lá. */
export const EXIGE_RELEASE = ETAPAS_ORDEM;

const F = 'feito', A = 'andamento', N = 'nao';
const l = (direcao, traducao, revisao, arte, testes, longplay = N) =>
  ({ direcao, traducao, revisao, arte, testes, longplay });

export const ETAPAS = {
  // levantado em 16/09/2026 das memórias e dos RETOMAR/BLOCOS de cada projeto
  'guevara':                   l(F, F, F, F, A),  // ninguém registrou jogatina até SEE YOU / NEXT PLAY
  'magic-knight-rayearth-2':   l(F, F, F, F, A),  // 11/11 finais pela caçadora; faltam CARREGAR, nome digitado, som
  'captain-tsubasa':           l(F, A, A, F, A),  // "Passe" sem texto; msg 72; ACT 2, Paris e créditos
  'tom-sawyer':                l(F, F, A, F, A),  // THE END? e DEMONMSK abertos; final só por injeção
  'ultraman-club-2':           l(F, F, A, F, A),  // só glossário; build20 nunca jogada inteira
  'gaia-saver':                l(F, F, A, F, A),  // ninguém jogou do começo ao fim
  'nekketsu-kakutou-densetsu': l(F, F, F, A, A),  // placa 土足厳禁 e marca circular em japonês
  'gozonji':                   l(A, A, A, F, A),  // ~1.786 falas; bancos 10 e 11
  'ultraman-club-3':           l(F, A, A, F, A),  // tela ITEM (banco 13); 17 nomes provisórios; bug 3
  'monster-maker':             l(F, A, N, F, A),  // tela de status não mapeada; lote sem revisão
  'yu-yu-hakusho-gaiden':      l(A, A, A, A, A),  // linha dos 4 nomes; placas e logo_meio; caça na build
  'famicom-jump-2':            l(F, F, F, F, A),  // testes 70%, sem jogatina completa
  'dragon-ball-3':             l(F, F, F, F, A),  // falta rota que escolha carta até o fim
  'pocket-monsters-stadium':   l(A, A, A, A, A),  // ETAPAS.md: nomes cortados, texturas, bugs
  'maniac-mansion':            l(A, A, N, A, A),  // epílogo no banco 4; 4b não feita; rota A
  'hanjuku-hero':              l(A, A, A, F, A),  // 382/425; 33 golpes esperando o dono
  'robot-poncots-64':          l(A, A, A, A, A),  // 201 listas seguradas; texturas 834 e 257
  'ninja-burai-densetsu':      l(A, A, N, A, A),  // escopo jogável: roteiro fica em japonês
  'gorilla-man':               l(F, F, A, F, A),  // jogar limpo os três cenários; Wolf Ramen
  'shining-force-gaiden':      l(A, A, A, A, A),  // telas por índice de tile; alfa não passou da abertura
  'phantasy-star-gaiden':      l(A, A, A, A, A),  // menu START, 62 monstros, 外伝 do título
};
