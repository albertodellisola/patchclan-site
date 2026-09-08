# MELHORIAS ACHADAS — rodada 2, agente jRPG-A (08/09/2026)

Adendo do `BRIEFING.md`. Varredura das notas dos dez projetos procurando **o que a
experiência de jogar ganhou**, não o que o idioma ganhou.

**As três marcas, e por que elas existem**

| marca | significado |
|---|---|
| **IMPLEMENTADO** | está na build/no patch. Pode entrar na copy. |
| **SÓ ESTUDADO** | avaliado, medido, orçado — e **não feito**. **Nunca entra na copy.** |
| **JÁ VINHA DE FÁBRICA** | é do jogo original de 1988-1994, não é trabalho do patch. Pode ser citado como **fato do jogo**, jamais como melhoria nossa. |

O `~/fj2-hack/MELHORIAS.md` é documento de **avaliação**: quase tudo nele é SÓ ESTUDADO.
Quem diz o que foi feito no FJ2 é o `FEATURES.md`.

---

## 1. Famicom Jump II — `famicom-jump-2`

| Melhoria | Fonte | Marca |
|---|---|---|
| **Botão B contextual.** No original, falar custava abrir o menu e escolher `はなす`; no campo o `B` não fazia nada (a rotina existia e terminava em `RTS`). Agora o B fala com quem está à frente e, sem ninguém, examina o chão. 19 B no kernel + 3 no banco 30. O comando continua no menu. | `~/fj2-hack/FEATURES.md:65-70` · `~/fj2-hack/NOTAS.md:1684` (BUILD 11) · confirmado em tela: `NOTAS.md:2294` | **IMPLEMENTADO** |
| **Bug do original consertado: a lista dos sete escolhidos.** O jogo mostrava sempre os mesmos seis nomes; quem começava como Taison ouvia o próprio nome na lista, e o Goku nunca era citado. O seletor de sete casos e as sete variantes de texto estavam na ROM de 1991 e nunca disparavam (registrador trocado). **Dois bytes.** Seis variantes que nunca haviam aparecido na tela passam a aparecer. | `~/fj2-hack/FEATURES.md:74-96` | **IMPLEMENTADO** |
| **Prólogo de cinco páginas que não existe no original**, contando o *Famicom Jump* de 1989 para quem chega direto ao segundo jogo. | `~/fj2-hack/FEATURES.md:35-38` | **IMPLEMENTADO** |
| Tela de créditos do patch antes do título (5 s, pula com A ou START) e selo no rodapé da tela de título, sem gastar byte a mais. | `~/fj2-hack/FEATURES.md:40-63` | **IMPLEMENTADO** |
| Caixa de diálogo de 22 colunas × 3 linhas imposta por código na compilação (fecha a classe do balão fantasma e da caixa estourada). | `~/fj2-hack/FEATURES.md:116` · `FEATURES.md:134` | **IMPLEMENTADO** |
| Corrida segurando B (item 1.1) | `~/fj2-hack/MELHORIAS.md:208` — classe **C**, encosta em 3 coisas não mapeadas | **SÓ ESTUDADO** |
| Coringa completo com varredura de NPC (item 2.3) | `~/fj2-hack/MELHORIAS.md:223` — travado pela lista de NPCs | **SÓ ESTUDADO** |
| `B` volta um personagem na fila em batalha (4.3) · auto-batalha (4.6) · comprar em lote (5.1) · status alterado no mapa (9.2) | `~/fj2-hack/MELHORIAS.md:240,244,253,279` | **SÓ ESTUDADO** |
| Subir o rodapé da linha 28 para a 12 (quem joga em CRT não vê o crédito) | `~/fj2-hack/NOTAS.md:2305-2306` — "Subir para a linha 12" | **SÓ ESTUDADO** |
| Velocidade de texto (**oito níveis**) · salvar no mapa inteiro com 3 slots · `A` ataca sem menu em batalha · sem passo de escolher alvo · porta/escada/pegar automáticos · **`Look` já é contextual** · copiar e apagar save · XP para quem está fora do grupo · fugir de dungeon com item | `~/fj2-hack/MELHORIAS.md:181-193` (manual oficial CLV-P-HBABJ) | **JÁ VINHA DE FÁBRICA** |

> **Metade do checklist clássico de remaster já vem feita de 1991.** É por isso que o
> botão B é o achado: era a lacuna real, não uma da lista de desejos.

---

## 2. Dragon Ball 3: Gokuden — `dragon-ball-3`

| Melhoria | Fonte | Marca |
|---|---|---|
| **O número de defesa saiu do kanji.** As seis bolas traziam 一二三四五六 e o jogo manda **comparar** esse número: o Karin exige carta com defesa igual ou maior, o Mr. Popo aceita estrelas, técnica **ou** defesa. Sem ler kanji, dois dos três treinos eram adivinhação. Repintadas com algarismo latino (`fonte/defesa.py`). | `~/db3-hack/NOTAS.md:265-281` | **IMPLEMENTADO** |
| **Os dez kanji das cartas viraram rótulos de 3 letras** numa mini-fonte 5×7 px desenhada para o caso (a fonte 8×8 não cabe nos 16 px do slot). Sentido conferido contra o manual da Bandai de 1989. | `~/db3-hack/NOTAS.md:169-177` · revisão: `NOTAS.md:236-247` | **IMPLEMENTADO** |
| **Tela de senha em grade latina, sem colisão — e as senhas anotadas na ROM japonesa continuam válidas.** | `~/db3-hack/README.md:12` · medido em `NOTAS.md:149-152` | **IMPLEMENTADO** |
| Tela de créditos antes do título, com a **versão queimada na imagem** (`ENGLISH V1.0`), não só no nome do arquivo. | `~/db3-hack/README.md:17` · `NOTAS.md:346` (IMPLEMENTADA) | **IMPLEMENTADO** |
| Subtítulo da tela de título redesenhado: 悟空伝 → **LEGEND OF GOKU**, montado com a fonte latina do próprio jogo. | `~/db3-hack/NOTAS.md:163-168` | **IMPLEMENTADO** |
| "O leitor novo, por ser síncrono, já deixou o texto mais rápido que o original." Efeito colateral declarado, **sem número medido** — o impressor continua a 1 caractere por quadro. **Não usei na copy.** | `~/db3-hack/NOTAS.md:187` × `~/db3-hack/notas/motor.md:93` | **IMPLEMENTADO (sem medição — não usar)** |
| Menu de opções com velocidade de texto e nomes alternativos | `~/db3-hack/NOTAS.md:183-188` — "Não implementado, e não é necessário para a tradução" | **SÓ ESTUDADO** |
| `SolarFlare` no menu de seleção (a tabela `golpe` usa 116 de 116 bytes) | `~/db3-hack/NOTAS.md:328-335` | **SÓ ESTUDADO** |

---

## 3. Captain Tsubasa — `captain-tsubasa`

| Melhoria | Fonte | Marca |
|---|---|---|
| **Save com bateria.** O original só guardava progresso por senha anotada no papel. Agora o SCORE MEMO grava no cartucho e o CONTINUE carrega. **Segurar B no CONTINUE abre a tela de senha assim mesmo**, e o KICK OFF começa jogo novo sem apagar o save. | `~/ct-hack/NOTAS.md:449-455` · `~/ct-hack/notas/save.md:1-11` | **IMPLEMENTADO** |
| Nada de serialização nova: o save guarda **os mesmos 24 bytes que a senha já descrevia** (`$0620-$0637`), provado por duas rotinas independentes do próprio jogo. | `~/ct-hack/notas/save.md:13-27` · `NOTAS.md:456-460` | **IMPLEMENTADO** |
| A integridade do save é conferida por **`$E13B`, a MESMA rotina que valida senha digitada**. Testes de desligar/ligar de verdade, com `.sav` real, em dois processos. | `~/ct-hack/NOTAS.md:473-485` | **IMPLEMENTADO** |
| **A caixa de texto dobrou: 14 → 28 colunas** (janelas 0-9) e **18 → 36** (janelas 10-15), por um código de controle novo (`$ED`) que põe duas fileiras por linha de roteiro — sem mexer em moldura nem em contagem de linhas. Provado no Mesen. | `~/ct-hack/NOTAS.md:190-191` · `~/ct-hack/notas/insercao.md:193-200` | **IMPLEMENTADO** |
| **Os dois logos redesenhados:** o da tela de título (CAPTAIN / TSUBASA, 122 tiles) e o "TSUBASA" montado em sprites da sala de aula. Verificados contra mockup com 0 px de diferença. | `~/ct-hack/NOTAS.md:199-216` · `notas/logo.md` | **IMPLEMENTADO** |
| Tela de créditos do patch antes do prólogo (300 quadros, pula com A ou START), com a **versão do patch queimada na imagem** desde a v1.1. | `~/ct-hack/NOTAS.md:490-500` · `NOTAS.md:242-258` | **IMPLEMENTADO** |
| **Janela de cinco slots de save**, aberta pelo START no menu do título, com slots vazios esmaecidos. **Está na build e ainda não no patch publicado** (o site tem EN v1.1 e PT v1.0). **Deixei de fora da copy de propósito:** quem baixar hoje encontra um save, não cinco. | `~/ct-hack/notas/save.md:219,271-355` · `~/ct-hack/RETOMAR.md:3-9` | **IMPLEMENTADO (não publicado — não usar)** |
| Menu de opções (§11 do `NOTAS.md`) | `~/ct-hack/NOTAS.md:488` — seção vazia; `notas/intro.md` registra `fonte/creditos.py` como rascunho fora da build | **SÓ ESTUDADO** |

---

## 4. Nekketsu Kakutou Densetsu — `nekketsu-kakutou-densetsu`

**Nenhuma melhoria de experiência implementada.** O que existe é tradução e arte.

| Melhoria | Fonte | Marca |
|---|---|---|
| Logo do título redesenhado: **NEKKETSU / FIGHTING LEGEND** | `~/nekketsu-hack/RETOMAR.md:17` | **IMPLEMENTADO** (conteúdo novo, não é QoL) |
| Fonte latina de 81 tiles novos (175 do original intactos) · ROM 128→256 KB · 266 strings revisadas linha a linha · inglês confirmado rodando | `~/nekketsu-hack/RETOMAR.md:10-16` | **IMPLEMENTADO** (é tradução, não é QoL) |
| **Menu de opções no boot** — gancho já mapeado (`PRG 0x06F88 = b03 $AF88`), 720 B livres no mesmo banco, RAM sugerida `$0180-$0187` | `~/nekketsu-hack/RETOMAR.md:32-34` — "ainda não lançado, de propósito" | **SÓ ESTUDADO** |

---

## 5. Gaia Saver — `gaia-saver`

| Melhoria | Fonte | Marca |
|---|---|---|
| **Limite de caixa vencido: de ~21 para 29 colunas.** A fonte foi refeita a **meia largura, 8 px**. O teto físico é ~32; a caixa real comporta **29** — medido na tela: com 30 a página embaralha, com 29 renderiza limpa. Gate de 29×3 imposto no build. | `~/gaia-hack/notas/analise.md:171-173` · `analise.md:421-426` · `~/gaia-hack/README.md:17,26` | **IMPLEMENTADO** |
| Por que isso importa: 98% das linhas do roteiro japonês cabem em 15 caracteres, e um glifo de 16 px numa tela de 256 px dá ~16 por linha. O inglês não vive nisso. | `~/gaia-hack/notas/analise.md:86-92` | (contexto medido) |
| **Tela de título redesenhada** em inglês, pipeline provado por round-trip (reconstrução idêntica pixel a pixel). | `~/gaia-hack/README.md:24` · `notas/analise.md:469` | **IMPLEMENTADO** |
| Wrap automático a 30 colunas que **parte a palavra ao meio** — o jogo já fazia isso; a saída foi quebrar no build, não no motor. | `~/gaia-hack/notas/analise.md:346-349,397` | **JÁ VINHA DE FÁBRICA** (o defeito, não a cura) |

---

## 6. Ultraman Club 2 — `ultraman-club-2`

**Nenhuma melhoria de jogabilidade.** O que há é arte nova e dois achados de tradução
que valem como história.

| Melhoria | Fonte | Marca |
|---|---|---|
| **Tela de título em inglês** — logo remontado em 120 tiles, dentro de um orçamento de 145 bytes de fluxo de nametable. | `~/ultraman2-hack/notas/analise.md:255-268` | **IMPLEMENTADO** |
| Tela de créditos do patch, enganchada no **vetor de RESET** (não na montagem do título, como no FJ2). | `~/ultraman2-hack/notas/analise.md:390-405` | **IMPLEMENTADO** |
| **Partículas cravadas no código.** `は` e `に` estavam escritas como byte imediato em quatro sítios do PRG e colavam kana no fim do nome do monstro na tela de batalha (`KING SAURUSに`). Viraram espaço. | `~/ultraman2-hack/notas/analise.md:373-388` | **IMPLEMENTADO** |
| A fonte do jogo **não tinha `.` `,` `'` `-`** — os quatro glifos foram desenhados. | `~/ultraman2-hack/notas/analise.md:143-149` | **IMPLEMENTADO** |
| "A luta está acelerada?" — **não.** Mesmo savestate nas duas ROMs, toda troca de tela no mesmo quadro. A impressão vinha do texto inglês ser mais curto. | `~/ultraman2-hack/notas/analise.md:359-371` | **NÃO É MELHORIA** (medido e descartado) |

---

## 7. Ultraman Club 3 — `ultraman-club-3`

| Melhoria | Fonte | Marca |
|---|---|---|
| **Bug do jogo original consertado: a cápsula da página 8.** Em batalha, no menu de cápsulas, a página 8 desenha só duas entradas mas o cursor chega às duas vagas vazias; confirmar ali lia o atributo que sobrou da página anterior e gastava a cápsula 30 (Pestar) — **travava na maioria das vezes**, e às vezes invocava um monstro corrompido com efeito aleatório. **22 bytes** no banco 29: as linhas 2 e 3 nascem recusáveis, como o jogo já faz com os kaiju 19 e 20. | `~/ultraman3-hack/docs/capsula_pagina8_bug.md:1-57` | **IMPLEMENTADO** |
| Medido em **teste A/B contra a ROM original**, com regressão; o construtor **aborta se os bytes originais não baterem** e imprime os 22 códigos Game Genie. | `~/ultraman3-hack/docs/capsula_pagina8_bug.md:59-70` · `~/ultraman3-hack/notas/RETOMAR.md:7-13` | **IMPLEMENTADO** |
| Invocador de batalha: `$045D` = encontro (0 a 79) e `$000A` = 20 dão qualquer batalha, em qualquer ponto, sem save. Ferramenta de teste — torna reproduzível o que dependia de sorte. | `~/ultraman3-hack/notas/RETOMAR.md:91-110` | **IMPLEMENTADO** (ferramenta, não vai para o jogador) |
| Bug 1 (warp do Ace Robot) — **não reproduzido**. Bug 3 (Seven voando) — não investigado. | `~/ultraman3-hack/notas/RETOMAR.md:14-16` | **SÓ ESTUDADO** |
| Patch "sem encontros" — **travou a caminhada** (congelou a máquina de estados: `$0A` é estado de campo, não contador). Build reprovada, ainda no disco como `build/REPROVADA_semencontros_v1.nes`. | `~/ultraman3-hack/notas/RETOMAR.md:55-56` | **TENTADO E REPROVADO** |

---

## 8. Square's Tom Sawyer — `tom-sawyer`

**Nenhuma melhoria de experiência implementada — e o motivo é bom:** o jogo de 1989 já
vinha com o que se ia acrescentar.

| Melhoria | Fonte | Marca |
|---|---|---|
| ROM expandida para **512 KB** pelo caminho SUROM, com a cópia do banco fixo na metade nova (sem ela o jogo perde o kernel e trava). O inglês custa **1,63×** o japonês neste jogo, e a ROM tinha 6,2 KB livres. | `~/tom-hack/RETOMAR.md:66-70,79-80` | **IMPLEMENTADO** (é tradução, não é QoL) |
| Fonte latina: **61 tiles novos** sobre as casas de kana + 10 dígitos, sem tocar em gráfico de tela. | `~/tom-hack/RETOMAR.md:26-27,50` | **IMPLEMENTADO** |
| **Menu de opções no boot com velocidade de texto** — era o item "obrigatório" da especificação, e foi cancelado ao ver a captura: o jogo já tem `CONTINUE / START / SPEED 5`, **já em inglês**. "Escrever um menu novo para reimplementar o que o jogo faz seria risco puro sem ganho." | `~/tom-hack/notas/menu_opcoes.md:43-60` | **JÁ VINHA DE FÁBRICA** |
| **Save em bateria** — o jogo salva no cartucho; não há tela de senha neste título. | `~/tom-hack/RETOMAR.md:89-90` · `~/patchclan-site/build/jogo-tom.mjs:7` | **JÁ VINHA DE FÁBRICA** |
| Nomes curtos (Huck × Huckleberry Finn) como opção | `~/tom-hack/notas/menu_opcoes.md:26` — "NÃO é prioridade" | **SÓ ESTUDADO** |

---

## 9. Hanjuku Hero — `hanjuku-hero`

**Nenhuma melhoria de experiência.** O projeto está na engenharia.

| Melhoria | Fonte | Marca |
|---|---|---|
| Fonte latina **no ar na build**, com os três blocos de nomes já em inglês; o build aborta se um byte mudar fora das regiões declaradas. | `~/hanjuku-hack/NOTAS.md:60-80,124` | **IMPLEMENTADO** (é tradução, não é QoL) |
| Armadilha do jogo já contornada: **a fonte tem duas cópias na ROM** (`0x14000` e `0x06784`), e patchear só uma não muda nada na tela — a tela de entrada de nome carrega a outra, e nela as casas de katakana guardam os cantos da janela. | `~/hanjuku-hack/NOTAS.md:62-66` | **IMPLEMENTADO** |
| **Save em bateria** (8 KB de PRG-NVRAM em `$6000-$7FFF`) | `~/hanjuku-hack/NOTAS.md:20` · `~/patchclan-site/build/jogos-novos.mjs:277` | **JÁ VINHA DE FÁBRICA** |

---

## 10. Monster Maker: 7 Tsu no Hihou — `monster-maker`

**Nenhuma melhoria de experiência.** O projeto está no reconhecimento.

| Melhoria | Fonte | Marca |
|---|---|---|
| Encoding **provado rodando** (não deduzido): índice do tile = código do caractere, bit alto = caractere + espaço, `$7F lo hi` = palavra do dicionário. 1.386 mensagens extraídas. | `~/mm-hack/RETOMAR.md:11-17` | **IMPLEMENTADO** (reconhecimento) |
| Expansão para **512 KB provada**: a ROM de 512 KB roda idêntica e o A18 alcança o segundo bloco. Necessária porque a ROM inteira tem **512 bytes** livres (0,2%) para um inglês de 85-100 KB. | `~/mm-hack/RETOMAR.md:22-28` | **IMPLEMENTADO** (prova, a troca de banco ainda é trabalho) |
| A fonte **não tem alfabeto latino** — só `H`, `M`, `P`; 118 casas de kana livres para desenhá-lo. | `~/mm-hack/RETOMAR.md:13-14,29` | (obstáculo medido) |
| **Save em bateria** e menu de boot com dois livros de save (`はじめから` / `ときのほん1・2`) | `~/mm-hack/RETOMAR.md:4,11` | **JÁ VINHA DE FÁBRICA** |

---

# Conflitos entre as fontes, para o dono decidir

| # | Conflito | Como resolvi |
|---|---|---|
| 1 | **Editora do Ultraman Club 2.** O `BRIEFING.md:83` diz **Bandai**; o site diz **Shinsei / Tsuburaya Prod., 1989**, e a própria tela de créditos do patch imprime `©1989 SHINSEI`. | Segui o site + a ROM. |
| 2 | **Editora e ano do Ultraman Club 3.** `BRIEFING.md:89` diz **Bandai**; o site diz **Yutaka / Tsuburaya Prod., 1991**. | Segui o site. |
| 3 | **Ano do Gaia Saver.** `~/gaia-hack/README.md:3` diz **1994**; `~/patchclan-site/build/jogos-novos.mjs:163` diz **1993**. | **Não citei o ano.** Precisa de árbitro. |
| 4 | **Contagem de texto do Captain Tsubasa.** `NOTAS.md:140` diz **1.064 itens** extraídos; `notas/insercao.md`/`NOTAS.md:194` diz **1.001** inseridos; `notas/qa.md:125` diz **1.026**; o `BRIEFING.md:57` e a rodada 1 usaram **1.026**. | **Não citei nenhum.** As melhorias sustentam a ficha sozinhas. |
| 5 | **Português do Dragon Ball 3.** O `~/db3-hack/README.md:27-59` documenta a build PT v1.0 pronta e nomeada; `~/patchclan-site/patches/` só tem `dragon-ball-3-en.ips`, e o `REGRAS.md:51` dá **en** como o único publicado. A copy da rodada 1 anunciava as duas. | Segui o `REGRAS.md`: **só inglês**. A rodada 1 prometia download que não existe. |
| 6 | **Espanhol do Captain Tsubasa.** O `~/ct-hack/NOTAS.md:217,309` e o `RETOMAR.md:33-37` registram a build ES v1.0.5 pronta; o site e o `REGRAS.md:52` dão **en · pt**. | Segui o `REGRAS.md`: **en e pt**. |
| 7 | **Builds do Captain Tsubasa defasadas no ar.** `RETOMAR.md:7-9`: "a tradução das três línguas está pronta e conferida, a janela de cinco slots funciona — e nada foi publicado; o patchclan continua com a EN v1.1 e a PT v1.0". | Escrevi só o que o patch publicado entrega (save com bateria, não cinco slots). |
| 8 | **Gaia Saver: quantas mensagens estão em inglês.** `README.md:15` = 1.884 extraídas, `README.md:22` = 1.467 traduzidas; o `BRIEFING.md:75` dizia 1.884 traduzidas. | Escrevi "o roteiro tem 1.884 mensagens" — que é o tamanho do roteiro, e é verdade nas duas leituras. |
| 9 | **Tom Sawyer, tamanho da ROM.** O site (`jogo-tom.mjs:7`) diz "256 KB PRG · SUROM viável"; o projeto (`RETOMAR.md:80`) diz **512 KB, expansão feita**. | Segui o projeto: a nota do site está atrasada. |
| 10 | **FJ2, total de mensagens.** 1.903 (`FEATURES.md:17`) × 1.838 (`NOTAS.md`). | Não usei o total: a ficha vive do prólogo, do botão B e dos dois bytes, como o `REGRAS.md:61-63` manda. |
