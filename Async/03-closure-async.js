globalThis.globalScope = 'globale';

const moduleScope = 'module';
function externe() {
  const closureScope = 'closure';
  function interne() {
    const localScope = 'locale';
    console.log(localScope);
    console.log(closureScope);
    console.log(moduleScope);
    console.log(globalScope);
  }
  setTimeout(interne, 1000);
}

externe();
console.log('FIN');

// ^
// |
// |
// |externe ..↻..        interne
// +---------------------1s----->