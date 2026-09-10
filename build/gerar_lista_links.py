#!/usr/bin/env python3
"""Monta a lista de links dos patches para colar nas páginas do Patreon.

    python3 build/gerar_lista_links.py        # escreve os dois arquivos no Desktop

Sai uma página HTML com botão de copiar por link e marcação de progresso, mais a
mesma lista em texto puro. Roda depois de `patreon_patches.py subir`, e lê o
manifesto `.links-patreon.json` — nenhuma URL é digitada à mão.

NUNCA gravar a saída dentro de ~/patchclan-site: o repositório é PÚBLICO e a página
carrega os tokens de todos os patches de beta e alfa, que são o porteiro do Patreon.
Este script não tem segredo nenhum; o que não pode subir é o que ele produz.
"""
import json, html, re, pathlib

RAIZ = pathlib.Path(__file__).resolve().parent.parent
SAIDA = pathlib.Path.home() / 'Desktop'
e = html.escape

BANDEIRA = {'en': ('\U0001F1EC\U0001F1E7', 'EN'), 'pt': ('\U0001F1E7\U0001F1F7', 'PT'),
            'es': ('\U0001F1EA\U0001F1F8', 'ES')}
ROTULO = {
 'release': ('Release', '✓', 'Baixa de graça no site. O link direto serve para quem prefere entregar o arquivo pela própria postagem.'),
 'beta':    ('Beta', '●', 'Sai só pelo Patreon. Jogável de ponta a ponta, ainda em revisão.'),
 'alfa':    ('Alfa', '○', 'Sai só pelo Patreon. Em construção — parte do jogo ainda aparece em japonês.')}


# Nota por jogo que ainda nao tem patch. Chave sem entrada cai na frase padrao.
# Isto e' texto editorial, entao mora aqui e nao no site — atualizar quando o
# estado mudar, ou apagar a linha quando o jogo ganhar patch.
SEM_PATCH = {
 'maniac-mansion': 'A ROM traduzida existe (English v0.4 alpha). O IPS ainda não foi gerado.',
 'ninja-burai-densetsu': 'A ROM traduzida existe (1 MB, Mega Drive). O IPS ainda não foi gerado.',
}
PADRAO = 'Sem arquivo para entregar ainda.'


def carregar():
    man = json.loads((RAIZ / '.links-patreon.json').read_text())
    seed = json.loads(re.search(r'<script type="application/json" id="seed">(.*?)</script>',
                                (RAIZ / 'index.html').read_text(), re.S).group(1))
    jogos = []
    for g in seed['games']:
        vs, usados = g['patch']['versoes'], {}
        for idi in ('en', 'pt', 'es'):
            if vs.get(idi):
                usados.setdefault(vs[idi]['arquivo'], []).append(idi)
        itens = [{'idiomas': idis, 'arquivo': arq, 'formato': arq.rsplit('.', 1)[1].upper(),
                  'tam': vs[idis[0]]['tamanho'],
                  'url': man.get(arq.rsplit('.', 1)[0], {}).get('url'),
                  'site': f'https://www.patchclan.com/patches/{arq}' if g['nivel'] == 'release' else None}
                 for arq, idis in usados.items()]
        jogos.append({'slug': g['slug'], 'nome': html.unescape(g['nome']),
                      'sub': html.unescape(g.get('subtitulo') or ''), 'jp': g.get('jp', ''),
                      'sistema': g.get('sistema', ''), 'ano': g.get('ano', ''),
                      'nivel': g['nivel'], 'rom': g['patch']['rom'],
                      'md5': g['patch']['rom_md5'], 'patches': itens})
    return jogos


jogos = carregar()

CSS = """
:root{
  --ground:#e3dbc8; --ground-2:#eee8d9; --ground-3:#f5f1e6;
  --ink:#191412; --ink-2:#544a3e;
  --rule:#c5bca5; --rule-soft:#d5ccb8; --chip:#d5cbb4;
  --accent:#96251a; --accent-2:#701a12; --sobre-accent:#fff;
  --gold:#7d5f0d;
  --sans:'Archivo',system-ui,-apple-system,'Segoe UI',sans-serif;
  --mono:'IBM Plex Mono',ui-monospace,'SF Mono',Menlo,monospace;
  --pixel:'Press Start 2P',var(--mono);
}
@media (prefers-color-scheme:dark){
  :root:not([data-theme="light"]){
    --ground:#14110e; --ground-2:#1d1915; --ground-3:#25201b;
    --ink:#efe9dc; --ink-2:#a9a08e;
    --rule:#352e26; --rule-soft:#282219; --chip:#2a241d;
    --accent:#f0705c; --accent-2:#d8503c; --sobre-accent:#14110e;
    --gold:#d9b04a;
  }
}
:root[data-theme="dark"]{
  --ground:#14110e; --ground-2:#1d1915; --ground-3:#25201b;
  --ink:#efe9dc; --ink-2:#a9a08e;
  --rule:#352e26; --rule-soft:#282219; --chip:#2a241d;
  --accent:#f0705c; --accent-2:#d8503c; --sobre-accent:#14110e;
  --gold:#d9b04a;
}
*{box-sizing:border-box}
body{background:var(--ground);color:var(--ink);font-family:var(--sans);
     font-size:15px;line-height:1.5;-webkit-font-smoothing:antialiased}
.folha{max-width:1080px;margin:0 auto;padding:40px 22px 80px}

/* ---- cabecalho ---- */
.marca{font-family:var(--pixel);font-size:11px;letter-spacing:.5px;color:var(--accent);
       display:block;margin-bottom:20px}
h1{font-family:var(--sans);font-weight:800;font-size:clamp(30px,5vw,42px);line-height:1.08;
   margin:0 0 10px;text-wrap:balance;letter-spacing:-.02em}
.entrada{color:var(--ink-2);max-width:64ch;margin:0 0 6px}
.aviso{display:flex;gap:10px;align-items:flex-start;margin:22px 0 0;padding:12px 14px;
       background:var(--ground-2);border-left:3px solid var(--accent);color:var(--ink-2);
       font-size:13.5px;max-width:68ch}
.aviso b{color:var(--ink);font-weight:600}

/* ---- painel de progresso ---- */
.painel{position:sticky;top:0;z-index:5;margin:26px 0 0;padding:14px 16px;
        background:var(--ground-3);border:1px solid var(--rule);
        display:flex;flex-wrap:wrap;gap:14px 18px;align-items:center}
.conta{font-family:var(--mono);font-size:13px;font-variant-numeric:tabular-nums;color:var(--ink-2)}
.conta b{color:var(--ink);font-weight:600}
.barra{flex:1 1 180px;height:5px;background:var(--rule-soft);min-width:120px}
.barra i{display:block;height:100%;width:0;background:var(--accent);transition:width .2s}
.bt{font-family:var(--sans);font-size:13px;font-weight:600;cursor:pointer;
    border:1px solid var(--rule);background:var(--ground-2);color:var(--ink);
    padding:7px 13px;transition:background .12s,border-color .12s}
.bt:hover{background:var(--chip);border-color:var(--ink-2)}
.bt:focus-visible{outline:2px solid var(--accent);outline-offset:2px}
.bt.forte{background:var(--accent);border-color:var(--accent);color:var(--sobre-accent)}
.bt.forte:hover{background:var(--accent-2);border-color:var(--accent-2)}
.bt.feito{background:var(--gold);border-color:var(--gold);color:var(--sobre-accent)}

/* ---- secoes por nivel ---- */
.nivel{margin:46px 0 0}
.nivel-cab{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;
           padding-bottom:10px;border-bottom:2px solid var(--ink)}
.nivel-cab h2{margin:0;font-size:20px;font-weight:800;letter-spacing:-.01em}
.marcador{font-family:var(--mono);font-size:15px;color:var(--accent)}
.quantos{font-family:var(--mono);font-size:12px;color:var(--ink-2);margin-left:auto;
         font-variant-numeric:tabular-nums}
.nivel-nota{color:var(--ink-2);font-size:13.5px;margin:10px 0 0;max-width:66ch}

/* ---- um jogo ---- */
.jogo{display:grid;grid-template-columns:minmax(210px,1fr) minmax(0,2.1fr);gap:22px;
      padding:22px 0;border-bottom:1px solid var(--rule-soft)}
.jogo:last-child{border-bottom:0}
.nome{margin:0;font-size:17px;font-weight:700;line-height:1.25;text-wrap:balance}
.jp{font-size:13px;color:var(--ink-2);margin:3px 0 0}
.ficha{display:flex;flex-direction:column;gap:3px;margin:12px 0 0;
       font-family:var(--mono);font-size:11.5px;color:var(--ink-2);line-height:1.45}
.ficha span{display:block;overflow-wrap:anywhere}
.ficha .rot{color:var(--ink);font-weight:500}
.arquivos{display:flex;flex-direction:column;gap:12px;min-width:0}

/* ---- um patch ---- */
.patch{background:var(--ground-2);border:1px solid var(--rule);padding:13px 14px;min-width:0}
.patch-cab{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:9px}
.idi{font-family:var(--mono);font-size:11px;font-weight:600;letter-spacing:.06em;
     background:var(--chip);padding:3px 7px;white-space:nowrap}
.arq{font-family:var(--mono);font-size:11.5px;color:var(--ink-2);
     font-variant-numeric:tabular-nums;margin-left:auto;text-align:right}
.url{display:block;font-family:var(--mono);font-size:11.5px;line-height:1.5;
     background:var(--ground-3);border:1px solid var(--rule-soft);padding:8px 10px;
     overflow-wrap:anywhere;cursor:text;color:var(--ink)}
.url:focus-visible{outline:2px solid var(--accent);outline-offset:1px}
.acoes{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:9px}
.riscar{display:flex;align-items:center;gap:6px;font-size:12.5px;color:var(--ink-2);cursor:pointer}
.riscar input{accent-color:var(--accent);width:15px;height:15px;cursor:pointer}
.patch.pronto{opacity:.55}
.patch.pronto .url{text-decoration:line-through;text-decoration-color:var(--ink-2)}
.livre{margin:9px 0 0;font-family:var(--mono);font-size:11px;color:var(--ink-2);
       overflow-wrap:anywhere;padding-top:8px;border-top:1px dotted var(--rule)}
.livre b{color:var(--gold);font-weight:600}

/* ---- sem patch ---- */
.pendentes{margin:52px 0 0;padding:20px 22px;background:var(--ground-2);border:1px dashed var(--rule)}
.pendentes h2{margin:0 0 4px;font-size:18px;font-weight:800}
.pendentes p.intro{margin:0 0 16px;color:var(--ink-2);font-size:13.5px;max-width:64ch}
.pend{display:grid;grid-template-columns:minmax(160px,auto) 1fr;gap:6px 18px;
      padding:11px 0;border-top:1px solid var(--rule-soft);align-items:baseline}
.pend b{font-weight:700;font-size:14.5px}
.pend span{color:var(--ink-2);font-size:13.5px}
.pend em{font-family:var(--mono);font-style:normal;font-size:11px;color:var(--ink-2);
         display:block;margin-top:2px}

footer{margin:56px 0 0;padding-top:18px;border-top:1px solid var(--rule);
       font-family:var(--mono);font-size:11.5px;color:var(--ink-2);
       display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap}

@media (max-width:720px){
  .jogo{grid-template-columns:1fr;gap:14px}
  .painel{position:static}
  .pend{grid-template-columns:1fr;gap:2px}
}
@media (prefers-reduced-motion:reduce){*{transition:none!important}}
"""

def bloco_patch(j, p):
    idis = ''.join(
        '<span class="idi">' + BANDEIRA[i][0] + ' ' + BANDEIRA[i][1] + '</span>'
        for i in p['idiomas'])
    livre = ''
    if p['site']:
        livre = ('<p class="livre"><b>Grátis no site:</b> ' + e(p['site']) + '</p>')
    return (
      '<div class="patch" data-id="' + e(j['slug'] + '/' + p['arquivo']) + '">'
      '<div class="patch-cab">' + idis +
        '<span class="arq">' + e(p['arquivo']) + '<br>' + e(p['formato']) + ' · ' + e(p['tam']) + '</span>'
      '</div>'
      '<code class="url" tabindex="0">' + e(p['url']) + '</code>'
      '<div class="acoes">'
        '<button class="bt forte copiar" type="button">Copiar link</button>'
        '<label class="riscar"><input type="checkbox" class="risco"> já colei no Patreon</label>'
      '</div>' + livre + '</div>')

def bloco_jogo(j):
    sub = j['sub'] or j['jp']
    linha_sub = '<p class="jp">' + e(sub) + '</p>' if sub else ''
    sistema = ' · '.join(x for x in (j['sistema'], str(j['ano'])) if x)
    return (
      '<article class="jogo">'
      '<div><h3 class="nome">' + e(j['nome']) + '</h3>' + linha_sub +
        '<div class="ficha">'
          '<span><span class="rot">' + e(sistema) + '</span></span>'
          '<span>ROM base: ' + e(j['rom']) + '</span>'
          '<span>md5 ' + e(j['md5']) + '</span>'
        '</div>'
      '</div>'
      '<div class="arquivos">' + ''.join(bloco_patch(j, p) for p in j['patches']) + '</div>'
      '</article>')

partes = []
total = 0
for nivel in ('release', 'beta', 'alfa'):
    do_nivel = [j for j in jogos if j['nivel'] == nivel and j['patches']]
    n = sum(len(j['patches']) for j in do_nivel)
    total += n
    rot, marca, nota = ROTULO[nivel]
    partes.append(
      '<section class="nivel">'
      '<div class="nivel-cab"><span class="marcador">' + marca + '</span>'
      '<h2>' + rot + '</h2>'
      '<span class="quantos">' + str(len(do_nivel)) + ' jogos · ' + str(n) + ' arquivos</span></div>'
      '<p class="nivel-nota">' + nota + '</p>' +
      ''.join(bloco_jogo(j) for j in do_nivel) + '</section>')

pend = [j for j in jogos if not j['patches']]
linhas_pend = ''.join(
  '<div class="pend"><b>' + e(j['nome']) + '</b>'
  '<span>' + e(SEM_PATCH.get(j['slug'], PADRAO)) +
  '<em>' + e(j['sistema']) + ' · ' + ROTULO[j['nivel']][0].lower() + '</em></span></div>'
  for j in pend)

CORPO = (
 '<div class="folha">'
 '<header>'
   '<span class="marca">PATCH CLAN</span>'
   '<h1>Links dos patches para o Patreon</h1>'
   '<p class="entrada">Os ' + str(total) + ' arquivos de patch hospedados no servidor, um link direto '
   'para cada. Copie e cole na página do jogo no Patreon; marque conforme for colando.</p>'
   '<div class="aviso"><div><b>Estes links são o porteiro.</b> Quem tem a URL baixa o arquivo — '
   'os nomes carregam um token justamente para não serem adivinhados, e a listagem do bucket vem '
   'vazia. Por isso esta página não deve ser compartilhada com ninguém.</div></div>'
 '</header>'
 '<div class="painel">'
   '<span class="conta"><b id="feitos">0</b> de <b>' + str(total) + '</b> colados</span>'
   '<span class="barra"><i id="barra"></i></span>'
   '<button class="bt" type="button" id="tudo">Copiar a lista inteira</button>'
   '<button class="bt" type="button" id="limpar">Zerar as marcas</button>'
 '</div>'
 + ''.join(partes) +
 '<section class="pendentes">'
   '<h2>Ainda sem patch</h2>'
   '<p class="intro">Três jogos estão no site mas não têm arquivo para entregar. '
   'A ROM traduzida existe nos três — o que falta é gerar e conferir o patch.</p>'
   + linhas_pend +
 '</section>'
 '<footer><span>patchclan.com</span><span>' + str(total) + ' arquivos · levantado em 10/09/2026</span></footer>'
 '</div>')

# lista em texto puro, para o botao "copiar a lista inteira"
texto = []
for nivel in ('release', 'beta', 'alfa'):
    for j in jogos:
        if j['nivel'] != nivel or not j['patches']: continue
        for p in j['patches']:
            idi = '/'.join(BANDEIRA[i][1] for i in p['idiomas'])
            texto.append(j['nome'] + ' (' + ROTULO[nivel][0] + ', ' + idi + ')\n' + p['url'])
TEXTO = json.dumps('\n\n'.join(texto))

JS = """
(function(){
  var CHAVE='patchclan-patreon-colados';
  var marcados={};
  try{marcados=JSON.parse(localStorage.getItem(CHAVE)||'{}')}catch(err){marcados={}}
  var caixas=[].slice.call(document.querySelectorAll('.patch'));
  var alvo=caixas.length, feitos=document.getElementById('feitos'), barra=document.getElementById('barra');

  function pintar(){
    var n=0;
    caixas.forEach(function(c){ if(c.classList.contains('pronto')) n++; });
    feitos.textContent=n;
    barra.style.width=alvo?(n/alvo*100)+'%':'0';
  }
  function guardar(){
    try{localStorage.setItem(CHAVE,JSON.stringify(marcados))}catch(err){}
  }
  function copiar(txt,bt,rotulo){
    function feito(){
      var antes=bt.textContent;
      bt.textContent='Copiado \\u2713'; bt.classList.add('feito');
      setTimeout(function(){bt.textContent=antes;bt.classList.remove('feito')},1400);
    }
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(txt).then(feito,function(){antigo(txt,feito)});
    } else { antigo(txt,feito); }
  }
  function antigo(txt,feito){
    var ta=document.createElement('textarea');
    ta.value=txt; ta.setAttribute('readonly','');
    ta.style.cssText='position:fixed;top:-1000px;opacity:0';
    document.body.appendChild(ta); ta.select();
    try{document.execCommand('copy');feito()}catch(err){}
    document.body.removeChild(ta);
  }

  caixas.forEach(function(c){
    var id=c.getAttribute('data-id');
    var url=c.querySelector('.url').textContent;
    var risco=c.querySelector('.risco');
    if(marcados[id]){ risco.checked=true; c.classList.add('pronto'); }
    c.querySelector('.copiar').addEventListener('click',function(){ copiar(url,this); });
    risco.addEventListener('change',function(){
      c.classList.toggle('pronto',this.checked);
      if(this.checked){marcados[id]=1}else{delete marcados[id]}
      guardar(); pintar();
    });
    c.querySelector('.url').addEventListener('click',function(){
      var r=document.createRange(); r.selectNodeContents(this);
      var s=window.getSelection(); s.removeAllRanges(); s.addRange(r);
    });
  });

  document.getElementById('tudo').addEventListener('click',function(){ copiar(LISTA,this); });
  document.getElementById('limpar').addEventListener('click',function(){
    marcados={}; guardar();
    caixas.forEach(function(c){ c.classList.remove('pronto'); c.querySelector('.risco').checked=false; });
    pintar();
  });
  pintar();
})();
"""

pagina = (
 '<title>Links do Patch Clan</title>\n'
 '<link rel="preconnect" href="https://fonts.googleapis.com">\n'
 '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
 '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
 'family=Archivo:wght@500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600'
 '&family=Press+Start+2P&display=swap">\n'
 '<style>' + CSS + '</style>\n'
 + CORPO + '\n'
 '<script>var LISTA=' + TEXTO + ';</script>\n'
 '<script>' + JS + '</script>\n')

# NUNCA dentro de ~/patchclan-site: o repositorio e PUBLICO e a pagina carrega os tokens
saida = SAIDA / 'patchclan-links-patreon.html'
saida.write_text(pagina)
print('escrito:', saida, len(pagina)//1024, 'KB ·', total, 'patches ·', len(pend), 'pendentes')

# a mesma lista em texto puro, para colar em qualquer lugar
linhas_txt = []
for nivel in ('release', 'beta', 'alfa'):
    for j in jogos:
        if j['nivel'] != nivel or not j['patches']:
            continue
        for p in j['patches']:
            idi = '/'.join(BANDEIRA[i][1] for i in p['idiomas'])
            linhas_txt.append(f"{j['nome']} ({ROTULO[nivel][0].upper()}, {idi}, {p['formato']} {p['tam']})\n{p['url']}")
            if p['site']:
                linhas_txt.append(f"    grátis no site: {p['site']}")
txt = SAIDA / 'patchclan-links-patreon.txt'
txt.write_text('PATCH CLAN — links diretos dos patches\n\n' + '\n\n'.join(linhas_txt) + '\n')
print('escrito:', txt)
