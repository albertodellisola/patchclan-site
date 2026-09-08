# -*- coding: utf-8 -*-
"""Página de revisão da RODADA 2 — as quatro propostas lado a lado (+ consenso quando existir).
Reusa copy/monta_pagina.py; só troca as fontes e corrige a régua de nível para a do site.
Uso: python3 copy/rodada2/monta.py   -> copy/rodada2/propostas2.html
"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))
import monta_pagina as mp

# a verdade do site hoje (build/ + patches/), não a do briefing da rodada 1
mp.NIVEL = {
    'famicom-jump-2':            ('release · patch en pt es', '#2e7d32'),
    'dragon-ball-3':             ('beta · patch en',          '#ef6c00'),
    'captain-tsubasa':           ('release · patch en pt',    '#2e7d32'),
    'nekketsu-kakutou-densetsu': ('alfa · sem patch',         '#c62828'),
    'gaia-saver':                ('alfa · sem patch',         '#c62828'),
    'ultraman-club-2':           ('alfa · patch en',          '#c62828'),
    'ultraman-club-3':           ('fila',                     '#455a64'),
    'tom-sawyer':                ('fila',                     '#455a64'),
    'hanjuku-hero':              ('fila',                     '#455a64'),
    'monster-maker':             ('fila',                     '#455a64'),
}

R2 = 'copy/rodada2/'
FONTES = [('Anime A — quem conhece', R2 + 'anime_A.json'),
          ('Anime B — quem não conhece', R2 + 'anime_B.json'),
          ('jRPG A — as melhorias', R2 + 'jrpg_A.json'),
          ('jRPG B — a prova', R2 + 'jrpg_B.json'),
          ('CONSENSO 2', R2 + 'consenso2.json')]

if __name__ == '__main__':
    presentes = [f for f in FONTES if os.path.exists(f[1])]
    if not presentes:
        sys.exit('nenhuma proposta da rodada 2 no disco ainda')
    print(mp.monta(presentes, saida=R2 + 'propostas2.html'))
    print('colunas:', ', '.join(r for r, _ in presentes))
