/* ================= HANDS-ON LABS: students discover the rules by doing ================= */
function labShell(el,D,kindName){
  el.innerHTML='<div class="lh"><span class="lk">'+kindName+'</span><b>'+esc(D.title)+'</b>'+(ST.lab[D.id]?'<span class="ldone">✔ done</span>':'')+'</div><div class="lp">'+D.prompt+'</div><details class="rem"><summary>Need the rule?</summary><div>'+D.disc+'</div></details><div class="lbody"></div><div class="lfb" aria-live="polite"></div>';
  return {body:$('.lbody',el),fb:$('.lfb',el)};
}
function labWin(el,D,mist,fb,extra){
  if(mist>=4&&!ST.lab[D.id]&&!RT.retry[D.id]){
    RT.retry[D.id]=1;sfx.no();
    fb.innerHTML=(extra||'')+'<div class="fb n"><b>That took a lot of tries.</b>You got there, but the rule is not in your head yet. Read it once, then do it again.<div class="disc"><b>THE RULE</b>'+D.disc+'</div><button class="btn" id="lretry">Try again</button></div>';
    var rb=$('#lretry',el);if(rb)rb.onclick=function(){labInit(el)};return;
  }
  var first=!ST.lab[D.id];ST.lab[D.id]=1;save();
  sfx.win();burst(first?70:25);
  if(first)addXp(mist?10:20,fb,'#2EE6A6');
  var h=(extra||'')+'<div class="disc"><b>REMEMBER THIS</b>'+D.disc+'</div>';
  fb.innerHTML=h;
  var dn=$('.ldone',el);if(!dn){var lh=$('.lh',el);var s=document.createElement('span');s.className='ldone';s.textContent='✔ done';lh.appendChild(s)}
  revUpdate();
}
function labBad(fb,msg){sfx.no();fb.innerHTML='<div class="fb b"><b>Not quite.</b>'+msg+'</div>'}
function labOk(fb,msg){sfx.ok();fb.innerHTML='<div class="fb g"><b>Yes!</b>'+msg+'</div>'}
var ROLES={s:'subject',v:'verb',o:'object',n:'',k:''};

/* tap: find the parts of a sentence */
function tapLab(el,D){
  var sh=labShell(el,D,'DETECTIVE'),ti=0,mist=0,found={},wc=0;
  function draw(){
    var t=D.tasks[ti];
    var h='<div class="toks">'+D.toks.map(function(w,i){var f=found[i];return '<button class="tk'+(f?' c-'+f.role:'')+'" data-i="'+i+'"'+(f?' disabled':'')+(f&&f.lab?' data-lab="'+esc(f.lab)+'"':'')+'>'+esc(w)+'</button>'}).join('')+'</div>';
    sh.body.innerHTML=h+(t?'<div class="ask">'+t.ask+'</div>':'');
    $$('.tk',sh.body).forEach(function(b){b.onclick=function(){tap(+b.getAttribute('data-i'))}});
  }
  function tap(i){
    var t=D.tasks[ti];if(!t)return;
    if(t.a.indexOf(i)>=0){found[i]={role:t.role||'n',lab:t.lab||''};ti++;wc=0;gameFirst();
      if(ti>=D.tasks.length){draw();labWin(el,D,mist,sh.fb,'<div class="fb g"><b>Yes!</b>'+t.say+'</div>');return}
      labOk(sh.fb,t.say);draw();
    }else{mist++;wc++;
      var msg=t.hint||'That is not it. Look again.';
      if(wc>=2)msg+='<div class="disc"><b>THE RULE</b>'+D.disc+'</div>';
      labBad(sh.fb,msg);
      var b=$('.tk[data-i="'+i+'"]',sh.body);if(b){b.classList.add('shake');setTimeout(function(){b.classList.remove('shake')},400)}
      if(wc>=3){var pk=$('.tk[data-i="'+t.a[0]+'"]',sh.body);if(pk)pk.classList.add('peek')}}
  }
  draw();
}

/* build: tap tiles to make the sentence */
function buildLab(el,D){
  var sh=labShell(el,D,'BUILD'),mist=0,fails=0,ans=[],order=shuf(D.tiles.map(function(_,i){return i})),won=false;
  var tg=D.targets.map(function(s){return norm(s)});
  function words(){return ans.map(function(i){return D.tiles[i]}).join(' ')}
  function draw(){
    sh.body.innerHTML='<div class="bline" id="bl">'+(ans.length?ans.map(function(i,k){return '<button class="ltile on" data-k="'+k+'">'+esc(D.tiles[i])+'</button>'}).join(''):'<span class="hintline">Tap the tiles in the right order</span>')+'</div>'+
      '<div class="bpool">'+order.map(function(i){return ans.indexOf(i)>=0?'':'<button class="ltile" data-i="'+i+'">'+esc(D.tiles[i])+'</button>'}).join('')+'</div>'+
      '<div class="row"><button class="btn" id="bck"'+(won?' disabled':'')+'>Check</button><button class="btn gh sm" id="bcl">Clear</button><button class="btn gh sm" id="bht">Hint</button></div>';
    $$('.bpool .ltile',sh.body).forEach(function(b){b.onclick=function(){if(won)return;sfx.tap();ans.push(+b.getAttribute('data-i'));draw()}});
    $$('.bline .ltile',sh.body).forEach(function(b){b.onclick=function(){if(won)return;sfx.tap();ans.splice(+b.getAttribute('data-k'),1);draw()}});
    $('#bcl',sh.body).onclick=function(){ans=[];sh.fb.innerHTML='';draw()};
    $('#bht',sh.body).onclick=function(){if(won)return;mist++;var t=D.targets[0].split(' ');
      // next correct tile: find the tile whose text starts the missing part
      var cur=norm(words()),want=norm(D.targets[0]);var next='';
      if(want.indexOf(cur)===0&&cur!==want){next=want.slice(cur.length).trim();}
      sh.fb.innerHTML='<div class="fb n"><b>Hint</b>'+(D.hint||('Think about what comes first. '+(next?'The next piece starts with: “'+esc(next.split(' ')[0])+'”.':'Clear and start again.')))+'</div>'};
    $('#bck',sh.body).onclick=function(){
      if(!ans.length){labBad(sh.fb,'Tap some tiles first.');return}
      var n=norm(words());
      if(tg.indexOf(n)>=0){won=true;$$('.bline .ltile',sh.body).forEach(function(b){b.classList.add('good')});labWin(el,D,mist,sh.fb,'<div class="fb g"><b>Built it!</b>'+esc(D.targets[0])+'</div>');return}
      mist++;fails++;var msg=null;(D.traps||[]).forEach(function(t){if(!msg&&t.re.test(n))msg=t.m});
      var good=0,tw=tg[0].split(' '),aw=n.split(' ');for(var i=0;i<aw.length;i++)if(aw[i]===tw[i])good++;
      var extraTxt='';
      if(fails>=2)extraTxt='<div class="disc"><b>THE RULE</b>'+D.disc+'</div>';
      if(fails>=3)extraTxt+='<div class="fb n"><b>Here is the answer. Now build it yourself.</b>'+esc(D.targets[0])+'</div>';
      labBad(sh.fb,(msg||'Some tiles are in the wrong place.')+' ('+good+' of '+tw.length+' words are in the right spot.)'+extraTxt);
    };
  }
  draw();
}

/* cycle: tap a word to change it until the sentence is right */
function cycleLab(el,D){
  var sh=labShell(el,D,'REPAIR'),mist=0,fails=0,won=false,state=[];
  var slots=[];D.t.forEach(function(x,i){if(typeof x!=='string')slots.push(i)});
  D.t.forEach(function(x,i){if(typeof x!=='string'){var s=0;if(s===x.a)s=1;state[i]=s}});
  function draw(res){
    sh.body.innerHTML='<div class="cyc">'+D.t.map(function(x,i){
      if(typeof x==='string')return '<span class="cw">'+esc(x)+'</span>';
      var cls='slot'+(res&&res[i]===true?' ok':res&&res[i]===false?' bad':'');
      return '<button class="'+cls+'" data-i="'+i+'"'+(won?' disabled':'')+'>'+esc(x.o[state[i]])+' ↻</button>'}).join(' ')+'</div><div class="row"><button class="btn" id="cck"'+(won?' disabled':'')+'>Check</button></div>';
    $$('.slot',sh.body).forEach(function(b){b.onclick=function(){var i=+b.getAttribute('data-i');state[i]=(state[i]+1)%D.t[i].o.length;sfx.tap();draw()}});
    $('#cck',sh.body).onclick=function(){
      var res={},ok=0;slots.forEach(function(i){var r=state[i]===D.t[i].a;res[i]=r;if(r)ok++});
      if(ok===slots.length){won=true;draw(res);
        var why='';slots.forEach(function(i){if(D.t[i].why)why+='<li>'+D.t[i].why+'</li>'});
        labWin(el,D,mist,sh.fb,'<div class="fb g"><b>Fixed!</b>'+(why?'<ul class="why">'+why+'</ul>':'')+'</div>');return}
      mist++;fails++;draw(res);
      var more='';if(fails>=2){more='<ul class="why">';slots.forEach(function(i){if(res[i]===false&&D.t[i].why)more+='<li>'+D.t[i].why+'</li>'});more+='</ul>'}
      labBad(sh.fb,ok+' of '+slots.length+' changed words are right. The red ones are still wrong. Tap them to change.'+more);
    };
  }
  draw();
}

/* sort: put each item in the right bucket */
function sortLab(el,D){
  var sh=labShell(el,D,'SORT'),mist=0,done={},wr={},n=D.items.length,cnt=0;
  function draw(){
    sh.body.innerHTML=D.items.map(function(it,i){
      var d=done[i];
      return '<div class="srow'+(d?' ok':'')+'" data-i="'+i+'"><div class="st">'+it.t+'</div><div class="sb2">'+D.buckets.map(function(b,k){return '<button class="bk'+(d&&it.b===k?' on':'')+((wr[i]>=2&&it.b===k&&!d)?' peek':'')+'" data-i="'+i+'" data-k="'+k+'"'+(d?' disabled':'')+'>'+esc(b)+'</button>'}).join('')+'</div>'+(d&&it.why?'<div class="swhy">'+it.why+'</div>':'')+'</div>'}).join('')+(D.help?'<div class="bhelp">'+D.buckets.map(function(b,k){return '<div><b>'+esc(b)+':</b> '+D.help[k]+'</div>'}).join('')+'</div>':'');
    $$('.bk',sh.body).forEach(function(b){b.onclick=function(){
      var i=+b.getAttribute('data-i'),k=+b.getAttribute('data-k'),it=D.items[i];
      if(it.b===k){done[i]=1;cnt++;sfx.ok();draw();if(cnt>=n){labWin(el,D,mist,sh.fb)}}
      else{mist++;wr[i]=(wr[i]||0)+1;sfx.no();labBad(sh.fb,(it.hint||D.hint||'Think again. Try the other box.')+(D.help?'<br><em>'+esc(D.buckets[it.b])+': '+D.help[it.b]+'</em>':''));if(wr[i]>=2)draw();else{b.classList.add('shake');setTimeout(function(){b.classList.remove('shake')},400)}}
    }});
  }
  draw();
}

/* match: tap a word on the left, then its partner on the right */
function matchLab(el,D){
  var sh=labShell(el,D,'MATCH'),mist=0,sel=-1,done={},order=shuf(D.pairs.map(function(_,i){return i})),cnt=0;
  function draw(){
    sh.body.innerHTML='<div class="mt"><div class="mc">'+D.pairs.map(function(p,i){return '<button class="mb'+(done[i]?' ok':'')+(sel===i?' sel':'')+'" data-l="'+i+'"'+(done[i]?' disabled':'')+'>'+esc(p.l)+'</button>'}).join('')+'</div><div class="mc">'+order.map(function(i){var p=D.pairs[i];return '<button class="mb'+(done[i]?' ok':'')+'" data-r="'+i+'"'+(done[i]?' disabled':'')+'>'+esc(p.r)+'</button>'}).join('')+'</div></div>';
    $$('[data-l]',sh.body).forEach(function(b){b.onclick=function(){sel=+b.getAttribute('data-l');sfx.tap();draw()}});
    $$('[data-r]',sh.body).forEach(function(b){b.onclick=function(){
      if(sel<0){labBad(sh.fb,'Tap a word on the left first.');return}
      var r=+b.getAttribute('data-r');
      if(r===sel){done[r]=1;cnt++;sel=-1;sfx.ok();draw();if(cnt>=D.pairs.length)labWin(el,D,mist,sh.fb)}
      else{mist++;sfx.no();b.classList.add('shake');labBad(sh.fb,'Those two do not go together. Try again.');setTimeout(function(){b.classList.remove('shake')},400)}
    }});
  }
  draw();
}

/* explore: press every button and watch what happens */
function exploreLab(el,D){
  var sh=labShell(el,D,'EXPERIMENT'),seen={},cnt=0,cur=-1;
  function draw(){
    sh.body.innerHTML='<div class="ex">'+D.items.map(function(it,i){return '<button class="eb'+(seen[i]?' seen':'')+(cur===i?' cur':'')+'" data-i="'+i+'">'+esc(it.b)+'</button>'}).join('')+'</div><div class="eout">'+(cur>=0?D.items[cur].h:'<span class="hintline">Press a button to see what happens.</span>')+'</div><div class="prog">Tried '+cnt+' of '+D.items.length+'</div>';
    $$('.eb',sh.body).forEach(function(b){b.onclick=function(){var i=+b.getAttribute('data-i');cur=i;if(!seen[i]){seen[i]=1;cnt++}sfx.flip();draw();if(cnt>=D.items.length&&!ST.lab[D.id])labWin(el,D,0,sh.fb);else if(cnt>=D.items.length)sh.fb.innerHTML='<div class="disc"><b>REMEMBER THIS</b>'+D.disc+'</div>'}});
  }
  draw();
  if(ST.lab[D.id]){sh.fb.innerHTML='<div class="disc"><b>REMEMBER THIS</b>'+D.disc+'</div>'}
}
function labInit(el){
  var D=LABS[el.getAttribute('data-lab')];if(!D)return;
  ({tap:tapLab,build:buildLab,cycle:cycleLab,sort:sortLab,match:matchLab,explore:exploreLab})[D.kind](el,D);
}
