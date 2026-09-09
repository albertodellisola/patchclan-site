# -*- coding: utf-8 -*-
"""Valida a copy da rodada 4 contra as REGRAS.md (rodada 2 + secao RODADA 4)."""
import json, os, re, sys, unicodedata

ARQ = os.path.expanduser('~/patchclan-site/copy/rodada4/anime_B.json')
ORDEM = ['ninja-burai-densetsu', 'maniac-mansion',
         'pocket-monsters-stadium', 'robot-poncots-64']

erros, avisos = [], []
def E(s): erros.append(s)
def A(s): avisos.append(s)

def txt(html):
    """tira tags e entidades, para medir palavra e nao marcacao"""
    s = re.sub(r'<[^>]+>', ' ', html)
    s = s.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>')
    return re.sub(r'\s+', ' ', s)

def sem_acento(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s.lower())
                   if unicodedata.category(c) != 'Mn')

# --- vocabulario proibido ------------------------------------------------
HYPE = ['melhor traducao', 'a melhor', 'definitiv', 'incrivel', 'epico',
        'epica', 'revolucionari', 'espetacular', 'perfeit', 'unico no mundo',
        'imperdivel', 'sensacional', 'extraordinari', 'magistral', 'lendari',
        'amazing', 'incredible', 'epic', 'revolutionary', 'the best',
        'flawless', 'stunning', 'must-play', 'groundbreaking', 'ultimate']

FALTA = ['ainda esta', 'ainda nao', 'continua em japones', 'continua sem',
         'falta ', 'faltam ', 'pendencia', 'pendente', 'em breve', 'por enquanto',
         'nao foi verificado', 'nao verificado', 'nao conferido', 'em curso',
         'em andamento', 'sera lancado', 'proximo passo', 'em aberto',
         'still in japanese', 'not yet', 'is missing', 'remains untranslated',
         'coming soon', 'work in progress', 'to be done', 'for now',
         'not verified', 'pending', 'unfinished']

TIER = ['alfa', 'alpha', 'beta', 'release candidate', 'v0.1', 'v1.0',
        'nivel do patch', 'tier']

def acha(palavra, texto, prefixo=False):
    """Casa so em fronteira de palavra. Com prefixo=True o fim fica aberto
    ('definitiv' pega definitiva/definitivo); sem ele a palavra tem de terminar
    ali, para que 'alfa' nao case dentro de 'alfabeto' nem 'pending' dentro de
    'spending' — os falsos positivos que esta rodada produziu."""
    rx = r'\b' + re.escape(palavra.strip()) + ('' if prefixo else r'\b')
    return re.search(rx, texto)

# --- progresso: a regra critica desta rodada -----------------------------
PROG = [
  (r'\d+\s*%', 'percentual'),
  (r'\b\d[\d.,]*\s+de\s+\d[\d.,]*\s+(strings?|mensagens?|falas?|linhas?|traduzid)',
   'contagem "x de y"'),
  (r'\b\d[\d.,]*\s+of\s+\d[\d.,]*\s+(strings?|messages?|lines?|translated)',
   'contagem "x of y"'),
  (r'\b\d[\d.,]*\s+(strings?|mensagens?|falas?|entradas?|linhas?)\s+(ja\s+)?traduzid',
   'contagem de traduzidas'),
  (r'\b\d[\d.,]*\s+(strings?|messages?|lines?|entries)\s+(already\s+)?translated',
   'contagem de traduzidas (en)'),
  (r'\b(traduzid|translated)[oa]?s?\s+(ate\s+)?(agora|aqui|hoje|so far)',
   'traduzido ate agora'),
  (r'\bcapitulos?\s+\d+\s+a\s+\d+\b', 'capitulo N a M (progresso)'),
  (r'\b(alfa|alpha|beta)\s*v?\s*\d', 'versao de estagio'),
  (r'\bbuild\s+\d+\b', 'numero de build'),
  (r'\bcobertura\s+(de\s+)?\d', 'cobertura numerica'),
  (r'\bcoverage\s+of\s+\d', 'cobertura numerica (en)'),
]

d = json.load(open(ARQ))

# 1. quatro slugs na ordem do REGRAS
if [e['slug'] for e in d] != ORDEM:
    E('slugs fora de ordem: %s' % [e['slug'] for e in d])
else:
    print('ok  4 slugs, na ordem do REGRAS')

for e in d:
    s = e['slug']
    for campo in ('slug', 'linha', 'resumo', 'fontes'):
        if campo not in e:
            E('%s: falta o campo %s' % (s, campo))

    # 2. linha <= 150 em pt e en, uma frase
    for lg in ('pt', 'en'):
        L = e['linha'][lg]
        n = len(L)
        if n > 150:
            E('%s linha[%s]: %d caracteres (max 150)' % (s, lg, n))
        else:
            print('ok  %-24s linha[%s] %3d chars' % (s, lg, n))
        if '<' in L:
            E('%s linha[%s]: a linha da home nao leva HTML' % (s, lg))

    # 3. resumo com 2 ou 3 paragrafos, nos dois idiomas
    for lg in ('pt', 'en'):
        ps = e['resumo'][lg]
        if not isinstance(ps, list) or not 2 <= len(ps) <= 3:
            E('%s resumo[%s]: %s paragrafos (esperado 2 ou 3)' % (s, lg, len(ps)))
        for i, p in enumerate(ps):
            if len(txt(p)) < 200:
                A('%s resumo[%s][%d]: paragrafo curto (%d)' % (s, lg, i, len(txt(p))))
    if len(e['resumo']['pt']) != len(e['resumo']['en']):
        E('%s: pt e en com numero de paragrafos diferente' % s)

    # varredura de texto: linha + resumo, nos dois idiomas
    corpo = []
    for lg in ('pt', 'en'):
        corpo.append(e['linha'][lg])
        corpo.extend(txt(p) for p in e['resumo'][lg])
    inteiro = ' \n '.join(corpo)
    plano = sem_acento(inteiro)

    # 4. nenhuma exclamacao
    if '!' in inteiro:
        E('%s: exclamacao no texto' % s)

    # 5. sem hype
    for w in HYPE:
        if acha(w, plano, prefixo=True):
            E('%s: hype proibido — "%s"' % (s, w))

    # 6. nao dizer o que falta
    for w in FALTA:
        if acha(w, plano):
            E('%s: diz o que falta — "%s"' % (s, w))

    # 7. nao explicar o tier
    for w in TIER:
        if acha(w, plano):
            E('%s: menciona/explica o nivel — "%s"' % (s, w))

    # 8. A REGRA CRITICA: nenhum numero de progresso
    for rx, rot in PROG:
        m = re.search(rx, plano)
        if m:
            E('%s: NUMERO DE PROGRESSO (%s) — "%s"' % (s, rot, m.group()[:60]))

    # 9. fontes com arquivo:linha
    if not e['fontes']:
        E('%s: fontes vazio' % s)
    for f in e['fontes']:
        if not re.match(r'^~?/?[\w./~-]+\.\w+:\d+(-\d+)?(,\d+)*\s+—\s+.+', f):
            E('%s: fonte sem arquivo:linha — %r' % (s, f[:70]))
    print('ok  %-24s %d fontes com arquivo:linha' % (s, len(e['fontes'])))

    # 10. HTML so com as tags permitidas
    for lg in ('pt', 'en'):
        for p in e['resumo'][lg]:
            for tag in re.findall(r'</?(\w+)', p):
                if tag not in ('b', 'i', 'code'):
                    E('%s resumo[%s]: tag nao permitida <%s>' % (s, lg, tag))
            if p.count('<b>') != p.count('</b>') or p.count('<i>') != p.count('</i>') \
               or p.count('<code>') != p.count('</code>'):
                E('%s resumo[%s]: tag HTML desbalanceada' % (s, lg))

    # 11. o en nao pode ser copia literal do pt
    for i in range(len(e['resumo']['pt'])):
        if e['resumo']['pt'][i] == e['resumo']['en'][i]:
            E('%s: paragrafo %d identico em pt e en' % (s, i))

print()
for a in avisos:
    print('AVISO', a)
if erros:
    print()
    for x in erros:
        print('ERRO ', x)
    sys.exit(1)
print('\nTUDO CERTO — %d jogos validados' % len(d))
