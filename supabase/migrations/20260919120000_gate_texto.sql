-- Gate do texto do site — regra do dono (19/09/2026).
-- O site diz testado/jogado/conferido, nunca COMO: nada de bot, robô que joga, teste
-- automático, emulador sem janela, harness, roteiro de botões, speedrun assistido, nem IA.
-- Mesma lista do build/gate_texto.mjs (que barra o texto do repositório no gerar.mjs).
-- Mudou lá, mude aqui. O painel mostra a mensagem do erro ao salvar.

create or replace function public.gate_texto() returns trigger
language plpgsql as $fn$
declare
  t text;
  r record;
  teste constant text := '(test\w*|prueb\w*|probad\w*|jog(a|ou|ad\w*|ando|atina)|play(s|ed|ing|through)?|jueg(a|an)|jug(ó|ad\w*|ando)|partida\w*|gameplay|qa|verific\w*|conferid\w*|reproduz\w*|reproduc\w*|rota\w*|routes?|ruta\w*|captur\w*)';
  auto  constant text := '(autom[aá]t\w*|automatiz\w*|automated|automation)';
  robo  constant text := '(bots?|rob[oô]s?|robots?)';
  perto constant text := '[^.;:!?]{0,60}';
begin
  t := regexp_replace(to_jsonb(new)::text, '<[^>]+>', '', 'g');
  t := regexp_replace(t, 'Ace Robot|Robot Poncots|Robopon', '·', 'g');   -- nomes do jogo
  for r in select * from (values
    ('\mbots?\M', false, 'bot'),
    ('\m' || robo || '\M' || perto || '\m' || teste || '\M', false, 'robô que joga/testa'),
    ('\m' || teste || '\M' || perto || '\m' || robo || '\M', false, 'jogado/testado por robô'),
    ('\m' || auto || '\M' || perto || '\m' || teste || '\M', false, 'automação no teste/jogo'),
    ('\m' || teste || '\M' || perto || '\m' || auto || '\M', false, 'teste/jogo automático'),
    ('\mheadless\M|\mno window\M|\mwithout (a|any) window\M|\msem (abrir )?janela\M(?! de)|\msin (abrir )?ventana\M(?! de)|sem abrir nada|sin abrir nada', false, 'emulador sem janela'),
    ('\mharness|\m(driven by|dirigid[oa] por|guiad[oa] por)\s+(um |a |un )?(lua|script|roteiro|guion)|\mlua (harness|script)', false, 'emulador dirigido por script'),
    ('\mtool[- ]assisted\M|speedrun\w* assist|assisted speedrun|\minput scripts?\M|\mroteiros? de (botões|entrada|input)|\mguion(es)? de (botones|entrada)', false, 'jogada por roteiro'),
    ('piloto autom[aá]tico|\mauto-?pilot\M|sem interven[cç][aã]o humana|without human|sin intervenci[oó]n humana|\munattended\M|desassistid', false, 'sem gente jogando'),
    ('\m(joga|jogou|jogam)\s+sozinh|\mplays? (it|them)sel(f|ves)\M|\mplayed (it|them)sel(f|ves)\M|\mjuegan? sol[oa]s?\M|\mjugó sol[oa]\M', false, 'joga sozinho'),
    ('\m(joga|jogou|jogam|plays?|played|juega|juegan|jugó)\M[^.]{0,20}\m(pelas|by|según|segun|conforme)\s+(as |the |las |its |sus )?(próprias |own |propias )?(regras|rules|reglas)\M', false, 'joga pelas regras'),
    ('\mca[cç]adora\M|\mcazadora\M', false, 'caçadora'),
    ('\m(IA|AI|LLMs?|TAS)\M', true, 'IA / TAS'),
    ('intelig[eê]ncia artificial|artificial intelligence|\mchatgpt\M|\mgpt-?[0-9]|\mopenai\M|\manthropic\M|machine learning|aprendizad[oa] de m[aá]quina|aprendizaje autom[aá]tico', false, 'IA'),
    ('\m(dois|duas|two|dos|tr[eê]s|three|[0-9]+)\s+agent(e|es|s)\M|\magent(e|es|s)?\s+(de revis|revisor|review)', false, 'agentes de revisão')
  ) as v(padrao, sensivel, nome)
  loop
    if (r.sensivel and t ~ r.padrao) or (not r.sensivel and t ~* r.padrao) then
      raise exception 'Texto barrado (%): o site diz só testado, jogado, conferido — sem contar que foi automatizado. Trecho: %',
        r.nome,
        substring(t from greatest(1, (select position(lower(m[1]) in lower(t)) from regexp_match(t, '(' || r.padrao || ')', case when r.sensivel then '' else 'i' end) m) - 60) for 180);
    end if;
  end loop;
  return new;
end
$fn$;

drop trigger if exists gate_texto on public.content;
drop trigger if exists gate_texto on public.posts;
drop trigger if exists gate_texto on public.games;
create trigger gate_texto before insert or update on public.content for each row execute function public.gate_texto();
create trigger gate_texto before insert or update on public.posts   for each row execute function public.gate_texto();
create trigger gate_texto before insert or update on public.games   for each row execute function public.gate_texto();
