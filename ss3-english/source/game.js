/* ================= GAME LAYER (lives inside the engine scope) ================= */
var S={get sfx(){return ST.set.sfx},get music(){return ST.set.music}};
var RM=!!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion:reduce)').matches);
function buzz(n){try{if(navigator.vibrate&&ST.set.sfx)navigator.vibrate(n)}catch(e){}}
function isLite(){return document.body.classList.contains('lite')}
function pick(a){return a[Math.random()*a.length|0]}
/*@@AUDIO@@*/
/*@@BOSSSVG@@*/

/* ---- mascot: Penny the pencil ---- */
function penSVG(m){
  var eyes=m==='ok'?'<path d="M19 38q3-4 6 0M35 38q3-4 6 0" stroke="#2A2118" stroke-width="2.6" fill="none" stroke-linecap="round"/>':'<circle cx="22" cy="38" r="3" fill="#2A2118"/><circle cx="38" cy="38" r="3" fill="#2A2118"/>';
  var mouth=m==='no'?'<path d="M24 50q6-5 12 0" stroke="#2A2118" stroke-width="2.6" fill="none" stroke-linecap="round"/>':m==='ok'?'<path d="M22 47q8 9 16 0z" fill="#2A2118"/>':'<path d="M25 49q5 4 10 0" stroke="#2A2118" stroke-width="2.6" fill="none" stroke-linecap="round"/>';
  return '<svg viewBox="0 0 60 84" aria-hidden="true"><polygon points="30,2 12,24 48,24" fill="#F2C9A0"/><polygon points="30,2 24,11 36,11" fill="#3A3A44"/><rect x="12" y="24" width="36" height="42" fill="#FFD23F"/><rect x="12" y="24" width="8" height="42" fill="#F0B800"/><rect x="12" y="66" width="36" height="6" fill="#B8C0CC"/><rect x="12" y="72" width="36" height="9" rx="3" fill="#FF7A8A"/>'+eyes+mouth+'</svg>';
}
var CHEER=['Ehen! You sabi am!','Correct! Keep going.','Sharp! Na you be that.','Yes! Penny is proud.','Oya, na so we do am!'];
var OOPS=['No wahala. Read the reason.','Close! Try the next one.','Oops. Now you know.','Tricky one. You go get the next.'];
var ptT=null;
function penToast(mood,txt){
  var old=document.getElementById('ptoast');if(old)old.remove();clearTimeout(ptT);
  var d=document.createElement('div');d.id='ptoast';d.className='ptoast '+mood;d.innerHTML='<span class="pi">'+penSVG(mood)+'</span><span class="pb">'+esc(txt)+'</span>';
  document.body.appendChild(d);ptT=setTimeout(function(){d.classList.add('out');setTimeout(function(){d.remove()},300)},2300);
}

/* ---- visuals: floating grammar glyphs, confetti, floaters, overlays ---- */
(function bg(){
  var cv=document.getElementById('bg'),cx=cv.getContext('2d'),W=0,H=0,gl=[],last=0;
  var CH=['A','B','?','!','“','”',',','.','be','by','who','-ed','if','to','is','was'],COL=['#4DA3FF','#FFD23F','#2EE6A6','#FF5A6E','#B084FF'];
  function size(){W=cv.width=innerWidth;H=cv.height=innerHeight;gl=[];for(var i=0;i<18;i++)gl.push({x:Math.random()*W,y:Math.random()*H,s:18+Math.random()*34,t:CH[i%CH.length],c:COL[i%5],v:.2+Math.random()*.5,r:(Math.random()-.5)*.8,rv:(Math.random()-.5)*.006})}
  size();addEventListener('resize',size);
  function draw(){cx.clearRect(0,0,W,H);gl.forEach(function(g){cx.save();cx.translate(g.x,g.y);cx.rotate(g.r);cx.globalAlpha=.16;cx.fillStyle=g.c;cx.font='800 '+g.s+'px Lexend,Arial,sans-serif';cx.fillText(g.t,0,0);cx.restore()})}
  function tick(t){
    if(isLite()){if(t-last>1500){last=t;draw()}}
    else if(!document.hidden&&t-last>40){last=t;gl.forEach(function(g){g.y-=g.v;g.r+=g.rv;if(g.y<-60){g.y=H+40;g.x=Math.random()*W}});draw()}
    if(!RM)requestAnimationFrame(tick)
  }
  if(RM)draw();else requestAnimationFrame(tick);
})();
function burst(n,x,y){
  n=n||80;if(isLite())n=Math.ceil(n/3);if(RM)return;
  var cv=document.getElementById('fx'),cx=cv.getContext('2d');cv.width=innerWidth;cv.height=innerHeight;
  var cs=['#FFD23F','#4DA3FF','#2EE6A6','#FF5A6E','#B084FF','#fff'];x=x==null?innerWidth/2:x;y=y==null?innerHeight*.45:y;
  var ps=[];for(var i=0;i<n;i++)ps.push({x:x,y:y,vx:(Math.random()-.5)*16,vy:-Math.random()*14-2,r:4+Math.random()*7,c:cs[Math.random()*6|0],a:Math.random()*6});
  var f=0;(function st(){cx.clearRect(0,0,cv.width,cv.height);ps.forEach(function(p){p.x+=p.vx;p.y+=p.vy;p.vy+=.45;p.a+=.3;cx.save();cx.translate(p.x,p.y);cx.rotate(p.a);cx.fillStyle=p.c;cx.fillRect(-p.r/2,-p.r/2,p.r,p.r*1.7);cx.restore()});if(++f<90)requestAnimationFrame(st);else cx.clearRect(0,0,cv.width,cv.height)})();
}
function floatTxt(txt,el,color){
  var r=el&&el.getBoundingClientRect?el.getBoundingClientRect():{left:innerWidth/2,top:innerHeight/2,width:0};
  var d=document.createElement('div');d.className='fl';d.textContent=txt;d.style.left=Math.max(8,Math.min(innerWidth-120,r.left+r.width/2-40))+'px';d.style.top=Math.max(70,Math.min(innerHeight-120,r.top-6))+'px';if(color)d.style.color=color;
  document.body.appendChild(d);setTimeout(function(){d.remove()},950);
}
function flashFx(color){var d=document.createElement('div');d.className='flashfx';d.style.background=color;document.body.appendChild(d);setTimeout(function(){d.remove()},450)}
function shakeScreen(){buzz(80);document.body.classList.add('shk');setTimeout(function(){document.body.classList.remove('shk')},380)}
function overlay(kind,a,b,c,ms){
  return new Promise(function(res){
    var o=document.createElement('div');o.className='ov '+(kind||'');
    o.innerHTML='<div class="p1"></div><div class="p2"></div><div class="tx"><div class="a">'+esc(a)+'</div><div class="b">'+esc(b)+'</div>'+(c?'<div class="c">'+esc(c)+'</div>':'')+'</div>';
    document.body.appendChild(o);sfx.whoosh();requestAnimationFrame(function(){requestAnimationFrame(function(){o.classList.add('in')})});
    var closed=false;function close(){if(closed)return;closed=true;o.classList.add('out');setTimeout(function(){o.remove();res()},350)}
    o.onclick=close;setTimeout(close,ms||2200);
  });
}

/* ---- XP, levels, streak ---- */
var LVX=[0,100,250,450,700,1000,1400,1900,2500,3200,4000];
var TITLES=['Rookie Writer','Sentence Smith','Grammar Guard','Clause Captain','Passive Pro','Quote Ranger','Function Master','WAEC Warrior','JAMB Jedi','Grammar Legend','Grammar Legend'];
function lvlOf(xp){var l=0;for(var i=0;i<LVX.length;i++)if(xp>=LVX[i])l=i;return l}
function hud(){
  var xp=ST.xp||0,l=lvlOf(xp),lo=LVX[l],hi=LVX[Math.min(l+1,LVX.length-1)],p=hi>lo?Math.round(100*(xp-lo)/(hi-lo)):100;
  var h=document.getElementById('hud');if(!h)return;
  h.innerHTML='<b class="lv">LV '+(l+1)+'</b><span class="xpb"><i style="width:'+p+'%"></i></span><span class="xpt">'+xp+' XP</span>'+(RT.streak>=2?'<span class="stk">× '+RT.streak+'</span>':'');
  var sn=document.getElementById('sub');if(sn&&RT.cur.sec==='home')sn.textContent=TITLES[l];
  var mb=document.getElementById('mus');if(mb)mb.className='ib'+(ST.set.music?'':' off');
}
function addXp(n,el,color){
  if(n<=0)return;var before=lvlOf(ST.xp||0);ST.xp=(ST.xp||0)+n;
  floatTxt('+'+n+' XP',el,color||'#FFD23F');save();hud();
  var after=lvlOf(ST.xp);
  if(after>before){sfx.up();burst(120);overlay('win','Level up!',TITLES[after],'Level '+(after+1),2300)}
}
function gameReward(id,kind){
  var el=document.querySelector('[data-card="'+id+'"]');
  if(kind==='miss'){RT.streak=0;sfx.no();shakeScreen();penToast('no',pick(OOPS));hud();return}
  RT.streak=(RT.streak||0)+1;if(RT.streak>(ST.best||0))ST.best=RT.streak;
  var base=kind==='first'?10:5,bonus=RT.streak>=3?Math.min(RT.streak,10)*2:0;
  sfx.ok();if(RT.streak>=3)burst(RT.streak>=5?70:35);
  addXp(base+bonus,el);
  penToast('ok',RT.streak>=3?('Streak × '+RT.streak+'! '+pick(CHEER)):pick(CHEER));hud();
}
function gameExam(ok,total,isMock){
  var xp=ok*(isMock?5:3);sfx[ok/total>=.7?'win':'ok']();if(ok/total>=.7)burst(100);
  addXp(xp,null);
}
function gameFirst(){try{actx();if(ST.set.music&&!MU.on)musicSet('menu')}catch(e){}}

/* ---- section scene: Penny walks toward the villain as ideas are revealed ---- */
function gameBanner(secId,scr){
  var v=VILL[secId];if(!v)return '';
  return '<div class="banner scene" style="--vc:'+v.c+'"><div class="bm"><b>'+esc(v.n)+'</b><span id="bq">“'+esc(v.q[scr%v.q.length])+'”</span></div><div class="track"><div class="bp" id="bpen">'+penSVG('idle')+'</div><div class="bv" id="bvil">'+bossSVG(v.c,'idle')+'</div></div></div>';
}
function penWalk(){
  var pen=document.getElementById('bpen');if(!pen||!RT.units)return;
  var n=RT.units.length,rev=RT.rev[curKey()]||1,fin=!!ST.fin[curKey()]&&rev>=n;
  var frac=n>1?(rev-1)/(n-1):0;if(fin&&n>1)frac=1;
  pen.style.left=(frac*68)+'%';
  var v=VILL[RT.cur.sec],q=document.getElementById('bq');
  if(v&&q)q.textContent='“'+v.q[(rev-1+RT.cur.scr)%v.q.length]+'”';
  var vil=document.getElementById('bvil');
  if(vil&&fin&&n>1&&!vil.getAttribute('data-hit')){vil.setAttribute('data-hit','1');vil.className='bv hit'}
}
function gameIntro(sec){
  if(RT.seen[sec])return;RT.seen[sec]=1;
  var s=secObj(sec),v=VILL[sec];if(!s)return;
  overlay('lose',s.part,v?v.n.replace(/^The /,''):s.title,s.title,1500);
}
/* ---- animated word chips (FLIP) ---- */
function chipsRender(box,toks,animate){
  var old={},first={},seen={};
  [].forEach.call(box.children,function(c){var k=c.getAttribute('data-k');old[k]=c;first[k]=c.getBoundingClientRect()});
  var br=box.getBoundingClientRect();
  toks.forEach(function(t){
    var c=old[t.k],fresh=false;if(!c){c=document.createElement('span');c.setAttribute('data-k',t.k);fresh=true}
    var changed=!fresh&&c.textContent!==t.t;
    c.textContent=t.t;c.className='chip c-'+(t.c||'x')+(fresh?' pop':'')+(changed?' chg':'');
    if(t.lab)c.setAttribute('data-lab',t.lab);else c.removeAttribute('data-lab');
    box.appendChild(c);seen[t.k]=1;
  });
  Object.keys(old).forEach(function(k){
    if(seen[k])return;var c=old[k];
    if(animate&&!isLite()&&!RM){c.style.position='absolute';c.style.left=(first[k].left-br.left)+'px';c.style.top=(first[k].top-br.top)+'px';c.className+=' gone';box.appendChild(c);setTimeout(function(){if(c.parentNode)c.parentNode.removeChild(c)},450)}
    else if(c.parentNode)c.parentNode.removeChild(c);
  });
  if(!animate||isLite()||RM)return;
  [].forEach.call(box.children,function(c){
    var k=c.getAttribute('data-k');if(!first[k]||!seen[k])return;
    var l=c.getBoundingClientRect(),dx=first[k].left-l.left,dy=first[k].top-l.top;
    if(Math.abs(dx)>1||Math.abs(dy)>1){c.style.transition='none';c.style.transform='translate('+dx+'px,'+dy+'px)';
      (function(c){requestAnimationFrame(function(){requestAnimationFrame(function(){c.style.transition='transform .65s cubic-bezier(.2,.9,.3,1)';c.style.transform=''})})})(c)}
  });
}
function animInit(el){
  var id=el.getAttribute('data-anim'),D=ANIMS[id],k=0,n=D.steps.length;
  el.innerHTML='<div class="at">'+esc(D.title)+'</div><div class="chips" role="img" aria-label="Animated sentence"></div><div class="acap" aria-live="polite"></div><div class="aprog"></div><div class="row"><button class="btn gh sm" data-x="p">Back</button><button class="btn" data-x="n">Next step</button><button class="btn gh sm" data-x="r">Replay</button></div>';
  var box=$('.chips',el),cap=$('.acap',el),pr=$('.aprog',el),bp=$('[data-x="p"]',el),bn=$('[data-x="n"]',el),br=$('[data-x="r"]',el);
  function show(i,anim){
    k=i;chipsRender(box,D.steps[i].tok,anim);cap.innerHTML=D.steps[i].cap;pr.textContent='Step '+(i+1)+' of '+n;
    bp.disabled=i===0;bn.disabled=i===n-1;
    if(i===n-1&&!ST.anim[id]){ST.anim[id]=1;save();addXp(D.xp,bn,'#2EE6A6')}
    if(i===n-1)revUpdate();
  }
  bp.onclick=function(){sfx.tap();if(k>0)show(k-1,true)};
  bn.onclick=function(){sfx.flip();if(k<n-1)show(k+1,true)};
  br.onclick=function(){sfx.tap();box.innerHTML='';show(0,false)};
  show(0,false);
}

/* ---- boss battles ---- */
function bossPool(B){
  var out=[];Object.keys(QIDX).forEach(function(k){var q=QIDX[k];if(q.type==='mcq'&&q.opts.length>=3&&B.topics.indexOf(q.topic)>=0&&!/^(w|j|m)\d+$/.test(k))out.push(q)});return out;
}
function noNum(q){return String(q).replace(/^<b>\d+\.<\/b>\s*/,'')}
function shuf(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),x=a[i];a[i]=a[j];a[j]=x}return a}
function heartsHtml(n){var h='';for(var i=0;i<3;i++)h+='<svg viewBox="0 0 24 24" class="ht"><path d="M12 21l-8-8a5 5 0 0 1 8-6 5 5 0 0 1 8 6z" fill="'+(i<n?'#FF5A6E':'#2E3447')+'"/></svg>';return h}
function bossInit(el){
  var id=el.getAttribute('data-boss'),B=BOSSES[id],HP=6,hp,hearts,order,qi,hits;
  function intro(){
    var best=ST.boss[id]||0;
    el.innerHTML='<div class="arena"><div class="fg"><span class="pv">'+penSVG('idle')+'</span><b>You</b><span class="hearts">'+heartsHtml(3)+'</span></div><div class="vs">VS</div><div class="fg"><span class="vv">'+bossSVG(B.color,'idle')+'</span><b style="color:'+B.color+'">'+esc(B.name)+'</b><span class="hpb">'+new Array(HP+1).join('<i style="background:'+B.color+'"></i>')+'</span></div></div>'+
      '<p class="muted" style="text-align:center">'+HP+' hits to win. 3 hearts. Best result: '+(best?new Array(best+1).join('★')+new Array(4-best).join('☆'):'not yet')+'</p><div class="row" style="justify-content:center"><button class="btn" id="bgo">Fight!</button></div>';
    $('#bgo',el).onclick=function(){gameFirst();start()};
  }
  function start(){
    hp=HP;hearts=3;hits=0;qi=0;order=shuf(bossPool(B));
    overlay('lose','Boss battle',B.name.replace('The ',''),pick(B.taunt),1700).then(function(){if(ST.set.music)musicSet('battle');MU.mode='battle';ask()});
  }
  function arena(mood){
    return '<div class="arena"><div class="fg"><span class="pv">'+penSVG(mood==='hurt'?'no':'idle')+'</span><span class="hearts" id="hts">'+heartsHtml(hearts)+'</span></div><div class="vs">VS</div><div class="fg"><span class="vv'+(mood==='hit'?' hit':'')+'">'+bossSVG(B.color,mood==='hit'?'hit':'idle')+'</span><span class="hpb">'+(function(){var s='';for(var i=0;i<HP;i++)s+='<i class="'+(i>=hp?'lost':'')+'" style="background:'+(i>=hp?'':B.color)+'"></i>';return s})()+'</span></div></div>';
  }
  function ask(){
    if(qi>=order.length){order=order.concat(shuf(bossPool(B)))}
    var q=order[qi];
    el.innerHTML=arena('idle')+'<div class="qc" data-qid="'+q.id+'"><p class="qt">'+noNum(q.q)+'</p>'+q.opts.map(function(o,i){return '<button class="opt" data-i="'+i+'"><b class="l">'+LET[i]+'.</b> '+esc(o)+'</button>'}).join('')+'<div id="bf"></div></div>';
    $$('.opt',el).forEach(function(b){b.onclick=function(){answer(q,+b.getAttribute('data-i'))}});
  }
  function answer(q,i){
    var ok=i===q.a;
    $$('.opt',el).forEach(function(b,k){b.disabled=true;if(k===q.a)b.classList.add('good');else if(k===i)b.classList.add('bad')});
    var fb;
    if(ok){hp--;hits++;sfx.hit();addXp(15,$('.opt.good',el),'#FF5A6E');el.querySelector('.vv').classList.add('hit');var hb=$$('.hpb i',el);if(hb[hp]){hb[hp].className='lost';hb[hp].style.background=''}fb='<div class="fb g"><b>Direct hit!</b>'+q.why+'</div>'}
    else{hearts--;sfx.no();shakeScreen();var ht=$('#hts',el);if(ht)ht.innerHTML=heartsHtml(hearts);fb='<div class="fb b"><b>The boss strikes back!</b>'+(q.wr[i]||'')+' The correct answer is '+LET[q.a]+'. '+q.why+'</div>'}
    var done=hp<=0||hearts<=0;
    $('#bf',el).innerHTML=fb+'<div class="row"><button class="btn" id="bnx">'+(done?'Continue':'Next question')+'</button></div>';
    $('#bnx',el).onclick=function(){sfx.tap();qi++;if(done)finish(hp<=0);else ask()};
    $('#bnx',el).scrollIntoView&&setTimeout(function(){try{$('#bnx',el).scrollIntoView({block:'nearest'})}catch(e){}},50);
  }
  function finish(win){
    MU.mode='menu';
    if(win){
      var stars=hearts;if(stars>(ST.boss[id]||0)){ST.boss[id]=stars}save();
      sfx.win();burst(160);
      var bonus=50+20*hearts;
      el.innerHTML='<div class="arena"><div class="fg"><span class="pv">'+penSVG('ok')+'</span></div><div class="vs" style="font-size:22px">WIN</div><div class="fg"><span class="vv">'+bossSVG(B.color,'dead')+'</span></div></div><h3 style="text-align:center">Victory! '+new Array(hearts+1).join('★')+new Array(4-hearts).join('☆')+'</h3><p style="text-align:center">You beat '+esc(B.name)+' with '+hearts+' heart'+(hearts>1?'s':'')+' left.</p><div class="row" style="justify-content:center"><button class="btn" id="bag">Fight again</button></div>';
      addXp(bonus,$('h3',el),'#2EE6A6');
    }else{
      sfx.lose();
      el.innerHTML='<div class="arena"><div class="fg"><span class="pv">'+penSVG('no')+'</span></div><div class="vs" style="font-size:22px">LOST</div><div class="fg"><span class="vv">'+bossSVG(B.color,'idle')+'</span></div></div><h3 style="text-align:center">Out of hearts</h3><p style="text-align:center">'+esc(B.name)+' laughs: “'+esc(pick(B.taunt))+'” Study the lesson again, then come back.</p><div class="row" style="justify-content:center"><button class="btn" id="bag">Try again</button><button class="btn gh" data-act="go" data-sec="'+B.sec+'" data-scr="0">Review the lesson</button></div>';
    }
    $('#bag',el).onclick=function(){start()};
  }
  intro();
}

/* ---- class quiz battle (needs no server) ---- */
function seedInt(s){var h=2166136261;for(var i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function mulberry(a){return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function sshuffle(a,rng){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(rng()*(i+1)),x=a[i];a[i]=a[j];a[j]=x}return a}
function codeSig(name,score){var h=0,s=name+'|'+score+'|SS3';for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))%46656;var o=h.toString(36);while(o.length<3)o='0'+o;return o}
function cleanName(x){return String(x||'Player').replace(/[^A-Za-z0-9_-]/g,'').slice(0,12)||'Player'}
var BSHAPES=['<path d="M20 5 L36 34 H4 Z"/>','<path d="M20 3 L37 20 L20 37 L3 20 Z"/>','<circle cx="20" cy="20" r="16"/>','<rect x="5" y="5" width="30" height="30"/>'],BCOL=['#FF5A6E','#4DA3FF','#FFD23F','#2EE6A6'];
function battlePool(){var out=[];Object.keys(QIDX).forEach(function(k){var q=QIDX[k];if(q.type==='mcq'&&q.opts.length>=4)out.push(q)});return out.sort(function(a,b){return a.id<b.id?-1:1})}
function battleInit(el){
  var NAMES=['PenPal','QuoteKing','ClauseQueen','TenseTiger','VerbVictor'],SK=[.92,.82,.72,.62,.5],TIME=20;
  var code='',name='',Q=[],bots=[],qi=0,score=0,streak=0,timer=null;
  function lobby(){
    var rc='GRAM'+(1+Math.floor(Math.random()*98));
    el.innerHTML='<div class="box def"><div class="bt">How it works</div><div>10 questions. 20 seconds each. Answer fast for more points. Build a streak for bonus points. You race five rival bots. <b>Teacher:</b> tell the whole class one game code. Everyone gets the same questions in the same order.</div></div>'+
     '<label class="fl2" for="bnm">Your nickname</label><input class="tx" id="bnm" type="text" maxlength="12" value="Player" autocomplete="off"><label class="fl2" for="gc">Game code</label><input class="tx" id="gc" type="text" maxlength="8" value="'+rc+'" autocomplete="off">'+
     '<div class="row"><button class="btn" id="bgo">Start battle</button></div>';
    $('#bgo',el).onclick=function(){code=($('#gc',el).value||rc).toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,8)||rc;name=cleanName($('#bnm',el).value);gameFirst();begin()};
  }
  function begin(){
    var rng=mulberry(seedInt(code));
    Q=sshuffle(battlePool(),rng).slice(0,10);
    bots=NAMES.map(function(n,i){return {n:n,total:0,streak:0,per:Q.map(function(){return {c:rng()<SK[i],f:.15+rng()*.6}})}});
    qi=0;score=0;streak=0;el.innerHTML='<h3 style="text-align:center">Get ready, '+esc(name)+'!</h3><div class="count" id="cd">3</div>';
    if(ST.set.music)musicSet('battle');MU.mode='battle';
    var c=3;var iv=setInterval(function(){c--;if(c<=0){clearInterval(iv);question()}else{var d=$('#cd',el);if(d)d.textContent=c;sfx.tick()}},800);sfx.tick();
  }
  function question(){
    var q=Q[qi],t0=Date.now(),over=false;
    el.innerHTML='<div class="row"><span class="eyebrow" style="flex:1">Question '+(qi+1)+' of '+Q.length+'</span><b class="bscore">'+score+'</b></div><div class="tim"><i id="tb" style="width:100%"></i></div><div class="qc"><p class="qt">'+noNum(q.q)+'</p><div class="bt">'+q.opts.map(function(o,k){return '<button class="bti" data-k="'+k+'" style="--c:'+BCOL[k]+'"><svg viewBox="0 0 40 40" width="30" height="30">'+BSHAPES[k]+'</svg><span>'+esc(o)+'</span></button>'}).join('')+'</div></div>';
    timer=setInterval(function(){
      var tb=$('#tb',el);if(!tb){clearInterval(timer);return}
      var f=Math.max(0,1-(Date.now()-t0)/(TIME*1000));tb.style.width=(f*100)+'%';
      if(f<=0&&!over){over=true;clearInterval(timer);answer(-1,TIME)}
    },100);
    $$('.bti',el).forEach(function(b){b.onclick=function(){if(over)return;over=true;clearInterval(timer);sfx.tap();answer(+b.getAttribute('data-k'),(Date.now()-t0)/1000)}});
  }
  function board(me){
    var all=[{n:name+' (you)',t:score,me:true}].concat(bots.map(function(b){return {n:b.n,t:b.total}})).sort(function(a,b){return b.t-a.t});
    return all;
  }
  function answer(k,secs){
    var q=Q[qi],ok=k===q.a,pts=0;
    if(ok){streak++;pts=Math.round((1-(secs/TIME)/2)*1000)+Math.min(streak-1,5)*100}else streak=0;
    score+=pts;
    bots.forEach(function(b){var p=b.per[qi],g=0;if(p.c){b.streak++;g=Math.round((1-p.f/2)*1000)+Math.min(b.streak-1,5)*100}else b.streak=0;b.total+=g});
    if(ok){sfx.ok();if(streak>=3)burst(40)}else{sfx.no();shakeScreen()}
    var all=board(),rank=0;all.forEach(function(x,i){if(x.me)rank=i+1});
    el.innerHTML='<div class="row"><span class="eyebrow" style="flex:1">Question '+(qi+1)+' of '+Q.length+'</span><b class="bscore">'+score+'</b></div><h3 style="color:'+(ok?'var(--ok)':'var(--bad)')+'">'+(ok?'Correct! +'+pts:(k<0?'Time is up!':'Not quite'))+(ok&&streak>=2?' · Streak × '+streak:'')+'</h3><div class="qc"><p class="qt">'+noNum(q.q)+'</p><div class="bt">'+q.opts.map(function(o,j){return '<div class="bti '+(j===q.a?'right':'dim')+'" style="--c:'+BCOL[j]+'"><svg viewBox="0 0 40 40" width="30" height="30">'+BSHAPES[j]+'</svg><span>'+esc(o)+'</span></div>'}).join('')+'</div><div class="fb n"><b>Why</b>'+q.why+'</div></div>'+
      '<div class="eyebrow">You are number '+rank+' of '+all.length+'</div>'+all.slice(0,5).map(function(x,i){return '<div class="pl '+(x.me?'me':'')+'"><span class="rk">'+(i+1)+'</span><span class="nm">'+esc(x.n)+'</span><span class="xp">'+x.t+'</span></div>'}).join('')+
      '<div class="row"><button class="btn" id="bnx">'+(qi>=Q.length-1?'See the podium':'Next question')+'</button></div>';
    $('#bnx',el).onclick=function(){sfx.tap();qi++;if(qi>=Q.length)finish();else question()};
  }
  function finish(){
    MU.mode='menu';var all=board(),rank=0;all.forEach(function(x,i){if(x.me)rank=i+1});
    var c=name+'.'+score+'.'+codeSig(name,score);
    if(rank<=3){sfx.win();burst(160)}else sfx.ok();
    addXp(Math.round(score/50),null);
    var pod=[all[1],all[0],all[2]],cls=['p2','p1','p3'],pos=[2,1,3];
    el.innerHTML='<h3 style="text-align:center">'+(rank===1?'You win!':'You finished number '+rank)+'</h3><div class="pod">'+pod.map(function(x,i){return '<div class="'+cls[i]+'"><span class="nm2">'+esc(x.n)+'</span><span class="st">'+pos[i]+'</span><span class="xp">'+x.t+'</span></div>'}).join('')+'</div>'+
      '<p>Your score: <b>'+score+'</b>. Show this result code to your teacher.</p><div class="codebox" id="cb">'+esc(c)+'</div><div class="row"><button class="btn" id="cpy">Copy code</button><button class="btn gh" id="again">Play again</button></div>';
    $('#cpy',el).onclick=function(){try{navigator.clipboard.writeText(c).then(function(){$('#cpy',el).textContent='Copied!'},function(){$('#cpy',el).textContent='Select the code and copy it'})}catch(e){$('#cpy',el).textContent='Select the code and copy it'}};
    $('#again',el).onclick=function(){lobby()};
  }
  lobby();
}
function boardInit(el){
  ST.board=ST.board||[];var msg='',confirmClear=false;
  function draw(){
    var list=ST.board.slice().sort(function(a,b){return b.score-a.score});
    el.innerHTML='<div class="box tip"><div class="bt">For the teacher</div><div>After a quiz battle, each student shows you a result code. Type or paste it here. The ranking updates at once. Everything stays on this device.</div></div>'+
     '<label class="fl2" for="cd">Result code</label><div class="row"><input class="tx" id="cd" type="text" placeholder="Example: Ada.7420.k3f" autocomplete="off" autocapitalize="off"><button class="btn" id="add">Add code</button></div><div class="fb n" id="ms" aria-live="polite" style="'+(msg?'':'display:none')+'">'+esc(msg)+'</div>'+
     '<div class="eyebrow" style="margin-top:10px">Or add by hand</div><div class="row"><input class="tx" id="mn" type="text" maxlength="12" placeholder="Name" style="max-width:200px"><input class="tx" id="msc" type="text" inputmode="numeric" placeholder="Score" style="max-width:120px"><button class="btn gh" id="addm">Add</button></div>'+
     (list.length?'<h3>Ranking</h3>'+list.map(function(x,i){return '<div class="pl"><span class="rk">'+(i+1)+'</span><span class="nm">'+esc(x.name)+'</span><span class="xp">'+x.score+'</span><button class="btn gh sm rm" data-i="'+ST.board.indexOf(x)+'" aria-label="Remove '+esc(x.name)+'">Remove</button></div>'}).join('')+'<p class="muted">'+list.length+' students · class average '+Math.round(list.reduce(function(a,x){return a+x.score},0)/list.length)+'</p><div class="row"><button class="btn gh" id="cl">'+(confirmClear?'Tap again to clear':'Clear board')+'</button></div>':'');
    function addEntry(nm,sc){nm=cleanName(nm);sc=parseInt(sc,10);if(!nm||isNaN(sc)||sc<0||sc>20000){msg='Check the name and score.';sfx.no();draw();return}
      var k=-1;ST.board.forEach(function(x,i){if(x.name.toLowerCase()===nm.toLowerCase())k=i});if(k>=0)ST.board[k].score=Math.max(ST.board[k].score,sc);else ST.board.push({name:nm,score:sc});save();msg='Added '+nm+'.';sfx.ok();draw()}
    $('#add',el).onclick=function(){var v=($('#cd',el).value||'').trim(),p=v.split('.');if(p.length<3){msg='That does not look like a result code. It has three parts with dots.';sfx.no();draw();return}
      var sig=p.pop(),sc=p.pop(),nm=p.join('.');if(codeSig(nm,parseInt(sc,10))!==sig.toLowerCase()){msg='The code does not match. Check each letter and number.';sfx.no();draw();return}addEntry(nm,sc)};
    $('#cd',el).onkeydown=function(e){if(e.key==='Enter')$('#add',el).click()};
    $('#addm',el).onclick=function(){addEntry($('#mn',el).value,$('#msc',el).value)};
    $$('.rm',el).forEach(function(b){b.onclick=function(){ST.board.splice(+b.getAttribute('data-i'),1);save();msg='';draw()}});
    var cl=$('#cl',el);if(cl)cl.onclick=function(){if(!confirmClear){confirmClear=true;draw();return}ST.board=[];confirmClear=false;save();msg='Board cleared.';draw()};
  }
  draw();
}

/* ---- levels: you must clear one before the next opens ---- */
function secFin(id){var s=secObj(id);return s.screens.every(function(_,i){return ST.fin[id+':'+i]})}
function levelCleared(i){
  var L=LEVELS[i];
  if(L.test){var es=ST.exam[L.test];return !!(es&&es.sub)}
  if(L.mock)return !!ST.mockDone;
  if(!L.secs.every(secFin))return false;
  if(L.boss&&!(ST.boss[L.boss]>=1))return false;
  return true;
}
function levelUnlocked(i){return i===0||levelCleared(i-1)}
function levelOfSec(id){for(var i=0;i<LEVELS.length;i++)if(LEVELS[i].secs.indexOf(id)>=0)return i;return -1}
function bonusOf(id){for(var i=0;i<BONUS.length;i++)if(BONUS[i].id===id)return BONUS[i];return null}
function secAllowed(id){
  if(RT.dev)return true;
  if(id==='e3')return true;
  if(TEACHER_SECS.indexOf(id)>=0)return !!RT.teacher;
  var b=bonusOf(id);if(b)return levelCleared(b.after);
  var i=levelOfSec(id);return i<0?true:levelUnlocked(i);
}
function levelLabel(id){var i=levelOfSec(id);if(i>=0)return 'Level '+i+' · '+LEVELS[i].n;var b=bonusOf(id);if(b)return 'Bonus · '+b.n;return secObj(id).title}
function isLevelEnd(id){var i=levelOfSec(id);return i<0||LEVELS[i].secs[LEVELS[i].secs.length-1]===id}
function nextSecInLevel(id){var i=levelOfSec(id);if(i<0)return null;var L=LEVELS[i],k=L.secs.indexOf(id);return L.secs[k+1]||null}
function levelBar(sec,scr){
  var s=secObj(sec),i=levelOfSec(sec),pips='';
  s.screens.forEach(function(_,k){pips+='<i class="'+(ST.fin[sec+':'+k]?'ok':k===scr?'cur':'')+'"></i>'});
  var head=i>=0?'<b class="ln">LEVEL '+i+'</b>':'<b class="ln">BONUS</b>';
  return '<div class="lvbar">'+head+'<span class="lname">'+esc(s.title)+'</span><span class="lpips">'+pips+'</span></div>';
}
function levelResume(i){
  var L=LEVELS[i],sc=L.secs[L.secs.length-1],scr=secObj(sc).screens.length-1;
  for(var a=0;a<L.secs.length;a++){var s=secObj(L.secs[a]);for(var k=0;k<s.screens.length;k++){if(!ST.fin[s.id+':'+k]){return [s.id,k]}}}
  return [sc,scr];
}
function openLevel(i){
  if(!levelUnlocked(i)&&!RT.dev){sfx.no();shakeScreen();penToast('no','Locked! Clear Level '+(i-1)+' first.');return}
  gameFirst();var t=levelResume(i);go(t[0],t[1]);
}
function openBonus(id){
  var b=bonusOf(id);if(!secAllowed(id)){sfx.no();shakeScreen();penToast('no','Locked! Clear Level '+b.after+' to open the '+b.n+'.');return}
  gameFirst();go(id,0);
}
function levelFinish(sec){
  var i=levelOfSec(sec);
  if(i>=0&&levelCleared(i)){
    if(!ST.clr[i]){ST.clr[i]=1;save();sfx.win();burst(160);
      var nl=LEVELS[i+1];
      overlay('win','Level cleared',LEVELS[i].n,nl?('Next: '+nl.n):'You finished the game!',2200);
      addXp(100,null,'#2EE6A6');
    }
  }else if(i>=0&&LEVELS[i].boss&&!(ST.boss[LEVELS[i].boss]>=1)){
    penToast('no','Beat the boss to clear this level!');
  }
  go('home',0);
}
function lockSVG(){return '<svg viewBox="0 0 40 48" aria-hidden="true"><path d="M10 20v-6a10 10 0 0 1 20 0v6" fill="none" stroke="#6A7390" stroke-width="5"/><rect x="5" y="20" width="30" height="24" fill="#6A7390"/><circle cx="20" cy="31" r="4" fill="#232636"/></svg>'}
function lvlProgress(i){var L=LEVELS[i],t=0,d=0;L.secs.forEach(function(id){var s=secObj(id);s.screens.forEach(function(_,k){t++;if(ST.fin[id+':'+k])d++})});return t?Math.round(100*d/t):0}
function starsOf(L){return L.boss?new Array((ST.boss[L.boss]||0)+1).join('★')+new Array(4-(ST.boss[L.boss]||0)).join('☆'):''}
function gameHome(){
  var xp=ST.xp||0,l=lvlOf(xp),cur=-1;
  for(var k=0;k<LEVELS.length;k++){if(!levelCleared(k)){cur=k;break}}
  var h='<div class="logo"><span class="lg1">GRAMMAR</span><span class="lg2">ARENA</span></div>'+
   '<div class="stats"><div><b>'+TITLES[l]+'</b><small>'+xp+' XP</small></div><div><b>× '+(ST.best||0)+'</b><small>Best streak</small></div><div><b>'+bossStarsTotal()+' / 12</b><small>Boss stars</small></div></div>';
  h+='<div class="lvmap">';
  LEVELS.forEach(function(L,i){
    var un=levelUnlocked(i)||RT.dev,cl=levelCleared(i),st=cl?'done':un?'open':'lock',v=VILL[L.v]||{c:'#4DA3FF'};
    h+='<button class="lvn '+st+(i===cur?' now':'')+' '+(i%2?'r':'l')+'" data-act="lvl" data-i="'+i+'" style="--vc:'+v.c+'"><span class="lvnum">'+i+'</span><span class="lvav">'+(un?(i===0?penSVG('ok'):bossSVG(v.c,cl?'dead':'idle')):lockSVG())+'</span><span class="lvt"><b>'+(un?esc(L.n):'???')+'</b><small>'+(un?esc(L.sub):'Locked. Clear Level '+(i-1)+' first.')+'</small>'+(un?'<span class="meta">'+(cl?'CLEARED ':'')+starsOf(L)+'</span><span class="tbar"><i style="width:'+(cl?100:lvlProgress(i))+'%"></i></span>':'')+'</span></button>';
  });
  h+='</div><h3 class="sq">Side quests</h3><div class="lvmap sq">';
  BONUS.forEach(function(b){
    var un=levelCleared(b.after)||RT.dev,v=VILL[b.v]||{c:'#4DA3FF'};
    h+='<button class="lvn '+(un?'open':'lock')+' l" data-act="bon" data-sec="'+b.id+'" style="--vc:'+v.c+'"><span class="lvav">'+(un?bossSVG(v.c,'idle'):lockSVG())+'</span><span class="lvt"><b>'+(un?esc(b.n):'???')+'</b><small>'+(un?esc(b.sub):'Clear Level '+b.after+' to open')+'</small></span></button>';
  });
  h+='</div><div class="row" style="justify-content:center;margin-top:14px"><button class="btn gh sm" data-act="go" data-sec="e3" data-scr="0">My stats</button></div>';
  return h;
}
function bossStarsTotal(){var n=0;Object.keys(ST.boss).forEach(function(k){n+=ST.boss[k]||0});return n}
function gameDrawer(){
  var h='<h4>Settings</h4><a data-act="set" data-k="music">Music<span>'+(ST.set.music?'On':'Off')+'</span></a><a data-act="set" data-k="sfx">Sound effects<span>'+(ST.set.sfx?'On':'Off')+'</span></a><a data-act="set" data-k="pause">Reading pause<span>'+(ST.set.pause===false?'Off':'On')+'</span></a><a data-act="set" data-k="lite">Lite mode (less motion)<span>'+(isLite()?'On':'Off')+'</span></a><h4>Teacher</h4>';
  if(RT.teacher)h+='<a data-act="go" data-sec="f2" data-scr="0">Teacher board</a><a data-act="go" data-sec="e4" data-scr="0">Answer key</a>';
  else h+='<div class="row"><input class="tx" id="tpinv" type="password" inputmode="numeric" placeholder="PIN" autocomplete="off" style="max-width:120px"><button class="btn sm" data-act="tpin">Open</button></div>'+(RT.tbad?'<div class="fb b"><b>Wrong PIN.</b></div>':'');
  return h;
}
function gameTeacherPin(){var v=($('#tpinv')||{}).value;if(v===TPIN){RT.teacher=true;RT.tbad=0;RT.pin=true}else RT.tbad=1;buildDrawer()}
function gameSet(k){
  if(k==='music'){ST.set.music=!ST.set.music;if(ST.set.music){actx();musicSet(MU.mode)}else musicStop()}
  else if(k==='sfx')ST.set.sfx=!ST.set.sfx;
  else if(k==='pause')ST.set.pause=(ST.set.pause===false);
  else if(k==='lite'){ST.set.lite=!isLite();document.body.classList.toggle('lite',ST.set.lite)}
  save();hud();buildDrawer();
}
function gameAfter(root){
  $$('[data-anim]',root).forEach(animInit);
  $$('[data-boss]',root).forEach(bossInit);
  $$('[data-battle]',root).forEach(battleInit);
  $$('[data-board]',root).forEach(boardInit);
}
function gameBoot(){
  ST.set=ST.set||{};if(ST.set.sfx===undefined)ST.set.sfx=true;if(ST.set.music===undefined)ST.set.music=true;
  if(ST.set.lite===undefined||ST.set.lite===null)ST.set.lite=/KF[A-Z]+|Silk|Kindle/i.test(navigator.userAgent);
  document.body.classList.toggle('lite',!!ST.set.lite);
  ST.xp=ST.xp||0;ST.best=ST.best||0;ST.boss=ST.boss||{};ST.anim=ST.anim||{};ST.board=ST.board||[];RT.streak=0;
  var mb=document.getElementById('mus');if(mb)mb.onclick=function(){gameFirst();gameSet('music')};
  hud();
}
