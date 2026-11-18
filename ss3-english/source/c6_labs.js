/* ================= HANDS-ON LEVELS: students DO things and discover the rules ================= */
var LABS={};
function LAB(d){LABS[d.id]=d;return {t:'lab',id:d.id}}
function OQ(id){var f=null;SECS.forEach(function(s){s.screens.forEach(function(sc){sc.blocks.forEach(function(b){if(b.t==='qz'&&b.id===id)f=b})})});if(!f)throw new Error('quiz '+id);return f}
function setScreens(id,screens){SECS.forEach(function(s){if(s.id===id)s.screens=screens})}
function TAP(id,title,prompt,toks,tasks,disc){return LAB({id:id,kind:'tap',title:title,prompt:prompt,toks:toks,tasks:tasks,disc:disc})}
function TK(ask,a,role,lab,say,hint){return {ask:ask,a:a,role:role,lab:lab,say:say,hint:hint}}
function BUILD(id,title,prompt,tiles,target,disc,traps,hint,alts){return LAB({id:id,kind:'build',title:title,prompt:prompt,tiles:tiles,targets:[target].concat(alts||[]),disc:disc,traps:traps||[],hint:hint})}
function CYC(id,title,prompt,t,disc){return LAB({id:id,kind:'cycle',title:title,prompt:prompt,t:t,disc:disc})}
function SRT(id,title,prompt,buckets,items,disc,hint){return LAB({id:id,kind:'sort',title:title,prompt:prompt,buckets:buckets,items:items,disc:disc,hint:hint})}
function EXP(id,title,prompt,items,disc){return LAB({id:id,kind:'explore',title:title,prompt:prompt,items:items,disc:disc})}
function MAT(id,title,prompt,pairs,disc){return LAB({id:id,kind:'match',title:title,prompt:prompt,pairs:pairs,disc:disc})}
function S(a,b){return {t:a,b:b}}

/* ---------- Level 0: Training ground ---------- */
setScreens('start',[
 SC('How to play',
  P('Welcome, fighter! You learn by <b>doing</b>. Every round gives you a challenge. Solve it and you discover the rule yourself.'),
  P('Right answers give XP. Beat the boss at the end of a level to unlock the next one. Ready? Tap <b>Next</b>.')),
 SC('Find the parts',TAP('l-t1','Sentence detective','Every sentence has a <b>doer</b>, an <b>action</b> and a <b>receiver</b>. Find them.',['Ada','kicked','the ball'],[
   TK('Who did it? Tap the <b>DOER</b>.',[0],'s','subject','Ada did the kicking. The doer is called the <b>subject</b>.','Who kicked the ball?'),
   TK('Tap the <b>ACTION</b> word.',[1],'v','verb','Kicked is the action. An action word is a <b>verb</b>.','Which word is something Ada did?'),
   TK('Tap the thing that <b>RECEIVED</b> the action.',[2],'o','object','The ball got kicked. The receiver is the <b>object</b>.','What was kicked?')],
  'The <b>subject</b> does the action. The <b>verb</b> is the action. The <b>object</b> receives it.')),
 SC('Again, new sentence',TAP('l-t2','Sentence detective 2','Same job, new sentence.',['The farmer','sells','yams'],[
   TK('Tap the <b>subject</b> (the doer).',[0],'s','subject','The farmer is the doer.','Who sells?'),
   TK('Tap the <b>verb</b>.',[1],'v','verb','Sells is the action.','Which word is the action?'),
   TK('Tap the <b>object</b> (the receiver).',[2],'o','object','Yams are what gets sold.','Sells what?')],
  'Ask <b>who or what + verb?</b> to find the subject. Ask <b>verb + what?</b> to find the object.')),
 SC('Sort the words',SRT('l-s1','Word sorter','Put each word in the right box.',['Noun','Pronoun','Verb','Adverb'],[
   S('Lagos',0),S('she',1),S('quickly',3),S('jumped',2),S('teacher',0),S('they',1),S('yesterday',3),S('sing',2)],
  'A <b>noun</b> names. A <b>pronoun</b> stands in for a noun. A <b>verb</b> acts. An <b>adverb</b> tells how, when or where.','Ask: does it name something, act, replace a noun, or tell how/when?')),
 SC('Phrase or clause?',SRT('l-s2','Phrase or clause?','A <b>clause</b> has its own subject AND verb. A <b>phrase</b> does not. Sort these. Find the rule yourself!',['Phrase','Clause'],[
   S('in the classroom',0),S('because the bell rang',1),S('the tall boy',0),S('after he left',1),S('under the table',0),S('who lives next door',1)],
  'A clause has its own <b>subject and verb</b> (the bell rang, he left, who lives). A phrase does not.','Look for a subject AND a verb inside the group of words.')),
 SC('Tense machine',EXP('l-e1','Tense machine','Press each button. Watch the verb change. What is tense?',[
   {b:'Past',h:'Ngozi <b>cooked</b> rice. <em>(it already happened)</em>'},{b:'Present',h:'Ngozi <b>cooks</b> rice. <em>(it happens now or again and again)</em>'},{b:'Future',h:'Ngozi <b>will cook</b> rice. <em>(it has not happened yet)</em>'}],
  'The <b>tense</b> of a verb shows <b>when</b> something happens: past, present or future.'))
]);

/* ---------- Level 1: Mirror Maze ---------- */
setScreens('a1',[
 SC('Who did it?',TAP('l-m1','Doer and receiver','In this sentence, who is the winner?',['Ada','beat','Bola'],[
   TK('Tap the <b>DOER</b> (who did the beating?).',[0],'s','doer','Ada did the beating. She is the winner.','Who beat whom?'),
   TK('Tap the <b>RECEIVER</b>.',[2],'o','receiver','Bola got beaten. She lost.','Who was beaten?')],
  'Swap the doer and the receiver and you change the <b>whole story</b>. A recast must keep the same doer.')),
 SC('Same meaning?',CYC('l-m2','Rebuild the meaning','Make the second sentence mean the <b>same</b> as the first. Tap the yellow words to change them.',
  ['Ada beat Bola. = Bola',{o:['beat','was beaten','is beating'],a:1,why:'Bola gets beaten now, so <b>was beaten</b>.'},{o:['to','by','for'],a:1,why:'<b>by</b> brings the doer (Ada) back.'},'Ada.'],
  'To keep the meaning, the receiver moves to the front and the doer comes back with <b>by</b>.')),
 SC('Another one',CYC('l-m3','Rebuild the meaning 2','Same job. Keep the meaning.',
  ['The dog bit the thief. = The thief',{o:['bit','was bitten','has bitten'],a:1,why:'The thief receives the biting: <b>was bitten</b>.'},{o:['of','by','with'],a:1,why:'<b>by</b> the dog keeps the doer.'},'the dog.'],
  'The doer never changes. Only the way we say it changes.')),
 SC('Build it',BUILD('l-m4','Build the recast','Active: <b>The cook made the soup.</b> Build a sentence with the same meaning.',['The soup','was','made','by','the cook','is','were'],'The soup was made by the cook',
  'The receiver goes first, then <b>was + the past participle</b>, then <b>by</b> and the doer.',[{re:/^the cook/,m:'You started with the cook. In the new sentence the receiver comes first.'},{re:/ is /,m:'The original is in the past, so use <b>was</b>.'}],'Start with the soup.')),
 SC('Same or different?',OQ('a1-pairs')),
 SC('Swap trap',OQ('a1-swap'))
]);

/* ---------- Level 2: Passive Phantom ---------- */
var PEXP=[
 ['Simple present','Ngozi cooks rice.','Rice <b class="be">is</b> <b>cooked</b> by Ngozi.','is'],
 ['Simple past','Ngozi cooked rice.','Rice <b class="be">was</b> <b>cooked</b> by Ngozi.','was'],
 ['Present continuous','Ngozi is cooking rice.','Rice <b class="be">is being</b> <b>cooked</b> by Ngozi.','is being'],
 ['Past continuous','Ngozi was cooking rice.','Rice <b class="be">was being</b> <b>cooked</b> by Ngozi.','was being'],
 ['Present perfect','Ngozi has cooked rice.','Rice <b class="be">has been</b> <b>cooked</b> by Ngozi.','has been'],
 ['Past perfect','Ngozi had cooked rice.','Rice <b class="be">had been</b> <b>cooked</b> by Ngozi.','had been'],
 ['Future','Ngozi will cook rice.','Rice <b class="be">will be</b> <b>cooked</b> by Ngozi.','will be'],
 ['Modal (can)','Ngozi can cook rice.','Rice <b class="be">can be</b> <b>cooked</b> by Ngozi.','can be']
];
setScreens('a2',[
 SC('Find the parts',TAP('l-p1','Spot the doer','Warm up. Find the parts of this sentence.',['The teacher','punished','the student'],[
   TK('Tap the <b>doer</b>.',[0],'s','doer','The teacher does the punishing.','Who punished?'),
   TK('Tap the <b>receiver</b>.',[2],'o','receiver','The student gets punished.','Who got punished?')],
  'In an <b>active</b> sentence the doer comes first. In a <b>passive</b> sentence the receiver comes first.')),
 SC('Build the passive',BUILD('l-pb1','Build it: simple past','Active: <b>The cook prepared the meal.</b> Build the passive.',['The meal','was','prepared','by','the cook','is','were','prepares'],'The meal was prepared by the cook',
  'Receiver first. <b>was + prepared</b> keeps the past tense. <b>by</b> brings the doer back.',[{re:/^the meal prepared/,m:'Something is missing between “the meal” and “prepared”.'},{re:/ is /,m:'The active sentence is in the past, so the passive must be in the past.'}],'Start with “The meal”.')),
 SC('Watch it',{t:'anim',id:'pass1'}),
 SC('Passive machine',EXP('l-pe1','Passive machine','Same sentence, eight tenses. Press each button and compare the <b>active</b> with the <b>passive</b>. Spot the pattern!',
  PEXP.map(function(p){return {b:p[0],h:'<div class="pm"><div class="a">Active: '+p[1]+'</div><div class="p">Passive: '+p[2]+'</div></div>'}}),
  'The <b>tense never changes</b>. The <b>be</b> part changes with the tense (is, was, is being, has been, will be…). The last verb is always the <b>past participle</b> (cooked).')),
 SC('Continuous passive',BUILD('l-pb2','Build it: continuous','Active: <b>Emeka is washing the car.</b> Build the passive.',['The car','is','being','washed','by','Emeka','was','washing'],'The car is being washed by Emeka',
  'A continuous passive needs <b>being</b>: is being + past participle.',[{re:/is washed/,m:'You lost the continuous. The active sentence is happening now. Add “being”.'},{re:/ was /,m:'The active sentence is in the present, so use “is”.'}],'The tense word “being” goes after “is”.')),
 SC('Perfect passive',BUILD('l-pb3','Build it: perfect','Active: <b>Ibrahim has written the letter.</b> Build the passive.',['The letter','has','been','written','by','Ibrahim','have','wrote'],'The letter has been written by Ibrahim',
  'The perfect passive uses <b>has been + past participle</b>.',[{re:/has written/,m:'Where is “been”? The perfect passive is has been + participle.'},{re:/have /,m:'“The letter” is singular, so use “has”.'}],'has + been + written.')),
 SC('Modal passive',BUILD('l-pb4','Build it: modal','Active: <b>Tunde can solve this problem.</b> Build the passive.',['This problem','can','be','solved','by','Tunde','could','solve'],'This problem can be solved by Tunde',
  'A modal stays the same, then <b>be + past participle</b>.',[{re:/could/,m:'Keep the same modal: can.'},{re:/can solved/,m:'After a modal use “be”: can be solved.'}],'can + be + solved.')),
 SC('Future passive',BUILD('l-pb5','Build it: future','Active: <b>The principal will announce the results.</b> Build the passive.',['The results','will','be','announced','by','the principal','are','announce'],'The results will be announced by the principal',
  'Future passive: <b>will be + past participle</b>.',[{re:/will announced/,m:'After will you need “be”.'}],'will + be + announced.')),
 SC('Two objects',BUILD('l-pb6','Build it: two objects','Active: <b>Mrs Bello gave Chidi a book.</b> Start with Chidi.',['Chidi','was','given','a book','by','Mrs Bello','gave','were'],'Chidi was given a book by Mrs Bello',
  'Either object can come first. Starting with the person is the most common.',[{re:/was gave/,m:'After was use the past participle: given.'}],'Chidi was …')),
 SC('Question time',BUILD('l-pb7','Build it: a question','Active: <b>Who broke the window?</b> Build the passive question.',['By','whom','was','the window','broken','who','broke'],'By whom was the window broken',
  '“Who” becomes <b>by whom</b>, and the window becomes the subject.',[{re:/by who /,m:'After a preposition, use “whom”.'}],'Start with “By whom”.')),
 SC('Past participles',EXP('l-pe2','Verb forms','Press each verb. Look at the three forms. Which form goes after <b>be</b> in a passive?',
  [['write','wrote','written'],['eat','ate','eaten'],['break','broke','broken'],['build','built','built'],['teach','taught','taught'],['take','took','taken'],['give','gave','given'],['see','saw','seen']].map(function(v){return {b:v[0],h:'<div class="forms"><span>'+v[0]+'</span> → <span>'+v[1]+'</span> → <b>'+v[2]+'</b></div>'}}),
  'The passive uses the <b>third form</b>, the past participle: was <b>written</b>, was <b>broken</b>.')),
 SC('Type the participle',OQ('a2-pp')),
 SC('Fix the passive',CYC('l-pc1','Repair 1','The window was ___ by the boy.',['The window was',{o:['broke','broken','breaking'],a:1,why:'After <b>was</b> use the past participle: <b>broken</b>.'},'by the boy.'],'After <b>be</b>, use the past participle, not the past tense.')),
 SC('Fix again',CYC('l-pc2','Repair 2','A passive needs the verb <b>be</b>.',['The letter',{o:['written','was written','is wrote'],a:1,why:'You need <b>be</b> + participle: <b>was written</b>.'},'by Ibrahim.'],'Every passive has <b>be + past participle</b>.')),
 SC('Fix the pronoun',CYC('l-pc3','Repair 3','Active: <b>She hit him.</b> Passive:',['He was hit by',{o:['she','her','he'],a:1,why:'After <b>by</b> use the object form: <b>her</b>.'},'.'],'After <b>by</b> use <b>me, him, her, us, them</b>.')),
 SC('Can it be passive?',SRT('l-ps1','Passive or not?','Which sentences <b>can</b> become passive? Think about the receiver!',['Yes','No'],[
   S('Ada opened the door.',0),S('Ada arrived early.',1),S('The baby slept.',1),S('Tola ate the rice.',0),S('The rain fell heavily.',1)],
  'A passive needs an <b>object</b> (a receiver). Verbs like arrive, sleep and fall have none, so they cannot be passive.','Does anything RECEIVE the action?')),
 SC('Quick questions',OQ('a2-parts')),
 SC('Beginner round',OQ('a2-beg')),
 SC('Type the passive',OQ('a2-int')),
 SC('Exam round',OQ('a2-exam'))
]);

/* ---------- Level 3: Quote Thief ---------- */
var RTENSE=[
 ['Simple present','“I <b>eat</b> rice.”','He said that he <b>ate</b> rice.'],
 ['Present continuous','“I <b>am eating</b> rice.”','He said that he <b>was eating</b> rice.'],
 ['Present perfect','“I <b>have eaten</b> rice.”','He said that he <b>had eaten</b> rice.'],
 ['Simple past','“I <b>ate</b> rice.”','He said that he <b>had eaten</b> rice.'],
 ['will','“I <b>will</b> eat rice.”','He said that he <b>would</b> eat rice.'],
 ['can','“I <b>can</b> eat rice.”','He said that he <b>could</b> eat rice.'],
 ['may','“I <b>may</b> eat rice.”','He said that he <b>might</b> eat rice.']
];
setScreens('a3',[
 SC('Fix the report',CYC('l-r1','Repair the report 1','Musa said, “I am hungry.” Fix the report. Tap the yellow words.',
  ['Musa said that',{o:['I','he','you'],a:1,why:'<b>I</b> was Musa, so it becomes <b>he</b>.'},{o:['am','is','was'],a:2,why:'The tense moves one step back: am → <b>was</b>.'},'hungry.'],
  'Pronouns follow the <b>speaker</b> (I → he/she). Tenses move one step <b>back</b> (am → was).')),
 SC('We and they',CYC('l-r2','Repair the report 2','Ngozi said, “We are going to the market.”',
  ['Ngozi said that',{o:['we','they','she'],a:1,why:'<b>We</b> was Ngozi and others, so <b>they</b>.'},{o:['are','were','is'],a:1,why:'are going → <b>were going</b>.'},'going to the market.'],
  '<b>We</b> becomes <b>they</b>.')),
 SC('Time words',CYC('l-r3','Repair the report 3','Bayo said, “I will travel tomorrow.”',
  ['Bayo said that',{o:['I','he'],a:1,why:'<b>I</b> → <b>he</b>.'},{o:['will','would','can'],a:1,why:'will → <b>would</b>.'},'travel',{o:['tomorrow','the next day','yesterday'],a:1,why:'tomorrow → <b>the next day</b>.'},'.'],
  'Three things change: the <b>pronoun</b>, the <b>tense</b> and the <b>time word</b>.')),
 SC('You and my',CYC('l-r4','Repair the report 4','Chidi said to me, “You can borrow my pen.” Who is “you”? Who owns “my”?',
  ['Chidi told me that',{o:['you','I','he'],a:1,why:'<b>You</b> was me (the listener), so <b>I</b>.'},{o:['can','could','may'],a:1,why:'can → <b>could</b>.'},'borrow',{o:['my','his','your'],a:1,why:'<b>My</b> belonged to Chidi, so <b>his</b>.'},'pen.'],
  '<b>You</b> = the listener. <b>My</b> = the speaker.')),
 SC('Tense machine',EXP('l-re1','Backshift machine','Press each tense. See how it moves one step back.',
  RTENSE.map(function(r){return {b:r[0],h:'<div class="pm"><div class="a">Direct: '+r[1]+'</div><div class="p">Reported: '+r[2]+'</div></div>'}}),
  'In reported speech the tense moves <b>one step back</b>: present → past, past → past perfect, will → would, can → could.')),
 SC('Time words',MAT('l-rm1','Match the time words','Tap a word on the left. Then tap what it becomes in reported speech.',[
   {l:'today',r:'that day'},{l:'now',r:'then'},{l:'yesterday',r:'the day before'},{l:'tomorrow',r:'the next day'},{l:'here',r:'there'},{l:'last week',r:'the week before'}],
  'Time and place words move away from the speaker: now → then, here → there, tomorrow → the next day.')),
 SC('Tense check',OQ('a3-tense')),
 SC('Which reporting verb?',SRT('l-rs1','Choose the reporting verb','Which verb fits each sentence?',['said','told','asked','ordered'],[
   S('“Where is the market?” (a question)',2),S('“Stand up now!” (a strong command)',3),S('“I am tired.” (no listener named)',0),S('“Close the door,” to Bayo. (a command to a named person)',1),S('“Please lend me your pen.” (a polite request)',2)],
  '<b>asked</b> for questions and requests, <b>told</b> for statements or commands with a named listener, <b>ordered</b> for strong commands, <b>said</b> for plain statements.','Is it a question, a command, a request, or a plain statement?')),
 SC('Verb check',OQ('a3-verbs')),
 SC('Sentence types',OQ('a3-types')),
 SC('Said me?',CYC('l-rc1','Spot the trap','Fix the trap sentence.',['She',{o:['said me','told me','told'],a:1,why:'<b>Said</b> cannot be followed directly by a person. Use <b>told me</b>.'},'that she was ready.'],'<b>said to me</b> or <b>told me</b>, never <s>said me</s>.')),
 SC('Reporting a question',BUILD('l-rb1','Build the report','Mr Adamu asked the boy, “Where <b>do you live</b>?” Build the report.',['Mr Adamu','asked','the boy','where','he','lived','do','you','live','that','if'],'Mr Adamu asked the boy where he lived',
  'A reported question keeps the question word, uses <b>statement order</b>, drops <b>do</b>, and shifts the tense.',[{re:/ do /,m:'A reported question has no “do”.'},{re:/that/,m:'Never use “that” in a reported question.'},{re:/ you /,m:'“you” must change to “he”.'}],'Where + he + lived.')),
 SC('Question order',CYC('l-rc2','Spot the trap 2','He asked where I was going.',['He asked',{o:['where was I going','where I was going','that where I was going'],a:1,why:'Reported questions use <b>statement order</b> and never take “that”.'},'.'],'Reported questions are <b>statements</b>: subject before verb, no question mark.')),
 SC('Reporting a command',BUILD('l-rb2','Build the report 2','“Close the door,” the teacher said to Bayo. Build the report.',['The teacher','told','Bayo','to','close','the door','said','that','closed'],'The teacher told Bayo to close the door',
  'Command: <b>told + person + to + verb</b>.',[{re:/said/,m:'A command is reported with “told”.'},{re:/that/,m:'Do not use “that” for a command. Use “to”.'}],'told + Bayo + to + close.')),
 SC('Command fix',CYC('l-rc3','Spot the trap 3','The teacher told Bayo to close the door.',['The teacher told Bayo',{o:['close','to close','that close'],a:1,why:'Command: told + person + <b>to</b> + verb.'},'the door.'],'<b>told + person + to + verb</b>. Negative: <b>not to</b> + verb.')),
 SC('Beginner round',OQ('a3-beg')),
 SC('Type the report',OQ('a3-int')),
 SC('Exam round',OQ('a3-exam'))
]);

/* ---------- Level 4: Function Fiend ---------- */
setScreens('b1',[
 SC('Same words, new job',{t:'anim',id:'func1'}),
 SC('Word class or function?',SRT('l-fs0','Two different questions','<b>Word class</b> = what KIND of word. <b>Function</b> = what JOB it does in the sentence. Sort these!',['Word class','Function'],[
   S('noun',0),S('subject',1),S('adverb',0),S('direct object',1),S('adjective',0),S('adverbial',1),S('verb',0),S('subject complement',1)],
  'A <b>word class</b> belongs to the word (noun, verb…). A <b>function</b> depends on the sentence (subject, object…). In exams, never answer a function question with a word class.','Is it a kind of word, or a job in the sentence?')),
 SC('One word, two jobs',TAP('l-fb0','Same phrase, new job','Tap the <b>direct object</b>. Then the <b>subject</b> in the next one.',['She','saw','the boy'],[
   TK('Tap the <b>direct object</b>.',[2],'o','direct object','The boy receives the seeing.','Saw whom?')],
  '“The boy” was the <b>subject</b> in <i>The boy ran</i> and the <b>direct object</b> in <i>She saw the boy</i>. The job changes with the sentence.')),
 SC('Quick check',OQ('b1-q'))
]);
function FN(id,title,prompt,toks,tasks,disc){return SC(title,TAP(id,title,prompt,toks,tasks,disc))}
setScreens('b2',[
 FN('l-f1','1. Subject','Find the <b>subject</b>.',['The old man in the shop','sold','me','bread'],[TK('Tap the <b>subject</b>. (Who sold?)',[0],'s','subject','The whole phrase is the subject, not just “man”.','Who or what + sold?')],'The <b>subject</b> is the doer. Ask <b>who or what + verb?</b>'),
 FN('l-f2','2. Direct object','Find the <b>direct object</b>.',['Tola','kicked','the ball'],[TK('Tap the <b>direct object</b>. (Kicked what?)',[2],'o','direct object','The ball receives the action.','Kicked what?')],'The <b>direct object</b> receives the action. Ask <b>verb + what or whom?</b>'),
 FN('l-f3','3. Indirect object','Two objects here. Find both.',['She','gave','the boy','a book'],[TK('Tap the thing that was <b>GIVEN</b> (direct object).',[3],'o','direct object','A book is what was given.','What was given?'),TK('Now tap who <b>RECEIVED</b> it (indirect object).',[2],'n','indirect object','The boy receives the book.','Who got the book?')],'The <b>indirect object</b> is the person who receives the direct object. It comes <b>before</b> it.'),
 FN('l-f4','4. Subject complement','Find the <b>subject complement</b>.',['The soup','smells','delicious'],[TK('Tap the word that <b>DESCRIBES the soup</b>.',[2],'n','subject complement','Delicious describes the subject.','Which word tells what the soup is like?')],'A <b>subject complement</b> follows a linking verb (is, seems, smells) and describes or renames the <b>subject</b>.'),
 FN('l-f5','5. Object complement','Find the <b>object complement</b>.',['They','elected','Musa','captain'],[TK('Tap what Musa <b>BECAME</b>.',[3],'n','object complement','Captain describes Musa, the object.','Musa became what?')],'An <b>object complement</b> comes after the object and describes or renames the <b>object</b>.'),
 FN('l-f6','6. Adverbial of time','Find <b>WHEN</b>.',['We','will','meet','after school'],[TK('Tap the words that tell <b>WHEN</b>.',[3],'n','adverbial of time','After school tells the time.','Meet when?')],'An <b>adverbial of time</b> answers <b>when?</b> or <b>how often?</b>'),
 FN('l-f7','7. Adverbial of place','Find <b>WHERE</b>.',['The children','play','in the compound'],[TK('Tap the words that tell <b>WHERE</b>.',[2],'n','adverbial of place','In the compound tells the place.','Play where?')],'An <b>adverbial of place</b> answers <b>where?</b>'),
 FN('l-f8','8. Adverbial of manner','Find <b>HOW</b>.',['She','spoke','softly'],[TK('Tap the word that tells <b>HOW</b>.',[2],'n','adverbial of manner','Softly tells the manner.','Spoke how?')],'An <b>adverbial of manner</b> answers <b>how?</b>'),
 FN('l-f9','9. Adverbial of reason','Find <b>WHY</b>.',['He','stayed','at home','because he was sick'],[TK('Tap the words that tell <b>WHY</b>.',[3],'n','adverbial of reason','Because he was sick is the reason.','Stayed at home why?')],'An <b>adverbial of reason</b> answers <b>why?</b> (because, owing to, because of).'),
 FN('l-f10','10. Object of a preposition','Find the <b>object of the preposition</b>.',['She','sat','beside','the teacher'],[TK('Tap the noun phrase that comes <b>AFTER the preposition</b>.',[3],'n','object of the preposition','The teacher comes right after “beside”.','Which words follow “beside”?')],'The <b>object of a preposition</b> is the noun or pronoun right after it (beside <b>the teacher</b>).'),
 FN('l-f11','11. Apposition','Find the <b>apposition</b>.',['Mr Ade,','our principal,','spoke'],[TK('Tap the words that <b>RENAME</b> Mr Ade.',[1],'n','apposition','Our principal is another name for Mr Ade.','Which words mean the same person?')],'<b>Apposition</b>: a noun phrase beside another that renames it, with <b>no verb</b> between them.'),
 FN('l-f12','12. Adjunct','Find the <b>adjunct</b>.',['Segun','ate','his lunch','quickly'],[TK('Tap the <b>optional extra</b>. Remove it and the sentence still works.',[3],'n','adjunct','Segun ate his lunch is complete without “quickly”.','Which part can you delete?')],'An <b>adjunct</b> is an optional extra. If you can remove it and the sentence still makes sense, it is an adjunct.'),
 SC('Function check',(function(){var qs=[];['b2-1','b2-2','b2-3','b2-4','b2-5','b2-6','b2-7','b2-8','b2-9','b2-10','b2-11','b2-12'].forEach(function(id){OQ(id).items.forEach(function(q){qs.push(q)})});return QZ('b2-all','Function check','live',qs,'Twelve quick questions. Think about the job of the underlined words.')})())
]);

/* ---------- Level 5: Clause Goblin ---------- */
setScreens('b3',[
 SC('Phrase or clause?',SRT('l-c1','Phrase or clause?','Sort again. Remember: a clause has its own subject and verb.',['Phrase','Clause'],[
   S('very tired',0),S('who sells akara',1),S('under the table',0),S('although it was raining',1),S('the new student from Kaduna',0),S('that he passed',1)],
  'A clause has its <b>own subject and verb</b>. A phrase does not.','Is there a subject AND a verb?')),
 SC('Spot the relative clause',TAP('l-c2','Clause detective 1','The man who lives next door is a doctor.',['The man','who lives next door','is','a doctor'],[
   TK('Tap the <b>clause</b> (it has its own verb).',[1],'n','relative clause','“who lives next door” has its own verb: lives.','Which part has a verb of its own?'),
   TK('Tap the words the clause <b>DESCRIBES</b>.',[0],'o','is described','It tells which man.','Which man?')],
  'A <b>relative clause</b> describes a noun. It tells <b>which</b> one.')),
 SC('Spot the adverbial clause',TAP('l-c3','Clause detective 2','The students arrived after the bell rang.',['The students','arrived','after the bell rang'],[
   TK('Tap the <b>clause</b> that tells <b>WHEN</b>.',[2],'n','adverbial clause of time','After the bell rang tells when.','Arrived when?')],
  'An <b>adverbial clause</b> tells when, why or how. It works like an adverb.')),
 SC('Spot the noun clause',TAP('l-c4','Clause detective 3','That he cheated shocked everyone.',['That he cheated','shocked','everyone'],[
   TK('Tap the <b>noun clause</b>. What shocked everyone?',[0],'s','noun clause (subject)','“That he cheated” is what shocked everyone. It acts like a noun.','What shocked everyone?')],
  'A <b>noun clause</b> does the job of a noun: here it is the <b>subject</b>.')),
 SC('Name the structure',SRT('l-c5','Name the clause','What kind of clause is the part in <b>bold</b>?',['Noun clause','Adverbial clause','Relative clause'],[
   S('We stayed in <b>because it was raining</b>.',1),S('The woman <b>who sells akara</b> is my aunt.',2),S('<b>That she was late</b> annoyed us.',0),S('We left <b>after the match ended</b>.',1),S('The man <b>whom I met</b> was kind.',2),S('<b>What he said</b> surprised us.',0)],
  'A <b>noun clause</b> stands in for a noun. An <b>adverbial clause</b> tells when/why/how. A <b>relative clause</b> describes a noun.','Does it name something, tell when/why, or describe a noun?')),
 SC('Clauses at work',{t:'anim',id:'clause1'}),
 SC('Practice',OQ('b3-p'))
]);

/* ---------- Level 6: Exam Ogre ---------- */
setScreens('b4',[
 SC('Exam method',BUILD('l-x1','Put the method in order','Put the six steps of the exam method in the right order. Tap the steps.',[
   'Read the whole sentence','Find the underlined part','Ask what job it does','Look at the verb and its neighbours','State the function','Name the type (time? reason?)'],
   'Read the whole sentence Find the underlined part Ask what job it does Look at the verb and its neighbours State the function Name the type (time? reason?)',
  'Read the sentence → find the underlined part → decide its job → check it against the verb → state the function → name the type.',[],'Start with reading the full sentence.')),
 SC('Exam sentence 1',TAP('l-x2','Exam sentence 1','She promised that she would come early.',['She promised','that she would come early'],[
   TK('Tap the <b>noun clause</b>. (Promised what?)',[1],'n','noun clause (object)','It answers “promised what?”.','Promised what?')],'“that she would come early” is a <b>noun clause</b>, the object of promised.')),
 SC('Exam sentence 2',TAP('l-x3','Exam sentence 2','We waited until the rain stopped.',['We waited','until the rain stopped'],[
   TK('Tap the clause that tells <b>WHEN</b>.',[1],'n','adverbial clause of time','Until the rain stopped tells when.','Waited when?')],'It is an <b>adverbial clause of time</b>.')),
 SC('Exam sentence 3',TAP('l-x4','Exam sentence 3','Because the road was flooded, the bus did not move.',['Because the road was flooded,','the bus did not move'],[
   TK('Tap the <b>adverbial clause of reason</b>.',[0],'n','adverbial clause of reason','It tells why the bus did not move.','Why did the bus not move?')],'Because + clause = an <b>adverbial clause of reason</b>.')),
 SC('Exam sentence 4',TAP('l-x5','Exam sentence 4','Ngozi, a brilliant student, won the prize.',['Ngozi,','a brilliant student,','won the prize'],[
   TK('Tap the <b>apposition</b>.',[1],'n','apposition','It renames Ngozi.','Which words mean Ngozi?')],'“a brilliant student” is in <b>apposition</b> to Ngozi.')),
 SC('Practice',OQ('b4-p'))
]);

/* ---------- Bonus: Trap Room ---------- */
setScreens('e1',[
 SC('Trap 1',CYC('l-k1','Escape trap 1','Active: <b>She hit him.</b> Fix the passive.',['He was hit by',{o:['she','her','he'],a:1,why:'After <b>by</b> use <b>her</b>, not <s>she</s>.'},'.'],'After <b>by</b>, use <b>me, him, her, us, them</b>.')),
 SC('Trap 2',CYC('l-k2','Escape trap 2','Active: <b>Ada is cooking rice.</b> Fix the passive.',['Rice',{o:['was cooked','is being cooked','is cooked'],a:1,why:'Present continuous stays continuous: <b>is being cooked</b>.'},'by Ada.'],'The tense must never change.')),
 SC('Trap 3',CYC('l-k3','Escape trap 3','Fix it.',['The window was',{o:['broke','broken','breaking'],a:1,why:'After <b>be</b> use the participle: <b>broken</b>.'},'by the boy.'],'Learn the three forms of irregular verbs.')),
 SC('Trap 4',CYC('l-k4','Escape trap 4','Musa said, “I am hungry.” Fix the report.',['Musa said that',{o:['“he was hungry.”','he was hungry.','I was hungry.'],a:1,why:'Reported speech has <b>no quotation marks</b> and the pronoun changes.'}],'Delete the quotation marks first.')),
 SC('Trap 5',CYC('l-k5','Escape trap 5','He spoke in the past. Fix the tense (exam rule).',['He said that he',{o:['is','was','will be'],a:1,why:'The tense moves <b>back</b>: is → <b>was</b>.'},'tired.'],'Move the tense back one step.')),
 SC('Trap 6',CYC('l-k6','Escape trap 6','Fix the reporting verb.',['She',{o:['said me','told me','says me'],a:1,why:'<b>Told me</b>, never said me.'},'that she was ready.'],'Said to me / told me.')),
 SC('Trap 7',CYC('l-k7','Escape trap 7','Fix the question.',['He asked',{o:['where was I going','where I was going'],a:1,why:'Statement order.'},'.'],'Reported questions are statements.')),
 SC('Trap 8',CYC('l-k8','Escape trap 8','Fix the time word.',['He said that he would come',{o:['tomorrow','the next day','yesterday'],a:1,why:'Time words change: tomorrow → <b>the next day</b>.'},'.'],'Change tomorrow, yesterday, now and here.')),
 SC('Trap 9',CYC('l-k9','Escape trap 9','In <i>She saw the boy</i>, the <b>function</b> of “the boy” is:',['Answer:',{o:['noun','direct object','adjective'],a:1,why:'<b>Noun</b> is its word class. The question asks for the <b>function</b>.'}],'If the question says function, never answer with a word class.')),
 SC('Trap 10',CYC('l-k10','Escape trap 10','“after the bell rang” is:',['Answer: an',{o:['adverb','adverbial clause','noun phrase'],a:1,why:'It has its own subject and verb, so it is a <b>clause</b>.'}],'A group of words with a subject and a verb is a clause, not a word.'))
]);
