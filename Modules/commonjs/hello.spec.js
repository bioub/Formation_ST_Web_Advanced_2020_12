const chalk = require('chalk'); // node_modules/chalk
const assert = require('assert'); // binaire de node
const { hello } = require('./hello'); // hello.js du projet (toujours ./ ou ../ en préfixe)

console.log(chalk.blue('Test de la fonction hello'));

try {
  assert.strictEqual(hello('Romain'), 'Hello Romain !'); 
  console.log(chalk.green('hello OK'));
}
catch (err) {
  console.log(chalk.red('hello ERROR'));
  process.exit(1);
}