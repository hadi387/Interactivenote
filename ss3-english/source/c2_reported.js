/* ================= A3: DIRECT AND REPORTED SPEECH ================= */
var REP_WORKED=[
 {q:'Musa said, "I am hungry."',tag:'1. Statement',a:'Musa said that he was hungry.',st:['Reporting verb: <b>said</b>. Reported words: I am hungry.','Remove the quotation marks and the comma. Add <b>that</b>.','Pronoun: <b>I</b> is Musa himself, so I → <b>he</b>.','Tense: <b>am</b> (present) → <b>was</b> (past).','Check: no quotation marks, pronoun and tense both changed.']},
 {q:'Ngozi said, "We are going to the market."',tag:'2. Statement',a:'Ngozi said that they were going to the market.',st:['Reporting verb: said. Reported words: We are going to the market.','We includes Ngozi and others, so we → <b>they</b>.','Present continuous → past continuous: are going → <b>were going</b>.','Add that. Remove quotation marks.','Place stays the same because it is not a here/there word.']},
 {q:'Mrs Eze said to the class, "I have marked your scripts."',tag:'3. Statement with “told”',a:'Mrs Eze told the class that she had marked their scripts.',st:['Because the class is named, use <b>told</b> instead of <b>said to</b>.','I → <b>she</b> (Mrs Eze). Your → <b>their</b> (the class).','Present perfect → past perfect: have marked → <b>had marked</b>.','Add that. Remove quotation marks.','The speaker and the listener both appear in the pronouns. Check both.']},
 {q:'Bayo said, "I will travel tomorrow."',tag:'4. Time change',a:'Bayo said that he would travel the next day.',st:['I → <b>he</b>.','will → <b>would</b>.','tomorrow → <b>the next day</b> (or the following day).','Add that. Remove quotation marks.','Never keep tomorrow in an exam answer unless the question says it is still tomorrow.']},
 {q:'Chidi said to me, "You can borrow my pen."',tag:'5. Pronouns: you and my',a:'Chidi told me that I could borrow his pen.',st:['said to me → <b>told me</b>.','<b>You</b> is the listener, who is me, so you → <b>I</b>.','<b>My</b> belongs to Chidi, so my → <b>his</b>.','can → <b>could</b>.','Check that every pronoun points to the right person.']},
 {q:'Uche said, "I saw her yesterday."',tag:'6. Simple past',a:'Uche said that he had seen her the day before.',st:['I → he. Her stays <b>her</b> (a third person does not change).','Simple past → <b>past perfect</b>: saw → <b>had seen</b>.','yesterday → <b>the day before</b> (or the previous day).','Add that. Remove quotation marks.','Use the past participle (seen) after had.']},
 {q:'The teacher said, "Water boils at 100 degrees Celsius."',tag:'7. A universal truth',a:'The teacher said that water boils at 100 degrees Celsius.',st:['This statement is always true.','When the words reported are a <b>fact that is always true</b>, the tense does not have to change.','Keep <b>boils</b> in the present.','Add that. Remove quotation marks.','Only do this for real general truths. Do not use it to avoid learning the tense changes.']},
 {q:'"Are you ready?" the coach asked Tunde.',tag:'8. Yes/no question',a:'The coach asked Tunde if he was ready.',st:['The reported words are a question that needs yes or no.','Use <b>if</b> or <b>whether</b> to join the sentences. <b>Do not use that.</b>','Change the word order to a statement: are you ready → <b>he was ready</b>.','You → he. Are → was.','Remove the question mark. The new sentence is a statement.']},
 {q:'"Where do you live?" Mr Adamu asked the boy.',tag:'9. Wh-question',a:'Mr Adamu asked the boy where he lived.',st:['Keep the question word: <b>where</b>.','Change the word order to a statement: do you live → <b>he lived</b>. Remove <b>do</b>.','You → he. Live → lived.','Do not add that or if. Remove the question mark.','Check: where he lived, not where did he live.']},
 {q:'"What did you eat this morning?" the doctor asked Zainab.',tag:'10. Wh-question + time',a:'The doctor asked Zainab what she had eaten that morning.',st:['Keep the question word: <b>what</b>.','Statement order: you did eat → <b>she had eaten</b>. Simple past in the question → past perfect.','You → she.','this morning → <b>that morning</b>.','No that, no question mark.']},
 {q:'Amaka said to him, "Have you seen my bag?"',tag:'11. Question with “said to”',a:'Amaka asked him if he had seen her bag.',st:['The words are a question, so the reporting verb becomes <b>asked</b>.','Use <b>if</b> or <b>whether</b>.','You → he. My → her. Present perfect → past perfect: have seen → <b>had seen</b>.','Statement order: if he had seen her bag.','Remove the question mark.']},
 {q:'"Close the door," the teacher said to Bayo.',tag:'12. Command',a:'The teacher told Bayo to close the door.',st:['A command uses <b>told</b> or <b>ordered</b>.','The listener (Bayo) comes right after the reporting verb.','Use <b>to + the base verb</b>: to close.','Do not use that. Do not keep the comma or quotation marks.','Check: told Bayo to close.']},
 {q:'"Do not shout," the prefect said to the pupils.',tag:'13. Negative command',a:'The prefect told the pupils not to shout.',st:['Negative command: use <b>not to</b> + the base verb.','told the pupils <b>not to shout</b>.','Do not write told the pupils to not shout. Many examiners consider it weak.','Remove quotation marks and the comma.','Check the doer: the prefect gives the order.']},
 {q:'"Please lend me your ruler," Halima said to Segun.',tag:'14. Request',a:'Halima asked Segun to lend her his ruler.',st:['A request uses <b>asked</b> (or requested, begged).','Please is dropped. A polite request is shown by asked.','Me → her (Halima). Your → his (Segun).','Use asked + person + <b>to</b> + base verb.','Remove quotation marks.']},
 {q:'"Stand up at once!" the officer said to the soldiers.',tag:'15. Strong command',a:'The officer ordered the soldiers to stand up at once.',st:['A strong command uses <b>ordered</b> (or commanded).','ordered + the soldiers + <b>to</b> + stand up.','Keep at once. It shows the force of the order.','Remove the exclamation mark and quotation marks.','The reporting verb shows how the words were said.']},
 {q:'"What a lovely dress!" Ada said.',tag:'16. Exclamation',a:'Ada exclaimed that it was a lovely dress.  (or: Ada exclaimed with admiration that it was a very lovely dress.)',st:['An exclamation shows strong feeling.','Use a reporting verb like <b>exclaimed</b> or <b>cried</b>, or say the feeling: with joy, with sorrow, with admiration.','What a lovely dress → that it was a lovely dress (you can add very).','Remove the exclamation mark.','Use that to join the parts.']},
 {q:'"Hurray! We have won!" the boys shouted.',tag:'17. Exclamation',a:'The boys shouted with joy that they had won.',st:['Hurray shows joy. Replace the word with <b>with joy</b>.','We → they. Present perfect → past perfect: have won → <b>had won</b>.','Add that. Remove the exclamation marks.','The reporting verb is the same, shouted.','Notice how Hurray disappeared and with joy replaced it.']}
];
SEC('a3','Part A: Sentence recasting','Direct and reported speech','Report what people said without using their exact words.',[
 SC('Direct speech and reported speech',
  DEF('<b>Direct speech</b> gives the <b>exact words</b> a person said. It uses quotation marks.','Direct speech'),
  DEF('<b>Reported speech</b> (also called indirect speech) tells <b>what a person said</b>, without quotation marks and often with changes.','Reported speech'),
  EX(`<b>Direct:</b> Musa said, “I am hungry.”<br><b>Reported:</b> Musa said that he was hungry.`),
  P('In both sentences, <b>said</b> is the <b>reporting verb</b>. The words that follow are the <b>reported clause</b>.'),
  P('Three things usually change when you move from direct to reported speech: <b>pronouns</b>, <b>tenses</b> and <b>time/place words</b>. We learn them one at a time.')),
 SC('Change 1: pronouns',
  P('A pronoun must point to the right person from the <b>reporter’s</b> point of view.'),
  TB(['Direct','Reported','Example'],[
   ['I','he / she','Musa said, “<b>I</b> am hungry.” → Musa said that <b>he</b> was hungry.'],
   ['we','they','Ngozi said, “<b>We</b> are late.” → Ngozi said that <b>they</b> were late.'],
   ['my','his / her','Tayo said, “<b>My</b> bag is new.” → Tayo said that <b>his</b> bag was new.'],
   ['our','their','The boys said, “<b>Our</b> teacher is here.” → The boys said that <b>their</b> teacher was there.'],
   ['you / your','I / he / she / they … (depends on who is listening)','Ada said to me, “<b>You</b> are late.” → Ada told me that <b>I</b> was late.'],
   ['he, she, they','No change','Bola said, “<b>She</b> is clever.” → Bola said that <b>she</b> was clever.']
  ]),
  TIP('Use this rule: <b>I/we</b> → the speaker. <b>You</b> → the listener. <b>He/she/they</b> → no change.')),
 SC('Change 2: tenses',
  P('When the reporting verb is in the past (said, told, asked…), the verb in the reported clause usually moves <b>one step back</b> in time. This is sometimes called <b>backshift</b>.'),
  TB(['Direct speech','Reported speech','Example'],[
   ['Simple present','Simple past','“I <b>eat</b>.” → he said that he <b>ate</b>.'],
   ['Present continuous','Past continuous','“I <b>am eating</b>.” → he said that he <b>was eating</b>.'],
   ['Present perfect','Past perfect','“I <b>have eaten</b>.” → he said that he <b>had eaten</b>.'],
   ['Simple past','Past perfect (where appropriate)','“I <b>ate</b>.” → he said that he <b>had eaten</b>.'],
   ['will','would','“I <b>will</b> go.” → he said that he <b>would</b> go.'],
   ['can','could','“I <b>can</b> swim.” → he said that he <b>could</b> swim.'],
   ['may','might','“I <b>may</b> come.” → he said that he <b>might</b> come.'],
   ['must','had to (or must)','“I <b>must</b> go.” → he said that he <b>had to</b> go.']
  ]),
  TIP('<b>would, could, might, should, ought to</b> do not change again. They are already one step back.')),
 SC('Change 3: time and place words',
  P('Time and place words change because the reporter is speaking at a <b>different time and place</b> from the original speaker.'),
  TB(['Direct','Reported'],[
   ['today','that day'],['tonight','that night'],['now','then'],['yesterday','the previous day / the day before'],['tomorrow','the next day / the following day'],
   ['last week','the previous week / the week before'],['next week','the following week / the week after'],['ago','before'],['here','there'],['this','that'],['these','those']
  ]),
  MIS('Students report tomorrow as <s>tomorrow</s> in an exam. Always change it to <b>the next day</b> or <b>the following day</b>.')),
 SC('When the tense does not change',
  P('The tenses do not always change. They stay the same when:'),
  STP(['The words are a <b>universal truth</b> or a general fact: <em>The teacher said that water boils at 100 degrees Celsius.</em>','The reporting verb is in the <b>present</b> or future: <em>She says that she is tired.</em>','The verb is already one of <b>would, could, might, should, ought to</b>.']),
  P('Time words also depend on the situation. If you report the words on the <b>same day</b>, you can keep <b>today</b> or <b>tomorrow</b>. In examinations, assume the reporting is done later, so change them.'),
  QZ('a3-tense','Quick check: tense changes','live',[
   M('a3t1','reported','<b>1.</b> In reported speech, <em>will</em> becomes…',['would','shall','can','did'],0,'will → would. It moves one step back.',{1:'Shall is not the usual backshift of will.',2:'Can is a different modal.',3:'Did is the past of do, not of will.'}),
   M('a3t2','reported','<b>2.</b> In reported speech, <em>tomorrow</em> becomes…',['yesterday','the next day','today','now'],1,'tomorrow → the next day (or the following day).',{0:'Yesterday is a past time word, and it changes to the day before.',2:'Today becomes that day.',3:'Now becomes then.'}),
   M('a3t3','reported','<b>3.</b> Which statement keeps the present tense correctly?',['The teacher said that water boils at 100 degrees Celsius.','The teacher said that the school was opening on Monday.','The teacher said that he is ill.','The teacher said that he can come.'],0,'A universal truth keeps its present tense. The other options report personal statements, so the tense should move back.',{1:'This one is not a universal truth.',2:'Personal state of health, not a universal truth. In exams, change it to was ill.',3:'Can → could in reported speech.'})
  ])),
 SC('Said, told, asked, ordered',
  P('The <b>reporting verb</b> must match the type of sentence.'),
  TB(['Reporting verb','Used for','Example'],[
   ['said','statements; no person right after it','She <b>said</b> that she was tired. / She <b>said to me</b> that…'],
   ['told','statements, commands; a person must follow','She <b>told me</b> that she was tired.'],
   ['asked','questions and polite requests','He <b>asked</b> where I lived.'],
   ['ordered / commanded','strong commands','The officer <b>ordered</b> them to stand.'],
   ['begged / requested','requests','She <b>begged</b> him to stay.']
  ]),
  MIS('<s>She said me that she was tired.</s> <b>Said</b> cannot be followed directly by a person. Use <b>told me</b> or <b>said to me</b>.'),
  QZ('a3-verbs','Quick check: reporting verbs','live',[
   M('a3v1','reported','Choose the correct sentence.',['She said me that she was ready.','She told me that she was ready.','She told that she was ready.','She said to that she was ready.'],1,'Told needs a person after it: told me.',{0:'Said cannot take a person directly. Say said to me, or use told me.',2:'Told needs a person after it.',3:'Said to needs a person after to.'})
  ])),
 SC('Reporting questions',
  P('A <b>question</b> becomes a <b>statement</b> when reported. Keep these rules:'),
  STP(['The reporting verb is usually <b>asked</b>.','Yes/no questions: join with <b>if</b> or <b>whether</b>.','Wh-questions (who, what, where, why, when, how): keep the question word.','Change the word order to a <b>statement</b> (subject before verb). Remove do/does/did.','Remove the question mark.','Do not use <b>that</b> in a reported question.']),
  TB(['Direct question','Reported question'],[
   ['“Are you tired?” Ada asked him.','Ada asked him <b>if</b> he was tired.'],
   ['“Where do you live?” he asked me.','He asked me <b>where</b> I lived.'],
   ['“Why did you come late?” the teacher asked.','The teacher asked <b>why</b> he had come late.']
  ]),
  MIS('<s>He asked where was I going.</s> Do not keep the question order. Write <b>He asked where I was going.</b>'),
  MIS('<s>She asked that where I lived.</s> Never put <b>that</b> before the question word.')),
 SC('Reporting commands, requests and exclamations',
  H('Commands'),
  P('<b>Told/ordered + person + to + base verb.</b> For negatives, <b>not to</b>.'),
  EX('“Sit down,” the teacher said to Bola. → The teacher <b>told</b> Bola <b>to sit down</b>.<br>“Do not run,” she said to the children. → She told the children <b>not to run</b>.'),
  H('Requests'),
  P('<b>Asked/begged/requested + person + to + base verb.</b> Please is dropped.'),
  EX('“Please help me,” Tayo said to Ngozi. → Tayo <b>asked</b> Ngozi <b>to help</b> him.'),
  H('Exclamations'),
  P('Use a verb like <b>exclaimed</b>, <b>cried</b> or <b>shouted</b>, and name the feeling: <b>with joy, with sorrow, with surprise</b>.'),
  EX('“Alas! I have lost my phone,” said Chika. → Chika exclaimed <b>with sorrow</b> that she had lost her phone.'),
  QZ('a3-types','Quick check: sentence types','live',[
   M('a3q1','reported','Which reporting verb is best for: <em>“Please wait here,” she said to him.</em>?',['ordered','asked','exclaimed','replied'],1,'Please shows a polite request, so asked.',{0:'Ordered is for strong commands. Please makes this a polite request.',2:'Exclaimed shows strong feeling.',3:'Replied answers a question. This is not an answer.'}),
   M('a3q2','reported','Which is the correct report of <em>“Do not touch it,” he said to me.</em>',['He told me do not touch it.','He told me to not touch it.','He told me not to touch it.','He said me not to touch it.'],2,'Negative command: told + person + not to + base verb.',{0:'Do not keep the command form. Use not to + verb.',1:'Not to touch is the standard form. Avoid to not.',3:'Said cannot take me directly. Use told me.'})
  ])),
 SC('Seventeen worked examples',
  P('Try each one first, then reveal the steps. Study the pronouns and tenses carefully.'),
  WK('Worked examples',REP_WORKED)),
 SC('Mistakes to avoid',
  MIS('Keeping the quotation marks.<br>✘ <s>Musa said that “he was hungry.”</s><br>✔ Musa said that he was hungry.'),
  MIS('Forgetting to change the pronoun.<br>✘ <s>Musa said that I was hungry.</s><br>✔ Musa said that he was hungry.'),
  MIS('Forgetting to move the tense back.<br>✘ <s>Musa said that he is hungry.</s> (in an exam)<br>✔ Musa said that he was hungry.'),
  MIS('Using that in a reported question.<br>✘ <s>He asked that where I lived.</s><br>✔ He asked where I lived.'),
  MIS('Keeping the question order.<br>✘ <s>He asked where did I live.</s><br>✔ He asked where I lived.'),
  MIS('Saying <s>said me</s>.<br>✔ He told me. ✔ He said to me.'),
  MIS('Leaving tomorrow, yesterday, here or now unchanged.<br>✔ the next day, the day before, there, then.')),
 SC('Practice 1: beginner questions',
  QZ('a3-beg','Beginner: reported speech','live',[
   M('a3b1','reported','<b>1.</b> Choose the reported form of: <em>Ibrahim said, “I am tired.”</em>',['Ibrahim said that I was tired.','Ibrahim said that he was tired.','Ibrahim said that he had been tired.','Ibrahim said he will be tired.'],1,'I → he and am → was.',{0:'I must change to he. Ibrahim is the person speaking.',2:'Am becomes was. Had been is too far back.',3:'Will be changes the time. The tense should be past.'}),
   M('a3b2','reported','<b>2.</b> In reported speech, <em>now</em> becomes…',['then','here','today','later'],0,'now → then.',{1:'Here is a place word. It becomes there.',2:'Today becomes that day.',3:'Later does not replace now.'}),
   M('a3b3','reported','<b>3.</b> Choose the correct sentence.',['She said me that she was ready.','She told me that she was ready.','She told that she was ready.','She said to that she was ready.'],1,'Told needs a person after it.',{0:'Said cannot be followed by me. Use told me or said to me.',2:'Told needs a person: told me.',3:'Said to needs a person after to.'}),
   M('a3b4','reported','<b>4.</b> In reported speech, <em>can</em> becomes…',['could','will','must','did'],0,'can → could.',{1:'Will changes to would, not from can.',2:'Must is a different modal.',3:'Did is not a modal.'}),
   M('a3b5','reported','<b>5.</b> Which reporting verb is most suitable for a <b>question</b>?',['told','ordered','asked','said'],2,'Questions are reported with asked.',{0:'Told is for statements and commands.',1:'Ordered is for strong commands.',3:'Said is used for statements.'})
  ],'Choose the best answer.')),
 SC('Practice 2: intermediate questions',
  P('Type the full reported sentence. Do <b>not</b> use quotation marks.'),
  QZ('a3-int','Intermediate: change to reported speech','live',[
   W('a3i1','reported','<b>1.</b> Kemi said, “I am cooking now.”',['Kemi said that she was cooking then.'],'I → she, am cooking → was cooking, now → then.',{noq:true,hint:'Change I, the tense and now.',traps:[{re:/was cooking now/,m:'Change now to then.'},{re:/is cooking/,m:'Move the tense back: is/am cooking → was cooking.'}]}),
   W('a3i2','reported','<b>2.</b> The boys said, “We have finished our homework.”',['The boys said that they had finished their homework.'],'We → they, our → their, have finished → had finished.',{noq:true,hint:'Change we, our and the tense.',traps:[{re:/had finished our/,m:'Our must change to their.'},{re:/have finished/,m:'Present perfect moves back to past perfect: had finished.'}]}),
   W('a3i3','reported','<b>3.</b> “Are you coming to the party?” Bisi asked Tola.',['Bisi asked Tola if she was coming to the party.','Bisi asked Tola whether she was coming to the party.'],'A yes/no question → if or whether, statement order, you → she, are → was.',{noq:true,hint:'Use if or whether. No question mark.',traps:[{re:/that/,m:'Do not use that in a reported question. Use if or whether.'},{re:/was she/,m:'Use statement order: she was coming, not was she coming.'}]}),
   W('a3i4','reported','<b>4.</b> Mr Yusuf said to the pupils, “Open your books.”',['Mr Yusuf told the pupils to open their books.'],'Command → told + person + to + base verb. Your → their.',{noq:true,hint:'Use told + the pupils + to + verb.',traps:[{re:/open your/,m:'Your must change to their.'},{re:/that/,m:'Do not use that for a command. Use to + verb.'}]}),
   W('a3i5','reported','<b>5.</b> Chika said, “I met him last week.”',['Chika said that she had met him the previous week.','Chika said that she had met him the week before.'],'I → she. Met → had met. Last week → the previous week / the week before.',{noq:true,hint:'Change I, met and last week.',traps:[{re:/last week/,m:'Change last week to the previous week or the week before.'},{re:/she met/,m:'Move the past tense back: had met.'}]})
  ],'Type the reported sentence.')),
 SC('Practice 3: WAEC and JAMB standard',
  P('Ten mixed questions: statements, questions, commands and requests. Read carefully.'),
  QZ('a3-exam','Exam standard: reported speech','live',[
   W('a3e1','reported','<b>1.</b> The principal said to the students, “You will write the test tomorrow.”',['The principal told the students that they would write the test the next day.','The principal told the students that they would write the test the following day.'],'You → they, will → would, tomorrow → the next/following day. Said to → told.',{noq:true,hint:'Change you, will and tomorrow. Use told.',traps:[{re:/tomorrow/,m:'Change tomorrow to the next day or the following day.'},{re:/will write/,m:'Will changes to would.'}]}),
   W('a3e2','reported','<b>2.</b> “Why did you leave early?” the manager asked the clerk.',['The manager asked the clerk why he had left early.'],'Wh-question: keep why, statement order, did leave → had left, you → he.',{noq:true,hint:'Keep why. Use statement order. Past → past perfect.',traps:[{re:/why did/,m:'Remove did. Use statement order: why he had left.'},{re:/why he left/,m:'Move the tense back. Left → had left.'}]}),
   W('a3e3','reported','<b>3.</b> “Don’t touch the machine,” the engineer warned the boys.',['The engineer warned the boys not to touch the machine.','The engineer told the boys not to touch the machine.'],'Negative command → not to + verb.',{noq:true,hint:'Use not to + the base verb.',traps:[{re:/dont|do not/,m:'Do not keep the command form. Use not to + verb.'}]}),
   W('a3e4','reported','<b>4.</b> Funke said to her mother, “My friends are coming here tonight.”',['Funke told her mother that her friends were coming there that night.'],'My → her. are coming → were coming. here → there. tonight → that night.',{noq:true,hint:'Four changes: my, tense, here, tonight.',traps:[{re:/here/,m:'Here becomes there.'},{re:/tonight/,m:'Tonight becomes that night.'}]}),
   W('a3e5','reported','<b>5.</b> “How far is the market from here?” the stranger asked me.',['The stranger asked me how far the market was from there.'],'Keep how far. Statement order. is → was. here → there.',{noq:true,hint:'Keep how far. Change is, and here.',traps:[{re:/how far was the market from here/,m:'Change here to there.'},{re:/how far is/,m:'Move the tense back. is → was.'}]}),
   W('a3e6','reported','<b>6.</b> “I can solve this problem,” said Obi.',['Obi said that he could solve that problem.'],'I → he. can → could. this → that.',{noq:true,hint:'Change I, can and this.',traps:[{re:/this problem/,m:'This becomes that.'},{re:/can solve/,m:'Can becomes could.'}]}),
   W('a3e7','reported','<b>7.</b> “Please wait outside,” the secretary said to the visitors.',['The secretary asked the visitors to wait outside.','The secretary requested the visitors to wait outside.'],'A polite request → asked/requested + person + to + verb.',{noq:true,hint:'Use asked and to + verb.',traps:[{re:/told|ordered/,m:'Please shows a polite request, so use asked.'}]}),
   W('a3e8','reported','<b>8.</b> The woman said, “My son was admitted to hospital yesterday.”',['The woman said that her son had been admitted to hospital the day before.','The woman said that her son had been admitted to hospital the previous day.'],'My → her. was admitted → had been admitted. yesterday → the day before.',{noq:true,hint:'Past passive moves back to had been + participle.',traps:[{re:/yesterday/,m:'Yesterday becomes the day before or the previous day.'},{re:/was admitted/,m:'Simple past moves back to past perfect: had been admitted.'}]}),
   W('a3e9','reported','<b>9.</b> “Hurray! I have passed!” cried Sade.',['Sade cried with joy that she had passed.','Sade shouted with joy that she had passed.','Sade exclaimed with joy that she had passed.'],'Hurray becomes with joy. I → she. have passed → had passed.',{noq:true,hint:'Replace Hurray with with joy. Change I and the tense.',traps:[{re:/hurray/,m:'Replace Hurray with the feeling: with joy.'}]}),
   W('a3e10','reported','<b>10.</b> The nurse said to the patient, “Take this medicine after meals.”',['The nurse told the patient to take that medicine after meals.'],'Command → told + person + to + verb. this → that.',{noq:true,hint:'Use told, to + verb, and change this.',traps:[{re:/this medicine/,m:'This becomes that.'},{re:/that the patient/,m:'Do not use that for a command. Use to + verb.'}]})
  ],'Type the reported sentence. Do not use quotation marks.'))
]);
