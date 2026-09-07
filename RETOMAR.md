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
