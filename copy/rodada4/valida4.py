#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Validador da RODADA 4 — agente da PROVA.

Roda o validador compartilhado da rodada 2 (com ORDEM trocada para os quatro slugs)
e acrescenta tres checagens proprias:

  1. TODO numero citado no texto tem de aparecer no campo `fontes`, normalizado
     entre pt e en (1.903 == 1,903 == 1903; 2,22x == 2.22x; 0x66901 case-insensitive).
  2. Nenhuma expressao de PROGRESSO.
  3. Nenhum percentual de progresso (regex ancorado no assunto, para nao barrar
     fato de cartucho como "103% de cobertura" ou "10,7% dos caracteres").

Uso: python3 valida4.py [arquivo.json ...]
"""
import json, re, sys, os

sys.path.insert(0, os.path.expanduser('~/patchclan-site/copy/rodada2'))
import valida as base

ORDEM_R4 = ['ninja-burai-densetsu', 'maniac-mansion',
            'pocket-monsters-stadium', 'robot-poncots-64']

# --- 2. expressoes de progresso -------------------------------------------
PROGRESSO = [
    r'\bcap[íi]tulo\s+\d', r'\bchapter\s+\d', r'\bpiloto\b', r'\bpilot chapter\b',
    r'\bj[áa] traduzid', r'\balready translated\b', r'\btraduzidas? at[ée] agora\b',
    r'\bv0\.\d', r'\balpha v\d', r'\bbuild \d', r'\bcobertura\b', r'\bcoverage\b',
    # "de N mensagens" sozinho pega amostra de medicao ("amostra de 27 mensagens"),
    # que e fato de metodo e nao andamento. So conta o par "x de y".
    r'\d[\d\.,]*\s+(de|of)\s+\d[\d\.,]*\s+(mensagens|strings|falas|messages)',
    r'\bpor enquanto\b', r'\bso far\b', r'\bat[ée] agora\b',
    r'\bem curso\b', r'\bunder way\b', r'\bin progress\b',
    r'\bcomecou em\b', r'\bcome[çc]ou em\b', r'\bstarted on\b',
]
# --- 3. percentual DE PROGRESSO (so quando perto de palavra de andamento) ---
# "cobert|cover" NAO entra solto: "cobriam 103% da regiao comprimida" e fato de
# cartucho, nao andamento. So conta como progresso quando o sujeito e a traducao.
_PROG_W = r'(?:traduzid|translat|feit|pront|complet|done|inserid)'
_COBRE  = r'(?:tradu[çc]|translat|roteiro|script)\w*.{0,40}?(?:cobert|cover)'
PCT_PROG = re.compile(
    _PROG_W + r'\w*.{0,60}?\d[\d\.,]*\s*%'
    r'|\d[\d\.,]*\s*%.{0,60}?' + _PROG_W +
    r'|' + _COBRE + r'\w*.{0,60}?\d[\d\.,]*\s*%'
    r'|\d[\d\.,]*\s*%.{0,60}?' + _COBRE, re.I)

TAGS = re.compile(r'</?[a-zA-Z][^>]*>')
NUM = re.compile(r'0x[0-9A-Fa-f]+|\$[0-9A-Fa-f]{2,}|\d[\d\.,]*\s*(?:×|x(?=\b))?|\d')

def norm(tok):
    """1.903 -> 1903 ; 1,424x -> 1424x(dec) ; 0x66901 -> 0x66901 minusculo."""
    t = tok.strip().lower().replace('×', 'x').replace(' ', '')
    if t.startswith('0x') or t.startswith('$'):
        return t.lstrip('$').replace('0x', '')
    mult = t.endswith('x')
    if mult: t = t[:-1]
    # separador de milhar (ponto ou virgula seguido de exatamente 3 digitos)
    t = re.sub(r'[.,](?=\d{3}\b)', '', t)
    t = t.replace(',', '.')            # decimal unificado
    t = t.rstrip('.')
    if t.startswith('.'): t = t[1:]
    return t + ('x' if mult else '')

def numeros(txt):
    txt = TAGS.sub(' ', txt)
    out = []
    for m in NUM.finditer(txt):
        n = norm(m.group(0))
        if n: out.append(n)
    return out

def checa(caminho):
    base.ORDEM[:] = ORDEM_R4
    erros, avisos = base.valida(caminho)
    d = json.load(open(caminho))

    for j in d:
        s = j.get('slug', '?')
        fontes_norm = set()
        blob = ' '.join(j.get('fontes', []))
        for n in numeros(blob):
            fontes_norm.add(n)
        # numeros da linha de fonte "arquivo:linha" nao valem como prova de numero
        # do texto — mas tambem nao atrapalham; o que vale e a descricao apos o travessao.
        for l in ('pt', 'en'):
            campos = [('linha', j['linha'][l])] + \
                     [(f'resumo[{i}]', p) for i, p in enumerate(j['resumo'][l])]
            for campo, t in campos:
                for n in set(numeros(t)):
                    if n not in fontes_norm:
                        erros.append(f'{s}: numero "{n}" em {campo}.{l} sem fonte em `fontes`')
                baixo = t.lower()
                for pat in PROGRESSO:
                    m = re.search(pat, baixo)
                    if m:
                        erros.append(f'{s}: progresso ("{m.group(0)}") em {campo}.{l}')
                m = PCT_PROG.search(t)
                if m:
                    erros.append(f'{s}: percentual de progresso ("{m.group(0)[:40]}") em {campo}.{l}')
        if not j.get('fontes'):
            erros.append(f'{s}: sem campo fontes')
        for f in j.get('fontes', []):
            if not re.search(r'\.\w+:\d', f):
                avisos.append(f'{s}: fonte sem arquivo:linha -> {f[:60]}')
    return erros, avisos

if __name__ == '__main__':
    args = sys.argv[1:] or [os.path.expanduser('~/patchclan-site/copy/rodada4/jrpg_B.json')]
    total = 0
    for c in args:
        e, a = checa(c)
        print(f"\n=== {c.split('/')[-1]} — {'OK' if not e else f'{len(e)} ERRO(S)'}")
        for x in e: print('  x', x)
        for x in a: print('  .', x)
        total += len(e)
    print(f'\ntotal de erros: {total}')
    sys.exit(1 if total else 0)
