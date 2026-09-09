# -*- coding: utf-8 -*-
"""Página de revisão da RODADA 3 — os três jogos novos, quatro colunas (+ consenso).
Uso: python3 copy/rodada3/monta.py   -> copy/rodada3/propostas3.html
"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))
import monta_pagina as mp

mp.ORDEM = ['guevara', 'gozonji', 'magic-knight-rayearth-2']
mp.NOME = {
    'guevara': 'Guevara  ·  no Ocidente: Guerrilla War',
    'gozonji': 'The Misadventures of Yaji & Kita  ·  Gozonji: Yaji Kita Chin Douchuu',
    'magic-knight-rayearth-2': 'Magic Knight Rayearth 2  ·  Game Gear',
}
mp.NIVEL = {
    'guevara': ('release — declarado pelo dono', '#2e7d32'),
    'gozonji': ('beta — declarado pelo dono', '#ef6c00'),
    'magic-knight-rayearth-2': ('beta — declarado pelo dono', '#ef6c00'),
}

R3 = 'copy/rodada3/'
FONTES = [('Anime A — quem conhece', R3 + 'anime_A.json'),
          ('Anime B — quem não conhece', R3 + 'anime_B.json'),
          ('jRPG A — as melhorias', R3 + 'jrpg_A.json'),
          ('jRPG B — a prova', R3 + 'jrpg_B.json'),
          ('CONSENSO 3', R3 + 'consenso3.json')]

if __name__ == '__main__':
    presentes = [f for f in FONTES if os.path.exists(f[1])]
    print(mp.monta(presentes, saida=R3 + 'propostas3.html'))
    print('colunas:', ', '.join(r for r, _ in presentes))
