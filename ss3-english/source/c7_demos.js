/* ================= "WATCH ME" DEMOS: one idea, plain words, then you try ================= */
function DEMO(id,title,toks,steps){
  var cur=toks.slice(),marks={},out=[];
  steps.forEach(function(s){
    if(s.toks)cur=s.toks;
    if(s.reset)marks={};
    if(s.m)Object.keys(s.m).forEach(function(k){marks[k]=s.m[k]});
    out.push({cap:s.cap,tok:cur.map(function(w){var m=marks[w];return {k:'w_'+w,t:w,c:m?m[0]:'x',lab:m?m[1]:''}})});
  });
  ANIMS[id]={title:title,xp:3,steps:out};
}
DEMO('d-sdo','Watch: subject, verb, object',['Ada','kicked','the ball'],[
 {cap:'A sentence tells us <b>who did what</b>. Read it: <b>Ada kicked the ball.</b>'},
 {cap:'The <b>verb</b> is the action word. What did Ada do? She <b>kicked</b>.',m:{'kicked':['v','verb']}},
 {cap:'The <b>subject</b> is the doer. Who kicked? <b>Ada</b>.',m:{'Ada':['s','subject']}},
 {cap:'The <b>object</b> is what got the action. What was kicked? <b>The ball</b>.',m:{'the ball':['o','object']}}
]);
DEMO('d-wc','Watch: four kinds of word',['Ngozi','ran','quickly','to','her','mother'],[
 {cap:'Words come in kinds. Look at this sentence.'},
 {cap:'A <b>noun</b> is a name. <b>Ngozi</b> and <b>mother</b> are nouns.',m:{'Ngozi':['n','noun'],'mother':['n','noun']}},
 {cap:'A <b>pronoun</b> takes the place of a noun. <b>Her</b> stands for Ngozi.',m:{'her':['s','pronoun']}},
 {cap:'A <b>verb</b> shows an action. <b>Ran</b> is the action.',m:{'ran':['v','verb']}},
 {cap:'An <b>adverb</b> tells how, when or where. <b>Quickly</b> tells how she ran.',m:{'quickly':['o','adverb']}}
]);
DEMO('d-tense','Watch: tense',['Ngozi','cooked','rice'],[
 {cap:'<b>Tense</b> tells us <b>when</b> something happens.'},
 {cap:'<b>cooked</b> is the <b>past</b>. It already happened.',m:{'cooked':['v','past']}},
 {cap:'<b>cooks</b> is the <b>present</b>. It happens now, or again and again.',toks:['Ngozi','cooks','rice'],m:{'cooks':['v','present']}},
 {cap:'<b>will cook</b> is the <b>future</b>. It has not happened yet.',toks:['Ngozi','will cook','rice'],m:{'will cook':['v','future']}}
]);
DEMO('d-pc','Watch: phrase and clause',['in the classroom'],[
 {cap:'<b>in the classroom</b>. Is there a subject and a verb? No. So it is a <b>phrase</b>.',m:{'in the classroom':['n','phrase']}},
 {cap:'<b>because the bell rang</b>. <b>The bell</b> is the subject. <b>Rang</b> is the verb. A group of words with its own subject and verb is a <b>clause</b>.',toks:['because','the bell','rang'],reset:1,m:{'the bell':['s','subject'],'rang':['v','verb'],'because':['n','']}}
]);
DEMO('d-swap','Watch: swap the doer and receiver',['Ada','beat','Bola'],[
 {cap:'<b>Ada beat Bola.</b> Ada is the winner. Ada is the doer.',m:{'Ada':['s','doer'],'Bola':['o','receiver']}},
 {cap:'Now swap them: <b>Bola beat Ada.</b> Now Bola wins! The story changed. That is a <b>wrong</b> recast.',toks:['Bola','beat','Ada']},
 {cap:'To keep the story you must say it the <b>passive</b> way: <b>Bola was beaten by Ada.</b> Ada still wins.',toks:['Bola','was beaten','by','Ada'],m:{'was beaten':['v','']}}
]);
DEMO('d-dr','Watch: doer and receiver',['The teacher','punished','the student'],[
 {cap:'<b>Active:</b> the doer comes first. The teacher did the punishing.',m:{'The teacher':['s','doer'],'the student':['o','receiver']}},
 {cap:'<b>Passive:</b> the receiver comes first. Same story, different order.',toks:['The student','was punished','by','the teacher'],m:{'was punished':['v',''],'The student':['o','receiver'],'the teacher':['s','doer']}}
]);
DEMO('d-pron','Watch: who is I, you and my?',['Chidi','said','to','me,','“You','can','borrow','my','pen.”'],[
 {cap:'Chidi is the <b>speaker</b>. I am the <b>listener</b>.',m:{'Chidi':['s','speaker'],'me,':['o','listener']}},
 {cap:'<b>You</b> means the listener. In the report it becomes <b>I</b>.',m:{'“You':['n','you = listener']}},
 {cap:'<b>My</b> belongs to the speaker (Chidi). In the report it becomes <b>his</b>.',m:{'my':['s','my = speaker']}}
]);
DEMO('d-nc','Watch: a noun clause',['That he cheated','shocked','everyone'],[
 {cap:'What shocked everyone? <b>That he cheated</b>.'},
 {cap:'It has its own subject (he) and verb (cheated), and it does the job of a <b>noun</b>. It is a <b>noun clause</b>. Here it is the subject.',m:{'That he cheated':['s','noun clause'],'shocked':['v','verb']}}
]);
/* the twelve functions, two steps each */
function FDEMO(id,title,toks,ask,key,role,lab,def){DEMO(id,'Watch: '+title,toks,[{cap:ask},{cap:def,m:(function(o){o[key]=[role,lab];return o})({})}])}
FDEMO('d-f1','subject',['The old man in the shop','sold','me','bread'],'Who sold me bread? Ask <b>who or what + verb?</b>','The old man in the shop','s','subject','<b>The old man in the shop</b> is the <b>subject</b>: the doer. Take the whole group of words, not just one.');
FDEMO('d-f2','direct object',['Tola','kicked','the ball'],'Kicked what? Ask <b>verb + what or whom?</b>','the ball','o','direct object','<b>The ball</b> is the <b>direct object</b>: it gets the action.');
DEMO('d-f3','Watch: indirect object',['She','gave','the boy','a book'],[
 {cap:'This verb has two receivers. What was given? <b>A book</b>.',m:{'a book':['o','direct object']}},
 {cap:'Who got the book? <b>The boy</b>. He is the <b>indirect object</b>: the person who receives the direct object. He comes before it.',m:{'the boy':['n','indirect object']}}]);
FDEMO('d-f4','subject complement',['The soup','smells','delicious'],'Smells is a linking verb. What is the soup like?','delicious','n','subject complement','<b>Delicious</b> describes the soup (the subject). It is a <b>subject complement</b>.');
FDEMO('d-f5','object complement',['They','elected','Musa','captain'],'They elected Musa. Musa became what?','captain','n','object complement','<b>Captain</b> describes Musa (the object). It is an <b>object complement</b>.');
FDEMO('d-f6','adverbial of time',['We','will','meet','after school'],'Ask <b>when?</b> When will we meet?','after school','n','adverbial of time','<b>After school</b> tells when: an <b>adverbial of time</b>.');
FDEMO('d-f7','adverbial of place',['The children','play','in the compound'],'Ask <b>where?</b> Where do they play?','in the compound','n','adverbial of place','<b>In the compound</b> tells where: an <b>adverbial of place</b>.');
FDEMO('d-f8','adverbial of manner',['She','spoke','softly'],'Ask <b>how?</b> How did she speak?','softly','n','adverbial of manner','<b>Softly</b> tells how: an <b>adverbial of manner</b>.');
FDEMO('d-f9','adverbial of reason',['He','stayed','at home','because he was sick'],'Ask <b>why?</b> Why did he stay at home?','because he was sick','n','adverbial of reason','<b>Because he was sick</b> tells why: an <b>adverbial of reason</b>.');
FDEMO('d-f10','object of a preposition',['She','sat','beside','the teacher'],'<b>Beside</b> is a preposition. What comes right after it?','the teacher','n','object of the preposition','<b>The teacher</b> comes right after <b>beside</b>. It is the <b>object of the preposition</b>.');
FDEMO('d-f11','apposition',['Mr Ade,','our principal,','spoke'],'Two names for the same person sit side by side with no verb between them.','our principal,','n','apposition','<b>Our principal</b> renames Mr Ade. It is in <b>apposition</b> to him.');
FDEMO('d-f12','adjunct',['Segun','ate','his lunch','quickly'],'Remove <b>quickly</b>. Does the sentence still work? Yes: Segun ate his lunch.','quickly','n','adjunct','<b>Quickly</b> is an optional extra. An optional extra is an <b>adjunct</b>.');
