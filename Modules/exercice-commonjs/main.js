'use strict';

const Jeu = require('./jeu');

const game = new Jeu({
  max: 120
});
game.jouer();
