# Espanhol da copy do Patch Clan — regras

O site é trilíngue (pt / en / es). A copy das rodadas 2 e 3 saiu em **pt e en**;
falta o espanhol dos **treze** jogos.

## Onde o espanhol mora, tecnicamente

`build/es.mjs` → `ES.jogos['<slug>'] = { status, linha, resumo: [...], numeros: [...] }`.
O `gerar.mjs` funde por caminho: cada string vira o campo `es` do par `{pt,en}`.
**O que faltar cai no inglês** — nunca fica em branco, então parcial é seguro, mas o
objetivo é fechar os treze.

Hoje só três têm espanhol: `famicom-jump-2`, `captain-tsubasa`, `dragon-ball-3` — e é a
copy da RODADA 1, que vai ser substituída.

Os `build/es-*.mjs` são outra coisa: carregam `grupos`, `fotos` e `manual`. Só importam
para jogos `release`, porque beta e alfa não mostram features. **Não é o alvo desta tarefa.**

## Não é tradução literal, é a mesma copy escrita em espanhol

O alvo é `copy/rodada2/consenso2.json` (10 jogos) e `copy/rodada3/consenso3.json` (3).
O pt e o en já divergem de propósito em alguns pontos. O espanhol é a **terceira redação**,
não o decalque de nenhuma das duas.

Onde o gancho do português é uma referência brasileira, o espanhol **não a traduz**:
ou acha a referência equivalente do seu público, ou troca de gancho.

## A REGRA DE LOCALIZAÇÃO DA CASA: Espanha primeiro

Está no `~/fj2-hack/glossario_es.tsv` (129 entradas, é a fonte única do bloco espanhol):
*localização de ESPANHA em primeiro lugar; quando Espanha e LatAm divergem, vence o termo
de MENOR CUSTO DE ESPAÇO; quando um termo é comum às duas regiões, ele vence por ser comum.*

O custo de espaço era restrição da ROM e **não vale para o site** — mas o glossário vale,
porque **a copy tem de falar como o patch fala**. Se o site diz «Bolas de Dragón» e o patch
diz outra coisa, o site mente sobre o próprio produto.

Exemplos já decididos no glossário: `Mutenroshi` · `Shenron` · `Bola de Dragón` ·
`Judía Mágica` · `Nube Kinton` · `Karin` · `Krilin`.

## ⚠ A armadilha do Captain Tsubasa — leia antes de escrever a ficha dele

O gancho da versão em **português** é o elenco da Manchete (Benji, Neia, Treinador Milani,
Oliver, Carlos, Roberto Maravilha), porque a build PT usa esses nomes.

**O espanhol NÃO usa «Oliver y Benji».** É decisão registrada do projeto:

- `~/ct-hack/notas/estilo_es.md:59-62` — *"O elenco NÃO é o de «Oliver y Benji» — é o
  japonês. Nada de Oliver Atom, Benji Price, Mark Lenders, Steve Hyuga, Tom Baker."*
- `~/ct-hack/NOTAS.md:323` — elenco japonês na build ES, como no inglês.
- O título da capa é **SUPER CAMPEONES / RUMBO AL SUEÑO**, o nome LatAm com fonte
  (catálogo da Enoki Films, `notas/nomes_localizacoes.md` §2.2).
- E o porquê: `notas/nomes_localizacoes.md:145` — **nem na Espanha o jogo saiu como
  «Oliver y Benji»**; saiu como *Robin Field*.

Portanto: **a ficha espanhola do Tsubasa precisa de um gancho próprio.** Não traduza o
brasileiro, não invente o espanhol. Leia `notas/estilo_es.md` inteiro antes de escrever.

## As regras duras continuam

Valem integralmente as do `copy/rodada2/REGRAS.md`:

- **Não dizer o que falta**, não explicar nem justificar o nível (nível mede quanto se
  testou, não quanto presta).
- Sem hype: nada de «la mejor traducción», «definitiva» como elogio, «increíble», «épico».
- **Sem exclamação** — e em espanhol isso inclui o par `¡ !`.
- `linha` <= **150 caracteres**, contados.
- `resumo` com **2 ou 3 parágrafos**, HTML simples (`<b>`, `<i>`, `<code>`).
- Nenhum fato novo: o espanhol afirma **exatamente** o que o pt e o en afirmam. Se achar
  um erro no original, **reporte, não conserte sozinho**.
- `&` em HTML vai como `&amp;`.

## Entrega

`~/patchclan-site/copy/es/consenso_es.json` — lista de 13 objetos:

```json
{ "slug": "...", "linha": "...", "resumo": ["p1","p2","p3"], "notas": ["..."] }
```

Ordem: os 10 da rodada 2 na ordem canônica, depois `guevara`, `gozonji`,
`magic-knight-rayearth-2`.

Em `notas`, registre toda escolha de localização que não seja óbvia, e todo ponto em que
você se afastou do pt/en e por quê.
