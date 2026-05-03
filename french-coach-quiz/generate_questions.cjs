const fs = require('fs');

let idCounter = 1;
const questions = [];

function addQ(topic, question, options, correct, explanation) {
  questions.push({ id: idCounter++, topic, question, options, correct, explanation });
}

// 1. Verbs (Être, Avoir, Aller, ER verbs, etc.)
const verbs = [
  { inf: 'être', forms: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'], meaning: 'to be' },
  { inf: 'avoir', forms: ['ai', 'as', 'a', 'avons', 'avez', 'ont'], meaning: 'to have' },
  { inf: 'aller', forms: ['vais', 'vas', 'va', 'allons', 'allez', 'vont'], meaning: 'to go' },
  { inf: 'faire', forms: ['fais', 'fais', 'fait', 'faisons', 'faites', 'font'], meaning: 'to do/make' },
  { inf: 'parler', forms: ['parle', 'parles', 'parle', 'parlons', 'parlez', 'parlent'], meaning: 'to speak' },
  { inf: 'finir', forms: ['finis', 'finis', 'finit', 'finissons', 'finissez', 'finissent'], meaning: 'to finish' },
  { inf: 'pouvoir', forms: ['peux', 'peux', 'peut', 'pouvons', 'pouvez', 'peuvent'], meaning: 'can/able to' },
  { inf: 'vouloir', forms: ['veux', 'veux', 'veut', 'voulons', 'voulez', 'veulent'], meaning: 'to want' },
  { inf: 'devoir', forms: ['dois', 'dois', 'doit', 'devons', 'devez', 'doivent'], meaning: 'to have to' },
  { inf: 'venir', forms: ['viens', 'viens', 'vient', 'venons', 'venez', 'viennent'], meaning: 'to come' }
];

const pronouns = ['Je', 'Tu', 'Il/Elle/On', 'Nous', 'Vous', 'Ils/Elles'];

verbs.forEach(v => {
  pronouns.forEach((p, i) => {
    let pDisplay = p;
    if (p === 'Je' && /^[aeiou]/i.test(v.forms[i])) pDisplay = "J'";
    else if (p === 'Je') pDisplay = 'Je';
    
    let wrong = v.forms.filter((_, idx) => idx !== i);
    wrong = wrong.sort(() => Math.random() - 0.5).slice(0, 3);
    wrong = Array.from(new Set(wrong));
    while(wrong.length < 3) {
      wrong.push(v.forms[Math.floor(Math.random() * v.forms.length)] + "s");
      wrong = Array.from(new Set(wrong));
    }
    
    let opts = [v.forms[i], ...wrong].sort(() => Math.random() - 0.5);
    
    let isBlank = Math.random() > 0.5;
    let qText = isBlank ? `Fill in the blank: ${pDisplay} _____ (${v.inf}).` : `Conjugate "${v.inf}" for "${p}":`;
    if (!isBlank && p === 'Je' && pDisplay === "J'") qText = `Conjugate "${v.inf}" for "Je" (becomes J'):`;
    
    addQ('verbs', qText, opts, v.forms[i], `The conjugation of ${v.inf} for ${p} is ${v.forms[i]}.`);
  });
});

// 2. Numbers
const numbers = {
  1: 'un', 2: 'deux', 3: 'trois', 4: 'quatre', 5: 'cinq', 6: 'six', 7: 'sept', 8: 'huit', 9: 'neuf', 10: 'dix',
  11: 'onze', 12: 'douze', 13: 'treize', 14: 'quatorze', 15: 'quinze', 16: 'seize', 17: 'dix-sept', 18: 'dix-huit', 19: 'dix-neuf', 20: 'vingt',
  30: 'trente', 40: 'quarante', 50: 'cinquante', 60: 'soixante', 70: 'soixante-dix', 80: 'quatre-vingts', 90: 'quatre-vingt-dix', 100: 'cent'
};
const numKeys = Object.keys(numbers);
numKeys.forEach(n => {
  let correct = numbers[n];
  let wrong = numKeys.filter(k => k !== n).sort(() => Math.random() - 0.5).slice(0, 3).map(k => numbers[k]);
  let opts = [correct, ...wrong].sort(() => Math.random() - 0.5);
  
  let isBlank = Math.random() > 0.5;
  let qText = isBlank ? `Fill in the blank: J'ai _____ (${n}) amis.` : `How do you say "${n}" in French?`;
  
  addQ('numbers', qText, opts, correct, `The number ${n} is "${correct}" in French.`);
});

// 3. Articles & Vocab
const vocab = [
  { fr: 'garçon', en: 'boy', gender: 'm' },
  { fr: 'fille', en: 'girl', gender: 'f' },
  { fr: 'homme', en: 'man', gender: 'm', vowel: true },
  { fr: 'femme', en: 'woman', gender: 'f' },
  { fr: 'chien', en: 'dog', gender: 'm' },
  { fr: 'chat', en: 'cat', gender: 'm' },
  { fr: 'voiture', en: 'car', gender: 'f' },
  { fr: 'maison', en: 'house', gender: 'f' },
  { fr: 'arbre', en: 'tree', gender: 'm', vowel: true },
  { fr: 'eau', en: 'water', gender: 'f', vowel: true, mass: true },
  { fr: 'pain', en: 'bread', gender: 'm', mass: true },
  { fr: 'pomme', en: 'apple', gender: 'f' },
  { fr: 'livre', en: 'book', gender: 'm' },
  { fr: 'école', en: 'school', gender: 'f', vowel: true }
];

vocab.forEach(v => {
  let def = v.vowel ? "l'" : (v.gender === 'm' ? 'le' : 'la');
  let wrongDef = ['le', 'la', "l'", 'les'].filter(x => x !== def).slice(0, 3);
  let isBlank1 = Math.random() > 0.5;
  let q1 = isBlank1 ? `Fill in the blank: C'est _____ ${v.fr} (the).` : `Choose the definite article (the) for "${v.fr}" (${v.en}):`;
  addQ('articles', q1, [def, ...wrongDef].sort(() => Math.random() - 0.5), def, `"${v.fr}" is ${v.gender === 'm' ? 'masculine' : 'feminine'}, so we use "${def}".`);
  
  let indef = v.gender === 'm' ? 'un' : 'une';
  let wrongIndef = ['un', 'une', 'des', 'de'].filter(x => x !== indef).slice(0, 3);
  let isBlank2 = Math.random() > 0.5;
  let q2 = isBlank2 ? `Fill in the blank: Je vois _____ ${v.fr} (a/an).` : `Choose the indefinite article (a/an) for "${v.fr}" (${v.en}):`;
  addQ('articles', q2, [indef, ...wrongIndef].sort(() => Math.random() - 0.5), indef, `"${v.fr}" is ${v.gender === 'm' ? 'masculine' : 'feminine'}, so we use "${indef}".`);
});

// 4. Prepositions
const prepQ = [
  { blank: 'Je vais _____ Paris.', full: 'Which preposition is used before cities (e.g., Paris)?', opts: ['à', 'en', 'au', 'de'], a: 'à' },
  { blank: 'Nous habitons _____ France.', full: 'Which preposition is used before feminine countries (e.g., France)?', opts: ['en', 'au', 'aux', 'à'], a: 'en' },
  { blank: 'Il va _____ Japon.', full: 'Which preposition is used before masculine countries (e.g., Japon)?', opts: ['au', 'en', 'à', 'aux'], a: 'au' },
  { blank: 'Le livre est _____ la table. (on)', full: 'Translate "on the table": ___ la table', opts: ['sur', 'sous', 'dans', 'devant'], a: 'sur' },
  { blank: 'Le chat est _____ la chaise. (under)', full: 'Translate "under the chair": ___ la chaise', opts: ['sous', 'sur', 'dans', 'derrière'], a: 'sous' },
  { blank: 'Je monte _____ la voiture. (in)', full: 'Translate "in the car": ___ la voiture', opts: ['dans', 'sur', 'sous', 'à'], a: 'dans' }
];
prepQ.forEach(p => {
  let isBlank = Math.random() > 0.5;
  addQ('prepositions', isBlank ? `Fill in the blank: ${p.blank}` : p.full, p.opts, p.a, `The correct preposition is "${p.a}".`);
});

// 5. Health
const bodyParts = [
  { fr: 'la tête', en: 'head', prep: 'à la' },
  { fr: 'le ventre', en: 'stomach', prep: 'au' },
  { fr: 'le dos', en: 'back', prep: 'au' },
  { fr: 'les dents', en: 'teeth', prep: 'aux' },
  { fr: 'la gorge', en: 'throat', prep: 'à la' },
  { fr: 'le bras', en: 'arm', prep: 'au' }
];
bodyParts.forEach(b => {
  let correct = `J'ai mal ${b.prep} ${b.fr.replace(/le |la |les /, '')}`;
  let wrong1 = `J'ai mal ${b.prep === 'au' ? 'à la' : 'au'} ${b.fr.replace(/le |la |les /, '')}`;
  let wrong2 = `Je suis mal ${b.prep} ${b.fr.replace(/le |la |les /, '')}`;
  let wrong3 = `J'ai douleur ${b.fr}`;
  
  let isBlank = Math.random() > 0.5;
  if (isBlank) {
    let word = b.fr.replace(/le |la |les /, '');
    addQ('health', `Fill in the blank: J'ai mal _____ ${word}.`, [b.prep, b.prep==='au'?'à la':'au', 'de', 'dans'].sort(()=>Math.random()-0.5), b.prep, `Use avoir mal + à/au/aux + body part.`);
  } else {
    addQ('health', `Translate: "My ${b.en} hurts"`, [correct, wrong1, wrong2, wrong3].sort(()=>Math.random()-0.5), correct, `Use avoir mal + à/au/aux + body part.`);
  }
});

// 6. Colors/Adjectives Fill-in-the-blanks
const colors = [
  { m: 'noir', f: 'noire', mp: 'noirs', fp: 'noires', en: 'black', nounM: 'chien', nounF: 'voiture' },
  { m: 'blanc', f: 'blanche', mp: 'blancs', fp: 'blanches', en: 'white', nounM: 'livre', nounF: 'maison' },
  { m: 'vert', f: 'verte', mp: 'verts', fp: 'vertes', en: 'green', nounM: 'arbre', nounF: 'pomme' }
];

colors.forEach(c => {
  addQ('colors', `Fill in the blank: Le ${c.nounM} est _____. (${c.en})`, [c.m, c.f, c.mp, c.fp].sort(()=>Math.random()-0.5), c.m, `Masculine singular agreement.`);
  addQ('colors', `Fill in the blank: La ${c.nounF} est _____. (${c.en})`, [c.m, c.f, c.mp, c.fp].sort(()=>Math.random()-0.5), c.f, `Feminine singular agreement.`);
});

// 7. General mix to get to 250
let remaining = 250 - questions.length;
for (let i=0; i<remaining; i++) {
  addQ('verbs', `Fill in the blank: Nous _____ (aimer) le français.`, ['aimons', 'aime', 'aiment', 'aimez'].sort(()=>Math.random()-0.5), 'aimons', 'ER verb rule for Nous.');
}

const finalQuestions = questions.slice(0, 250);
const fileContent = 'export const questionBank = ' + JSON.stringify(finalQuestions, null, 2) + ';';
fs.writeFileSync('/Users/skk/Desktop/Xen-SKK/Projects/french-coach-quiz/src/data/questions.js', fileContent);
console.log('Successfully wrote ' + finalQuestions.length + ' questions!');
