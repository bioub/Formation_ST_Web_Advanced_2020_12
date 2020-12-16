// 'use strict';
globalThis.name = 'Georges';

const contact = {
  name: 'Romain',
};

function hello(p1, p2) {
  // this === globalThis en mode sloppy
  // ou undefined en mode strict
  console.log(`Hello ${p1}, ${p2}, my name is ${this.name}`);
} 

// const functionRef = hello;
// functionRef();

// call et apply appellent la fonction en forçant la valeur de this
hello.call(contact, 'Jean', 'Paul');
hello.apply(contact, ['Jean', 'Paul']);
hello.call(contact, ...['Jean', 'Paul']);

// bind créé une nouvelle fonction en forçant la valeur de this
const helloContact = hello.bind(contact);
helloContact('Jean', 'Paul');



class Contact {
  constructor() {
    this.hello = function() {
      console.log('Bonjour');
    };
  }
  hello() {
    console.log('Hello');
  }
}

const romain = new Contact();
romain.hello();



Contact.prototype.hello.call(romain);