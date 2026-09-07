-- Patch Clan — conteudo do site, posts do blog e prints da galeria.
-- Leitura publica (anon). Escrita so para usuario autenticado (o painel).

create table if not exists public.content (
  key        text primary key,
  value      jsonb       not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.posts (
  id         uuid        primary key default gen_random_uuid(),
  date       date        not null default current_date,
  build      text        not null default '',
  tag        text        not null default '',
  title_pt   text        not null default '',
  title_en   text        not null default '',
  body_pt    text[]      not null default '{}',
  body_en    text[]      not null default '{}',
  published  boolean     not null default true,
  created_at timestamptz not null default now()
);
create index if not exists posts_date_idx on public.posts (date desc);

create table if not exists public.shots (
  id         uuid    primary key default gen_random_uuid(),
  ord        int     not null default 0,
  url        text    not null,
  alt        text    not null default '',
  title_pt   text    not null default '',
  title_en   text    not null default '',
  caption_pt text    not null default '',
  caption_en text    not null default '',
  visible    boolean not null default true
);
create index if not exists shots_ord_idx on public.shots (ord);

alter table public.content enable row level security;
alter table public.posts   enable row level security;
alter table public.shots   enable row level security;

-- leitura publica
drop policy if exists content_read on public.content;
create policy content_read on public.content for select to anon, authenticated using (true);

drop policy if exists posts_read on public.posts;
create policy posts_read on public.posts for select to anon using (published);

drop policy if exists posts_read_admin on public.posts;
create policy posts_read_admin on public.posts for select to authenticated using (true);

drop policy if exists shots_read on public.shots;
create policy shots_read on public.shots for select to anon using (visible);

drop policy if exists shots_read_admin on public.shots;
create policy shots_read_admin on public.shots for select to authenticated using (true);

-- escrita so autenticado
drop policy if exists content_write on public.content;
create policy content_write on public.content for all to authenticated using (true) with check (true);

drop policy if exists posts_write on public.posts;
create policy posts_write on public.posts for all to authenticated using (true) with check (true);

drop policy if exists shots_write on public.shots;
create policy shots_write on public.shots for all to authenticated using (true) with check (true);

-- carimbo de atualizacao
create or replace function public.touch_updated_at() returns trigger
language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists content_touch on public.content;
create trigger content_touch before update on public.content
  for each row execute function public.touch_updated_at();

-- bucket publico dos prints
insert into storage.buckets (id, name, public)
values ('shots', 'shots', true)
on conflict (id) do nothing;

drop policy if exists shots_bucket_read on storage.objects;
create policy shots_bucket_read on storage.objects for select to anon, authenticated
  using (bucket_id = 'shots');

drop policy if exists shots_bucket_write on storage.objects;
create policy shots_bucket_write on storage.objects for all to authenticated
  using (bucket_id = 'shots') with check (bucket_id = 'shots');

-- PRIVILEGIOS. RLS filtra a LINHA; grant libera a TABELA. Sem isto o painel e o
-- proprio service_role tomam 42501 "permission denied", mesmo com policy certa.
grant select                         on public.content, public.posts, public.shots to anon;
grant select, insert, update, delete on public.content, public.posts, public.shots to authenticated;
grant all                            on public.content, public.posts, public.shots to service_role;

-- ---------------------------------------------------------------
-- 06/09/2026: o site passou a ter uma pagina por jogo traduzido.
-- ---------------------------------------------------------------
create table if not exists public.games (
  id      uuid primary key default gen_random_uuid(),
  slug    text unique not null,
  ord     int  not null default 0,
  data    jsonb not null default '{}'::jsonb
);
create index if not exists games_ord_idx on public.games (ord);

alter table public.games enable row level security;

drop policy if exists games_read on public.games;
create policy games_read on public.games for select to anon, authenticated using (true);

drop policy if exists games_write on public.games;
create policy games_write on public.games for all to authenticated using (true) with check (true);

grant select                         on public.games to anon;
grant select, insert, update, delete on public.games to authenticated;
grant all                            on public.games to service_role;
