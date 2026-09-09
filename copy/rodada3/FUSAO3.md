# FUSÃO 3 — `consenso3.json`

Fundido a partir de `anime_A.json`, `anime_B.json`, `jrpg_A.json` e `jrpg_B.json` da rodada 3,
mais a seção RODADA 3 do `copy/rodada2/MELHORIAS_ACHADAS.md` e a do `NUMEROS_CONFERIDOS.md`.
Nos moldes do `FUSAO.md` da rodada 2: uma voz por ficha, nada de recorte-e-cola, e este arquivo
diz de onde veio cada camada, **por quê**, e o que ficou de fora de propósito.

`python3 copy/rodada2/valida.py --r3 copy/rodada3/consenso3.json` → **0 erros**. Meu validador
próprio soma a exigência de `arquivo:linha` para todo número, o detector de expressões de
progresso e o de percentual de progresso (que só barra `%` perto de `traduzid|translat|feit|
pront|complet|cobert`), mais quatro termos barrados só nesta rodada: `deadly mission`,
`maior roteiro`, `5.359` e o nome do autor do patch inglês anterior do MKR2.

---

## A `linha`, escolhida por cartucho

| slug | camada | por quê |
|---|---|---|
| `guevara` | **universo** | ser o único do catálogo com versão ocidental oficial é um fato que nenhum dos outros doze tem; e `GUEVARA e CASTRO` fecha a frase com prova, sem afirmar o que a versão de fora tirou |
| `gozonji` | **universo** | dois amigos e uma estrada é o que se entende sem conhecer nada; o número forte deste jogo (a troca de mapper) precisa de contexto e não cabe numa frase |
| `magic-knight-rayearth-2` | **prova, colada ao universo** | os nomes ancoram, e `12 caracteres × MAGIC KNIGHTS tem catorze` é a prova mais legível do catálogo inteiro — cabe numa linha e dispensa explicação |

As três fecham diferente: nome próprio · imagem da estrada · aritmética. Nenhuma repete a
fórmula da outra, e nenhuma repete o padrão da rodada 2.

---

## Por jogo

### Guevara
- **P1 (universo)** — **anime_B** dá a moldura ("o único cartucho do catálogo que teve versão
  ocidental oficial") e **anime_A** dá a matéria: retrato, dedicatória em japonês com tradução,
  prólogo. Somei do **jrpg_A** o conteúdo do prólogo — Batista, os impostos, a polícia secreta,
  o desembarque —, que é o que faz as "nove linhas" pararem de ser uma contagem.
- **P2 (a engenharia do prólogo)** — **jrpg_A** e **jrpg_B** trazem o mesmo material; fiquei
  com a formulação mais concreta de cada um. O empacotamento de dois glifos por tile veio do
  anime_A (que explica o mecanismo do atributo), o "mais da metade ficaria de fora" veio do
  jrpg_A, e a justificativa dos 16 px de altura veio do anime_A.
- **P3 (as correções e a prova)** — **anime_A**, quase inteiro: a geografia, o inglês
  macarrônico, o logo, os 0 de 61.440 pixels e o teste de canário. É o parágrafo mais bem
  medido de qualquer coluna nesta rodada.
- **Descartados, e são três:**
  1. **"e o comandante ficou sem nome"** (anime_A) e **"dois soldados, uma ilha genérica, um
     ditador sem nome" / "jogou isto com o assunto raspado"** (anime_B). **Não está medido.**
     A `NOTAS.md` só registra que "no Ocidente saiu como *Guerrilla War*" (`:4`); a única
     menção a "comandante" (`:963`) é sobre traduzir 少佐. Escrevi o que o cartucho japonês
     *tem* — o retrato, a dedicatória, o prólogo, os dois jogadores com nome — e deixei o
     leitor concluir. É mais forte, e é sustentável.
  2. **`SEE YOU NEXT PLAY` → `SEE YOU NEXT TIME`** (anime_A). O mesmo arquivo se contradiz:
     `:826-831` diz que o byte está gravado e a ROM montada lê `SEE YOU / NEXT / TIME`;
     `:1135-1136` diz que a tela "não foi traduzida". Usei só `TWO PLAYERS MODE` →
     `TWO PLAYER MODE`, que `:733` registra como feito, sem contradição.
  3. **shōsa → comandante** (anime_B). Boa e verdadeira, mas o P3 já tinha duas correções de
     conteúdo e uma terceira diluía as outras.

### Gozonji — *The Misadventures of Yaji & Kita*
- **P1 (universo)** — **anime_A**, que é o único a explicar por que a dupla importa ("um livro
  que todo japonês encontra na escola", "a dupla de estrada original, dois séculos antes de o
  cinema inventar o gênero"). Somei do **jrpg_A** o nome do autor, Jippensha Ikku, e a nota de
  que o nome em inglês é escolha desta tradução, com o subtítulo da tela.
- **P2 (o motor e o conteúdo novo)** — **jrpg_A** para o dicionário, que é onde ele foi mais
  fundo que todos: as 128 casas guardavam palavras japonesas e foram **regeradas do corpus
  inglês**, de modo que a mesma compressão passa a servir ao inglês, sem código novo. Isso é
  reaproveitamento de mecanismo, e nenhuma outra coluna o disse assim. O prólogo com retratos
  veio do **anime_A**, com as cores lidas no emulador, e o "espera o botão" do **jrpg_A**.
- **P3 (a prova)** — **anime_A** e **anime_B** acharam o mesmo fato decisivo, que eu não tinha
  na minha coluna: **o caminho de expansão dos outros projetos estava fechado aqui**, porque o
  bit que viraria linha de endereço já é usado pela CHR-ROM de 128 KB, cujas 32 páginas são
  todas distintas. Isso transforma a troca de mapper de curiosidade técnica em decisão
  necessária. Somei as duas lições do **anime_A** (a região fixa sob MMC3; o banco 7 que
  parecia morto).
- **Descartados:**
  1. **"o roteiro é o maior do catálogo"** (anime_A, anime_B, jrpg_A — três das quatro
     colunas). **Mantive minha barra.** Em falas ele é (3.581 contra 2.154 do MKR2), mas
     **em bytes empata com o Gaia Saver** (93.640 B contra 94,1 KB), nenhuma nota faz a
     comparação, e a afirmação não distingue as duas contagens. O número sozinho já impressiona.
  2. **Os 5.359 blocos.** Continuam fora: é a varredura bruta, que o próprio `RETOMAR.md:22-23`
     declara conter falsos positivos e a duplicata banco 4 / banco 12.
  3. **O espaço livre da ROM original.** As fontes divergem por sete vezes — `RETOMAR.md:54`
     diz **2.211 B (0,8%)**, `RELATORIO.md:27` diz **~16 KB**. Eu tinha usado 2.211 B na minha
     coluna; **tirei da fusão** e pus no lugar o caminho bloqueado, que é inequívoco e explica
     melhor. Ver "aberto para o dono".
  4. **`DEADLY MISSION`**, o letreiro queimado. Fora, como nas quatro colunas. Ficou só o
     subtítulo da tela, que é fiel e está no `graficos/conv_subtitulo.py:28`.
  5. **`NEW TRIP` no menu** (anime_B). Cabia, mas o P2 já estava longo e o dicionário rende mais.

### Magic Knight Rayearth 2
- **P1 (universo)** — **anime_A** para o elenco e o estado do mundo (Emeraude e o Pilar,
  Autozam/Chizeta/Fahren), e **anime_B** para o que este jogo *é*: <i>Making of Magic Knight</i>,
  em que você **forma as três** e o final de cada uma depende de como foi criada. Essa é a
  melhor frase da rodada inteira sobre qualquer um dos três, e nenhuma outra coluna a tem.
  Conferi o elenco varrendo `roteiro/en/` — Cefiro, Hikaru, Umi, Fuu, Lantis, Eagle, Presea,
  Fahren, Chizeta, Autozam, Mokona, Emeraude, PILLAR, Clef, Caldina, Ferio, Lafarga e Ascot
  aparecem todos no texto em inglês.
- **P2 (a ponte, e o aperto)** — é o parágrafo que o coordenador marcou, e o mérito é do
  **anime_A**: o jogo é kana puro **porque é shoujo, escrito para criança ler**, cada kana
  ocupa uma coluna, e é daí que vem o aperto. Ligado a isso, o `MAGIC KNIGHTS` / `MG KNIGHTS`
  do **jrpg_A** e o par 31.524 bytes / 26.584 colunas da minha coluna. A cadeia inteira —
  público → escrita → coluna → corte na tela — só existe depois de fundir três colunas.
- **P3 (a VWF)** — **jrpg_A** e **anime_B** para o mecanismo (o plano 0 como máscara), a minha
  para os números e o banco fixo, e o **espaço fino de 1 px** do jrpg_A, que é o detalhe que
  prova que alguém foi até o fim.
- **Descartados:**
  1. **"a narração de abertura tem 14 caracteres"** — número que **eu mesmo** tinha nas fontes
     da minha coluna. A `NOTAS.md:240-241` corrige: **tem 12, igual à caixa**, medido imprimindo
     o alfabeto sem espaços. Corrigido na fusão e no `NUMEROS_CONFERIDOS.md`.
  2. **`79.012 bytes livres, 15% da ROM`** (anime_A). Verdadeiro (`NOTAS.md:45`), mas
     contradiz o eixo do parágrafo: a ficha inteira defende que aqui o orçamento **não é byte**.
     Citar folga de armazenamento no meio disso enfraquece o argumento.
  3. **O nome do autor do patch inglês anterior.** Barrado desde a minha coluna; três colunas
     o evitaram, o anime_A o nomeia. Fora.
  4. **Os créditos completos da tela de título** (`YOMIURI TV / DENTSU`, `TMS`) e a prova de
     expansão da SEGA. Ambos verdadeiros; ficaram fora por espaço, e o CLAMP sozinho já ancora
     a autoria.

---

## O que ficou fora, em uma lista

| o que | de quem | por quê |
|---|---|---|
| "o comandante ficou sem nome" / "o assunto raspado" | anime_A, anime_B | não está medido em nota nenhuma |
| `SEE YOU NEXT PLAY` → `SEE YOU NEXT TIME` | anime_A | o mesmo arquivo se contradiz (`:826` × `:1136`) |
| shōsa → comandante | anime_B | verdadeiro; cortado por espaço |
| "o maior roteiro do catálogo" | anime_A, anime_B, jrpg_A | empata em bytes com o Gaia Saver; a comparação não está em nota |
| 5.359 blocos / 134 KB / 252 mil caracteres | — | varredura bruta, com falsos positivos declarados |
| 2.211 B livres · ~16 KB livres | jrpg_B (meu), jrpg_A, anime_A | duas fontes divergem por 7× |
| `DEADLY MISSION` | — | letreiro queimado; disciplina mantida pelas quatro colunas |
| `NEW TRIP` | anime_B | espaço |
| "narração de abertura: 14 caracteres" | jrpg_B (meu) | corrigido para 12 pela `NOTAS.md:240-241` |
| 79.012 bytes livres (15%) | anime_A | contradiz o eixo "o orçamento não é byte" |
| nome do autor do patch anterior do MKR2 | anime_A | barra minha, de pé desde a proposta |
| créditos completos da tela de título do MKR2 | anime_A | espaço |
| todo número de progresso | — | regra da rodada; a lista completa está no `NUMEROS_CONFERIDOS.md` |

---

## Aberto para o dono

1. **Gozonji: quanto espaço livre tinha a ROM original?** `RETOMAR.md:54` diz **2.211 B
   (0,8%)**; `RELATORIO.md:27` diz **~16 KB**. Sete vezes de diferença, e nenhum dos dois
   arquivos explica o outro. A ficha não cita nenhum — usa o caminho de expansão bloqueado,
   que é inequívoco. **Precisa de árbitro** se o número for entrar em algum lugar do site.
2. **Guevara: a tela `SEE YOU NEXT TIME` foi traduzida ou não?** `NOTAS.md:826-831` diz que
   o byte está gravado e conferido na ROM montada; `:1135-1136` diz que não foi traduzida.
   Não afeta a ficha, mas afeta o que se pode afirmar sobre a cobertura do release.
3. **Gozonji: o letreiro da build diz `DEADLY MISSION`, e o nome do site é outro.** As quatro
   colunas e esta fusão contornaram citando só o subtítulo. **Enquanto a imagem não mudar, a
   página e a tela dizem coisas diferentes** — e é a imagem que o jogador vê.
4. **Gozonji: o nome de saída está cravado em nove lugares** (`build/tudo.sh:9,13,17`,
   `patch.py:2,23`, `monta.py:66`, e os `default` de `monta2.py:46`, `monta3.py:130`,
   `monta4.py:141`; mais `monta5.py:148`, com outro nome). Não há passo que copie para o
   Desktop com o nome de release. Trocar o título significa mexer nesses lugares.
5. **Quando as traduções fecharem**, os números barrados voltam a ficar disponíveis — a lista,
   com fonte, está na seção final do `NUMEROS_CONFERIDOS.md`. O melhor deles é o `truncados: 0`
   do MKR2.

---

## Revisão e assinatura

Revisado pelo agente de **universo e gancho** (`anime_A`), mesmo papel da rodada 2 e mesmo
critério: **o leitor**, nunca a procedência. Li as três `linha` em coluna e as seis fichas por
dentro. A fusão está boa, e em três pontos está acima do que qualquer coluna entregou: a
cadeia **público → escrita → coluna → corte na tela** do MKR2, que só existe fundindo três
propostas; o *Making of Magic Knight* como o que o jogo **faz** (formar as três, e o final
dependendo da criação), que só o `anime_B` tinha; e o caminho de expansão bloqueado do
Gozonji, que transforma a troca de mapper de curiosidade em necessidade. Fiz **oito edições**
em três fichas. Nenhuma reabre decisão factual do fusor.

### Sobre a frase que o fusor derrubou

**Ele tem razão e eu estava errado.** Eu havia escrito, na `linha` do Guevara, que o jogo
"saiu como Guerrilla War, sem o Che". A `NOTAS.md` documenta o que a ROM **japonesa** tem;
ninguém abriu a americana. A minha própria ficha citava o `REGRAS.md` para esse pedaço, e não
um arquivo do projeto — sinal que eu devia ter lido.

**Não proponho alternativa: a `linha` da fusão é melhor do que a minha.** «O único do catálogo
que teve versão ocidental oficial. Na ROM japonesa os dois jogadores chamam-se GUEVARA e
CASTRO.» Ela põe os dois fatos lado a lado e deixa a conclusão com o leitor — e conclusão a
que o leitor chega sozinho vale mais do que afirmação que a página faz por ele. Também
sobrevive ao dia em que alguém finalmente abrir a ROM americana, o que a minha não faria.

### As oito edições

**1. `magic-knight-rayearth-2` — a `linha`, pt e en.**
- antes: *"…de volta a Cefiro, no único Game Gear da casa."* · agora: *"…voltam a Cefiro
  depois de Emeraude, no Game Gear."*
- **Argumento de leitor:** lidas em coluna, **duas das três linhas abriam com um superlativo
  de catálogo** — "o único do catálogo que teve versão ocidental oficial" e "o único Game Gear
  da casa". Com treze fichas no ar, "o único" já é um recurso gasto da casa, e duas ocorrências
  em três linhas viram fórmula. No Guevara o superlativo **é** o gancho e não se toca; no MKR2
  ele era acessório, porque o soco da linha é a aritmética do fim. O que entrou no lugar diz
  **qual Rayearth é este** — que é o que a segunda parte precisa dizer a quem acompanhou — e o
  Game Gear continua ali, sem a moldura de ranking. O P1 já carrega "o único cartucho de Game
  Gear deste catálogo", então nada se perdeu.

**2 e 3. `guevara` — «aos quatro segundos», pt e en.**
- **Argumento factual, e é meu erro tanto quanto de quem fundiu:** a `NOTAS.md:20` dá o
  retrato no **quadro ~430**, e o mesmo arquivo calcula 162 quadros como ~2,7 s (`:477`).
  Pela aritmética dele, o quadro 430 cai perto de **sete** segundos, não quatro. Nenhum
  arquivo diz "quatro segundos". Troquei por "logo depois do logo da SNK", que é o que a
  tabela de boot sustenta (logo 60-140, splash 200-260, retrato ~430) e que dá a mesma
  sensação de "antes de você tocar no controle".

**4. `guevara` — a glosa da dedicatória, en.**
- antes: *«to the hero of the Cuban revolution, Che Guevara»* · agora: *«to Che Guevara, hero
  of the Cuban revolution»*.
- **Argumento de leitor:** é a ordem que vai **queimada na ROM** (`NOTAS.md:207`:
  `TO CHE GUEVARA / HERO OF THE CUBAN REVOLUTION`). Quem lê a página em inglês e depois liga o
  jogo lê a mesma frase nas duas telas. O português já batia com a ordem japonesa.

**5 e 6. `gozonji` — «espalhadas por todos os dezesseis bancos», pt e en.**
- **Argumento de leitor: a ficha se contradizia consigo mesma.** O P1 diz "o roteiro repartido
  em **nove** blocos de peso parecido" e o P3 dizia "espalhadas por todos os **dezesseis**
  bancos". As duas afirmações têm fonte — `RETOMAR.md:33` e `ANALISE.md:46`, que contam coisas
  diferentes (a divisão de trabalho e a varredura bruta) —, mas o leitor encontra os dois
  números a trezentas palavras de distância, sem nada que os reconcilie, e conclui que a página
  errou. A cláusula não fazia falta ao parágrafo, que é sobre a troca de mapper. Cortada; o P1
  fica com os nove, que é o número que serve à imagem da estrada.

**7. `gozonji` — «measured coldness», en.**
- **Argumento de leitor: não é inglês.** É decalque de "frieza medida", e em inglês não
  significa nada — o conceito é o de um trecho que nunca foi executado num traçado. Virou
  "a cold profile says the test never went that way". Em português a expressão é o idioma da
  casa e a frase se explica sozinha; fica como está.

**8. `magic-knight-rayearth-2` — «on a code the game never uses», en.**
- Um `code` sem `point` deixa a frase dizendo que o espaço fino está "num código". Virou
  "mapped to a code point the game never uses".

### O que quis mudar e decidi não mudar

- **A `linha` do Guevara.** Ver acima: é melhor do que a minha era.
- **A citação do subtítulo do Gozonji.** A ficha cita `TOKAIDO'S 53 STATIONS`, e o fonte
  (`graficos/conv_subtitulo.py:28`) grava `TOKAIDO'S 53 STATIONS!`, **com exclamação**. A regra
  4 proíbe exclamação em qualquer campo, então a citação exata é impossível — e mudar a régua
  por causa de uma citação seria pior. Deixei como está e registro em "aberto para o dono":
  **a página apresenta como literal uma linha que difere da imagem queimada por um caractere.**
  Vale resolver junto com o letreiro, que já está aberto.
- **O P2 do Gozonji é o parágrafo mais longo dos três jogos** e carrega três ideias (a fonte,
  o dicionário regenerado, o prólogo com retratos). Pensei em dividir e não dividi: o formato
  admite 2 ou 3 parágrafos, e as três ideias são **camada 2**, que é o eixo que o dono pediu.
  Cortar uma para arejar seria pagar com o eixo.
- **O fecho do P3 do Guevara** empilha três coisas na última frase (publicado nos três idiomas,
  versão queimada, cada tela lida letra por letra). Fica: é uma ficha de release, e o último
  período é onde o leitor quer saber o que ele leva.
- **As decisões factuais do fusor.** Não reabri nenhuma. Conferi na fonte as duas que encostam
  no meu ofício e ele está certo nas duas: o `SEE YOU NEXT TIME` de fato tem o arquivo se
  contradizendo (`NOTAS.md:826-831` × `:1135-1136`), e "o maior roteiro do catálogo" de fato
  empata em bytes com o Gaia Saver. Confirmei ainda que **nenhuma das três fichas nomeia o
  próprio tier**, que **não há número de progresso** — os únicos percentuais são `100% kana` e
  os `19%` de byte contra coluna, ambos fatos do cartucho — e que a **disciplina do Gozonji se
  manteve nos dois idiomas**: nenhuma das seis passagens afirma o que o letreiro mostra.

---

**Assinado.** Revisão de universo e gancho — agente `anime_A`, 08/09/2026.
Oito edições em três fichas; `python3 copy/rodada2/valida.py --r3 copy/rodada3/consenso3.json`
em **0 erros** depois delas. Isto é consenso.

---

### Correção pós-assinatura — 08/09/2026, `guevara` (polaridade invertida)

Erro de fato achado pelo **revisor espanhol**, nos dois idiomas, no P3 do Guevara. A frase dizia:

> «a tela reconstruída a partir do dump da PPU **bate com a original em 0 de 61.440 pixels**»
> «the screen rebuilt from the PPU dump **matches the original at 0 of 61,440 pixels**»

Lida ao pé da letra, ela afirma que a tela **não coincide em pixel nenhum** — o oposto da
medição. O zero é contagem de **divergências**, não de coincidências. **O erro é meu**, e veio
da minha proposta: a fonte (`~/guevara-hack/NOTAS.md:31`) escreve «bate pixel a pixel
(**0 de 61440 diferentes**)», e ao encurtar eu deixei cair justamente a palavra que dava
polaridade à conta.

**Corrigido para a construção do revisor espanhol**, que é também a que a casa já publica
(`build/jogo-ct.mjs`, `build/es-ct.mjs`: «0 pixels de diferença» / «con 0 píxeles de diferencia»):

> «…**não difere da original em nenhum dos seus 61.440 pixels**»
> «…**does not differ from the original in any of its 61,440 pixels**»

O número fica onde estava — ele é a prova —, e os três idiomas passam a dizer a mesma coisa
com a mesma fórmula. Nenhum outro fato ou número foi tocado.

### A varredura pela classe do erro — treze fichas, nenhum outro caso

O defeito é de classe: «0 de N» só se lê quando o leitor sabe **o que** está sendo contado.
Varri os dois consensos por duas redes, e cada ocorrência foi julgada uma a uma.

1. Toda construção de contagem-zero e de razão: `0 de N`, `zero`, `0 bytes/pixels/quadros/erros`,
   `N de N`, `nenhuma diferença`, `idêntico`.
2. Todo **verbo de concordância ou divergência** (`bate`, `coincide`, `difere`, `diverge`,
   `matches`, `differ`, `agree`) com número na mesma vizinhança — que é onde a polaridade
   pode inverter sem que a frase pareça errada.

**Resultado: o Guevara era o único caso.** As demais estão certas porque **nomeiam o que
contam**, que é exatamente a régua:

| ficha | construção | por que passa |
|---|---|---|
| captain-tsubasa | «225 dumps, **0 bytes diferentes** contra a ROM original» | «diferentes» dá a polaridade; 225 é o universo |
| gozonji | «**19 de 19 quadros idênticos** à ROM japonesa» | N de N, e «idênticos» nomeia o que se conta |
| gaia-saver | «**1.875 de 1.875 mensagens** voltam byte a byte iguais» | idem |
| dragon-ball-3 | «só **53 pixels divergem** nos seis blocos de 16×16» | o verbo é «divergem»; o universo são os seis blocos |
| dragon-ball-3 | «**1.305 de 1.305 mensagens**» | N de N |
| ultraman-club-2 | «653 entradas, **zero divergências**» | mesma forma do Tsubasa |
| ultraman-club-3 | «o construtor **aborta se os bytes originais não baterem**» | polaridade explícita |
| hanjuku-hero | «com あ, ャ e o espaço **batendo**» | concordância, sem número invertido |
| famicom-jump-2 | «cartucho no teto do mapper 153 com **zero bytes livres**» | «livres» nomeia o que se conta |
| nekketsu | «validador em **zero erro**» · «sai **idêntica** à original» | nomeados |
| monster-maker | «a ROM grande **roda idêntica** à original» | sem contagem |
| magic-knight-rayearth-2 | «os dois planos restantes são sempre **zero**» | valor de plano de bits, não contagem |

`python3 copy/rodada2/valida.py copy/rodada2/consenso2.json` → 0 erros ·
`python3 copy/rodada2/valida.py --r3 copy/rodada3/consenso3.json` → **0 erros**.
— agente `anime_A`, 08/09/2026.

---

# ATUALIZAÇÃO — 09/09/2026: Guevara reescrito para a v2.0

A ficha anterior descrevia a v1.0 — três ROMs de 128 KB, uma por idioma — e o projeto saltou
para a **v2.0**. Reescrevi a entrada `guevara` inteira por cima, no `consenso3.json`. As fichas
do Gozonji e do MKR2 não foram tocadas. Validação: `valida.py --r3` → **0 erros**, e o meu
validador com a exigência de `arquivo:linha` por número, agora com `idioma único`,
`single-language`, `release`, `beta` e `alfa` também na lista de barrados.

Fonte: `~/guevara-hack/NOTAS.md`, seções «Expansão para 256 KB, menu de OPÇÕES e ROM de três
idiomas» (`:1329`), «VIDAS vai só até 4 — e porquê» (`:1445`), «Vidas infinitas» (`:1781`),
«Versão: v1.0 → v2.0» (`:1552`) e «Verificação final da v2.0» (`:1593`).

## O que ENTROU

| o quê | onde na ficha | fonte |
|---|---|---|
| **Menu de opções**, aberto com SELECT no título: idioma, vidas, dificuldade e sound test | P2, e passou a ser a `linha` | `NOTAS.md:1332-1334`, `:1406-1410`, `:1603` |
| **Vidas configuráveis**, com teto **infinito** e o decremento desligado, conferido em **13.400 quadros** | P2 | `NOTAS.md:1781-1785`, `:1836` |
| **A história das quatro cruzes** — o menu deixava escolher nove, a foto com seis mostrou quatro, e o teto virou o 4 de fábrica | P2 | `NOTAS.md:1445-1453` |
| **Uma ROM com os três idiomas**: o texto localizado vive no banco 5, e trocar de idioma é trocar o banco mapeado, por uma variável em `$0400` | P3 | `NOTAS.md:1370-1373` |
| **Expansão de 128 para 256 KB**, com o banco fixo saindo do 7 para o 15, e o 15 como cópia do 7 | P3 | `NOTAS.md:1336-1345` |
| **A ordem do espelho**: 15 ← 7 depois de todos os patches, ou o jogo roda código antigo sem erro visível | P3 | `NOTAS.md:1356-1359` |
| **Blocos mortos do banco fixo em uso, com cada gancho afirmando os bytes originais antes de escrever** | P3 | `NOTAS.md:1382-1400` |
| **Canário: 14 quadros, 0 pixel de diferença**, incluindo gameplay | P3 | `NOTAS.md:1347-1348` |
| **Verificação final da v2.0**: 0 pixel na cena noturna e no boot nos três idiomas, guarda limpa com 38 reservas | P3 (implícito no fecho) | `NOTAS.md:1596-1603` |
| **O boot japonês já imprime `SNK WAR GAME PROJECT / GUERRILLA WAR` em letra latina** — pedido do coordenador, e faltava na ficha anterior | P1 | `NOTAS.md:19` |
| **A dedicatória lida na tela**, `A CHE GUEVARA / HÉROE DE LA REVOLUCIÓN CUBANA` | P1 | `NOTAS.md:204-208` |
| **Um patch, três idiomas**, com a versão queimada na tela de créditos | fecho do P3 | `NOTAS.md:1554-1557`, `fonte/multi.py:28` |

## O que SAIU

| o quê | por quê |
|---|---|
| «Publicado em **inglês, espanhol e português**», que sugeria três entregas | agora é **uma ROM, um patch, três idiomas** — a frase antiga descrevia a v1.0 |
| Qualquer menção a versões por idioma | o dono tirou as ROMs de idioma único do site |
| O **logo do título em 224×56 px, 179 tiles, 0 de 61.440 pixels** | verdadeiro e forte, mas o P3 passou a carregar a expansão, o mapa de bancos, os ganchos e o canário; era o candidato mais dispensável, porque o canário de 14 quadros já prova a mesma disciplina com material novo |
| «cada tela lida letra por letra no emulador nos três» como frase própria | absorvido no fecho, para abrir espaço |

## Fatos da v2.0 que decidi NÃO usar

1. **O menu de opções existe só na ROM de três idiomas.** O `NOTAS.md:1613-1638` avisa: «ao
   anunciar ou publicar, dizer qual ROM tem o quê», porque as de idioma único não têm o
   gancho do SELECT. Como o dono tirou essas do site, **a ressalva deixou de existir para o
   leitor** — há uma ROM só, e ela tem o menu. Deixar a distinção na ficha seria descrever
   material que ninguém pode baixar.
2. **A reversão da dificuldade** (`:1468-1474`): `EASY/NORMAL/HARD` foi traduzido para
   `FACIL/NORMAL/DURO` e desfeito, porque essas três entradas partilham a tabela dos ordinais
   `1ST`..`9TH`, num campo de menu de depuração que não se conseguiu fotografar. É uma boa
   história de método — «sem foto não se dá por pronto» — mas contá-la obriga a explicar o
   que não foi feito, e a regra da casa proíbe.
3. **As armadilhas do menu** (`:1416-1436`): o estado 21 correndo o handler 21 vezes por
   quadro, a DMA da OAM apanhando o menu a meio, o `INX` mexendo no flag Z. Detalhe de
   implementação sem consequência para quem joga.
4. **`$28 = 6` com `$08 = $10`** e a regra de ler variável de partida só com o estado
   confirmado (`:1459-1466`). Excelente disciplina de medição, mas é prova de bastidor: o que
   o leitor sente é o número de vidas que ele escolheu chegar ao jogo.
5. **Os 38 registros da guarda de bytes** como número solto. Entrou como *guarda limpa*
   dentro do fecho, sem o algarismo, porque o P3 já tem quatro números carregando peso.
6. **O sound test tocando a rotina errada e mexendo no CHR** (`:1504-1541`) e a constante de
   endereço copiada à mão (`:1486-1503`). São defeitos introduzidos e corrigidos durante o
   trabalho; a ficha cita o sound test como recurso, que é o que ele é para quem joga.

## Continua valendo, sem mudança

Não se afirma o que a versão americana tirou — segue sem medição em nota nenhuma, e a ficha
diz apenas o que o cartucho japonês **tem**. O `SEE YOU NEXT PLAY` → `SEE YOU NEXT TIME`
continua fora, pela contradição interna do arquivo (`:826-831` × `:1135-1136`).

---

## Revisão e assinatura da v2.0 — 09/09/2026

Revisado pelo agente de **universo e gancho** (`anime_A`), mesmo critério de sempre: **o
leitor**, nunca a procedência. Li as **dezessete** `linha` em coluna e a ficha nova por dentro,
nos dois idiomas. A reescrita está boa e ganhou duas coisas que faltavam: o boot japonês que já
imprime `GUERRILLA WAR` em letra latina — que passa a fazer o trabalho de juxtaposição **dentro
do P1**, sem afirmar nada sobre a versão americana — e a história das quatro cruzes, que é a
melhor prova de método da ficha porque termina numa decisão de produto («prometer o que a tela
não mostra seria mentir»). **Fiz quatro edições.** Nenhuma reabre o que o fusor cercou.

### 1. A dedicatória em português estava em ESPANHOL — a correção mais importante

O P1 em português dizia que a dedicatória «aqui se lê `A CHE GUEVARA / HÉROE DE LA REVOLUCIÓN
CUBANA`». Essa é a **linha espanhola**. A `NOTAS.md:207-209` dá as três:

```
EN   TO CHE GUEVARA / HERO OF THE CUBAN REVOLUTION
ES   A CHE GUEVARA / HÉROE DE LA REVOLUCIÓN CUBANA
PT   A CHE GUEVARA / HERÓI DA REVOLUÇÃO CUBANA
```

O inglês estava certo; o português pegou a linha de baixo. Corrigido para
`A CHE GUEVARA / HERÓI DA REVOLUÇÃO CUBANA`.

**Argumento de leitor:** é a frase mais carregada da ficha inteira, é uma **citação do que vai
queimado na tela**, e agora que a ROM tem os três idiomas dentro o leitor brasileiro pode ligar
o jogo e comparar em dez segundos. Errar a citação justamente na língua de quem lê a página é o
tipo de defeito que custa a confiança que os outros dezesseis parágrafos construíram. A tabela
do próprio `FUSAO3.md` («A dedicatória lida na tela») também traz a linha espanhola — a origem
do erro está ali, e fica registrada para não voltar.

### 2. «Aos quatro segundos» voltou, e não está medido

Eu já havia tirado esta frase na revisão de 08/09 (secção anterior deste arquivo), e a
reescrita a reintroduziu nos dois idiomas. O motivo não mudou: a `NOTAS.md:20` dá o retrato no
**quadro ~430** e nenhum arquivo dá segundos; a aritmética do próprio `:477` (162 quadros ≈
2,7 s) põe o quadro 430 perto de **sete** segundos. De volta a «logo depois do logo da SNK» /
«right after the SNK logo», que é o que a tabela de boot sustenta.

**Fica o registro para a próxima reescrita:** este número já caiu duas vezes. Se voltar, é
porque alguém está lendo a ficha antiga em vez da fonte.

### 3. A `linha`, pt e en — a única das dezessete que abria por ficha técnica

- antes: «Um run-and-gun de 1988 com menu de opções: idioma, vidas e dificuldade. E na ROM
  japonesa os dois jogadores chamam-se GUEVARA e CASTRO.»
- agora: «Neste run-and-gun de 1988 os dois jogadores chamam-se **GUEVARA e CASTRO** — e um
  menu novo no título escolhe idioma, vidas e dificuldade.»

**Argumento de leitor, e ele só aparece lendo as dezessete em coluna:** todas as outras
dezesseis dão ao leitor **algo que ele reconhece nas primeiras quatro palavras** — Goku e JoJo,
Dragon Ball, Super Campeões, River City Ransom, Ultraman/Kamen Rider/Gundam, Zoffy e Ace, os
Ultras, Mark Twain, um ovo meio cozido, dois amigos de Edo, Hikaru/Umi/Fuu, ninjas no Mega
Drive, o Dr. Fred, um Stadium antes do Stadium, monstros-robô da Hudson. A do Guevara passou a
abrir com **gênero, ano e lista de recursos**, que é a abertura de uma ficha técnica, e empurrou
para uma segunda frase — introduzida por «E», que a lê como apêndice — o **único par de nomes
próprios que nenhum outro cartucho do catálogo tem**. Trocar a ordem devolve o soco ao começo,
mantém gênero e ano, e faz o menu chegar como **entrega** em vez de como especificação. Os dois
fatos continuam lá; mudou só quem entra primeiro.

Registro que a troca anterior — sair da posição na prateleira («o único do catálogo que teve
versão ocidental oficial») — **estava certa e não se desfaz**: era o mesmo defeito que me fez
reescrever a `linha` do Maniac Mansion. A fila melhorou nesse eixo; o que abriu foi este outro,
e está fechado.

### 4. A âncora do menu — resposta à pergunta do coordenador

**Sim, precisa de âncora, e ela é barata.** O P2 dizia «**O jogo** ganhou um menu de opções»:
uma afirmação sobre o jogo em geral, que fica falsa no dia em que alguém republicar as ROMs de
idioma único, porque essas não têm o gancho do SELECT. Passei para «**Esta ROM** ganhou um menu
de opções» / «**This ROM** gained an options menu».

Custa uma palavra e resolve por construção: a frase deixa de ser sobre o jogo e passa a ser
**sobre o artefato que a página entrega**, que é o que o fusor já tinha concluído em prosa («há
uma ROM só, e ela tem o menu») sem pôr no texto. Assim a ficha continua correta sem ressalva,
sem descrever material que ninguém pode baixar, e **sem depender de o catálogo não mudar** — se
as outras voltarem ao site, esta frase não vira dívida.

### O que quis mudar e decidi não mudar

- **O P3 tem 238 palavras** e emenda o prólogo e a fonte de meia largura no fim de um parágrafo
  que já carrega a ROM única, o banco 5, a expansão, a armadilha do espelho, os ganchos e o
  canário. Pensei em mover o prólogo para o P2, onde ele é experiência e não engenharia. **Não
  mexi**, e a razão é medida: fui contar os parágrafos das dezessete fichas, e a rodada 4 tem
  quatro em 211, 217, 217 e 243 palavras. 238 deixou de ser fora da curva — é a régua nova da
  casa, e mudar a régua numa ficha só faria dela a estranha.
- **A camada do universo sobreviveu** e não precisou de socorro: o P1 mantém os dois jogadores
  com nome, o retrato, a dedicatória citada e o prólogo de 1956 com Batista, os impostos, a
  polícia secreta e o desembarque — e ganhou o boot latino. Conferi que **nenhuma formulação
  sugere três entregas** nos dois idiomas: «É uma ROM só, com os três idiomas dentro» e «Um
  patch, três idiomas» no fecho, e nenhuma ocorrência de «publicado em», de versão por idioma
  ou de nome de tier.
- **Não reabri** nada sobre o que a versão americana tirou, o `SEE YOU NEXT PLAY`, nem o logo do
  título — a escolha editorial de tirá-lo do P3 está declarada e é defensável.

---

**Assinado.** Revisão de universo e gancho — agente `anime_A`, 09/09/2026.
Quatro edições na ficha do Guevara; `python3 copy/rodada2/valida.py --r3
copy/rodada3/consenso3.json` em **0 erros** depois delas. Isto é consenso.
