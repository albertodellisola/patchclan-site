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

---
---

# RODADA 3 — os três projetos novos (08/09/2026)

Mesmo método, mesmas três marcas. Regra extra desta rodada: **nenhum número de
progresso** entrou na copy — as traduções fecham amanhã. Fato de motor medido e total
do cartucho continuam valendo, e é só disso que as três fichas vivem.

## 11. Guevara — `guevara` (release)

| Melhoria | Fonte | Marca |
|---|---|---|
| **Restituição: o Che volta a ter nome.** A ROM japonesa abre com o **retrato do Che Guevara** e a dedicatória `キューバ革命の英雄 / チェ・ゲバラに捧ぐ` — "ao herói da revolução cubana". Ela agora se lê em EN, ES e PT. No Ocidente o jogo saiu como *Guerrilla War*. | `~/guevara-hack/NOTAS.md:4,20,155` · texto: `fonte/textos.py:22-26` | **IMPLEMENTADO** |
| **O prólogo, as 9 aberturas de fase, a tela CONGRATULATION e as 5 linhas de narração do final** (sobre o Che e o Castro) traduzidas nos três idiomas. As duas últimas telas só apareceram forçando o final no emulador — não estavam no mapa. | `~/guevara-hack/NOTAS.md:859-882` | **IMPLEMENTADO** |
| **Limite de caixa vencido no prólogo.** A fonte japonesa **empacota dois glifos por tile** e a tela tem 9 linhas de texto. Em latino de largura cheia o prólogo pedia 20-21 linhas — mais da metade do texto ficaria fora. Foi desenhada uma **fonte latina de meia largura 8×16** e a caixa alargada de 24 para **28 colunas**: os três idiomas fecham em 8 linhas. | `~/guevara-hack/NOTAS.md:62-92,194` | **IMPLEMENTADO** |
| **Erro do original corrigido:** o texto japonês põe **Cuba na América do Sul**; a tradução diz **América Central**, nos três idiomas. | `~/guevara-hack/NOTAS.md:196` · `fonte/textos.py:4-5,9,12,15` | **IMPLEMENTADO** |
| Inglês macarrônico do original: **`TWO PLAYERS MODE` → `TWO PLAYER MODE`** (troca no lugar, sem mover ponteiro). | `~/guevara-hack/NOTAS.md:733` · confirmado em `NOTAS.md:1069` | **IMPLEMENTADO** |
| **`SEE YOU NEXT PLAY` → `SEE YOU NEXT TIME`** — decidido em 07/09 e listado na tabela de interface, mas o registro de 08/09 põe essa despedida no bloco do banco 7 que **não foi tocado**. **Fontes divergem; deixei fora da copy.** | `~/guevara-hack/NOTAS.md:196,732` × `NOTAS.md:1088-1092` | **CONFLITO — não usar** |
| Tela de créditos do Patch Clan com a **versão queimada na imagem**, nos três idiomas. | `~/guevara-hack/NOTAS.md:740`, `NOTAS.md:6-7`, `NOTAS.md:206-215` | **IMPLEMENTADO** |
| Verificação: cada tela fotografada e **lida letra por letra** nos três idiomas; **0 pixel de diferença** contra a ROM original no logo da SNK e na cena noturna. | `~/guevara-hack/NOTAS.md:1113-1128` | **IMPLEMENTADO** |
| **Acentos na interface** — avaliado e **DESCARTADO**: cada banco carrega só os glifos da sua tela, não há alfabeto completo em lugar nenhum, e nenhuma letra acentuada. | `~/guevara-hack/NOTAS.md:235` (decisão em `NOTAS.md:197`; a medição em `NOTAS.md:223-234`) | **SÓ ESTUDADO** |
| Dificuldade `EASY/NORMAL/HARD` traduzida e **revertida**: as três listas são entradas da mesma tabela dos ordinais do menu de depuração, não são tela de jogador. Código pronto e desligado. | `~/guevara-hack/NOTAS.md:1081-1087` | **TENTADO E REVERTIDO** |
| Splash de boot `GUERRILLA WAR` **mantido de propósito** — é o que a própria ROM japonesa mostra. | `~/guevara-hack/NOTAS.md:198` | **JÁ VINHA DE FÁBRICA** |

## 12. The Misadventures of Yaji & Kita — `gozonji` (beta)

> **O nome.** O dono decidiu chamá-lo **The Misadventures of Yaji & Kita** no site, com
> **Gozonji: Yaji Kita Chin Douchuu** impresso como subtítulo. A copy usa o nome novo e
> cita o original no primeiro parágrafo, declarando-o como **escolha desta tradução** —
> nunca como nome oficial.

| Melhoria | Fonte | Marca |
|---|---|---|
| **O dicionário do motor foi refeito em inglês.** O motor tem um **dicionário de 128 entradas**: todo código de `$80` para cima indexa uma palavra inteira, lida do banco 6. As 128 casas guardavam palavras japonesas; foram regeradas a partir do próprio corpus inglês. **Mecanismo do jogo reaproveitado, não criado** — é a resposta à pergunta sobre códigos de controle. | `~/gozonji-hack/notas/motor.md:32,35-43` · `~/gozonji-hack/RETOMAR.md:13-16,37` | **IMPLEMENTADO** |
| **Dois códigos de controle NOVOS**, no leitor de telas do prólogo: `$FC <hi> <lo> <n> <tiles>` = bloco de tiles cru, e `$FB <n> <OAM>` = sprites. Precisaram existir porque os tiles do rosto incluem `$FD` e `$FE`, que já eram os marcadores de fim de linha e de tela. | `~/gozonji-hack/RETOMAR.md:161-163` | **IMPLEMENTADO** |
| **O cartucho foi refeito: MMC1 → MMC3, 256 → 512 KB.** Viável por um fato medido: o jogo escreve em **exatamente 5 endereços de registrador** na partida inteira, e as 5 rotinas de troca de banco couberam reescritas no próprio espaço. **Prova: 19 de 19 quadros idênticos** à ROM japonesa. | `~/gozonji-hack/RELATORIO.md:25-42` · `~/gozonji-hack/RETOMAR.md:81-84` | **IMPLEMENTADO** |
| **Conteúdo novo: prólogo de 8 telas**, três com o retrato de Yaji, Kita e Oharu — o formato da cabeça em tiles da página 31, as feições em sprites da página 30, tudo do próprio jogo. | `~/gozonji-hack/RETOMAR.md:148-160` | **IMPLEMENTADO** |
| **Atrito removido no prólogo: cada tela espera o botão.** O avanço automático de 256 quadros saiu (`INC $04A5 / BNE` virou `JMP ESPERA`). | `~/gozonji-hack/RETOMAR.md:143-146` | **IMPLEMENTADO** |
| **Fonte latina de 83 glifos** gravada sobre os slots de kana, funcionando na tela — o jogo é **kana puro, sem um kanji**, e não havia alfabeto latino na ROM. | `~/gozonji-hack/RETOMAR.md:24-26` · `notas/motor.md:10-12` | **IMPLEMENTADO** |
| **Descendentes consertados:** `p g q y j` saíam espremidos dentro da altura-x, parecendo versalete. O tile tem 8 linhas e o desenho usava 7 — a linha 7 estava livre o tempo todo. Vale para o jogo inteiro. | `~/gozonji-hack/RETOMAR.md:138-141` | **IMPLEMENTADO** |
| **Tela de título redesenhada:** letreiro novo, selo `KILL AT WILL` (localização de 天下御免, "licença concedida por autoridade") e subtítulo em inglês — `THE UNRULY TOWNSMAN / SLASHES HIS WAY THROUGH / TOKAIDO'S 53 STATIONS`. | `~/gozonji-hack/graficos/conv_subtitulo.py:28` · `graficos/patch_titulo.py:79-87` · `notas/titulo.md:127-136` · `RELATORIO.md:10` | **IMPLEMENTADO** |
| **Alargar a caixa de 16 colunas** — medido como problema real (uma fala de peregrinação a Ise ocupa duas páginas), mas exige mexer no desenho da moldura e no endereço inicial de cada linha. | `~/gozonji-hack/RETOMAR.md:58-61` | **SÓ ESTUDADO** |
| As 4 fileiras de tile do dakuten ficam livres em inglês — medidas, **não aproveitadas**. | `~/gozonji-hack/notas/motor.md:48-49` | **SÓ ESTUDADO** |
| Caixa de **16 caracteres × 4 linhas**, medida na nametable (colunas 8-23) | `~/gozonji-hack/notas/motor.md:45-49` | **JÁ VINHA DE FÁBRICA** (é a restrição, não a melhoria) |

## 13. Magic Knight Rayearth 2 — `magic-knight-rayearth-2` (beta)

| Melhoria | Fonte | Marca |
|---|---|---|
| **Fonte de largura variável — a única do catálogo inteiro.** Fonte latina **5×7** desenhada (59 glifos), avanço médio de **6 px contra 8**, e uma **rotina de 411 bytes** em `$BD52` (banco 12) que compõe cada glifo na posição de pixel, com tabela de larguras em `$BCA2`. Montador Z80 escrito para isto. | `~/mkr2-hack/NOTAS.md:444-461` · `~/mkr2-hack/RETOMAR.md:6,10` | **IMPLEMENTADO** |
| **O que a VWF comprou, em uma linha:** `MG KNIGHTS` voltou a ser `MAGIC KNIGHTS`. A caixa de diálogo tem **12 caracteres**, e `MAGIC KNIGHTS` tem 14. | `~/mkr2-hack/NOTAS.md:159-166,474` | **IMPLEMENTADO** |
| **Por que foi barata aqui:** a fonte não é 4bpp de verdade — fundo = cor 2, tinta = cor 1, planos 2 e 3 sempre zero. **O plano 0 é a máscara da tinta**, então compor um glifo deslocado é um shift de 1 bit por linha, não uma operação de quatro planos. | `~/mkr2-hack/NOTAS.md:448-451` | **IMPLEMENTADO** |
| **Espaço fino de 1 px** criado no código `$95` (`@`, que o jogo nunca usa) para fechar a linha exatamente na borda — com a VWF a conta é em pixel, e `FF 1D` não quebra linha em toda parte. | `~/mkr2-hack/NOTAS.md:476-481` | **IMPLEMENTADO** |
| **O orçamento é coluna e pixel, não byte:** 96 px por linha. E o roteiro **cabe sem expandir** — script japonês de 31,7 KB contra 77,2 KB livres; o inglês sai até **menor** que o japonês, porque cada kana com dakuten custa 3 bytes e uma letra latina custa 1. | `~/mkr2-hack/RETOMAR.md:26` · `NOTAS.md:100-118` | **IMPLEMENTADO / fato de motor** |
| **Terceira linha na caixa** — valia +50%, **tentada e não fechada**. | `~/mkr2-hack/NOTAS.md:411-424` | **SÓ ESTUDADO** |
| **VWF na narração de abertura** — a narração usa **outro desenhador de glifo**; o jogo tem seis sítios que carregam `$854A` e três foram enganchados. A narração continua de largura fixa. **Por isso a copy fala só da caixa de diálogo.** | `~/mkr2-hack/NOTAS.md:481-483` · `RETOMAR.md:31` | **SÓ ESTUDADO** |
| Tela de entrada de nome (teclado kana → A-Z) e tela de título — motor desmontado, arte de prévia pronta, **não injetadas**. | `~/mkr2-hack/RETOMAR.md:19-21` · `NOTAS.md:554,191-242` | **SÓ ESTUDADO** |
| **Filtro de palavrão** no teclado de nome, com nome substituto — é do jogo. | `~/mkr2-hack/NOTAS.md:631` | **JÁ VINHA DE FÁBRICA** |
| ROM de **512 KB**, mapper Sega padrão com registrador de banco de um byte inteiro (256 bancos) — **não há mapper a trocar**, ao contrário de quase todo Famicom do catálogo. | `~/mkr2-hack/NOTAS.md:11-16` | **JÁ VINHA DE FÁBRICA** |

---

# Conflitos da rodada 3

| # | Conflito | Como resolvi |
|---|---|---|
| R3-1 | **O nome novo do Gozonji não é o que está na tela de título.** O site passa a chamá-lo *The Misadventures of Yaji & Kita*; a build grava no letreiro **`DEADLY MISSION`** (arte de `~/Downloads/deadly01.png`), com o selo `KILL AT WILL` e o subtítulo `THE UNRULY TOWNSMAN…`. | Na copy citei **o subtítulo**, que é fiel ao que está na tela, e declarei o nome inglês como escolha desta tradução. **Não afirmei que a tela mostra o nome novo.** Decisão para o dono: alinhar o letreiro ao nome do site, ou manter os dois. Fonte: `~/gozonji-hack/graficos/patch_titulo.py:79` · `RELATORIO.md:10`. |
| R3-2 | **Guevara, `SEE YOU NEXT PLAY`.** `NOTAS.md:195` e a tabela de interface em `:732` dão a troca por `SEE YOU NEXT TIME` como decidida/feita; `NOTAS.md:1088-1092` (registro posterior, 08/09) põe essa despedida no bloco do banco 7 que **não foi traduzido**, por causa de um formato de posição de 2 bytes não decifrado. | Fiquei com o registro mais recente: **fora da copy**. Só `TWO PLAYERS MODE → TWO PLAYER MODE` está afirmado. |
| R3-3 | **Tamanho do roteiro do Gozonji.** `notas/motor.md:54` e `RETOMAR.md:22` = 5.359 blocos / ~252 mil caracteres (com falsos positivos e a duplicata banco 4 = banco 12); `RETOMAR.md:109` = 3.581 falas / 145 mil caracteres. | **Não citei número.** Escrevi só "o maior roteiro do catálogo", que é o que o `REGRAS.md:151-153` afirma. |
| R3-4 | **Contagem de telas do prólogo do Gozonji.** `RELATORIO.md:8` diz 4 telas (build 1); `RETOMAR.md:124` diz 5 (build 2); `RETOMAR.md:150` diz **8** (build 8). | Usei **8**, o registro mais recente. |
| R3-5 | **Guevara: o que a versão ocidental tirou.** O `REGRAS.md:143-144` afirma que em *Guerrilla War* o Che virou um comandante sem nome. A `~/guevara-hack/NOTAS.md` **não mede a ROM americana** — documenta o que a japonesa tem, não o que a outra perdeu. | Escrevi só o lado medido: a ROM japonesa tem o retrato, a dedicatória, o prólogo e a narração do final, e agora se leem em três idiomas. **Não afirmei remoção.** |
| R3-6 | **MKR2 tem tradução inglesa anterior** (Pearse Hillock v0.5, `~/mkr2-hack/NOTAS.md:9`) — é o segundo caso do catálogo em que já existia patch de terceiros. | Não citei o autor. Usei `MG KNIGHTS` como ilustração da **restrição de 12 colunas**, que é fato de motor, e não como comparação com o trabalho de outra pessoa. |

---
---

# RODADA 4 — os quatro últimos projetos (09/09/2026)

Mesmo método, mesmas três marcas. Duas regras extras valeram aqui: **nenhum número de
progresso** (o Pocket Monsters Stadium começou HOJE) e a distinção de sempre entre o que
está na build, o que só foi avaliado e o que **já vinha no cartucho de fábrica** — que
nesta rodada é a marca mais importante das quatro fichas, porque o achado central do
Robot Poncots 64 é exatamente um item de fábrica.

## 14. Ninja Burai Densetsu — `ninja-burai-densetsu` (Mega Drive)

**Nenhuma melhoria de experiência implementada, e nenhuma tradução inserida.** O projeto
está no reconhecimento. O que sustenta a ficha é o jogo, o guia oficial e o motor medido.

| Melhoria | Fonte | Marca |
|---|---|---|
| **As duas compressões do cartucho reimplementadas** a partir da desmontagem: Huffman de 256 entradas + RLE de nibbles para assets (rotina `$6212`) e LZ sobre índices de tile para tilemaps (rotina `$60B8`). O LZ validado: o tilemap `0x28854` devolve exatamente as 400 words que o chamador espera. | `~/burai-hack/RETOMAR.md:34-53` | **IMPLEMENTADO** (ferramenta de análise, não vai para o jogador) |
| **O texto foi lido na tela pela primeira vez**, pareando bloco de glifos + tilemap e montando a tela na largura do blitter (`31 × 4`). Não existe roteiro em texto na ROM: a identidade dos caracteres está nos bitmaps e a ordem está nos tilemaps. | `~/burai-hack/RETOMAR.md:93-108,171-197` | **IMPLEMENTADO** (reconhecimento) |
| **Extração validada por fonte externa:** os dez capítulos lidos da ROM batem letra por letra com o índice do guia oficial (テレビランドわんぱっく nº135), inclusive o 第一章 羽尾の国, que estava marcado como duvidoso. | `~/burai-hack/roteiro/glossario.md:6-13` | **IMPLEMENTADO** (verificação) |
| **Registro da abertura medido, não suposto:** 擬古文 com cinco marcas no mesmo parágrafo; a conclusão de estilo (prosa formal de crônica, sem `thee/thou`) passou a ter base. O esboço de tradução da abertura é **referência, não build**. | `~/burai-hack/roteiro/glossario.md:185-220` | **IMPLEMENTADO** (decisão de estilo) / o esboço é **SÓ ESTUDADO** |
| **Usar a fonte base de 8×8 para o texto traduzido**, passando a caixa de 15 para 31 caracteres por linha. Está escrito como *decisão de projeto*, e não há build. | `~/burai-hack/RETOMAR.md:218-223` | **SÓ ESTUDADO** — não entrou na copy como feito |
| Desenhar as minúsculas na fonte base (o cartucho tem `A-Z`, não tem `a-z`) | `~/burai-hack/RETOMAR.md:91,141` | **SÓ ESTUDADO** |
| Glossário: leituras dos nomes próprios, classes (僧侶 = Monk e não Medic) e nomes históricos preservados | `~/burai-hack/roteiro/glossario.md:47-90,153-166` — "Nada aqui está aprovado ainda" | **SÓ ESTUDADO** (proposta ao dono) |
| **Fonte base de 129 glifos 8×8 com `A-Z` já residente** (tile `0x380`), dígitos e pontuação | `~/burai-hack/RETOMAR.md:76-90` | **JÁ VINHA DE FÁBRICA** |
| Vida em velas, morte permanente, limite de dias, sete classes, níveis em 段 | `~/burai-hack/roteiro/glossario.md:97-103,180-181` | **JÁ VINHA DE FÁBRICA** (é o jogo, e é bom material de ficha) |
| **32 KB livres em `0xC9000`** e as centenas de KB de blocos de glifos de cena que o inglês dispensa | `~/burai-hack/RETOMAR.md:26,117-123` | (orçamento medido, não é melhoria) |

> **O que a mudança de arquitetura significa, em uma linha:** não é "outro assembly", é outro
> método de prova. Nos cartuchos de NES a tabela de caracteres se prova por *trace* da leitura
> da fonte no emulador; aqui isso não estava disponível, e a prova veio da **estrutura** —
> parear bloco com tilemap e renderizar. Foi o que derrubou o plano de ler 2.815 glifos um a um.

## 15. Maniac Mansion (japonês) — `maniac-mansion` (Famicom)

**Nenhuma melhoria de experiência implementada.** O trabalho feito é de cartucho: a ROM
foi expandida e o motor de texto passou a ser servido por um banco novo.

| Melhoria | Fonte | Marca |
|---|---|---|
| **Cartucho refeito: 256 → 512 KB.** Com mapper 2 o banco fixo é o **último**, então o banco 31 nasce como cópia do 15 e toda escrita no banco fixo é espelhada nos dois (`wfixo`). A tabela de bancos `$FFF0` foi preenchida com 16..23 num vão conferido como livre por `assert`. | `~/maniac-hack/build.py:15-27` · `~/maniac-hack/NOTAS.md:40-43` | **IMPLEMENTADO** (na build) |
| **Motor de texto servido pelo banco 16.** O banco 16 é cópia integral do 12; a porta `$8010` do banco 12 virou `JMP` para um trampolim de **14 bytes** em `$E660`, no banco fixo, que troca o banco, chama o motor e volta. | `~/maniac-hack/build.py:29-44` | **IMPLEMENTADO** (na build) |
| **Paridade de quadro:** `shot_2580.png` das rodadas `p_b12` (motor no banco 12) e `p_b16` (motor servido pelo banco 16) têm o **mesmo md5** — `eda0d626f7250a7690c7dcef4a4c8961` —, e o mesmo md5 aparece na rodada `o2`. Trocar de onde o motor lê não muda um pixel. | `~/maniac-hack/testes/saida/p_b12/shot_2580.png` · `.../p_b16/shot_2580.png` (md5 conferido nesta rodada) | **IMPLEMENTADO** (prova) — ver conflito R4-2 |
| Roteiro extraído e tabelado: 807 mensagens, 15.073 bytes, em quatro blocos, com as tabelas de ponteiro localizadas | `~/maniac-hack/NOTAS.md:20-32` | **IMPLEMENTADO** (reconhecimento) |
| **Far-read no banco fixo** (`LDA ($00),Y` do motor virando `JSR $F8C0`), com os 94 bytes de folga do banco 15 medidos e a rotina de ~15 B orçada | `~/maniac-hack/NOTAS.md:49-58` | **SÓ ESTUDADO** — a build tomou o caminho do trampolim, não este |
| Desenhar o alfabeto completo nos slots `0x01-0x49` da fonte de diálogo | `~/maniac-hack/NOTAS.md:64-66` — "Vou desenhar" | **SÓ ESTUDADO** |
| Painel de verbos: 12 verbos em **tilemap fixo**, não string (`0x34341`, `0x3E5F1`) — traduzi-lo é redesenhar, não reescrever | `~/maniac-hack/NOTAS.md:29-30` | **JÁ VINHA DE FÁBRICA** (é a restrição) |
| **Logotipo latino, `PASSWORD` e `START` em inglês** na tela de seleção do cartucho japonês; e uma **fonte latina parcial `A-T`** em `0x1dd40`, fora da fonte de diálogo | `~/maniac-hack/testes/saida/p_b16/shot_2580.png` · `NOTAS.md:13,64-66` | **JÁ VINHA DE FÁBRICA** (e é o melhor detalhe da ficha) |
| Progresso por **senha**, não por bateria (`PASSWORD` na tela de título) | `~/maniac-hack/testes/saida/p_b16/shot_2580.png` | **JÁ VINHA DE FÁBRICA** — nada foi feito a respeito; **não é o caso do Captain Tsubasa** |

## 16. Pocket Monsters Stadium — `pocket-monsters-stadium` (Nintendo 64)

Começou **hoje**. É a ficha com mais coisa feita das quatro, e a que mais exige cuidado
com número de progresso.

| Melhoria | Fonte | Marca |
|---|---|---|
| **Conteúdo novo: tela de créditos do Patch Clan** antes do título, 5 s, pulável com **A ou START**, com fonte 8×8 própria (44 glifos, 360 B) subida pela própria tela. O gancho é a **primeira instrução do jogo**: não há banco a mapear, o IPL3 põe 1 MB em RAM antes de saltar. | `~/pms64-hack/RETOMAR.md:202-232` | **IMPLEMENTADO** |
| **Texto do motor traduzido e inserido**, com o banco principal reempacotado e reapontado e as demais regiões escritas no lugar; o enchimento invadido foi conferido byte a byte (só `0x00` ou `0x20`). | `~/pms64-hack/RETOMAR.md:138-167` | **IMPLEMENTADO** |
| **CRC CIC-6103 provado antes de usar** (semente `0xA3886759`, combinador de soma) contra o cabeçalho da ROM original. Sem isso o IPL3 entra em laço e a tela nunca sai do preto. | `~/pms64-hack/RETOMAR.md:179-181` | **IMPLEMENTADO** |
| **Cobertura salva por método:** o filtro de densidade (8 strings juntas) derrubava as mensagens isoladas; o teste linguístico em EUC-JP trouxe as **mensagens de batalha**, que são o texto mais visível do jogo. | `~/pms64-hack/RETOMAR.md:279-295` | **IMPLEMENTADO** |
| **Verificação na tela dos menus.** O `RETOMAR.md:195-200` diz que não foi conferido — mas `work/shots/*.png`, de **08:43**, mostram o **menu principal** (BATTLE, ORGANIZE, DEX, LIST, PARTY, REGISTER) e a **tela de regras da copa** em inglês, desenhados pelo motor. O registro está atrasado. | `~/pms64-hack/work/shots/pokemon_stadium-009.png` · `-014.png` · `~/pms64-hack/RETOMAR.md:195-200` | **IMPLEMENTADO** — ver conflito R4-3 |
| Boot e estabilidade: 26 capturas em 2min20 com batalha completa; savestate com o inglês presente e o japonês ausente; o IPS aplica limpo sobre `base.z64` | `~/pms64-hack/RETOMAR.md:183-193` | **IMPLEMENTADO** (prova) |
| Revisão da UI em contexto e partida inteira caçando defeito | `~/pms64-hack/RETOMAR.md:305-309` | **SÓ ESTUDADO** |
| **Transfer Pak lendo Verde, Azul e Amarelo**, com as etiquetas `@POKEMON GREEN/BLUE/YELLOW` e `EJECTED GB CARTRIDGE` no código | `~/pms64-hack/RETOMAR.md:44-46` | **JÁ VINHA DE FÁBRICA** (é o jogo) |
| As 151 espécies com categoria, em ordem de Pokédex, no banco principal | `~/pms64-hack/RETOMAR.md:88-91` · `~/pms64-hack/dados/listas.py:4-15` | **JÁ VINHA DE FÁBRICA** (fato de cartucho) |

> **Nenhum bug do original consertado** — as três armadilhas documentadas
> (`RETOMAR.md:169-181`) são defeitos que a inserção *criou* e que foram achados, não
> defeitos do cartucho de 1998. Isso precisa ficar claro: não é o caso da cápsula do
> Ultraman Club 3 nem o da lista dos sete escolhidos do Famicom Jump II.

## 17. Robot Poncots 64 — `robot-poncots-64` (Nintendo 64)

| Melhoria | Fonte | Marca |
|---|---|---|
| **Os 95 primeiros glifos do charset são o ASCII imprimível inteiro**, em SJIS de largura cheia. **Conferido nesta rodada, na ROM**: decodificando as 272 entradas de `0x19710D0`, as 95 primeiras dão exatamente `0x20`-`0x7E` — espaço, pontuação, dígitos, `A-Z` **e `a-z`** —, e a 96ª já é `。`. | `~/robopon64-hack/RETOMAR.md:12-18` · verificado em `~/robopon64-hack/rom/base.z64` | **JÁ VINHA DE FÁBRICA** — é propriedade do cartucho de 1999, **não é trabalho do patch** |
| Consequência real: **a tradução não pede hack de código**, só reescrever strings. É o contraste com os 8 bits do catálogo, onde desenhar o alfabeto era metade do trabalho (Gozonji: 83 glifos gravados sobre kana; Monster Maker: três letras latinas na fonte inteira). | `~/robopon64-hack/RETOMAR.md:17-18` · `~/gozonji-hack/RETOMAR.md:24-26` · `~/mm-hack/RETOMAR.md:13-14` | **JÁ VINHA DE FÁBRICA** (a propriedade) / a leitura é nossa |
| **Nomes de série ancorados no glossário oficial:** casou **45 de 45** com a ordem interna da ROM, entrada por entrada — pareamento por ordem, não por nome. O #46 (`バケまる`) é exclusivo do N64 e não tem nome oficial. | `~/robopon64-hack/RETOMAR.md:127-134` | **IMPLEMENTADO** (é o ganho de experiência mais forte deste projeto: quem jogou Robopon reencontra os mesmos robôs) |
| **Inserção com gate:** `inserir.py` aborta se algo não couber, recalcula o checksum e limpa o campo; `desenhar.py` desenha o texto com a **fonte real** do jogo; `n64crc.py` validado reproduzindo `272B690F AD0A7A77` da ROM original. | `~/robopon64-hack/RETOMAR.md:37-44` | **IMPLEMENTADO** |
| **Dois tipos de campo, e a armadilha do zero.** 913 strings do original não têm terminador: enchem o campo com espaço de largura cheia. Zero num campo desses **corta a frase** — quebrou ATK, DEF, SPD, RAM, EP e POWER, com o `%3d` sumindo da tela, e **nenhuma medição pegou**: só a releitura da ROM montada. | `~/robopon64-hack/RETOMAR.md:72-98` | **IMPLEMENTADO** (a cura: preencher exato com espaço fullwidth) |
| **Ver na tela sem permissão do macOS:** `emu.py`/`olhar.py` dirigem o mupen64plus pela **API C do núcleo**, e o próprio núcleo grava o PNG. A demo de atração se joga sozinha e navega menus. A tela de seleção de save já lê `START`, `DELETE`, `NO DATA` e `B: CANCEL`. | `~/robopon64-hack/RETOMAR.md:114-125` · `work/shots/robopon64-002.png` · `work/traducao.json:127-130` | **IMPLEMENTADO** (verificação) |
| Texto em **caixa alta** por decisão de legibilidade: no corpo de 12 px o `g` lê como `9` e o `y` como `Y` | `~/robopon64-hack/RETOMAR.md:56` | **IMPLEMENTADO** (decisão de estilo, visível ao jogador) |
| **Logo da intro** (HVQ2, codec proprietário da Hudson): trocar exige escrever um encoder ou patchear o carregador | `~/robopon64-hack/RETOMAR.md:68-69` | **SÓ ESTUDADO** |
| Fragmentos que o motor **concatena** para formar frase — não traduzidos de propósito, porque a ordem japonesa não sobrevive à concatenação | `~/robopon64-hack/RETOMAR.md:109-111` | **SÓ ESTUDADO** (decisão) |
| Campo fixo sem tabela de ponteiros, mediana de 6 caracteres, nome de robô com 5 letras | `~/robopon64-hack/RETOMAR.md:27-33,136-138` | **JÁ VINHA DE FÁBRICA** (é a restrição) |

---

# Conflitos da rodada 4

| # | Conflito | Como resolvi |
|---|---|---|
| R4-1 | **Quantos Pokémon jogáveis no Stadium.** `~/pms64-hack/RETOMAR.md:3` diz **42 jogáveis**; a própria tela de regras do jogo, na ROM traduzida, diz **`40 KINDS OF POKEMON`** (`work/shots/pokemon_stadium-012.png` e `-014.png`). | **Não citei número de roster.** Escrevi o que é medido e estável: o banco principal guarda as 151 espécies com categoria, em ordem de Pokédex. Precisa de árbitro. |
| R4-2 | **A rodada `o2` do Maniac Mansion não registra qual ROM rodou.** Os três `shot_2580.png` (`o2`, `p_b12`, `p_b16`) têm o mesmo md5, o que sugere paridade com o original — mas só os nomes `p_b12`/`p_b16` identificam a variável. | Na copy afirmei só o par defensável: **trocar o banco de onde o motor lê não muda o quadro**. Não afirmei paridade com a ROM original. Se o dono quiser essa frase mais forte, basta gravar no `NOTAS.md` qual ROM cada rodada usou. |
| R4-3 | **O `RETOMAR.md` do PMS64 está atrasado.** Ele diz, em `:195-200`, "NÃO verificado: o texto desenhado nos menus" e "não afirmar que foi conferido na tela" — mas as capturas de `work/shots/`, posteriores (08:43 contra 08:06 do arquivo), mostram menu principal e regras da copa em inglês. | Segui as **capturas**, que são fonte primária, e afirmei exatamente o que se vê nelas: "o menu principal e a tela de regras da copa aparecem em inglês na foto do emulador". Não afirmei conferência de tela alguma além dessas duas. |
| R4-4 | **Tamanho do roteiro do Robot Poncots 64.** `RETOMAR.md:25` dá 2.994 strings / 16.572 caracteres / 38 KB, mas o próprio arquivo (`:63-64`) avisa que o texto foi achado varrendo, sem tabela de ponteiros para consultar, e que pode haver texto não encontrado. | **Não citei o total.** Usei as estatísticas de **capacidade de campo** (mediana 6, p75 11), que são medidas do motor e não dependem de a varredura estar completa. |
| R4-5 | **`NOTAS.md` do Maniac × `build.py`.** As notas descrevem a arquitetura escolhida como **far-read no banco fixo** (`JSR $F8C0` no lugar de cada `LDA ($00),Y`); o `build.py` implementa outra coisa — **trampolim em `$E660`** que chama o motor inteiro dentro do banco 16. | Escrevi o que o **código** faz, não o que a nota planejava. O far-read ficou marcado como **SÓ ESTUDADO**. |
| R4-6 | **Nome do jogo do `robopon64`.** O savestate em `work/states/` traz `Robot Ponkottsu 64 - 7tsu no Umi`, e o `REGRAS.md:192` fixa o slug e o nome como **Robot Poncots 64**. | Segui o `REGRAS.md` na copy. O subtítulo (`7つの海`) não entrou; se o dono quiser, cabe no campo `subtitulo` da ficha, como se fez no Gozonji. |
| R4-7 | **Ninguém declarou tier para os quatro.** O `REGRAS.md:225-226` diz que o dono ainda vai declarar. | A copy **não menciona nível** em nenhum dos quatro, e as três fichas sem patch fecham com a fórmula da casa ("Não há patch para instalar; esta página é para acompanhar"). **O Pocket Monsters Stadium não leva essa frase**: existem `rom/pms64_en.ips` e `pms64_en_intro.ips` construídos, e negar download seria tão errado quanto prometê-lo. Decisão do dono: publicar o IPS ou acrescentar a frase. |
