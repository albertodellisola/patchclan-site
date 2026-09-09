# NÚMEROS CONFERIDOS — rodada 2, agente da PROVA (`jrpg_B.json`)

Cada número que entrou na copy, com a fonte em `arquivo:linha`. Tudo abaixo foi lido
no arquivo citado. O que **não** foi confirmado está na seção CONFLITOS, no fim.

Convenção: `~/` = home do usuário. Números do site (`~/patchclan-site/build/*.mjs`)
contam como fonte porque já foram conferidos uma vez e estão publicados.

---

## 1. Famicom Jump II — `famicom-jump-2` · release · en · pt · es

| número | o que é | fonte |
|---|---|---|
| 2 de dezembro de 1991 | data do jogo, Bandai/Chunsoft | `~/fj2-hack/FEATURES.md:8` |
| 19 B + 3 B | botão B contextual: kernel sempre mapeado + banco 30 | `~/fj2-hack/FEATURES.md:69` |
| 5 páginas | prólogo escrito do zero, recapitulando o jogo de 1989 | `~/fj2-hack/FEATURES.md:36` |
| 2 bytes | a correção do seletor de sete casos | `~/fj2-hack/FEATURES.md:87` |
| 6 de 7 | variantes que nunca haviam aparecido na tela | `~/fj2-hack/FEATURES.md:88` |
| mapper 153 · 512 KB · 0 B livres | o cartucho, no teto do mapper | `~/fj2-hack/FEATURES.md:120` |
| 1,51× | o inglês contra o japonês, medido em tradução real | `~/fj2-hack/FEATURES.md:122` |
| 26 grupos · 6,25 → 3,90 bits/char | Huffman de ordem 1 | `~/fj2-hack/FEATURES.md:124-126` |
| 89 B | o decodificador 6502 | `~/fj2-hack/FEATURES.md:126` |
| 65,9 KB de 68,1 KB | o roteiro inglês no espaço disponível | `~/fj2-hack/FEATURES.md:128` |
| 1.903 | mensagens decodificadas de volta a cada compilação | `~/fj2-hack/FEATURES.md:144` |
| 9 glifos | os que o espanhol pediu (`á é í ó ú ñ ü ¿ ¡`) | `~/fj2-hack/fonte/glifos.py:180` |
| 180° | o `¿` e o `¡` são o `?` e o `!` girados | `~/fj2-hack/fonte/glifos.py:166-173` |
| 2.322 | ocorrências novas que os signos custaram (529 `?` + 1.793 `!`) | `~/fj2-hack/NOTAS.md:2446` |

Medidos e **não** usados na copy, mas conferidos: 266 nomes, 77 menus, 13 mensagens de
batalha, 6 páginas de final, 75 glifos latinos no lugar de 141 tiles de kana
(`FEATURES.md:18-26`); 355 B da tela de créditos (`:55`); 281 linhas extras da aspa a mais
(`:111`); 21 colunas × 3 linhas impostas na compilação (`:115`); 1.060 de 1.068 B nas
tabelas dos 26 grupos (`:126`); 30.000 quadros no teste de estresse (`:147`).

## 2. Dragon Ball 3 — `dragon-ball-3` · beta · en

| número | o que é | fonte |
|---|---|---|
| 1989, Bandai, mapper 16 | o cartucho | `~/db3-hack/README.md:3` |
| 3 linhas × 24 colunas | a caixa, sem código de continuação | `~/db3-hack/NOTAS.md:48` |
| 164 | mensagens com 45+ glifos no japonês, reescritas | `~/db3-hack/NOTAS.md:49` |
| **254** | mensagens em inglês que fecham com **zero** coluna livre (e 387 já usam as 3 linhas) | `~/db3-hack/NOTAS.md:665` |
| 66 nomes / 417 B | teto da tabela de personagens | `~/db3-hack/README.md:79` |
| 116 B / 95 B | tetos de golpes e de nomes de batalha | `~/db3-hack/README.md:80` |
| 1.305 de 1.305 | mensagens em inglês | `~/db3-hack/README.md:9` |
| 40 de 40 | mensagens de batalha e treino | `~/db3-hack/README.md:10` |
| 10 kanji · 6 bolas · 96×32 px | o que era arte e não texto | `~/patchclan-site/build/jogo-db3.mjs:41-43` · `~/db3-hack/README.md:15` |
| 128 → 256 KB | a ROM expandida | `~/db3-hack/README.md:16` |

Senhas de 1989 continuam válidas: `~/db3-hack/README.md:12`.
Guarda do construtor (aborta fora das regiões declaradas): `~/db3-hack/README.md:69-70`.

## 3. Captain Tsubasa — `captain-tsubasa` · release · en · pt

| número | o que é | fonte |
|---|---|---|
| Tecmo, 1988 | o cartucho | `~/patchclan-site/build/jogo-ct.mjs:6` |
| **5 slots** | a janela de save que o START abre no título (`MATCH nn` / `EMPTY`) | `~/ct-hack/notas/save.md:271-283` |
| 24 bytes | o estado guardado — os mesmos que a senha empacota | `~/ct-hack/notas/save.md:26` |
| soma de 9 bits | a integridade é a rotina do próprio jogo | `~/ct-hack/notas/save.md:95` |
| 97 B em 6 lugares | o código novo do save | `~/ct-hack/notas/save.md:168` |
| 14 e 18 → 28 e 36 colunas | uma fileira virou duas por linha de roteiro | `~/patchclan-site/build/jogo-ct.mjs:39` |
| 1.001 itens · 1.177 ponteiros | o texto inserido | `~/ct-hack/NOTAS.md:194` |
| 289 entradas | o **glossário** (67 personagens, 29 times, 24 golpes, 9 locais de Paris) | `~/ct-hack/NOTAS.md:161` |
| **16 letras latinas** | tudo o que existia no cartucho: `ACDEFGHIKMRSUVWY` | `~/ct-hack/NOTAS.md:20` |
| 74 tiles | a fonte inglesa nova | `~/patchclan-site/build/jogo-ct.mjs:34` |
| 225 dumps, 0 bytes | a build que só move o texto japonês, contra a original | `~/patchclan-site/build/jogo-ct.mjs:52` |
| 0 de 4.096 B | nametable depois de desligar e ligar de verdade | `~/patchclan-site/build/jogo-ct.mjs:45` |

Conferidos e não usados: 122 tiles de 127 no logo do título, 0 pixels de diferença
(`jogo-ct.mjs:48`); 13 sprites no logo da sala de aula (`:49`); a janela ocupa ~1.505 B no
banco 12 (`~/ct-hack/RETOMAR.md:103`); builds atuais EN 1.1.6 / PT 1.0.6 / ES 1.0.5
(`~/ct-hack/RETOMAR.md:35-37`).

## 4. Nekketsu Kakutou Densetsu — `nekketsu-kakutou-densetsu` · alfa · sem patch

| número | o que é | fonte |
|---|---|---|
| Technos, 1992 | o cartucho | `~/patchclan-site/build/jogos-novos.mjs:95` |
| 16 lutadores, 4 estilos | o jogo | `~/patchclan-site/build/jogos-novos.mjs:100` |
| 266 strings, 0 erros | a tradução, revisada linha a linha | `~/nekketsu-hack/RETOMAR.md:13` |
| 81 tiles novos · 175 intactos | a fonte latina | `~/nekketsu-hack/RETOMAR.md:14` |
| 128 → 256 KB | expansão **provada** | `~/nekketsu-hack/RETOMAR.md:11` |
| **266 strings em 6.120 B, sem compressão** | o motor de texto | `~/nekketsu-hack/notas/motor_texto.md:194` · `RETOMAR.md:10` |
| build idêntica à original | a guarda por igualdade da inserção | `~/patchclan-site/build/jogos-novos.mjs:131` |
| «The gates of Nekketsu High.» | o inglês confirmado na ROM rodando | `~/nekketsu-hack/RETOMAR.md:16` |

## 5. Gaia Saver — `gaia-saver` · alfa · sem patch

| número | o que é | fonte |
|---|---|---|
| 512 glifos 16×16 · ponteiros de 24 bits · 2 MB | a classe do problema | `~/patchclan-site/build/jogos-novos.mjs:164` |
| **~21 colunas** | a largura do modo padrão do jogo | `~/gaia-hack/notas/analise.md:173` |
| 8 px/caractere → ~32 colunas | a fonte a meia largura | `~/gaia-hack/notas/analise.md:173` |
| **29 colunas** | o que a caixa aceita — a 30 embaralha, provado na tela | `~/gaia-hack/notas/analise.md:421,425` |
| 29 × 3 | o gate imposto no build | `~/gaia-hack/README.md:26` |
| 1.884 mensagens / 94,1 KB | o roteiro extraído | `~/gaia-hack/README.md:15` |
| 1.875 / 1.875 | round-trip byte-idêntico do extrator | `~/gaia-hack/README.md:20` |
| 1.467 | mensagens traduzidas | `~/gaia-hack/README.md:22` |
| 420 nomes em 5.375 / 5.376 B | um byte de folga | `~/gaia-hack/README.md:23` |
| **1.525 ponteiros confiáveis** | a realocação (tabelas de registros no banco `$06`) | `~/gaia-hack/notas/analise.md:264` |
| 105 soltos | descartados como falsos positivos, um deles `LDA $218000,x` | `~/gaia-hack/notas/analise.md:265-267` |

## 6. Ultraman Club 2 — `ultraman-club-2` · alfa · en publicado

| número | o que é | fonte |
|---|---|---|
| Shinsei / Tsuburaya, 1989 | o cartucho | `~/patchclan-site/build/jogos-novos.mjs:11` |
| **146 entradas** | o quarto bloco, tabela própria em PRG `0x06F53` | `~/ultraman2-hack/notas/analise.md:227` |
| ~90 monstros | o bestiário que estava nele | `~/ultraman2-hack/notas/analise.md:229` |
| — | achado varrendo kana na ROM **montada**; os ponteiros caem na faixa do kana | `~/ultraman2-hack/notas/analise.md:224,232` |
| 4 partículas | `は` e `に`, duas vezes cada, como `LDA #$AC` no código | `~/ultraman2-hack/notas/analise.md:375,384` |
| **653 entradas · 0 divergências** | o round-trip contra o roteiro inglês (447 + 146 + 56 + 4) | `~/patchclan-site/build/jogos-novos.mjs:28,50` · `~/ultraman2-hack/README.md:6-8` |
| 22 colunas × 4 linhas | a caixa, medida por cor por coluna num print real | `~/ultraman2-hack/notas/analise.md:338` · `jogos-novos.mjs:31` |
| 128 → 256 KB, bancos 14 e 15 duplicados | a expansão, e o porquê no MMC3 | `~/patchclan-site/build/jogos-novos.mjs:47` |
| 120 tiles | a tela de título redesenhada | `~/patchclan-site/build/jogos-novos.mjs:44` |

## 7. Ultraman Club 3 — `ultraman-club-3` · fila · sem patch

| número | o que é | fonte |
|---|---|---|
| Yutaka / Tsuburaya, 1991 | o cartucho | `~/patchclan-site/build/jogos-novos.mjs:230` |
| 3 bugs, tratados antes da tradução | a ordem decidida | `~/ultraman3-hack/notas/RETOMAR.md:3` |
| **22 bytes**, em `$B0EF-$B10C` do banco 29 | o conserto da cápsula da página 8 | `~/ultraman3-hack/docs/capsula_pagina8_bug.md:5` |
| 22 códigos Game Genie | o equivalente, impresso pelo construtor | `~/ultraman3-hack/notas/RETOMAR.md:11` |
| — | o cursor nunca consulta `$4E` e chega às posições 2 e 3 | `~/ultraman3-hack/docs/capsula_pagina8_bug.md:28` |
| — | `$041E`/`$041F` guardam lixo da página anterior | `~/ultraman3-hack/docs/capsula_pagina8_bug.md:29-30` |
| **338 mensagens** | o roteiro extraído (também em `analise/estrutura.json`) | `~/ultraman3-hack/roteiro/script_jp.txt:2` |
| 30 kaiju capsuláveis | um nibble por kaiju em `$03A0-$03AE` | `~/ultraman3-hack/docs/capsula_pagina8_bug.md:20` |

## 8. Square's Tom Sawyer — `tom-sawyer` · fila · sem patch

| número | o que é | fonte |
|---|---|---|
| Square, 1989 | o cartucho | `~/patchclan-site/build/jogo-tom.mjs:6,18` |
| **1,63×** | o inglês contra o japonês, medido **neste** jogo | `~/tom-hack/RETOMAR.md:79` |
| **6,2 KB livres**, maior região 1.168 B, banco 6 com 9 B de sobra | o orçamento | `~/tom-hack/RETOMAR.md:66-67` |
| SUROM: bit 4 do reg CHR = A18 → 512 KB | o caminho | `~/tom-hack/RETOMAR.md:68` |
| cópia do banco 15 no 31 | o banco fixo do MMC1 se move junto | `~/tom-hack/RETOMAR.md:69,80` |
| 576 mensagens · 70 nomes | o roteiro (576/576 traduzidas) | `~/tom-hack/RETOMAR.md:55,81` |
| 61 tiles novos + 10 dígitos | a fonte latina sobre o kana | `~/tom-hack/RETOMAR.md:50` |
| `$09-$8E` (134 livres) | a faixa de códigos que o motor aceita | `~/tom-hack/RETOMAR.md:28,52` |
| **~2,1 KB de japonês vivo** | o que a primeira varredura do roteiro não pegou | `~/tom-hack/RETOMAR.md:97` |
| `WHITERAB` | a "tela de senha" é um código de 8 caracteres no campo de NOME | `~/tom-hack/RETOMAR.md:98` |

Conferido e não usado: 113 tiles livres para ~61 necessários (`RETOMAR.md:26`);
12 letras latinas já existentes, `A C D E N O P I R S T U` (`~/tom-hack/NOTAS.md:76`,
`notas/emulador.md:62`); o boot já vem em inglês, `CONTINUE / START / SPEED 5`
(`RETOMAR.md:31`); `[03]` com 257 ocorrências (`RETOMAR.md:62`); banco 8 de 1,00x para
1,59x (`RETOMAR.md:99`).

## 9. Hanjuku Hero — `hanjuku-hero` · fila · sem patch

| número | o que é | fonte |
|---|---|---|
| Square, 1988 | o cartucho | `~/patchclan-site/build/jogos-novos.mjs:276` |
| `0x74 + índice da fonte` | o encoding do texto | `~/hanjuku-hack/NOTAS.md:35` |
| あ=`0x9A` · ャ=`0xFD` · espaço=`0xFF` | as provas independentes que fecham | `~/hanjuku-hack/NOTAS.md:38` |
| `< 0x74` = controle | a consequência | `~/hanjuku-hack/NOTAS.md:41` |
| **duas cópias da fonte** em `0x14000` e `0x06784` | patchear uma não muda nada na tela | `~/hanjuku-hack/NOTAS.md:62-63` |
| 66 glifos compartilhados | e o katakana guardando os cantos da janela na 2ª cópia | `~/hanjuku-hack/NOTAS.md:64-65` |
| **399 strings em 6 blocos** | 206+70+11+31+40+41 | `~/hanjuku-hack/NOTAS.md:89-94` |
| 112 traduzidas | os três blocos de nomes | `~/hanjuku-hack/NOTAS.md:124` |
| **10,8 KB livres, mas 371 B no banco 2 para 4,3 KB** | o gargalo real | `~/hanjuku-hack/NOTAS.md:115-116` |
| `OSMOT` | o enchimento, que dá vetores falsos aos bancos 0-6 | `~/hanjuku-hack/NOTAS.md:102` · `:22` |

## 10. Monster Maker — `monster-maker` · fila · sem patch

| número | o que é | fonte |
|---|---|---|
| MMC1 · 256 KB PRG · CHR-RAM · bateria | o cartucho | `~/mm-hack/RETOMAR.md:3-4` |
| índice do tile = código; `b\|$80` = char+espaço; `$FF`/`$BB`/`$BC`/`$7F lo hi` | o encoding provado | `~/mm-hack/RETOMAR.md:15-16` |
| 1.386 mensagens · 33.564 B · ≈44.750 caracteres | o roteiro extraído | `~/mm-hack/RETOMAR.md:17` |
| **512 bytes livres na ROM inteira (0,2%)**, contra 85-100 KB de inglês | o número que decide o projeto | `~/mm-hack/RETOMAR.md:22` |
| 512 KB por A18 (bit 4 do CHR-bank-0, ocioso porque o CHR é RAM) | a saída | `~/mm-hack/RETOMAR.md:23-24` |
| ROM de 512 KB roda idêntica, A18 alcança o 2º bloco | a expansão **provada** em 07/09/2026 | `~/mm-hack/RETOMAR.md:28` |
| 512 tiles, só `H`, `M` e `P` de latinas | a fonte | `~/mm-hack/RETOMAR.md:13-14` |
| 118 casas de kana livres (`$0A-$7E`) | onde o alfabeto vai ser desenhado | `~/mm-hack/RETOMAR.md:29` |

---

# CONFLITOS

## A. RESOLVIDO — Famicom Jump II: 1.903 × 1.838

**As duas estão certas e medem coisas diferentes.** Medido rodando o próprio motor do build:

```
blocos únicos 61 · slots totais 1903
en/pt/es: 8 arquivos, 1838 linhas, 1838 ids únicos
```

- **1.903** = `len(msgs)` em `~/fj2-hack/fonte/construir.py:334`. O laço de `:318-331`
  percorre os 79 blocos, pula os que repetem ponteiro (sobram **61 blocos únicos**) e cria
  uma entrada **para cada posição** que a tabela de ponteiros endereça. É o total de
  **posições de mensagem** da ROM.
- **1.838** = `len(roteiro())` em `~/fj2-hack/fonte/huffman.py:45-59`. Essa função lê
  `roteiro/en.tsv` mais os `roteiro/saida/pacote*.tsv` e devolve um dicionário por id: é o
  total de **mensagens com texto traduzido**. O mesmo valor em pt e es.
- Os **65** de diferença são posições que o original traz vazias ou com ruído, gravadas só
  com o byte de FIM (`construir.py:330-331`, categorias `vazia` e `falta`).

`FEATURES.md:144` está correto ao dizer que "as 1.903 mensagens são decodificadas de volta":
a verificação percorre todas as posições. `NOTAS.md:2360,2416` também está correto ao dizer
"1.838 mensagens traduzidas". **Não é divergência, é vocabulário.**
Na copy citei 1.903, conforme o `REGRAS.md:63`, e não fiz do total o fato central.

## B. NÃO CONFIRMADO — Gaia Saver: "1.561 ponteiros vivos"

Está **publicado na copy da rodada 1** (`~/patchclan-site/copy/consenso.json`, gaia-saver) e
no `~/patchclan-site/copy/BRIEFING.md:76`. **`grep -rn 1561` em `~/gaia-hack` não devolve
nada** fora de coincidências de offset em JSON e do binário do Mesen.

O que existe medido:
- **1.525 ponteiros confiáveis** — `~/gaia-hack/notas/analise.md:264`
- **105 "soltos"**, descartados como falsos positivos — `:265`
- **1.708** candidatos em `~/gaia-hack/analise/ponteiros.json` (contagem da lista)

Nenhuma soma dá 1.561. **Usei 1.525 na copy.** Recomendo corrigir o `consenso.json` e o
briefing.

## C. NÃO CONFIRMADO — Ultraman Club 3: "83 kaiju, 11 Ultras, 26 técnicas"

Está no `BRIEFING.md:92` e no `consenso.json`. Não aparece em nenhum arquivo do
`~/ultraman3-hack`. As cinco tabelas de `analise/estrutura.json` têm `n` = **30, 98, 124,
115, 16**, e o único número de kaiju que o projeto afirma é **30 kaiju capsuláveis**
(`docs/capsula_pagina8_bug.md:20`). As **338 mensagens** estão confirmadas
(`roteiro/script_jp.txt:2` e `estrutura.json`, `len(mensagens) == 338`).
**Usei só 338 e 30.**

## D. Gaia Saver: 29 × 32 colunas — as duas são verdadeiras

- **32** = a largura física da linha com a fonte a meia largura (`notas/analise.md:173`), e é
  o que o site publica (`jogos-novos.mjs:193`).
- **29** = o que a caixa **aceita**: a mesma página renderiza perfeita com 29 e embaralha com
  30 (`notas/analise.md:421,425`), e o build impõe 29×3 (`README.md:26`).
- **21** = a largura do modo padrão do jogo, antes da meia largura (`notas/analise.md:173`).

O `BRIEFING.md:76-77` diz "de ~21 para 29 colunas", o site diz 32, e o `consenso.json` diz
"21 para 29". Nenhum está errado; estão medindo pontos diferentes da mesma cadeia.
**Escrevi os três, na ordem que os liga.**

## E. Gaia Saver: "roteiro inteiro em inglês" é falso

O `consenso.json` (rodada 1) diz "A beta v0.9 traz o roteiro inteiro em inglês: 1.884
mensagens". O `~/gaia-hack/README.md:22` diz **1.467 mensagens** traduzidas de 1.884
extraídas (`:15`), e o site declara `417 mensagens ainda por traduzir`
(`jogos-novos.mjs:204`). **A frase publicada na rodada 1 afirma mais do que o projeto mede.**
Escrevi 1.467, sem prometer o total.

## F. Gaia Saver: ano e nível

- Ano: **1994** em `~/gaia-hack/README.md:3` × **1993** em `jogos-novos.mjs:163`.
  **Não citei o ano.**
- Nível: `BRIEFING.md:72` diz "BETA (era alfa)" e "beta v0.9"; o site (`:166`) e o
  `REGRAS.md:53` dizem **alfa**, sem patch. Segui o `REGRAS.md`.

## G. Captain Tsubasa: 1.026 blocos e "289 nomes"

`BRIEFING.md:58-59` diz "1.026 blocos de texto" e "289 nomes". No projeto:
- **1.001 itens de texto** e **1.177 ponteiros** — `~/ct-hack/NOTAS.md:194`, e o site
  publica os mesmos (`jogo-ct.mjs:26-27`).
- **289** é o número de linhas do **glossário** (`glossario_en.tsv`), que inclui times,
  comandos, menus, termos e 59 frases de narração — não é uma contagem de nomes
  (`~/ct-hack/NOTAS.md:161`).

Usei 1.001, 1.177 e descrevi 289 como glossário.

## H. Captain Tsubasa: nível e idiomas

`BRIEFING.md:54` diz **beta**, "português em andamento". O site diz **release** com en e pt
publicados (`jogo-ct.mjs:9,63`), e o `REGRAS.md:52` confirma. `~/ct-hack/RETOMAR.md:8` diz
que o site está com EN v1.1 e PT v1.0 no ar enquanto as builds locais estão em EN 1.1.6 /
PT 1.0.6 / **ES 1.0.5**. **Não prometi espanhol**, que não está publicado
(`~/patchclan-site/patches/` não tem `captain-tsubasa-es.ips`).

## I. Dragon Ball 3: patch em português

`BRIEFING.md:50` e o `consenso.json` dizem "português v1.0 publicado". O projeto tem a build
PT (`~/db3-hack/README.md:29-59`), mas **`~/patchclan-site/patches/` só tem
`dragon-ball-3-en.ips`**, e o site declara `pt: null` (`jogo-db3.mjs:62`). O `REGRAS.md:51`
lista só `en`. **Não mencionei o português na copy do DB3.**

## J. Dragon Ball 3: 96 × 112 nomes

O site publica **96** no bloco `numeros` (`jogo-db3.mjs:29`: 66 + 14 + 16) e **112** no texto
do verificador (`:51`). Não achei a conciliação. **Não citei nenhum dos dois totais** — usei
os tetos por tabela, que são inequívocos (`README.md:79-80`).

## K. Ultraman Club 2 e 3: quem publicou

`BRIEFING.md:83,89` diz **Bandai** nos dois. O site diz **Shinsei** com Tsuburaya Prod. no 2
(`jogos-novos.mjs:11`) e **Yutaka** com Tsuburaya no 3 (`:230`). Segui o site, que é o
publicado e conferido.

## L. Ultraman Club 2: 447+56 × 653

`~/ultraman2-hack/README.md:6-8` (de 06/09) diz 447 mensagens + 56 entradas. O site diz
**653** (`jogos-novos.mjs:28`). Fecha: 447 + **146** (o quarto bloco, achado depois do
README) + 56 + **4** (as partículas cravadas no código) = **653**. O README é anterior à
descoberta. **Sem conflito real; o README está desatualizado.**

## M. Hanjuku Hero: "OSMOTO" × "OSMOT"

Contradição **dentro do mesmo arquivo**: `~/hanjuku-hack/NOTAS.md:22` diz que o enchimento é
`"OSMOTO"`; `:102` diz `"OSMOT" (período 5, não 6)`. A linha 102 é a mais recente e a mais
específica (traz a medição do período). **Usei OSMOT** e registro a divergência.

## N. Hanjuku Hero: "tradução ainda não começou"

`BRIEFING.md:103` diz que a tradução não começou. `~/hanjuku-hack/NOTAS.md:124` diz
**112/399 strings traduzidas**, e o site publica o mesmo (`jogos-novos.mjs:294,305`).
Segui as notas e o site.

## O. Site desatualizado — `jogo-tom.mjs`

O arquivo publicado do Tom Sawyer está **atrás do projeto**. Ele diz, em `:66`, "O roteiro
está sendo extraído. Depois dele vêm a tabela de caracteres, a fonte latina desenhada e a
reinserção", e declara `mapper: 'MMC1 (SUROM viável) · 256 KB PRG'` (`:7`). O
`~/tom-hack/RETOMAR.md:64-71` registra 576/576 mensagens traduzidas, 70 nomes, a expansão a
**512 KB** já feita, e a tela de título pronta (`:93`). **A copy que escrevi segue o
projeto**, não o site — e por isso o build precisa ser atualizado junto com o texto.

## P. Monster Maker não tem entrada de build

Não existe objeto `MONSTER` em `~/patchclan-site/build/`, e `jogos.mjs:7` exporta apenas
`[FJ2, CT, DB3, ULTRAMAN2, GAIA, NEKKETSU]`. Tudo o que escrevi para o `monster-maker` sai
de `~/mm-hack/RETOMAR.md`.

---

# AFIRMAÇÕES PUBLICADAS QUE NÃO CONSEGUI CONFIRMAR

Em nota nenhuma dos dez projetos:

1. **"1.561 ponteiros vivos"** (Gaia Saver) — `consenso.json` e `BRIEFING.md:76`. O medido é
   1.525. → seção B.
2. **"83 kaiju, 11 Ultras, 26 técnicas"** (Ultraman Club 3) — `consenso.json` e
   `BRIEFING.md:92`. → seção C.
3. **"o roteiro inteiro em inglês"** (Gaia Saver) — `consenso.json`. O medido é 1.467 de
   1.884. → seção E.
4. **"1.026 blocos de texto"** e **"289 nomes"** (Captain Tsubasa) — `BRIEFING.md:58-59`. O
   medido é 1.001 itens, 1.177 ponteiros, e 289 é o tamanho do glossário. → seção G.
5. **"112 nomes"** (Dragon Ball 3) — `jogo-db3.mjs:51`, contra os 96 do bloco `numeros` do
   mesmo arquivo. → seção J.
6. **"1.838 mensagens" como total do jogo** (Famicom Jump II) — `consenso.json`. O número
   existe e está certo, mas é o de mensagens **com texto**, não o do jogo. → seção A.

**Confirmadas**, apesar de eu ter desconfiado: as **12 letras latinas** do Tom Sawyer
(`jogo-tom.mjs:33`) estão em `~/tom-hack/NOTAS.md:76` e `notas/emulador.md:62`; e os
**9 glifos** do espanhol do FJ2 estão em `fonte/glifos.py:180` — atenção, porque
`~/fj2-hack/NOTAS.md:1509` também fala em "9 glifos distintos", mas esses são os do
subtítulo da tela de título (`T H E S R O N G 7`), coincidência de número.

---

# VALIDAÇÃO

`jrpg_B.json` passa nos dois validadores:

- o **compartilhado da rodada** — `python3 ~/patchclan-site/copy/rodada2/valida.py jrpg_B.json`
  → `OK, total de erros: 0` (ordem dos 10 slugs, teto de 150 caracteres na `linha`, 2-3
  parágrafos no `resumo`, sem exclamação, sem hype, sem falar do que falta, só as tags
  `<b> <i> <code> <em> <strong>`);
- o **meu, adicional**, que exige que **cada número citado no texto apareça no campo
  `fontes`** com `arquivo:linha`, normalizando 1.903/1,903 e 6,25/6.25 entre os dois idiomas.
  Ele reprovou quatro vezes durante a escrita: `94` sem fonte (era 94,1), o `1` de `MMC1`, o
  `3` de `MMC3` e a palavra `faltam` numa frase do Famicom Jump II. Os quatro foram
  corrigidos, não dispensados.

Os seis projetos sem patch — nekketsu, gaia-saver, ultraman-club-3, tom-sawyer, hanjuku-hero,
monster-maker — terminam com "não há patch para instalar" / "não há patch para baixar", sem
diagnóstico junto, conforme o `REGRAS.md:37-38`.

---
---

# RODADA 3 — os três projetos novos (08/09/2026)

Entrega em `~/patchclan-site/copy/rodada3/jrpg_B.json`. Vale a **regra extra da rodada**:
nenhum número de PROGRESSO, porque as traduções fecham em 09/09 e o número estaria errado
no dia seguinte. O teste aplicado a cada número: *se for diferente amanhã de manhã, não entra.*

Passa no `valida.py` da rodada (com `ORDEM` trocada para os três slugs) e no meu validador,
que além do `arquivo:linha` para cada número ganhou dois detectores novos nesta rodada:
um de **expressões de progresso** (`capítulo 1`, `piloto`, `já traduzid`, `v0.1`, `cobertura`)
e um de **percentual de progresso** — regex que só barra `%` quando ele aparece a menos de
60 caracteres de `traduzid|translat|feit|pront|complet|cobert|cover|done`. Sem essa distinção
o validador barrava `0,8% livres` e `19% a mais`, que são fatos do cartucho.

## 11. Guevara — `guevara` · release · en · es · pt

| número | o que é | fonte |
|---|---|---|
| mapper 1 (MMC1) · PRG 128 KB · CHR 128 KB · SNK 1988 | o cartucho; no Ocidente saiu como *Guerrilla War* | `~/guevara-hack/NOTAS.md:3-4` |
| GUEVARA / CASTRO | os dois jogadores; nomes, não se traduzem | `~/guevara-hack/NOTAS.md:170` |
| **quadro 6.600** | onde a tela de título finalmente aparece, depois do demo inteiro | `~/guevara-hack/NOTAS.md:16-23` |
| 300 a 5.200 | a varredura que **não** pega a tela de título uma vez | `~/guevara-hack/NOTAS.md:25-26` |
| ~430 · ~700 | retrato do Che (2 linhas de dedicatória) e prólogo (9 linhas) | `~/guevara-hack/NOTAS.md:16-23,155-156` |
| **duas telas** | todo o japonês do cartucho | `~/guevara-hack/NOTAS.md:149` |
| **128 posições** | a fonte japonesa é sob medida: silabários parciais, os dígitos `1 9 5 6` e só os kanji dessas telas | `~/guevara-hack/NOTAS.md:151-153` |
| 2 glifos por tile | a fonte empacota dois glifos no mesmo tile, um por plano de bits | `~/guevara-hack/NOTAS.md:62-71` |
| 12 glifos de 16×16 × 9 linhas | a área de texto do prólogo (colunas 4-27) | `~/guevara-hack/NOTAS.md:76-77` |
| 20-21 linhas × 8 linhas | o que a largura cheia pediria, contra o que a meia largura em 28 colunas entrega | `~/guevara-hack/NOTAS.md:84-92` |
| **ES 214 · PT 209** | e o espanhol ainda gasta uma linha a mais, pelas quebras | `~/guevara-hack/NOTAS.md:99-105` |
| 0 pixel | diferença contra a ROM original no logo da SNK e na cena noturna, nos três idiomas | `~/guevara-hack/NOTAS.md:1125-1126` |
| v1.0 × 3 | EN, ES e PT, com sha1, lidos letra por letra no emulador | `~/guevara-hack/NOTAS.md:6-7,1113-1121` |

## 12. The Misadventures of Yaji & Kita — `gozonji` · beta

*(nome novo do site; original `Gozonji: Yaji Kita Chin Douchuu`, ご存知 弥次喜多珍道中)*

| número | o que é | fonte |
|---|---|---|
| HAL Laboratory / HYPERWARE, 1991 | o jogo, tirado do *Tōkaidōchū Hizakurige* | `~/gozonji-hack/RETOMAR.md:5` |
| MMC1 · PRG 256 KB · CHR-ROM 128 KB | o cartucho como veio | `~/gozonji-hack/RETOMAR.md:4` |
| **53 estações do Tōkaidō** | a estrutura do jogo, que não tem capítulos | `~/gozonji-hack/RETOMAR.md:32-33` |
| 8 telas, 3 com retrato | o prólogo; os rostos são tiles de fundo da página 31 + sprites da 30 | `~/gozonji-hack/RETOMAR.md:150-155` |
| glifos `0x03`-`0x62`, página CHR 31 | a única fonte da ROM; 32 páginas varridas | `~/gozonji-hack/RETOMAR.md:11-12` · `ANALISE.md:11-13` |
| **83 glifos latinos** | A-Z, a-z, dígitos e pontuação sobre os slots de kana | `~/gozonji-hack/RETOMAR.md:24-26` |
| 4 linhas livres | ゛/゜ moram na linha de tiles de cima, que o inglês não usa | `~/gozonji-hack/RETOMAR.md:18-19` |
| **16 caracteres × 4 linhas** | a caixa, medida na nametable (colunas 8-23) | `~/gozonji-hack/RETOMAR.md:20-21` |
| **3.581 falas · 93.640 B** | o roteiro do jogo | `~/gozonji-hack/RELATORIO.md:70` |
| todos os 16 bancos | onde o texto está distribuído | `~/gozonji-hack/ANALISE.md:46` |
| **dicionário de 128 entradas** | ponteiros em `$B97F` do banco 6, entradas em `$BA7F` | `~/gozonji-hack/RETOMAR.md:13-15` |
| **2,33× → 1,55×** | o que o dicionário inglês compra | `~/gozonji-hack/RETOMAR.md:47-48` |
| **2.211 B livres (0,8%)** contra ~145 KB | por que o mapper foi trocado | `~/gozonji-hack/RETOMAR.md:53-54` |
| MMC3 · 512 KB | a ROM depois da conversão | `~/gozonji-hack/RETOMAR.md:65` |
| **5 endereços · 19/19 quadros** | por que a conversão foi barata, e a paridade que a provou | `~/gozonji-hack/RETOMAR.md:81-84` · `notas/mmc3.md:12,64` |

## 13. Magic Knight Rayearth 2 — `magic-knight-rayearth-2` · beta

| número | o que é | fonte |
|---|---|---|
| Game Gear · SEGA 1995 · 512 KB | o cartucho; header `TMR SEGA` em `$7FF0`, região `0x50` | `~/mkr2-hack/NOTAS.md:1,11` |
| sem um único kanji | 100% kana, jogo shoujo escrito para criança ler | `~/mkr2-hack/NOTAS.md:67` |
| ASCII + `0x55` | a tabela de caracteres, com A-Z em `96`-`AF` | `~/mkr2-hack/NOTAS.md:62` |
| **12 caracteres** | a caixa de diálogo, colunas de tile 6-17 (narração: 14) | `~/mkr2-hack/NOTAS.md:161-162` |
| **`MG KNIGHTS` × `MAGIC KNIGHTS`** | 14 caracteres numa caixa de 12 — a consequência em uma linha | `~/mkr2-hack/NOTAS.md:165-166` · `:474` |
| **26.584 colunas × 31.524 bytes** | o script japonês: 19% a mais em byte do que em tela | `~/mkr2-hack/NOTAS.md:352-355` |
| 3 bytes, 1 coluna | o que um kana com dakuten custa — a origem do engano | `~/mkr2-hack/NOTAS.md:352` |
| **59 glifos 5×7 · 6 px contra 8** | a fonte de largura variável | `~/mkr2-hack/NOTAS.md:454` |
| **96 px por linha** | o orçamento com a VWF: pixel, não caractere | `~/mkr2-hack/RETOMAR.md:26` |
| plano 0 = máscara, 8 B/glifo | por que a VWF foi barata: a fonte não é 4bpp de verdade | `~/mkr2-hack/NOTAS.md:449-452` |
| **411 bytes** de Z80, banco 12 | a rotina, num montador Z80 escrito para este projeto | `~/mkr2-hack/NOTAS.md:455-457` |
| banco 12 fixo no slot 2 | a piscina compartilhada de onde a fonte é lida a cada glifo | `~/mkr2-hack/RETOMAR.md:27-28` · `NOTAS.md:294-295` |

---

# CONFLITOS DA RODADA 3

## Q. Gozonji: três tamanhos de roteiro no mesmo projeto — **usei o do meio**

| valor | o que é | onde |
|---|---|---|
| **5.359 blocos · 134 KB · ~252 mil caracteres** | a **varredura bruta**, que a própria nota declara conter **falsos positivos** e a duplicata banco 4 / banco 12 | `RETOMAR.md:22-23` · `notas/motor.md:54` |
| **3.581 falas · 93.640 B** | o **roteiro do jogo**, depois de limpo | `RELATORIO.md:70` · `notas/expansao.md:110` |
| 3.581 falas · **145 mil caracteres** | o mesmo conjunto, contado em caracteres expandidos | `RETOMAR.md:109` |

O coordenador pediu para confirmar os 5.359 e tratá-los como tamanho do cartucho. **A
confirmação é que não dá:** o número é da varredura crua e o próprio arquivo que o publica
avisa que ele carrega falso positivo. **Escrevi 3.581 falas e 93.640 bytes**, que é o que o
`RELATORIO.md` chama de "roteiro do jogo" e o que o orçamento de expansão usa. E **não fiz a
comparação com o resto do catálogo** ("o maior roteiro"): em falas ele é de fato o maior
(3.581 contra 2.154 do MKR2 e 1.903 do FJ2), mas **em bytes empata com o Gaia Saver**
(93,6 KB contra 94,1 KB), e nenhuma nota afirma a comparação — não é minha para fazer.

## R. Gozonji: os bancos 4 e 12 **não** são duplicata — a boa história é o desmentido

A `ANALISE.md:49` diz **"Banco 4 == banco 12: 100% idênticos → 16 KB livres de graça"**. O
`RETOMAR.md:56` desmente: **"diferem em 1 byte (`$BFF1`: 04 vs 0C)"**, e o `:88` acrescenta que
eles guardam **312 falas únicas** e ficaram intactos, 0 bytes alterados. Um byte de diferença
transformou 16 KB de espaço livre em dois bancos que não se podem tocar. **Não usei nem a
duplicata nem o desmentido na copy** — precisaria de dois parágrafos para render, e a ficha
já tem a troca de mapper. Fica registrado como o melhor exemplo do lote de *frieza medida não
é prova*, ao lado do banco 7, que "parecia ter 13,5 KB mortos e tem 7 `JSR` apontando para
dentro" (`RETOMAR.md:98-99`).

## S. Gozonji: a `ANALISE.md` inteira está superada pela `RETOMAR.md`

Ela é de 07/09 e foi medida antes do motor cair. Divergem:

| assunto | `ANALISE.md` (07/09) | `RETOMAR.md` (08/09) |
|---|---|---|
| blocos | ~2.900 (`:43`) | 5.359 brutos / 3.581 limpos |
| texto | ~105 KB (`:43`) | 134 KB brutos / 93.640 B limpos |
| caixa | **~19-20 colunas, 1 a 2 linhas** (`:45`) | **16 caracteres × 4 linhas**, medido na nametable (`:20-21`) |
| dicionário | PENDENTE, ~110 códigos (`:34`) | resolvido, **128 entradas** (`:13-15`) |
| bancos 4/12 | duplicata idêntica (`:49`) | diferem em 1 byte (`:56`) |

**Usei só a `RETOMAR.md`** para todos esses. A `ANALISE.md` entra na copy apenas para dois
fatos que ela mediu e ninguém contestou: a varredura das 32 páginas de CHR (`:11-13`) e a
distribuição do texto pelos 16 bancos (`:46`).

## T. MKR2: dois tamanhos para o script japonês

`NOTAS.md:113` dá **32.411 bytes (31,7 KB)** para "o script japonês inteiro"; `:354` dá
**31.524 bytes** para "bytes no script". São recortes diferentes (o segundo é a soma dos vãos
que o orçamento considera). **Citei 31.524**, porque é o que forma o par com as 26.584
colunas, que é o fato que interessa.

## U. Guevara: o que a versão ocidental mudou **não está nas notas**

O briefing da rodada diz que em *Guerrilla War* "o Che virou um comandante sem nome". A
`~/guevara-hack/NOTAS.md` só registra que **"no Ocidente saiu como *Guerrilla War*"** (`:4`).
A única menção a "comandante" (`:963`) é sobre outra coisa: a escolha de traduzir 少佐 como
comandante, a patente que Castro deu ao Che em 1957.

**Não afirmei o que a versão ocidental cortou.** Escrevi o que o cartucho japonês *tem* — o
retrato, a dedicatória, o prólogo, e os jogadores chamados GUEVARA e CASTRO — e deixei o
leitor concluir. É mais forte e é sustentável.

---

# NÚMEROS QUE BARREI POR SEREM DE PROGRESSO

Ficam disponíveis assim que as traduções fecharem. Listados para o coordenador saber o que
volta ao alcance.

### Gozonji
- `capítulo 1 a 99,7%`, `capítulo 2 a 98,8%`, `capítulos 3-9 a 0%` — `RELATORIO.md:72-74`
- `725 falas, 17.279 B em inglês na ROM — 18,5%` — `RELATORIO.md:71`
- `714 falas, 18,1% do roteiro` — `RETOMAR.md:86`
- `380 das 384 falas do banco 1` e `8,7% do roteiro` — `RETOMAR.md:31,35`
- `203 KB livres` / `199 KB livres` (dois valores, duas builds) — `RETOMAR.md:86,127`
- `ALPHA V0.1 BUILD 1` na tela de créditos — `RETOMAR.md:87`
- `~2.700 falas` restantes nos bancos 3, 5, 9, 10, 11 — `RETOMAR.md:104`

**O que fica quando fechar:** o par `3.581 falas / 93.640 B` deixa de ser só tamanho do
cartucho e passa a poder ser escrito como cobertura. E `212 strings de menu` (`RETOMAR.md:125`)
vira citável como entrega.

### Magic Knight Rayearth 2
- `97% com a minha tradução`, `2.522 vãos`, `84 (3%) de recuo` — `RETOMAR.md:5` · `NOTAS.md:465-470`
- `1.769 escritos no lugar`, `711 realocados por salto`, `422 encurtados` — `NOTAS.md:466-472`
- `truncados: 0` — `NOTAS.md:470`. **Barrei este com hesitação:** é resultado de qualidade,
  não de andamento, mas é propriedade da build de hoje, e a build muda amanhã. Quando fechar,
  é o melhor número da ficha — melhor que qualquer contagem.
- `2.154 textos únicos` no roteiro — `RETOMAR.md:8`. Este é quase um fato do cartucho; barrei
  porque é a contagem do *arquivo de tradução*, não do script da ROM.
- `627 blocos` do patch anterior e o `fator 0,95×` medido sobre eles — `NOTAS.md:101-107`
- `1.554 vãos onde o inglês cabe no lugar` — `NOTAS.md:311`
- `978 vãos (38%) recuando` antes da VWF — `NOTAS.md:471`. Bom contraste com o depois; volta
  a ficar disponível como par quando a versão final estabilizar.

### Guevara
Nenhum. O projeto está fechado nos três idiomas, e tudo o que a ficha usa é medida de
cartucho ou verificação de release.

---
---

# RODADA 4 — os quatro que fecham o catálogo (09/09/2026)

Entrega em `~/patchclan-site/copy/rodada4/jrpg_B.json`. Vale, com força ainda maior que na
rodada 3, a regra do **nenhum número de progresso**: o `pocket-monsters-stadium` **começou
hoje**. O teste aplicado a cada número continua sendo *se for diferente amanhã de manhã, não
entra* — e a distinção fina é a que o coordenador cravou: **fora** o que mede quanto do
trabalho já foi feito, **dentro** o que mede o cartucho ou o motor.

Estes quatro mudam a escala do catálogo, e o número que mostra isso está em cada ficha:
1 MB e 68000 no Burai · 262 KB e mapper 2 no Maniac · **16 MB com 8,8 MB que viram 19,5** no
PMS64 · **32 MB cujo orçamento real é um campo de 6 caracteres** no Robopon.

## 14. Ninja Burai Densetsu — `ninja-burai-densetsu` · Mega Drive · 68000

| número | o que é | fonte |
|---|---|---|
| Sega, 1991.SEP · `GM G-4524-00` · região J | o cabeçalho do cartucho | `~/burai-hack/RETOMAR.md:8` (conferido nos offsets `0x100` e `0x180` da ROM) |
| **1.048.576 bytes** | a ROM, 1 MB cravado | `~/burai-hack/RETOMAR.md:6` (conferido: `len()` do `original/burai-jp.md`; SHA1 bate) |
| **644 KB** em `028000-0C9000` | assets comprimidos | `~/burai-hack/RETOMAR.md:25` |
| Huffman de 256 entradas + RLE de nibbles · LZ sobre índices de tile | os dois formatos, ambos reimplementados | `~/burai-hack/RETOMAR.md:34-46,48-66` |
| **zero kana codificado na ROM inteira** | o achado central: o roteiro não existe como texto | `~/burai-hack/RETOMAR.md:95-96` |
| **413 tiles, 413 distintos, zero repetidos** | o bloco de glifos de uma cena | `~/burai-hack/RETOMAR.md:100-101` |
| **1.611 ponteiros → 103% de cobertura** | o número que se desmente sozinho | `~/burai-hack/RETOMAR.md:151-153` |
| **31 tiles × 4** | a caixa de fala (`$C200`=`0x1E`, `$C202`=`0x03`) | `~/burai-hack/RETOMAR.md:183,185` |
| **15 caracteres por linha, 2 linhas** | com o caractere japonês de 16×16 (2×2 tiles) | `~/burai-hack/RETOMAR.md:189-190` |
| **31 caracteres por linha** | a mesma caixa lida com a fonte base de 8×8 | `~/burai-hack/RETOMAR.md:220-222` |
| **129 glifos de 8×8**, tile `0x380`, A-Z e nenhuma minúscula | a fonte residente | `~/burai-hack/RETOMAR.md:76-77,85,91` (conferido em `fonte/fonte_base_indices.png`) |
| 10 capítulos · 9 são 郡 reais de Mutsu e Dewa | a estrutura e o mapa | `~/burai-hack/RETOMAR.md:199-215` |
| **101 páginas** · os dez nomes letra por letra | o guia oficial validando a extração | `~/burai-hack/roteiro/glossario.md:8-13` |
| 450 anos · navio nanban · John · Kagetō · 3 companheiros · 邪鬼 | o enredo oficial, p. 7 | `~/burai-hack/roteiro/glossario.md:17-28` |
| Masamune · Muramasa · Tanegashima (1543) · os três 神器 | os nomes que não se traduzem | `~/burai-hack/roteiro/glossario.md:155-166` |
| 5 marcas de 擬古文 num parágrafo · níveis em 段 | o registro da narração | `~/burai-hack/roteiro/glossario.md:187-204,172-181` |

**O melhor número novo:** `1.611 ponteiros cobrindo 103% da região`. Uma medição que se
refuta sozinha vale mais que uma que acerta, porque ensina o método — e é o par exato do
`5.359 blocos` do Gozonji (seção Q) e do `banco 4 == banco 12` (seção R).

Medidos e **não** usados: 52 lacunas com ~33 KB de tilemaps entre blocos comprimidos
(`:29-30`); 586 blocos comprimidos e 586 ponteiros de gráficos em `0x190C0` (`:114,163`);
`$6224` é código morto, sem uma chamada na ROM (`:45`); ponto de entrada `$286A`, SP inicial
`$FFFFFE00` (`:9`); o par que produz a tela de texto — bloco `0x484D8` → tile `0x2C3`,
tabela `0x1BEA4`, blitter `$121D6` (`:179-183`); as 11 unidades nomeadas no guia (`glossario.md:52-64`).

## 15. Maniac Mansion (Japão) — `maniac-mansion` · Famicom · mapper 2

| número | o que é | fonte |
|---|---|---|
| **262.160 B** · NES 2.0 · **mapper 2 submapper 2 (UOROM)** · PRG 256 KB em 16 bancos · CHR-RAM 8 KB | o cartucho | `~/maniac-hack/NOTAS.md:3-4` |
| **A-T e nada de U a Z** | a segunda fonte, latina parcial, em `0x1dd40` | `~/maniac-hack/NOTAS.md:13` (**conferido tile a tile na ROM**: A…T, depois pontuação) |
| 46 gojūon + pequenos kana + marcas + dígitos + moldura | a fonte de diálogo, `0x34010`, **sem uma letra latina** | `~/maniac-hack/NOTAS.md:8-13` |
| dakuten `0x2F` · handakuten `0x30` | são **caracteres próprios**, não combinantes | `~/maniac-hack/NOTAS.md:9` |
| **3 linhas × 17 colunas = 51** | a caixa, imposta em código (`LDX #3` em `0x30026`, `CMP #$11` em `0x30086`) | `~/maniac-hack/NOTAS.md:16-18` |
| **807 mensagens · 15.073 B** | os quatro blocos de texto | `~/maniac-hack/NOTAS.md:21-27` |
| **1.367 de 12.832 caracteres (10,7%) são só marca de sonoridade** | o pedágio que o japonês paga na caixa de 51 | medido em `~/maniac-hack/roteiro/jp.json` — ver CONFLITOS V |
| 12 verbos em **3 fileiras de 13 células**, tilemap fixo | `0x34341` e `0x3E5F1`, não tabela de strings | `~/maniac-hack/NOTAS.md:29-30` (conferido: os verbos aparecem crus no tilemap de `0x3E5F1`) |
| **hiragana puro**, sem kanji e sem katakana | o roteiro inteiro | `~/maniac-hack/analise/tbl.py:1-4` + decodificação sem código desconhecido |
| **1.578 B livres na ROM inteira**, nenhum banco com folga no fim | o orçamento | `~/maniac-hack/NOTAS.md:36` |
| **1,424×** em amostra de 27 mensagens → **≈21,5 KB** | o inglês contra o japonês | `~/maniac-hack/NOTAS.md:37` |
| **256 → 512 KB**; banco 31 = cópia do 15; bancos 16-30 livres (**240 KB**) | a expansão, e por que o fixo é o último no mapper 2 | `~/maniac-hack/NOTAS.md:42-43` |
| **94 B de folga no banco 15** (`$C000` 16 · `$E660` 28 · `$F8C0` 32 · `$FFAE` 18) para uma rotina de **~15 B** | o far-read | `~/maniac-hack/NOTAS.md:49-52` |

**O melhor número novo:** `1.367 de 12.832 caracteres são só dakuten`. Ele traduz medição em
consequência numa frase: numa caixa de 51 células, uma em cada dez do japonês é acento — o
inglês recebe esse espaço de volta antes de escrever a primeira palavra. É medição minha,
não estava em nota nenhuma.

Medidos e **não** usados: os 13 *call sites* literais de `JSR $FF41` e a tabela de bancos em
`$FFE0` (`:45-47`); mapa da expansão, bancos 16/17/18 (`:57`); a ressalva de hardware
(submapper 2 sem *bus conflict*; repro física de 512 KB pediria placa mapper 30) (`:60-62`);
as tabelas de ponteiro de 55 e 58 entradas (`:32`); `0x00` dentro da linha também é espaço,
com 321 ocorrências no roteiro (`:12`).

## 16. Pocket Monsters Stadium — `pocket-monsters-stadium` · Nintendo 64

| número | o que é | fonte |
|---|---|---|
| 1998 · **42 Pokémon jogáveis** · nunca saiu do Japão | o jogo | `~/pms64-hack/RETOMAR.md:3` |
| **16 MB** · `POKEMON STADIUM` · país `J` · entry `0x80100400` | o cartucho | `~/pms64-hack/RETOMAR.md:10,12-13` (conferido: `len(base.z64)` = 16.777.216) |
| **Yay0**, e só ele — nem MIO0, nem Yaz0, nem gzip | a compressão | `~/pms64-hack/RETOMAR.md:19-21` |
| **790 blocos · 8.803.425 B → 19.528.124 B · 2,22×** | **mais do que o cartucho inteiro comporta** | `~/pms64-hack/work/yay0_blocos.json` (somado; bate com o `RETOMAR.md:19`) |
| **215 blocos** `FRAGMENT` · relocação absoluta na base `0x8FF00000` | o container de assets | `~/pms64-hack/RETOMAR.md:23-25` (conferido: 215 com o cabeçalho exato) |
| `POKEBANK.WBK` (gritos) · `JIKKYOU.WBK` (narração) | os bancos de áudio nomeados | `~/pms64-hack/RETOMAR.md:27-29` |
| **`0x66901` · 23 B por entrada · ordem da Pokédex** | a tabela de base stats | `~/pms64-hack/RETOMAR.md:31-34` |
| **45/49/49/45/65** · Charmander **+3** · Mewtwo **+149** | as três âncoras independentes | `~/pms64-hack/RETOMAR.md:31-34` (**conferido lendo a ROM**, os três batem) |
| **15.593** "caracteres" Shift-JIS | o falso positivo que escondia o texto | `~/pms64-hack/RETOMAR.md:42-43` |
| EUC-JP · kana `0xA4xx`/`0xA5xx` · kanji `0xB0A1`+ · em claro, NUL, alinhado a 4 | o encoding | `~/pms64-hack/RETOMAR.md:76-77` |
| **151 espécies** com nome e categoria | o banco principal | `~/pms64-hack/RETOMAR.md:88` |
| **144 dos 151 nomes cabem sem reapontar**; os 7 que não (RATICATE 9/8 … JIGGLYPUFF 11/8) | o orçamento, que aqui joga a favor | `~/pms64-hack/RETOMAR.md:100-112` |
| **CIC-6103**, semente `0xA3886759`, combinador de **soma** | o CRC deste cartucho | `~/pms64-hack/RETOMAR.md:179-181` |
| o IPL3 **subtrai `0x100000`**: cabeçalho `0x80100400`, execução `0x80000400` | a armadilha do console | `~/pms64-hack/RETOMAR.md:236-239` |
| `@POKEMON RED GREEN BLUE YELLOW` em `0x7C2CF` · `EJECTED GB CARTRIDGE` em `0x7C4C8` | o Transfer Pak lendo o cartucho de Game Boy | `~/pms64-hack/RETOMAR.md:44-46` (conferido; ver CONFLITOS X) |

**O melhor número novo:** `8,8 MB que devolvem 19,5 MB`. É o número da escala: o dado
comprimido deste cartucho, descomprimido, **não caberia no cartucho**. Nenhuma ficha do
catálogo tinha como dizer isso — nos projetos de 8 bits o orçamento inteiro era menor que o
excedente daqui.

Medidos e **não** usados: 22 registros de 8 B em `0x676A8`, ponteiro de RAM + cor RGBA (`:36-38`);
1.430 strings com ponteiro de 32 bits e **exatamente 2** endereçadas por `lui`/`addiu` (`:161-163`);
o decomp do pret como referência externa de formato (`:60-72`); a RDRAM do savestate em ordem
nativa, com o código do jogo em `0x5BC` = ROM `0x1000`, trecho contíguo de 389.744 B (`:133-136`);
`M64TYPE_STRING` é 4, não 1 (`:130`); o `glide64mk2` desenha framebuffer de CPU e o `rice` não (`:297-303`).

## 17. Robot Poncots 64 — `robot-poncots-64` · Nintendo 64 · Hudson Soft

| número | o que é | fonte |
|---|---|---|
| **33.554.432 B = 32 MB** · `Robopon64` · `NR7J` | o cartucho, o maior do catálogo | `~/robopon64-hack/RETOMAR.md:3-4` (conferido: `len()` e nome em `0x20`) |
| **272 entradas** de 2 B em `0x19710D0` | a tabela de charset (índice → SJIS) | `~/robopon64-hack/RETOMAR.md:12` (conferido: a entrada 272 já não é SJIS) |
| **os 95 primeiros são o ASCII inteiro**, `0x20`-`0x7E`, em ordem | índice 16 = `０`, 33 = `Ａ` (`0x8260`), 65 = `ａ` | `~/robopon64-hack/RETOMAR.md:17-18` (**conferido entrada por entrada**: 91 no fullwidth exato, 4 nas substituições clássicas do JIS) |
| `0x19712F8` · **12×12 px, 4bpp, 72 B/glifo** | o bitmap da fonte | `~/robopon64-hack/RETOMAR.md:13` |
| glifo 0 = espaço fullwidth, **72 bytes zerados**; `！` em `0x1971340` | **como o offset foi cravado** | `~/robopon64-hack/RETOMAR.md:20-21` (conferido byte a byte) |
| **não há tabela de ponteiros** — campo fixo, base + índice × registro | por que nada se realoca | `~/robopon64-hack/RETOMAR.md:27-29` |
| **2.994 strings · 16.572 caracteres · 38 KB** | o texto do cartucho | `~/robopon64-hack/RETOMAR.md:25` — ver CONFLITOS Y |
| **min 3 · mediana 6 · max 272** caracteres | a capacidade dos campos | `~/robopon64-hack/RETOMAR.md:31` (conferido em `work/strings.json`) |
| **2 bytes por letra latina, iguais a um kana, nos mesmos 12 px** | o inglês não paga coluna, só campo | `~/robopon64-hack/RETOMAR.md:32-34` |
| **913 strings sem um zero depois** | preenchem o campo com espaço fullwidth; zero ali corta a string | `~/robopon64-hack/RETOMAR.md:74-75` (conferido: `free == 0` em exatamente 913) |
| `こうげき 　%3d` → o número some da tela | a consequência, e a razão dos rótulos de 3 letras | `~/robopon64-hack/RETOMAR.md:84-98` |
| **45 de 45** por ordem da dex; o #46 `バケまる` é exclusivo do N64 | o glossário, casado por posição e não por nome | `~/robopon64-hack/RETOMAR.md:128-133` |

**O melhor número novo:** `32 MB de ROM contra uma mediana de 6 caracteres por campo`. É a
inversão que fecha o catálogo: nos cartuchos de 8 bits o inimigo era o byte da ROM; aqui a
ROM é imensa e o inimigo é o **campo**, que não se move porque não há ponteiro para mover.
Em segundo lugar, os **95 glifos ASCII** — o único projeto da casa em que o alfabeto **não
precisou ser desenhado**.

Medidos e **não** usados: vídeo/texturas HVQ2 em `0x1981660-0x1B52684`, 457 blocos (`:15`);
o `n64crc.py` reproduz `272B690F AD0A7A77` da ROM original (`:42`) e a ROM montada fecha em
`250377D1 F7BC01FE` (`:125`); o checksum CIC cobre só `0x1000-0x101000` (`:53`); o campo de
nome comporta **5 letras** e **nenhum dos 46 nomes japoneses usa 6** (`:136-137`); 26 nomes
oficiais precisaram encurtar (`:138`); a cópia compactada de `0xC7010` tem 16 nomes e nenhuma
tabela de ponteiros (`:140-142`); a varredura por densidade de kana **inventou** 7,6 MB e
depois 21 mil caracteres, ambos falso positivo (`:50-52`); o `g` minúsculo de 12 px lê como
`9` (`:56,144`).

---

# CONFLITOS DA RODADA 4

## V. Maniac Mansion: a contagem de caracteres do próprio script está inflada — **medi de novo**

`analise/dump.py:39` imprime `total chars 13795`. Esse número **conta o placeholder**: o
decodificador devolve `<00>` (quatro caracteres) para cada byte que a tabela não conhece, e o
roteiro tem **321 ocorrências** de `0x00` dentro de linha. `13.795 − 321×3 = 12.832`, que é a
contagem honesta em caracteres de tela.

Medido sobre `roteiro/jp.json`, byte a byte, sem placeholder:

```
mensagens com texto 807 · linhas 1251 · caracteres 12832 · maior linha 17
dakuten 1256 + handakuten 111 = 1367  (10,7%)
```

Três coisas fecham aqui: as **807** batem com o total do `NOTAS.md:27`; a **maior linha é
exatamente 17**, confirmando o `CMP #$11` de `0x30086` por medição independente do código; e
os **1.367** são o número que entrou na copy. Usei 12.832 e 1.367, **não** 13.795.

## W. Maniac Mansion: a base da fonte latina não está alinhada em `0x1dd40`

O `NOTAS.md:13` dá `0x1dd40` como base da segunda fonte. Renderizando tiles de 8 bytes a
partir dali, os glifos saem **cortados por três linhas** — foi o que produziu o `font_b.png`
com a fileira `BCDEFGHIJKLMNOPQ` deslocada. Os tiles casam a partir de **`0x1de42`**, e o `A`
fica em **`0x1deca`**. A conferência do alfabeto foi feita nesse alinhamento, e o resultado é
o que a nota afirma: **A a T, e nada de U a Z** — depois do `T` vêm `"`, `°`, `_`, uma
xadrez e blocos sólidos.

Como o fato que a copy usa é *quais letras existem*, e não *em que byte*, **citei
`NOTAS.md:13` e não o offset**. Fica o registro para quem for desenhar o alfabeto.

## X. PMS64: são **quatro** jogos de Game Boy no Transfer Pak, não três

`RETOMAR.md:45` escreve `@POKEMON GREEN/BLUE/YELLOW`. Lido em `0x7C2CF`, o bloco é
`@POKEMON\0RED\0GREEN\0\0\0BLUE\0\0\0\0YELLOW` — **Red também está lá**, que é o esperado
para a primeira geração japonesa. Escrevi `@POKEMON RED GREEN BLUE YELLOW`, que é o que a
ROM tem.

## Y. Robopon 64: o `strings.json` de hoje já não bate com o `RETOMAR.md`

| valor | `RETOMAR.md` | `work/strings.json` (medido agora) |
|---|---|---|
| strings | **2.994** (`:25`) | 2.995 |
| caracteres | **16.572** (`:25`) | 16.574 |
| `free == 0` | **913** (`:74`) | 913 |
| `free >= 2` | **2.075** (`:75`) | 2.076 (e 6 com `free == 1`, que a nota não menciona) |
| p75 · p90 | **11 · 21** (`:31`) | 10 · 20 |

A deriva é de uma re-extração, não de erro: uma string a mais e dois caracteres a mais movem
os percentis vizinhos. **Usei os números do `RETOMAR.md` (2.994 e 16.572)** e, dos percentis,
só os três que batem nas duas medições — **min 3, mediana 6, max 272**. Os `p75`/`p90` ficaram
de fora justamente por serem os que se moveram.

## Z. Ninja Burai: a região livre é maior que os 32 KB declarados

`RETOMAR.md:26` chama `0C9000-0D1000` de "enchimento `FF` — **32 KB livres**". A maior
corrida real de `0xFF` na ROM começa em **`0xC9203`** e tem **34.813 bytes**; somando todas as
corridas de 1 KB ou mais, a ROM tem **38.783 bytes** de `FF`. Não é conflito de fato, é
arredondamento para baixo, e **não usei nenhum dos dois na copy** — o espaço não é o assunto
desta ficha, e "run de `$FF` não é espaço livre" enquanto não se prova enchendo de `$AA`.

## AA. Ninja Burai: **"não existe patch em inglês" NÃO foi confirmado** — não usei

O `RETOMAR.md:12-14` afirma que não existe patch em inglês, que há só duas linhas de fórum no
romhacking.net de 2024, e que o projeto de 2025/26 que aparece na busca é do Burai do MSX2.

**Verifiquei, e a afirmação não se sustenta como escrita.** Existem os dois tópicos citados
(romhacking.net `topic=39701` e `topic=39598`), mais um terceiro no fórum do TransCorp
(`topic=554`) — mas existe também um **vídeo de novembro de 2024** anunciando uma tentativa de
tradução "com todos os textos editados" e **troca do save de EEPROM para SRAM**, o que é
descrição de uma build, não de uma intenção. O `romhacking.net` devolve **403** a leitura
automática, então não deu para abrir os tópicos e ver se há anexo.

**Conclusão: não afirmei nada sobre a existência ou não de patch alheio.** É a mesma decisão
da seção U (Guevara): escrevi o que o cartucho *tem*, não o que o mundo não tem. Uma
afirmação de inexistência é a mais cara de errar, e é a única que uma busca não consegue
provar.

## AB. PMS64: "nenhum patch conhecido, nem parcial" — mesma decisão

`RETOMAR.md:4`. Sem confirmação possível pelos mesmos motivos da seção AA. **Não entrou na copy.**

## AC. Maniac Mansion: o que a versão japonesa tem de diferente **não está nas notas**

O `REGRAS.md:206-208` pede para verificar nas notas o que a versão japonesa tem de diferente
antes de escrever, porque "é aí que está o ângulo". **`~/maniac-hack` não registra nenhuma
comparação com a versão ocidental** — nem censura, nem conteúdo cortado, nem data de
lançamento, nem editora japonesa. Não inventei nada disso.

O ângulo que escrevi está inteiramente medido no cartucho, e é mais forte por isso: a **fonte
latina que ficou pela metade (A-T)**, o **painel de verbos que virou desenho** em vez de
string, e o **roteiro em hiragana puro**. As três coisas dizem "este jogo veio de fora" sem
que ninguém precise afirmar o que a versão ocidental tinha.

## AD. O site diz que o Gaia Saver é "o único projeto de 16 bits da casa" — **deixou de ser**

`~/patchclan-site/build/jogos-novos.mjs:193,198,203` (pt/en/es) afirmam, na ficha publicada do
Gaia Saver: *"É o único projeto de 16 bits da casa"*. Com o **Ninja Burai Densetsu** (Mega
Drive, 68000) essa frase fica falsa em três idiomas ao mesmo tempo. **Não é assunto da minha
entrega, mas o build precisa ser corrigido junto com a publicação desta rodada.**

O `mapper:` da mesma ficha (`:182`) continua correto.

## AE. Correção no validador: `cobertura` nem sempre é progresso

O meu validador da rodada 3 barrava `%` a menos de 60 caracteres de
`traduzid|translat|feit|pront|complet|cobert|cover|done`. Nesta rodada ele reprovou
**"cobriam 103% dela"** do Ninja Burai — que é cobertura de uma **região da ROM** por
ponteiros falsos, não andamento de tradução.

Corrigido em `~/patchclan-site/copy/rodada4/valida4.py`: `cobert|cover` saiu da lista solta e
só conta como progresso quando o sujeito é a tradução
(`(tradu[çc]|translat|roteiro|script)…(cobert|cover)`). Foi **narrowing com justificativa**,
não dispensa — os outros sete termos continuam barrando `%` sozinhos.

---

# NÚMEROS QUE BARREI POR SEREM DE PROGRESSO — rodada 4

Ficam disponíveis assim que as traduções fecharem. Listados para o coordenador saber o que
volta ao alcance, e **em que dia** cada um deixa de mudar.

### Pocket Monsters Stadium — o lote maior, porque o projeto nasceu hoje
- `2.116 strings traduzidas` · `59 blocos contíguos` · `banco principal 576 strings` ·
  `só 1 bloco Yay0 tem texto (259 strings)` — `RETOMAR.md:83-86`
- `cobertura: 1.879 strings, todo o texto do jogo` — `RETOMAR.md:143`
- a tabela inteira de inserção: `576` reempacotadas · `302` de espécie+categoria · `23` de
  estados e tipos · `165` golpes · `81` itens · `1.303` de UI em 58 regiões, `669` distintas —
  `RETOMAR.md:147-152`
- `as 576 caíram de 7.184 para 5.812 bytes, sobrando 1.328 livres` — `RETOMAR.md:159-161`
- `só 17 ocorrências estouravam o slot` — `RETOMAR.md:165-166`
- `237 strings novas, 137 distintas` achadas pelo teste linguístico — `RETOMAR.md:290`
- `IPS de 32.814 bytes, 698 blocos, 24.266 bytes alterados` — `RETOMAR.md:140-141`
- `26 capturas ao longo de 2min20` da demo de atração — `RETOMAR.md:186`
- `ALPHA V0.1 BUILD 1` na tela de créditos · `1.328 B em 0x7BD3C, usados 1.186` ·
  `44 glifos, 360 B` da fonte da intro — `RETOMAR.md:212,225,227`

**O que fica quando fechar:** o par `151 espécies / 165 golpes / 81 itens` deixa de ser só
conteúdo do cartucho e passa a poder ser escrito como entrega; e `1.879 strings` vira o número
de cobertura da ficha. O **melhor** deles é `1.328 bytes livres criados pelo reempacotamento` —
espaço que **a própria tradução fabricou**, que é uma ideia que nenhuma ficha do catálogo tem
ainda.

### Robot Poncots 64
- `120 strings traduzidas` (créditos, Transfer Pak, itens, mochila, status) — `RETOMAR.md:102-103`
- `8 strings dos créditos` do ciclo provado ponta a ponta, e `0x1B3D82` lido de volta —
  `RETOMAR.md:150-151`
- `26 dos nomes oficiais precisaram encurtar` — `RETOMAR.md:138`. **Barrei com hesitação:** é
  propriedade do glossário, não do andamento, mas depende do conjunto de nomes já aplicado, que
  ainda pode mudar. Quando fechar, é bom par com o campo de 5 letras.
- `487 nomes de robô e ataques` a ancorar no glossário oficial — `RETOMAR.md:67`

### Maniac Mansion
- a existência da build de 512 KB em `build/maniac_en.nes`, os testes `p_b12`/`p_b16` e o
  `JSR $8010 por banco` da sonda (`testes/saida/*/log.txt`, `testes/sonda.lua:1-14`). Nada
  disso está escrito como número em nota, e tudo muda com a próxima build.
- o alfabeto latino completo já desenhado em `analise/latina.png` (A-Z + 0-9). É trabalho
  feito, não fato do cartucho — **fora**. Quando fechar, o par natural é
  *"o cartucho tinha A-T; o patch tem as vinte e seis"*.

### Ninja Burai Densetsu
- `115 cargas de bloco com tile base conhecido` e `77 tilemaps com base conhecida`
  (`analise/inventario.py:57-58`, `analise/inventario.json`). São contagens do inventário em
  construção — o próprio `RETOMAR.md:227-228` diz que falta enumerar. **Fora**, embora sejam
  fatos da ROM: mudam quando a varredura das outras tabelas rodar.
- As leituras propostas dos onze personagens e as traduções propostas de classes, itens e
  técnicas (`roteiro/glossario.md:52-64,77-85,128-151`), que a própria nota marca como
  **"nada aqui está aprovado ainda"** (`:3-4`).

---

# VALIDAÇÃO — rodada 4

`~/patchclan-site/copy/rodada4/jrpg_B.json` passa nos dois:

- o **compartilhado**, `~/patchclan-site/copy/rodada2/valida.py` com `ORDEM` trocada para os
  quatro slugs → **0 erros, 0 avisos** (ordem dos slugs, teto de 150 caracteres na `linha`,
  2-3 parágrafos, sem exclamação, sem hype, sem falar do que falta, só as tags permitidas);
- o **meu**, `~/patchclan-site/copy/rodada4/valida4.py` → **0 erros**. Ele exige `arquivo:linha`
  em toda fonte, barra expressão de progresso, barra percentual de progresso (com a correção da
  seção AE) e exige que **todo número do texto apareça no campo `fontes`**, normalizando
  `1.048.576`/`1,048,576`, `2,22×`/`2.22×` e hexadecimais entre os dois idiomas.

Ele reprovou **dezessete vezes** durante a escrita, e os dezessete foram corrigidos, não
dispensados: os `8`/`9`/`11` dos slots de `RATICATE` e `JIGGLYPUFF` (a fonte descrevia os sete
nomes sem trazer os números), os índices `16`/`33`/`65` e o `０` fullwidth do charset do
Robopon (medição minha que não estava em nota), o `8` de "projeto de 8 bits" (que é fato do
catálogo e ganhou fonte no `REGRAS.md`), e o falso positivo de `103%`.

Duas frases foram trocadas por erro **factual** que validador nenhum pega:

1. *"Todos os outros projetos desta casa são jogos japoneses que nunca saíram do Japão"*, no
   Maniac Mansion — **falso desde a rodada 3**: o Guevara saiu no Ocidente como *Guerrilla
   War*. Virou "os outros projetos partem todos de um jogo japonês; este parte de um jogo
   ocidental", que é a afirmação verdadeira e mantém o ângulo.
2. *"o maior cartucho do catálogo por uma ordem de grandeza"*, no Robopon — 32 MB contra os
   16 MB do PMS64 é **o dobro**, não uma ordem de grandeza. Virou "o maior do catálogo, o
   dobro do Pocket Monsters Stadium".

Os quatro terminam com "não há patch para instalar" / "there is no patch to install", conforme
o `REGRAS.md:37-38`, sem diagnóstico junto e sem menção a nível — que o dono ainda vai declarar.
