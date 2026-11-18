import os
d=os.path.dirname(os.path.abspath(__file__))
def rd(f): return open(os.path.join(d,f),encoding='utf-8').read()
js='\n'.join(rd(f) for f in ['c0_helpers.js','c1_recast.js','c2_reported.js','c3_function.js','c4_exams.js','c5_revision.js','engine.js'])
css=rd('style.css')
body='''<header class="top"><div class="wrap"><button class="ib" id="menu" aria-label="Open contents menu" style="margin:0 10px 0 0">☰</button><div class="brand" id="brand" style="cursor:pointer"><b>SS3 English · Recasting and function</b><small id="sub">Contents</small></div></div><div class="bar"><i id="gbar"></i></div></header>
<aside id="drawer" aria-label="Table of contents"></aside><div id="shade"></div>
<main><div class="wrap" id="app"></div></main>
<div class="nav" id="navbar" style="display:none"><div class="wrap"><button class="btn gh" id="pv">Back</button><div class="mid" id="navmid"></div><button class="btn" id="nx">Next</button></div></div>'''
fonts='<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap" rel="stylesheet">'
title='<title>SS3 English Recasting</title>'
frag='<meta name="claude:viewport-fit-sides" content="cover">\n'+title+'\n'+fonts+'\n<style>\n'+css+'</style>\n'+body+'\n<script>\n'+js+'\n</script>\n'
open(os.path.join(d,'ss3-fragment.html'),'w',encoding='utf-8').write(frag)
doc='<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="#0B7A4B">\n'+title+'\n'+fonts+'\n<style>body{margin:0}</style>\n<style>\n'+css+'</style></head><body>\n'+body+'\n<script>\n'+js+'\n</script></body></html>\n'
os.makedirs('/home/user/Interactivenote/ss3-english',exist_ok=True)
open('/home/user/Interactivenote/ss3-english/index.html','w',encoding='utf-8').write(doc)
open(os.path.join(d,'all.js'),'w',encoding='utf-8').write(js)
print(len(doc))
