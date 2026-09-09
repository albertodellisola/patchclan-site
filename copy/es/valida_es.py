# -*- coding: utf-8 -*-
"""Valida copy/es/consenso_es.json contra as regras do REGRAS_ES.md.
Uso: python3 ~/patchclan-site/copy/es/valida_es.py
"""
import json, os, re, sys, unicodedata

BASE = os.path.expanduser('~/patchclan-site/copy/es/consenso_es.json')
GLOS = os.path.expanduser('~/fj2-hack/glossario_es.tsv')

ORDEM = ['famicom-jump-2','dragon-ball-3','captain-tsubasa','nekketsu-kakutou-densetsu',
         'gaia-saver','ultraman-club-2','ultraman-club-3','tom-sawyer','hanjuku-hero',
         'monster-maker', 'guevara', 'gozonji', 'magic-knight-rayearth-2',
         'ninja-burai-densetsu', 'maniac-mansion', 'pocket-monsters-stadium',
         'robot-poncots-64']

TAGS_OK = {'b','i','code','em','strong'}

# rodada 3: nenhum número de progresso, e o letreiro barrado do Gozonji
R3_BARRADOS = ['deadly mission', 'maior roteiro', 'guion más largo', 'guion mas largo',
               'el más largo del catálogo', '5.359', '5,359',
               # rodada 4
               'the last ninja', 'p75', 'p90', 'byteswap', 'ムサシ', 'コジロウ',
               'no hay parche conocido', 'no existe parche', 'no se conoce parche',
               'trampolín de 13', 'ぬーどかれんだー', 'すけべなポスター']
R3_PROGRESSO = [r'\d+\s*%\s*(traducid|complet|hecho|cubiert)', r'(traducid|complet|cubiert)\w*\s+(en\s+)?(un\s+)?\d+\s*%',
                r'\d+\s+de\s+\d+\s+mensajes\s+traducid', r'cap[ií]tulo\s+piloto',
                # rodada 4: plantilla jugável do Stadium — 42/40/33, sem árbitro
                r'\d+\s+(pok[eé]mon|especies)\s+(jugables|utilizables|disponibles)',
                r'kinds of pokemon', r'may be used',
                # a formulação falsa desde o Guevara
                r'(los\s+(dem[aá]s|otros)|todos\s+los\s+(dem[aá]s|otros))[^.]{0,90}nunca\s+sali']

HYPE = ['mejor traducci','la mejor','definitiv','increíble','increible','épico','epico',
        'revolucionari','espectacular','asombros','imprescindible','impresionante',
        'la más completa','insuperable','perfecta traducci']

# padroes de "o que falta" — regex com fronteira de palavra, para nao pegar
# «independientes» dentro de «pendiente» nem «faltar» dentro de outra palavra
FALTA = [r'falta\w*', r'pendiente\w*', r'todav[ií]a no', r'a[uú]n no', r'sigue en japon[eé]s',
         r'siguen en japon[eé]s', r'nadie ha jugado', r'no se ha publicado', r'por hacer',
         r'queda\w* por traducir', r'sin terminar', r'inacabad\w*', r'incomplet\w*',
         r'todav[ií]a est[aá]', r'de momento no']

# Variantes proibidas: forma errada -> forma do glossário / decisão registrada
VARIANTES = {
    'Esfera del Dragón':'Bola de Dragón', 'Esferas del Dragón':'Bolas de Dragón',
    'Maestro Roshi':'Mutenroshi', 'Master Roshi':'Mutenroshi', 'Shenlong':'Shenron',
    'Nube voladora':'Nube Kinton', 'semilla del ermitaño':'Judía Mágica',
    'Korin':'Karin', 'Krillin':'Krilin', 'Piccoro':'Piccolo', 'Chi-Chi':'Chichi',
    'Son Gohanda':'Gohan',
    'Taruruto-kun':'Taruruto', 'Tar-chan':'Ta-chan',
    'Oliver y Benji':'(elenco japonés)', 'Oliver Atom':'TSUBASA', 'Benji Price':'WAKABAYASHI',
    'Mark Lenders':'HYUGA', 'Steve Hyuga':'HYUGA', 'Tom Baker':'MISAKI',
    'gambeta':'regate', 'chutar':'tirar', 'chaval':'-', 'tío':'-', 'mola':'-',
    'vosotros':'tú', 'ustedes':'tú', 'computadora':'ordenador',
}

# Títulos de franquia/obra: dentro deles o termo inglês do glossário é legítimo.
# O glossário traduz o OBJETO e o CARGO, não o nome da série.
#   «Bola de Dragón» é a esfera; «Dragon Ball» é a série.
#   «Capitán» é o cargo (しょちょう); «Captain Tsubasa» é a série.
TITULOS_OK = ['Dragon Ball', 'Captain Tsubasa', 'Monster Maker', 'Famicom Jump',
              'Ultraman Club', 'Gaia Saver', 'Tom Sawyer', 'Guerrilla War',
              'Magic Knight Rayearth', 'Making of Magic Knight', 'MAGIC KNIGHTS',
              'The Misadventures of Yaji', 'Pokémon Stadium', 'POKEMON STADIUM',
              'Maniac Mansion', 'Robopon', 'Robot Poncots', 'Ninja Burai',
              'Master Ball', 'Poké Ball', 'Battler Dome', 'Transfer Pak',
              'Lucasfilm Games', 'Hudson Soft', 'Game Boy', 'Game Gear',
              'Mega Drive', 'Nintendo 64', 'Super Famicom', 'Final Fantasy']

def carrega_glossario():
    linhas = []
    with open(GLOS, encoding='utf-8') as f:
        for ln in f:
            if ln.startswith('#') or not ln.strip(): continue
            c = ln.rstrip('\n').split('\t')
            if len(c) < 3: continue
            linhas.append({'jp':c[0], 'es':c[1], 'en':c[2]})
    return linhas

def txt_de(g):
    return ' \n '.join([g['linha']] + g['resumo'])

def sem_tags(s):
    return re.sub(r'<[^>]+>', '', s)

def main():
    d = json.load(open(BASE, encoding='utf-8'))
    glos = carrega_glossario()
    erros, avisos = [], []

    # 1. slugs e ordem
    slugs = [g['slug'] for g in d]
    if slugs != ORDEM:
        erros.append(f'ORDEM: esperado {ORDEM}, veio {slugs}')
    if len(d) != 17:
        erros.append(f'COUNT: {len(d)} objetos, esperado 17')

    for g in d:
        s = g['slug']
        for campo in ('slug','linha','resumo','notas'):
            if campo not in g: erros.append(f'{s}: falta o campo {campo}')
        linha = g['linha']; res = g['resumo']

        # 2. linha <= 150
        if len(linha) > 150:
            erros.append(f'{s}: linha com {len(linha)} caracteres (max 150)')

        texto = txt_de(g)

        # 3. sem ! nem ¡
        for ch in ('!', '¡'):
            if ch in texto:
                erros.append(f'{s}: contém «{ch}»')

        # 4. resumo com 2 ou 3 parágrafos
        if not isinstance(res, list) or not (2 <= len(res) <= 3):
            erros.append(f'{s}: resumo com {len(res)} parágrafos (esperado 2 ou 3)')
        for i,p in enumerate(res):
            if not p.strip(): erros.append(f'{s}: parágrafo {i+1} vazio')

        low = texto.lower()

        # 5. hype
        for h in HYPE:
            if h in low: erros.append(f'{s}: palavra de hype «{h}»')

        # 6b. rodada 3: letreiro barrado e número de progresso
        for t in R3_BARRADOS:
            if t in low: erros.append(f'{s}: termo barrado na rodada 3 «{t}»')
        for pat in R3_PROGRESSO:
            m = re.search(pat, low)
            if m: erros.append(f'{s}: número de progresso «{m.group(0)}»')

        # 6. "o que falta"
        for f_ in FALTA:
            m = re.search(r'(?<![\wÁÉÍÓÚÑáéíóúñ])'+f_, low)
            if m: erros.append(f'{s}: padrão de pendência «{m.group(0)}»')

        # 7. só as tags permitidas
        for m in re.finditer(r'<\s*/?\s*([a-zA-Z0-9]+)[^>]*>', texto):
            if m.group(1).lower() not in TAGS_OK:
                erros.append(f'{s}: tag proibida <{m.group(1)}>')
        # tags balanceadas
        for t in TAGS_OK:
            a = len(re.findall(rf'<{t}>', texto)); b = len(re.findall(rf'</{t}>', texto))
            if a != b: erros.append(f'{s}: <{t}> abre {a} e fecha {b}')

        # 8. & solto
        for m in re.finditer(r'&(?!amp;|lt;|gt;|quot;|#)', texto):
            erros.append(f'{s}: «&» sem escapar em ...{texto[max(0,m.start()-25):m.start()+10]}...')

        # 9. variantes proibidas
        for errada, certa in VARIANTES.items():
            if re.search(r'(?<![\wÁÉÍÓÚÑáéíóúñ])'+re.escape(errada)+r'(?![\wÁÉÍÓÚÑáéíóúñ])', texto, re.IGNORECASE):
                erros.append(f'{s}: variante proibida «{errada}» — usar «{certa}»')

        # 10. glossário: termo EN não pode aparecer quando o ES difere
        # intervalos ocupados por títulos de obra, onde o termo inglês é legítimo
        protegido = []
        for t in TITULOS_OK:
            for m in re.finditer(re.escape(t), texto):
                protegido.append((m.start(), m.end()))
        def dentro_de_titulo(a, b):
            return any(ini <= a and b <= fim for ini, fim in protegido)

        for row in glos:
            en, es = row['en'], row['es']
            if not en or en == es: continue
            if len(en) < 4: continue
            pat = r'(?<![\wÁÉÍÓÚÑáéíóúñ])'+re.escape(en)+r'(?![\wÁÉÍÓÚÑáéíóúñ])'
            for m in re.finditer(pat, texto):
                if dentro_de_titulo(m.start(), m.end()): continue
                erros.append(f'{s}: forma inglesa «{en}» no texto — o glossário manda «{es}»')

    # 11. positivo: quais formas do glossário aparecem
    todo = ' \n '.join(txt_de(g) for g in d)
    usados = []
    for row in glos:
        es = row['es']
        if len(es) < 4: continue
        if re.search(r'(?<![\wÁÉÍÓÚÑáéíóúñ])'+re.escape(es)+r'(?![\wÁÉÍÓÚÑáéíóúñ])', todo):
            usados.append(es)

    print('=== VALIDAÇÃO consenso_es.json ===')
    print(f'jogos: {len(d)}  | ordem canônica: {"OK" if slugs==ORDEM else "ERRO"}')
    for g in d:
        print(f'  {g["slug"]:<26} linha={len(g["linha"]):>3}  parágrafos={len(g["resumo"])}  notas={len(g["notas"])}')
    print(f'\nformas do glossário_es.tsv usadas no texto ({len(usados)}): {", ".join(sorted(set(usados)))}')
    if avisos:
        print('\nAVISOS:'); [print('  -',a) for a in avisos]
    if erros:
        print(f'\nERROS ({len(erros)}):'); [print('  -',e) for e in erros]
        sys.exit(1)
    print('\nTUDO PASSOU')

main()
