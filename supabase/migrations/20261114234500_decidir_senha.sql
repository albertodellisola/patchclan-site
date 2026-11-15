-- ---------------------------------------------------------------
-- 14/11/2026, dono: «quero apenas uma senha pro site, sem login».
-- A /decidir/ deixa o Supabase Auth: um campo de senha só. Não é conta de usuário, porque todo "authenticated" pode
-- editar content/posts/shots/games (init.sql), e uma senha curta ali abriria o site inteiro.
--   decidir_config   o HASH bcrypt da senha (gravado à parte, NUNCA neste arquivo: o repositório é público)
--   decidir_sessoes  sha256 do token que a página guarda depois de acertar a senha (vale 180 dias)
--   decidir_tentativas  20 erros em 10 min = recusa todo mundo por 10 min (contra chute)
--   decisoes_urls    URL assinada (30 dias) de cada imagem do bucket privado; o Mac assina e renova
-- O navegador só chama as 4 funções abaixo (anon); as tabelas continuam fechadas para anon e authenticated.
-- ---------------------------------------------------------------

create table if not exists public.decidir_config (
  id int primary key default 1 check (id = 1),
  senha_hash text not null
);
create table if not exists public.decidir_sessoes (
  token_hash text primary key,
  criado timestamptz not null default now(),
  vence timestamptz not null
);
create table if not exists public.decidir_tentativas (
  quando timestamptz not null default now(),
  ok boolean not null
);
create index if not exists decidir_tentativas_quando_idx on public.decidir_tentativas (quando);
create table if not exists public.decisoes_urls (
  path text primary key,
  url text not null,
  vence timestamptz not null
);

alter table public.decidir_config     enable row level security;
alter table public.decidir_sessoes    enable row level security;
alter table public.decidir_tentativas enable row level security;
alter table public.decisoes_urls      enable row level security;
revoke all on public.decidir_config, public.decidir_sessoes, public.decidir_tentativas, public.decisoes_urls
  from anon, authenticated;
grant all on public.decidir_config, public.decidir_sessoes, public.decidir_tentativas, public.decisoes_urls
  to service_role;

create or replace function public.decidir_entrar(senha text) returns text
language plpgsql security definer set search_path = public, extensions as $$
declare h text; tok text; falhas int;
begin
  select count(*) into falhas from decidir_tentativas where not ok and quando > now() - interval '10 minutes';
  if falhas >= 20 then
    raise exception 'Muitas tentativas erradas. Espere 10 minutos.' using errcode = 'P0001';
  end if;
  select senha_hash into h from decidir_config where id = 1;
  if h is null or crypt(coalesce(senha, ''), h) <> h then
    insert into decidir_tentativas (ok) values (false);
    perform pg_sleep(0.5);
    return null;
  end if;
  delete from decidir_tentativas where quando < now() - interval '1 day';
  delete from decidir_sessoes where vence < now();
  tok := encode(gen_random_bytes(24), 'hex');
  insert into decidir_sessoes (token_hash, vence) values (encode(digest(tok, 'sha256'), 'hex'), now() + interval '180 days');
  return tok;
end $$;

create or replace function public.decidir_valido(tok text) returns boolean
language sql stable security definer set search_path = public, extensions as $$
  select exists (select 1 from decidir_sessoes
                 where token_hash = encode(digest(coalesce(tok, ''), 'sha256'), 'hex') and vence > now())
$$;

create or replace function public.decidir_dados(tok text) returns jsonb
language plpgsql stable security definer set search_path = public, extensions as $$
begin
  if not decidir_valido(tok) then
    raise exception 'Sessão vencida: digite a senha de novo.' using errcode = 'P0002';
  end if;
  return jsonb_build_object(
    'cartoes', coalesce((select jsonb_agg(to_jsonb(c) order by c.pasta, c.chave) from decisoes_cartoes c where c.ativo), '[]'::jsonb),
    'respostas', coalesce((select jsonb_agg(to_jsonb(r)) from (
        select distinct on (chave) id, chave, assinatura, escolhas, observacao, completa, criado
        from decisoes_respostas order by chave, criado desc, id desc) r), '[]'::jsonb),
    'urls', coalesce((select jsonb_object_agg(path, url) from decisoes_urls where vence > now()), '{}'::jsonb));
end $$;

create or replace function public.decidir_responder(tok text, p_chave text, p_assinatura text, p_escolhas jsonb,
                                                    p_observacao text, p_completa boolean) returns jsonb
language plpgsql security definer set search_path = public, extensions as $$
declare r public.decisoes_respostas;
begin
  if not decidir_valido(tok) then
    raise exception 'Sessão vencida: digite a senha de novo.' using errcode = 'P0002';
  end if;
  if not exists (select 1 from decisoes_cartoes where chave = p_chave) then
    raise exception 'Cartão não existe mais.' using errcode = 'P0003';
  end if;
  insert into decisoes_respostas (chave, assinatura, escolhas, observacao, completa)
    values (p_chave, coalesce(p_assinatura, ''), coalesce(p_escolhas, '{}'::jsonb), left(coalesce(p_observacao, ''), 4000),
            coalesce(p_completa, false))
    returning * into r;
  return to_jsonb(r);
end $$;

create or replace function public.decidir_sair(tok text) returns void
language sql security definer set search_path = public, extensions as $$
  delete from decidir_sessoes where token_hash = encode(digest(coalesce(tok, ''), 'sha256'), 'hex')
$$;

revoke all on function public.decidir_entrar(text), public.decidir_valido(text), public.decidir_dados(text),
  public.decidir_responder(text, text, text, jsonb, text, boolean), public.decidir_sair(text) from public;
grant execute on function public.decidir_entrar(text), public.decidir_dados(text),
  public.decidir_responder(text, text, text, jsonb, text, boolean), public.decidir_sair(text)
  to anon, authenticated, service_role;
grant execute on function public.decidir_valido(text) to service_role;
