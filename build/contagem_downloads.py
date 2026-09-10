#!/usr/bin/env python3
"""Quantas vezes cada patch foi baixado.

O GitHub Pages serve patches/ sem contar nada — nao ha log nem contador por
arquivo. O GitHub Releases conta: cada asset tem `download_count`, que sobe a
cada download do arquivo, venha do botao do site, de link direto ou de espelho
em forum. Este script le esse campo pela API.

Duas coisas para o numero nao enganar:

  * a contagem INCLUI robo e varredura. A ordem de grandeza e confiavel, o
    digito exato nao.
  * cada versao e uma release propria, e a contagem de cada uma comeca do zero.
    Por isso o total de um jogo aqui e a SOMA das versoes: a v1.1 continua
    contando quem baixou a v1.1.

Uso:  python3 build/contagem_downloads.py
"""
import json
import subprocess
import sys
from collections import defaultdict

REPO = "albertodellisola/patchclan-site"


def releases():
    try:
        crua = subprocess.run(
            ["gh", "api", "--paginate", f"repos/{REPO}/releases"],
            capture_output=True, text=True, check=True,
        ).stdout
    except FileNotFoundError:
        sys.exit("gh nao encontrado — instale o GitHub CLI (brew install gh).")
    except subprocess.CalledProcessError as erro:
        sys.exit(f"a API do GitHub recusou:\n{erro.stderr.strip()}")
    # --paginate concatena listas JSON; normaliza para uma lista so
    saida, dec, i = [], json.JSONDecoder(), 0
    while i < len(crua):
        if crua[i].isspace():
            i += 1
            continue
        obj, i = dec.raw_decode(crua, i)
        saida.extend(obj)
    return saida


def main():
    rels = releases()
    if not rels:
        sys.exit("nenhuma release neste repositorio — nada a contar ainda.")

    por_jogo = defaultdict(list)
    for r in rels:
        for a in r.get("assets", []):
            # o jogo e o nome do arquivo sem o idioma: magic-knight-...-en.ips
            jogo = a["name"].rsplit(".", 1)[0]
            jogo = jogo[:-3] if jogo[-3:-2] == "-" else jogo
            por_jogo[jogo].append((r["tag_name"], a["name"], a["download_count"]))

    largura = max(len(t) for v in por_jogo.values() for t, _, _ in v)
    total_geral = 0
    for jogo in sorted(por_jogo):
        linhas = sorted(por_jogo[jogo])
        soma = sum(c for _, _, c in linhas)
        total_geral += soma
        print(f"\n{jogo}  —  {soma} download(s)")
        for tag, nome, c in linhas:
            print(f"    {tag:<{largura}}  {nome:<38} {c:>6}")
    print(f"\ntotal: {total_geral} download(s) em {len(rels)} release(s)")
    print("inclui robo e varredura — ordem de grandeza, nao digito exato.")


if __name__ == "__main__":
    main()
