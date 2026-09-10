# Patch Clan — site

`patchclan.com`. Estático no Cloudflare Pages, conteúdo editável no Supabase.
Sem framework e sem bundler: os arquivos que sobem são os que estão aqui.

## O que o site é

Uma página só (`index.html`) com navegação por hash:

| rota | o que mostra |
|---|---|
| `#/` | herói com CTAs, projeto em destaque, projetos, "não é só tradução", 3 últimas atualizações, Patreon, promessas |
| `#/projetos` | todos os projetos, agrupados por estado |
| `#/jogo/<slug>` | ficha, abas, números, o que mudou, telas, download |
| `#/manual/<slug>` | o manual do jogador, escrito sobre o jogo TRADUZIDO |
| `#/atualizacoes` | o blog inteiro |
| `#/sobre` | quem, regras da casa, promessas |
| `#/apoie` | os níveis do Patreon |

**O menu tem quatro itens e não cresce com o catálogo:** Projetos · Atualizações ·
Sobre · ♥ Apoie. Jogos e manuais **não** entram no menu — um jogo se acha por
Projetos, e um manual pertence ao seu projeto. Isso é o que faz o site aguentar
30 projetos com o mesmo cabeçalho.

**A home encolhe sozinha.** Só as três últimas atualizações aparecem, em resumo;
o resto vive em `#/atualizacoes`. A home terá o mesmo tamanho em 2030.

Cinco projetos na lista; o resto está na fila. Um arquivo de dados cada em `build/`:

| slug | jogo | nível |
|---|---|---|
| `famicom-jump-2` | Famicom Jump II | release |
| `dragon-ball-3` | Dragon Ball 3 | release, English v1.0 |
| `captain-tsubasa` | Captain Tsubasa | beta |
| `nekketsu-kakutou-densetsu` | Nekketsu Kakutou Densetsu | alfa |
| `gaia-saver` | Gaia Saver (**Super Famicom**) | alfa |

**Quatro projetos foram rebaixados para a fila em 07/09/2026** — Ultraman Club 2 e 3,
Square's Tom Sawyer e Hanjuku Hero. Os dados deles **continuam** em `jogo-tom.mjs` e
`jogos-novos.mjs`, fora do array `JOGOS`: voltam trocando uma linha em `gerar.mjs`.
Uma rota `#/jogo/<slug>` de projeto fora da lista cai na página de projetos.

**Por isso a fila mistura dois casos** — cartuchos já abertos e medidos, e cartuchos
ainda por abrir. A intro dela diz isso; não diz mais "sem uma linha de código escrita",
que era verdade quando a fila só tinha candidatos de triagem.

Os cinco primeiros ficam em `build/jogo-*.mjs` (um por arquivo, os mais detalhados) e os
cinco novos em `build/jogos-novos.mjs`. **A ordem do array `JOGOS` em `gerar.mjs` é a
ordem que aparece** — os quatro primeiros são os que a home mostra.

**Três níveis, e só três.** Cada jogo tem `nivel: 'release' | 'beta' | 'alfa'` — não
existe outro estado. O placar do herói, os grupos da página de projetos e o selo de
cada card leem esse único campo; acrescentar um jogo não pede editar número nenhum.

A régua está escrita na página de projetos e é a mesma escada do Patreon:

| nível | o que significa | quem recebe primeiro |
|---|---|---|
| **release** | jogo inteiro em inglês, cada linha lida, patch publicado, nada pendente | todo mundo, de graça |
| **beta** | **já foi jogado** do começo ao fim em inglês, mas há pendências listadas e falta a leitura final | Bank Switch |
| **alfa** | não se sabe se atravessa: texto incompleto, telas japonesas, sem build, **ou uma build que ninguém jogou inteira** | The Seventh Hero |

## A fila NÃO é um quarto nível

`release`, `beta` e `alfa` dizem **o que dá para jogar hoje**. A fila diz **o que ainda
não começou** — é outra pergunta, e misturar as duas estragaria a régua: um jogo sem
uma linha de código escrita não pode ter selo na mesma escala de um patch jogável.

Por isso a fila (`SEED.fila`) vive no fim da página de projetos como **lista numerada,
sem selo, sem card e sem screenshot** — não há trabalho para mostrar — e **não entra no
placar do herói**, que conta projetos com trabalho feito.

Cada item traz o motivo de estar lá, e o critério é o mesmo da triagem: **órfão de
série**. Um item traz ressalva explícita ("a conferir antes de começar") porque há sinal
de projeto alheio ativo — checar isso **antes** de investir é o método que a triagem
provou (palpite de apelo acerta; palpite de disponibilidade erra 6 em 8).

A lista também é o assunto do tier **Bank Switch**, que promete participação nas
pesquisas sobre os próximos jogos.

## O que o site conta, e o que não conta

**Só release documenta o trabalho.** A página de um projeto tem duas formas, decididas
pelo campo `nivel`:

| | release | beta e alfa |
|---|---|---|
| Números | sim | não |
| "O que mudou" (as features) | sim | não |
| Telas | sim | sim |
| Download | sim | sim (esmaecido) |

**O site nunca diz por que um projeto é alfa ou beta.** Nada de "falta a senha", "o menu
continua em japonês", "ninguém jogou até o fim". O texto visível de um projeto inacabado
descreve **o jogo**, não o estado do trabalho — e há um bloco explicando que a lista
completa sai quando ele virar release.

O material técnico **não foi apagado**: os `grupos` continuam nos arquivos de dados,
prontos para aparecer no dia em que o nível subir. Ao acrescentar um projeto novo,
escrever a linha e o resumo **sobre o jogo**; o que falta vai para as notas do projeto,
nunca para o site.

**O nível descreve o que já foi FEITO, não o que está montado.** É a diferença entre
"os bytes certos estão lá" e "alguém atravessou o jogo em inglês". Dois casos fecharam
essa régua:

- **Nekketsu** — texto 100% traduzido e inglês confirmado na tela, mas só existe
  `build/en_teste.nes`; a build final nunca foi gerada.
- **Ultraman Club 2** — a `build20` está montada, com as 447 mensagens e round-trip
  verificado, mas ninguém jogou essa build de ponta a ponta.

Nos dois, medição não é travessia. Beta exige a travessia.

**A versão do patch aparece em dois lugares, e só neles:** a ficha da página do projeto
e o cabeçalho do bloco de download. **Não** entra no selo nem na home — quem está
passando pela lista quer saber se existe patch, não qual build. O campo é `versao` no
arquivo do jogo, e projeto sem versão declarada simplesmente não mostra a linha.

**As bandeiras saem de `patches/`, não de uma lista.** Ao lado do selo de nível, cada
projeto mostra a bandeira dos idiomas em que o patch **existe como arquivo**. Um idioma
só acende quando o `.ips` dele está na pasta — não há como o site anunciar uma tradução
que não se baixa. Alfa sem patch não mostra bandeira nenhuma.

**Um arquivo para vários idiomas vira UM cartão, não três.** Quando todas as versões de
`patch.versoes` apontam para o mesmo `arquivo`, o bloco de download deixa de ser a grade
de três cards — que seriam três vezes o mesmo link — e vira o cartão `.patch-uno`: as
bandeiras dos idiomas lado a lado numa faixa, o nome do arquivo, o tamanho e **um botão
só**. Quem decide é o dado (`arquivoUnico()` em `corpo.html`), não uma flag por jogo. É o
caso do **Guevara**, cuja ROM carrega os três idiomas dentro e troca por menu.

O texto explicando COMO se escolhe o idioma é do jogo, não do renderizador: campo
opcional `patch.nota`, um `bi()`, mostrado dentro do cartão. No Guevara: SELECT na tela
de título.

**A home mostra quatro projetos, não todos.** `jogos.slice(0, 4)`, com "ver todos os N"
logo abaixo — o N se conta sozinho. Com nove projetos a home continua do mesmo tamanho.

**A grade de projetos tem colunas fixas (4 / 2 / 1), não `auto-fit`.** Com `auto-fit`,
um grupo de um item só estica o card para a largura inteira da página, e o quarto card
fica órfão numa linha de três. Foi medido nas duas situações.

**Três idiomas** — inglês, português e espanhol, no seletor com bandeira. O que não
tiver tradução espanhola **cai no inglês**, nunca em branco. O idioma é detectado
pelo navegador na primeira visita e guardado depois.

## Os arquivos

| | |
|---|---|
| `index.html` | o site. **Gerado** — não editar à mão |
| `painel.html` | o painel, com login |
| `config.js` | URL e chave anon do Supabase. **O único arquivo que muda entre local e nuvem** |
| `patches/*.ips` | os patches de distribuição |
| `manuais/*.pdf` | os manuais em PDF, um por jogo e por idioma |
| `shots/` | as capturas de tela, por jogo |
| `build/` | a fonte de tudo. É aqui que se edita |
| `supabase/migrations/` | o esquema do banco |

### Dentro de `build/`

| | |
|---|---|
| `head.html` | todo o CSS (identidade Famicom) |
| `corpo.html` | a estrutura e o renderizador |
| `seed.mjs` | abertura, Patreon, regras, quem, rodapé |
| `jogo-*.mjs` | um por jogo: ficha, números, features, fotos, patch |
| `manual-*.mjs` | um manual por jogo (o Tom Sawyer ainda não tem) |
| `es*.mjs` | as traduções para o espanhol, que se fundem por caminho |
| `posts.mjs` | o blog |
| `gerar.mjs` | monta `index.html` e `build/artifact.html` |
| `gerar_ips.py` | gera **e valida** um patch IPS |
| `gerar_pdf.py` | imprime os manuais do site em PDF, um por idioma |
| `semear.mjs` | põe o conteúdo no Supabase |

**Regerar o site:** `node build/gerar.mjs`

## Como o site pega o conteúdo

O `index.html` **já vem desenhado** com uma cópia embutida de tudo. Depois de pintar,
tenta ler o Supabase; se conseguir, redesenha e marca `<html data-fonte="supabase">`.

Isso não é enfeite: **se o Supabase cair ou o projeto pausar por inatividade, o site
continua no ar** com a última versão gerada. Sem tela branca, sem spinner.

## O que o painel edita, e o que não edita

**Edita** (vai ao ar na hora, sem subir arquivo): abertura, regras, quem, rodapé,
os níveis do Patreon, o blog, e de cada jogo o **selo de status** e a **frase de chamada**.

**Não edita, por desenho:** as features, as fotos, a ficha técnica e os manuais.
Isso é estrutura, não conteúdo do dia a dia — mora em `build/` e passa por `gerar.mjs`.

## Gerar um patch novo

```bash
python3 build/gerar_ips.py <rom_original.nes> <rom_traduzida.nes> patches/<nome>.ips
```

Ele **gera e confere**: aplica o patch recém-criado na ROM original e compara o
resultado byte a byte com a ROM traduzida. Se divergir, aborta e não grava nada.

Para acender o bloco de download de um idioma novo, preencha a entrada em
`build/jogo-*.mjs` → `patch.versoes.<idioma>` com o nome do arquivo. O tamanho o
gerador lê do próprio arquivo. Idioma sem entrada aparece **esmaecido** no site.

## Gerar os manuais em PDF

```bash
python3 -m http.server 8899 &        # o gerador imprime a página de verdade
python3 build/gerar_pdf.py
```

**O PDF não é um documento separado.** É o mesmo manual do site, impresso pela
folha de estilo `@media print` — capa própria, sem menu, sem rodapé, prints em
tamanho de papel. Trocar o texto em `build/manual-*.mjs` e regerar troca o PDF;
não há duas fontes de verdade para corrigir.

O gerador **não inventa arquivo**: se o PDF de um idioma não existir em `manuais/`,
o bloco daquele idioma aparece **esmaecido** no site, igual aos patches. O botão
"Baixar em PDF" do topo do manual some quando não há nenhum.

**Estado em 07/09/2026:** os nove PDFs estão em `manuais/_rascunho/`, fora do ar, à
espera de revisão do texto. Para publicá-los, mover de volta para `manuais/` (ou
rodar `gerar_pdf.py`, que grava lá) e regerar o site.

## Ligar num projeto Supabase de verdade

1. Crie o projeto **na sua conta** — o CLI está logado na do Tomei Gosto.
2. `supabase link --project-ref <ref>` e `supabase db push`.
3. Dashboard → Authentication → Add user → **Auto Confirm**.
4. Preencha `config.js` com a URL e a chave **anon**.
5. `SB_URL=... SB_KEY=<service_role> ADMIN_EMAIL=... ADMIN_PASS=... node build/semear.mjs`

## Armadilhas medidas

**`grant` não vem de graça.** Tabela criada em `public` não dá privilégio ao
`service_role` nem ao `authenticated` sozinha. RLS filtra a LINHA; `grant` libera a
TABELA. Sem os dois, o painel toma `42501 permission denied` com a policy certa.
Está no fim da migration — não apague.

**A chave anon vai pro navegador, e tudo bem.** O que protege é a RLS. O que NÃO
pode vazar é a `service_role`, que ignora RLS inteira: ela só aparece em variável
de ambiente, nunca em arquivo.

**Portas locais: faixa 548xx** (`supabase/config.toml`). As faixas 543xx a 545xx são
de outros projetos e um túnel SSH ocupava a 547xx. API em `:54801`, Studio em `:54803`.

**O Colima cai sozinho e o disco é apertado.** Antes de `supabase start`, conferir
`colima status` e `df -h /`. Parar os dois ao terminar.

**O placar do herói é calculado, não digitado.** "3 projetos · 1 lançado · 2 betas"
sai da contagem dos jogos; a data do último build sai do primeiro post. Acrescentar
um jogo atualiza o número sozinho.

**O jogo da primeira dobra é escolhido, não fixo.** Quem tiver `destaque: true`
em `build/jogo-*.mjs` ocupa a vitrine. Quando o Captain Tsubasa estiver perto de
sair, é mover a flag — a home fica viva sem precisar de carrossel.

**Tinta sobre o vermelho é variável, não `#fff`.** No tema claro o vermelho é
escuro e pede tinta branca; no escuro ele clareia e branco cai para 2,93:1. A
variável `--sobre-accent` resolve nos dois. Nunca escrever `color:#fff` sobre
`var(--accent)`.

**Não existe card falso de "próximo projeto".** A estrutura aceita um quarto jogo;
ela não finge que ele existe. Quando houver, ele aparece.

**Os manuais são escritos sobre o jogo traduzido, não sobre o scan japonês.** Todo
comando citado é a string exata que aparece na tela — extraída de `menus_en.py`
(Famicom Jump II) e dos roteiros `en_*.tsv` (Captain Tsubasa). Trocar um termo no
patch obriga a trocar no manual.

## Deploy no Cloudflare Pages

Sobem: `index.html`, `painel.html`, `config.js`, `patches/`, `shots/`.
Não sobe: `build/`, `supabase/`.

---

# NO AR — 07/09/2026

## Onde tudo mora

| | |
|---|---|
| **Site** | https://www.patchclan.com |
| **Painel** | https://www.patchclan.com/painel.html |
| **Repositório** | https://github.com/albertodellisola/patchclan-site |
| **Supabase** | projeto `patchclan`, ref `zmmxzjmhpxyqwvhqdfyw`, conta `albertorezende6@gmail.com`, região São Paulo |
| **Domínio** | GoDaddy, conta `albertodellisola@gmail.com` |

**As credenciais estão em `~/patchclan-site/.env.local`** — token do Supabase, senha do
banco, chaves da API, e o e-mail e a senha do painel. O arquivo é `600` e está no
`.gitignore`. **Ele nunca foi para o GitHub** — confira com `git log --all -- .env.local`
antes de acreditar no contrário.

## Como publicar uma mudança

```bash
node build/gerar.mjs      # regera o index.html
git add -A && git commit -m "..." && git push
```

O GitHub Pages republica sozinho em um ou dois minutos. **Não editar `index.html` à mão:**
ele é gerado, e o próximo `gerar.mjs` apaga a edição.

## O que passa pelo painel e o que não passa

Pelo **painel**, sem tocar em arquivo: abertura, regras, quem, rodapé, níveis do Patreon,
blog, e de cada jogo o selo e a frase de chamada. Vai ao ar na hora.

Pelo **repositório**: features, fotos, ficha técnica, manuais, a fila e a régua dos níveis.
Exige `gerar.mjs` + push.

## DNS, como ficou

| tipo | nome | valor |
|---|---|---|
| A | @ | 185.199.108.153 · .109 · .110 · .111 (GitHub Pages) |
| CNAME | www | albertodellisola.github.io. |

O A de "Parked" da GoDaddy e o CNAME `www → patchclan.com` foram apagados. O
`_domainconnect` e o `_dmarc` continuam lá, sem conflito.

**O certificado HTTPS é emitido pelo GitHub depois que o DNS assenta** — leva de minutos
a algumas horas na primeira vez. Enquanto não sai, o domínio responde vazio. Para forçar
HTTPS depois que ele existir:

```bash
gh api -X PUT repos/albertodellisola/patchclan-site/pages -F https_enforced=true
```

---

# Prints por idioma — 07/09/2026

O leitor em português vê a tela **em português**, quando aquele jogo tem patch naquele idioma.

## A convenção

Uma variante mora em `shots/<jogo>/<idi>/<arquivo>.png`, com o **mesmo nome de arquivo**
do print base em `shots/<jogo>/`. Nada se cadastra à mão:

- `build/gerar.mjs` tem `variantes()`, que **varre o disco** e monta o mapa base → variante.
  Variante sem print base correspondente é ignorada com aviso no console.
- O mapa entra no `corpo.html` por `__SHOTS_IDI__`; `img(f, l)` resolve e **cai no print base**
  quando aquele idioma não tem captura. É isso que faz o Score Memo do Tsubasa continuar em
  inglês sem virar link quebrado.
- No `artifact.html` os prints são `data:` URI, então lá o mapa é chaveado pelo data: URI do
  base, não pelo caminho.

**A armadilha do renderizador:** a troca de idioma é só CSS (`body[data-lang]` esconde os
`<span>`), então imagem nenhuma se re-renderiza sozinha. Cada `<img>` leva `data-shot` com o
caminho base, e `idioma()` chama `repintaFotos()`. **Emitir `<img>` sempre por `foto()`** —
`<img>` escrito à mão no HTML não troca de idioma.

## O que existe hoje

| | pt | es |
|---|---|---|
| Famicom Jump II | 6 telas | 6 telas |
| Captain Tsubasa | 7 telas | — (não há patch em espanhol) |

FJ2: menu, prólogo, espírito, lista dos sete, "E você também, Goku", SoulRing. Título e
créditos **não têm variante de propósito** — as builds pt/es mostram as mesmas telas.
CT: título (*SUPER CAMPEÕES · RUMO AO SONHO*), sala de aula, narração, ficha, em jogo, senha
e o carregado-da-bateria. Falta só o **Score Memo**: só se chega a ele terminando uma partida.

## Como acrescentar variantes de um jogo

1. Capturar no emulador do hack. **O roteiro Lua calibrado num idioma não serve noutro** — o
   texto traduzido tem outro comprimento e o percurso desliza uma tela inteira. Varrer denso
   (uma foto a cada 30 quadros), montar folha de contato e escolher **por conteúdo**.
   O Captain Tsubasa tem `~/ct-hack/mesen/site_pt.lua` pronto para as duas telas difíceis.
2. Copiar para `shots/<jogo>/<idi>/` com o mesmo nome do print base.
3. **Reler a legenda daquele idioma.** O print traduzido denuncia legenda escrita só para o
   inglês: três contradiziam o próprio print ao lado ("a abertura, agora em inglês" com tela
   em português; `SCOUT/MEMO/PLAY` e `16th All-Japan Jr. Cup` no Tsubasa, que em PT são
   `Info/Senha/Jogar` e `16a Copa Nacional Juvenil`).
4. `node build/gerar.mjs` e push. **Legenda não precisa re-semear** — a hidratação do Supabase
   só sobrescreve status/linha/resumo/nome/subtitulo/categoria; `fotos[].c` vem só do build.

## Dois defeitos de ROM que apareceram na captura

- **A tela de senha do patch inglês publicado do Captain Tsubasa ainda está em japonês**
  (`-スコアメモ シュート!-`). Medido aplicando o `patches/captain-tsubasa-en.ips` do site sobre a
  ROM original. A build portuguesa traduziu ("…CHUTE A SUA SENHA!…"). O Tsubasa está
  classificado **RELEASE**, e release é o único nível em que o site publica a lista fechada.
- **A tela de créditos das builds pt/es do FJ2 está em inglês** — `TRANSLATED, FIXED,
  IMPROVED`, igual à inglesa. O Dragon Ball 3 já faz diferente (queima `PORTUGUES V1.0`).

Nenhum dos dois foi corrigido.

## O que mais mudou no mesmo dia

- O print de créditos do FJ2 no site era de um build antigo; trocado pelo do build 13.3, que
  é o que o patch publicado entrega.
- Tirada do tier **Two Bytes**, nos três idiomas, a linha "Cerca de uma hora de trabalho por
  mês…". **Foram dois lugares:** `build/seed.mjs` **e** a linha `patreon` da tabela `content`
  no Supabase — só o build não bastaria, a hidratação traria o texto de volta.

# Beta e alfa saem pelo Patreon — 10/09/2026

**Só `release` baixa de graça pelo site.** Todo patch beta ou alfa é entregue pela
página do Patreon daquele jogo. Como o Patreon não hospeda arquivo, o arquivo mora no
**Storage do Supabase**, e o que se cola lá é o link direto dele.

## As duas pastas não servem à mesma coisa

| pasta | quem | vai pro git? | quem serve |
|---|---|---|---|
| `patches/` | release | **sim** | o próprio site, `patchclan.com/patches/<arquivo>` |
| `patches-privados/` | beta e alfa | **não** (gitignored) | ninguém — o site só MEDE o tamanho aqui |

O arquivo de beta/alfa continua existindo localmente porque o `gerar.mjs` precisa dele
para duas coisas visíveis: o **tamanho** que o cartão mostra e a **bandeira** do idioma
no selo. O site nunca o serve.

`gerar.mjs` **aborta** se um jogo não-release tiver o arquivo dentro de `patches/`.
Falhar alto é melhor do que vazar: até 09/09/2026 os quatro patches de beta/alfa
estavam no repositório público, e o botão "No Patreon" do site era enfeite — bastava
abrir `github.com/albertodellisola/patchclan-site/tree/main/patches` para baixar tudo.

## O token no nome é o porteiro

```bash
python3 build/patreon_patches.py subir     # sobe/atualiza as duas pastas
python3 build/patreon_patches.py link gaia # o link direto de um jogo
python3 build/patreon_patches.py link      # a tabela inteira
```

Bucket público `patches` no projeto `zmmxzjmhpxyqwvhqdfyw`. O nome carrega um token
sorteado — `gaia-saver-en-86b726c3.ips`. Medido em 10/09/2026, sem o token não se
chega ao arquivo: a listagem do bucket devolve `[]` para a chave anônima, listar sem
chave nenhuma dá 400, e o nome sem token dá 400.

**O token é sorteado UMA vez e guardado em `.links-patreon.json`, fora do git.**
Reconstruir o patch mantém a URL — se ela mudasse, toda página do Patreon envelheceria
a cada build. O manifesto é o registro, não um cache: apagá-lo sorteia tudo de novo e
quebra os links já publicados no Patreon.

## O link do Patreon de cada jogo

O `corpo.html` já sabia disso desde sempre: `destinoPatch(g)` devolve `g.patreon`
quando o jogo não é release, e cai no Patreon da casa quando a ficha não tem o campo.
Para apontar um jogo à sua própria página, é uma linha na ficha:

```js
// build/jogo-<slug>.mjs, ou o bloco do jogo em jogos-novos.mjs / jogos-r34.mjs
patreon: 'https://www.patreon.com/posts/...',
```

**O histórico do git ainda tem os quatro arquivos** que já haviam sido publicados
(`gaia-saver-en`, `ultraman-club-2-en`, `pocket-monsters-stadium-en`, `robopon-64-en`).
Tirá-los da árvore não os tira dos commits antigos. Para os próximos, o caminho já
nasce certo; para estes, só `git filter-repo` — e não vale o estrago de reescrever a
história por patch de alfa que já circulou.

## Tom Sawyer, Gozonji e Hanjuku entram — e um gerador de IPS estava quebrado

Em 10/09/2026 os três ganharam patch pelo Patreon. Nenhum tinha IPS no ar, e os três
arquivos que existiam nas pastas dos projetos eram **mais velhos que a ROM construída**
— foram regerados do build atual.

**O `faz_ips.py` do tom-hack entregava patch quebrado.** O `break` do laço pulava o
`j += 1`, então cada registro saía sem o último byte e trecho de 1 byte sumia inteiro —
inclusive o byte 4 do cabeçalho iNES, o que declara 512 KB. 129 bytes errados; o patch
aplicava e devolvia uma ROM que não era a traduzida. Ele não se denunciava porque **só
media tamanho**. Agora aplica o próprio patch de volta e aborta sem gravar.

**Regra: nenhum IPS entra em `patches/` ou `patches-privados/` sem ter sido aplicado na
ROM original e comparado byte a byte com a traduzida.** O `build/gerar_ips.py` daqui já
faz isso, e tem o laço escrito certo (`while j < n and iguais < 8`, com o `j += 1` antes
do teste) — use-o como referência quando um projeto tiver gerador próprio.

## A lista de links para o Patreon

```bash
python3 build/patreon_patches.py subir      # sobe/atualiza os arquivos
python3 build/gerar_lista_links.py          # monta a lista, no Desktop
```

Sai `~/Desktop/patchclan-links-patreon.html` (botão de copiar por link, marcação de
progresso guardada no navegador, ficha com ROM base e md5 de cada jogo) e o mesmo em
`.txt`. Roda sempre DEPOIS do `subir`, porque lê o manifesto.

**A saída nunca pode ficar dentro deste repositório.** Ela carrega os tokens de todos
os patches de beta e alfa, que são o porteiro do Patreon, e o repositório é público.
Em 10/09/2026 a página foi gerada por engano em `build/` — pega antes do commit, mas o
gerador passou a escrever no Desktop justamente para o engano não se repetir. O script
em si não tem segredo nenhum: ele lê o `.links-patreon.json`, que é gitignored.

Publicar a lista como página hospedada foi barrado pelo classificador, e com razão —
seria pôr numa URL pública a lista inteira de links que existem para não ser públicos.
