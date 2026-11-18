/* ---- content helpers ---- */
var SECS=[];
function hs(x){return '<span class="hs">'+x+'</span>'}   // subject colour
function hv(x){return '<span class="hv">'+x+'</span>'}   // verb colour
function ho(x){return '<span class="ho">'+x+'</span>'}   // object colour
function hb(x){return '<span class="hb">'+x+'</span>'}   // other highlight
function P(h){return {t:'p',h:h}}
function H(h){return {t:'h',h:h}}
function DEF(h,title){return {t:'def',h:h,title:title||'Definition'}}
function EX(h,title){return {t:'ex',h:h,title:title||'Example'}}
function TIP(h,title){return {t:'tip',h:h,title:title||'Exam tip'}}
function MIS(h,title){return {t:'mis',h:h,title:title||'Common mistake'}}
function TB(head,rows,cap){return {t:'tb',head:head,rows:rows,cap:cap||''}}
function WK(title,items){return {t:'wk',title:title,items:items}}
function STP(items,title){return {t:'stp',items:items,title:title||''}}
function QZ(id,title,mode,items,intro,level){return {t:'qz',id:id,title:title,mode:mode,items:items,intro:intro||'',level:level||''}}
function SC(title){var b=[];for(var i=1;i<arguments.length;i++)b.push(arguments[i]);return {title:title,blocks:b}}
function SEC(id,part,title,blurb,screens){SECS.push({id:id,part:part,title:title,blurb:blurb,screens:screens})}
/* questions */
function M(id,topic,q,opts,a,why,wr){return {type:'mcq',id:id,topic:topic,q:q,opts:opts,a:a,why:why,wr:wr||{}}}
function W(id,topic,q,ans,why,o){o=o||{};return {type:'typed',id:id,topic:topic,q:q,ans:ans,why:why,model:ans[0],hint:o.hint||'',traps:o.traps||[],noq:!!o.noq,needq:!!o.needq,has:o.has||null,ph:o.ph||'Type your answer here'}}
var SAME=['Same meaning','Different meaning'];
/* the topic list used for the revision panel */
var TOPICS={
  recast:{n:'What recasting means',sec:'a1'},
  participle:{n:'Past participles',sec:'a2'},
  passive:{n:'Active and passive voice',sec:'a2'},
  reported:{n:'Direct and reported speech',sec:'a3'},
  function:{n:'Grammatical functions',sec:'b2'},
  phrase:{n:'Phrases and clauses',sec:'b3'},
  passage:{n:'Comprehension passage',sec:'c1'}
};
