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
