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
