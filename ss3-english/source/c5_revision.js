/* ================= E: REVISION AND SUPPORT ================= */
var MISTAKES=[
 {t:'Passive',w:'He was hit by <s>she</s>.',r:'He was hit by <b>her</b>.',why:'After by you need the object form of the pronoun: me, you, him, her, it, us, them.',tip:'Say the pronoun as if it followed a verb: hit her, not hit she.'},
 {t:'Passive',w:'Active: Ada is cooking rice. Passive: <s>Rice was cooked by Ada.</s>',r:'Rice <b>is being cooked</b> by Ada.',why:'The tense changed. Present continuous must stay present continuous.',tip:'Write the tense name above the active verb before you start. Then check it again at the end.'},
 {t:'Passive',w:'<s>The letter written by Ibrahim.</s>',r:'The letter <b>was written</b> by Ibrahim.',why:'The verb be is missing. A passive needs be + past participle.',tip:'Every passive sentence has a form of be before the participle.'},
 {t:'Passive',w:'The window was <s>broke</s> by the boy.',r:'The window was <b>broken</b> by the boy.',why:'After be you need the past participle, not the past tense.',tip:'Learn the three forms of common irregular verbs: break – broke – broken.'},
 {t:'Passive',w:'<s>The bus was arrived by the students.</s>',r:'No passive is possible. Say: The students arrived by bus.',why:'Arrive has no object, so it cannot become passive.',tip:'Look for an object first. No object means no passive.'},
 {t:'Passive',w:'The police were arrested by the thief. (for: The police arrested the thief.)',r:'The thief <b>was arrested</b> by the police.',why:'The doer and the receiver were swapped. The meaning is reversed.',tip:'After writing, say aloud: who did it? Check it is the same person.'},
 {t:'Reported',w:'Musa said that <s>“he was hungry.”</s>',r:'Musa said that he was hungry.',why:'Reported speech has no quotation marks.',tip:'Delete the quotation marks as the first step.'},
 {t:'Reported',w:'Musa said that <s>I</s> was hungry.',r:'Musa said that <b>he</b> was hungry.',why:'The pronoun I must change to match the person who spoke.',tip:'Circle every pronoun in the direct speech and ask who it refers to.'},
 {t:'Reported',w:'He said that he <s>is</s> tired. (in an exam)',r:'He said that he <b>was</b> tired.',why:'When the reporting verb is past, the tense moves one step back.',tip:'Look at your list of tense changes before you write.'},
 {t:'Reported',w:'She <s>said me</s> that she was ready.',r:'She <b>told me</b> that she was ready.',why:'Said cannot be followed directly by a person.',tip:'Said to me or told me. Never said me.'},
 {t:'Reported',w:'He asked <s>where was I going</s>.',r:'He asked <b>where I was going</b>.',why:'A reported question uses statement order.',tip:'Reported questions are statements. The subject comes before the verb.'},
 {t:'Reported',w:'He asked <s>that where</s> I lived.',r:'He asked <b>where</b> I lived.',why:'Never put that in front of a question word.',tip:'Reported questions use if, whether or the question word. Never that.'},
 {t:'Reported',w:'He said that he would come <s>tomorrow</s>.',r:'He said that he would come <b>the next day</b>.',why:'Time words change in reported speech.',tip:'Underline tomorrow, yesterday, now, here, this and last before you write.'},
 {t:'Function',w:'Function of <u class="ul">the boy</u> in <em>She saw the boy</em>: <s>noun</s>.',r:'<b>Direct object</b>.',why:'Noun is the word class. The question asked for the function.',tip:'If the question says function, the answer is never a word class.'},
 {t:'Function',w:'<u class="ul">after the bell rang</u> is an <s>adverb</s>.',r:'It is an <b>adverbial clause of time</b>.',why:'A group of words with its own subject and verb is a clause, not a word.',tip:'Look for a subject and verb inside the underlined part. If you find them, it is a clause.'},
 {t:'Function',w:'In <em>She is a doctor</em>, <u class="ul">a doctor</u> is the <s>direct object</s>.',r:'It is a <b>subject complement</b>.',why:'Be does not take an object. A doctor describes she.',tip:'Test: does the word after the verb mean the same as the subject? Then it is a complement.'},
 {t:'Function',w:'In <em>She gave the boy a book</em>, <u class="ul">the boy</u> is the <s>direct object</s>.',r:'It is the <b>indirect object</b>.',why:'The book is what is given. The boy receives it.',tip:'Ask what is given first (direct object). The person who receives it is the indirect object.'}
];
SEC('e1','Part E: Revision and support','Common examination mistakes','Seventeen mistakes and how to avoid them.',[
 SC('Passive voice mistakes',{t:'mk',items:MISTAKES.filter(function(x){return x.t==='Passive'})}),
 SC('Reported speech mistakes',{t:'mk',items:MISTAKES.filter(function(x){return x.t==='Reported'})}),
 SC('Grammatical function mistakes',{t:'mk',items:MISTAKES.filter(function(x){return x.t==='Function'})})
]);

SEC('e2','Part E: Revision and support','Quick revision sheets','Seven summary tables. Screenshot or copy them into your exercise book.',[
 SC('1. Active vs passive voice',
  TB(['','Active voice','Passive voice'],[
   ['<b>Focus</b>','The doer','The receiver'],
   ['<b>Pattern</b>','Doer + verb + receiver','Receiver + be + past participle (+ by doer)'],
   ['<b>Example</b>','Ada cooked the food.','The food was cooked by Ada.'],
   ['<b>Rule 1</b>','Tense stays the same','Tense stays the same'],
   ['<b>Rule 2</b>','Needs an object to become passive','Doer can be left out'],
   ['<b>Rule 3</b>','—','After by use him, her, them, me, us']
  ])),
 SC('2. Direct vs reported speech',
  TB(['','Direct speech','Reported speech'],[
   ['<b>Meaning</b>','Exact words','What was said'],
   ['<b>Punctuation</b>','Quotation marks','No quotation marks'],
   ['<b>Example</b>','Musa said, “I am hungry.”','Musa said that he was hungry.'],
   ['<b>Changes</b>','—','pronouns, tenses, time and place words'],
   ['<b>Questions</b>','“Where do you live?”','asked where I lived (statement order, no that)'],
   ['<b>Commands</b>','“Sit down.”','told … to sit down']
  ])),
 SC('3. Common tense changes',
  TB(['Direct','Reported'],[
   ['simple present','simple past'],['present continuous','past continuous'],['present perfect','past perfect'],['simple past','past perfect'],
   ['will','would'],['can','could'],['may','might'],['must','had to (or must)']
  ])),
 SC('4. Pronoun changes',
  TB(['Direct','Reported','Rule'],[
   ['I','he / she','the speaker'],['we','they','the speaker and others'],['my','his / her','the speaker'],['our','their','the speaker group'],
   ['you / your','I, he, she, they … / my, his, her, their …','the listener'],['he / she / they','no change','third person']
  ])),
 SC('5. Time and place changes',
  TB(['Direct','Reported'],[
   ['today','that day'],['now','then'],['tonight','that night'],['yesterday','the day before / the previous day'],['tomorrow','the next day / the following day'],
   ['last week','the previous week / the week before'],['next week','the following week / the week after'],['here','there'],['this / these','that / those'],['ago','before']
  ])),
 SC('6. Grammatical functions',
  TB(['Function','Question to ask','Example'],[
   ['Subject','Who or what + verb?','<u class="ul">Ngozi</u> sings.'],
   ['Direct object','Verb + what or whom?','Tola kicked <u class="ul">the ball</u>.'],
   ['Indirect object','To or for whom? (before the direct object)','She gave <u class="ul">the boy</u> a book.'],
   ['Subject complement','Describes or renames the subject after a linking verb','He is <u class="ul">a teacher</u>.'],
   ['Object complement','Describes or renames the object','They elected Musa <u class="ul">captain</u>.'],
   ['Adverbial of time','When?','We left <u class="ul">yesterday</u>.'],
   ['Adverbial of place','Where?','They play <u class="ul">outside</u>.'],
   ['Adverbial of manner','How?','She spoke <u class="ul">softly</u>.'],
   ['Adverbial of reason','Why?','He stayed <u class="ul">because he was ill</u>.'],
   ['Object of a preposition','What follows the preposition?','beside <u class="ul">the teacher</u>'],
   ['Apposition','Another noun phrase renaming it, with no verb between','Mr Ade, <u class="ul">our principal</u>, spoke.'],
   ['Adjunct','Optional extra. Can it be removed?','He ran <u class="ul">quickly</u>.']
  ])),
 SC('7. Phrases and clauses',
  TB(['Structure','Example','Usual function'],[
   ['Noun phrase','the tall boy from Kano','subject, object, complement'],
   ['Prepositional phrase','under the table','adverbial or adjectival'],
   ['Adjectival phrase','very tired','complement, or describes a noun'],
   ['Adverbial phrase','very quickly','adverbial'],
   ['Noun clause','that he passed','subject, object, complement'],
   ['Adverbial clause','after the bell rang','time, reason, concession …'],
   ['Relative clause','who lives next door','describes a noun']
  ]))
]);
SEC('e3','Part E: Revision and support','Revise my weak topics','See which topics need more work.',[SC('Your results',{t:'revise'})]);
SEC('e4','Part E: Revision and support','Teacher’s answer key','Correct answers and explanations for every question.',[SC('Teacher’s answer key',{t:'key'})]);
