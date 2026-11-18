/* ---------------- engine ---------------- */
(function(){
var LS='ss3-eng-recasting-v1', TPIN='2468', MOCKMIN=20;
var ST={res:{},vis:{},exam:{},last:{sec:'home',scr:0},mockBest:null,xp:0,best:0,boss:{},anim:{},board:[],set:{}};
var RT={mock:null,hint:{},pin:false,cur:{sec:'home',scr:0}};
var app=document.getElementById('app');

function load(){try{var s=localStorage.getItem(LS);if(s){var o=JSON.parse(s);ST.res=o.res||{};ST.vis=o.vis||{};ST.exam=o.exam||{};ST.last=o.last||ST.last;ST.mockBest=o.mockBest||null;ST.xp=o.xp||0;ST.best=o.best||0;ST.boss=o.boss||{};ST.anim=o.anim||{};ST.board=o.board||[];ST.set=o.set||{}}}catch(e){}}
function save(){try{localStorage.setItem(LS,JSON.stringify(ST))}catch(e){}}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function $(s,r){return (r||document).querySelector(s)}
function $$(s,r){return [].slice.call((r||document).querySelectorAll(s))}
function norm(s){return String(s).toLowerCase().replace(/[‘’“”]/g,function(c){return (c==='‘'||c==='’')?"'":'"'}).replace(/[.,;:!?"()]/g,' ').replace(/'/g,'').replace(/\s+/g,' ').trim()}
var LET=['A','B','C','D','E'];

/* ---- index all questions ---- */
var QIDX={},QSEC={},TOTAL=0;
function indexQ(q,sid){QIDX[q.id]=q;QSEC[q.id]=sid;TOTAL++}
SECS.forEach(function(s){s.screens.forEach(function(sc){sc.blocks.forEach(function(b){if(b.t==='qz')b.items.forEach(function(q){indexQ(q,s.id)})})})});
MOCK.forEach(function(q){indexQ(q,'d3')});

/* ---- answer checking ---- */
function checkTyped(q,raw){
  if(q.noq&&/["“”]/.test(raw))return {ok:false,msg:'Remove the quotation marks. Reported speech does not use them.'};
  if(q.needq&&!/["“”]/.test(raw))return {ok:false,msg:'Direct speech needs quotation marks around the exact words spoken.'};
  var n=norm(raw);if(!n)return {ok:false,msg:'Type your answer first.',empty:true};
  for(var i=0;i<q.ans.length;i++)if(norm(q.ans[i])===n)return {ok:true};
  if(q.has){var all=true;q.has.forEach(function(g){var f=false;g.forEach(function(w){if(n.indexOf(w)>=0)f=true});if(!f)all=false});if(all)return {ok:true}}
  for(var j=0;j<q.traps.length;j++)if(q.traps[j].re.test(n))return {ok:false,msg:q.traps[j].m};
  return {ok:false,msg:null};
}
function modelText(q){return q.type==='mcq'?LET[q.a]+'. '+q.opts[q.a]:q.ans.map(esc).join('<br><em>or</em> ')}

/*@@GAME@@*/
/* ---- stats ---- */
function resOf(id){return ST.res[id]||null}
function answeredCount(ids){var c=0;ids.forEach(function(i){var r=ST.res[i];if(r&&r.done)c++});return c}
function secQ(sid){var out=[];Object.keys(QSEC).forEach(function(k){if(QSEC[k]===sid)out.push(k)});return out}
function totalProgress(){return Math.round(100*answeredCount(Object.keys(QIDX))/Math.max(1,TOTAL))}
function secObj(id){for(var i=0;i<SECS.length;i++)if(SECS[i].id===id)return SECS[i];return null}
function secIdx(id){for(var i=0;i<SECS.length;i++)if(SECS[i].id===id)return i;return -1}

/* ---- block rendering ---- */
function boxHtml(cls,b){return '<div class="box '+cls+'"><div class="bt">'+esc(b.title)+'</div><div>'+b.h+'</div></div>'}
function tbHtml(b){
  var h='<div class="tw"><table>';
  if(b.head&&b.head.length&&b.head.join('')!=='')h+='<thead><tr>'+b.head.map(function(x){return '<th>'+x+'</th>'}).join('')+'</tr></thead>';
  else if(b.head&&b.head.length)h+='<thead><tr>'+b.head.map(function(x){return '<th>'+x+'</th>'}).join('')+'</tr></thead>';
  h+='<tbody>'+b.rows.map(function(r){return '<tr>'+r.map(function(c){return '<td>'+c+'</td>'}).join('')+'</tr>'}).join('')+'</tbody></table></div>';
  return h;
}
function wkHtml(b){
  return (b.title?'<h3>'+esc(b.title)+'</h3>':'')+b.items.map(function(it){
    return '<details class="wk"><summary><span class="tg">'+esc(it.tag)+'</span><div>'+it.q+'</div><span class="hint">Try it yourself first. Then tap to see the answer and the steps.</span></summary><div class="wkb"><div class="ans"><b>Answer:</b> '+it.a+'</div><ol class="steps">'+it.st.map(function(s){return '<li>'+s+'</li>'}).join('')+'</ol></div></details>';
  }).join('');
}
function passageHtml(b){
  if(b.collapsed)return '<details class="pas"><summary>Show the passage again: '+esc(b.title)+'</summary><div class="passage">'+b.h+'</div></details>';
  return '<div class="passage"><div class="pt">'+esc(b.title)+'</div>'+b.h+'</div>';
}
function mkHtml(b){
  return b.items.map(function(m){return '<div class="mk"><span class="eyebrow">'+m.t+'</span><div class="w"><span class="k">Incorrect</span>'+m.w+'</div><div class="r"><span class="k">Correct</span>'+m.r+'</div><p><b>Why it is wrong:</b> '+m.why+'</p><p><b>Exam tip:</b> '+m.tip+'</p></div>'}).join('');
}

/* ---- live questions ---- */
function liveCard(q){
  var r=resOf(q.id)||{tries:0,wrong:[],done:0};
  var cls=r.done?(r.ok?'ok':'no'):'';
  var h='<div class="qc '+cls+'" data-card="'+q.id+'"><p class="qt">'+q.q+'</p>';
  if(q.type==='mcq'){
    h+=q.opts.map(function(o,i){
      var st='',dis='';
      if(r.done){dis=' disabled';if(i===q.a)st=' good';else if(r.wrong&&r.wrong.indexOf(i)>=0)st=' bad'}
      else if(r.wrong&&r.wrong.indexOf(i)>=0){st=' bad';dis=' disabled'}
      return '<button class="opt'+st+'" data-act="opt" data-q="'+q.id+'" data-i="'+i+'"'+dis+'><b class="l">'+LET[i]+'.</b> '+esc(o)+'</button>';
    }).join('');
    if(r.wrong&&r.wrong.length&&!r.done){var li=r.wrong[r.wrong.length-1];h+='<div class="fb b"><b>Not quite.</b>'+(q.wr[li]||'Read the question again and try another option.')+' Try again.</div>'}
    if(r.done){
      if(r.ok&&r.tries===0)h+='<div class="fb g"><b>Correct!</b>'+q.why+'</div>';
      else if(r.ok)h+='<div class="fb g"><b>Correct on your second try.</b>'+q.why+'</div>';
      else h+='<div class="fb n"><b>The correct answer is '+LET[q.a]+'.</b>'+q.why+'</div>';
    }
  }else{
    var val=r.val||'';
    if(!r.done||true){
      h+='<div class="row"><input class="tx" type="text" id="in-'+q.id+'" data-q="'+q.id+'" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="'+esc(q.ph)+'" value="'+esc(val)+'"'+(r.done?' disabled':'')+'>';
      if(!r.done)h+='<button class="btn" data-act="chk" data-q="'+q.id+'">Check</button>';
      h+='</div>';
    }
    if(!r.done){
      if(r.msg)h+='<div class="fb b"><b>Not quite.</b>'+r.msg+(r.tries<2?' Try again.':'')+'</div>';
      if(q.hint)h+=(RT.hint[q.id]?'<div class="fb n"><b>Hint</b>'+esc(q.hint)+'</div>':'<button class="lnk" data-act="hint" data-q="'+q.id+'">Need a hint?</button>');
    }else{
      if(r.ok)h+='<div class="fb g"><b>Correct!</b>'+q.why+'</div>';
      else h+='<div class="fb n"><b>Model answer</b>'+modelText(q)+'<br><br>'+q.why+'</div><button class="btn gh sm" data-act="self" data-q="'+q.id+'">My answer means the same</button>';
    }
  }
  return h+'</div>';
}
function quizHtml(b){
  if(b.mode==='exam')return examHtml(b);
  var ids=b.items.map(function(q){return q.id}),d=answeredCount(ids);
  var first=ids.filter(function(i){var r=ST.res[i];return r&&r.done&&r.ok&&r.tries===0}).length;
  return '<div class="qz" data-quiz="'+b.id+'"><div class="qh">Practice · '+esc(b.title)+'</div>'+(b.intro?'<div class="qi">'+b.intro+'</div>':'')+
    '<div class="prog" data-prog="'+b.id+'">Answered '+d+' of '+ids.length+' · Correct first time: '+first+'</div>'+b.items.map(liveCard).join('')+'</div>';
}
function refreshCard(id){
  var q=QIDX[id],el=$('[data-card="'+id+'"]');if(!el)return;
  var tmp=document.createElement('div');tmp.innerHTML=liveCard(q);el.parentNode.replaceChild(tmp.firstChild,el);
  var qz=el.parentNode;while(qz&&!(qz.getAttribute&&qz.getAttribute('data-quiz')))qz=qz.parentNode;
  var inp=$('#in-'+id);if(inp&&!inp.disabled&&document.activeElement!==inp){try{inp.focus()}catch(e){}}
  updateProgress();
}
function updateProgress(){
  $$('[data-quiz]').forEach(function(z){
    var id=z.getAttribute('data-quiz'),b=findQuiz(id);if(!b||b.mode==='exam')return;
    var ids=b.items.map(function(q){return q.id}),d=answeredCount(ids);
    var first=ids.filter(function(i){var r=ST.res[i];return r&&r.done&&r.ok&&r.tries===0}).length;
    var p=$('[data-prog="'+id+'"]',z);if(p)p.textContent='Answered '+d+' of '+ids.length+' · Correct first time: '+first;
  });
  var bar=$('#gbar');if(bar)bar.style.width=totalProgress()+'%';
}
function findQuiz(id){var f=null;SECS.forEach(function(s){s.screens.forEach(function(sc){sc.blocks.forEach(function(b){if(b.t==='qz'&&b.id===id)f=b})})});return f}

function answerMcq(id,i){
  var q=QIDX[id],r=ST.res[id]||{tries:0,wrong:[],done:0};if(r.done)return;
  if(i===q.a){r.done=1;r.ok=1}
  else{r.tries++;r.wrong.push(i);if(r.tries>=2){r.done=1;r.ok=0}}
  ST.res[id]=r;save();refreshCard(id);
  gameReward(id,i===q.a?(r.tries===0?'first':'second'):'miss');
}
function answerTyped(id){
  var q=QIDX[id],r=ST.res[id]||{tries:0,wrong:[],done:0},inp=$('#in-'+id);if(!inp||r.done)return;
  var raw=inp.value,c=checkTyped(q,raw);r.val=raw;
  if(c.empty){r.msg=c.msg;ST.res[id]=r;refreshCard(id);return}
  if(c.ok){r.done=1;r.ok=1;r.msg=null}
  else{r.tries++;r.msg=c.msg||('That is not what I expected. '+(q.hint||'Check each part of the sentence.'));if(r.tries>=2){r.done=1;r.ok=0}}
  ST.res[id]=r;save();refreshCard(id);
  gameReward(id,c.ok?(r.tries===0?'first':'second'):'miss');
}

/* ---- exam sets (WAEC and JAMB style) ---- */
function examState(id){return ST.exam[id]||(ST.exam[id]={a:{},sub:0,self:{}})}
function examHtml(b){
  var es=examState(b.id),h='<div class="qz" data-quiz="'+b.id+'"><div class="qh">Practice test · '+esc(b.title)+'</div><div class="qi">'+b.intro+'</div>';
  if(es.sub){
    var sc=0,by={};b.items.forEach(function(q){var ok=examOk(q,es);if(ok)sc++;var t=TOPICS[q.topic]?TOPICS[q.topic].n:q.topic;by[t]=by[t]||{n:0,c:0};by[t].n++;if(ok)by[t].c++});
    h+='<div class="score"><div class="big">'+sc+' / '+b.items.length+'</div><div>'+Math.round(100*sc/b.items.length)+'%</div>'+
      Object.keys(by).map(function(t){var p=Math.round(100*by[t].c/by[t].n);return '<div style="margin-top:8px">'+esc(t)+': '+by[t].c+' of '+by[t].n+'<div class="tbar '+(p<50?'low':p<80?'mid':'')+'"><i style="width:'+p+'%"></i></div></div>'}).join('')+
      '<button class="btn gh sm" data-act="xreset" data-set="'+b.id+'">Try the test again</button></div>';
  }else{
    var n=0;b.items.forEach(function(q){if(es.a[q.id]!==undefined&&es.a[q.id]!=='')n++});
    h+='<div class="prog">Answered '+n+' of '+b.items.length+'</div>';
  }
  b.items.forEach(function(q){h+=examCard(q,b,es)});
  if(!es.sub)h+='<div class="row"><button class="btn" data-act="xsubmit" data-set="'+b.id+'">Submit answers</button></div>';
  return h+'</div>';
}
function examOk(q,es){
  if(es.self&&es.self[q.id])return true;
  var a=es.a[q.id];if(a===undefined||a==='')return false;
  if(q.type==='mcq')return a===q.a;
  return checkTyped(q,a).ok;
}
function examCard(q,b,es){
  var sub=es.sub,ok=sub&&examOk(q,es),a=es.a[q.id];
  var h='<div class="qc '+(sub?(ok?'ok':'no'):'')+'" data-xc="'+q.id+'"><p class="qt">'+q.q+'</p>';
  if(q.type==='mcq'){
    h+=q.opts.map(function(o,i){var st='';if(sub){if(i===q.a)st=' good';else if(a===i)st=' bad'}else if(a===i)st=' sel';
      return '<button class="opt'+st+'" data-act="xopt" data-set="'+b.id+'" data-q="'+q.id+'" data-i="'+i+'"'+(sub?' disabled':'')+'><b class="l">'+LET[i]+'.</b> '+esc(o)+'</button>'}).join('');
  }else{
    h+='<div class="row"><input class="tx" type="text" data-act="xtype" data-set="'+b.id+'" data-q="'+q.id+'" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="'+esc(q.ph)+'" value="'+esc(a||'')+'"'+(sub?' disabled':'')+'></div>';
  }
  if(sub){
    h+='<div class="fb '+(ok?'g':'b')+'"><b>'+(ok?'Correct':(a===undefined||a===''?'Not answered':'Not correct'))+'</b>'+
      (q.type==='mcq'?'Correct answer: '+LET[q.a]+'. '+esc(q.opts[q.a])+'<br><br>':'Model answer: '+modelText(q)+'<br><br>')+q.why+'</div>';
    if(q.type!=='mcq'&&!ok&&a)h+='<button class="btn gh sm" data-act="xself" data-set="'+b.id+'" data-q="'+q.id+'">My answer means the same</button>';
  }
  return h+'</div>';
}
function examSubmit(setId){
  var b=findQuiz(setId),es=examState(setId);
  b.items.forEach(function(q){var ok=examOk(q,es);ST.res[q.id]={done:1,ok:ok?1:0,tries:0,exam:1}});
  es.sub=1;save();render(true);
  var okn=0;b.items.forEach(function(q){if(ST.res[q.id].ok)okn++});gameExam(okn,b.items.length,false);
}

/* ---- final timed mock ---- */
function mockHtml(){
  var m=RT.mock;
  if(!m){
    var best=ST.mockBest?'<p class="muted">Your best score so far: <b>'+ST.mockBest+' / 15</b></p>':'';
    return '<div class="box def"><div class="bt">Final challenge</div><div>15 questions mixing everything in this note. You have <b>20 minutes</b>. You see your score, a breakdown by topic and an explanation for every answer you missed at the end.</div></div>'+best+
      '<div class="row"><button class="btn" data-act="mstart">Start the timed mock</button></div>'+
      '<p class="muted">Tip: answer the easy ones first, then return to the harder ones. You can go back to any question before you finish.</p>';
  }
  if(m.done)return mockResult(m);
  var q=MOCK[m.i],a=m.a[m.i];
  var h='<div class="timer">Time left: <span id="tmr">'+fmtT(m.end-Date.now())+'</span> · Question '+(m.i+1)+' of 15</div><div class="qc" data-mc="1"><p class="qt">'+q.q+'</p>';
  h+=q.opts.map(function(o,i){return '<button class="opt'+(a===i?' sel':'')+'" data-act="mopt" data-i="'+i+'"><b class="l">'+LET[i]+'.</b> '+esc(o)+'</button>'}).join('')+'</div>';
  h+='<div class="row">'+(m.i>0?'<button class="btn gh" data-act="mprev">Previous</button>':'')+(m.i<14?'<button class="btn" data-act="mnext">Next</button>':'')+'<button class="btn gh" data-act="mfinish">Finish and see my score</button></div>';
  h+='<div class="prog">Answered '+m.a.filter(function(x){return x!==undefined}).length+' of 15</div>';
  return h;
}
function fmtT(ms){if(ms<0)ms=0;var s=Math.floor(ms/1000),mm=Math.floor(s/60),ss=s%60;return (mm<10?'0':'')+mm+':'+(ss<10?'0':'')+ss}
function band(s){return s>=13?['Excellent understanding.','You are ready for the examination questions on this topic.']:s>=10?['Good understanding.','Revise the areas you missed.']:s>=7?['Developing.','More practice is needed.']:['Revisit the lessons.','Go back to the lessons and attempt the exercises again.']}
function mockResult(m){
  var sc=0,by={};
  MOCK.forEach(function(q,i){var ok=m.a[i]===q.a;if(ok)sc++;var t=TOPICS[q.topic]?TOPICS[q.topic].n:q.topic;by[t]=by[t]||{n:0,c:0};by[t].n++;if(ok)by[t].c++});
  var bd=band(sc);
  var h='<div class="score"><div class="big">'+sc+' / 15</div><div><b>'+bd[0]+'</b> '+bd[1]+'</div>'+(m.timeUp?'<p class="muted">The time ran out. Unanswered questions were marked wrong.</p>':'')+'<h3>Performance by topic</h3>'+
    Object.keys(by).map(function(t){var p=Math.round(100*by[t].c/by[t].n);return '<div>'+esc(t)+': '+by[t].c+' of '+by[t].n+'<div class="tbar '+(p<50?'low':p<80?'mid':'')+'"><i style="width:'+p+'%"></i></div></div>'}).join('')+
    '<div class="row"><button class="btn" data-act="mstart">Try again</button></div></div><h3>Review: what you missed</h3>';
  var miss=0;
  MOCK.forEach(function(q,i){
    if(m.a[i]===q.a)return;miss++;
    h+='<div class="qc no"><p class="qt">'+(i+1)+'. '+q.q+'</p><div class="fb b"><b>'+(m.a[i]===undefined?'Not answered':'Your answer: '+LET[m.a[i]]+'. '+esc(q.opts[m.a[i]]))+'</b>Correct answer: '+LET[q.a]+'. '+esc(q.opts[q.a])+'<br><br>'+q.why+'</div></div>';
  });
  if(!miss)h+='<div class="fb g"><b>Perfect score!</b>You did not miss a question.</div>';
  return h;
}
var mockTimer=null;
function mockTick(){
  var m=RT.mock;if(!m||m.done){clearInterval(mockTimer);mockTimer=null;return}
  var left=m.end-Date.now(),t=$('#tmr');if(t)t.textContent=fmtT(left);
  if(left<=0){m.timeUp=true;mockFinish()}
}
function mockFinish(){
  var m=RT.mock;if(!m)return;m.done=true;clearInterval(mockTimer);mockTimer=null;
  var sc=0;MOCK.forEach(function(q,i){var ok=m.a[i]===q.a;if(ok)sc++;ST.res[q.id]={done:1,ok:ok?1:0,tries:0,exam:1}});
  if(ST.mockBest===null||sc>ST.mockBest)ST.mockBest=sc;
  save();render(true);
  gameExam(sc,15,true);
}

/* ---- revision panel ---- */
function reviseHtml(){
  var h='<p>Your results are saved on this device. Each bar shows how many questions you got right the first time.</p>';
  var any=false;
  Object.keys(TOPICS).forEach(function(k){
    var n=0,c=0;Object.keys(QIDX).forEach(function(id){var q=QIDX[id];if(q.topic!==k)return;var r=ST.res[id];if(r&&r.done){n++;if(r.ok&&(r.tries===0||r.exam))c++}});
    if(n)any=true;
    var p=n?Math.round(100*c/n):0,tag=!n?'Not started':p>=80?'Strong':p>=50?'Revise':'Revisit the lesson';
    h+='<div class="tile" style="cursor:default"><b>'+esc(TOPICS[k].n)+'</b><span class="meta">'+tag+(n?' · '+c+' of '+n+' correct first time':'')+'</span><div class="tbar '+(!n?'':p<50?'low':p<80?'mid':'')+'"><i style="width:'+p+'%"></i></div>'+
      (n&&p<80?'<button class="btn sm" data-act="go" data-sec="'+TOPICS[k].sec+'" data-scr="0">Revise this topic</button>':'')+(!n?'<button class="btn gh sm" data-act="go" data-sec="'+TOPICS[k].sec+'" data-scr="0">Start</button>':'')+'</div>';
  });
  if(!any)h+='<div class="box tip"><div class="bt">Nothing to show yet</div><div>Answer some practice questions first. Then come back here.</div></div>';
  h+='<div class="row"><button class="btn gh" data-act="wipe">Clear my saved results</button></div>';
  return h;
}

/* ---- teacher key ---- */
function keyHtml(){
  if(!RT.pin)return '<div class="box tip"><div class="bt">For teachers</div><div>This page lists every answer with an explanation. Enter the PIN to open it.<br><small>This PIN only stops casual browsing. It is stored in the page, so a determined student could find it. For a real exam, give the questions on paper.</small></div></div><div class="row"><input class="tx" id="pin" type="password" inputmode="numeric" placeholder="PIN" autocomplete="off"><button class="btn" data-act="pin">Open</button></div>'+(RT.pinBad?'<div class="fb b"><b>Wrong PIN.</b>Try again.</div>':'');
  var h='';
  SECS.forEach(function(s){
    var qs=[];s.screens.forEach(function(sc){sc.blocks.forEach(function(b){if(b.t==='qz')b.items.forEach(function(q){qs.push(q)})})});
    if(s.id==='d3')qs=MOCK;
    if(!qs.length)return;
    h+='<h3>'+esc(s.title)+'</h3>';
    qs.forEach(function(q,i){
      h+='<div class="mk"><div>'+q.q+'</div><div class="r"><span class="k">Answer</span>'+(q.type==='mcq'?LET[q.a]+'. '+esc(q.opts[q.a]):modelText(q))+'</div><p><b>Explanation:</b> '+q.why+'</p></div>';
    });
  });
  return h;
}

/* ---- home ---- */
function homeHtmlOld(){
  var h='<div class="hero"><div class="eyebrow" style="color:inherit;opacity:.85">SS3 · English Language · First Term · Week 1</div><h1>Sentence recasting and grammatical functions</h1><p>Comprehension skills for WAEC and JAMB. Learn one small idea at a time, then practise until it feels easy.</p><div class="row"><button class="btn" data-act="cont">'+(ST.last&&ST.last.sec!=='home'?'Continue where I stopped':'Start learning')+'</button><button class="btn gh" data-act="go" data-sec="e3" data-scr="0">My results</button></div></div>';
  h+='<div class="box tip"><div class="bt">Suggested 40-minute class plan</div><div><b>5 min:</b> Start here and What is recasting?<br><b>12 min:</b> Active and passive voice, screens 1 to 7<br><b>13 min:</b> Direct and reported speech, screens 1 to 8<br><b>10 min:</b> Word class or grammatical function? and the first functions<br><small>Everything else is for self-paced study after class.</small></div></div>';
  h+='<h3>How you are doing</h3><div class="tbar"><i style="width:'+totalProgress()+'%"></i></div><div class="prog">'+totalProgress()+'% of all questions answered</div>';
  var last='';
  SECS.forEach(function(s){
    if(s.part!==last){h+='<div class="part">'+esc(s.part)+'</div>';last=s.part}
    var q=secQ(s.id),d=answeredCount(q),vis=0;s.screens.forEach(function(sc,i){if(ST.vis[s.id+':'+i])vis++});
    h+='<button class="tile" data-act="go" data-sec="'+s.id+'" data-scr="0"><b>'+esc(s.title)+'</b><small>'+esc(s.blurb)+'</small><span class="meta">'+s.screens.length+' screen'+(s.screens.length>1?'s':'')+' · viewed '+vis+(q.length?' · '+d+' of '+q.length+' questions answered':'')+'</span></button>';
  });
  return h;
}

function homeHtml(){return gameHome()}
/* ---- screen rendering ---- */
function blockHtml(b){
  switch(b.t){
   case 'p':return '<p>'+b.h+'</p>';
   case 'h':return '<h3>'+b.h+'</h3>';
   case 'def':return boxHtml('def',b);
   case 'ex':return boxHtml('ex',b);
   case 'tip':return boxHtml('tip',b);
   case 'mis':return boxHtml('mis',b);
   case 'tb':return tbHtml(b);
   case 'stp':return (b.title?'<h3>'+esc(b.title)+'</h3>':'')+'<ol class="steps">'+b.items.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ol>';
   case 'wk':return wkHtml(b);
   case 'qz':return quizHtml(b);
   case 'passage':return passageHtml(b);
   case 'mk':return mkHtml(b);
   case 'mock':return mockHtml();
   case 'anim':return '<div class="anim" data-anim="'+b.id+'"></div>';
   case 'boss':return '<div class="bossbox" data-boss="'+b.id+'"></div>';
   case 'battle':return '<div data-battle="1"></div>';
   case 'board':return '<div data-board="1"></div>';
   case 'revise':return reviseHtml();
   case 'key':return keyHtml();
  }
  return '';
}
function render(keepScroll){
  var cur=RT.cur,h='',nav='';
  var nb=$('#navbar'),mid=$('#navmid'),pv=$('#pv'),nx=$('#nx');
  if(cur.sec==='home'){
    h=homeHtml();nb.style.display='none';
  }else{
    var s=secObj(cur.sec),sc=s.screens[cur.scr];
    h='<div class="eyebrow">'+esc(s.part)+'</div><h2>'+esc(s.title)+'</h2><div class="prog">Screen '+(cur.scr+1)+' of '+s.screens.length+'</div><div class="tbar"><i style="width:'+Math.round(100*(cur.scr+1)/s.screens.length)+'%"></i></div>'+
      gameBanner(cur.sec,cur.scr)+(sc.title&&sc.title!==s.title?'<h3 style="margin-top:6px;color:var(--accent)">'+esc(sc.title)+'</h3>':'')+sc.blocks.map(blockHtml).join('');
    ST.vis[cur.sec+':'+cur.scr]=1;
    nb.style.display='block';
    mid.textContent='Screen '+(cur.scr+1)+' of '+s.screens.length;
    pv.textContent=cur.scr===0?'Menu':'Back';
    var last=cur.scr===s.screens.length-1,si=secIdx(cur.sec);
    nx.textContent=last?(si<SECS.length-1?'Next topic':'Home'):'Next';
  }
  app.innerHTML=h;
  gameAfter(app);
  ST.last=cur;save();
  if(!keepScroll)window.scrollTo(0,0);
  var bar=$('#gbar');if(bar)bar.style.width=totalProgress()+'%';
  var sub=$('#sub');if(sub)sub.textContent=cur.sec==='home'?'Contents':(secObj(cur.sec).title);
  buildDrawer();hud();
  if(RT.mock&&!RT.mock.done&&!mockTimer)mockTimer=setInterval(mockTick,1000);
}
function go(sec,scr){RT.cur={sec:sec,scr:scr||0};closeDrawer();render()}
function next(){
  var cur=RT.cur;if(cur.sec==='home')return;
  var s=secObj(cur.sec);
  if(cur.scr<s.screens.length-1)go(cur.sec,cur.scr+1);
  else{var si=secIdx(cur.sec);if(si<SECS.length-1)go(SECS[si+1].id,0);else go('home',0)}
}
function prev(){
  var cur=RT.cur;if(cur.sec==='home')return;
  if(cur.scr>0)go(cur.sec,cur.scr-1);else openDrawer();
}
function buildDrawer(){
  var d=$('#drawer'),h='<div class="row"><b style="flex:1">Contents</b><button class="ib" data-act="closed" aria-label="Close menu">✕</button></div><a data-act="go" data-sec="home" data-scr="0" class="'+(RT.cur.sec==='home'?'on':'')+'">Home</a>',last='';
  SECS.forEach(function(s){
    if(s.part!==last){h+='<h4>'+esc(s.part)+'</h4>';last=s.part}
    var q=secQ(s.id);
    h+='<a data-act="go" data-sec="'+s.id+'" data-scr="0" class="'+(RT.cur.sec===s.id?'on':'')+'">'+esc(s.title)+'<span>'+(q.length?answeredCount(q)+'/'+q.length:'')+'</span></a>';
  });
  d.innerHTML=h+gameDrawer();
}
function openDrawer(){$('#drawer').classList.add('on');$('#shade').classList.add('on')}
function closeDrawer(){$('#drawer').classList.remove('on');$('#shade').classList.remove('on')}

/* ---- events ---- */
function onClick(e){
  gameFirst();
  var t=e.target;while(t&&t!==document&&!(t.getAttribute&&t.getAttribute('data-act')))t=t.parentNode;
  if(!t||t===document)return;
  var act=t.getAttribute('data-act'),q=t.getAttribute('data-q'),i=+t.getAttribute('data-i'),set=t.getAttribute('data-set');
  if(act==='opt')answerMcq(q,i);
  else if(act==='chk')answerTyped(q);
  else if(act==='hint'){RT.hint[q]=1;refreshCard(q)}
  else if(act==='self'){var r=ST.res[q];r.ok=1;r.self=1;save();refreshCard(q)}
  else if(act==='xopt'){examState(set).a[q]=i;save();render(true)}
  else if(act==='xsubmit')examSubmit(set);
  else if(act==='xself'){examState(set).self[q]=1;var b=findQuiz(set);ST.res[q]={done:1,ok:1,tries:0,exam:1,self:1};save();render(true)}
  else if(act==='xreset'){delete ST.exam[set];findQuiz(set).items.forEach(function(x){delete ST.res[x.id]});save();render()}
  else if(act==='mstart'){RT.mock={i:0,a:[],end:Date.now()+MOCKMIN*60000,done:false};if(mockTimer)clearInterval(mockTimer);mockTimer=null;render()}
  else if(act==='mopt'){RT.mock.a[RT.mock.i]=i;render(true)}
  else if(act==='mnext'){RT.mock.i++;render()}
  else if(act==='mprev'){RT.mock.i--;render()}
  else if(act==='mfinish'){mockFinish()}
  else if(act==='go')go(t.getAttribute('data-sec'),+t.getAttribute('data-scr'));
  else if(act==='cont'){var l=ST.last;if(l&&l.sec!=='home'&&secObj(l.sec)&&l.scr<secObj(l.sec).screens.length)go(l.sec,l.scr);else go('start',0)}
  else if(act==='pin'){var v=$('#pin').value;if(v===TPIN){RT.pin=true;RT.pinBad=0}else{RT.pinBad=1}render(true)}
  else if(act==='wipe'){ST.res={};ST.exam={};ST.vis={};ST.mockBest=null;RT.mock=null;RT.hint={};save();render()}
  else if(act==='closed')closeDrawer();
  else if(act==='set')gameSet(t.getAttribute('data-k'));
}
function onKey(e){
  var t=e.target;
  if(t&&t.classList&&t.classList.contains('tx')&&e.key==='Enter'){
    var q=t.getAttribute('data-q');if(q&&t.id==='in-'+q)answerTyped(q);
    if(t.id==='pin')$('[data-act="pin"]').click();
  }
}
function onInput(e){
  var t=e.target;
  if(t&&t.getAttribute&&t.getAttribute('data-act')==='xtype'){var es=examState(t.getAttribute('data-set'));es.a[t.getAttribute('data-q')]=t.value;save();var cs=$('[data-set="'+t.getAttribute('data-set')+'"]');var q=$('[data-quiz="'+t.getAttribute('data-set')+'"] .prog');if(q){var b=findQuiz(t.getAttribute('data-set')),n=0;b.items.forEach(function(x){if(es.a[x.id]!==undefined&&es.a[x.id]!=='')n++});q.textContent='Answered '+n+' of '+b.items.length}}
}
document.addEventListener('click',onClick);
document.addEventListener('keydown',onKey);
document.addEventListener('input',onInput);
$('#menu').onclick=openDrawer;$('#shade').onclick=closeDrawer;
$('#pv').onclick=prev;$('#nx').onclick=next;
$('#brand').onclick=function(){go('home',0)};
load();
gameBoot();
if(ST.last&&ST.last.sec&&ST.last.sec!=='home'&&secObj(ST.last.sec)){RT.cur={sec:'home',scr:0}}
render();
window.__ENG={SECS:SECS,QIDX:QIDX,checkTyped:checkTyped,go:go,ST:ST,RT:RT,MOCK:MOCK,WAEC:WAEC,JAMB:JAMB,norm:norm,TOTAL:function(){return TOTAL}};
})();
