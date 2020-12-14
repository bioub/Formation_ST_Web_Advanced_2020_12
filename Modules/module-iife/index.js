// IIFE :
// Immediately Invoked Function Expression
(function () {
  'use strict';

  const clockEl = document.querySelector('#horloge');
  const clock = new Clock(clockEl);
  clock.start();
}());