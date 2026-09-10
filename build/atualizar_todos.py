#!/usr/bin/env python3
"""Regera TODOS os patches publicados a partir das ROMs traduzidas atuais.

    python3 build/atualizar_todos.py                 # confere: o que mudou, sem escrever nada
    python3 build/atualizar_todos.py conferir tsubasa
    python3 build/atualizar_todos.py atualizar       # grava os que mudaram (NAO sobe)
    python3 build/atualizar_todos.py atualizar gaia

POR QUE ISTO EXISTE: o link de cada patch e PERMANENTE — o token no nome e sorteado
uma vez (`patreon_patches.py`) e o upload sobrescreve o mesmo objeto. Entao atualizar
uma traducao e' regerar o IPS COM O MESMO NOME. Isto e' otimo para quem baixou o link,
e perigoso aqui: gravar o patch errado substitui o bom em silencio, na mesma URL.

Dai as tres guardas, todas por medicao e nenhuma por confianca:

1. A ROM ORIGINAL e conferida por md5 contra `patches_fonte.json`. Dump trocado aborta
   aquele patch — um IPS gerado da base errada aplica e produz lixo.
2. O IPS gerado e APLICADO DE VOLTA na original e comparado byte a byte com a
   traduzida. So grava se reproduzir.
3. A PASTA nunca e escolhida: o patch e gravado onde o arquivo de mesmo nome ja esta
   (`patches/` = release, `patches-privados/` = beta/alfa). Patch novo, ou promocao de
   nivel, e trabalho da skill `atualizar-site` — esta aqui so refaz o que ja existe,
   e por isso nao consegue mudar link nem vazar beta para o repositorio publico.

Quem NAO tem `traduzida` no manifesto esta pendente de decisao humana (qual build e a
canonica) e e' saltado com o motivo impresso. Adivinhar ali seria publicar errado.

Depois de `atualizar`, o resto e o caminho de sempre:
    python3 build/patreon_patches.py subir     # mesmo link, conteudo novo
    node build/gerar.mjs                       # remede o tamanho mostrado no cartao
    git add -A && git commit && git push       # so os release vao pro git
"""
import hashlib, json, pathlib, subprocess, sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent
HOME = pathlib.Path.home()
MANIFESTO = RAIZ / 'build' / 'patches_fonte.json'
sys.path.insert(0, str(RAIZ / 'build'))
import gerar_ips


def gerar_bps(orig: pathlib.Path, novo: pathlib.Path) -> bytes:
    """O BPS tem gerador proprio no robopon64-hack: IPS nao serve a ROM de 32 MB."""
    sys.path.insert(0, str(HOME / 'robopon64-hack' / 'scripts'))
    import fazer_bps
    return fazer_bps.gerar(str(orig), str(novo))


def verificar_bps(orig: pathlib.Path, patch: bytes, alvo: bytes, tmp: pathlib.Path) -> bool:
    import fazer_bps
    tmp.write_bytes(patch)
    return fazer_bps.aplicar(str(orig), str(tmp)) == alvo


def onde_esta(base: str, fmt: str):
    for pasta in ('patches', 'patches-privados'):
        p = RAIZ / pasta / f'{base}.{fmt}'
        if p.exists():
            return p
    return None


def rodar(escrever: bool, busca: str | None):
    man = json.loads(MANIFESTO.read_text())
    alvos = {k: v for k, v in man.items() if not busca or busca.lower() in k.lower()}
    if not alvos:
        sys.exit(f'nada casa com "{busca}". Ha: ' + ', '.join(sorted(man)))

    mudou, igual, pulado, erro = [], [], [], []
    tmp = RAIZ / '.tmp_patch'

    for base in sorted(alvos):
        e = alvos[base]
        fmt = e['formato']
        atual = onde_esta(base, fmt)

        if 'traduzida' not in e:
            pulado.append((base, e.get('pendente', 'sem `traduzida` no manifesto')))
            continue
        if atual is None:
            pulado.append((base, f'nao existe {base}.{fmt} em patches/ nem em patches-privados/ — '
                                 'primeira publicacao e trabalho da skill atualizar-site'))
            continue

        orig, trad = HOME / e['original'], HOME / e['traduzida']
        if not orig.exists():
            erro.append((base, f'ROM original ausente: {e["original"]}')); continue
        if not trad.exists():
            erro.append((base, f'ROM traduzida ausente: {e["traduzida"]}')); continue

        ob = orig.read_bytes()
        if 'md5_original' in e and hashlib.md5(ob).hexdigest() != e['md5_original']:
            erro.append((base, f'md5 da ROM original nao bate — {e["original"]} nao e o dump esperado'))
            continue

        alvo = trad.read_bytes()
        try:
            novo = gerar_ips.gerar(ob, alvo) if fmt == 'ips' else gerar_bps(orig, trad)
        except Exception as ex:
            erro.append((base, f'gerar falhou: {ex}')); continue

        ok = (gerar_ips.aplicar(ob, novo) == alvo) if fmt == 'ips' else verificar_bps(orig, novo, alvo, tmp)
        if not ok:
            erro.append((base, 'o patch gerado NAO reproduz a ROM traduzida — nada gravado')); continue

        velho = atual.read_bytes()
        if novo == velho:
            igual.append((base, atual.parent.name, len(novo)))
            continue

        mudou.append((base, atual, len(velho), len(novo), trad))
        if escrever:
            atual.write_bytes(novo)

    if tmp.exists():
        tmp.unlink()

    verbo = 'GRAVADO' if escrever else 'MUDOU'
    print(f'\n=== {verbo} ({len(mudou)}) ===' if mudou else '\n=== nenhum mudou ===')
    for base, p, a, b, trad in mudou:
        print(f'  {base:32s} {p.parent.name:17s} {a//1024:4d} KB -> {b//1024:4d} KB   '
              f'de {trad.relative_to(HOME)}')
    if igual:
        print(f'\n=== já em dia ({len(igual)}) ===')
        for base, pasta, n in igual:
            print(f'  {base:32s} {pasta:17s} {n//1024:4d} KB')
    if pulado:
        print(f'\n=== pendente de decisão ({len(pulado)}) ===')
        for base, por in pulado:
            print(f'  {base}\n      {por}')
    if erro:
        print(f'\n=== ERRO ({len(erro)}) ===')
        for base, por in erro:
            print(f'  {base}\n      {por}')

    if mudou and escrever:
        print('\nGravado. O link de cada um continua o mesmo. Falta:\n'
              '  python3 build/patreon_patches.py subir\n'
              '  node build/gerar.mjs\n'
              '  git add -A && git commit -m "..." && git push')
    elif mudou:
        print('\nNada foi escrito. Para gravar:  python3 build/atualizar_todos.py atualizar')
    return 1 if erro else 0


if __name__ == '__main__':
    cmd = sys.argv[1] if len(sys.argv) > 1 else 'conferir'
    if cmd not in ('conferir', 'atualizar'):
        print(__doc__); sys.exit(2)
    sys.exit(rodar(cmd == 'atualizar', sys.argv[2] if len(sys.argv) > 2 else None))
