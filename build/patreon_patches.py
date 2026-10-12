#!/usr/bin/env python3
"""Os patches no Storage do Supabase — os links que vão nas páginas do Patreon.

    python3 build/patreon_patches.py subir          # sobe/atualiza tudo
    python3 build/patreon_patches.py link gaia      # o link direto do arquivo
    python3 build/patreon_patches.py link           # a tabela inteira

POR QUE ISTO EXISTE (decisão do dono, 10/09/2026): só `release` baixa de graça pelo
site. Beta e alfa saem pela página do Patreon do jogo, e o Patreon não hospeda
arquivo — então o arquivo mora aqui, no bucket público `patches`, com um TOKEN no
nome. Sem o token não há como chegar nele: a listagem do bucket devolve vazio para a
chave anônima, e o nome sem token dá 400.

O LINK QUE VAI NO PATREON NÃO É O DO ARQUIVO (desde 10/09/2026): é o da edge
function `baixar`, que registra o download em `patch_download` e só então redireciona
para o Storage. O Storage entrega e não conta — não há contador por objeto, e o log
do plano gratuito dura um dia. De quebra o token some da URL pública. Ler a contagem:
`python3 build/contagem_downloads.py`.

O TOKEN é sorteado UMA vez por arquivo e guardado em `.links-patreon.json` (fora do
git). Reconstruir o patch NÃO muda a URL — se mudasse, toda página do Patreon
envelheceria a cada build. Apagar o manifesto é que sorteia tudo de novo e quebra os
links já publicados; ele é o registro, não um cache.

As duas pastas locais não servem à mesma coisa:
    patches/            release — vai para o repositório público, o site serve
    patches-privados/   beta/alfa — gitignored; o site só MEDE o tamanho aqui
"""
import hashlib, json, pathlib, secrets, subprocess, sys, urllib.request

RAIZ = pathlib.Path(__file__).resolve().parent.parent
MANIFESTO = RAIZ / '.links-patreon.json'
BUCKET = 'patches'
PASTAS = ['patches', 'patches-privados']


def ambiente():
    env = {}
    for linha in (RAIZ / '.env.local').read_text().splitlines():
        if '=' in linha and not linha.strip().startswith('#'):
            k, v = linha.split('=', 1)
            env[k.strip()] = v.strip()
    return env['SB_URL'], env['SB_SERVICE_ROLE']


def ler():
    return json.loads(MANIFESTO.read_text()) if MANIFESTO.exists() else {}


def gate_site(arquivos):
    """GATE (dono, 12/10/2026: "voce nao atualizou no site a versao atual e o blog com o diario de
    alteracoes, coloca no gate, isso nao pode acontecer" e "corrigir no gate pra sempre incluir as
    entradas do diario quando um patch for atualizado"). Nenhum patch sobe para o link do Patreon
    (nem para patches/) sem o SITE PUBLICADO (origin/main, via git fetch; nunca a pasta local,
    que fica para trás) trazer, para AQUELE arquivo:
      1. um jogo cuja ficha aponta para ele (patch.versoes[<idi>].arquivo == nome do arquivo);
      2. a entrada MAIS NOVA do diário daquele jogo que cobre o idioma com md5[<idi>] == md5 do
         arquivo — patch trocado = entrada nova no build/diario.mjs, sempre;
      3. a data ao lado do botão (versoes[<idi>].atualizado) igual à data dessa entrada.
    Ou seja: diário, `node build/gerar.mjs` e push ANTES do upload. Sem flag: SystemExit(5).
    Por quê: em 12/10/2026 a beta 48 do Tom Sawyer subiu ao Patreon e o site seguiu mostrando a
    versão de 10/09 (251 KB) e o diário sem a atualização."""
    import re
    if subprocess.run(['git', '-C', str(RAIZ), 'fetch', '-q', 'origin', 'main']).returncode:
        print('GATE: git fetch falhou; sem o site publicado não há como conferir. Nada subiu.', file=sys.stderr)
        raise SystemExit(5)
    r = subprocess.run(['git', '-C', str(RAIZ), 'show', 'origin/main:index.html'],
                       capture_output=True, text=True)
    m = re.search(r'<script type="application/json" id="seed">(.*?)</script>', r.stdout, re.S)
    if r.returncode or not m:
        print('GATE: não li o JSON do index.html do origin/main. Nada subiu.', file=sys.stderr)
        raise SystemExit(5)

    def jogos(o):
        if isinstance(o, dict):
            if 'slug' in o and 'patch' in o:
                yield o
            for v in o.values():
                yield from jogos(v)
        elif isinstance(o, list):
            for v in o:
                yield from jogos(v)

    ref = {}
    for g in jogos(json.loads(m.group(1))):
        for idi, v in ((g.get('patch') or {}).get('versoes') or {}).items():
            if v and v.get('arquivo'):
                ref.setdefault(v['arquivo'], []).append((g, idi, v))
    erros = []
    for p in arquivos:
        md5 = hashlib.md5(p.read_bytes()).hexdigest()[:8]
        if p.name not in ref:
            erros.append(f'{p.name}: nenhum jogo do site publicado aponta para este arquivo (patch.versoes).')
            continue
        for g, idi, v in ref[p.name]:
            ent = next((e for e in g.get('diario') or [] if idi in (e.get('idiomas') or [])), None)
            if not ent:
                erros.append(f'{p.name}: {g["slug"]}/{idi} sem nenhuma entrada no diário publicado.')
            elif (ent.get('md5') or {}).get(idi) != md5:
                erros.append(f'{p.name} (md5 {md5}): a entrada mais nova do diário de {g["slug"]}/{idi} '
                             f'({ent.get("data")}) é de outro arquivo (md5 {(ent.get("md5") or {}).get(idi)}). '
                             f'Falta a entrada NOVA desta atualização.')
            elif v.get('atualizado') != ent.get('data'):
                erros.append(f'{p.name}: o botão de {g["slug"]}/{idi} diz "atualizado {v.get("atualizado")}", '
                             f'mas a entrada do diário é de {ent.get("data")}: regerar o site.')
    if erros:
        for e in erros:
            print('GATE: ' + e, file=sys.stderr)
        print('Antes de subir: entrada NOVA no topo do jogo em build/diario.mjs (data, versao, idiomas,\n'
              'md5 {<idi>: "<md5>"}, titulo e texto nos três idiomas), versão/etapas na ficha,\n'
              '`node build/gerar.mjs` e push no main — numa cópia do origin/main\n'
              '(git worktree add <pasta> origin/main; ln -s ~/patchclan-site/patches-privados <pasta>/),\n'
              'nunca na ~/patchclan-site atrasada. Só então rodar o subir de novo. Nada subiu.', file=sys.stderr)
        raise SystemExit(5)
    print(f'gate do site: {len(arquivos)} patch(es) no site publicado, com a entrada do diário de cada um')


def subir(filtro=None):
    """Sobe os patches para o Storage, no MESMO objeto de sempre (token do manifesto,
    x-upsert): o link publicado nao muda.

    Com `filtro`, sobe SO os arquivos cujo nome contem o filtro. Sem ele, sobe TODOS os
    de patches/ e patches-privados/ — e um patch regerado e nao aprovado que outra sessao
    tenha deixado na pasta vai ao ar de carona, no link dele, sem aviso."""
    sb_url, chave = ambiente()
    man = ler()
    escolhidos = []
    for pasta in PASTAS:
        d = RAIZ / pasta
        if d.exists():
            escolhidos += [x for x in d.iterdir() if x.suffix in ('.ips', '.bps', '.xdelta')
                           and (not filtro or filtro.lower() in x.stem.lower())]
    gate_site(escolhidos)
    subidos = 0
    for pasta in PASTAS:
        d = RAIZ / pasta
        if not d.exists():
            continue
        for p in sorted(x for x in d.iterdir() if x.suffix in ('.ips', '.bps')):
            base = p.stem
            if filtro and filtro.lower() not in base.lower():
                continue
            subidos += 1
            man.setdefault(base, {'token': secrets.token_hex(4)})
            nome = f"{base}-{man[base]['token']}{p.suffix}"
            dados = p.read_bytes()
            req = urllib.request.Request(
                f'{sb_url}/storage/v1/object/{BUCKET}/{nome}', data=dados, method='POST',
                headers={'Authorization': f'Bearer {chave}', 'apikey': chave,
                         'Content-Type': 'application/octet-stream',
                         'x-upsert': 'true', 'cache-control': '3600'})
            with urllib.request.urlopen(req) as r:
                st = r.status
            man[base].update({'arquivo': nome, 'pasta': pasta, 'origem': p.name,
                              'bytes': len(dados),
                              'url': f'{sb_url}/storage/v1/object/public/{BUCKET}/{nome}'})
            print(f'{st}  {pasta}/{p.name:32s} -> {nome}  ({len(dados)//1024} KB)')
    if filtro and not subidos:
        raise SystemExit(f'nenhum patch com {filtro!r} no nome — nada subiu')
    MANIFESTO.write_text(json.dumps(man, indent=2, ensure_ascii=False) + '\n')
    print(f'\nmanifesto: {MANIFESTO.name} · {len(man)} patches ({subidos} subidos agora)')
    sincronizar(man, sb_url, chave)


def sincronizar(man, sb_url, chave):
    """Espelha o mapa base -> arquivo na tabela `patch_arquivo`.

    A funcao `baixar` roda no servidor e nao enxerga o manifesto, que e local e fora
    do git. Sem este espelho ela nao sabe qual objeto do Storage serve cada patch —
    e o link do Patreon devolve 404 sem dizer por que.
    """
    linhas = [{'base': k, 'arquivo': v['arquivo'],
               'nivel': 'release' if v.get('pasta') == 'patches' else 'privado',
               'atualizado': 'now()'}
              for k, v in sorted(man.items()) if v.get('arquivo')]
    for x in linhas:
        x.pop('atualizado')
    req = urllib.request.Request(
        f'{sb_url}/rest/v1/patch_arquivo?on_conflict=base',
        data=json.dumps(linhas).encode(), method='POST',
        headers={'Authorization': f'Bearer {chave}', 'apikey': chave,
                 'Content-Type': 'application/json',
                 'Prefer': 'resolution=merge-duplicates,return=minimal'})
    with urllib.request.urlopen(req) as r:
        print(f'mapa no banco: {r.status} · {len(linhas)} patches — a funcao `baixar` ja acha todos')


def link(busca=None):
    man = ler()
    achados = {k: v for k, v in man.items() if not busca or busca.lower() in k.lower()}
    if not achados:
        print(f'nada casa com "{busca}". Há: ' + ', '.join(sorted(man)))
        sys.exit(1)
    sb_url, _ = ambiente()
    for k in sorted(achados):
        onde = 'release' if achados[k].get('pasta') == 'patches' else 'beta/alfa'
        print(f'{k}  ({onde})\n  {sb_url}/functions/v1/baixar?p={k}\n')
    print('Estes links CONTAM o download. O link direto do Storage continua existindo\n'
          'no manifesto, mas nao conta nada — nao e ele que vai no Patreon.')


if __name__ == '__main__':
    cmd = sys.argv[1] if len(sys.argv) > 1 else 'link'
    if cmd == 'subir':
        subir(sys.argv[2] if len(sys.argv) > 2 else None)
    elif cmd == 'link':
        link(sys.argv[2] if len(sys.argv) > 2 else None)
    else:
        print(__doc__)
        sys.exit(2)
