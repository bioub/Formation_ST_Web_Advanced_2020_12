// function setTimeout(cb, delay) {

//   // BLOQUER LE THREAD PENDANT DELAY MS
//   // ABSURDE LE NAVIGATEUR NE POURRA PAS DESSINER
//   const debut = Date.now();
//   while (debut + delay > Date.now());

//   cb();
// }

// setTimeout(() => console.log('A'), 1000);
// console.log('FIN');

function pause(delay) {
  // BLOQUER LE THREAD PENDANT DELAY MS
  // ABSURDE LE NAVIGATEUR NE POURRA PAS DESSINER
  const debut = Date.now();
  while (debut + delay > Date.now());
}

pause(1000);
console.log('A');
console.log('FIN');