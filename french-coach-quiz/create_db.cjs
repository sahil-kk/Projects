const fs = require('fs');

let idCounter = 1;
const questions = [];

function addQ(topic, question, options, correct, explanation) {
  questions.push({ id: idCounter++, topic, question, options, correct, explanation });
}

const hardcodedQuestions = [
  // SECTION 1: VERB CONJUGATION
  { topic: 'verbs', question: 'Fill in the blank: Je ______ au restaurant.', options: ['vais', 'va', 'allez', 'vont'], correct: 'vais', explanation: 'Conjugation of aller for Je.' },
  { topic: 'verbs', question: 'Fill in the blank: Nous ______ français.', options: ['parle', 'parlons', 'parles', 'parlent'], correct: 'parlons', explanation: 'Conjugation of parler for Nous.' },
  { topic: 'verbs', question: 'Fill in the blank: Elle ______ une robe.', options: ['porte', 'portes', 'portons', 'portent'], correct: 'porte', explanation: 'Conjugation of porter for Elle.' },
  { topic: 'verbs', question: 'Fill in the blank: Tu ______ étudiant ?', options: ['es', 'est', 'suis', 'sont'], correct: 'es', explanation: 'Conjugation of être for Tu.' },
  { topic: 'verbs', question: 'Fill in the blank: Ils ______ au cinéma.', options: ['vont', 'va', 'allez', 'vais'], correct: 'vont', explanation: 'Conjugation of aller for Ils.' },
  { topic: 'verbs', question: 'Fill in the blank: Nous ______ du café.', options: ['buvons', 'bois', 'boit', 'buvez'], correct: 'buvons', explanation: 'Conjugation of boire for Nous.' },
  { topic: 'verbs', question: 'Fill in the blank: Je ______ un livre.', options: ['lis', 'lit', 'lisons', 'lisez'], correct: 'lis', explanation: 'Conjugation of lire for Je.' },
  { topic: 'verbs', question: 'Fill in the blank: Vous ______ en France.', options: ['habitez', 'habite', 'habitent', 'habites'], correct: 'habitez', explanation: 'Conjugation of habiter for Vous.' },
  { topic: 'verbs', question: 'Fill in the blank: Elle ______ la télé.', options: ['regarde', 'regardes', 'regardons', 'regardez'], correct: 'regarde', explanation: 'Conjugation of regarder for Elle.' },
  { topic: 'verbs', question: 'Fill in the blank: Nous ______ une voiture.', options: ['avons', 'avez', 'a', 'ont'], correct: 'avons', explanation: 'Conjugation of avoir for Nous.' },
  { topic: 'verbs', question: 'Fill in the blank: Je ______ à l’école.', options: ['vais', 'va', 'allez', 'vont'], correct: 'vais', explanation: 'Conjugation of aller for Je.' },
  { topic: 'verbs', question: 'Fill in the blank: Tu ______ du sport.', options: ['fais', 'fait', 'faisons', 'faites'], correct: 'fais', explanation: 'Conjugation of faire for Tu.' },
  { topic: 'verbs', question: 'Fill in the blank: Ils ______ leurs devoirs.', options: ['font', 'fait', 'fais', 'faisons'], correct: 'font', explanation: 'Conjugation of faire for Ils.' },
  { topic: 'verbs', question: 'Fill in the blank: Elle ______ écrire.', options: ['peut', 'peux', 'pouvons', 'peuvent'], correct: 'peut', explanation: 'Conjugation of pouvoir for Elle.' },
  { topic: 'verbs', question: 'Fill in the blank: Nous ______ apprendre.', options: ['voulons', 'veut', 'veux', 'veulent'], correct: 'voulons', explanation: 'Conjugation of vouloir for Nous.' },
  { topic: 'verbs', question: 'Fill in the blank: Je ______ sortir.', options: ['veux', 'veut', 'voulons', 'voulez'], correct: 'veux', explanation: 'Conjugation of vouloir for Je.' },
  { topic: 'verbs', question: 'Fill in the blank: Tu ______ venir ?', options: ['peux', 'peut', 'pouvons', 'peuvent'], correct: 'peux', explanation: 'Conjugation of pouvoir for Tu.' },
  { topic: 'verbs', question: 'Fill in the blank: Il ______ lire.', options: ['doit', 'dois', 'devons', 'doivent'], correct: 'doit', explanation: 'Conjugation of devoir for Il.' },
  { topic: 'verbs', question: 'Fill in the blank: Nous ______ écrire.', options: ['devons', 'doit', 'dois', 'doivent'], correct: 'devons', explanation: 'Conjugation of devoir for Nous.' },
  { topic: 'verbs', question: 'Fill in the blank: Elles ______ partir.', options: ['veulent', 'veut', 'voulons', 'voulez'], correct: 'veulent', explanation: 'Conjugation of vouloir for Elles.' },

  // SECTION 2: ARTICLES
  { topic: 'articles', question: 'Fill in the blank: C’est ______ livre.', options: ['un', 'une', 'le', 'la'], correct: 'un', explanation: 'Livre is masculine singular.' },
  { topic: 'articles', question: 'Fill in the blank: C’est ______ fille.', options: ['un', 'une', 'le', 'du'], correct: 'une', explanation: 'Fille is feminine singular.' },
  { topic: 'articles', question: 'Fill in the blank: J’ai ______ amis.', options: ['des', 'du', 'de', 'les'], correct: 'des', explanation: 'Amis is plural indefinite.' },
  { topic: 'articles', question: 'Fill in the blank: Je mange ______ pain.', options: ['du', 'de', 'des', 'le'], correct: 'du', explanation: 'Pain is masculine mass noun, uses partitive du.' },
  { topic: 'articles', question: 'Fill in the blank: Elle boit ______ eau.', options: ['de l’', 'du', 'des', 'la'], correct: 'de l’', explanation: 'Eau starts with a vowel, uses partitive de l\'.' },
  { topic: 'articles', question: 'Fill in the blank: ______ garçon est intelligent.', options: ['Le', 'La', 'Les', 'Une'], correct: 'Le', explanation: 'Garçon is masculine singular.' },
  { topic: 'articles', question: 'Fill in the blank: ______ pommes sont rouges.', options: ['Les', 'Le', 'La', 'Un'], correct: 'Les', explanation: 'Pommes is plural.' },
  { topic: 'articles', question: 'Fill in the blank: Il a ______ voiture.', options: ['une', 'un', 'le', 'des'], correct: 'une', explanation: 'Voiture is feminine singular.' },
  { topic: 'articles', question: 'Fill in the blank: Nous avons ______ maison.', options: ['une', 'un', 'le', 'des'], correct: 'une', explanation: 'Maison is feminine singular.' },
  { topic: 'articles', question: 'Fill in the blank: Je vois ______ chien.', options: ['un', 'une', 'des', 'la'], correct: 'un', explanation: 'Chien is masculine singular.' },
  { topic: 'articles', question: 'Fill in the blank: Elle mange ______ chocolat.', options: ['du', 'de la', 'des', 'le'], correct: 'du', explanation: 'Chocolat is masculine mass noun, uses partitive du.' },
  { topic: 'articles', question: 'Fill in the blank: Nous buvons ______ lait.', options: ['du', 'des', 'de la', 'le'], correct: 'du', explanation: 'Lait is masculine mass noun, uses partitive du.' },
  { topic: 'articles', question: 'Fill in the blank: Il a ______ idée.', options: ['une', 'un', 'le', 'du'], correct: 'une', explanation: 'Idée is feminine singular.' },
  { topic: 'articles', question: 'Fill in the blank: ______ enfants jouent.', options: ['Les', 'Le', 'La', 'Un'], correct: 'Les', explanation: 'Enfants is plural.' },
  { topic: 'articles', question: 'Fill in the blank: C’est ______ école.', options: ['une', 'un', 'le', 'des'], correct: 'une', explanation: 'École is feminine singular.' },

  // SECTION 3: ADJECTIVES
  { topic: 'adjectives', question: 'Fill in the blank: Elle est ______ (beau).', options: ['belle', 'beau', 'beaux', 'belles'], correct: 'belle', explanation: 'Feminine singular of beau is belle.' },
  { topic: 'adjectives', question: 'Fill in the blank: Ils sont ______ (grand).', options: ['grands', 'grand', 'grande', 'grandes'], correct: 'grands', explanation: 'Masculine plural of grand.' },
  { topic: 'adjectives', question: 'Fill in the blank: Elle est ______ (petit).', options: ['petite', 'petit', 'petits', 'petites'], correct: 'petite', explanation: 'Feminine singular of petit.' },
  { topic: 'adjectives', question: 'Fill in the blank: Nous sommes ______ (jeune).', options: ['jeunes', 'jeune', 'jeuneses', 'jeun'], correct: 'jeunes', explanation: 'Plural of jeune.' },
  { topic: 'adjectives', question: 'Fill in the blank: Il est ______ (gros).', options: ['gros', 'grosse', 'groses', 'gross'], correct: 'gros', explanation: 'Masculine singular of gros.' },
  { topic: 'adjectives', question: 'Fill in the blank: Elles sont ______ (mince).', options: ['minces', 'mince', 'mincee', 'minceses'], correct: 'minces', explanation: 'Feminine plural of mince.' },
  { topic: 'adjectives', question: 'Fill in the blank: Tu es ______ (grand).', options: ['grand', 'grande', 'grands', 'grandes'], correct: 'grand', explanation: 'Assuming masculine singular grand.' },
  { topic: 'adjectives', question: 'Fill in the blank: Il est ______ (vieux).', options: ['vieux', 'vieille', 'vieus', 'vieilles'], correct: 'vieux', explanation: 'Masculine singular of vieux.' },
  { topic: 'adjectives', question: 'Fill in the blank: Elle est ______ (heureux).', options: ['heureuse', 'heureux', 'heureuses', 'heureuxs'], correct: 'heureuse', explanation: 'Feminine singular of heureux.' },
  { topic: 'adjectives', question: 'Fill in the blank: Nous sommes ______ (content).', options: ['contents', 'content', 'contente', 'contentes'], correct: 'contents', explanation: 'Masculine plural of content.' },
  { topic: 'adjectives', question: 'Fill in the blank: Ils sont ______ (petit).', options: ['petits', 'petit', 'petite', 'petites'], correct: 'petits', explanation: 'Masculine plural of petit.' },
  { topic: 'adjectives', question: 'Fill in the blank: Elle est ______ (rouge).', options: ['rouge', 'rouges', 'rouger', 'rouged'], correct: 'rouge', explanation: 'Feminine singular of rouge.' },
  { topic: 'adjectives', question: 'Fill in the blank: Les fleurs sont ______ (jaune).', options: ['jaunes', 'jaune', 'jauneses', 'jaun'], correct: 'jaunes', explanation: 'Feminine plural of jaune.' },
  { topic: 'adjectives', question: 'Fill in the blank: Le ciel est ______ (bleu).', options: ['bleu', 'bleue', 'bleus', 'bleues'], correct: 'bleu', explanation: 'Masculine singular of bleu.' },
  { topic: 'adjectives', question: 'Fill in the blank: Les livres sont ______ (vert).', options: ['verts', 'vert', 'verte', 'vertes'], correct: 'verts', explanation: 'Masculine plural of vert.' },

  // SECTION 4: PRONOUNS + BASICS
  { topic: 'greetings', question: 'Fill in the blank: ______ suis étudiant.', options: ['Je', 'Tu', 'Il', 'Nous'], correct: 'Je', explanation: 'Suis is for Je.' },
  { topic: 'greetings', question: 'Fill in the blank: ______ es française ?', options: ['Tu', 'Je', 'Il', 'Nous'], correct: 'Tu', explanation: 'Es is for Tu.' },
  { topic: 'greetings', question: 'Fill in the blank: ______ est professeur.', options: ['Il', 'Je', 'Nous', 'Tu'], correct: 'Il', explanation: 'Est is for Il/Elle.' },
  { topic: 'greetings', question: 'Fill in the blank: ______ sommes amis.', options: ['Nous', 'Je', 'Tu', 'Ils'], correct: 'Nous', explanation: 'Sommes is for Nous.' },
  { topic: 'greetings', question: 'Fill in the blank: ______ êtes prêts ?', options: ['Vous', 'Je', 'Il', 'Nous'], correct: 'Vous', explanation: 'Êtes is for Vous.' },
  { topic: 'greetings', question: 'Fill in the blank: ______ sont contents.', options: ['Ils', 'Je', 'Tu', 'Nous'], correct: 'Ils', explanation: 'Sont is for Ils/Elles.' },
  { topic: 'greetings', question: 'Replace with pronoun: Sophie et Marie → ______', options: ['Elles', 'Ils', 'Nous', 'Vous'], correct: 'Elles', explanation: 'Two females = Elles.' },
  { topic: 'greetings', question: 'Replace with pronoun: Pierre → ______', options: ['Il', 'Elle', 'Nous', 'Vous'], correct: 'Il', explanation: 'Pierre is male singular.' },
  { topic: 'greetings', question: 'Replace with pronoun: Marie → ______', options: ['Elle', 'Il', 'Ils', 'Nous'], correct: 'Elle', explanation: 'Marie is female singular.' },
  { topic: 'greetings', question: 'Replace with pronoun: Pierre et moi → ______', options: ['Nous', 'Ils', 'Vous', 'Je'], correct: 'Nous', explanation: 'Someone and me = Nous.' },
  { topic: 'greetings', question: 'Replace with pronoun: Toi et moi → ______', options: ['Nous', 'Vous', 'Ils', 'Je'], correct: 'Nous', explanation: 'You and me = Nous.' },
  { topic: 'greetings', question: 'Replace with pronoun: Les garçons → ______', options: ['Ils', 'Elles', 'Nous', 'Vous'], correct: 'Ils', explanation: 'Plural masculine = Ils.' },
  { topic: 'greetings', question: 'Replace with pronoun: Les filles → ______', options: ['Elles', 'Ils', 'Nous', 'Vous'], correct: 'Elles', explanation: 'Plural feminine = Elles.' },
  { topic: 'greetings', question: 'Replace with pronoun: Mon frère et moi → ______', options: ['Nous', 'Ils', 'Vous', 'Je'], correct: 'Nous', explanation: 'My brother and me = Nous.' },
  { topic: 'greetings', question: 'Replace with pronoun: Tu et Paul → ______', options: ['Vous', 'Nous', 'Ils', 'Je'], correct: 'Vous', explanation: 'You and Paul = Vous.' },

  // SECTION 5: MIXED
  { topic: 'verbs', question: 'Fill in the blank: Je ______ une pomme.', options: ['mange', 'manges', 'mangeons', 'mangez'], correct: 'mange', explanation: 'Conjugation of manger for Je.' },
  { topic: 'verbs', question: 'Fill in the blank: Nous ______ à Paris.', options: ['habitons', 'habite', 'habites', 'habitent'], correct: 'habitons', explanation: 'Conjugation of habiter for Nous.' },
  { topic: 'verbs', question: 'Fill in the blank: Elle ______ du lait.', options: ['boit', 'bois', 'buvons', 'buvez'], correct: 'boit', explanation: 'Conjugation of boire for Elle.' },
  { topic: 'verbs', question: 'Fill in the blank: Ils ______ à l’école.', options: ['vont', 'va', 'vais', 'allez'], correct: 'vont', explanation: 'Conjugation of aller for Ils.' },
  { topic: 'verbs', question: 'Fill in the blank: Tu ______ un stylo.', options: ['as', 'a', 'avons', 'avez'], correct: 'as', explanation: 'Conjugation of avoir for Tu.' },
  { topic: 'verbs', question: 'Fill in the blank: Nous ______ une maison.', options: ['avons', 'avez', 'a', 'ont'], correct: 'avons', explanation: 'Conjugation of avoir for Nous.' },
  { topic: 'verbs', question: 'Fill in the blank: Elle ______ étudiante.', options: ['est', 'suis', 'es', 'sont'], correct: 'est', explanation: 'Conjugation of être for Elle.' },
  { topic: 'verbs', question: 'Fill in the blank: Ils ______ contents.', options: ['sont', 'est', 'suis', 'es'], correct: 'sont', explanation: 'Conjugation of être for Ils.' },
  { topic: 'verbs', question: 'Fill in the blank: Je ______ fatigué.', options: ['suis', 'es', 'est', 'sommes'], correct: 'suis', explanation: 'Conjugation of être for Je.' },
  { topic: 'verbs', question: 'Fill in the blank: Vous ______ en classe.', options: ['êtes', 'est', 'suis', 'es'], correct: 'êtes', explanation: 'Conjugation of être for Vous.' },
  { topic: 'verbs', question: 'Fill in the blank: Elle ______ une chanson.', options: ['chante', 'chantes', 'chantons', 'chantez'], correct: 'chante', explanation: 'Conjugation of chanter for Elle.' },
  { topic: 'verbs', question: 'Fill in the blank: Nous ______ le français.', options: ['apprenons', 'apprend', 'apprends', 'apprenez'], correct: 'apprenons', explanation: 'Conjugation of apprendre for Nous.' },
  { topic: 'verbs', question: 'Fill in the blank: Il ______ au marché.', options: ['va', 'vais', 'allons', 'allez'], correct: 'va', explanation: 'Conjugation of aller for Il.' },
  { topic: 'verbs', question: 'Fill in the blank: Tu ______ le livre.', options: ['lis', 'lit', 'lisons', 'lisez'], correct: 'lis', explanation: 'Conjugation of lire for Tu.' },
  { topic: 'verbs', question: 'Fill in the blank: Elles ______ des fleurs.', options: ['aiment', 'aime', 'aimons', 'aimez'], correct: 'aiment', explanation: 'Conjugation of aimer for Elles.' },

  // LONG SENTENCES
  { topic: 'verbs', question: 'Fill in the blank: Je ______ au restaurant avec mes amis le dimanche.', options: ['vais', 'va', 'allez', 'vont'], correct: 'vais', explanation: 'Conjugation of aller for Je.' },
  { topic: 'verbs', question: 'Fill in the blank: Nous ______ du café et du pain le matin.', options: ['mangeons', 'mange', 'manges', 'mangent'], correct: 'mangeons', explanation: 'Conjugation of manger for Nous.' },
  { topic: 'verbs', question: 'Fill in the blank: Elle ______ une robe rouge et elle ______ très belle.', options: ['porte / est', 'portes / es', 'portons / sommes', 'portent / sont'], correct: 'porte / est', explanation: 'Conjugations for Elle.' },
  { topic: 'verbs', question: 'Fill in the blank: Tu ______ à l’école à 8 heures tous les jours.', options: ['vas', 'va', 'allez', 'vont'], correct: 'vas', explanation: 'Conjugation of aller for Tu.' },
  { topic: 'verbs', question: 'Fill in the blank: Ils ______ au cinéma après leurs cours.', options: ['vont', 'va', 'vais', 'allez'], correct: 'vont', explanation: 'Conjugation of aller for Ils.' },
  { topic: 'verbs', question: 'Fill in the blank: Je ______ un livre intéressant dans ma chambre.', options: ['lis', 'lit', 'lisons', 'lisez'], correct: 'lis', explanation: 'Conjugation of lire for Je.' },
  { topic: 'verbs', question: 'Fill in the blank: Nous ______ une grande maison avec un jardin.', options: ['avons', 'avez', 'a', 'ont'], correct: 'avons', explanation: 'Conjugation of avoir for Nous.' },
  { topic: 'verbs', question: 'Fill in the blank: Elle ______ du lait et ______ du chocolat.', options: ['boit / mange', 'bois / manges', 'buvons / mangeons', 'buvez / mangez'], correct: 'boit / mange', explanation: 'Conjugations for Elle.' },
  { topic: 'verbs', question: 'Fill in the blank: Vous ______ français et anglais à l’université.', options: ['étudiez', 'étudie', 'étudions', 'étudies'], correct: 'étudiez', explanation: 'Conjugation of étudier for Vous.' },
  { topic: 'verbs', question: 'Fill in the blank: Le garçon ______ intelligent mais ______ un peu paresseux.', options: ['est / est', 'suis / es', 'sommes / êtes', 'sont / sont'], correct: 'est / est', explanation: 'Conjugations for Le garçon (Il).' },
  { topic: 'verbs', question: 'Fill in the blank: Les filles ______ dans le parc et ______ au football.', options: ['jouent / jouent', 'joue / joue', 'jouons / jouons', 'jouez / jouez'], correct: 'jouent / jouent', explanation: 'Conjugations for Les filles (Elles).' },
  { topic: 'verbs', question: 'Fill in the blank: Je ______ à la piscine avec mon frère le samedi.', options: ['vais', 'va', 'allez', 'vont'], correct: 'vais', explanation: 'Conjugation of aller for Je.' },
  { topic: 'verbs', question: 'Fill in the blank: Nous ______ des livres et ______ la télévision le soir.', options: ['lisons / regardons', 'lis / regarde', 'lit / regardes', 'lisez / regardez'], correct: 'lisons / regardons', explanation: 'Conjugations for Nous.' },
  { topic: 'verbs', question: 'Fill in the blank: Elle ______ une petite maison mais elle ______ très jolie.', options: ['a / est', 'as / es', 'avons / sommes', 'ont / sont'], correct: 'a / est', explanation: 'Conjugations for Elle.' },
  { topic: 'verbs', question: 'Fill in the blank: Tu ______ du sport et ______ en bonne santé.', options: ['fais / es', 'fait / est', 'faisons / sommes', 'faites / êtes'], correct: 'fais / es', explanation: 'Conjugations for Tu.' },
  { topic: 'verbs', question: 'Fill in the blank: Ils ______ à Paris et ______ dans une école.', options: ['habitent / étudient', 'habite / étudie', 'habitons / étudions', 'habitez / étudiez'], correct: 'habitent / étudient', explanation: 'Conjugations for Ils.' },
  { topic: 'verbs', question: 'Fill in the blank: Je ______ une voiture et je ______ au travail tous les jours.', options: ['ai / vais', 'as / vas', 'avons / allons', 'avez / allez'], correct: 'ai / vais', explanation: 'Conjugations for Je.' },
  { topic: 'verbs', question: 'Fill in the blank: Vous ______ une question ?', options: ['avez', 'a', 'ont', 'avons'], correct: 'avez', explanation: 'Conjugation of avoir for Vous.' },
  { topic: 'verbs', question: 'Fill in the blank: Nous ______ le français et ______ les exercices.', options: ['apprenons / faisons', 'apprend / fait', 'apprends / fais', 'apprenez / faites'], correct: 'apprenons / faisons', explanation: 'Conjugations for Nous.' },
  { topic: 'verbs', question: 'Fill in the blank: Elle ______ au marché et ______ des fruits.', options: ['va / achète', 'vais / achètes', 'allons / achetons', 'allez / achetez'], correct: 'va / achète', explanation: 'Conjugations for Elle.' }
];

hardcodedQuestions.forEach(q => addQ(q.topic, q.question, q.options, q.correct, q.explanation));

// Long sentence generator for verbs
const verbs = [
  { inf: 'être', forms: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'], context: 'très content de te voir aujourd\'hui' },
  { inf: 'avoir', forms: ['ai', 'as', 'a', 'avons', 'avez', 'ont'], context: 'beaucoup de devoirs à faire ce soir' },
  { inf: 'aller', forms: ['vais', 'vas', 'va', 'allons', 'allez', 'vont'], context: 'au supermarché pour acheter des légumes' },
  { inf: 'faire', forms: ['fais', 'fais', 'fait', 'faisons', 'faites', 'font'], context: 'du vélo dans le grand parc de la ville' },
  { inf: 'parler', forms: ['parle', 'parles', 'parle', 'parlons', 'parlez', 'parlent'], context: 'avec le professeur après la classe de mathématiques' },
  { inf: 'manger', forms: ['mange', 'manges', 'mange', 'mangeons', 'mangez', 'mangent'], context: 'un délicieux croissant dans la boulangerie' },
  { inf: 'prendre', forms: ['prends', 'prends', 'prend', 'prenons', 'prenez', 'prennent'], context: 'le train de huit heures pour aller à Paris' },
  { inf: 'vouloir', forms: ['veux', 'veux', 'veut', 'voulons', 'voulez', 'veulent'], context: 'visiter le musée du Louvre pendant les vacances' }
];

const pronouns = ['Je', 'Tu', 'Il/Elle/On', 'Nous', 'Vous', 'Ils/Elles'];

verbs.forEach(v => {
  pronouns.forEach((p, i) => {
    let pDisplay = p;
    if (p === 'Je' && /^[aeiou]/i.test(v.forms[i])) pDisplay = "J'";
    else if (p === 'Je') pDisplay = 'Je';
    
    let wrong = v.forms.filter((_, idx) => idx !== i).slice(0, 3);
    while(wrong.length < 3) {
      wrong.push(v.forms[Math.floor(Math.random() * v.forms.length)] + "s");
    }
    
    let opts = [v.forms[i], ...wrong].sort(() => Math.random() - 0.5);
    
    let qText = `Fill in the blank: ${pDisplay} ______ ${v.context}. (${v.inf})`;
    addQ('verbs', qText, opts, v.forms[i], `The conjugation of ${v.inf} for ${p} is ${v.forms[i]}.`);
  });
});

// Long sentence generator for Prepositions
const prepLongQs = [
  { blank: 'Ma famille et moi, nous voyageons _____ France chaque été pour les vacances.', opts: ['en', 'au', 'à', 'aux'], a: 'en' },
  { blank: 'Le chat dort tranquillement _____ le canapé dans le salon.', opts: ['sur', 'sous', 'dans', 'devant'], a: 'sur' },
  { blank: 'Les enfants jouent au football _____ le grand parc derrière l\'école.', opts: ['dans', 'en', 'sur', 'à'], a: 'dans' },
  { blank: 'Mon père travaille _____ Paris, mais nous habitons en banlieue.', opts: ['à', 'en', 'au', 'dans'], a: 'à' },
  { blank: 'Nous allons _____ États-Unis pour rendre visite à mes grands-parents.', opts: ['aux', 'en', 'au', 'à'], a: 'aux' },
  { blank: 'Je préfère boire mon café _____ sucre et avec un peu de lait.', opts: ['sans', 'avec', 'pour', 'sur'], a: 'sans' },
  { blank: 'La pharmacie se trouve juste _____ la boulangerie et la banque.', opts: ['derrière', 'sur', 'dans', 'en'], a: 'derrière' }
];
prepLongQs.forEach(p => {
  addQ('prepositions', `Fill in the blank: ${p.blank}`, p.opts, p.a, `The correct preposition is "${p.a}".`);
});

// Long sentences for Articles
const artLongQs = [
  { blank: 'Marie achète toujours _____ pommes fraîches au marché le dimanche matin.', opts: ['des', 'les', 'de la', 'du'], a: 'des' },
  { blank: 'Dans le frigo, il y a _____ lait, du beurre et des œufs.', opts: ['du', 'de la', 'le', 'un'], a: 'du' },
  { blank: 'Nous avons adopté _____ petit chien noir de notre voisin.', opts: ['un', 'une', 'le', 'du'], a: 'un' },
  { blank: 'Est-ce que tu peux me passer _____ bouteille d\'eau, s\'il te plaît ?', opts: ['la', 'le', 'l\'', 'une'], a: 'la' },
  { blank: 'Ils n\'ont pas besoin de boire _____ vin avec le repas ce soir.', opts: ['de', 'du', 'des', 'le'], a: 'de' }
];
artLongQs.forEach(p => {
  addQ('articles', `Fill in the blank: ${p.blank}`, p.opts, p.a, `The correct article is "${p.a}".`);
});

const paddingQs = [
  { topic: 'colors', blank: 'La robe de Marie est _____ (red).', opts: ['rouge', 'rouges', 'bleu', 'vert'], a: 'rouge', exp: 'Robe is feminine singular.' },
  { topic: 'colors', blank: 'Les murs de la chambre sont _____ (white).', opts: ['blancs', 'blanches', 'blanc', 'blanche'], a: 'blancs', exp: 'Murs is masculine plural.' },
  { topic: 'colors', blank: 'Il a les yeux _____ (blue).', opts: ['bleus', 'bleu', 'bleues', 'bleue'], a: 'bleus', exp: 'Yeux is masculine plural.' },
  { topic: 'colors', blank: 'Je voudrais des chaussures _____ (black).', opts: ['noires', 'noirs', 'noir', 'noire'], a: 'noires', exp: 'Chaussures is feminine plural.' },
  { topic: 'numbers', blank: 'Mon frère a _____ (17) ans aujourd\'hui.', opts: ['dix-sept', 'dix-huit', 'seize', 'quinze'], a: 'dix-sept', exp: '17 is dix-sept.' },
  { topic: 'numbers', blank: 'Ce livre coûte _____ (45) euros.', opts: ['quarante-cinq', 'cinquante-quatre', 'quarante-quatre', 'trente-cinq'], a: 'quarante-cinq', exp: '45 is quarante-cinq.' },
  { topic: 'numbers', blank: 'Il y a _____ (60) minutes dans une heure.', opts: ['soixante', 'cinquante', 'soixante-dix', 'quatre-vingts'], a: 'soixante', exp: '60 is soixante.' },
  { topic: 'numbers', blank: 'Mon grand-père a _____ (80) ans.', opts: ['quatre-vingts', 'quatre-vingt', 'huitante', 'octante'], a: 'quatre-vingts', exp: '80 is quatre-vingts.' },
  { topic: 'numbers', blank: 'Nous sommes en l\'an deux mille _____ (24).', opts: ['vingt-quatre', 'vingt-trois', 'trente-quatre', 'quarante-deux'], a: 'vingt-quatre', exp: '24 is vingt-quatre.' },
  { topic: 'time', blank: 'Le train part à _____ (quarter past 2).', opts: ['deux heures et quart', 'deux heures le quart', 'deux heures moins le quart', 'deux heures et demie'], a: 'deux heures et quart', exp: 'Quarter past is et quart.' },
  { topic: 'time', blank: 'Il est midi et _____ (half).', opts: ['demi', 'demie', 'quart', 'et demie'], a: 'demi', exp: 'With midi, demi is masculine.' },
  { topic: 'time', blank: 'Nous dînons à 20h_____ (30).', opts: ['trente', 'vingt', 'quarante', 'dix'], a: 'trente', exp: '30 minutes is trente.' },
  { topic: 'health', blank: 'J\'ai de la fièvre et j\'ai mal à _____ (the head).', opts: ['la tête', 'le dos', 'le ventre', 'la gorge'], a: 'la tête', exp: 'Head is la tête.' },
  { topic: 'health', blank: 'Il a beaucoup marché, il a mal _____ (at the feet).', opts: ['aux pieds', 'au pieds', 'à les pieds', 'en pieds'], a: 'aux pieds', exp: 'Pieds is plural, so aux.' },
  { topic: 'health', blank: 'Elle ne peut pas manger, elle a mal _____ (at the teeth).', opts: ['aux dents', 'à la dent', 'au dent', 'en dents'], a: 'aux dents', exp: 'Dents is plural, so aux.' },
  { topic: 'health', blank: 'J\'ai trop mangé, j\'ai mal _____ (at the stomach).', opts: ['au ventre', 'à le ventre', 'à la ventre', 'aux ventre'], a: 'au ventre', exp: 'Ventre is masculine singular.' },
  { topic: 'adjectives', blank: 'C\'est une _____ (new) voiture.', opts: ['nouvelle', 'nouveau', 'nouvel', 'nouvelles'], a: 'nouvelle', exp: 'Voiture is feminine singular.' },
  { topic: 'adjectives', blank: 'Ils habitent dans un _____ (beautiful) appartement.', opts: ['bel', 'beau', 'belle', 'beaux'], a: 'bel', exp: 'Appartement is masculine but starts with a vowel, so bel.' },
  { topic: 'adjectives', blank: 'Ce sont de _____ (good) amis.', opts: ['bons', 'bon', 'bonnes', 'bonne'], a: 'bons', exp: 'Amis is masculine plural.' },
  { topic: 'adjectives', blank: 'La tour Eiffel est très _____ (tall/high).', opts: ['haute', 'haut', 'hautes', 'hauts'], a: 'haute', exp: 'Tour is feminine singular.' },
  { topic: 'nationalities', blank: 'Il vient de Tokyo, il est _____ (Japanese).', opts: ['japonais', 'japonaise', 'japonaises', 'japon'], a: 'japonais', exp: 'Masculine singular.' },
  { topic: 'nationalities', blank: 'Ma correspondante est _____ (Canadian).', opts: ['canadienne', 'canadien', 'canadiens', 'canadiennes'], a: 'canadienne', exp: 'Feminine singular.' },
  { topic: 'nationalities', blank: 'Ils habitent à Berlin, ils sont _____ (German).', opts: ['allemands', 'allemand', 'allemandes', 'allemande'], a: 'allemands', exp: 'Masculine plural.' },
  { topic: 'culture', blank: 'La Fête Nationale française est le _____ (July 14).', opts: ['14 juillet', '4 juillet', '1 mai', '25 décembre'], a: '14 juillet', exp: 'Bastille day is July 14th.' },
  { topic: 'culture', blank: 'Le Louvre est un célèbre _____ (museum) à Paris.', opts: ['musée', 'monument', 'château', 'jardin'], a: 'musée', exp: 'The Louvre is a museum.' },
  { topic: 'culture', blank: '_____ est une grande église située à Paris. (Notre-Dame)', opts: ['Notre-Dame', 'Le Sacré-Cœur', 'La Madeleine', 'Le Panthéon'], a: 'Notre-Dame', exp: 'Notre-Dame is a famous cathedral.' },
  { topic: 'days', blank: 'Le premier jour de la semaine est _____ (Monday).', opts: ['lundi', 'mardi', 'dimanche', 'jeudi'], a: 'lundi', exp: 'Monday is lundi.' },
  { topic: 'days', blank: 'Aujourd\'hui c\'est mardi, demain ce sera _____ (Wednesday).', opts: ['mercredi', 'jeudi', 'vendredi', 'lundi'], a: 'mercredi', exp: 'Wednesday is mercredi.' },
  { topic: 'months', blank: 'Noël est en _____ (December).', opts: ['décembre', 'novembre', 'janvier', 'octobre'], a: 'décembre', exp: 'December is décembre.' },
  { topic: 'months', blank: 'La Saint-Valentin est en _____ (February).', opts: ['février', 'mars', 'janvier', 'avril'], a: 'février', exp: 'February is février.' }
];

while (questions.length < 250) {
  let randQ = paddingQs[Math.floor(Math.random() * paddingQs.length)];
  addQ(randQ.topic, `Fill in the blank: ${randQ.blank}`, [...randQ.opts].sort(()=>Math.random()-0.5), randQ.a, randQ.exp);
}

const finalQuestions = questions.slice(0, 250);
const fileContent = 'export const questionBank = ' + JSON.stringify(finalQuestions, null, 2) + ';';
fs.writeFileSync('/Users/skk/Desktop/Xen-SKK/Projects/french-coach-quiz/src/data/questions.js', fileContent);
console.log('Successfully wrote ' + finalQuestions.length + ' questions!');
