#!/usr/bin/env python3
"""Valida um JSON de copy da rodada 2 contra as REGRAS.md.
Uso: python3 valida.py arquivo.json [arquivo2.json ...]"""
import json, re, sys

ORDEM = ['famicom-jump-2','dragon-ball-3','captain-tsubasa','nekketsu-kakutou-densetsu',
         'gaia-saver','ultraman-club-2','ultraman-club-3','tom-sawyer','hanjuku-hero',
         'monster-maker']

HYPE = ['melhor tradução','melhor traducao','best translation','incrível','incrivel',
        'épico','epico','epic','revolucionário','revolucionario','revolutionary',
        'a tradução definitiva','the definitive translation']

# o que NÃO se diz: o mérito do que falta em cada nível
# o que NÃO se diz: o mérito do que falta, e a justificativa do nível.
# Termos soltos ('falta', 'por isso esta') dão falso positivo em frase legítima
# — "Por isso esta tradução traz cinco páginas de prólogo" é copy boa.
# Por isso os padrões são regex ancorados no ASSUNTO, não palavras avulsas.
FALTA = [
    r'\bfaltam?\b', r'\bfaltando\b', r'\bpend[êe]nci', r'\bainda n[ãa]o\b',
    r'\bcontinua(m)? em japon[êe]s', r'\bsegue(m)? em japon[êe]s', r'\bnu[êe]m jogou',
    r'\bningu[ée]m jogou', r'\bem andamento\b', r'\bn[ãa]o foi publicad',
    r'por isso (est[áa]|é|fica|segue|continua)\s+(em\s+)?(alfa|beta|release)',
    r'\bque segura este projeto\b', r'\bdefeitos conhecidos\b',
    r'\bmissing\b', r'\bstill (in )?japanese\b', r'\bpending\b', r'\bnot yet\b',
    r'\bnobody has played\b', r'\bis why it (is|remains)\s+(in\s+)?(alpha|beta|release)',
    r'\bknown issues\b', r'\bremains? in japanese\b', r'\bhas not been published\b',
]

TAG_OK = re.compile(r'</?(b|i|code|em|strong)>')

def texto(j):
    for l in ('pt','en'):
        yield ('linha',l), j['linha'][l]
        for i,p in enumerate(j['resumo'][l]):
            yield (f'resumo[{i}]',l), p

def valida(caminho):
    erros, avisos = [], []
    try:
        d = json.load(open(caminho))
    except Exception as e:
        return [f'JSON ilegível: {e}'], []

    slugs = [j.get('slug') for j in d]
    if slugs != ORDEM:
        faltando = [s for s in ORDEM if s not in slugs]
        sobrando = [s for s in slugs if s not in ORDEM]
        if faltando: erros.append(f'slugs faltando: {faltando}')
        if sobrando: erros.append(f'slugs desconhecidos: {sobrando}')
        if not faltando and not sobrando: avisos.append('ordem dos slugs difere da canônica')

    for j in d:
        s = j.get('slug','?')
        for l in ('pt','en'):
            if l not in j.get('linha',{}):
                erros.append(f'{s}: linha.{l} ausente'); continue
            n = len(j['linha'][l])
            if n > 150: erros.append(f'{s}: linha.{l} tem {n} caracteres (teto 150)')
            r = j.get('resumo',{}).get(l)
            if not r: erros.append(f'{s}: resumo.{l} ausente'); continue
            if len(r) not in (2,3):
                erros.append(f'{s}: resumo.{l} tem {len(r)} parágrafos (esperado 2 ou 3)')

        for (campo,l), t in texto(j):
            if '!' in t.replace('<b>','').replace('</b>',''):
                erros.append(f'{s}: exclamação em {campo}.{l}')
            baixo = t.lower()
            for h in HYPE:
                if h in baixo: erros.append(f'{s}: hype "{h}" em {campo}.{l}')
            for f in FALTA:
                m = re.search(f, baixo)
                if m:
                    erros.append(f'{s}: fala do que falta ("{m.group(0)}") em {campo}.{l}')
            # HTML: só as tags permitidas
            for tag in re.findall(r'</?[a-zA-Z][^>]*>', t):
                if not TAG_OK.fullmatch(tag):
                    erros.append(f'{s}: tag HTML não permitida {tag} em {campo}.{l}')

        if not j.get('fontes'):
            avisos.append(f'{s}: sem campo fontes')

    return erros, avisos

ORDEM_R3 = ['guevara','gozonji','magic-knight-rayearth-2']

if __name__ == '__main__':
    args = sys.argv[1:]
    # --r3 valida contra os tres slugs da rodada 3, em vez dos dez da rodada 2
    if '--r3' in args:
        args.remove('--r3')
        ORDEM[:] = ORDEM_R3
    total = 0
    for caminho in args:
        erros, avisos = valida(caminho)
        marca = 'OK' if not erros else f'{len(erros)} ERRO(S)'
        print(f'\n=== {caminho.split("/")[-1]} — {marca}')
        for e in erros: print('  ✗', e)
        for a in avisos: print('  ·', a)
        total += len(erros)
    print(f'\ntotal de erros: {total}')
    sys.exit(1 if total else 0)
