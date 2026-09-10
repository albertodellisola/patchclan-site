-- CONTAGEM DE DOWNLOAD DOS PATCHES DE BETA E ALFA.
--
-- O beta/alfa nao baixa do site: mora no bucket `patches` do Storage, com um TOKEN
-- no nome, e o link vai na pagina do Patreon do jogo. O Storage entrega o arquivo e
-- nao conta nada — nao ha contador por objeto, e o log do plano gratuito dura um dia.
--
-- Entao o link do Patreon deixa de apontar para o arquivo e passa a apontar para a
-- funcao `baixar`, que registra uma linha aqui e redireciona (302) para o Storage.
-- O token sai da URL publica de quebra: quem tem o link tem o link, nao o objeto.
--
-- O release NAO passa por aqui: ele baixa do GitHub Releases, que ja conta sozinho
-- (build/contagem_downloads.py). Sao dois caminhos porque sao duas naturezas — um e
-- publico e de graca, o outro e entregue a quem apoia.

-- O mapa base -> arquivo no Storage. Quem escreve e `build/patreon_patches.py subir`,
-- que ja e dono do token; a funcao so le. Fica no banco, e nao no manifesto local,
-- porque a funcao roda no servidor e nao enxerga arquivo desta maquina.
create table if not exists public.patch_arquivo (
  base       text primary key,
  arquivo    text not null,
  nivel      text not null default 'beta',
  atualizado timestamptz not null default now()
);

-- Uma linha por download. Evento, e nao contador incrementado: contador so responde
-- "quantos"; a linha responde tambem "quando" e "quantos diferentes", que e o que
-- diz se um patch tem publico ou teve um pico e parou.
create table if not exists public.patch_download (
  id      bigserial primary key,
  base    text not null,
  em      timestamptz not null default now(),
  ip_hash text,
  ua      text
);
create index if not exists patch_download_base_em on public.patch_download (base, em desc);

alter table public.patch_arquivo  enable row level security;
alter table public.patch_download enable row level security;

-- Nenhuma policy para `anon`: o publico nao le a contagem nem descobre o nome do
-- arquivo no Storage. A funcao escreve como service_role, que ignora RLS.
create policy patch_arquivo_read_admin  on public.patch_arquivo  for select to authenticated using (true);
create policy patch_download_read_admin on public.patch_download for select to authenticated using (true);

-- PRIVILEGIOS. RLS filtra a LINHA; grant libera a TABELA. Sem isto o painel e a
-- funcao batem em "permission denied" mesmo com a policy certa.
grant select                         on public.patch_arquivo, public.patch_download to authenticated;
grant all                            on public.patch_arquivo, public.patch_download to service_role;
grant usage, select on sequence public.patch_download_id_seq to service_role;
