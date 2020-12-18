// Variable d'environnement
// évitez de relire plusieurs fois la même variable
// factoriser dans un fichier config.js
console.log(process.env.PATH);


console.log(process.uptime());
console.log(process.memoryUsage());
console.log(process.cpuUsage());

process.exit(1); // 0 si tout va bien, autre en cas d'erreur