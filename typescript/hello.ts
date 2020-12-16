const prenoms = ['Romain', 'Eric', 'Frédéric'];

function hello(name: string) {
  return `Hello ${name.toUpperCase()} !`;
}

for (const p of prenoms) {
  console.log(hello(p));
}
