function U(x){return '<u class="ul">'+x+'</u>'}
/* ================= B1: WORD CLASS vs FUNCTION ================= */
SEC('b1','Part B: Grammatical function','Word class or grammatical function?','Two different questions about the same word.',[
 SC('Two different questions',
  DEF('<b>Word class</b> asks: <b>What kind of word is this?</b> (noun, verb, adjective, adverb…). The answer belongs to the word itself.','Word class'),
  DEF('<b>Grammatical function</b> asks: <b>What job is this word, phrase or clause doing in this sentence?</b> (subject, object, complement, adverbial…). The answer depends on the sentence.','Grammatical function'),
  EX('The word <b>teacher</b> is always a noun. That is its word class.<br>But in one sentence it may be the <b>subject</b>, and in another it may be the <b>object</b>. That is its function.'),
  TIP('If the question says <b>“What is the function of…”</b>, never answer with <s>noun</s>, <s>verb</s> or <s>adverb</s>. Those are word classes. Answer with <b>subject, object, complement, adverbial</b>, and so on.')),
 SC('Same words, different jobs',
  P('Look at the same noun phrase <b>the boy</b> doing different jobs:'),
  TB(['Sentence','Underlined part','Function'],[
   [`${U('The boy')} ran home.`,'The boy','<b>Subject</b> (it does the running)'],
   [`She saw ${U('the boy')}.`,'the boy','<b>Direct object</b> (it receives the seeing)'],
   [`She gave ${U('the boy')} a book.`,'the boy','<b>Indirect object</b> (it receives the book)'],
   [`He is ${U('a teacher')}.`,'a teacher','<b>Subject complement</b> (it describes he)'],
   [`They arrived ${U('early')}.`,'early','<b>Adverbial</b> (it tells when)']
  ]),
  P('<b>The function changes when the sentence changes.</b> Never judge a word out of the sentence.'),
  QZ('b1-q','Quick check','live',[
   M('b1q1','function',`What is the <b>function</b> of ${U('the boy')} in: <em>She saw the boy.</em>?`,['Noun','Subject','Direct object','Adjective'],2,'The boy receives the action of seeing. It is the direct object. Noun is its word class, not its function.',{0:'Noun is the word class. The question asks for the job it does in the sentence.',1:'Who saw? She. The boy is not the doer.',3:'The boy is a noun phrase, not an adjective.'}),
   M('b1q2','function',`What is the <b>function</b> of ${U('early')} in: <em>They arrived early.</em>?`,['Adjective','Adverb','Adverbial','Subject'],2,'Early tells when. Its function is adverbial. (Adverb is its word class.)',{1:'Adverb is its word class. The question asks for its function.',0:'Here early describes the verb arrived, so it works as an adverbial.',3:'The subject is They.'})
  ]))
]);

/* ================= B2: THE TWELVE FUNCTIONS ================= */
function FNQ(id,q,opts,a,why){return M(id,'function',q,opts,a,why)}
SEC('b2','Part B: Grammatical function','The twelve grammatical functions','Learn each job one at a time.',[
 SC('1. Subject',
  DEF('The <b>subject</b> is the person or thing that does the action or that the sentence is about.'),
  P('<b>How to identify it:</b> find the verb. Ask <b>who or what + verb?</b>'),
  TB(['Sentence','Subject','Why?'],[
   [`${U('Ngozi')} sings well.`,'Ngozi','Who sings? Ngozi.'],
   [`${U('The old man in the shop')} sold me bread.`,'The old man in the shop','Who sold? The whole phrase, not just man.'],
   [`${U('Reading novels')} improves your vocabulary.`,'Reading novels','What improves? Reading novels.']
  ]),
  MIS('Students underline only the first word. A subject can be a long phrase. Take <b>everything</b> that answers “who or what + verb?”'),
  QZ('b2-1','Quick check','live',[FNQ('b2f1',`What is the function of ${U('The old man in the shop')} in: <em>The old man in the shop sold me bread.</em>?`,['Subject','Direct object','Adverbial','Subject complement'],0,'Who sold me bread? The old man in the shop. That is the subject.')])),
 SC('2. Direct object',
  DEF('The <b>direct object</b> is the person or thing that <b>receives the action</b> of the verb.'),
  P('<b>How to identify it:</b> ask <b>verb + what or whom?</b>'),
  TB(['Sentence','Direct object','Why?'],[
   [`Tola kicked ${U('the ball')}.`,'the ball','Kicked what? The ball.'],
   [`The farmer sells ${U('yams')}.`,'yams','Sells what? Yams.'],
   [`She saw ${U('the boy')}.`,'the boy','Saw whom? The boy.']
  ]),
  MIS('A direct object is not always a thing. People can be direct objects too. Also, the verb <b>be</b> (is, am, was) has no object. What follows it is a complement.'),
  QZ('b2-2','Quick check','live',[FNQ('b2f2',`What is the function of ${U('the ball')} in: <em>Tola kicked the ball.</em>?`,['Subject','Indirect object','Adverbial of place','Direct object'],3,'Kicked what? The ball. It receives the action, so it is the direct object.')])),
 SC('3. Indirect object',
  DEF('The <b>indirect object</b> is the person who <b>receives</b> the direct object, or who the action is done for. It comes before the direct object.'),
  P('<b>How to identify it:</b> find the direct object first. Then ask <b>to or for whom?</b> The verb has two objects.'),
  TB(['Sentence','Indirect object','Direct object'],[
   [`She gave ${U('the boy')} a book.`,'the boy','a book'],
   [`Mum bought ${U('Tayo')} a bag.`,'Tayo','a bag'],
   [`The teacher told ${U('us')} a story.`,'us','a story']
  ]),
  MIS('If the person comes <b>after “to” or “for”</b>, as in <em>She gave a book to the boy</em>, then <b>to the boy</b> is a prepositional phrase. Use the position test: an indirect object comes <b>before</b> the direct object without a preposition.'),
  QZ('b2-3','Quick check','live',[FNQ('b2f3',`What is the function of ${U('Tayo')} in: <em>Mum bought Tayo a bag.</em>?`,['Direct object','Subject complement','Indirect object','Object of a preposition'],2,'The bag is bought for Tayo. Tayo is the receiver of the direct object (a bag), so he is the indirect object.')])),
 SC('4. Subject complement',
  DEF('A <b>subject complement</b> completes the meaning of the subject. It <b>describes or renames the subject</b>. It follows a <b>linking verb</b> (be, become, seem, look, feel, smell, taste).'),
  P('<b>How to identify it:</b> check that it <b>means the same thing as the subject</b> or describes the subject.'),
  TB(['Sentence','Subject complement','Why?'],[
   [`He is ${U('a teacher')}.`,'a teacher','a teacher = he'],
   [`The soup smells ${U('delicious')}.`,'delicious','It describes the soup.'],
   [`Ngozi became ${U('the captain')}.`,'the captain','the captain = Ngozi']
  ]),
  MIS('Do not call it an object. <b>Be</b> and linking verbs do not take objects. The word after them tells what the subject <b>is</b> or <b>is like</b>.'),
  QZ('b2-4','Quick check','live',[FNQ('b2f4',`What is the function of ${U('delicious')} in: <em>The soup smells delicious.</em>?`,['Adverbial of manner','Subject complement','Direct object','Object complement'],1,'Smells is a linking verb here. Delicious describes the soup, the subject.')])),
 SC('5. Object complement',
  DEF('An <b>object complement</b> comes after the object and <b>describes or renames the object</b>.'),
  P('<b>How to identify it:</b> find the object first. The complement tells you what the object <b>becomes, is called or is made to be</b>.'),
  TB(['Sentence','Object','Object complement'],[
   [`They elected Musa ${U('captain')}.`,'Musa','captain'],
   [`The news made her ${U('happy')}.`,'her','happy'],
   [`We call the dog ${U('Rex')}.`,'the dog','Rex']
  ]),
  MIS('Do not confuse it with an indirect object. In <em>They elected Musa captain</em>, captain = Musa (object complement). In <em>She gave Musa a book</em>, a book ≠ Musa (direct object).'),
  QZ('b2-5','Quick check','live',[FNQ('b2f5',`What is the function of ${U('captain')} in: <em>They elected Musa captain.</em>?`,['Subject complement','Indirect object','Object complement','Adverbial of time'],2,'Captain describes what Musa has become. It renames the object, so it is an object complement.')])),
 SC('6. Adverbial of time',
  DEF('An <b>adverbial of time</b> tells <b>when</b> or <b>how often</b> something happens.'),
  P('<b>How to identify it:</b> ask <b>when?</b> or <b>how often?</b>'),
  TB(['Sentence','Adverbial of time','Why?'],[
   [`She arrived ${U('yesterday')}.`,'yesterday','Arrived when?'],
   [`We will meet ${U('after school')}.`,'after school','Meet when?'],
   [`He visits his uncle ${U('every Sunday')}.`,'every Sunday','How often?']
  ]),
  MIS('<b>Time</b> can hide inside a phrase. In <em>after school</em>, the word school is the object of the preposition after, but the <b>whole phrase</b> is the adverbial of time. Answer for the whole group of words the question underlines.'),
  QZ('b2-6','Quick check','live',[FNQ('b2f6',`What is the function of ${U('after school')} in: <em>We will meet after school.</em>?`,['Adverbial of place','Adverbial of time','Adverbial of manner','Subject'],1,'Meet when? After school. It tells the time.')])),
 SC('7. Adverbial of place',
  DEF('An <b>adverbial of place</b> tells <b>where</b> something happens.'),
  P('<b>How to identify it:</b> ask <b>where?</b>'),
  TB(['Sentence','Adverbial of place','Why?'],[
   [`The children play ${U('in the compound')}.`,'in the compound','Play where?'],
   [`They live ${U('near the market')}.`,'near the market','Live where?'],
   [`Put the book ${U('here')}.`,'here','Put it where?']
  ]),
  MIS('The prepositional phrase <b>in the compound</b> contains the object of a preposition (the compound), but the <b>whole phrase</b> is an adverbial of place. Read the question to see which one is asked.'),
  QZ('b2-7','Quick check','live',[FNQ('b2f7',`What is the function of ${U('in the compound')} in: <em>The children play in the compound.</em>?`,['Adverbial of place','Adverbial of time','Direct object','Subject complement'],0,'Play where? In the compound.')])),
 SC('8. Adverbial of manner',
  DEF('An <b>adverbial of manner</b> tells <b>how</b> something is done.'),
  P('<b>How to identify it:</b> ask <b>how?</b>'),
  TB(['Sentence','Adverbial of manner','Why?'],[
   [`She spoke ${U('softly')}.`,'softly','Spoke how?'],
   [`He answered ${U('with confidence')}.`,'with confidence','Answered how?'],
   [`The boys left ${U('in a hurry')}.`,'in a hurry','Left how?']
  ]),
  MIS('Do not mix up <b>manner</b> with <b>place</b> or <b>time</b>. If the best question is <b>how?</b> (softly, quickly, with care), it is manner. Many students call every adverb an adverbial of manner.'),
  QZ('b2-8','Quick check','live',[FNQ('b2f8',`What is the function of ${U('softly')} in: <em>She spoke softly.</em>?`,['Adverbial of time','Adverbial of place','Subject complement','Adverbial of manner'],3,'Spoke how? Softly. It describes the way she spoke.')])),
 SC('9. Adverbial of reason',
  DEF('An <b>adverbial of reason</b> tells <b>why</b> something happens.'),
  P('<b>How to identify it:</b> ask <b>why?</b> Look for words like <b>because, since, owing to, because of</b>.'),
  TB(['Sentence','Adverbial of reason','Why?'],[
   [`He was late ${U('because the bus broke down')}.`,'because the bus broke down','Late why? (a clause)'],
   [`She was absent ${U('owing to illness')}.`,'owing to illness','Absent why? (a phrase)'],
   [`We stayed indoors ${U('because of the rain')}.`,'because of the rain','Stayed why? (a phrase)']
  ]),
  MIS('<b>Because</b> is followed by a clause (<em>because he was sick</em>). <b>Because of</b> and <b>owing to</b> are followed by a noun phrase (<em>because of the rain</em>). Both tell <b>why</b>, so both are adverbials of reason.'),
  QZ('b2-9','Quick check','live',[FNQ('b2f9',`What is the function of ${U('because he was sick')} in: <em>He stayed at home because he was sick.</em>?`,['Adverbial of reason','Adverbial of manner','Direct object','Adverbial of time'],0,'Stayed at home why? Because he was sick.')])),
 SC('10. Object of a preposition',
  DEF('A <b>preposition</b> (in, on, at, beside, with, to…) shows how things are related. The noun or pronoun after it is the <b>object of the preposition</b>.'),
  P('<b>How to identify it:</b> find the preposition. The noun phrase right after it is its object.'),
  TB(['Sentence','Object of the preposition','Preposition'],[
   [`She sat beside ${U('the teacher')}.`,'the teacher','beside'],
   [`He came with ${U('his sister')}.`,'his sister','with'],
   [`The book is on ${U('the table')}.`,'the table','on']
  ]),
  MIS('Do not call it the direct object. A direct object follows a <b>verb</b>. The object of a preposition follows a <b>preposition</b>.'),
  QZ('b2-10','Quick check','live',[FNQ('b2f10',`What is the function of ${U('the teacher')} in: <em>She sat beside the teacher.</em>?`,['Direct object','Object of a preposition','Subject complement','Indirect object'],1,'The teacher comes right after the preposition beside. It is the object of beside.')])),
 SC('11. Apposition',
  DEF('<b>Apposition</b> is when a noun phrase is placed beside another noun phrase to <b>rename or explain it</b>. Both refer to the same person or thing.'),
  P('<b>How to identify it:</b> two noun phrases side by side (often with commas) that mean the same person or thing, and there is <b>no verb</b> between them.'),
  TB(['Sentence','Apposition','In apposition to'],[
   [`Mr Ade, ${U('our principal')}, spoke.`,'our principal','Mr Ade'],
   [`Lagos, ${U('the commercial capital of Nigeria')}, is crowded.`,'the commercial capital of Nigeria','Lagos'],
   [`My friend ${U('Tunde')} is here.`,'Tunde','my friend']
  ]),
  MIS('Compare <em>Mr Ade, our principal, spoke</em> (apposition) with <em>Mr Ade is our principal</em> (subject complement). The verb <b>is</b> makes the difference.'),
  QZ('b2-11','Quick check','live',[FNQ('b2f11',`What is the function of ${U('our principal')} in: <em>Mr Ade, our principal, spoke.</em>?`,['Subject','Apposition','Subject complement','Object complement'],1,'Our principal renames Mr Ade. There is no verb between them, so it is in apposition.')])),
 SC('12. Adjunct',
  DEF('An <b>adjunct</b> is an <b>optional extra</b> that adds information. If you remove it, the sentence is still complete. Adverbial adjuncts (time, place, manner, reason) are the ones tested most often.'),
  P('<b>How to identify it:</b> remove it. If the sentence still makes complete sense, it is an adjunct.'),
  TB(['Sentence','Adjunct','Why?'],[
   [`Segun ate his lunch ${U('quickly')}.`,'quickly','Segun ate his lunch. is complete without it.'],
   [`The bus left ${U('at noon')}.`,'at noon','The bus left. is complete without it.'],
   [`She sings ${U('in the choir')}.`,'in the choir','She sings. is complete without it.']
  ]),
  TIP('Textbooks use the word <b>adjunct</b> in slightly different ways. Some use it only for optional adverbials. Others also use it for a noun that modifies another noun, as in <em>school bus</em>. If a question uses this word, look at your class notes and your teacher’s examples for the meaning that is taught.'),
  QZ('b2-12','Quick check','live',[FNQ('b2f12','Which part of <em>Segun ate his lunch quickly</em> is an optional <b>adjunct</b>?',['Segun','ate','his lunch','quickly'],3,'Take away quickly and the sentence Segun ate his lunch still makes sense. It is an optional extra.')]))
]);

/* ================= B3: PHRASES AND CLAUSES ================= */
var PC_WORKED=[
 {q:`${U('The tall boy from Kano')} won the race.`,tag:'Noun phrase 1',a:'Structure: noun phrase. Function: subject.',st:['The head word is <b>boy</b>. The other words describe it.','Who won the race? The whole phrase.','Structure: noun phrase. Function: <b>subject</b>.']},
 {q:`She bought ${U('a new red dress')}.`,tag:'Noun phrase 2',a:'Structure: noun phrase. Function: direct object.',st:['The head word is <b>dress</b>.','Bought what? The whole phrase.','Structure: noun phrase. Function: <b>direct object</b>.']},
 {q:`The cat is ${U('under the table')}.`,tag:'Prepositional phrase 1',a:'Structure: prepositional phrase. Function: adverbial of place.',st:['It begins with the preposition <b>under</b>.','Where is the cat? Under the table.','Structure: prepositional phrase. Function: <b>adverbial of place</b>.']},
 {q:`The girl ${U('with the red bag')} is my sister.`,tag:'Prepositional phrase 2',a:'Structure: prepositional phrase. Function: adjectival (modifies “girl”).',st:['It begins with the preposition <b>with</b>.','It does not tell where or when. It tells <b>which girl</b>.','Structure: prepositional phrase. Function: <b>adjectival</b>, because it describes the noun girl.']},
 {q:`She is ${U('very tired')}.`,tag:'Adjectival phrase 1',a:'Structure: adjectival phrase. Function: subject complement.',st:['The head word is the adjective <b>tired</b>, with very in front of it.','It describes the subject, she, after the linking verb is.','Structure: adjectival phrase. Function: <b>subject complement</b>.']},
 {q:`A man ${U('full of kindness')} visited us.`,tag:'Adjectival phrase 2',a:'Structure: adjectival phrase. Function: modifies the noun “man”.',st:['The head word is the adjective <b>full</b>.','It comes after man and describes him.','Structure: adjectival phrase. Function: adjectival (describes man).']},
 {q:`He ran ${U('very quickly')}.`,tag:'Adverbial phrase 1',a:'Structure: adverb phrase. Function: adverbial of manner.',st:['The head word is the adverb <b>quickly</b>, with very in front.','Ran how? Very quickly.','Structure: adverb phrase. Function: <b>adverbial of manner</b>.']},
 {q:`They arrived ${U('quite late')}.`,tag:'Adverbial phrase 2',a:'Structure: adverb phrase. Function: adverbial of time.',st:['The head word is the adverb <b>late</b>, with quite in front.','Arrived when? Quite late.','Structure: adverb phrase. Function: <b>adverbial of time</b>.']},
 {q:`I believe ${U('that she is honest')}.`,tag:'Noun clause 1',a:'Structure: noun clause. Function: direct object of “believe”.',st:['It has its own subject (she) and verb (is).','It answers the question: believe what?','Structure: noun clause. Function: <b>direct object</b> of believe.']},
 {q:`${U('Whoever wins')} gets the prize.`,tag:'Noun clause 2',a:'Structure: noun clause. Function: subject of “gets”.',st:['It has its own subject (whoever) and verb (wins).','Who gets the prize? Whoever wins.','Structure: noun clause. Function: <b>subject</b>.']},
 {q:`The students arrived ${U('after the bell rang')}.`,tag:'Adverbial clause 1',a:'Structure: adverbial clause. Function: adverbial of time.',st:['It has its own subject (the bell) and verb (rang), and begins with <b>after</b>.','Arrived when? After the bell rang.','Structure: adverbial clause. Function: <b>adverbial of time</b>.']},
 {q:`We stayed indoors ${U('because it was raining')}.`,tag:'Adverbial clause 2',a:'Structure: adverbial clause. Function: adverbial of reason.',st:['It has its own subject (it) and verb (was raining).','Stayed indoors why? Because it was raining.','Structure: adverbial clause. Function: <b>adverbial of reason</b>.']},
 {q:`The man ${U('who lives next door')} is a doctor.`,tag:'Relative clause 1',a:'Structure: relative (adjectival) clause. Function: modifies “the man”.',st:['It begins with the relative pronoun <b>who</b> and has its own verb (lives).','It tells <b>which man</b>.','Structure: relative clause. Function: <b>adjectival</b>, modifying the man.']},
 {q:`The book ${U('which I bought yesterday')} is expensive.`,tag:'Relative clause 2',a:'Structure: relative (adjectival) clause. Function: modifies “the book”.',st:['It begins with <b>which</b> and has its own subject (I) and verb (bought).','It tells <b>which book</b>.','Structure: relative clause. Function: <b>adjectival</b>, modifying the book.']},
 {q:`${U('The fact that he passed')} surprised everyone.`,tag:'Noun clause in apposition',a:'The noun clause “that he passed” explains “the fact”. It is in apposition to “the fact”.',st:['Find the verb: <b>surprised</b>. Who or what surprised everyone? The whole phrase <b>the fact that he passed</b>. That is the subject.','Inside it, <b>that he passed</b> is a clause with its own subject (he) and verb (passed).','It tells <b>what the fact is</b>, so it renames or explains the fact. It is a noun clause in apposition to <b>the fact</b>.']}
];
SEC('b3','Part B: Grammatical function','Phrases and clauses','Know what a group of words is built from, and what job it does.',[
 SC('Structure and function',
  P('In WAEC you may be asked about a <b>whole group of words</b>, not just one word. First learn two ideas.'),
  DEF('<b>Phrase:</b> a group of words that works together as one unit but has <b>no subject-verb pair of its own</b>. Example: <em>in the classroom</em>.','Phrase'),
  DEF('<b>Clause:</b> a group of words that has its <b>own subject and verb</b>. Example: <em>after the bell rang</em>.','Clause'),
  P('Every group of words has a <b>structure</b> (what it is made of) and a <b>function</b> (the job it does).'),
  EX('<em>The man <b>who lives next door</b> is a doctor.</em><br><b>Structure:</b> relative clause (it has its own subject who and verb lives).<br><b>Function:</b> adjectival. It tells which man.'),
  TIP('Ask two questions: (1) <b>What is it made of?</b> That gives the structure. (2) <b>What job is it doing here?</b> That gives the function. Answer the one the question asks.')),
 SC('The seven you must know',
  TB(['Structure','What it is','Example','Usual function'],[
   ['<b>Noun phrase</b>','A noun with its describing words','the tall boy from Kano','subject, object, complement'],
   ['<b>Prepositional phrase</b>','A preposition + a noun phrase','under the table','adverbial or adjectival'],
   ['<b>Adjectival phrase</b>','An adjective with other words','very tired','complement or describes a noun'],
   ['<b>Adverbial phrase</b>','An adverb with other words','very quickly','adverbial'],
   ['<b>Noun clause</b>','A clause that works like a noun','that he passed','subject, object, complement'],
   ['<b>Adverbial clause</b>','A clause that works like an adverb','after the bell rang','adverbial of time, reason…'],
   ['<b>Relative / adjectival clause</b>','A clause that describes a noun','who lives next door','modifies a noun']
  ]),
  MIS('A prepositional phrase can have <b>different functions</b>: <em>The cat is [under the table]</em> (adverbial of place), <em>The girl [with the red bag]</em> (adjectival). The structure is the same, the function is not.')),
 SC('Fourteen worked examples, plus one tricky one',
  P('For each: try to name the <b>structure</b> and the <b>function</b> first. Then reveal.'),
  WK('Phrases and clauses',PC_WORKED.slice(0,14))),
 SC('The tricky one: “The fact that he passed surprised everyone”',
  P('This sentence appears in many exam questions. Read it slowly.'),
  WK('Worked example',PC_WORKED.slice(14))),
 SC('Practice: name the underlined expression',
  P('The underlined part is <b>a whole phrase or clause</b>. Decide what job it does.'),
  QZ('b3-p','Phrases and clauses','live',[
   M('b3p1','phrase',`${U('After the match ended')}, the fans went home.`.replace(/^/,'<b>1.</b> ')+'<br>What is the underlined part?',['Adverbial clause of time','Noun clause','Relative clause','Prepositional phrase'],0,'It has its own subject (the match) and verb (ended). It tells when the fans went home.',{1:'A noun clause does the job of a noun. This one tells when.',2:'A relative clause modifies a noun. Nothing is modified here.',3:'A phrase has no subject and verb of its own. This has the match ended.'}),
   M('b3p2','phrase',`<b>2.</b> The woman ${U('who sells akara')} is my aunt.<br>What is the underlined part?`,['Adverbial clause of reason','Noun clause (subject)','Relative (adjectival) clause','Adjectival phrase'],2,'It tells which woman. It starts with the relative pronoun who and has its own verb.',{0:'It does not tell why.',1:'It does not stand as the subject. The subject is The woman.',3:'It has its own verb (sells), so it is a clause, not a phrase.'}),
   M('b3p3','phrase',`<b>3.</b> ${U('That she was late')} annoyed the teacher.<br>What is the underlined part?`,['Adverbial clause of time','Noun clause (subject)','Relative clause','Object of a preposition'],1,'What annoyed the teacher? That she was late. It does the job of a noun and is the subject.',{0:'It does not tell when.',2:'It does not modify a noun.',3:'There is no preposition in front of it.'}),
   M('b3p4','phrase',`<b>4.</b> He lives ${U('in a small village')}.<br>What is the <b>function</b> of the underlined part?`,['Direct object','Adverbial of place','Subject complement','Apposition'],1,'Lives where? In a small village. Its structure is a prepositional phrase, and its function is adverbial of place.',{0:'Lives does not take an object here. It is followed by a place.',2:'Lives is not a linking verb.',3:'It does not rename another noun.'}),
   M('b3p5','phrase',`<b>5.</b> ${U('The new student from Kaduna')} speaks Hausa.<br>What is the underlined part?`,['A noun phrase used as subject','A noun clause','An adverbial clause','A prepositional phrase'],0,'It is a group of words built around the noun student, with no verb of its own. It tells who speaks.',{1:'There is no subject-verb pair inside it.',2:'It does not tell when, why or how.',3:'The whole phrase does not begin with a preposition (only from Kaduna does).'}),
   M('b3p6','phrase',`<b>6.</b> She became ${U('very famous')}.<br>What is the <b>function</b> of the underlined part?`,['Direct object','Adverbial of manner','Subject complement','Object complement'],2,'Became is a linking verb. Very famous describes she, the subject.',{0:'Became does not take an object.',1:'It does not tell how she became.',3:'There is no object before it.'}),
   M('b3p7','phrase',`<b>7.</b> I wonder ${U('whether he will come')}.<br>What is the underlined part?`,['Relative clause','Adverbial clause of time','Noun clause (object)','Prepositional phrase'],2,'Wonder what? Whether he will come. It acts as the object of wonder.',{0:'It does not describe a noun.',1:'It does not tell when.',3:'It has its own subject and verb.'}),
   M('b3p8','phrase',`<b>8.</b> We left ${U('although it was raining')}.<br>What is the underlined part?`,['Noun clause','Relative clause','Adverbial clause','Adjectival phrase'],2,'It has its own subject and verb and adds information about the leaving. It is an adverbial clause (of concession).',{0:'It does not name a thing.',1:'It does not describe a noun.',3:'It has its own verb, so it is a clause.'})
  ],'Choose the best answer.'))
]);

/* ================= B4: EXAM TECHNIQUE ================= */
var TECH_WORKED=[
 {q:`The boy ${U('who won the race')} is my cousin.`,tag:'Example 1',a:'Relative (adjectival) clause, modifying “the boy”.',st:['Read the whole sentence.','The underlined words have a verb (won) and a subject (who).','They tell which boy.','Answer: relative (adjectival) clause.']},
 {q:`She promised ${U('that she would come early')}.`,tag:'Example 2',a:'Noun clause, object of “promised”.',st:['Promised what? That she would come early.','It has its own subject (she) and verb (would come).','Answer: noun clause, direct object of promised.']},
 {q:`We waited ${U('until the rain stopped')}.`,tag:'Example 3',a:'Adverbial clause of time.',st:['Waited when? Until the rain stopped.','It has its own subject (the rain) and verb (stopped).','Answer: adverbial clause of time.']},
 {q:`${U('Our new teacher')} has arrived.`,tag:'Example 4',a:'Noun phrase, subject.',st:['Find the verb: has arrived.','Who has arrived? Our new teacher.','Answer: subject (a noun phrase).']},
 {q:`The principal gave ${U('the prefects')} new badges.`,tag:'Example 5',a:'Indirect object.',st:['Find the verb: gave.','What was given? New badges (direct object).','Who received them? The prefects. They come before the direct object.','Answer: indirect object.']},
 {q:`They made Tunde ${U('the leader')}.`,tag:'Example 6',a:'Object complement.',st:['Verb: made. Object: Tunde.','The leader tells what Tunde was made. It renames the object.','Answer: object complement.']},
 {q:`Ngozi, ${U('a brilliant student')}, won the prize.`,tag:'Example 7',a:'Apposition, to “Ngozi”.',st:['Two noun phrases are side by side with commas: Ngozi and a brilliant student.','They mean the same person. No verb joins them.','Answer: in apposition to Ngozi.']},
 {q:`He spoke ${U('with great confidence')}.`,tag:'Example 8',a:'Adverbial of manner (a prepositional phrase).',st:['Spoke how? With great confidence.','Answer: adverbial of manner.']},
 {q:`The school is ${U('in the heart of the town')}.`,tag:'Example 9',a:'Adverbial of place (a prepositional phrase).',st:['Where is the school? In the heart of the town.','Answer: adverbial of place.']},
 {q:`${U('Because the road was flooded')}, the bus did not move.`,tag:'Example 10',a:'Adverbial clause of reason.',st:['The bus did not move why? Because the road was flooded.','It has its own subject (the road) and verb (was flooded).','Answer: adverbial clause of reason.']}
];
SEC('b4','Part B: Grammatical function','How to answer function questions in WAEC and JAMB','A step-by-step method you can use under exam pressure.',[
 SC('The method',
  STP(['<b>Read the complete sentence.</b> Do not judge the words on their own.','<b>Identify the underlined word or expression.</b>','<b>Decide what it is doing.</b> Is it naming the doer? Receiving the action? Telling when, where, how or why?','<b>Look at its relationship with the verb and the other parts.</b> Find the verb first.','<b>State the grammatical function.</b>','<b>Give the type</b> of adverbial or clause where necessary: adverbial of time? adverbial clause of reason?']),
  TIP('<b>Never answer with a word class when the question asks for a function.</b> Do not write “noun” for “What is the function of…?”. Write subject, object, complement, adverbial and so on.')),
 SC('Ten exam-style examples',
  P('Try each underlined expression yourself, then check the reasoning.'),
  WK('Exam-style examples',TECH_WORKED)),
 SC('Practice: function questions',
  P('Ten questions. Think about the <b>job</b> of the underlined part.'),
  QZ('b4-p','Function practice','live',[
   M('b4p1','function',`<b>1.</b> ${U('My cousin')} lives in Kano.<br>Function of the underlined words?`,['Subject','Direct object','Adverbial of place','Subject complement'],0,'Who lives in Kano? My cousin.',{1:'Lives takes no object here.',2:'The place is in Kano.',3:'Lives is not a linking verb.'}),
   M('b4p2','function',`<b>2.</b> The teacher praised ${U('the pupils')}.<br>Function of the underlined words?`,['Subject','Indirect object','Direct object','Object complement'],2,'Praised whom? The pupils. They receive the action.',{0:'The teacher is the subject.',1:'There is only one object here.',3:'Nothing describes the pupils.'}),
   M('b4p3','function',`<b>3.</b> Mother made ${U('us')} a cake.<br>Function of the underlined word?`,['Indirect object','Direct object','Subject complement','Adverbial of manner'],0,'The cake is made for us. Us comes before the direct object a cake.',{1:'The direct object is a cake.',2:'Made is not a linking verb here.',3:'Us does not tell how.'}),
   M('b4p4','function',`<b>4.</b> The boy is ${U('very intelligent')}.<br>Function of the underlined words?`,['Direct object','Subject complement','Adverbial of manner','Apposition'],1,'Is links the boy to very intelligent. It describes the subject.',{0:'Is does not take an object.',2:'It describes the boy. It does not tell how something is done.',3:'It does not rename a noun beside it.'}),
   M('b4p5','function',`<b>5.</b> The jury declared the man ${U('innocent')}.<br>Function of the underlined word?`,['Subject complement','Object complement','Adverbial of manner','Indirect object'],1,'Innocent describes the man, who is the object of declared.',{0:'It describes the object, not the subject.',2:'It does not tell how they declared.',3:'It is not a receiver of the man.'}),
   M('b4p6','function',`<b>6.</b> The match was postponed ${U('because of the rain')}.<br>Function of the underlined words?`,['Adverbial of time','Adverbial of place','Adverbial of reason','Apposition'],2,'Postponed why? Because of the rain.',{0:'It does not tell when.',1:'It does not tell where.',3:'It does not rename a noun.'}),
   M('b4p7','function',`<b>7.</b> They arrived ${U('at six o’clock')}.<br>Function of the underlined words?`,['Adverbial of time','Adverbial of place','Adverbial of manner','Direct object'],0,'Arrived when? At six o’clock.',{1:'At six o’clock is a time, not a place.',2:'It does not tell how.',3:'Arrived does not take an object.'}),
   M('b4p8','function',`<b>8.</b> The meeting began ${U('in the hall')}.<br>Function of the underlined words?`,['Adverbial of time','Adverbial of place','Object of a preposition','Subject'],1,'Began where? In the hall. (The hall alone is the object of the preposition in.)',{0:'It does not tell when.',2:'The object of the preposition is only the hall. The whole phrase is an adverbial of place.',3:'The subject is The meeting.'}),
   M('b4p9','function',`<b>9.</b> He walked ${U('slowly')}.<br>What is the <b>function</b> of the underlined word?`,['Adverb','Adverbial of manner','Subject complement','Direct object'],1,'Adverb is the word class. Its function is adverbial of manner (walked how?).',{0:'Adverb is the word class. The question asks for the function.',2:'Walked is not a linking verb.',3:'Walked does not take an object here.'}),
   M('b4p10','function',`<b>10.</b> Dr Bello, ${U('a famous surgeon')}, opened the clinic.<br>Function of the underlined words?`,['Subject','Apposition','Direct object','Subject complement'],1,'A famous surgeon renames Dr Bello and has no verb joining them. It is in apposition.',{0:'The subject is Dr Bello.',2:'The clinic is the object.',3:'There is no linking verb.'})
  ],'Choose the best answer. If wrong, read the feedback and try again.'))
]);
