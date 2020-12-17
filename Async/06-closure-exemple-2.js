const contact = {
  name: 'Romain',
};

function hello() {
  console.log(`Hello my name is ${this.name}`);
}

function bind(applyThis, originFct) {
  // applyThis est sauvegardé dans une closure
  return function(...args) {
    originFct.call(applyThis, ...args);
  };
}

const helloContact = bind(contact, hello);
helloContact();
