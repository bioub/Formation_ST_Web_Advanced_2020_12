const data = [
  { id: 123, name: 'Pierre' },
  { id: 456, name: 'Paul' },
  { id: 789, name: 'Jacques' }
];

// data[0].name = data[0].name.toUpperCase();
// const newData = [
//   {...data[0], name: data[0].name.toUpperCase()},
//   ...data.slice(1),
// ];

// newData est un nouveau tableau en mémoire
// qui contient des nouveaux objets return ({})
// avec les clés/valeurs précédent ({...v})
// et la name remplacé par v.name.toUpperCase()
const newData = data.map((v) => ({...v, name: v.name.toUpperCase()}));
console.log(newData !== data); // true
console.log(newData[0] !== data[0]); // true

const newData2 = data.map((v) => {
  v.name = v.name.toUpperCase(); // modifie l'objet d'origine
  // à la fois dans data et newData2
  return v;
});
console.log(newData2 !== data); // true
console.log(newData2[0] !== data[0]); // false (c'est le même objet)