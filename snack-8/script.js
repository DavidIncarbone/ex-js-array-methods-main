const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

const MarcoLanci = students.filter((student) => student.name === "Marco Lanci");
const MarcoClass = MarcoLanci[0].class;
console.log(MarcoClass);

// oppure

const marcoLanci = students.find((student) => student.name === "Marco Lanci");
const marcoClass = marcoLanci.class;
console.log(marcoClass);




