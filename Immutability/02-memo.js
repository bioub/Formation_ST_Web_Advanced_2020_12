const memo = require('memoizee');

let todos = (new Array(1_000_000)).fill({}).map(() => ({id: Math.random(), completed: false, title: 'RANDOM'}));

function countCompleted(todos) {
  return todos.filter(t => t.completed).length;
}

const memoizedCountCompleted = memo(countCompleted);

const map = new Map();

function memoizedCountCompleted(arg) {
  if (map.has(arg)) {
    return map.get(arg);
  }

  const result = countCompleted();

  map.set(arg, result);

  return result;
}

console.time('countCompleted');
console.log(memoizedCountCompleted(todos)); // créé un cache
console.timeEnd('countCompleted');


console.time('countCompleted');
console.log(memoizedCountCompleted(todos)); // utilise le cache
console.timeEnd('countCompleted');

// ancienParam === nouveauParam

// todos.push({id: Math.random(), completed: true, title: 'ABC'}); 
todos = [...todos, {id: Math.random(), completed: true, title: 'ABC'}];
console.time('countCompleted');
console.log(memoizedCountCompleted(todos)); // utilise le cache
console.timeEnd('countCompleted');

console.time('countCompleted');
console.log(memoizedCountCompleted(todos)); // utilise le cache
console.timeEnd('countCompleted');