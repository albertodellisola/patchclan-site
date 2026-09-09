# FUSÃO 4 — `consenso4.json`

Fundido a partir de `anime_A.json`, `anime_B.json`, `jrpg_A.json` e `jrpg_B.json` da rodada 4,
mais a seção RODADA 4 do `copy/rodada2/MELHORIAS_ACHADAS.md` e a do `NUMEROS_CONFERIDOS.md`.
Nos moldes do `FUSAO.md` e do `FUSAO3.md`: uma voz por ficha, nada de recorte-e-cola, e este
arquivo diz de onde veio cada camada, **por quê**, e o que ficou de fora de propósito.

Validação: o compartilhado (`copy/rodada2/valida.py`, com `ORDEM` trocada para os quatro
slugs) → **0 erros, 0 avisos**. O meu, `copy/rodada4/valida4.py` → **0 erros**; ele soma a
exigência de `arquivo:linha` para todo número, o detector de expressões de progresso e o de
percentual de progresso.

Esta rodada fecha o catálogo em **dezessete fichas** e traz **três plataformas novas**. A
fusão tinha, por isso, um risco que as anteriores não tinham: quatro fichas que falam de
escala podem virar quatro variações da mesma frase. A régua que usei foi a mesma de sempre —
o leitor —, com um cuidado a mais: **cada ficha tem um inimigo diferente**, e é ele que
organiza os três parágrafos. No Burai o inimigo é a **coluna**; no Maniac é o **byte**; no
Stadium não há inimigo, o encoding joga a favor; no Robopon é o **campo**.

---

## A `linha`, escolhida por cartucho

| slug | camada | por quê |
|---|---|---|
| `ninja-burai-densetsu` | **universo** | um herói ninja que é filho de náufragos europeus é a coisa mais inesperada de qualquer um dos dezessete cartuchos, e não precisa de nenhum conhecimento prévio |
| `maniac-mansion` | **universo, com a prova encostada** | o nome que o leitor reconhece (`Dr. Fred`, `Dave`) mais a palavra que ele não espera ao lado dele (`hiragana`); a inversão do catálogo cabe na primeira metade e o estranhamento na segunda |
| `pocket-monsters-stadium` | **universo** | a ficha inteira existe para desfazer uma confusão, e a linha é o lugar onde ela se desfaz: *houve um Stadium antes do Stadium* |
| `robot-poncots-64` | **prova** | é o único dos quatro em que o fato técnico é mais surpreendente que o jogo — e é um fato de **fábrica**, que a linha precisa dizer que não é mérito da casa |

> **Nota da revisão:** as `linha` de `maniac-mansion` e de `robot-poncots-64` foram trocadas
> depois desta tabela — ela registra a escolha do fusor, e o porquê da troca está em
> «As catorze edições», no fim do arquivo.

As quatro fecham em registros diferentes: **história** · **escrita** · **cronologia** ·
**engenharia**. Nenhuma abre com superlativo de catálogo, que a revisão da rodada 3 marcou
como recurso gasto — e nenhuma repete a fórmula «o primeiro/o único X da casa», embora três
dos quatro cartuchos tivessem direito a ela.

---

## Por jogo

### Ninja Burai Densetsu

- **P1 (universo)** — **anime_B** dá a moldura de entrada ("quem cresceu com o console associa
  a Sega a jogo de ação; este é um RPG tático") e **anime_A** e **jrpg_A** dão o enredo do guia.
  Somei o **material mais novo do projeto**, que nenhuma das quatro colunas tinha porque o
  `glossario.md` foi reescrito depois delas: a **caixa japonesa com ruby em todo kanji** diz
  que Nobunaga **sucumbiu ao poder mágico da espada Kusanagi** e virou 妖魔. Isso amarra o
  vilão a um item do próprio jogo, porque **草薙 é a única espada que a tabela de armas lista
  sem preço**. É melhor do que qualquer coluna tinha, e é o fecho do parágrafo.
- **P2 (o motor)** — as quatro colunas convergem, e a formulação de **anime_B** para a frase
  central é a melhor: *"a identidade dos caracteres está nos bitmaps e a ordem está nos
  tilemaps"*. Somei do **jrpg_B** os `413 tiles, 413 distintos, zero repetidos` e os
  **1.611 ponteiros cobrindo 103%** — a medição que se refuta sozinha, que nenhuma outra
  coluna trouxe.
- **P3 (a prova e o vocabulário)** — **jrpg_A** para a conferência externa, **anime_A** para
  o furigana, **anime_B** para o vocabulário histórico e o `1st Dan`. A cadeia coluna
  15 → 31 aparece nas quatro; ficou a formulação mais curta.
- **Descartados, e são quatro:**
  1. **"Nobunaga não é rei-demônio de fantasia, é um homem possuído por um 邪鬼"** —
     três colunas escreveram alguma versão disto, e o `glossario.md:261-263` **retrata a
     própria formulação categórica**: a caixa usa 妖魔, o guia usa 邪鬼, e os dois são
     oficiais. Escrevi a premissa da caixa, que é a mais completa, sem negar nada.
  2. **"Haneo", "Katta" e "Ogachi"** (anime_A, jrpg_A, e a minha própria coluna) —
     **errados**, e o `glossario.md:105-108` diz por quê: são as leituras do distrito
     histórico, e o jogo lê **Uo**, **Karita** e **Okatsu**. A regra virou parte do parágrafo,
     porque ela é interessante por si: *leitura de topônimo de jogo não se deduz do mapa*.
  3. **O subtítulo inglês de época, *The Last Ninja*** (anime_B). É de material da época,
     não do cartucho, e o `glossario.md:45` o dá sem fonte primária. Fora.
  4. **"Os 32 KB livres" e "centenas de KB de inventário de kanji que viram orçamento"**
     (anime_B). O espaço não é o assunto desta ficha, e a maior corrida de `FF` real da ROM
     é de **34.813 bytes**, não 32 KB. Ver `NUMEROS_CONFERIDOS.md`, seção Z.

### Maniac Mansion

- **P1 (universo)** — **anime_A** é a melhor coluna do lote nesta ficha, e o parágrafo é quase
  dela: o elenco em kana, o `めておさま` com honorífico, o X-Wing na parede, o logotipo latino
  na tela de título. Somei do **anime_B** a **polícia do meteoro** que atende ao telefone e as
  **moedas de 100 e de 10 ienes**, e do **anime_A** os **354 mililitros** — que são,
  juntos, o argumento de que *a travessia mexeu no mundo, não só nas palavras*.
- **P2 (as melhorias)** — a arquitetura vem do **build.py**, não das notas, conforme o
  conflito R4-5 do `MELHORIAS_ACHADAS.md`: o que a build faz é o **trampolim no banco fixo**,
  e o *far-read* ficou como estudo. O fecho — *trocar o banco de onde o motor lê não muda um
  pixel do quadro* — é o par md5 achado pelo agente das melhorias, e é a única prova de
  paridade que existe nesta ficha.
- **P3 (a prova)** — o eixo é meu (`jrpg_B`), e o material é de três colunas: a **fonte que vai
  de A a T**, a **fonte de diálogo sem katakana** com `ちーす゛` / `て゛いふ゛` (anime_A), o
  **painel de verbos como tilemap** e o pedágio do dakuten, `1.367 de 12.832 caracteres`, que
  medi para esta rodada.
- **Descartados:**
  1. **"Todos os outros são japoneses que nunca saíram do Japão"** — está no `REGRAS.md:207`,
     e **três colunas o copiaram de lá**. É **falso desde a rodada 3**: o Guevara teve versão
     ocidental oficial, como *Guerrilla War*, e a ficha dele publicada diz exatamente isso.
     A frase virou *"os outros projetos desta casa partem todos de um jogo japonês"*, que é
     verdadeira e conserva a inversão inteira.
  2. **`ぬーどかれんだー` e `すけべなポスター`** (anime_B). Estão no inventário e estão medidos,
     mas põem o parágrafo num assunto que a ficha não vai desenvolver, e a rodada não tem nada
     no projeto sobre diferenças entre as versões. Fora; ficaram os itens que **caracterizam a
     travessia** (as moedas e os mililitros), que é o que rende.
  3. **O hamster e o forno de micro-ondas** (jrpg_A). Verdadeiros e no roteiro, mas a mesma
     razão: são a porta para um assunto — o que a versão ocidental cortou — sobre o qual
     `~/maniac-hack` **não tem uma linha**. Ver `NUMEROS_CONFERIDOS.md`, seção AC.
  4. **`PASSWORD` como sistema de progresso** (`MELHORIAS_ACHADAS.md`, marcado JÁ VINHA DE
     FÁBRICA). Fica de fora porque, sem nada feito a respeito, citá-lo puxa a comparação com o
     Captain Tsubasa, que **é** o caso de senha virando bateria. O `PASSWORD` aparece só como
     o que é aqui: letra latina na tela de título de um cartucho japonês.
  5. **"trampolim de 13 bytes"** (jrpg_A). São **14** — contados no `build.py:35-41`:
     `A2 xx` + `20 41 FF` + `20 10 80` + `A2 0C` + `20 41 FF` + `60`. anime_A e o
     `MELHORIAS_ACHADAS.md` dizem 14; usei 14.

### Pocket Monsters Stadium

- **P1 (universo)** — **anime_B** inteiro, e é a melhor abertura da rodada: *"quase todo mundo
  de certa idade jogou Pokémon Stadium; quase ninguém sabe que houve um antes dele"*. O que a
  torna uma ficha do Patch Clan e não um texto de enciclopédia é o que vem logo depois, e é
  dele também: a confusão se desfaz **por medição** — o contêiner de texto do motor ocidental
  dá **zero ocorrência** aqui, varridas a ROM inteira e os 790 blocos. Somei do **anime_A** o
  conteúdo do jogo, que nenhuma outra coluna foi buscar nas strings: as **quatro copas
  nomeadas pelas bolas**, as **regras de nível**, o **aluguel** e a **narração de jogada** com
  banco de áudio próprio.
- **P2 (a escala)** — meu (`jrpg_B`), com os totais somados do `yay0_blocos.json`, e com a
  frase que dá sentido ao número: **2,22× é mais do que o cartucho inteiro comporta**.
- **P3 (o texto e o que ele significa)** — convergência das quatro no EUC-JP e no
  `144 dos 151`; a leitura de **anime_A** ("o banco principal é uma lista contínua e legível
  de cima a baixo") entrou porque descreve o que se vê, e não só o que se mediu.
- **Descartados, e é aqui que a rodada mais cortou:**
  1. **Todo número de roster.** As quatro colunas dizem **42 Pokémon jogáveis**
     (`RETOMAR.md:3`), a tela de regras da ROM diz **`40 KINDS OF POKEMON`**, e o
     `jp2en_ui.json:301` traz ainda **`33 MAY BE USED`**. **Três números para a mesma
     pergunta.** A ficha não cita nenhum: diz o que é inequívoco, que o banco principal guarda
     as 151 espécies com categoria em ordem de Pokédex. Precisa de árbitro.
  2. **"Não há patch conhecido deste cartucho, nem parcial"** (jrpg_A, e o `RETOMAR.md:4`).
     Barrado desde a minha coluna: afirmação de inexistência é a mais cara de errar e a única
     que uma busca não prova. Ver `NUMEROS_CONFERIDOS.md`, seções AA e AB.
  3. **`@POKEMON GREEN/BLUE/YELLOW`** como a nota o escreve. Lido em `0x7C2CF`, o bloco é
     `@POKEMON RED GREEN BLUE YELLOW`: são **quatro** títulos. A ficha diz quatro.
  4. **A tela de créditos do Patch Clan, o CRC provado e a lição de método** (jrpg_A,
     anime_A, anime_B). As três são boas e as três descrevem **trabalho feito hoje**. A
     primeira traz `ALPHA V0.1 BUILD 1` atrás dela; a terceira só rende com as contagens que a
     regra barra. Ficaram o CIC-6103 e o `0x100000` do IPL3, que são **fatos do console** e
     não medida de andamento.
  5. **"o menu principal e a tela de regras aparecem em inglês na foto do emulador"**
     (jrpg_A, conflito R4-3). É verdade e as capturas existem — mas é estado da build de hoje,
     e o próprio `RETOMAR.md:195-200` ainda diz o contrário. Fora por progresso.
  6. **O arquivo *byteswapped* que circula** (anime_B). Verdadeiro e útil a quem for aplicar
     o patch; é assunto de instrução de instalação, não de ficha.

### Robot Poncots 64

- **P1 (universo)** — **anime_A** dá o vocabulário que faz entender o jogo em três palavras
  (`ATK`, `RAM`, e um estado que **desliga todo o software**), **jrpg_A** dá os nomes de série
  (Sunny, Digger, Zap, Gidget) que fazem o `45 de 45` valer para o leitor, e **anime_B** dá a
  formulação do porquê do `バケまる` não ter nome: *nunca houve versão ocidental para lhe dar
  um*. O `64GB Pak` com o `ＧＢコンバート` é do **anime_A**, e fecha o parágrafo ligando as
  duas metades da série.
- **P2 (a propriedade de fábrica)** — o eixo é a instrução do coordenador, e o parágrafo o diz
  com todas as letras: **já vinha no cartucho, e o que é nosso é a leitura**. A verificação
  entrada por entrada (91 no fullwidth exato, 4 nas substituições do JIS) é minha; a
  comparação com os 8 bits, com **83 glifos do Gozonji** e **três letras do Monster Maker**,
  é do **jrpg_A**, e é o que transforma a propriedade em contraste. O cravamento do offset
  pelo glifo vazio é meu.
- **P3 (o campo)** — convergência das quatro, com a frase de fecho que só **anime_A** e
  **anime_B** têm: *nenhuma medição pegou; o inseridor mediu o tamanho e aprovou*.
- **Descartados:**
  1. **`p75 11` e `p90 21`** (anime_A, jrpg_A). O `work/strings.json` de hoje dá **10 e 20**.
     Ficaram só `min 3`, `mediana 6` e `max 272`, que batem nas duas medições. Seção Y.
  2. **`ムサシ` e `コジロウ` como piada de duelistas** (anime_A). O `glossario_robos.json` dá
     os nomes oficiais desses dois como **Sammi** e **Muri** — a série já apagou a referência,
     e explicar isso pediria duas frases que a ficha não tem.
  3. **`START` / `DELETE` / `NO DATA` / `B: CANCEL` na tela** (jrpg_A). É verificação da build
     de hoje: progresso.
  4. **O campo de nome de 5 letras** (três colunas). Verdadeiro e bem provado — *nenhum dos 46
     nomes japoneses usa seis caracteres* —, mas o P3 já carrega a mediana de 6, os dois tipos
     de campo e a armadilha do zero. Empilhar um terceiro limite de campo diluía a armadilha,
     que é a parte que ensina.
  5. **`ロボポンずかん` transliterado** (anime_A). Virou "enciclopédia de robôs": *zukan* não
     diz nada a quem lê a página, e a palavra não é citação de tela.

---

## O que ficou fora, em uma lista

| o que | de quem | por quê |
|---|---|---|
| "todos os outros são japoneses que nunca saíram do Japão" | REGRAS.md:207, anime_A, jrpg_A, e a minha coluna | falso desde a rodada 3 — o Guevara teve versão ocidental oficial |
| "o maior cartucho por uma ordem de grandeza" | a minha coluna | 32 MB contra 16 MB é o dobro; a frase nem chegou à fusão |
| 42 / 40 / 33 Pokémon | as quatro colunas (42) | três números para a mesma pergunta; nenhum entrou |
| "não há patch conhecido" (PMS64) e "não existe patch em inglês" (Burai) | jrpg_A; RETOMAR.md dos dois | afirmação de inexistência que a checagem não fecha |
| o que a versão ocidental do Maniac não tem | — | `~/maniac-hack` não registra uma linha sobre isso |
| Nobunaga "possuído, e não rei-demônio" | anime_A, anime_B, jrpg_A, jrpg_B | o próprio `glossario.md:261` retira a formulação categórica |
| Haneo · Katta · Ogachi | anime_A, jrpg_A, jrpg_B | leituras do mapa histórico; o furigana do guia dá Uo, Karita e Okatsu |
| *The Last Ninja* | anime_B | subtítulo de material de época, sem fonte primária |
| trampolim de 13 bytes | jrpg_A | são 14, contados no `build.py:35-41` |
| p75 11 · p90 21 | anime_A, jrpg_A | o `strings.json` de hoje dá 10 e 20 |
| tela de créditos do Patch Clan, menus em inglês na foto, `START/DELETE/NO DATA` | jrpg_A | estado da build de hoje: progresso |
| `ぬーどかれんだー`, `すけべなポスター`, hamster e micro-ondas | anime_B, jrpg_A | puxam um assunto sobre o qual o projeto não tem material |
| ROM *byteswapped* que circula | anime_B | instrução de instalação, não ficha |
| `ムサシ`/`コジロウ` como duelistas | anime_A | os nomes oficiais são Sammi e Muri; explicar pedia duas frases |
| 32 KB livres do Burai | anime_B | a corrida real de `FF` é de 34.813 B, e o espaço não é o assunto da ficha |
| todo número de progresso | — | regra da rodada; a lista completa está no `NUMEROS_CONFERIDOS.md` |

---

## A decisão de fecho, que o coordenador deixou comigo

As fichas sem patch fecham com a fórmula da casa (`REGRAS.md:37-38`). O **Pocket Monsters
Stadium** não pode levá-la — existem `rom/pms64_en.ips` e `rom/pms64_en_intro.ips`
construídos —, e também não pode prometer download, porque **nada foi publicado em
`~/patchclan-site/patches/`**.

**Escolhi uma formulação que não afirma nem uma coisa nem a outra:**

> pt — «Esta página é para acompanhar o trabalho.»
> en — «This page is here to follow the work.»

Ela é a **segunda metade** da fórmula da casa, sem a primeira. Quem lê as quatro fichas em
sequência lê três vezes *"não há patch para instalar; esta página é para acompanhar"* e uma
vez só a segunda oração — o que, se alguém reparar, **sinaliza a diferença sem explicá-la**,
que é exatamente o que a regra 3 pede. Nenhuma das duas frases diz que existe patch, nenhuma
diz que não existe, e **nenhuma das duas fica errada** se o dono publicar o IPS amanhã ou
decidir segurá-lo.

**Decisão do dono, e é binária:** publicar o `pms64_en.ips` (e então a ficha ganha a linha de
download como as outras de release) ou não publicar (e então a ficha ganha a fórmula completa,
com "não há patch para instalar"). Enquanto ele não decidir, o texto está correto nos dois
cenários — mas **está correto por omissão**, e omissão não é um estado que se deixe no ar
depois de o site publicar.

---

## Aberto para o dono

1. **Quantos Pokémon jogáveis tem o Stadium?** `~/pms64-hack/RETOMAR.md:3` diz **42**; a tela
   de regras do próprio jogo diz **`40 KINDS OF POKEMON`**
   (`work/shots/pokemon_stadium-012.png`, `-014.png`); e `work/jp2en_ui.json:301` traz
   **`たいせんでつかえるポケモンは３３びき`** = "33 MAY BE USED". São três números, e é o
   primeiro fato que qualquer leitor procura numa ficha de Pokémon. **Precisa de árbitro.**
2. **O `pms64_en.ips` vai ao ar?** Ver a seção acima. É a única das dezessete fichas do site
   cujo fecho depende de uma decisão que ainda não foi tomada.
3. **O tier dos quatro.** O `REGRAS.md:225-226` diz que o dono ainda vai declarar. **Nenhuma
   das quatro fichas menciona nível**, então a declaração pode vir depois sem retocar texto.
4. **O site diz que o Gaia Saver é "o único projeto de 16 bits da casa"**
   (`build/jogos-novos.mjs:193,198,203`, nos três idiomas). Com o Ninja Burai Densetsu a frase
   fica falsa. **Precisa ser corrigida junto com a publicação desta rodada.**
5. **O subtítulo do Robot Poncots 64.** O savestate traz `Robot Ponkottsu 64 - 7tsu no Umi`
   (7つの海, "os sete mares"), e o `REGRAS.md:192` fixa o nome como *Robot Poncots 64*. Cabe no
   campo `subtitulo` da ficha, como se fez no Gozonji, se o dono quiser.
6. **`バケまる` precisa de um nome em inglês.** É o único robô dos 46 sem nome oficial, e o
   `RETOMAR.md:132` já adota **Spook** provisoriamente. A ficha não o nomeia; quando alguém
   nomear, é escolha que fica na tela do jogador para sempre.
7. **Quando as traduções fecharem**, os números barrados voltam a ficar disponíveis — a lista,
   com fonte e por projeto, está na seção final do `NUMEROS_CONFERIDOS.md`. O melhor deles é o
   `1.328 bytes livres criados pelo reempacotamento` do PMS64: espaço que **a própria tradução
   fabricou**, ideia que nenhuma das dezessete fichas tem ainda.

---

## Duas correções no meu validador, ambas por falso positivo

Registro porque a rodada 3 registrou a mesma coisa, e porque **narrowing sem justificativa é
dispensa disfarçada**.

1. **`cobertura` nem sempre é progresso.** O detector barrava `%` a menos de 60 caracteres de
   `cobert|cover`, e reprovou **"cobriam 103% dela"** do Ninja Burai — que é cobertura de uma
   **região da ROM** por ponteiros falsos. `cobert|cover` saiu da lista solta e só conta
   quando o sujeito é a tradução (`(tradu[çc]|translat|roteiro|script)…(cobert|cover)`).
2. **`de N mensagens` nem sempre é progresso.** O detector barrava a frase
   **"numa amostra de 27 mensagens"** do Maniac Mansion, que é **tamanho de amostra de
   medição**, não andamento. Os padrões soltos `\bde \d+ mensagens\b` e `\bde \d+ strings\b`
   saíram; o par `x de y mensagens`, que é a forma real do progresso, continua barrado.

Os outros sete termos (`traduzid`, `translat`, `feit`, `pront`, `complet`, `done`, `inserid`)
continuam barrando `%` sozinhos, e as expressões de progresso (`capítulo N`, `v0.x`,
`build N`, `já traduzid`, `at[ée] agora`, `por enquanto`, `em curso`) continuam intactas.

---

**Fundido** pelo agente da **prova** (`jrpg_B`), 09/09/2026.
`python3 copy/rodada4/valida4.py copy/rodada4/consenso4.json` → 0 erros;
`copy/rodada2/valida.py` com os quatro slugs → 0 erros, 0 avisos.
Aguarda a assinatura do revisor.

---

## Revisão e assinatura

Revisado pelo agente de **universo e gancho** (`anime_A`), mesmo papel e mesmo critério das
rodadas 2 e 3: **o leitor**, nunca a procedência. Li as quatro `linha` em coluna, depois as
**dezessete** junto com as do `consenso2.json` e do `consenso3.json`, e as oito fichas por
dentro. Fiz **catorze edições** em quatro fichas. **Nenhuma reabre decisão factual do fusor**
— as quatro que o coordenador cercou eu conferi na fonte, e ele está certo nas quatro.

`copy/rodada2/valida.py` com os quatro slugs → **0 erros, 0 avisos** · `copy/rodada4/valida4.py`
→ **0 erros** · o meu `valida_r4.py` → **0 erros**. Isto é consenso.

### O que a fusão fez melhor do que qualquer coluna

Três coisas, e digo quais porque a régua tem de valer para os dois lados.

1. **A premissa da caixa japonesa no Burai.** As quatro colunas, a minha inclusive, escreveram
   «possuído por um 邪鬼, não um rei-demônio». O `glossario.md` foi reescrito depois de todas
   nós e retira a formulação categórica. O que ele pôs no lugar é melhor: Nobunaga sucumbiu ao
   poder da **Kusanagi** e virou 妖魔 — e a Kusanagi é a **única espada que a tabela de armas
   lista sem preço**. O vilão passa a estar amarrado a um item do próprio jogo. Nenhuma de nós
   tinha isso.
2. **A frase do Stadium.** «Quase todo mundo de certa idade jogou Pokémon Stadium; quase
   ninguém sabe que houve um antes dele» — e a confusão se desfaz **por medição**, com o
   contêiner de texto do motor ocidental dando zero ocorrência aqui. É a melhor abertura da
   rodada, e a única que resolve com prova uma pergunta de enciclopédia.
3. **A honestidade do Robopon.** «Já vinha no cartucho: não é melhoria da casa, e o que é nosso
   é a leitura.» A ficha tinha o fato mais vendável dos quatro e escolheu não vendê-lo. É o tom
   da casa na sua melhor forma.

### As catorze edições

**1 e 2. `maniac-mansion` — a `linha`, pt e en.**
- antes: *«O caminho inverso do catálogo: um jogo ocidental que foi para o Famicom…»*
- agora: *«Um jogo ocidental que virou cartucho japonês, e não o contrário: o Dr. Fred, a Edna
  e o Dave, escritos em hiragana.»*
- **Argumento de leitor, e é o achado do teste da coluna:** lidas as dezessete em sequência,
  **duas se apresentam pela posição na prateleira, e são vizinhas de tema.** A do Guevara abre
  *«O único do catálogo que teve versão ocidental oficial»*; esta abria *«O caminho inverso do
  catálogo»*. As duas falam **do mesmo eixo** — um cartucho cuja relação com o Ocidente é
  anômala —, as duas se medem contra o catálogo, e estão a quatro linhas uma da outra na home.
  É exatamente a classe que a revisão da rodada 3 marcou como recurso gasto, e agora com
  dezessete fichas ela está mais gasta ainda. A inversão **não se perdeu**: *«e não o
  contrário»* a diz inteira, sem convocar a estante — e o leitor que chega pelo Google, sem
  catálogo na cabeça, agora entende a frase. Entrou a Edna, que estava no P1 e não na linha.

**3 e 4. `robot-poncots-64` — a `linha`, pt e en.**
- antes: *«O alfabeto já vinha de fábrica: os 95 primeiros glifos do cartucho são o ASCII
  inteiro, desenhados. Traduzir aqui é reescrever strings.»*
- agora: *«Monstros-robô da Hudson no Nintendo 64, em que o bicho tem ATK, DEF e RAM, e um
  estado de batalha desliga todo o software dele.»*
- **Argumento de leitor:** das dezessete linhas, dezesseis dizem **que cartucho é aquele**.
  Esta não dizia nenhuma vez. Sem Hudson, sem robô, sem coleção de monstros: o único nome
  próprio da frase era `ASCII`, e quem rola a home não conseguia saber que aquilo é um jogo de
  colecionar bichos — nem, a rigor, que é um jogo. A justificativa da tabela (`FUSAO4.md:29`) é
  que aqui *«o fato técnico é mais surpreendente que o jogo»*, e isso é verdade **para nós**,
  que fazemos romhack; para quem chega, a primeira função da linha é identificar. E a ficha
  pagava duas vezes, porque o P1 tem a melhor frase de universo dos quatro jogos — um bicho com
  **RAM** entre os atributos, e um estado de batalha que **desliga o software dele** — e a linha
  gastava os seus 150 caracteres noutro lugar.
- **O fato de fábrica não se perdeu e não ficou sem ressalva:** o P2 inteiro é sobre ele e diz
  com todas as letras que não é mérito da casa. Tirado da linha, ele deixa de precisar de
  disclaimer na linha.
- **Efeito colateral, e foi de propósito:** as quatro linhas tinham três aberturas em
  *«[sintagma curto]:»* na mesma posição, fazendo o mesmo trabalho. Agora as quatro têm
  silhuetas diferentes — travessão · dois-pontos tardio · dois-pontos e travessão · só vírgulas.

**5 e 6. `maniac-mansion` — P2, «o texto traduzido» → «o inglês», pt e en.**
- **Argumento factual:** era **a única forma de progresso sobrevivente nas dezessete fichas**.
  A frase dizia *«o que põe o texto traduzido perto de 21,5 KB»*, e «o texto traduzido» convida
  o leitor a entender que existe um texto traduzido, de 21,5 KB, hoje. Trocado por «o inglês», a
  mesma frase vira o que ela sempre foi: **orçamento**, derivado de uma razão medida em amostra,
  que não muda amanhã. **O número fica onde estava** — ele é o que dá sentido aos «1.578 bytes
  livres» e o que justifica a expansão. Considerei cortar os 21,5 KB inteiros por serem
  projeção e **não cortei**, pelo mesmo motivo.

**7. `maniac-mansion` — P2 en, «came to be served by».**
- Decalque de «passou a ser servido por»; em inglês não se diz. Virou *«The text engine is now
  served by a bank that did not exist before»*.

**8. `pocket-monsters-stadium` — P3 en, «made with the eyes shut».**
- Decalque de «feita de olho fechado» — e **o erro é meu**, a expressão saiu da minha coluna.
  Em português é idioma da casa e a frase se explica sozinha; em inglês «with the eyes shut»
  não significa isto. Virou *«any edit made blind»*. O português fica como está.

**9. `robot-poncots-64` — P2 en, «what is ours is the reading».**
- Decalque de «o que é nosso é a leitura», que em português é a melhor frase da ficha e em
  inglês trava. Virou *«it is not work done here — our part was reading it»*, que diz o mesmo
  e continua sendo uma renúncia, não uma vanglória.

**10. `ninja-burai-densetsu` — P3 en, «the two swordsmiths Japanese history settled on».**
- «settled on» faz a história japonesa parecer um comitê que votou. Virou «remembers».

**11 a 14. Os fechos de `ninja-burai-densetsu` e `maniac-mansion`, pt e en.**
- **Argumento de leitor, e ele é a resposta à pergunta que o coordenador me fez.** Ver abaixo.

### O fecho do Pocket Monsters Stadium — o meu parecer

**A frase funciona; o que não funcionava era a vizinhança dela.**

Lidas as quatro em sequência, o fecho do Stadium **não soa truncado**. «Esta página é para
acompanhar o trabalho» é uma oração inteira, com sujeito e predicado, e nada nela pede uma
metade que não veio. O problema era outro, e mais sério do que o que o fusor temia: as **outras
três fechavam com a mesma frase, palavra por palavra** — «Não há patch para instalar; esta
página é para acompanhar». Contra três gêmeas idênticas, a quarta não lia como variação: lia
como **a única coisa que se mexeu**, e um leitor que repara pergunta por que só naquela não se
diz que não há patch. A resposta honesta a essa pergunta é justamente a que a ficha não pode
dar.

Fui conferir e o defeito é maior do que a rodada 4: as **seis fichas do site que levam a
fórmula** sempre variaram a segunda oração — «é para acompanhar», «acompanha o projeto» (duas),
«acompanha o trabalho», «é o registro de onde o trabalho está», «o projeto se acompanha por
aqui». A rodada 4 repetiu «é para acompanhar» três vezes seguidas, e essa formulação **já era
do Nekketsu**: quatro fichas do site passavam a dizer a mesma coisa com as mesmas palavras.

**A correção protege a decisão do fusor em vez de reabri-la.** Variei duas das três, dentro da
fórmula sancionada pelo `REGRAS.md:37-38` e usando as duas primeiras orações que a casa já
publica:

| ficha | fecho |
|---|---|
| `ninja-burai-densetsu` | Sem link para baixar: esta página acompanha o trabalho. |
| `maniac-mansion` | Não há patch para instalar; esta página acompanha o projeto. |
| `pocket-monsters-stadium` | **Esta página é para acompanhar o trabalho.** *(intocado)* |
| `robot-poncots-64` | Não há patch para instalar; esta página é para acompanhar. |

Agora são quatro fechos diferentes, com duas primeiras orações diferentes, e o do Stadium é
**uma variação entre quatro**, e não a única que destoa. A omissão deixa de ser um sinal que o
leitor tenta decodificar e passa a ser o que o fusor queria que fosse: correta nos dois
cenários, e discreta.

**Onde eu concordo inteiramente com ele:** *«omissão não é um estado que se deixe no ar depois
de o site publicar»*. Isto é ponte, não destino. **A decisão do dono continua binária e
continua pendente**, e é o item 2 do «Aberto para o dono».

### O que quis mudar e decidi não mudar

- **A camada 2 do Pocket Monsters Stadium é a mais fina das quatro.** A ficha diz o que o
  cartucho é, como o texto está guardado e o que o console exige — mas nunca diz **o que o
  trabalho mudou para quem joga**, que é o eixo que o dono pediu. Procurei material que
  servisse sem quebrar a regra e **não existe**: os 1.328 bytes que o reempacotamento fabricou
  dependem de a tradução ter sido feita, a tela de créditos carrega marca de estágio atrás de
  si, e o CIC-6103 e o `0x100000` do IPL3 são fatos do console, que é como a ficha já os
  apresenta. **Fica como está, e fica registrado**: é a ficha que mais ganha no dia em que os
  números destravarem.
- **O P2 do Maniac Mansion é uma parede de nove medições.** Li duas vezes como leitor e ele se
  sustenta, porque as nove são elos de **uma corrente só**: o tamanho da caixa → o tamanho do
  roteiro → o quanto de ROM sobrava → por que o cartucho dobrou. Cortar um elo quebra a cadeia.
- **O P3 do Burai carrega três assuntos** (a conferência pelo guia, a coluna, o vocabulário). É
  a mesma decisão que a revisão da rodada 3 tomou no P2 do Gozonji: o formato admite dois ou
  três parágrafos, e os três assuntos são camadas que o dono pediu.
- **A `linha` do Stadium.** É a melhor das quatro e não se toca. «Houve um Stadium antes do
  Stadium» resolve, em oito palavras, a confusão que a ficha inteira existe para desfazer.
- **As quatro decisões cercadas pelo coordenador.** Não reabri nenhuma, e conferi na fonte as
  duas que encostam no meu ofício: o bloco em `0x7C2CF` da `rom/base.z64` traz mesmo **quatro**
  títulos (`RED GREEN BLUE YELLOW`), e o `glossario.md` traz mesmo a premissa da Kusanagi. Sobre
  a frase «todos os outros são japoneses que nunca saíram do Japão»: **eu a copiei do briefing
  para a minha coluna sem conferir**, e o fusor está certo — ela é falsa desde o Guevara, e a
  formulação que ele pôs no lugar conserva a inversão inteira.

### Uma verificação que eu devia ao meu papel

A ficha do Maniac Mansion fecha o P2 com **a sua única prova de paridade** — *«trocar o banco
de onde o motor lê não muda um pixel do quadro»*. Fui conferir em vez de aceitar: `build/p_b12.nes`
e `build/p_b16.nes` têm **md5 diferentes** (`3fd6d6d4…` e `c83b094a…`, duas ROMs de verdade), e
as capturas `testes/saida/p_b12/shot_2580.png` e `testes/saida/p_b16/shot_2580.png` são
**byte a byte iguais**. A afirmação é exata, inclusive no singular: é **um** quadro, e a frase
reivindica um quadro.

---

**Assinado.** Revisão de universo e gancho — agente `anime_A`, 09/09/2026.
Catorze edições em quatro fichas; os três validadores em **0 erros** depois delas.
Isto é consenso, e fecha o catálogo em dezessete fichas.
