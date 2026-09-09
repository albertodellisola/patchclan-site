# FUSÃO — rodada 2 · `consenso2.json`

Fundido a partir de `anime_A.json`, `anime_B.json`, `jrpg_A.json` e `jrpg_B.json`, mais
`MELHORIAS_ACHADAS.md` e `NUMEROS_CONFERIDOS.md`. Nada aqui é recorte-e-cola: cada ficha
foi reescrita para uma voz só. Este arquivo diz de onde veio cada camada, **por quê**, e o
que ficou de fora de propósito.

Passa nos dois validadores: `valida.py` da rodada (0 erros) e o meu, que exige
`arquivo:linha` no campo `fontes` para **todo** número que aparece no texto.

---

## O princípio que governou a escolha da `linha`

O `resumo` tem três parágrafos porque tem três camadas. A `linha` tem uma frase e não cabem
as três, então **cada cartucho entrega a camada mais forte que ele tem** — e o conjunto foi
lido junto, em coluna, como o leitor vai ver na home:

| # | slug | camada na `linha` | por quê |
|---|---|---|---|
| 1 | famicom-jump-2 | **melhoria** | o botão B e os dois bytes são o que este patch tem de único; o crossover sozinho já estava na home da rodada 1 |
| 2 | dragon-ball-3 | **melhoria** | "o número saiu do kanji" é a única chamada do lote que descreve uma mudança na dificuldade do jogo |
| 3 | captain-tsubasa | **universo** | o elenco da Manchete — ver decisão B abaixo |
| 4 | nekketsu | **universo (âncora)** | sem "River City Ransom" o leitor ocidental não tem por onde entrar; o nome japonês não ancora nada |
| 5 | gaia-saver | **universo** | três franquias no mesmo grupo é o fato mais vendável do catálogo inteiro, e não precisa de número |
| 6 | ultraman-club-2 | **universo (para quem conhece)** | Zoffy e o Cemitério de Monstros falam com o fã; a prova (o quarto bloco) é longa demais para uma frase |
| 7 | ultraman-club-3 | **melhoria** | o jogo travava; consertar antes de traduzir é a decisão editorial do projeto |
| 8 | tom-sawyer | **universo + prova** | "o livro é americano, o jogo ficou no Japão" é a ironia que vende, e a ROM dobrando é a prova colada nela |
| 9 | hanjuku-hero | **universo** | a piada do ovo é a porta; e é a única `linha` das dez que diz o que se **faz** no jogo |
| 10 | monster-maker | **prova** | três letras latinas numa fonte inteira é imagem, não estatística |

São **3 melhoria, 5 universo, 2 prova**, e nenhuma das dez fecha do mesmo jeito. Depois de
montar, reescrevi a `linha` do Hanjuku Hero: ela terminava em "nunca saiu de lá", e três
chamadas seguidas encostando em "ficou no Japão" viram formulário.

---

## Por jogo: de onde veio cada camada

### 1. Famicom Jump II
- **P1 (universo)** — base do **anime B**: ele é o único que explica *o que é a Shōnen Jump*
  antes de listar sete nomes. Peguei dele a definição da revista e do anime A a mecânica
  (S·A·S, corações, alcance de caminhada).
- **P2 (melhorias)** — **jRPG A**, quase inteiro: é a única coluna que conta *por que* o
  botão B é o achado (a rotina existia e terminava em `RTS`). Somei os 19 + 3 bytes do meu
  jRPG B, e emendei o prólogo à explicação do anime B de por que ele existe — "seis dos sete
  nomes não dizem nada fora do Japão".
- **P3 (prova)** — **jRPG A** para a narrativa do seletor, **jRPG B** para os números.
- **Descartado:** "1.903 mensagens traduzidas" (anime A e anime B). O número é de **posições
  de mensagem** endereçadas pela ROM, não de mensagens com texto — são 1.838. A frase agora
  diz "as 1.903 posições de mensagem da ROM são decodificadas de volta", que é o que o
  `FEATURES.md:144` afirma e o que a medição sustenta. Também deixei fora os 65,9/68,1 KB e o
  decodificador de 89 bytes: o parágrafo já carregava dois números e ficou melhor com o
  Huffman só.

### 2. Dragon Ball 3
- **P1 (universo)** — **anime A**: "você anda pelo mapa, tira carta e luta com ela", com a
  caça às esferas, o Torneio e o Rei Cutelo.
- **P2 (melhorias)** — **jRPG A**, que achou o melhor fato do jogo: o número de defesa era
  kanji e **o jogo manda compará-lo**. Somei da minha auditoria os **53 pixels** que divergem
  entre as seis bolas e a métrica da mini-fonte (três letras de 5 px em 15 dos 16 px), e a
  revisão contra o manual que corrigiu a carta 体 — `体当り` é investida, um ataque, não defesa.
- **P3 (prova)** — **jRPG B**: 164 reescritas, 254 sem coluna livre, 1.305 de 1.305; a senha
  de 1989 fecha o parágrafo, do anime A/B.
- **Descartado:** os rótulos `TEC / DEF / EXT` do `NOTAS.md:169-177`. O conjunto final está no
  `fonte/cartas.py:14-22` e é o do site — `PCH KCK CMB FIN MAG RUN ? BDY SPC WPN`. A tabela do
  NOTAS é anterior à revisão contra o manual. Também deixei fora a decisão do "symbol card"
  (anime A): boa, mas o parágrafo já estava cheio.

### 3. Captain Tsubasa
- **P1 (universo)** — **anime A**: "você não chuta: você escolhe", com o Guts descendo a cada
  jogada. É a melhor frase de qualquer coluna sobre qualquer jogo do lote.
- **P2 (universo/nomes)** — **anime A**, com o achado que o coordenador marcou como o mais
  forte da rodada: o Brasil nunca dublou a série de 1983, e a build PT usa o elenco da
  *Captain Tsubasa J* da Manchete. Fui à fonte e refinei: **BENJI, NEIA e MILANI são os que
  cabem no campo de cinco colunas da tela**; Oliver, Carlos e Roberto Maravilha ficam na
  prosa porque os nomes não couberam. Essa distinção não estava em coluna nenhuma e é o que
  torna o fato verificável.
- **P3 (melhorias + prova)** — **jRPG A** para o save (com o B no CONTINUE e o KICK OFF que
  não apaga) e para a caixa que dobrou nas duas faixas, 14→28 e 18→36; **jRPG B** e **anime
  B** para as 16 letras latinas e os 225 dumps.
- **Em inglês a `linha` é outra** — o elenco da Manchete é fato de português. A `linha` en
  carrega as dezesseis letras e o save em bateria, e o P2 en começa pela grafia Viz e termina
  contando a build PT. Isso é o `REGRAS.md:84` sendo levado a sério.
- **Descartados, e são três:**
  1. **A janela de cinco slots.** Está implementada e provada (`notas/save.md:271`), e eu a
     tinha usado no `jrpg_B`. O **jRPG A** a deixou de fora com o argumento certo: o site tem
     EN v1.1 e PT v1.0, e **quem baixar hoje encontra um save, não cinco**. Cedi.
  2. **A contagem de texto.** Quatro fontes discordam — 1.064 extraídos (`NOTAS.md:140`),
     1.001 inseridos (`NOTAS.md:194`), 1.026 (`notas/qa.md:125`), 1.026 no briefing. Minha
     própria regra é reportar, não escolher. **Nenhum número entrou**, e a ficha não sente
     falta: ela vive do save, da caixa dobrada e das dezesseis letras.
  3. **"289 nomes"** (briefing e jRPG A). São 289 **linhas de glossário**, que incluem times,
     comandos, menus e 59 frases de narração (`NOTAS.md:161`). Fora.

### 4. Nekketsu Kakutou Densetsu
- **P1 (universo)** — **anime B** para a âncora ("o Ocidente conheceu um deles com outro nome",
  *River City Ransom*) e **anime A** para o conteúdo do jogo, que fui conferir na fonte:
  19 combates em duplas, 15 vitórias até o chefe, até quatro jogadores pelo adaptador, e o
  lutador editável cujo nome, aniversário e tipo sanguíneo moram na senha.
- **P2 (trabalho)** — comum às quatro colunas: 266 strings, 81 tiles novos, 175 intactos.
- **P3 (prova)** — **jRPG B**: o texto cabe em 6.120 bytes **sem compressão nenhuma**, e é
  isso que explica por que a fonte e a expansão vieram antes. A guarda por igualdade e a fala
  na fonte nova fecham.
- **Descartado:** a contagem de lutadores. O site diz dezesseis (`jogos-novos.mjs:100`), o
  `NOTAS.md:36` diz **18 fixos + o editável**. Divergência aberta — troquei por 19 combates e
  quatro jogadores, que estão medidos e são mais concretos.

### 5. Gaia Saver
- **P1 (universo)** — **anime B**, sem concorrência: é a única coluna que explica o que são as
  três franquias para quem nunca ouviu falar delas. Somei do anime A a imagem dos heróis
  gigantes encolhidos a duas cabeças de altura.
- **P2 (melhoria)** — **jRPG A**: ele achou o dado que faz a coluna virar consequência —
  **98% das linhas japonesas cabem em 15 caracteres**. Com isso, "29 colunas" deixa de ser
  estatística e vira a razão pela qual o inglês cabe.
- **P3 (prova)** — **jRPG B**: 1.884 extraídas, round-trip 1.875/1.875, 1.467 traduzidas,
  420 nomes em 5.375/5.376, e os 1.525 ponteiros com os 105 falsos positivos deixados em paz.
- **Descartados:** (a) **"1.561 ponteiros vivos"**, publicado na rodada 1 e no briefing —
  `grep -rn 1561 ~/gaia-hack` não devolve nada; o medido é 1.525. (b) **"o roteiro inteiro em
  inglês"** — são 1.467 de 1.884. (c) **o número de colunas ANTES**: o mesmo arquivo diz "~16
  por linha" em `analise.md:87` e "~21 no modo padrão" em `:173`. Não escolhi entre eles;
  troquei pelos 15 caracteres do roteiro japonês, que estão medidos e dizem a mesma coisa
  melhor. (d) **o ano** — 1994 no README, 1993 no site.

### 6. Ultraman Club 2
- **P1 (universo)** — **anime A**, o parágrafo mais bem informado de todo o lote: o panteão e
  os lugares que a série construiu em vinte anos. Conferi um por um no
  `roteiro/glossario.md`, onde estão todos.
- **P2 (o que entrou)** — **anime A** para os três blocos e para o cuidado com nome de kaiju;
  **jRPG A** para os quatro glifos de pontuação que a fonte não tinha.
- **P3 (prova/método)** — **anime B** tem a melhor formulação da lição ("uma tradução termina
  quando a ROM inteira foi varrida, não quando a lista de tabelas conhecidas acabou"), e ela
  ficou. Somei as partículas cravadas no código e os bancos 14 e 15 duplicados.
- **Descartado:** a tela de créditos enganchada no vetor de RESET (jRPG A) — verdadeira e
  bonita, mas o P3 já tinha três ideias.

### 7. Ultraman Club 3
- **P1 (universo)** — **anime A**: as cápsulas e a Nebulosa M78. Confirmei que a M78 é lugar
  do jogo (`RETOMAR.md:21`).
- **P2 (melhoria)** — **jRPG A**, que é a única coluna a explicar *o conserto*, e não só o
  defeito: as duas linhas nascem recusáveis, como o jogo já faz com outras duas cápsulas.
- **P3 (prova)** — **jRPG B** para o A/B e a guarda de bytes, **jRPG A** para a ferramenta que
  invoca qualquer um dos 80 encontros.
- **Descartado:** **"83 kaiju, 11 Ultras, 26 técnicas"**, que anime A e anime B trouxeram e a
  rodada 1 publicou. **Não existe em nenhum arquivo do `~/ultraman3-hack`.** As cinco tabelas
  de `analise/estrutura.json` têm n = 30, 98, 124, 115, 16, e o único número de kaiju que o
  projeto afirma é 30 capsuláveis. Ficaram as 338 mensagens, que estão confirmadas em dois
  lugares. Também descartei "desde 1966" (anime A): a data não está em nota nenhuma.

### 8. Tom Sawyer
- **P1 (universo)** — **anime B** abre ("o único cuja história você provavelmente já leu") e
  **anime A** completa com o detalhe que prova que alguém jogou: `EXAMINE / TAKE  DIG / ITEM`,
  porque num jogo de Tom Sawyer cavar precisa ser comando.
- **P2 (o que já vinha, e o que foi feito)** — **jRPG A** e o `MELHORIAS_ACHADAS.md`: o save
  em bateria e o `SPEED 5` **já vinham de fábrica em 1989**, e dizer isso é mais honesto e
  mais interessante do que omitir. A tela de título pronta vem do projeto, não do site.
- **P3 (prova)** — **jRPG B**: 1,63×, 6,2 KB, SUROM, a cópia do banco fixo. Os 2,1 KB de
  japonês vivo achados depois e o `WHITERAB` fecham — os dois vieram do anime A, que os contou
  melhor do que eu.
- **Descartado:** tudo o que o `jogo-tom.mjs` publicado diz sobre o estado ("o roteiro está
  sendo extraído", "256 KB"). O arquivo do site está atrás do projeto. **O build precisa ser
  atualizado junto com este texto.**

### 9. Hanjuku Hero
- **P1 (universo)** — **anime A** e **anime B** empatados na piada; peguei do anime A o
  enquadramento "antes de a Square ser sinônimo de Final Fantasy".
- **P2 (método)** — **anime B**: "o primeiro trabalho não é traduzir, é provar que você está
  lendo o texto certo", com a consequência de um encoding quase certo. Somei o
  `0x74 + índice` do meu jRPG B, para que a afirmação tenha o formato que a sustenta.
- **P3 (prova)** — **jRPG A** para a armadilha das duas cópias da fonte; **jRPG B** para o
  gargalo real, que é banco e não ROM: 10,8 KB livres no total contra 371 bytes no banco 2
  para 4,3 KB de texto de batalha. O enchimento `OSMOT` fecha.
- **Descartado:** "nunca saiu do Japão" na `linha` (ver acima). E o `"OSMOTO"` do
  `NOTAS.md:22`, que contradiz o `"OSMOT"` do `:102` no mesmo arquivo — usei o :102, que é o
  mais recente e traz a medição do período.

### 10. Monster Maker
- **P1 (universo)** — **anime A** para o prólogo (`はるかなる むかし`, os dois livros do
  tempo) e **anime B** para a frase que justifica o catálogo inteiro: é o tipo de cartucho que
  some da história por não ter idioma, não por não prestar.
- **P2 (método)** — **anime A**: o encoding provado por trace, e o detalhe de que **era o bit
  alto que fazia a busca ingênua por uma frase falhar**. Isso é a diferença entre "provado" e
  "afirmado".
- **P3 (prova)** — **jRPG B**: 512 bytes livres, 0,2%, contra 85-100 KB, e a expansão provada
  rodando idêntica.

---

## O que ficou fora, em uma lista

| o que | de quem | por quê |
|---|---|---|
| Janela de cinco slots do Captain Tsubasa | jrpg_B (meu) | implementada, **não publicada** — o download de hoje dá um save |
| "1.026 blocos" / "1.001 itens" / "1.064" do CT | briefing, jrpg_A, jrpg_B | quatro fontes discordam; reportar, não escolher |
| "289 nomes" do CT | briefing, jrpg_A | são 289 linhas de glossário, não nomes |
| "1.561 ponteiros vivos" do Gaia | rodada 1, briefing | não existe em nenhum arquivo do projeto; o medido é 1.525 |
| "o roteiro inteiro em inglês" do Gaia | rodada 1 | são 1.467 de 1.884 |
| Colunas "antes" do Gaia (16 ou 21) | jrpg_A, jrpg_B | o mesmo arquivo diz as duas; troquei pelos 15 caracteres medidos |
| Ano do Gaia | — | 1994 no README, 1993 no site |
| "83 kaiju, 11 Ultras, 26 técnicas" do UC3 | rodada 1, anime_A, anime_B | não existe no projeto |
| "desde 1966" do UC3 | anime_A | data não sourceada |
| "1.903 mensagens traduzidas" do FJ2 | anime_A, anime_B | 1.903 são posições endereçadas; traduzidas são 1.838 |
| Rótulos `TEC / DEF / EXT` do DB3 | `NOTAS.md:169-177` | superados pela revisão contra o manual; o final é `fonte/cartas.py` |
| Contagem de lutadores do Nekketsu | site, anime_B, jrpg_A | site diz 16, `NOTAS.md:36` diz 18 fixos + editável |
| Português do DB3, espanhol do CT | rodada 1, projeto | prontos no disco, **não publicados** — `REGRAS.md` manda |
| `"OSMOTO"` do Hanjuku | `NOTAS.md:22` | contradito por `:102` no mesmo arquivo |
| Estado do Tom Sawyer segundo o site | `jogo-tom.mjs:66` | o arquivo do site está atrás do projeto |

---

## Aberto para o dono decidir

1. **Ano do Gaia Saver** — 1994 (`~/gaia-hack/README.md:3`) × 1993
   (`build/jogos-novos.mjs:163`). A ficha não cita o ano; o site cita.
2. **Contagem de texto do Captain Tsubasa** — quatro números em três arquivos do próprio
   projeto. Enquanto não houver árbitro, a ficha não cita nenhum, mas o
   `build/jogo-ct.mjs:26-27` publica 1.001 e 1.177.
3. **Lutadores do Nekketsu** — 16 (site) × 18 fixos + editável (`NOTAS.md:36`).
4. **Publicar o que já está pronto** — o CT tem EN 1.1.6 / PT 1.0.6 / **ES 1.0.5** e a janela
   de cinco slots na build; o site tem EN v1.1 e PT v1.0. O DB3 tem a build PT v1.0. Nenhum
   desses entrou na copy. **Se subirem, três fichas ganham material forte de imediato.**
5. **`build/jogo-tom.mjs` precisa ser refeito** antes de esta copy ir ao ar: ele descreve um
   estado anterior ao do projeto, e a ficha nova o contradiz.
6. **`copy/consenso.json` (rodada 1) tem cinco afirmações sem fonte** — listadas no
   `NUMEROS_CONFERIDOS.md`, seção "AFIRMAÇÕES PUBLICADAS QUE NÃO CONSEGUI CONFIRMAR". Estão
   no ar hoje.

---

## Revisão e assinatura

Revisado pelo agente de **universo e gancho** (`anime_A`), com o critério que o coordenador
fixou: **o leitor**, nunca a procedência. Li as dez `linha` em coluna, como quem rola a home,
depois as trinta fichas por dentro. A fusão está boa — a camada 2 sobreviveu nas dez, a voz é
uma só por ficha, e o elenco da Manchete chegou **melhor** do que saiu da minha coluna: a
distinção entre os três nomes que cabem no campo de cinco colunas (BENJI, NEIA, MILANI) e os
três que só cabem na prosa (Oliver, Carlos, Roberto Maravilha) não estava em coluna nenhuma e
é o que torna o fato verificável. Fiz **três edições**, todas na `linha`, todas de leitura em
coluna. Nenhuma toca em fato, número ou fonte.

### As três edições

**1. `dragon-ball-3` — a `linha`, pt e en.**
- antes: *"O número de defesa saiu do kanji e virou algarismo — dois dos três treinos deixaram
  de ser adivinhação."*
- agora: *"O número de defesa da carta era um kanji desenhado na arte; agora é algarismo, e o
  treino deixou de ser no chute."*
- **Argumento de leitor:** a melhoria é a melhor do lote e tinha de ficar — mas na home ela
  chegava como uma fração cujo denominador o leitor não tem como preencher. "Dois dos três
  treinos" pressupõe conhecer o sistema de treino do jogo, que só é explicado no P2, que ele
  ainda não abriu. Trocando a fração pela imagem (**um número que era um desenho**) e pela
  consequência em português corrente, a mesma melhoria passa a funcionar lida a frio. O fato
  continua sendo o do `jRPG A`, e o P2 continua trazendo Karin, o Mr. Popo e os dois de três.
  A `linha` en, de quebra, saiu de 145 para 138 caracteres.

**2. `nekketsu-kakutou-densetsu` — a `linha`, pt e en.**
- antes: *"Este é o torneio de luta dela, e ficou só no Japão."*
- agora: *"Este é o de luta: 19 combates em duplas, quatro jogadores na mesa."*
- **Argumento de leitor:** lidas em coluna, a 4 e a 8 fechavam na mesma ideia — "ficou só no
  Japão" e "o jogo ficou no Japão". Na 8 ela é a piada inteira (o livro é americano, o jogo
  não saiu do Japão) e não se toca; na 4 era a metade fraca, porque a âncora do *River City
  Ransom* já tinha feito o trabalho na primeira frase. O `FUSAO.md` já tinha reescrito o
  Hanjuku por esse mesmo motivo — apliquei a regra à terceira ocorrência. E a chamada ganhou o
  que não tinha: uma imagem do que se faz ali. Os dois números vêm do `NOTAS.md:35` e `:8`,
  já auditados nesta fusão.

**3. `ultraman-club-2` — a `linha`, pt e en.**
- antes: *"…e atravessam o Cemitério de Monstros atrás dos kaiju da série."*
- agora: *"…— e o bestiário inteiro, perto de noventa monstros, saiu em inglês."*
- **Argumento de leitor:** era a única das dez que não dizia **o que o patch entrega** —
  `REGRAS.md:81` pede as três coisas na mesma frase. Pior: vinha logo depois da 5, que explica
  com paciência quem é o Ultraman para quem nunca ouviu falar dele. Duas linhas seguidas
  pedindo do mesmo leitor que ele seja forasteiro na 5 e iniciado na 6 é troca de endereço no
  meio da rolagem. Os nomes de fã ficam (é o que faz a linha valer para quem conhece), e o
  bestiário — que é o motivo de o fã clicar — entra como entrega. O Cemitério de Monstros não
  se perde: ele abre o P1. Uso "monstros" e não "kaiju" de propósito, porque a lista inclui
  alienígenas (Baltan, Metron), e é a palavra que a fonte usa
  (`build/jogos-novos.mjs:38`, "cerca de 90 monstros").

### O que eu quis mudar e decidi não mudar

- **`famicom-jump-2`, "e mais cinco da Shōnen Jump".** Queria o terceiro nome ali — o Ryotsu
  do *Kochikame* é o que faz o leitor de mangá parar. Não mudei: é a mais curta das dez (119),
  o P1 nomeia os sete, e trocar concisão por um nome que o forasteiro não sabe usar é mau
  negócio numa home.
- **`captain-tsubasa`, o P2 em português não repete o elenco** (Tsubasa, Wakabayashi, Nankatsu,
  os estrangeiros) que o P2 en traz. Não mudei: o parágrafo pt já carrega oito nomes próprios,
  e um nono grupo o transformaria em lista. O leitor brasileiro recebe o elenco pelas grafias
  Viz que fecham o parágrafo.
- **`gaia-saver` P1, "o tamanho que os super-heróis americanos têm aqui".** O "aqui" é solto
  nos dois idiomas. Não mudei: funciona em ambos e reescrever custa o ritmo da frase, que é o
  que faz o parágrafo explicar três franquias sem soar didático.
- **`monster-maker`, a `linha` fecha no futuro** ("O resto será desenhado"). É a única das dez
  assim, e é o certo: `BRIEFING.md` pede que jogo de fila "desperte interesse e diga que está
  por vir".
- **As decisões factuais do fusor.** Não reabri nenhuma, e não achei razão factual nova para
  reabrir. Fui conferir na fonte só o que é do meu ofício — nome próprio de série, que é onde a
  ficha do UC2 diz que o fã enxerga o defeito primeiro: **Pestar** (`ペスター`), os **22 bytes
  no banco 29** e os **80 encontros** batem com
  `~/ultraman3-hack/docs/capsula_pagina8_bug.md:5,10` e `notas/RETOMAR.md:104`. Confirmado
  também que **nenhuma das trinta fichas nomeia o próprio nível** (varredura por
  `alfa|beta|release|alpha`), que os **seis sem patch** fecham convidando a acompanhar em duas
  formulações diferentes ("não há patch para instalar" e, no Gaia, "sem link para baixar"), e
  que as afirmações de publicação batem com a tabela do `REGRAS.md:48-59` — FJ2 en·pt·es, UC2
  en, e nenhuma promessa de PT no Dragon Ball 3 nem de ES no Captain Tsubasa.

### O que continua na mesa do dono

Nada bloqueia a publicação desta copy. As seis pendências já listadas em "Aberto para o dono
decidir" continuam válidas, e destaco duas por ordem de efeito:

1. **`build/jogo-tom.mjs` precisa ser refeito antes de esta copy subir.** A ficha nova descreve
   o projeto de hoje (roteiro traduzido, título pronto, 512 KB) e o arquivo do site descreve o
   de duas semanas atrás. Publicar os dois juntos põe o site a se contradizer.
2. **Publicar o que já está pronto no disco** — CT ES 1.0.5 e a janela de cinco slots, DB3 PT
   v1.0. É a única decisão do dono que **melhora três fichas de uma vez**, e a copy foi escrita
   para não depender dela.

---

**Assinado.** Revisão de universo e gancho — agente `anime_A`, 08/09/2026.
Três edições, todas na `linha`; `python3 copy/rodada2/valida.py copy/rodada2/consenso2.json`
em **0 erros** depois delas. Isto é consenso.

---

### Correção pós-assinatura — 08/09/2026, `ultraman-club-2`

Defeito achado pelo **tradutor espanhol** ao reescrever a ficha, depois de eu ter assinado.
O P3 abria com «**Aquele** quarto bloco» / «**That** fourth block», e nenhum parágrafo anterior
apresentava bloco nenhum: o P2 enumera três coisas (447 mensagens, 56 entradas de menu, 146 de
combate) e nunca usa a palavra «bloco». A anáfora estava pendurada nos dois idiomas.

**Havia duas saídas propostas — dar o antecedente no P2, ou soltar o P3 com «um quarto bloco».
Não fui por nenhuma das duas, e o motivo é de leitor:**

- **Dar o antecedente no P2 não cabe.** O P2 já **termina** em «os quatro glifos» (a pontuação
  que a fonte não tinha), e o P3 já traz «quatro partículas japonesas». Acrescentar «quatro
  blocos» ali põe **três quatros diferentes** em dois parágrafos vizinhos — o leitor passa a
  contar em vez de ler.
- **«Um quarto bloco» resolve a catáfora e cria outra pergunta:** quarto de quê? Os três itens
  que o P2 enumera são grupos de entradas, não os blocos da ROM, e a partição não é a mesma —
  o quarto bloco **é** o terceiro item da lista. O leitor que tentar casar os dois erra.

**O que fiz:** o P3 passa a nomear o antecedente na própria frase de abertura —
«**As 146 entradas de combate são o quarto bloco de texto da ROM**, e só apareceram porque a
varredura foi refeita na ROM já montada» (em inglês, «Those 146 battle entries are the ROM's
fourth text block, and they only surfaced because…»). A frase seguinte passou de «os bytes de
ponteiro **dele**» para «os bytes de ponteiro **do bloco**», que é o que a anáfora agora pede.

**Não entra fato novo nem número novo.** O 146 já está no P2; que ele é o quarto bloco está
publicado no `build/jogos-novos.mjs:38-39` («Este quarto bloco só apareceu ao varrer kana na
ROM montada») e em `:76`; e «4 blocos de texto na ROM» é a linha de número do próprio site
(`:29`). A conta que sustenta a ficha continua de pé e intocada: **653 = 447 + 56 + 146 + 4**,
com os 4 sendo as partículas `は`/`に` cravadas como `LDA #$AC`, que o P3 já contava.

**Para o espanhol:** o **P2 dele não precisa mudar** — a correção mora inteira no P3. Se o
coordenador quiser paridade nos três idiomas, o molde é «Esas 146 entradas de combate son el
cuarto bloque de texto de la ROM, y solo aparecieron porque…».

`python3 copy/rodada2/valida.py copy/rodada2/consenso2.json` → **0 erros** depois da correção.
— agente `anime_A`, 08/09/2026.
