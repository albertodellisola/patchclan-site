#!/usr/bin/env python3
"""Validador da RODADA 4 — reusa valida.py da rodada 2 e soma as regras desta rodada.

Uso: python3 valida_r4.py copy/rodada4/anime_A.json
"""
import json, re, sys, os

AQUI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(AQUI, '..', 'rodada2'))
import valida as base

ORDEM_R4 = ['ninja-burai-densetsu', 'maniac-mansion',
            'pocket-monsters-stadium', 'robot-poncots-64']

# --- regra crítica da rodada 4: NENHUM número de progresso ------------------
PROGRESSO = [
    # percentual perto de verbo de progresso
    r'\d+\s*%[^.]{0,40}\b(traduzid|translat|feit|pront|complet|cobert|insert|done)',
    r'\b(traduzid|translat|feit|pront|complet|cobert)\w*[^.]{0,40}\d+\s*%',
    # "x de y" com verbo de progresso
    r'\d[\d\.,]*\s+(de|of)\s+\d[\d\.,]*\s+\w*\s*(traduzid|translat|inserid|feit|pront)',
    # estágio declarado
    r'\balfa\s*v?\d', r'\balpha\s*v?\d', r'\bbeta\s*v?\d', r'\bv0\.\d',
    r'\bbuild\s+\d', r'\bcap[íi]tulo\s+\d+\s+de\b', r'\bchapter\s+\d+\s+of\b',
    # expressões de andamento
    r'\bat[ée]\s+agora\b', r'\bpor\s+enquanto\b', r'\bj[áa]\s+traduzid',
    r'\bso\s+far\b', r'\bfor\s+now\b', r'\balready\s+translated\b',
    r'\bem\s+curso\b', r'\bunder\s+way\b', r'\bin\s+progress\b',
    r'\brestam?\b', r'\bremaining\b', r'\bser[áa]\s+traduzid',
    # datas de conclusão prometidas
    r'\bfecha\s+(amanh[ãa]|hoje)\b', r'\bcloses\s+(tomorrow|today)\b',
]

# hype que o valida.py da rodada 2 não cobre
HYPE_EXTRA = ['definitiv', 'lendári', 'lendari', 'imperdív', 'sensacional',
              'espetacular', 'nunca visto', 'groundbreaking', 'legendary',
              'must-play', 'stunning', 'amazing', 'unmatched']

# barrado só nesta rodada
BARRADO = [
    'censur',       # folclore de censura não checado
    'censor',
    'jaleco',       # editora japonesa não confirmada em fonte do projeto
]

FONTE_OK = re.compile(r'^~?[\w./~\-]+\.\w+(:[\d,\-]+)?\s+—')


def texto(j):
    for l in ('pt', 'en'):
        yield ('linha', l), j['linha'][l]
        for i, p in enumerate(j['resumo'][l]):
            yield (f'resumo[{i}]', l), p


def main(caminho):
    base.ORDEM[:] = ORDEM_R4
    erros, avisos = base.valida(caminho)

    d = json.load(open(caminho))
    for j in d:
        s = j['slug']
        for (campo, l), t in texto(j):
            baixo = t.lower()
            for p in PROGRESSO:
                m = re.search(p, baixo)
                if m:
                    erros.append(f'{s}: número/expressão de progresso '
                                 f'("{m.group(0)}") em {campo}.{l}')
            for h in HYPE_EXTRA:
                if h in baixo:
                    erros.append(f'{s}: hype "{h}" em {campo}.{l}')
            for b in BARRADO:
                if b in baixo:
                    erros.append(f'{s}: termo barrado "{b}" em {campo}.{l}')

        # fontes: cada uma precisa de arquivo (e, quando cabe, :linha) + glosa
        fontes = j.get('fontes') or []
        if not fontes:
            erros.append(f'{s}: sem fontes')
        for f in fontes:
            if not FONTE_OK.match(f):
                erros.append(f'{s}: fonte sem formato "arquivo[:linha] — glosa": {f[:60]}')
        com_linha = [f for f in fontes if re.match(r'^~?[\w./~\-]+:\d', f)]
        if len(com_linha) < 5:
            erros.append(f'{s}: só {len(com_linha)} fontes com arquivo:linha')

        # a linha tem de ser UMA frase
        for l in ('pt', 'en'):
            if j['linha'][l].count('.') > 1:
                avisos.append(f'{s}: linha.{l} tem mais de um ponto final')
            print(f'  · {s:26s} linha.{l}: {len(j["linha"][l]):3d} caracteres')

    marca = 'OK' if not erros else f'{len(erros)} ERRO(S)'
    print(f'\n=== {os.path.basename(caminho)} — {marca}')
    for e in erros:
        print('  ✗', e)
    for a in avisos:
        print('  ·', a)
    return 1 if erros else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1]))
