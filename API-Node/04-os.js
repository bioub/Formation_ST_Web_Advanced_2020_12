
const os = require('os');
console.log(os.EOL); // \n sous Unix et \r\n sous Windows

console.log(os.platform());

console.log(os.uptime());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.cpus());