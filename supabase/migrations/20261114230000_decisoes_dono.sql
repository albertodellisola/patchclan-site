-- ---------------------------------------------------------------
-- 14/11/2026: página de DECISÕES do dono (patchclan.com/decidir/).
-- Pedido literal: «criar uma pagina dentro do patchclan pra eu decidir por ela, vai ser mais facil, colocar todos».
--
-- PRIVADA: os cartões trazem imagens de tradução que ainda não saiu. Nada aqui é lido por anon, e o
-- "authenticated" não basta (o cadastro do projeto ficou aberto até 14/11/2026): tudo passa por
-- public.eh_dono(), que só aceita a conta do dono (a única do painel.html).
--   decisoes_cartoes   o Mac escreve (service_role, ~/estado-patchclan/decisoes_site.py subir); o dono lê
--   decisoes_respostas o dono grava um registro por clique; o Mac lê (decisoes_site.py baixar) e escreve
--                      ~/estado-patchclan/todos/respostas_site/perguntas_todos_site-*.json,
--                      que o respostas_salvas() da caçadora lê
--   bucket decisoes    PRIVADO; as imagens saem por URL assinada de 1 h, só para o dono
-- ---------------------------------------------------------------

create or replace function public.eh_dono() returns boolean
language sql stable security definer set search_path = public, auth as $$
  select coalesce(auth.uid() = 'c019ed68-01aa-4544-88d3-e8c3c461ef38'::uuid, false)
$$;
revoke all on function public.eh_dono() from public, anon;
grant execute on function public.eh_dono() to authenticated, service_role;

create table if not exists public.decisoes_cartoes (
  chave      text primary key,                 -- «<pasta>::<chave do projeto>», a mesma do PERGUNTAS_DONO.json
  pasta      text not null,
  jogo       text not null,
  tipo       text not null,
  texto      text not null default '',
  imagens    jsonb not null default '[]'::jsonb, -- [{path, w, h, legenda, largo, video}]
  caixas     jsonb not null default '[]'::jsonb, -- [[linha, ...], ...]
  opcoes     jsonb not null default '[]'::jsonb, -- [{id, rotulo, grupo, path, w, h, recomendada}]
  arte       boolean not null default false,
  assinatura text not null,                    -- muda quando imagem ou opção muda: o cartão volta à página
  ocupado    text,                             -- outra aba mexendo no jogo (o cartão aparece mesmo assim)
  ativo      boolean not null default true,    -- false = saiu do levantamento (respondido no projeto)
  atualizado timestamptz not null default now()
);
create index if not exists decisoes_cartoes_ativo_idx on public.decisoes_cartoes (ativo, pasta);

create table if not exists public.decisoes_respostas (
  id         bigint generated always as identity primary key,
  chave      text not null,
  assinatura text not null,
  escolhas   jsonb not null default '{}'::jsonb, -- {grupo|'escolha': {id, rotulo}}, o formato do Salvar antigo
  observacao text not null default '',
  completa   boolean not null default false,     -- todos os grupos escolhidos (também «nenhuma»)
  criado     timestamptz not null default now()
);
create index if not exists decisoes_respostas_chave_idx on public.decisoes_respostas (chave, criado desc);

alter table public.decisoes_cartoes   enable row level security;
alter table public.decisoes_respostas enable row level security;

drop policy if exists decisoes_cartoes_ler on public.decisoes_cartoes;
create policy decisoes_cartoes_ler on public.decisoes_cartoes for select to authenticated using (public.eh_dono());

drop policy if exists decisoes_respostas_ler on public.decisoes_respostas;
create policy decisoes_respostas_ler on public.decisoes_respostas for select to authenticated using (public.eh_dono());

drop policy if exists decisoes_respostas_gravar on public.decisoes_respostas;
create policy decisoes_respostas_gravar on public.decisoes_respostas for insert to authenticated
  with check (public.eh_dono());

-- RLS filtra a LINHA; grant libera a TABELA (ver o init: sem grant até o service_role toma 42501).
revoke all on public.decisoes_cartoes, public.decisoes_respostas from anon;
grant select         on public.decisoes_cartoes   to authenticated;
grant select, insert on public.decisoes_respostas to authenticated;
grant all            on public.decisoes_cartoes, public.decisoes_respostas to service_role;

-- bucket PRIVADO das imagens dos cartões
insert into storage.buckets (id, name, public) values ('decisoes', 'decisoes', false)
  on conflict (id) do update set public = false;

drop policy if exists decisoes_bucket_ler on storage.objects;
create policy decisoes_bucket_ler on storage.objects for select to authenticated
  using (bucket_id = 'decisoes' and public.eh_dono());

-- RESPOSTA PELA METADE VOLTA MARCADA (regra do pendencias_dono.py, 12/11/2026): o que o Salvar antigo já gravou no
-- ~/Downloads entra pré-marcado na página nova.
alter table public.decisoes_cartoes add column if not exists pre jsonb not null default '{}'::jsonb;
