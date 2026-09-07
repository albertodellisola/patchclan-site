#!/usr/bin/env python3
"""Gera o PDF de cada manual, um por idioma, a partir da própria página do site.

O PDF não é um documento à parte: é o mesmo manual, impresso pela folha de estilo
de impressão. Trocar o texto no site troca o PDF na próxima geração — não há
duas fontes de verdade.

Uso:  python3 -m http.server 8899 &   e depois   python3 build/gerar_pdf.py
"""
import os, pathlib, sys
from playwright.sync_api import sync_playwright

RAIZ = pathlib.Path(__file__).resolve().parent.parent
BASE = os.environ.get("BASE", "http://127.0.0.1:8899")
JOGOS = ["famicom-jump-2", "captain-tsubasa", "dragon-ball-3"]
IDIOMAS = ["en", "pt", "es"]

(RAIZ / "manuais").mkdir(exist_ok=True)
feitos = []

with sync_playwright() as p:
    nav = p.chromium.launch()
    pg = nav.new_page(viewport={"width": 1100, "height": 1400})
    for slug in JOGOS:
        for idi in IDIOMAS:
            pg.goto(f"{BASE}/index.html#/manual/{slug}", wait_until="load")
            pg.wait_for_selector(".man-sec", timeout=15000)
            pg.evaluate("""(l) => {
                document.body.setAttribute('data-lang', l);
                document.querySelectorAll('img').forEach(i => i.loading = 'eager');
            }""", idi)
            pg.wait_for_timeout(900)
            # as fotos precisam estar decodificadas antes de imprimir
            pg.evaluate("""() => Promise.all(
                [...document.images].filter(i => !i.complete).map(i => i.decode().catch(() => {}))
            )""")
            saida = RAIZ / "manuais" / f"{slug}-{idi}.pdf"
            pg.pdf(path=str(saida), format="A4", print_background=True,
                   margin={"top": "16mm", "bottom": "16mm", "left": "15mm", "right": "15mm"})
            kb = saida.stat().st_size // 1024
            feitos.append((slug, idi, kb))
            print(f"  {saida.name:32} {kb:4} KB")
    nav.close()

print(f"{len(feitos)} PDFs em manuais/")
