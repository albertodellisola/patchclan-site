# Rodada 2 da copy do Patch Clan — regras comuns

Site: **patchclan.com**. Público: quem joga retrô e procura patch de tradução.
Tom da casa: direto, concreto. O site vende **trabalho medido**, não promessa.

## O EIXO NOVO desta rodada

A rodada 1 falava do jogo e dos números. Faltou o que mais interessa a quem vai
instalar: **o que a experiência de jogar ganhou.** Estes cartuchos são de 1988 a 1994
e carregam o atrito da época — comando "falar" dentro de menu, progresso só por senha,
caixa de texto de 14 colunas, roteiro que pressupõe que você leu a revista.

Cada ficha tem de deixar claro **as três coisas**, nesta prioridade:

1. **O jogo e o universo** — que série é, o que se faz nele, por que ele importa.
2. **As melhorias** — o que o patch mudou na experiência, não só no idioma. Exemplos reais:
   - Famicom Jump II: o `Talk` saiu de dentro do menu e virou **botão B contextual**,
     como num RPG moderno. E foi escrito um **prólogo que não existe no original**, para
     o ocidental acompanhar sem conhecer a Shōnen Jump e sem ter jogado o primeiro jogo.
   - Captain Tsubasa: o jogo **passou a salvar em bateria**. O original só guardava
     progresso por senha anotada no papel.
3. **A prova** — o número que sustenta a promessa, e o que ele significa para quem joga.

## REGRAS DURAS

**1. Não invente.** Feature, número, data, elogio de imprensa: se você não leu numa fonte
do projeto, não existe. Toda afirmação vem com `arquivo:linha` no campo `fontes`.

**2. NÃO diga o que falta, nunca.** Esta é a regra que mais mudou desde a rodada 1.
Nada de "a tela de senha ainda está em hiragana", "o menu continua em japonês",
"ninguém jogou até o fim", "pendência declarada", "é por isso que é beta".
O texto descreve **o jogo e o trabalho feito**. O que falta é assunto das notas do projeto.

**3. Os três níveis medem TESTE, não qualidade.** `release`, `beta` e `alfa` dizem
**quanto o patch já foi testado** — não quanto ele presta. Alfa é o começo do caminho,
só isso. **Não explique o nível, não justifique o nível, não peça desculpa pelo nível.**
Um projeto sem patch para baixar termina convidando a acompanhar, com a palavra:
"não há patch para instalar" / "sem link para baixar". Sem diagnóstico junto.

**4. Sem hype.** Nada de "melhor tradução", "definitiva" como elogio, "incrível", "épico",
"revolucionário". Evite exclamação. O gancho convence pelo fato.

**5. Não prometa download que não existe.** A tabela abaixo é a verdade do que está
publicado hoje.

## Estado real, hoje (`build/` + `patches/` do site)

| slug | nível | patch publicado | onde aparece |
|---|---|---|---|
| `famicom-jump-2` | release | en · pt · es | ficha completa |
| `captain-tsubasa` | release | en · pt | ficha completa |
| `dragon-ball-3` | beta | en | ficha |
| `ultraman-club-2` | alfa | en | ficha |
| `gaia-saver` | alfa | — | ficha |
| `nekketsu-kakutou-densetsu` | alfa | — | ficha |
| `ultraman-club-3` | fila | — | lista |
| `tom-sawyer` | fila | — | lista |
| `hanjuku-hero` | fila | — | lista |
| `monster-maker` | fila | — | lista |

**Contagem do FJ2:** há divergência aberta entre as fontes (1.903 no `FEATURES.md` e no
site, 1.838 no `NOTAS.md`). **Não faça do total de mensagens o fato central do FJ2** —
há material muito melhor (o prólogo, o botão B, os dois bytes). Se citar, cite 1.903.

## Formato de saída

Um JSON, lista de 10 objetos, **nesta ordem exata de slug**:
`famicom-jump-2`, `dragon-ball-3`, `captain-tsubasa`, `nekketsu-kakutou-densetsu`,
`gaia-saver`, `ultraman-club-2`, `ultraman-club-3`, `tom-sawyer`, `hanjuku-hero`,
`monster-maker`.

```json
{
  "slug": "...",
  "linha": { "pt": "...", "en": "..." },
  "resumo": { "pt": ["p1","p2","p3"], "en": ["p1","p2","p3"] },
  "fontes": ["~/fj2-hack/FEATURES.md:62 — botão B contextual, 19 B no kernel"]
}
```

- `linha` = o gancho da HOME. **UMA frase, no máximo 150 caracteres**, contados. Diz que
  jogo é, o que o patch entrega, e dá motivo para clicar.
- `resumo` = a página do projeto. **2 ou 3 parágrafos**, HTML simples (`<b>`, `<i>`, `<code>`).
- pt e en nos dois campos. O inglês é texto inglês, não tradução literal do português.

## Onde estão as fontes

| projeto | pasta |
|---|---|
| Famicom Jump II | `~/fj2-hack` — `FEATURES.md`, `MELHORIAS.md`, `NOTAS.md` |
| Dragon Ball 3 | `~/db3-hack` — `NOTAS.md`, `README.md` |
| Captain Tsubasa | `~/ct-hack` — `NOTAS.md`, `RETOMAR.md`, `notas/` |
| Nekketsu | `~/nekketsu-hack` — `NOTAS.md`, `RETOMAR.md` |
| Gaia Saver | `~/gaia-hack` — `README.md`, `notas/` |
| Ultraman Club 2 | `~/ultraman2-hack` — `README.md` |
| Ultraman Club 3 | `~/ultraman3-hack` |
| Tom Sawyer | `~/tom-sawyer-hack` (confira o nome real da pasta) |
| Hanjuku Hero | `~/hanjuku-hack` — `NOTAS.md` |
| Monster Maker | `~/mm-hack` — `RETOMAR.md` |
| o site | `~/patchclan-site/build/jogo-*.mjs` e `jogos-novos.mjs` (já publicado = já conferido) |
| briefing da rodada 1 | `~/patchclan-site/copy/BRIEFING.md` |
| copy da rodada 1 | `~/patchclan-site/copy/consenso.json` |

---

# RODADA 3 — os três projetos novos (08/09/2026)

O dono decidiu acrescentá-los ao catálogo, **com os tiers já definidos por ele**:

| slug | jogo | sistema | tier declarado |
|---|---|---|---|
| `guevara` | Guevara (SNK, 1988) — no Ocidente saiu como *Guerrilla War* | Famicom/NES | **release** |
| `gozonji` | Gozonji: Yaji Kita Chin Douchuu (HAL Laboratory, 1991) | Famicom | **beta** |
| `magic-knight-rayearth-2` | Magic Knight Rayearth 2 | **Game Gear** | **beta** |

Fontes: `~/guevara-hack/NOTAS.md` · `~/gozonji-hack/` (`RETOMAR.md`, `ANALISE.md`,
`RELATORIO.md`, `notas/`) · `~/mkr2-hack/` (`RETOMAR.md`, `NOTAS.md`, `docs/`).

## A regra que só vale para esta rodada

**As traduções fecham amanhã (09/09/2026).** Portanto:

**NENHUM NÚMERO DE PROGRESSO NO TEXTO.** Proibido: percentual traduzido, "97%",
"1.467 de 1.884", "capítulo piloto", "roteiro sendo extraído", "x de y mensagens".
Esses números mudam nas próximas horas e ficariam errados na página no dia seguinte.

O que **é** estável e deve ser usado:
- o jogo e o universo
- as melhorias e o que o patch mudou na experiência
- os fatos de MOTOR medidos, que não mudam com o progresso: a caixa de 16 caracteres
  por 4 linhas do Gozonji, os 83 glifos da fonte latina, os 96 px por linha da fonte de
  largura variável do MKR2, o mapper e o tamanho da ROM, o dicionário de 128 entradas
- totais do jogo (o tamanho do roteiro como **fato do cartucho**, não como medida de
  quanto já foi feito)

**Escreva no presente do que estará publicado**, sem prometer data e sem dizer que algo
está em curso. Se um fato depender de a tradução ter terminado, ou ele é do tier declarado
acima, ou fica de fora.

## Os ângulos que estes três abrem, e que os dez não tinham

- **Guevara é o único do catálogo que TEVE versão ocidental oficial.** Saiu como
  *Guerrilla War*, mudado — o Che Guevara virou um comandante sem nome. Não é um jogo que
  nunca saiu; é um jogo que saiu diferente. Esse é o ângulo, e é forte. Confira na
  `~/guevara-hack/NOTAS.md` o que a versão japonesa tem (a dedicatória, o retrato, o
  prólogo) antes de escrever.
- **Magic Knight Rayearth 2 é o único Game Gear** — todo o resto é Famicom, com um Super
  Famicom. E é o único projeto com **fonte de largura variável**, que é trabalho que
  nenhum outro do catálogo tem: o orçamento ali é coluna e pixel, não byte.
- **Gozonji é comédia de estrada** baseada no *Tōkaidōchū Hizakurige*, clássico da
  literatura japonesa — e é kana puro, sem kanji. O roteiro é de longe o maior do
  catálogo inteiro.

Todo o resto do REGRAS.md continua valendo: não dizer o que falta, não explicar o tier,
sem hype, sem exclamação, `linha` <= 150, `fontes` com `arquivo:linha`.

## Entrega da rodada 3

Três slugs, nesta ordem: `guevara`, `gozonji`, `magic-knight-rayearth-2`.
Mesmo formato JSON da rodada 2.

## Gozonji renomeado (08/09/2026, decisão do dono)

O jogo passa a se chamar **The Misadventures of Yaji & Kita** no site, **com o nome
original sempre visível** — nunca escondido, nunca substituído.

| campo da ficha | valor |
|---|---|
| `nome` | The Misadventures of Yaji &amp; Kita |
| `subtitulo` | Gozonji: Yaji Kita Chin Douchuu |
| `jp` | ご存知 弥次喜多珍道中 |

O **slug continua `gozonji`** — é o identificador da URL e do nome do arquivo `.ips`.

Na copy: chame o jogo pelo título novo e **cite o original ao menos uma vez no `resumo`**,
de forma natural. O título novo é desta tradução; **não é o nome oficial** e a HAL nunca o
usou — não afirme o contrário.

Em HTML, o `&` vai como `&amp;`. Em linha de comando, o nome de arquivo precisa de aspas.

---

# RODADA 4 — os quatro projetos restantes (09/09/2026)

Fecham o catálogo: são todos os projetos de romhack da casa que ainda não têm copy.

| slug | jogo | sistema | pasta |
|---|---|---|---|
| `ninja-burai-densetsu` | Ninja Burai Densetsu (忍者武雷伝説), Sega, 1991 | **Mega Drive** | `~/burai-hack` |
| `maniac-mansion` | Maniac Mansion (versão japonesa) | Famicom | `~/maniac-hack` |
| `pocket-monsters-stadium` | Pocket Monsters Stadium, 1998 | **Nintendo 64** | `~/pms64-hack` |
| `robot-poncots-64` | Robot Poncots 64, Hudson Soft | **Nintendo 64** | `~/robopon64-hack` |

## O que estes quatro trazem de novo ao catálogo

Até aqui o site é quase todo Famicom, com um Super Famicom e um Game Gear. Estes quatro
abrem **três plataformas novas** e mudam a escala do trabalho:

- **Ninja Burai Densetsu é o primeiro 16 bits de Mega Drive da casa** — e o primeiro
  **68000**, não 6502 nem 65816. Isso é outra arquitetura de processador, não uma variação.
- **Dois Nintendo 64**, que é a primeira vez que a casa mexe em 3D e em ROM de 32 MB.
  O Robot Poncots 64 tem uma propriedade rara: **os 95 primeiros glifos do charset são o
  ASCII inteiro**, em SJIS fullwidth — a tradução não precisa de hack de código, basta
  reescrever as strings. Confirme e explore, é um contraste forte com os cartuchos de 8 bits,
  em que desenhar o alfabeto foi metade do trabalho.
- **Maniac Mansion** é o caso invertido do catálogo inteiro: um jogo **ocidental** que foi
  para o Japão. Todos os outros são japoneses que nunca saíram. Verifique nas notas o que a
  versão japonesa tem de diferente antes de escrever — é aí que está o ângulo.

## A REGRA QUE MAIS IMPORTA NESTA RODADA

**NENHUM NÚMERO DE PROGRESSO.** Ela já valeu na rodada 3 e aqui é ainda mais crítica: o
**Pocket Monsters Stadium começou em 09/09/2026**, ou seja, hoje. Qualquer percentual,
contagem de "x de y traduzidas", "alfa v0.1" ou "capítulo N" estará errado amanhã.

Vale, como sempre: o jogo e o universo · as melhorias · os fatos de **motor e de cartucho**
medidos (compressão, mapper, tamanho de ROM, formato de fonte, tabelas encontradas).

Se um fato depender de a tradução ter avançado, fica de fora.

## Ordem de entrega

`ninja-burai-densetsu`, `maniac-mansion`, `pocket-monsters-stadium`, `robot-poncots-64`.

Todo o resto do REGRAS.md continua valendo: não dizer o que falta, não explicar o tier
(que o dono ainda vai declarar), sem hype, sem exclamação, `linha` <= 150, `fontes` com
`arquivo:linha`, pt e en. O espanhol sai depois, em rodada própria.
