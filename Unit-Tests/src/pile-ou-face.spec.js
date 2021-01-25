const { pileOuFace } = require('./pile-ou-face');

test('Test de la fonction pileOuFace', () => {
  const backupRandom = Math.random;

  Math.random = () => 0.75; // Monkey Patch
  expect(pileOuFace()).toEqual('pile');
  
  Math.random = backupRandom;
});