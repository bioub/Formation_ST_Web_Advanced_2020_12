// principale limitation les promesses
// ne fonctionnent pour des callbacks appelés plusieurs fois

// function interval(delay) {
//   return new Promise((resolve) => {
//     setInterval(() => {
//       resolve();
//     }, delay);
//   });
// }

// interval(1000).then(() => console.log("1s"));

// 4 solutions

// - Continuer d'utiliser les callbacks
// - Node Stream
const fs = require("fs");
fs.createReadStream("source.txt")
  .pipe(fs.createWriteStream("dest.txt"));

// - Observable (lib: rxjs)
// proposé au TC39 (stage 1)
const { Observable } = require('rxjs');

function interval(delay) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, delay);
  });
}

interval(1000).subscribe(() => console.log('1s'));

// - async iterator (ES2017)
// combine promise + generator (yield)
