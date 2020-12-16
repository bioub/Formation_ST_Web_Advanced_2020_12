const contact = {
  name: 'Romain',
};

function hello() {
  console.log(`Hello my name is ${this.name}`);
}

function bind(applyThis, originFct) {
  // applyThis est sauvegardé dans une closure
  return function() {
    originFct.call(applyThis);
  };
}

const helloContact = bind(contact, hello);
helloContact();
