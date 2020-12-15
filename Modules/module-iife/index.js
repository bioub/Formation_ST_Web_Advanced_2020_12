// IIFE :
// Immediately Invoked Function Expression
(function (Clock) {
  'use strict';

  const clockEl = document.querySelector('#horloge');
  const clock = new Clock(clockEl);
  clock.start();
}(STMicroelectronics.Core.Clock));