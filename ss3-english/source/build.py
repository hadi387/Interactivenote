import os
d=os.path.dirname(os.path.abspath(__file__))
def rd(f): return open(os.path.join(d,f),encoding='utf-8').read()
arena=open('/tmp/claude-0/-home-user-Interactivenote/40c0fa51-73e5-5175-98ac-85d8dd3afd91/scratchpad/arena.html',encoding='utf-8').read()
a0=arena.index('/* ---------- audio: sfx + chiptune music ---------- */');a1=arena.index('/* ---------- visuals: rain, particles')
audio=arena[a0:a1]
b0=arena.index('function bossSVG(color,mood){');b1=arena.index('const heart=on=>')
bsvg=arena[b0:b1]
eng=rd('engine.js').replace('/*@@GAME@@*/',rd('game.js').replace('/*@@AUDIO@@*/',audio).replace('/*@@BOSSSVG@@*/',bsvg).replace('/*@@LABS@@*/',rd('labs_engine.js')))
js='\n'.join([rd(f) for f in ['c0_helpers.js','c1_recast.js','c2_reported.js','c3_function.js','c4_exams.js','c5_revision.js','c6_labs.js','game_content.js']]+[eng])
css=rd('style.css')+rd('game.css')
body='''<script>window.onerror=function(m,s,l){try{var d=document.getElementById('errbar');if(!d){d=document.createElement('div');d.id='errbar';d.style.cssText='position:fixed;left:0;right:0;top:0;z-index:9999;background:#B00020;color:#fff;padding:8px 12px;font:14px/1.3 Arial,sans-serif';document.body.appendChild(d)}d.textContent='Something broke: '+m+' (line '+l+'). Tell your teacher.'}catch(e){}};</script>
<div id="floor" aria-hidden="true"></div><canvas id="bg" aria-hidden="true"></canvas><canvas id="fx" aria-hidden="true"></canvas>
<header class="top"><div class="wrap"><button class="ib" id="menu" aria-label="Back to the level map" style="margin:0 10px 0 0">MAP</button><div class="brand" id="brand" style="cursor:pointer"><b>Grammar Arena · SS3 English</b><div class="hud" id="hud"></div><small id="sub">Contents</small></div><button class="ib" id="mus" aria-label="Music on or off">MUSIC</button><button class="ib" id="cog" aria-label="Settings">⚙</button></div><div class="bar"><i id="gbar"></i></div></header>
<aside id="drawer" aria-label="Table of contents"></aside><div id="shade"></div>
<main><div class="wrap" id="app"></div></main>
<div class="nav" id="navbar" style="display:none"><div class="wrap"><button class="btn gh" id="pv">Back</button><div class="mid" id="navmid"></div><button class="btn" id="nx">Next</button></div></div>'''
fonts='<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Bungee&family=Lexend:wght@400;600;700&display=swap" rel="stylesheet">'
title='<title>Grammar Arena SS3</title>'
frag='<meta name="claude:viewport-fit-sides" content="cover">\n'+title+'\n'+fonts+'\n<style>\n'+css+'</style>\n'+body+'\n<script>\n'+js+'\n</script>\n'
open(os.path.join(d,'ss3-fragment.html'),'w',encoding='utf-8').write(frag)
doc='<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="#0F1117">\n'+title+'\n'+fonts+'\n<style>body{margin:0}</style>\n<style>\n'+css+'</style></head><body>\n'+body+'\n<script>\n'+js+'\n</script></body></html>\n'
os.makedirs('/home/user/Interactivenote/ss3-english',exist_ok=True)
open('/home/user/Interactivenote/ss3-english/index.html','w',encoding='utf-8').write(doc)
open(os.path.join(d,'all.js'),'w',encoding='utf-8').write(js)
print(len(doc))
