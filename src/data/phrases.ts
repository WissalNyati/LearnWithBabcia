import { Phrase } from '../types';

export const phrases: Phrase[] = [
  {
    id: '1',
    english: 'What\'s your name?',
    french: 'Comment tu t\'appelles ?',
    audioSrc: '/audio/appel.mp3',
    category: 'Introduction'
  },
  {
    id: '2',
    english: 'My name is Haider.',
    french: 'Je m\'appelle Haider.',
    audioSrc: '/audio/haider.mp3',
    category: 'Introduction'
  },
  {
    id: '3',
    english: 'How old are you?',
    french: 'Quel âge as-tu ?',
    audioSrc: '/audio/quelle age.mp3',
    category: 'Personal Information'
  },
  {
    id: '4',
    english: 'I am 11 years old.',
    french: 'J\'ai 11 ans.',
    audioSrc: '/audio/jai 11.mp3',
    category: 'Personal Information'
  },
  {
    id: '5',
    english: 'What school are you in?',
    french: 'Dans quelle école es-tu ?',
    audioSrc: '/audio/dans quelle ecole.mp3',
    category: 'School'
  },
  {
    id: '6',
    english: 'I am at the school.',
    french: 'mon ecole sappelle.',
    audioSrc: '/audio/mon ecolle sappele.mp3',
    category: 'School'
  },
  {
    id: '7',
    english: 'I really like my school because it\'s big.',
    french: 'J\'aime beaucoup mon école parce qu\'elle est grande.',
    audioSrc: '/audio/tres grande.mp3',
    category: 'School'
  },
  {
    id: '8',
    english: 'I also do theatre, which I really like. Theatre allows me to play different characters and have fun with my classmates.',
    french: 'Je pratique aussi le théâtre que j\'aime beaucoup. Le théâtre me permet de jouer plusieurs personnages et de bien m\'amuser avec mes camarades.',
    audioSrc: '/audio/theatre.mp3',
    category: 'Activities'
  },
  {
    id: '9',
    english: 'I also love reading books of all kinds. At home, they call me the library mouse.',
    french: 'J\'aime aussi beaucoup lire des livres de toute catégorie. À la maison, on m\'appelle la souris de la bibliothèque.',
    audioSrc: '/audio/book mouse.mp3',
    category: 'Activities'
  },
  {
    id: '10',
    english: 'The classroom rules are simple. You must be on time and have your school supplies. To ask a question, I raise my hand. I answer calmly without shouting. I listen to the lesson and, if needed, I ask the teacher for explanations.',
    french: 'Les règles de la classe sont simples. Il faut être à l\'heure et avoir ses outils de travail. Pour poser une question, je lève la main. Je réponds posément sans crier. J\'écoute la leçon et si besoin, j\'interroge le maître pour des explications.',
    audioSrc: '/audio/regles.mp3',
    category: 'School Rules'
  },
  {
    id: '11',
    english: 'In my backpack, I have all my books and textbooks for studying. In my pencil case, I have pens, a pencil, an eraser, colored pencils, a ruler, and a compass.',
    french: 'Dans mon cartable, il y a tous mes livres et mes manuels pour travailler. Dans ma trousse, j\'ai des stylos, un crayon à papier, une gomme, des crayons de couleur, une règle et un compas.',
    audioSrc: '/audio/dans mon cartable.mp3',
    category: 'School Supplies'
  },
  {
    id: '12',
    english: 'What activity do you do at your school? I do a lot of sports and intellectual activities.',
    french: 'Quelle activité fais-tu dans ton école ? Je fais beaucoup d\'activités sportives et intellectuelles.',
    audioSrc: '/audio/qulle activite.mp3',
    category: 'Activities'
  },
  {
    id: '13',
    english: 'What is your favorite sport? My favorite sport is tennis. I practice it very seriously because I want to be a real professional.',
    french: 'Quel est ton sport préféré ? Mon sport préféré est le tennis. Je le pratique avec beaucoup de rigueur parce que je veux être un vrai professionnel.',
    audioSrc: '/audio/sports prefeere.mp3',
    category: 'Sports'
  },
  {
    id: '14',
    english: 'What is your favorite color? My favorite color is blue, but I also like many other colors.',
    french: 'Quelle est ta couleur préférée ? Ma couleur préférée est le bleu, mais j\'aime aussi beaucoup d\'autres couleurs.',
    audioSrc: '/audio/fav color.mp3',
    category: 'Preferences'
  },
  {
    id: '15',
    english: 'How do you prepare for your exams? I review my class notes and do language exercises with the help of my parents.',
    french: 'Comment te prépares-tu pour tes examens ? Je révisse mes leçons à prise en classe et je fais des exercices de langue avec l\'aide de mes parents.',
    audioSrc: '/audio/examprep.mp3',
    category: 'Study'
  },
  {
    id: '16',
    english: 'What do you do during the holidays? During the holidays, we travel as a family. We visit sites and museums that I find very interesting.',
    french: 'Que fais-tu pendant les vacances ? Pendant les vacances, nous partons en voyage en famille. Nous visitons les sites et les musées que je trouve très intéressantes.',
    audioSrc: '/audio/vacations.mp3',
    category: 'Holidays'
  }
];

export const categories: string[] = [
  'Introduction',
  'Personal Information',
  'School',
  'Activities',
  'School Rules',
  'School Supplies',
  'Sports',
  'Preferences',
  'Study',
  'Holidays'
];