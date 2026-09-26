-- Blog em espanhol: o site já lê title_es/body_es (cai no inglês quando vazio).
alter table public.posts add column if not exists title_es text   not null default '';
alter table public.posts add column if not exists body_es  text[] not null default '{}';
notify pgrst, 'reload schema';
