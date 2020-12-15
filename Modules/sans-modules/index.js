'use strict';

const clockEl = document.querySelector('#horloge');
const clock = new Clock(clockEl);
clock.start();

window.addEventListener('load', () => {
  // window est prêt :
  // DOM est prêt, les resources ont chargés (scripts, images, css)
});

document.addEventListener('DOMContentLoaded', () => {
  // DOM est prêt
});