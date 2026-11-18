/* ================= START HERE ================= */
SEC('start','Start here','Words you need first','Ten small words that every grammar lesson uses.',[
 SC('How to use this note',
  P('This note teaches one small idea at a time. Do not rush. Read a screen, try the activity, then tap <b>Next</b>.'),
  DEF('A short, clear meaning of a new word. Read these first.'),
  EX('A sentence that shows the idea at work. Study how it is built.'),
  TIP('A trick for answering WAEC and JAMB questions.'),
  MIS('A mistake many students make, and how to avoid it.'),
  P('<b>Practice questions</b> have a purple border. Think first, then answer. You will get feedback straight away. If you are wrong, you get another chance.'),
  P('Your scores are saved on this device. The <b>Revision</b> page tells you which topics you must study again.')),
 SC('Ten words we will use',
  P('Do not worry if some of these feel new. Every one is explained again later with examples.'),
  TB(['Word','What it means','Example'],[
   ['<b>Sentence</b>','A group of words that makes complete sense. It has a subject and a verb.',`${hs('Ada')} ${hv('sings')}.`],
   ['<b>Subject</b>','The person or thing the sentence is about. It usually does the action.',`${hs('The boy')} ran home.`],
   ['<b>Verb</b>','A word that shows an action or a state.',`The boy ${hv('ran')} home.`],
   ['<b>Object</b>','The person or thing that receives the action of the verb.',`Ada kicked ${ho('the ball')}.`],
   ['<b>Noun</b>','The name of a person, place, thing or idea.','Lagos, teacher, book, honesty'],
   ['<b>Pronoun</b>','A small word used in place of a noun.','he, she, it, they, him, her, them'],
   ['<b>Tense</b>','The form of the verb that shows time: past, present or future.','cooks (now), cooked (past), will cook (future)'],
   ['<b>Phrase</b>','A group of words that works together but has no subject-verb pair of its own.','in the classroom'],
   ['<b>Clause</b>','A group of words that has its own subject and verb.','because the bell rang'],
   ['<b>Adverb</b>','A word that tells how, when or where something happens.','quickly, yesterday, here']
  ]),
  TIP('If you are ever stuck on a sentence, find the <b>verb</b> first. Everything else is easier once you know the verb.'))
]);

/* ================= A1: RECASTING ================= */
SEC('a1','Part A: Sentence recasting','What is sentence recasting?','Rewrite a sentence in a new form without changing its meaning.',[
 SC('Recasting in one sentence',
  DEF('<b>Sentence recasting</b> means rewriting a sentence in a different grammatical form <b>without changing its meaning</b>.'),
  P('Think of it as pouring water from one cup into another. The shape of the cup changes. The water stays the same.'),
  EX(`${hs('Ada')} ${hv('cooked')} ${ho('the food')}.<br>→ ${ho('The food')} ${hv('was cooked')} by ${hs('Ada')}.<br><em>The form changed (active to passive). The meaning did not change: Ada did the cooking.</em>`),
  TIP('Examiners test one thing above all: <b>is the meaning still the same?</b> A sentence can be grammatically perfect and still be marked wrong because the meaning changed.')),
 SC('Six recasts to study',
  P('Study each pair. The two sentences have exactly the same meaning.'),
  TB(['Original','Recast','What changed'],[
   ['Ada cooked the food.','The food was cooked by Ada.','Active → passive'],
   ['Musa said, "I am hungry."','Musa said that he was hungry.','Direct → reported speech'],
   ['The soup was too hot for the child to drink.','The soup was so hot that the child could not drink it.','Different sentence pattern'],
   ['Ngozi is taller than Bola.','Bola is not as tall as Ngozi.','Comparison reversed'],
   ['Because it rained, the match was cancelled.','The match was cancelled because it rained.','Order of the parts'],
   ['Despite his illness, he came.','Although he was ill, he came.','Phrase → clause']
  ]),
  P('This note focuses on the two recasts that WAEC and JAMB test most often: <b>active and passive voice</b> and <b>direct and reported speech</b>.')),
 SC('Same meaning or different meaning?',
  P('<b>Think first.</b> For each pair, decide if the two sentences mean the same thing.'),
  QZ('a1-pairs','Same or different?','live',[
   M('a1p1','recast',`<b>1.</b> Ada beat Bola.<br>Bola was beaten by Ada.`,SAME,0,'Ada is the winner in both. Only the form changed, from active to passive.',{1:'Look at who does the beating. In both sentences, Ada beats Bola.'}),
   M('a1p2','recast',`<b>2.</b> Ada beat Bola.<br>Ada was beaten by Bola.`,SAME,1,'In the first sentence Ada is the winner. In the second Bola is the winner. The doer and the receiver have been swapped.',{0:'Check who does the beating in each sentence. In the second one, Bola does it.'}),
   M('a1p3','recast',`<b>3.</b> The dog bit the thief.<br>The thief was bitten by the dog.`,SAME,0,'The dog does the biting in both sentences.',{1:'In both sentences the dog is the biter.'}),
   M('a1p4','recast',`<b>4.</b> Emeka gave Tunde the key.<br>Emeka was given the key by Tunde.`,SAME,1,'In the first sentence Emeka gives. In the second, Tunde gives. The giver and the receiver have been swapped.',{0:'Who gives the key in the second sentence? It is Tunde, not Emeka.'}),
   M('a1p5','recast',`<b>5.</b> Musa said, "I will come tomorrow."<br>Musa said that he would come the next day.`,SAME,0,'Will changes to would and tomorrow to the next day. The promise is exactly the same.',{1:'Both sentences report the same promise. Only the form changed.'}),
   M('a1p6','recast',`<b>6.</b> The teacher told the pupil to sit.<br>The pupil told the teacher to sit.`,SAME,1,'The person giving the order and the person receiving it have been swapped.',{0:'Who gives the order in each sentence? The roles are reversed.'}),
   M('a1p7','recast',`<b>7.</b> Funke is as tall as her brother.<br>Funke is not as tall as her brother.`,SAME,1,'The second sentence adds not. It says the opposite.',{0:'Look for the word not. It reverses the meaning.'})
  ],'Choose one answer for each pair.')),
 SC('The serious mistake: swapping the doer and the receiver',
  P('The <b>doer</b> is the person or thing that performs the action. The <b>receiver</b> is the person or thing the action happens to.'),
  EX(`${hs('The police')} ${hv('arrested')} ${ho('the thief')}.<br>✔ ${ho('The thief')} was arrested by ${hs('the police')}.<br>✘ <s>The police were arrested by the thief.</s>`,'Right and wrong'),
  P('In the wrong sentence the grammar is perfect, but the story is now the opposite. The police are now the people in trouble.'),
  MIS('A student moves the words around but forgets who did what. Before you write your answer, ask: <b>Who did the action? Who received it?</b> The same person must still do the action in your recast.'),
  QZ('a1-swap','Check yourself','live',[
   M('a1s1','recast',`Which sentence has the <b>same meaning</b> as: <em>The principal praised the prefects.</em>`,['The principal was praised by the prefects.','The prefects were praised by the principal.','The prefects praised the principal.','The principal has been praised.'],1,'The principal is the doer and the prefects are the receivers. Only option B keeps that.',{0:'The doer and receiver are swapped here. The prefects now do the praising.',2:'The doer and receiver are swapped here too.',3:'The prefects have disappeared and the tense changed. The meaning is not preserved.'}),
   M('a1s2','recast',`Which sentence has the <b>same meaning</b> as: <em>Chidi gave Ada a gift.</em>`,['Chidi was given a gift by Ada.','Ada gave Chidi a gift.','Ada was given a gift by Chidi.','A gift was given to Chidi by Ada.'],2,'Chidi is the giver and Ada is the receiver. Only option C keeps that.',{0:'Ada is now the giver. The roles are swapped.',1:'Ada is now the giver. The roles are swapped.',3:'Here Chidi receives the gift. The roles are swapped.'})
  ],'Two quick questions.'))
]);

/* ================= A2: ACTIVE AND PASSIVE ================= */
var PASS_WORKED=[
 {q:`${hs('Ngozi')} ${hv('cooks')} ${ho('rice')}.`,tag:'1. Simple present',a:'Rice is cooked by Ngozi.',st:[`Subject: <b>Ngozi</b>. Verb: <b>cooks</b>. Object: <b>rice</b>.`,'Move the object to the front: <b>Rice</b>…','Simple present passive uses <b>is/am/are + past participle</b>. The object is singular, so use <b>is</b>: <b>is cooked</b>.','Add the doer with by: <b>by Ngozi</b>.','Check the tense. The original is present. The passive is present. Same meaning.']},
 {q:`${hs('The teacher')} ${hv('punished')} ${ho('the student')}.`,tag:'2. Simple past',a:'The student was punished by the teacher.',st:['Subject: the teacher. Verb: punished. Object: the student.','Move the object to the front: <b>The student</b>…','Simple past passive uses <b>was/were + past participle</b>: <b>was punished</b>.','Add the doer: <b>by the teacher</b>.','Past stays past. The teacher is still the one who punished.']},
 {q:`${hs('Emeka')} ${hv('is washing')} ${ho('the car')}.`,tag:'3. Present continuous',a:'The car is being washed by Emeka.',st:['Subject: Emeka. Verb: is washing. Object: the car.','Move the object: <b>The car</b>…','Present continuous passive uses <b>am/is/are + being + past participle</b>: <b>is being washed</b>.','Add the doer: <b>by Emeka</b>.','The action is still happening now. The tense is preserved.']},
 {q:`${hs('The girls')} ${hv('were singing')} ${ho('a song')}.`,tag:'4. Past continuous',a:'A song was being sung by the girls.',st:['Subject: the girls. Verb: were singing. Object: a song.','Move the object: <b>A song</b>…','Past continuous passive uses <b>was/were + being + past participle</b>. The object is singular, so <b>was being sung</b> (sing – sang – sung).','Add the doer: <b>by the girls</b>.','Past continuous stays past continuous.']},
 {q:`${hs('Ibrahim')} ${hv('has written')} ${ho('the letter')}.`,tag:'5. Present perfect',a:'The letter has been written by Ibrahim.',st:['Subject: Ibrahim. Verb: has written. Object: the letter.','Move the object: <b>The letter</b>…','Present perfect passive uses <b>has/have + been + past participle</b>: <b>has been written</b>.','Add the doer: <b>by Ibrahim</b>.','Present perfect stays present perfect.']},
 {q:`${hs('The thief')} ${hv('had broken')} ${ho('the window')}.`,tag:'6. Past perfect',a:'The window had been broken by the thief.',st:['Subject: the thief. Verb: had broken. Object: the window.','Move the object: <b>The window</b>…','Past perfect passive uses <b>had + been + past participle</b>: <b>had been broken</b>.','Add the doer: <b>by the thief</b>.','Past perfect stays past perfect.']},
 {q:`${hs('The principal')} ${hv('will announce')} ${ho('the results')}.`,tag:'7. Future (will)',a:'The results will be announced by the principal.',st:['Subject: the principal. Verb: will announce. Object: the results.','Move the object: <b>The results</b>…','Future passive uses <b>will + be + past participle</b>: <b>will be announced</b>.','Add the doer: <b>by the principal</b>.','Future stays future.']},
 {q:`${hs('Tunde')} ${hv('can solve')} ${ho('this problem')}.`,tag:'8. Modal verb (can)',a:'This problem can be solved by Tunde.',st:['Subject: Tunde. Verb: can solve. Object: this problem.','Move the object: <b>This problem</b>…','A modal verb (can, must, should, may…) stays the same. Then add <b>be + past participle</b>: <b>can be solved</b>.','Add the doer: <b>by Tunde</b>.','Do not change can to could. Keep the same modal.']},
 {q:`${hs('Students')} ${hv('must obey')} ${ho('the school rules')}.`,tag:'9. Modal verb (must)',a:'The school rules must be obeyed by students.',st:['Subject: students. Verb: must obey. Object: the school rules.','Move the object: <b>The school rules</b>…','Modal <b>must</b> + <b>be + obeyed</b>: <b>must be obeyed</b>.','Add the doer: <b>by students</b>.','Keep the modal exactly the same. Its strength of meaning must not change.']},
 {q:`${hs('Mrs Bello')} ${hv('gave')} ${hb('Chidi')} ${ho('a book')}.`,tag:'10. Two objects',a:'Chidi was given a book by Mrs Bello.  OR  A book was given to Chidi by Mrs Bello.',st:['This verb has <b>two objects</b>: <b>Chidi</b> (who receives) and <b>a book</b> (what is given).','Either object can become the new subject.','Option 1: start with Chidi: <b>Chidi was given a book by Mrs Bello</b>.','Option 2: start with the book: <b>A book was given to Chidi by Mrs Bello</b>. Notice that <b>to</b> is added.','Both are correct. Option 1 is more common in exams.']},
 {q:`${hs('Someone')} ${hv('stole')} ${ho('my bicycle')}.`,tag:'11. Doer left out',a:'My bicycle was stolen.',st:['Subject: someone. Verb: stole. Object: my bicycle.','Move the object: <b>My bicycle</b>…','Past passive: <b>was stolen</b>.','Do we add <b>by someone</b>? No. We do not know who did it, and <b>someone</b> adds no information.','The passive is useful here because it lets us leave out an unknown doer.']},
 {q:`${hs('The police')} ${hv('arrested')} ${ho('the robbers')}.`,tag:'12. Plural object',a:'The robbers were arrested by the police.',st:['Subject: the police. Verb: arrested. Object: the robbers.','Move the object: <b>The robbers</b>…','The new subject is plural, so use <b>were</b>: <b>were arrested</b>.','Add the doer: <b>by the police</b>.','Match the verb to the <b>new</b> subject.']},
 {q:`${hs('People')} ${hv('speak')} ${ho('English')} in Ghana.`,tag:'13. General statement',a:'English is spoken in Ghana.',st:['Subject: people (a very general doer). Verb: speak. Object: English.','Move the object: <b>English</b>…','Simple present passive: <b>is spoken</b>.','Leave out <b>by people</b>. It is obvious and adds nothing.','Notice how natural this sounds. This is how the passive is used in real life.']},
 {q:`${hs('Who')} ${hv('broke')} ${ho('the window')}?`,tag:'14. Question',a:'By whom was the window broken?',st:['Subject: who. Verb: broke. Object: the window.','The new subject is <b>the window</b>.','Question form of the passive: <b>was the window broken</b>.','Put the doer in front with <b>by whom</b>: <b>By whom was the window broken?</b>','Remember <b>whom</b>, not <b>who</b>, after a preposition.']}
];
SEC('a2','Part A: Sentence recasting','Active and passive voice','Learn it from the very beginning, then practise.',[
 SC('Subject, verb and object',
  P('Before we change a sentence, we must be able to <b>see</b> its parts. Three parts matter most.'),
  DEF('<b>Subject:</b> the person or thing that does the action (or that the sentence is about).','Subject'),
  DEF('<b>Verb:</b> the word that shows the action.','Verb'),
  DEF('<b>Object:</b> the person or thing that <b>receives</b> the action.','Object'),
  EX(`${hs('Ada')} ${hv('kicked')} ${ho('the ball')}.<br><b>Who kicked?</b> Ada → subject.<br><b>What was kicked?</b> The ball → object.`,'Finding the parts'),
  TIP('To find the subject, ask <b>Who or what + verb?</b> To find the object, ask <b>Verb + who or what?</b>'),
  QZ('a2-parts','Find the parts','live',[
   M('a2pt1','passive',`In the sentence <em>The farmer sells yams</em>, what is the <b>object</b>?`,['The farmer','sells','yams','The farmer sells'],2,'Ask: sells what? Yams. Yams receives the action of selling.',{0:'The farmer is the subject. He does the selling.',1:'Sells is the verb, the word that shows the action.',3:'That is the subject and verb together. The object is only the thing that is sold.'}),
   M('a2pt2','passive',`In the sentence <em>Tola eats rice</em>, which word is the <b>subject</b>?`,['Tola','eats','rice','None of them'],0,'Ask: who eats? Tola. Tola does the action.',{1:'Eats is the verb.',2:'Rice receives the action. It is the object.',3:'Every complete sentence has a subject.'})
  ])),
 SC('Doing and receiving',
  P('Every action has someone who <b>does</b> it and, often, someone or something that <b>receives</b> it.'),
  EX(`${hs('Musa')} ${hv('opened')} ${ho('the door')}.<br>Musa <b>performs</b> the action. The door <b>receives</b> it.`,'Who does? Who receives?'),
  DEF('<b>Active voice:</b> the subject <b>does</b> the action. The doer comes first.','Active voice'),
  DEF('<b>Passive voice:</b> the subject <b>receives</b> the action. The receiver comes first.','Passive voice'),
  TB(['Active','Passive'],[
   [`${hs('The teacher')} ${hv('punished')} ${ho('the student')}.<br><small>The teacher (doer) is the subject.</small>`,`${ho('The student')} ${hv('was punished')} by ${hs('the teacher')}.<br><small>The student (receiver) is the subject.</small>`],
   [`${hs('Bola')} ${hv('wrote')} ${ho('the story')}.`,`${ho('The story')} ${hv('was written')} by ${hs('Bola')}.`]
  ]),
  P('The meaning is the same. What the sentence is <b>about</b> has changed. In the active sentence we talk about the doer. In the passive we talk about the receiver.')),
 SC('Seven steps to change active to passive',
  P('Follow these steps in order every time. It never fails.'),
  STP([
   '<b>Identify the subject.</b> Who or what does the action?',
   '<b>Identify the verb.</b> Notice its tense.',
   '<b>Identify the object.</b> Who or what receives the action?',
   '<b>Move the object to the beginning.</b> It becomes the new subject.',
   '<b>Change the verb</b> to the correct form of <b>be + past participle</b>. Keep the same tense.',
   '<b>Add the original subject with “by”</b> where it is needed. Remember to use object pronouns: by him, by her, by them.',
   '<b>Check.</b> Is the tense the same? Is the meaning the same? Does the verb agree with the new subject?'
  ]),
  EX(`${hs('The teacher')} ${hv('punished')} ${ho('the student')}.<br>1. Subject: the teacher<br>2. Verb: punished (simple past)<br>3. Object: the student<br>4. The student…<br>5. …was punished…<br>6. …by the teacher.<br>7. <b>The student was punished by the teacher.</b> ✔`,'All seven steps')),
 SC('Past participles',
  DEF('<b>Past participle:</b> the form of the verb used after <b>be</b> or <b>have</b>. It is the third form of the verb.'),
  P('Regular verbs add <b>-ed</b>: cook – cooked – cooked. Irregular verbs must be learned.'),
  TB(['Present','Past','Past participle'],[
   ['write','wrote','<b>written</b>'],['eat','ate','<b>eaten</b>'],['break','broke','<b>broken</b>'],['build','built','<b>built</b>'],
   ['teach','taught','<b>taught</b>'],['take','took','<b>taken</b>'],['give','gave','<b>given</b>'],['see','saw','<b>seen</b>'],
   ['do','did','<b>done</b>'],['speak','spoke','<b>spoken</b>'],['steal','stole','<b>stolen</b>'],['sing','sang','<b>sung</b>'],
   ['choose','chose','<b>chosen</b>'],['drive','drove','<b>driven</b>'],['bring','brought','<b>brought</b>'],['buy','bought','<b>bought</b>']
  ]),
  MIS('Students write <s>was wrote</s> or <s>was broke</s>. After <b>was</b>, <b>is</b>, <b>has been</b> and similar forms, always use the <b>past participle</b>: was <b>written</b>, was <b>broken</b>.'),
  QZ('a2-pp','Type the past participle','live',[
   W('a2pp1','participle','What is the past participle of <b>write</b>?',['written'],'Write – wrote – written. The past participle is the third form.',{hint:'It ends in -en.'}),
   W('a2pp2','participle','What is the past participle of <b>take</b>?',['taken'],'Take – took – taken.',{hint:'Third form, ends in -en.'}),
   W('a2pp3','participle','What is the past participle of <b>build</b>?',['built'],'Build – built – built. The past and the past participle are the same.',{hint:'Same as the past form.'}),
   W('a2pp4','participle','What is the past participle of <b>teach</b>?',['taught'],'Teach – taught – taught.',{hint:'It is the same as the past form.'}),
   W('a2pp5','participle','What is the past participle of <b>give</b>?',['given'],'Give – gave – given.',{hint:'Third form, ends in -en.'}),
   W('a2pp6','participle','What is the past participle of <b>eat</b>?',['eaten'],'Eat – ate – eaten.',{hint:'Third form, ends in -en.'})
  ],'Type one word.')),
 SC('How each tense changes',
  P('The tense of the active verb decides the form of <b>be</b>. The main verb always becomes the past participle.'),
  TB(['Tense','Active','Passive pattern','Passive example'],[
   ['Simple present','Ngozi cooks rice.','am/is/are + past participle','Rice <b>is cooked</b> by Ngozi.'],
   ['Simple past','Ngozi cooked rice.','was/were + past participle','Rice <b>was cooked</b> by Ngozi.'],
   ['Present continuous','Ngozi is cooking rice.','am/is/are <b>being</b> + past participle','Rice <b>is being cooked</b> by Ngozi.'],
   ['Past continuous','Ngozi was cooking rice.','was/were <b>being</b> + past participle','Rice <b>was being cooked</b> by Ngozi.'],
   ['Present perfect','Ngozi has cooked rice.','has/have <b>been</b> + past participle','Rice <b>has been cooked</b> by Ngozi.'],
   ['Past perfect','Ngozi had cooked rice.','had <b>been</b> + past participle','Rice <b>had been cooked</b> by Ngozi.'],
   ['Future (will)','Ngozi will cook rice.','will <b>be</b> + past participle','Rice <b>will be cooked</b> by Ngozi.'],
   ['Future perfect','Ngozi will have cooked rice.','will have <b>been</b> + past participle','Rice <b>will have been cooked</b> by Ngozi.'],
   ['Modal verbs','Ngozi can cook rice.','modal + <b>be</b> + past participle','Rice <b>can be cooked</b> by Ngozi.']
  ]),
  TIP('The tense must <b>never</b> change. If the active verb is in the present continuous, the passive must also be in the present continuous. The word <b>being</b> is the sign of a continuous passive.')),
 SC('Twelve worked examples (and more)',
  P('For each example: <b>try it yourself first</b>, then tap to see the steps.'),
  WK('Worked examples',PASS_WORKED)),
 SC('Three rules you must remember',
  H('1. When can the doer be left out?'),
  P('Leave out <b>by + doer</b> when:'),
  STP(['the doer is unknown (<em>My bicycle was stolen.</em>)','the doer is obvious or general (<em>English is spoken in Ghana.</em>)','the doer is unimportant, or we want to focus on what happened (<em>The road was repaired.</em>)']),
  H('2. Not every active sentence can become passive'),
  DEF('A <b>passive</b> sentence needs an <b>object</b> in the active sentence. The object becomes the new subject.'),
  TB(['Active sentence','Has an object?','Passive possible?'],[
   [`${hs('Ada')} ${hv('arrived')} early.`,'No (arrive does not take an object)','<b>No.</b> <s>Early was arrived by Ada</s> is nonsense.'],
   [`${hs('The baby')} ${hv('slept')}.`,'No','<b>No.</b>'],
   [`${hs('The rain')} ${hv('fell')} heavily.`,'No','<b>No.</b>'],
   [`${hs('Ada')} ${hv('opened')} ${ho('the door')}.`,'Yes (the door)','<b>Yes:</b> The door was opened by Ada.']
  ]),
  MIS('Do not try to force a passive. A verb with <b>no object</b> (arrive, sleep, fall, go, come, die) cannot be made passive. If the question asks you to, write what is possible and explain.'),
  H('3. Use object pronouns after “by”'),
  EX(`${hs('She')} ${hv('hit')} ${ho('him')}. → <b>He</b> was hit <b>by her</b>.<br>Not <s>by she</s>. After <b>by</b>, use <b>me, you, him, her, it, us, them</b>.`)),
 SC('Practice 1: beginner questions',
  QZ('a2-beg','Beginner: multiple choice','live',[
   M('a2b1','passive','<b>1.</b> Which sentence is in the <b>passive voice</b>?',['Ada sweeps the floor.','The floor is swept by Ada.','Ada is sweeping the floor.','Ada swept the floor.'],1,'In B the floor (the receiver) is the subject, and the verb is <b>is swept</b> (be + past participle).',{0:'Here Ada does the action and is the subject. That is active.',2:'Ada does the action. That is active.',3:'Ada does the action. That is active.'}),
   M('a2b2','participle','<b>2.</b> What is the past participle of <b>write</b>?',['wrote','written','writed','writing'],1,'Write – wrote – written.',{0:'Wrote is the simple past. The past participle is the third form.',2:'There is no such word as writed. Write is irregular.',3:'Writing is the -ing form, not the past participle.'}),
   M('a2b3','passive','<b>3.</b> In <em>The thief was caught by the police</em>, who <b>performed</b> the action of catching?',['The thief','The police','Both','Neither'],1,'The word after <b>by</b> shows the doer: the police caught the thief.',{0:'The thief received the action. He was caught.',2:'Only one of them caught. The other was caught.',3:'Someone must perform an action. Look at the word after by.'}),
   M('a2b4','passive','<b>4.</b> Choose the correct passive of <em>Tunde kicked the ball.</em>',['The ball is kicked by Tunde.','The ball was kicked by Tunde.','Tunde was kicked by the ball.','The ball kicked Tunde.'],1,'The active verb is simple past, so the passive uses was + kicked.',{0:'The tense has changed. Kicked is past, so is kicked (present) is wrong.',2:'The doer and receiver are swapped. Tunde did the kicking.',3:'This is active, and the meaning is reversed.'}),
   M('a2b5','passive','<b>5.</b> The passive voice is formed with…',['the verb be + past participle','the verb have + -ing','will + the base verb','the verb do + the base verb'],0,'Every passive is <b>be + past participle</b>: is cooked, was written, has been taken.',{1:'That pattern is not passive.',2:'That is the active future.',3:'That is used for questions and negatives in the active.'})
  ],'Choose the best answer. If you are wrong, read the feedback and try again.')),
 SC('Practice 2: intermediate transformations',
  P('Now type the full passive sentence. Do not worry about capital letters or full stops.'),
  QZ('a2-int','Intermediate: change to passive','live',[
   W('a2i1','passive','<b>1.</b> The cook prepared the meal.',['The meal was prepared by the cook.'],'Simple past: was + prepared. Object (the meal) becomes the subject.',{hint:'Start with The meal… and use was + the past participle.',traps:[{re:/^the meal prepared/,m:'You forgot the verb be. A passive needs was + prepared.'},{re:/is prepared/,m:'The tense has changed. The active sentence is in the past, so use was.'}]}),
   W('a2i2','passive','<b>2.</b> Mr Danjuma is repairing the generator.',['The generator is being repaired by Mr Danjuma.'],'Present continuous passive: is being + repaired.',{hint:'Present continuous needs is being + past participle.',traps:[{re:/is repaired/,m:'You left out being. Present continuous passive is is being + past participle.'},{re:/was being/,m:'The tense has changed. The active sentence is in the present continuous.'}]}),
   W('a2i3','passive','<b>3.</b> The students have finished the project.',['The project has been finished by the students.'],'Present perfect passive: has been + finished. The subject is singular (the project), so has.',{hint:'has/have + been + past participle. Is the new subject singular or plural?',traps:[{re:/have been/,m:'Check the new subject. The project is singular, so use has been.'}]}),
   W('a2i4','passive','<b>4.</b> The committee will announce the winners tomorrow.',['The winners will be announced by the committee tomorrow.','Tomorrow the winners will be announced by the committee.'],'Future passive: will be + announced.',{hint:'will + be + past participle.',traps:[{re:/will announced/,m:'After will you need be: will be announced.'}]}),
   W('a2i5','passive','<b>5.</b> Someone has stolen my phone.',['My phone has been stolen.','My phone has been stolen by someone.'],'Present perfect passive: has been stolen. The doer is unknown, so by someone can be left out.',{hint:'has been + stolen. You do not need to include the unknown doer.'})
  ],'Type the passive form of each sentence.')),
 SC('Practice 3: examination standard',
  P('These are the kind of transformations that are asked in WAEC and JAMB. Take your time.'),
  QZ('a2-exam','Exam standard: passive voice','live',[
   W('a2e1','passive','<b>1.</b> The headmaster has given the prefects new badges.',['The prefects have been given new badges by the headmaster.','New badges have been given to the prefects by the headmaster.'],'Two objects, so both answers are correct. The tense stays present perfect. Both new subjects (the prefects, new badges) are plural, so use have been given.',{hint:'This verb has two objects. Start with the prefects or with the badges.',traps:[{re:/has been given/,m:'Check the subject. Prefects or badges are plural, so use have been given.'}]}),
   W('a2e2','passive','<b>2.</b> Nobody could solve the puzzle.',['The puzzle could not be solved by anybody.','The puzzle could not be solved by anyone.','The puzzle could not be solved.'],'Modal could + not + be + solved. The negative meaning is kept by could not. Nobody becomes not … anybody.',{hint:'Keep the negative. Use could not be + past participle.',traps:[{re:/nobody/,m:'Do not keep nobody after by with could not. Two negatives would cancel each other out. Use anybody.'}]}),
   W('a2e3','passive','<b>3.</b> They were building a bridge across the river when the rain started.',['A bridge was being built across the river when the rain started.','A bridge was being built by them across the river when the rain started.'],'Past continuous passive: was being built. They is vague, so it can be left out.',{hint:'Past continuous passive is was/were being + past participle.',traps:[{re:/was building/,m:'Building is active. Use was being built.'},{re:/were being/,m:'The new subject (a bridge) is singular, so use was being.'}]}),
   W('a2e4','passive','<b>4.</b> You must not touch the wires.',['The wires must not be touched.','The wires must not be touched by you.'],'Modal must + not + be + touched. By you is not needed because it is obvious.',{hint:'Modal + not + be + past participle.'}),
   W('a2e5','passive','<b>5.</b> Who broke the window?',['By whom was the window broken?','Who was the window broken by?'],'The new subject is the window. The doer who becomes by whom. This is a classic exam question.',{hint:'The window becomes the subject. Who changes to by whom.',traps:[{re:/by who /,m:'After a preposition use whom, not who: by whom.'}]})
  ],'Type the passive form. Some questions have more than one correct answer.'))
]);
