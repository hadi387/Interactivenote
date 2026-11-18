/* ================= GAME CONTENT: animations, bosses, villains ================= */
function T(k,t,c,lab){return {k:k,t:t,c:c||'x',lab:lab||''}}
var ANIMS={
 pass1:{title:'Watch the passive build itself',xp:5,steps:[
  {cap:'This is an <b>active</b> sentence. Ada does the cooking.',tok:[T('ada','Ada'),T('cooked','cooked'),T('food','the food')]},
  {cap:'<b>Steps 1 to 3.</b> Find the subject, the verb and the object.',tok:[T('ada','Ada','s','subject'),T('cooked','cooked','v','verb'),T('food','the food','o','object')]},
  {cap:'<b>Step 4.</b> Move the object to the front. It is the new subject.',tok:[T('food','the food','o','new subject'),T('ada','Ada','s'),T('cooked','cooked','v')]},
  {cap:'<b>Step 5.</b> Add <b>was</b>. The verb becomes <b>was + past participle</b>. The tense stays past.',tok:[T('food','the food','o'),T('was','was','n','be'),T('cooked','cooked','v','past participle'),T('ada','Ada','s')]},
  {cap:'<b>Step 6.</b> Add <b>by</b> and put the doer at the end.',tok:[T('food','the food','o'),T('was','was','n'),T('cooked','cooked','v'),T('by','by','n'),T('ada','Ada','s')]},
  {cap:'<b>The food was cooked by Ada.</b> Same meaning. Same tense. Ada is still the cook.',tok:[T('food','The food','k'),T('was','was','k'),T('cooked','cooked','k'),T('by','by','k'),T('ada','Ada','k')]}
 ]},
 pass2:{title:'Watch the continuous passive',xp:5,steps:[
  {cap:'Present continuous: <b>is washing</b>.',tok:[T('e','Emeka','s','subject'),T('is','is','v'),T('w','washing','v','verb'),T('car','the car','o','object')]},
  {cap:'Move the object to the front.',tok:[T('car','the car','o','new subject'),T('is','is','v'),T('w','washing','v'),T('e','Emeka','s')]},
  {cap:'Continuous passive needs <b>being</b> and the past participle <b>washed</b>.',tok:[T('car','the car','o'),T('is','is','v'),T('b','being','n','the continuous sign'),T('w','washed','n','past participle'),T('e','Emeka','s')]},
  {cap:'Add <b>by</b> before the doer.',tok:[T('car','the car','o'),T('is','is','v'),T('b','being','n'),T('w','washed','n'),T('by','by','n'),T('e','Emeka','s')]},
  {cap:'<b>The car is being washed by Emeka.</b> Still happening now, so the tense is unchanged.',tok:[T('car','The car','k'),T('is','is','k'),T('b','being','k'),T('w','washed','k'),T('by','by','k'),T('e','Emeka','k')]}
 ]},
 pass3:{title:'When the doer disappears',xp:5,steps:[
  {cap:'Someone stole my bicycle. We do not know who.',tok:[T('s','Someone','s','unknown doer'),T('st','stole','v'),T('b','my bicycle','o')]},
  {cap:'Move the object to the front.',tok:[T('b','my bicycle','o'),T('s','Someone','s'),T('st','stole','v')]},
  {cap:'Make the verb passive: <b>was stolen</b>.',tok:[T('b','my bicycle','o'),T('was','was','n'),T('st','stolen','n'),T('s','Someone','s')]},
  {cap:'The doer is unknown, so we leave out <b>by someone</b>. Poof!',tok:[T('b','My bicycle','k'),T('was','was','k'),T('st','stolen','k')]}
 ]},
 rep1:{title:'Watch direct speech become reported speech',xp:5,steps:[
  {cap:'<b>Direct speech:</b> the exact words, in quotation marks.',tok:[T('m','Musa'),T('sd','said,'),T('i','“I'),T('w','will'),T('c','come'),T('t','tomorrow.”')]},
  {cap:'<b>Step 1.</b> Remove the quotation marks. Add <b>that</b>.',tok:[T('m','Musa'),T('sd','said'),T('th','that','n'),T('i','I'),T('w','will'),T('c','come'),T('t','tomorrow')]},
  {cap:'<b>Step 2: pronoun.</b> I is Musa himself, so I becomes <b>he</b>.',tok:[T('m','Musa'),T('sd','said'),T('th','that'),T('i','he','n','pronoun'),T('w','will'),T('c','come'),T('t','tomorrow')]},
  {cap:'<b>Step 3: tense.</b> will becomes <b>would</b>.',tok:[T('m','Musa'),T('sd','said'),T('th','that'),T('i','he'),T('w','would','n','tense'),T('c','come'),T('t','tomorrow')]},
  {cap:'<b>Step 4: time word.</b> tomorrow becomes <b>the next day</b>.',tok:[T('m','Musa'),T('sd','said'),T('th','that'),T('i','he'),T('w','would'),T('c','come'),T('t','the next day','n','time word')]},
  {cap:'<b>Musa said that he would come the next day.</b> Same message, reported.',tok:[T('m','Musa','k'),T('sd','said','k'),T('th','that','k'),T('i','he','k'),T('w','would','k'),T('c','come','k'),T('t','the next day','k')]}
 ]},
 rep2:{title:'Watch a question become a statement',xp:5,steps:[
  {cap:'<b>Direct:</b> Mr Adamu asked the boy, “Where do you live?”',tok:[T('a','Mr Adamu'),T('as','asked'),T('b','the boy,'),T('wh','“Where'),T('do','do'),T('y','you'),T('l','live?”')]},
  {cap:'<b>Step 1.</b> Remove the quotation marks and the question mark. Keep the question word <b>where</b>. Do not add that.',tok:[T('a','Mr Adamu'),T('as','asked'),T('b','the boy'),T('wh','where','n','question word'),T('do','do'),T('y','you'),T('l','live')]},
  {cap:'<b>Step 2.</b> A reported question is a statement. Remove <b>do</b>.',tok:[T('a','Mr Adamu'),T('as','asked'),T('b','the boy'),T('wh','where'),T('y','you'),T('l','live')]},
  {cap:'<b>Step 3: pronoun.</b> you becomes <b>he</b>.',tok:[T('a','Mr Adamu'),T('as','asked'),T('b','the boy'),T('wh','where'),T('y','he','n','pronoun'),T('l','live')]},
  {cap:'<b>Step 4: tense.</b> live becomes <b>lived</b>.',tok:[T('a','Mr Adamu'),T('as','asked'),T('b','the boy'),T('wh','where'),T('y','he'),T('l','lived','n','tense')]},
  {cap:'<b>Mr Adamu asked the boy where he lived.</b>',tok:[T('a','Mr Adamu','k'),T('as','asked','k'),T('b','the boy','k'),T('wh','where','k'),T('y','he','k'),T('l','lived','k')]}
 ]},
 rep3:{title:'Watch a command get reported',xp:5,steps:[
  {cap:'<b>Direct:</b> “Close the door,” the teacher said to Bayo.',tok:[T('q1','“Close'),T('q2','the door,”'),T('t','the teacher'),T('sd','said to'),T('b','Bayo')]},
  {cap:'<b>Step 1.</b> Put the reporter first.',tok:[T('t','the teacher'),T('sd','said to'),T('b','Bayo'),T('q1','“Close'),T('q2','the door,”')]},
  {cap:'<b>Step 2.</b> A command uses <b>told</b> and the person.',tok:[T('t','the teacher'),T('sd','told','n','reporting verb'),T('b','Bayo'),T('q1','“Close'),T('q2','the door,”')]},
  {cap:'<b>Step 3.</b> Remove the quotation marks. Add <b>to</b> before the verb.',tok:[T('t','the teacher'),T('sd','told'),T('b','Bayo'),T('to','to','n'),T('q1','close'),T('q2','the door')]},
  {cap:'<b>The teacher told Bayo to close the door.</b> Told + person + to + verb.',tok:[T('t','The teacher','k'),T('sd','told','k'),T('b','Bayo','k'),T('to','to','k'),T('q1','close','k'),T('q2','the door','k')]}
 ]},
 func1:{title:'Same words, different jobs',xp:5,steps:[
  {cap:'<b>The boy ran home.</b> Who ran? The boy. He is the <b>subject</b>.',tok:[T('boy','The boy','s','subject'),T('ran','ran','v'),T('home','home','x','adverbial of place')]},
  {cap:'<b>She saw the boy.</b> The boy receives the seeing. Now he is the <b>direct object</b>.',tok:[T('she','She','s','subject'),T('saw','saw','v'),T('boy','the boy','o','direct object')]},
  {cap:'<b>She gave the boy a book.</b> The book is given to the boy. Now he is the <b>indirect object</b>.',tok:[T('she','She','s','subject'),T('gave','gave','v'),T('boy','the boy','n','indirect object'),T('book','a book','o','direct object')]},
  {cap:'<b>He is a teacher.</b> A teacher describes he. It is the <b>subject complement</b>.',tok:[T('he','He','s','subject'),T('is','is','v'),T('teach','a teacher','n','subject complement')]},
  {cap:'<b>They arrived early.</b> Early tells when. It is an <b>adverbial of time</b>.',tok:[T('they','They','s','subject'),T('arr','arrived','v'),T('early','early','n','adverbial of time')]}
 ]},
 clause1:{title:'Spot the relative clause',xp:5,steps:[
  {cap:'<b>The man who lives next door is a doctor.</b>',tok:[T('a','The man'),T('b','who'),T('c','lives'),T('d','next door'),T('e','is'),T('f','a doctor')]},
  {cap:'The group <b>who lives next door</b> has its own subject and verb. It is a <b>clause</b>.',tok:[T('a','The man'),T('b','who','n','relative clause'),T('c','lives','n'),T('d','next door','n'),T('e','is'),T('f','a doctor')]},
  {cap:'It tells <b>which man</b>. Its job is to describe <b>the man</b>. Structure: relative clause. Function: adjectival.',tok:[T('a','The man','o','is described'),T('b','who','n'),T('c','lives','n'),T('d','next door','n'),T('e','is'),T('f','a doctor')]},
  {cap:'The main part is <b>The man is a doctor</b>. The clause is an extra description.',tok:[T('a','The man','s','subject'),T('b','who','x'),T('c','lives','x'),T('d','next door','x'),T('e','is','v'),T('f','a doctor','o','complement')]}
 ]},
 clause2:{title:'Spot the adverbial clause',xp:5,steps:[
  {cap:'<b>The students arrived after the bell rang.</b>',tok:[T('a','The students'),T('b','arrived'),T('c','after'),T('d','the bell'),T('e','rang')]},
  {cap:'<b>after the bell rang</b> has its own subject (the bell) and verb (rang). It is a clause.',tok:[T('a','The students'),T('b','arrived'),T('c','after','n','adverbial clause'),T('d','the bell','n'),T('e','rang','n')]},
  {cap:'Ask: arrived <b>when</b>? After the bell rang. Function: <b>adverbial of time</b>.',tok:[T('a','The students','s'),T('b','arrived','v'),T('c','after','n','of time'),T('d','the bell','n'),T('e','rang','n')]}
 ]}
};
/* where the animation screens go (inserted after the screen with this title) */
var ANIM_AT=[
 ['a2','Seven steps to change active to passive',[ 'pass1' ],'Watch it move: simple past'],
 ['a2','How each tense changes',[ 'pass2' ],'Watch it move: continuous passive'],
 ['a2','Three rules you must remember',[ 'pass3' ],'Watch it move: the doer disappears'],
 ['a3','Change 3: time and place words',[ 'rep1' ],'Watch it move: statements'],
 ['a3','Reporting questions',[ 'rep2' ],'Watch it move: questions'],
 ['a3','Reporting commands, requests and exclamations',[ 'rep3' ],'Watch it move: commands'],
 ['b1','Same words, different jobs',[ 'func1' ],'Watch it move: one phrase, five jobs'],
 ['b3','The seven you must know',[ 'clause1','clause2' ],'Watch it move: clauses at work']
];
(function(){
  ANIM_AT.forEach(function(a){
    var s=null;SECS.forEach(function(x){if(x.id===a[0])s=x});if(!s)throw new Error('anim sec '+a[0]);
    var i=-1;s.screens.forEach(function(sc,k){if(sc.title===a[1])i=k});if(i<0)throw new Error('anim screen '+a[1]);
    var bl=a[2].map(function(id){return {t:'anim',id:id}});
    s.screens.splice(i+1,0,{title:a[3],blocks:[P('Tap <b>Next step</b> and watch the words move. Each step shows one idea. Press <b>Replay</b> to watch again.')].concat(bl)});
  });
})();

/* ================= BOSSES ================= */
var BOSSES={
 passive:{name:'The Passive Phantom',color:'#B084FF',topics:['passive','participle','recast'],sec:'a2',taunt:['Mwahaha! Doers and receivers, all mixed up!','You cannot keep the tense!','I swap the meaning, and you will not notice!']},
 reported:{name:'The Quote Thief',color:'#FF8A3D',topics:['reported'],sec:'a3',taunt:['I steal your quotation marks!','Pronouns? Tenses? I keep them all!','You will say said me, ha!']},
 phrase:{name:'The Clause Goblin',color:'#2EE6A6',topics:['phrase'],sec:'b3',taunt:['A clause or a phrase? You will never know!','I hide verbs in my pockets!','Structure and function, all muddled!']},
 function:{name:'The Function Fiend',color:'#FF5A6E',topics:['function'],sec:'b4',taunt:['Noun! Verb! Anything but function!','The same word, a new job every day!','Subject or object? Guess!']}
};
function addBoss(secId,afterTitle,bossId,title){
  var s=null;SECS.forEach(function(x){if(x.id===secId)s=x});
  s.screens.push({title:title,blocks:[P('Time to prove it. Answer correctly to damage the boss. Each wrong answer costs one of your <b>3 hearts</b>.'),{t:'boss',id:bossId}]});
}
addBoss('a2',null,'passive','Boss battle: The Passive Phantom');
addBoss('a3',null,'reported','Boss battle: The Quote Thief');
addBoss('b3',null,'phrase','Boss battle: The Clause Goblin');
addBoss('b4',null,'function','Boss battle: The Function Fiend');

/* section villains (banner) */
var VILL={
 start:{n:'Grammar Gremlin',c:'#FFD23F',q:['Grammar is boring, hehe. Prove me wrong!']},
 a1:{n:'The Meaning Mixer',c:'#FF5A6E',q:['I swap the doer and the receiver when nobody is looking.','Same meaning? I will change it!']},
 a2:{n:'The Passive Phantom',c:'#B084FF',q:['Be + past participle? I will confuse your tenses!','You will forget the participle. I know it!']},
 a3:{n:'The Quote Thief',c:'#FF8A3D',q:['I will steal your pronouns and keep your quotation marks!','Said me? Told me? Ha!']},
 b1:{n:'The Function Fiend',c:'#FF5A6E',q:['Noun? Verb? You will never name its job!']},
 b2:{n:'The Function Fiend',c:'#FF5A6E',q:['Subject or object? Guess! Ha!','A new job for every word!']},
 b3:{n:'The Clause Goblin',c:'#2EE6A6',q:['Phrase or clause? I hid the verbs!']},
 b4:{n:'The Function Fiend',c:'#FF5A6E',q:['Exam time! I never answer with a word class. Do you?']},
 c1:{n:'The Riddle Sphinx',c:'#4DA3FF',q:['Read the passage. Then answer my riddles!']},
 d1:{n:'The WAEC Warlord',c:'#FF5A6E',q:['Twenty questions stand between you and glory!']},
 d2:{n:'The JAMB Jester',c:'#FFD23F',q:['Four options. Only one is right. Choose wisely!']},
 d3:{n:'The WAEC Warlord',c:'#FF5A6E',q:['Twenty minutes. Fifteen questions. Are you brave?']},
 e1:{n:'The Mistake Monster',c:'#FF8A3D',q:['I feed on exam mistakes. Do not feed me!']},
 e2:{n:'The Mistake Monster',c:'#FF8A3D',q:['Revise! Or I will eat your marks!']},
 f1:{n:'The Rival Bots',c:'#4DA3FF',q:['Five bots. One winner. Race us!']}
};

/* ================= PLAY TOGETHER ================= */
SEC('f1','Play together','Class quiz battle','Like Kahoot. No internet and no teacher screen needed.',[SC('Quiz battle',{t:'battle'})]);
SEC('f2','Play together','Teacher board','For the teacher: collect result codes and rank the class.',[SC('Teacher board',{t:'board'})]);
(function(){
  var f=[],rest=[];SECS.forEach(function(s){(s.id==='f1'||s.id==='f2'?f:rest).push(s)});
  var i=0;rest.forEach(function(s,k){if(s.id==='e1')i=k});
  SECS.length=0;rest.slice(0,i).concat(f).concat(rest.slice(i)).forEach(function(s){SECS.push(s)});
})();
