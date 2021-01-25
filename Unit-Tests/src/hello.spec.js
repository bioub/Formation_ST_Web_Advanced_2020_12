// const assert = require('assert');
const { hello } = require('./hello');

// la fonction hello est une fonction pure
// - prédictive, avec des paramètres donnés on peut prédire le retour
// - elle ne modifie pas ses paramètres
// - elle n'a de side-effect (pas d'appel externe)

test('Test de la fonction hello', () => {
  // Style TDD (Test Driven Development)
  // assert.strictEqual(hello('Romain'), 'Hello Romain !');

  // Style BDD (Behavior Driven Development)
  expect(hello('Romain')).toEqual('Hello Romain !'); 
});