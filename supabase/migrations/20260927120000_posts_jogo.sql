-- Regra do dono (27/09/2026): toda postagem do blog tem a thumbnail que o site já usa para o
-- jogo dela. O post guarda o slug do jogo; a thumbnail é a capa da página desse jogo.
alter table public.posts add column if not exists jogo text not null default '';
update public.posts set jogo = 'slam-dunk'               where jogo = '' and tag = 'Slam Dunk';
update public.posts set jogo = 'magic-knight-rayearth-2' where jogo = '' and tag = 'Magic Knight Rayearth 2';
