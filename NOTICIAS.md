# Notícias do Patch Clan: como pôr mais de uma no ar

Pedido do dono (30/09/2026): "mudar o site para permitir mais de uma notícia", para ter a do beta
do Super Robot Wars 64 e a do Super Robot Taisen Link Battler ao mesmo tempo.

O site mostra notícia em três lugares. Os dois primeiros guardavam UMA só; agora os três são lista.

| Lugar | De onde sai | O que mudou |
|---|---|---|
| Seção **Última notícia** da home (antes das traduções) | `build/posts.mjs` (`POSTS`) e a tabela `posts` do Supabase | mostra os `NOTICIAS_NA_HOME` posts mais novos, não só o primeiro |
| **Faixa de anúncio** no topo de toda página | `ANUNCIOS` em `build/corpo.html` | virou lista; aparece um por vez |
| Página **Atualizações** (`#/atualizacoes`) e "Últimas atualizações" no pé da home | os mesmos posts | cada post ganhou endereço próprio |

## 1. Notícia nova na home

Uma notícia é um **post**. Entra no **começo** da lista `POSTS` de `build/posts.mjs` (mais nova
primeiro; o `gerar.mjs` aborta fora de ordem), com este formato:

```js
  { date:"2026-09-30", build:"beta", tag:"<nome curto do jogo>", jogo:"<slug da ficha do jogo>",
    title_pt:"…", title_en:"…", title_es:"…",
    body_pt:["parágrafo 1", "parágrafo 2"],
    body_en:["paragraph 1", "paragraph 2"],
    body_es:["párrafo 1", "párrafo 2"] },
```

- `date`: AAAA-MM-DD. `build`: o selo ao lado da data (`beta`, `v1.5`…). `tag`: o nome do jogo.
- `jogo`: o slug da página do jogo. A **imagem** da notícia é a `capa` desse jogo e o link
  "Página do jogo" vai para `#/jogo/<slug>`. Sem página com capa em `shots/`, o build aborta:
  **a ficha do jogo entra antes (ou junto) da notícia.**
- `title_*` e `body_*` nos três idiomas. O cartão da home mostra o **primeiro parágrafo**, cortado
  em 165 letras; o texto inteiro aparece em Atualizações. HTML simples vale (`<b>`, `<i>`, `<a>`).
- O texto passa pelo `build/gate_texto.mjs` (nada de bot, robô, IA, emulador sem janela).

Depois, na mesma `build/posts.mjs`, dizer **quantas** notícias abrem a home:

```js
export const NOTICIAS_NA_HOME = 2;   // era 1
```

São sempre as N mais novas. Com 1 sai o cartão grande de sempre; com 2 a 4 saem cartões compactos,
lado a lado no desktop e empilhados no celular (2 e 4 fecham a grade; com 3 sobra um cartão sozinho
na segunda linha). Os posts seguintes descem para "Últimas atualizações". Para uma notícia sair do
destaque, baixar o número: ela continua em Atualizações.

**O site no ar lê os posts do Supabase, não do `posts.mjs`.** Post novo vai nos dois: no arquivo
(é o que aparece se o banco não responder) e na tabela `posts`, pelo painel (`painel.html`, aba Blog,
"+ Nova atualização", escolhendo o jogo) ou como foi feito com o do SRW64. Se o post ficar só no
arquivo, a home no ar mostra como 2ª notícia o post do Slam Dunk, que é o 2º mais novo do banco.
`NOTICIAS_NA_HOME` não passa pelo banco: só muda por aqui, com build e push.

## 2. Anúncio novo na faixa do topo (opcional)

Em `build/corpo.html`, acrescentar um item no **começo** da lista `ANUNCIOS`:

```js
    { ativo: true, id: 'linkbattler-beta-2026-09', nome: 'Super Robot Taisen Link Battler',
      link: '<post do beta no Patreon>',
      tt:  {en:'…', pt:'…', es:'…'},      // linha amarela, em letra de pixel
      s:   {en:'…', pt:'…', es:'…'},      // a frase
      cta: {en:'Get the beta', pt:'Pegar o beta', es:'Consigue la beta'},
      // opcionais — imagem é decisão do dono (página no Chrome):
      logo: 'shots/<pasta>/banner-logo-90.png', logoW: <largura>,   // 90 px de altura
      logoM: 'shots/<pasta>/banner-logo-56.png', logoMW: <largura>, // 56 px de altura, celular
      fundo: 'shots/<pasta>/banner-fundo.jpg' },
```

Sem `logo`, o nome do jogo sai em letra de pixel; sem `fundo`, a faixa fica lisa e escura. Com dois
anúncios ativos a faixa **não cresce**: aparece um por vez, o mais novo primeiro, trocando a cada
mudança de página e pelo botão `1/2 ›`. O ✕ fecha só o que está na tela (por visitante; quem já
tinha fechado o do SRW64 continua sem vê-lo). Tirar um do ar: `ativo: false`. Texto de anúncio segue
a regra dos Arautos: beta sai pelo Patreon, nunca "free".

## 3. O que a aba de publicação faz

1. Trazer este branch para o da ficha do Link Battler (`git merge noticias-multiplas`). Os dois mexem
   no topo de `build/posts.mjs`; se der conflito, ficam as duas coisas: a linha `NOTICIAS_NA_HOME` e
   o post novo no começo de `POSTS`. `index.html` em conflito não se resolve à mão: regerar.
2. Pôr o post do Link Battler no começo de `POSTS` (copy aprovada, três idiomas) e
   `NOTICIAS_NA_HOME = 2`. Se o dono quiser a faixa, o item em `ANUNCIOS`.
3. `ln -s ~/patchclan-site/patches-privados patches-privados` (se a worktree não tiver) e
   `node build/gerar.mjs`. A última linha de `jogos:` diz `notícias na home: 2`.
4. Abrir o `index.html` gerado em 390 px e 1280 px e olhar as duas notícias.
5. `git add` só dos arquivos mexidos (`patches-privados` é link e **não** entra), commit, push na
   `main`, e o post do Link Battler na tabela `posts` do Supabase.
6. Conferir no ar: a home com as duas notícias e `#/atualizacoes` com o post novo no topo.

## Prova do layout (30/09/2026)

Screenshots em `~/patchclan-noticias-prova/` (fora do repositório): home com 1 notícia (estado real),
com 2 e com 3 (item de teste, que não entrou no commit), em 390 px e 1280 px, nos três idiomas.
Sem rolagem horizontal em nenhum. Altura da seção com 2 notícias: 424 px no desktop (449 com uma) e
716 a 767 px no celular (634 a 701 com uma).
