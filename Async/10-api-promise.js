// classe Promise apparu en ES2015
// avant 2015 on pouvait utiliser des libs :
// - bluebird
// - q

const fs = require("fs");

// 4 méthodes statiques
// Promise.all
// Promise.race
// Promise.resolve
// Promise.reject
// 2 nouvelles en cours de normalisation
// Promise.allSettled, Promise.any

// 1 constructeur
// const promise = new Promise();

// 3 méthodes de l'objet
// promise.then
// promise.catch
// ES2017 -> promise.finally

// basée sur des callbacks
// setTimeout(() => {
//   console.log('1s');
// }, 1000);

// objectif : créer une fonction timeout basée sur des promesses

function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // appel le callback du prochain .then
      resolve();

      // appel le callback du prochain .catch
      // reject();
    }, delay);
  });
}

timeout(1000).then(() => console.log("1s"));

async function readFileUpper() {
  const source = await fs.promises.readFile("source.txt", {
    encoding: "utf-8",
  });

  return source.toUpperCase();
}

// readFileUpper().then((sourceUp) => console.log(sourceUp));

const originalReadFile = fs.promises.readFile;

// fs.promises.readFile = function() {
//   // const promise = new Promise((resolve) => {
//   //   resolve('test');
//   // });
//   // return promise;
//   // return Promise.resolve('test');
//   return Promise.reject(new Error('TestError'))
// };

fs.promises.readFile = async function() {
  return 'test';
};

(async () => {
  try {
    const sourceUp = await readFileUpper();
    console.log(sourceUp); // TEST
  }
  catch (err) {
    console.log(err.message)
  }
})();


// (async () => {
//   await timeout(1000);
//   console.log('1s')
// })();

// Prochainement : norme Top Level Await (je pense pour 2021)
// Voir le github du TC39
// await timeout(1000);
// console.log('1s');


// Promise.all

function fakeAjax(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // appel le callback du prochain .then
      resolve(url);

      // appel le callback du prochain .catch
      // reject();
    }, Math.random() * 1000);
  });
}

// fakeAjax('/user').then((url) => console.log(url));
// fakeAjax('/todo').then((url) => console.log(url));

//  fs.promises.rmdir();
//  fs.promises.mkdir();
// Promise.all
// combine plusieurs promises en une
// appelée sur la dernière / la plus longue
Promise.all([
  fakeAjax('/user'),
  fakeAjax('/todo'),
]).then(([urlUser, urlTodo]) => {
  console.log(urlUser, urlTodo);
})

// Promise.race
// combine plusieurs promises en une
// appelée sur la première / la plus courte
// Promise.race([
//   fakeAjax('/user'),
//   timeout(200),
// ]).then((user) => {
//   console.log(urlUser, urlTodo);
// })

// Marble graph
// un tiret vaut 50ms
// fakeAjax     : -------(res)
// fakeAjax     : -----(res)
// fakeAjax     : -------------(res)
// timeout(200) : ----(timeout)

// Promise.race(fakeAjax, timeout)
// -------(res)
// ----(timeout)
// result combiné :
// ----(timeout)

// Promise.race(fakeAjax, timeout)
// --(res)
// ----(timeout)
// result combiné :
// --(res)

// Promise.all([fakeAjax, timeout])
// -------(res)
// ----(timeout)
// result combiné :
// -------([res, timeout])