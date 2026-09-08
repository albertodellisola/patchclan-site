# -*- coding: utf-8 -*-
"""Monta a pagina de REVISAO das propostas de copy (nada e' alterado no site).
Uso: python3 copy/monta_pagina.py [arquivos...]  -> copy/propostas.html
"""
import json, os, sys, html

ORDEM = ['famicom-jump-2','dragon-ball-3','captain-tsubasa','nekketsu-kakutou-densetsu',
         'gaia-saver','ultraman-club-2','ultraman-club-3','tom-sawyer','hanjuku-hero','monster-maker']
NOME = {'famicom-jump-2':'Famicom Jump II','dragon-ball-3':'Dragon Ball 3: Gokuden',
        'captain-tsubasa':'Captain Tsubasa','nekketsu-kakutou-densetsu':'Nekketsu Kakutou Densetsu',
        'gaia-saver':'Gaia Saver (Super Famicom)','ultraman-club-2':'Ultraman Club 2',
        'ultraman-club-3':'Ultraman Club 3','tom-sawyer':"Square's Tom Sawyer",
        'hanjuku-hero':'Hanjuku Hero','monster-maker':'Monster Maker'}
NIVEL = {'famicom-jump-2':('release','#2e7d32'),'dragon-ball-3':('release','#2e7d32'),
         'captain-tsubasa':('beta','#ef6c00'),'nekketsu-kakutou-densetsu':('alfa','#c62828'),
         'gaia-saver':('beta','#ef6c00'),'ultraman-club-2':('fila · patch EN publicado','#455a64'),
         'ultraman-club-3':('fila','#455a64'),'tom-sawyer':('fila · beta interno','#455a64'),
         'hanjuku-hero':('fila','#455a64'),'monster-maker':('fila','#455a64')}

def carrega(cam):
    if not os.path.exists(cam): return None
    return {x['slug']: x for x in json.load(open(cam, encoding='utf-8'))}

def bloco(x, li):
    if not x: return '<i class=falta>— não entregue —</i>'
    L = html.escape(x['linha'][li])
    ps = ''.join(f'<p>{p}</p>' for p in x['resumo'][li])
    return (f'<div class=linha><span class=tag>home</span> {L}'
            f'<span class=cont>{len(x["linha"][li])} car.</span></div>'
            f'<div class=resumo><span class=tag>página do projeto</span>{ps}</div>')

def monta(fontes, saida='copy/propostas.html'):
    dados = [(rot, carrega(cam)) for rot, cam in fontes]
    dados = [(r, d) for r, d in dados if d]
    col = ''.join(f'<th>{html.escape(r)}</th>' for r, _ in dados)
    linhas = []
    for slug in ORDEM:
        nv, cor = NIVEL[slug]
        for li, rot in (('pt', 'Português'), ('en', 'English')):
            cel = ''.join(f'<td>{bloco(d.get(slug), li)}</td>' for _, d in dados)
            if li == 'pt':
                linhas.append(f'<tr class=cab><td colspan={len(dados)+1}>'
                              f'<h2>{html.escape(NOME[slug])} '
                              f'<span class=nivel style="background:{cor}">{nv}</span></h2></td></tr>')
            linhas.append(f'<tr><th class=idioma>{rot}</th>{cel}</tr>')
    open(saida, 'w', encoding='utf-8').write(f"""<!doctype html><meta charset=utf-8>
<title>Patch Clan — propostas de copy</title>
<style>
 body{{font:15px/1.55 -apple-system,Segoe UI,Roboto,sans-serif;margin:0;background:#f4f4f6;color:#1a1a1a}}
 header{{background:#111;color:#fff;padding:18px 26px}}
 header h1{{margin:0;font-size:19px}} header p{{margin:6px 0 0;opacity:.75;font-size:13px}}
 table{{border-collapse:collapse;width:100%}} td,th{{vertical-align:top;padding:12px 14px;border:1px solid #dcdce2}}
 th{{background:#e9e9ee;text-align:left;font-size:13px;width:110px}}
 tr.cab td{{background:#111;color:#fff;border:0;padding:16px 26px 10px}}
 tr.cab h2{{margin:0;font-size:17px}}
 .nivel{{font-size:11px;padding:2px 8px;border-radius:10px;margin-left:10px;vertical-align:middle;letter-spacing:.4px}}
 thead th{{background:#c9c9d2;font-size:14px;width:auto;text-align:center}}
 .tag{{display:inline-block;font-size:10px;letter-spacing:.6px;text-transform:uppercase;
      background:#111;color:#fff;padding:1px 7px;border-radius:9px;margin-right:8px;vertical-align:2px}}
 .linha{{background:#fffbe6;border-left:3px solid #f0b429;padding:10px 12px;margin-bottom:10px;font-weight:600}}
 .cont{{float:right;font-weight:400;font-size:11px;color:#777}}
 .resumo{{background:#fff;border-left:3px solid #cfcfd8;padding:10px 12px}}
 .resumo p{{margin:0 0 9px}} .resumo p:last-child{{margin:0}}
 .falta{{color:#999}} .idioma{{background:#f4f4f6;font-weight:600}}
</style>
<header><h1>Patch Clan — propostas de copy dos 10 projetos</h1>
<p>Revisão. <b>Nada foi alterado no site.</b> Cada jogo traz o gancho da home (amarelo)
e o texto da página do projeto, em português e inglês.</p></header>
<table><thead><tr><th></th>{col}</tr></thead><tbody>{''.join(linhas)}</tbody></table>""")
    return saida

if __name__ == '__main__':
    fontes = [('Copywriter A — gancho', 'copy/proposta_A.json'),
              ('Copywriter B — prova', 'copy/proposta_B.json'),
              ('CONSENSO', 'copy/consenso.json')]
    print(monta([f for f in fontes if os.path.exists(f[1])]))
