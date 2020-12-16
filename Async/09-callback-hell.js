const fs = require("fs");

// Dans l'API fs de Node
// On a 3 versions de chaque fonction
// synchrone
// fs.readFileSync
// asynchrone basée sur des callbacks (fonction de rappel)
// fs.readFile
// asynchrone basée sur des promises (promesse)
// fs.promises.readFile

// synchrone
// LE THREAD EST BLOQUE LE TEMPS QUE LE FICHIER SOIT LU
// const data = fs.readFileSync('source.txt', { encoding: 'utf-8' });
// console.log(data);

try {
  const data = fs.readFileSync("source.txt", { encoding: "utf-8" });
  fs.writeFileSync("dest.txt", data);
  console.log("COPY DONE");
} catch (err) {
  console.log(err);
}

// ^
// |
// |
// |try { readFileSync xxx -  writeFileSync xxxxxx - log }
// +--------------------------fichier lu-------------fichier écrit-->

// asynchrone basée sur des callbacks (fonction de rappel)
// LE THREAD EST LIBRE DE FAIRE AUTRE CHOSE LE TEMPS QUE LE FICHIER SOIT LU

// callback hell / pyramid of doom
// callbackhell.com
// fs.readFile('source.txt', { encoding: 'utf-8' }, (err, data) => {
//   console.log(data);
// });

fs.readFile("source.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile("dest.txt", data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("COPY DONE");
      }
    });
  }
});

// ^
// |
// |                            writeFile              log
// |try { readFile } ...        =>        ...          =>
// +----------------------------fichier lu-------------fichier écrit-->

// asynchrone basée sur des promises (promesse)
// fs.promises.readFile('source.txt', { encoding: 'utf-8' })
//   .then((data) => console.log(data));

// Dans fs c'est possible depuis Node 12

fs.promises.readFile('source.txt', { encoding: 'utf-8' })
   .then((data) => fs.promises.writeFile("dest.txt", data))
   .then(() => console.log("COPY DONE"))
   .catch((err) => console.log(err));

// ECMAScript 2017 async function (async / await)
// si vos APIs sont basés sur des promesses
async function copy() {
  try {
    const data = await fs.promises.readFile("source.txt", { encoding: "utf-8" });
    await fs.promises.writeFile("dest.txt", data);
    console.log("COPY DONE");
  } catch (err) {
    console.log(err);
  }
}

copy();
// console.log('juste après le premier await');