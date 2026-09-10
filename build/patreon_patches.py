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
import json, pathlib, secrets, sys, urllib.request

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


def subir():
    sb_url, chave = ambiente()
    man = ler()
    for pasta in PASTAS:
        d = RAIZ / pasta
        if not d.exists():
            continue
        for p in sorted(x for x in d.iterdir() if x.suffix in ('.ips', '.bps')):
            base = p.stem
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
    MANIFESTO.write_text(json.dumps(man, indent=2, ensure_ascii=False) + '\n')
    print(f'\nmanifesto: {MANIFESTO.name} · {len(man)} patches')
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
        subir()
    elif cmd == 'link':
        link(sys.argv[2] if len(sys.argv) > 2 else None)
    else:
        print(__doc__)
        sys.exit(2)
