# Revisão do espanhol — `copy/es/consenso_es.json`

Segunda leitura dos treze jogos em espanhol. Método igual ao do pt e do en: um escreve,
outro assina. O revisor editou; o tradutor não foi consultado.

Base revisada: a versão do tradutor (cópia intacta em `/tmp/consenso_es.bak.json` durante
a sessão). **25 substituições em 19 campos** — 2 `linha` e 17 parágrafos.
`valida_es.py` passa limpo depois de tudo.

---

## 1. O que mudou, e o argumento de leitor de cada mudança

### 1.1 Calques do português e do inglês (o teste principal)

| jogo | antes | agora | por quê |
|---|---|---|---|
| ultraman-club-3 P3 | «el texto ya está **levantado**» | «ya está **inventariado**» | Lusismo direto do pt («o texto já está levantado»). *Levantar dados* não existe em Espanha nesse sentido — é uso do Brasil e, em parte, da LatAm. O leitor de Madrid lê «o texto foi erguido». |
| magic-knight P3 | «la misma **piscina** de la que se lee la fuente» | «— **de ahí mismo** se lee la fuente en cada glifo —» | *Pool* → **piscina** é falso amigo puro. Em espanhol o sentido informático não existe: piscina é para nadar. Resolvi tirando a metáfora em vez de trocar por «reserva», porque a frase já tem o antecedente («el banco que queda fijo») a três palavras de distância. |
| gaia-saver P2 | «El inglés no **vive en eso**.» | «El inglés **no cabe ahí**.» | Decalque do pt («o inglês não vive nisso»). *Vivir en* não tem em espanhol o sentido de «operar dentro desse limite». E o encaixe fica melhor: a frase anterior acaba em «cabe en 15 caracteres», e o eco «no cabe ahí» faz o contraste sozinho. |
| nekketsu P3 | «confirmado **en la ROM corriendo**» | «confirmado **con la ROM en marcha**» | Gerúndio pós-nominal à inglesa (*on the running ROM*). Em espanhol o gerúndio não qualifica substantivo; `con` + sintagma resolve e soa nativo. |
| dragon-ball-3 P1 | «y **es Bandai llevando** el manga al Famicom» | «y **es Bandai la que lleva** el manga al Famicom» | Mesma família: gerúndio como atributo de *ser*. A frase já traz um segundo gerúndio logo a seguir («con la baraja decidiendo el turno»), esse legítimo — dois seguidos viravam sotaque. A clivada é a construção enfática natural do espanhol. |
| dragon-ball-3 P2 | «se **comprobó contra** el manual» | «se **cotejó con** el manual» | *Check against* → «comprobar contra». Em espanhol comprova-se **com** ou coteja-se **com**; «contra» aqui é anglicismo. |
| ultraman-club-2 P2 | «se **comprobó contra** el manual japonés y **contra** la nomenclatura» | «se **cotejó con** el manual japonés y **con** la nomenclatura» | Idem, e era a segunda ocorrência do mesmo padrão no lote. (Deixei «prueba A/B **contra** la ROM original» e «0 bytes distintos **contra** la ROM»: com *prueba* e com *distinto* o «contra» é confronto, não comparação, e lê-se bem.) |
| guevara P3 | «Antes de dar un hueco **por libre**» | «Antes de **declarar libre** un hueco» | «Dar por libre» colide com o idiomatismo vivo *ir/andar por libre* (= agir por conta própria). O leitor tropeça antes de chegar ao sentido. |
| famicom-jump-2 P2 | «el niño **llevado dentro de** la revista» | «llevado **al interior de** la revista» | O pt tem «levado **para** dentro» — direcional. «Llevado dentro de» em espanhol é *carregado dentro da revista*, estático: perde-se justamente o movimento que é a imagem. |
| famicom-jump-2 linha | «pasó a ser **acción comodín**» | «pasó a ser **una** acción comodín» | *Virou ação coringa* dispensa artigo em português; `pasar a ser` + substantivo nu, em espanhol, só funciona com cargo ou papel. E o resumo já escreve «la B **es una** acción comodín» — a linha estava a contradizer o parágrafo. |

### 1.2 Erros de espanhol (concordância, regência, tempo)

| jogo | antes | agora | por quê |
|---|---|---|---|
| famicom-jump-2 P3 | «a Goku no se le **citaba** nunca» | «no se le **nombraba** nunca» | *Citar a alguien* em espanhol é marcar encontro / convocar. O que o texto diz é que o nome dele não aparece na lista. E o parágrafo abre com «el espíritu **nombra** a los seis campeones»: o eco fecha a ideia. |
| famicom-jump-2 P3 | «las siete variantes … **no disparaban** nunca» | «**no se disparaban** nunca» | Sem o pronominal, «disparar» é atirar. O gatilho de um evento em espanhol é *dispararse*. |
| dragon-ball-3 P2 | «**la ilustración es tan parecida entre ellas**» | «**las ilustraciones se parecen tanto entre sí**» | Sujeito singular com «entre ellas» plural. Erro de concordância que qualquer editor marca à primeira leitura. |
| dragon-ball-3 P2 | «**Quien no lee** kanji **jugaba** dos de los tres entrenamientos» | «**Quien no leía** kanji jugaba…» | Presente genérico dentro de oração cujo verbo principal é imperfeito. Em espanhol não se sustenta. |
| dragon-ball-3 P2 | «Mr. Popo acepta **carta que gane**» | «acepta **cualquier carta** que gane» | Substantivo nu como objeto direto contável, e logo a seguir da frase irmã que traz «acepta **una** carta». |
| dragon-ball-3 P3 | «una contraseña anotada **desde** 1989» | «anotada **en** 1989» | O ato foi pontual, não continuado. |
| captain-tsubasa P3 | «para quien **mantenga la B**» | «para quien mantenga **pulsada** la B» | *Mantener* pede predicativo: mantém-se a tecla **premida**. Sem ele a frase fica truncada. |
| magic-knight P2 | «un 19% más **en byte** que en pantalla» | «**en bytes**» | Plural. |
| gozonji P2 | «**el marrón con letra crema son** los colores» | «**el fondo marrón y la letra crema son** los colores» | Sujeito singular com verbo plural. |
| gaia-saver P2 | «con 30 la página **se revuelve**» | «se **descuadra**» | *Revolverse* é mexer-se / revolver-se, não é o que uma página faz quando o texto transborda. «Descuadrarse» é a palavra exata para o que se vê no ecrã. |
| nekketsu P2 | «con el validador **en cero errores**» | «con el validador **sin un solo error**» | «En cero errores» não é regência espanhola; é o inglês *at zero errors* passado à letra. |
| ultraman-club-2 P3 | «**Hasta cuatro** partículas japonesas escaparon» | «**Cuatro** partículas japonesas escaparon **también**» | O pt diz «**Até** quatro partículas» no sentido de *inclusive*. Em espanhol, «hasta» diante de numeral lê-se como *no máximo quatro* — a quantidade deixa de ser exata e o facto fica vago. São quatro, medidas. |

### 1.3 Erro de sentido herdado (corrigido só no espanhol)

**guevara P3** — antes: «la pantalla reconstruida … **coincide con la original en 0 de 61.440 píxeles**».
Agora: «**no difiere de la original en ninguno de sus 61.440 píxeles**».

Lido em espanhol, «coincide en 0 de 61.440» diz **o contrário** do facto: que não coincide
em píxel nenhum. O zero ali é contagem de *divergências*, não de coincidências. A casa já
tem a fórmula certa publicada em espanhol — `build/es-ct.mjs`: «*coincide con el mockup
con 0 píxeles de diferencia*».

> **Para o dono:** a mesma inversão está no pt («bate com a original em 0 de 61.440
> pixels») e no en («matches the original at 0 of 61,440 pixels»), ambos já assinados.
> **Não os toquei** — reporto, como manda a regra.

### 1.4 As duas `linha` refeitas, e o teste de sequência

Li as treze `linha` seguidas, como quem rola a home. Dois achados.

**(a) Três aberturas iguais em fila (1, 2, 3).** As três abriam com sintagma nominal sem
verbo, e a 2 e a 3 eram gémeas ao nível do esqueleto: *[rótulo do jogo + ano]. [segunda
frase com ponto e vírgula]*.

```
2.  Dragon Ball en cartas, 1989.   El número de defensa era…; ahora es…
3.  El fútbol por menú de 1988.    En España llegó sin licencia,…; este parche traduce…
```

Isto não vem do pt nem do en — o pt do Tsubasa é «Super Campeões, o futebol por menu de
1988 — com Benji no gol…» e o en abre «The 1988 game that invented football by menu.». O
molde nasceu na redação espanhola.

Refiz a 3, que era também onde havia um segundo problema (ver abaixo):

```
antes  El fútbol por menú de 1988. En España llegó sin licencia, con Tsubasa convertido
       en Robin Field; este parche traduce el cartucho japonés.
agora  En España este fútbol por menú de 1988 perdió la licencia y Tsubasa se volvió
       Robin Field. Este parche traduce el cartucho japonés.   (131)
```

O segundo problema: **«llegó sin licencia» lê-se como cartucho pirata.** Para o público
retro espanhol, *sin licencia* é uma categoria — Tengen, Camerica, os cartuchos não
autorizados pela Nintendo. Não foi isso: foi a Tecmo a retirar a licença de *Captain
Tsubasa* da sua própria edição ocidental. «Perdió la licencia» diz o facto sem a
armadilha. O gancho espanhol (Espanha · Robin Field) fica intacto, e continua a não
repetir o «como + título inglês» que a linha seguinte (Nekketsu / *River City Ransom*) já
usa — por isso não pus «como *Tecmo Cup*» aqui, apesar de ser a formulação mais óbvia.

**(b) A 6 e a 7 eram gémeas, coladas uma na outra.** Mesmo esqueleto e mesmo pivô de
travessão:

```
6.  El RPG en el que Zoffy, Ace, Taro y Seven son muñecos cabezones — y el bestiario…
7.  La secuela en la que los Ultras guardan kaiju en cápsulas — y donde la cápsula…
```

Com a 4 («La serie de matones … que Occidente conoció como…») e a 5, davam **quatro
aberturas sem verbo em fila**, três delas no molde *artigo + substantivo + «que»*. Refiz a
7, não a 6, porque a 7 tinha os dois defeitos (o molde e o travessão):

```
agora  En esta secuela los Ultras guardan kaiju en cápsulas, y la cápsula de la
       página 8, que colgaba el combate, cayó antes que el texto.   (131)
```

Mantém «secuela», que é a informação que emparelha as duas fichas, e mantém o fecho «cayó
antes que el texto» que a nota do tradutor justifica pelo limite de 150.

---

## 2. O que quis mudar e decidi não mudar

- **«conteo de líneas» (captain-tsubasa P3).** Em Espanha diz-se *recuento*. Mas
  `build/es-ct.mjs`, já publicado e já revisto, escreve «sin tocar el guion, el marco ni el
  **conteo** de líneas». Trocar na copy punha o site a discordar da sua própria página de
  features. Coerência da casa ganha à preferência peninsular.
- **«Misisipi» (tom-sawyer P1).** É a grafia da RAE e é a que Espanha usa. O tradutor já a
  deixou sinalizada na `notas` para o dono. Não é erro; é decisão editorial, e não a
  reabro. Se o dono preferir *Mississippi*, é uma palavra.
- **«nazcan rechazables» (ultraman-club-3 P2).** Torcido, mas *nacer* + adjetivo é
  construção viva em espanhol («nace muerto», «nace condenada»), e a metáfora é a mesma
  nas três línguas assinadas. Não é calque, é escolha.
- **«despertaron una escena de 1991» (famicom-jump-2 linha).** *Despertar* com objeto
  abstrato existe em espanhol (*despertar sospechas*). Com «escena» estica, mas é a
  metáfora da casa nas três línguas e o parágrafo 3 confirma-a («una escena volvió a
  funcionar»). Deixei.
- **`%` sem espaço** (98%, 19%, 0,2%, 100%). A RAE pede espaço fino. O pt e o en do site
  escrevem colado, e mudar só no espanhol criava disparidade tipográfica na mesma página.
  Fica como está; se o dono quiser normalizar, é nas três.
- **1 e 2 continuam ambas a abrir sem verbo.** Duas seguidas não é fórmula — o conteúdo é
  radicalmente diferente (lista de nomes × título + ano). Corrigi a fila de três; parei aí.
- **Ultraman explicado na 5 e pressuposto na 6.** Verifiquei o defeito de «forasteiro numa
  ficha, iniciado na seguinte» que apareceu no inglês. Aqui **não acontece**, e por sorte da
  ordem do catálogo: a linha 5 (Gaia Saver) apresenta «Ultraman es el héroe gigante de la
  televisión japonesa» **imediatamente antes** de a 6 listar Zoffy, Ace, Taro e Seven. O
  leitor chega iniciado porque a ficha anterior o iniciou. Se a ordem da home mudar, este
  par deixa de funcionar.

---

## 3. Registo, glossário e regras duras — conferidos

- **Tuteo em todos os treze.** Varri `vosotros` / `ustedes`: zero. As formas verbais e
  possessivas são todas de 2.ª do singular (`tengas`, `tus pies`, `leíste`, `jugaste`,
  `te manda`, `avanzas`, `luchas`, `diriges`, `sacas`, `estás leyendo`, `empiezas`,
  `retomas`, `has leído`, `te inventas`). O único impessoal — «uno pensaría» — é neutro e
  legítimo em Espanha.
- **Sem regionalismo forte de nenhuma das duas margens.** Nada de *chaval*, *tío*, *mola*,
  *gambeta*, *carpa*, *relajo*, *computadora*, *celular*. O léxico de Espanha aparece onde
  interessa: *tienda de campaña*, *mazmorra*, *fiables*, *coste*, *cifras*, *pila*,
  *fotogramas*, *volcado*, *matón de instituto*.
- **Glossário.** As formas fixadas que o texto usa estão todas certas: **Bolas de Dragón**
  (nunca *Esferas del Dragón*), **Karin** (nunca *Korin*), **Piccolo**, **Taruruto** e
  **Ta-chan** (e não *Taruruto-kun* / *Tar-chan*, que é o que o pt e o en usam e o que o
  espanhol publicado da rodada 1 ainda mostra — corrigido de propósito), **Goku**,
  **JoJo**, **Ryotsu**, **Momotaro**, **Taison**, **Kochikame**, **santuario**.
  **Mutenroshi**, **Krilin**, **Nube Kinton** e **Judía Mágica** não aparecem no texto —
  nada a corrigir, e nenhuma das variantes proibidas foi usada no lugar delas.
- **Tsubasa.** Elenco japonês, como manda `notas/estilo_es.md` §3 e `NOTAS.md:323`.
  Nenhum vestígio de «Oliver y Benji». **regate / pase / tiro** batem com o que a build ES
  escreve — `roteiro/es_B.tsv` linhas B041 / B040 / B039. (Nota: `build/es.mjs` publicado
  diz *remate*; é copy da rodada 1, que vai ser substituída por esta.)
- **Sem exclamação, `¡` incluído.** Zero.
- **`linha` <= 150:** máximo agora é 147 (tom-sawyer). **`resumo`:** três parágrafos em
  todos. **`&`:** só `&amp;`, no Gozonji. **Tags:** só `<b> <i> <code>`, equilibradas.
- **Rodada 3 sem número de progresso.** `guevara`, `gozonji` e `magic-knight-rayearth-2`
  só trazem factos de motor e do cartucho (28 colunas, 16×4, 83 glifos, 128 entradas de
  dicionário, 96 px, 12 caracteres, MMC1→MMC3, 256→512 KB, 31.524 bytes, 3.581 linhas).
  Nenhum «x de y traduzidos», nenhuma percentagem de avanço — os únicos `%` são «100% kana»
  e «19% más en bytes», ambos factos do cartucho. Nenhum dos três explica ou justifica o
  nível, e nenhum diz o que falta.
- **Nenhuma ficha diz o que falta.** Os cinco projetos sem patch fecham com as fórmulas da
  casa, alternadas de propósito: «No hay parche que instalar» (×4, com fecho diferente em
  cada) e «Sin enlace de descarga» (Gaia). Nenhuma traz diagnóstico ao lado.

---

## 4. Parecer sobre os dois factos exclusivos do espanhol

### 4.1 Captain Tsubasa — *Tecmo Cup* / Robin Field / 1993

**Sustenta-se. Assino.**

O facto está medido e triangulado em `~/ct-hack/notas/nomes_localizacoes.md` §2.1:
lançamento em Espanha em **junho de 1993**, mesmo cartucho com a licença retirada, Tsubasa
→ **Robin Field** loiro e adulto, seleções renacionalizadas. §2.1 marca «Robin Field» como
corroborado fora do Fandom (es.wikipedia e Hardcore Gaming 101), e a renacionalização das
seleções é atestada pela Wikipédia inglesa. Não é o material fraco do Fandom.

E é o **análogo exato** do que o pt e o en já fazem. O pt engancha no elenco da Manchete
porque a build PT usa aqueles nomes; o en engancha nas dezasseis letras latinas. Nenhum
dos dois é neutro — cada um pega o que fala ao seu leitor. Para o leitor espanhol o gancho
é este: **ele provavelmente jogou este cartucho e não sabia que era Captain Tsubasa.**
Isso é melhor que qualquer facto de engenharia, e resolve de vez o problema que o
`REGRAS_ES.md` sinaliza — a ficha espanhola precisava de gancho próprio e não podia cair
em «Oliver y Benji», que nem em Espanha foi o nome.

O que o parágrafo afirma não passa da fonte: não diz que a versão espanhola é má, não
promete patch em espanhol, não usa nenhum nome do conjunto Tecmo Cup no elenco.

**Ressalva única, para o dono:** hoje este dado não existe em lado nenhum do site. Se
alguém traduzir a página espanhola de volta para pt/en, aparece um facto órfão. Se a
paridade estrita for a preferência, a alternativa está pronta e é barata — o gancho das
dezasseis letras latinas, que o inglês já usa, cabe na `linha` sem tocar no resumo.

### 4.2 Guevara — a dedicatória citada, e a terceira linha

**Sustentam-se os dois. Assino.**

*A citação.* `~/guevara-hack/fonte/textos.py:24` grava, para ES,
`("A CHE GUEVARA", "HÉROE DE LA", "REVOLUCIÓN CUBANA")`. O que a página mostra ao leitor
espanhol é exatamente o que o jogo lhe vai mostrar. Isto é mais forte que uma glosa, e não
é facto a mais: ocupa o mesmo lugar da frase que o pt e o en preenchem com a tradução
corrida. É o mesmo princípio do glossário — o site tem de falar como o patch fala.

*A terceira linha.* `~/guevara-hack/fonte/dedicatoria.py:50-55`, no docstring do `monta()`:
«*Com 28 colunas so cabem DUAS linhas (118 B); o espanhol precisa de tres, e cabe porque as
linhas dele sao mais estreitas — a largura e medida, nao fixa*». E `textos.py:21` mostra
porquê: HÉROE DE LA REVOLUCIÓN CUBANA tem 29 colunas contra as 28 da caixa. É facto de
**motor**, não de progresso — não muda quando a tradução fechar. Passa na regra da rodada 3.

**Uma observação, não um pedido de alteração.** O parágrafo 1 escreve a dedicatória com um
único ponto médio — `A CHE GUEVARA · HÉROE DE LA REVOLUCIÓN CUBANA` — enquanto o parágrafo
2 diz que em espanhol são três linhas. Um leitor atento conta dois segmentos e três linhas.
Não corrigi porque a alternativa fiel (`… · HÉROE DE LA · REVOLUCIÓN CUBANA`) parte um
sintagma nominal a meio e fica pior em prosa corrida, e porque a nota do tradutor já declara
que o ponto médio é recurso de prosa e não fac-símile de ecrã. Fica registado.

---

## 5. Gozonji — a disciplina do letreiro

**Mantida.** Nenhuma passagem afirma o que a tela de título mostra como **nome do jogo**.

O que o texto faz, e pode fazer:
- trata *The Misadventures of Yaji & Kita* como nome próprio, com glosa em aposto («las
  desventuras de Yaji y Kita») — a glosa é serviço ao leitor que não lê inglês, não é
  afirmação sobre o ecrã;
- cita o original, `Gozonji: Yaji Kita Chin Douchuu`, logo na primeira frase, como manda a
  regra;
- diz **explicitamente** que «el nombre en inglés es la elección de esta traducción; el
  juego nunca tuvo uno» — ou seja, nega o carácter oficial em vez de o insinuar. A HAL não é
  invocada em lado nenhum.

A única afirmação sobre o ecrã é o **subtítulo**, e está na fonte:
`~/gozonji-hack/graficos/conv_subtitulo.py:28` grava
`["THE UNRULY TOWNSMAN", "SLASHES HIS WAY THROUGH", "TOKAIDO'S 53 STATIONS!"]`. É o mesmo
que o en afirma — paridade cumprida.

*Detalhe conferido:* a build termina o subtítulo com **ponto de exclamação** e a copy cita-o
sem ele. Não é infidelidade por descuido: a regra da casa proíbe exclamação, o inglês
assinado faz o mesmo corte, e a citação é do texto, não da pontuação. Deixei.

---

## 6. O que precisa de decisão do dono

1. **A inversão dos 61.440 píxeles no pt e no en do Guevara** (§1.3). Corrigida em espanhol;
   as outras duas continuam a dizer, à letra, que a tela reconstruída coincide com a
   original em zero píxeis. São textos já assinados — não lhes toquei.
2. **Paridade estrita, se a quiser:** o gancho *Tecmo Cup* do Tsubasa é o único ponto em
   que o espanhol afirma um facto que o pt e o en não afirmam (§4.1). Recomendo manter, e a
   substituição está identificada caso decida o contrário.
3. **`Misisipi` × `Mississippi`** (tom-sawyer). Uma palavra, sinalizada pelo tradutor.
4. **`build/es.mjs` está desatualizado** em relação a esta copy: os três jogos que já têm
   espanhol publicado (`famicom-jump-2`, `captain-tsubasa`, `dragon-ball-3`) trazem ainda a
   rodada 1, com *Taruruto-kun*, *Tar-chan* e *remate* — formas que esta revisão corrigiu
   por glossário. Aplicar a copy substitui as três; até lá, o site contradiz o patch.

---

**Assinado.** Revisor editorial (espanhol de Espanha) — 08/09/2026.
`consenso_es.json` passa `valida_es.py` limpo. Aprovo os treze para publicação, com a
ressalva 4.1 registada e as quatro decisões acima em aberto para o dono.
