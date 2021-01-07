const path = require('path');

const zipPath = "../API-Node/dest.zip";

console.log(path.extname(zipPath)); // .zip
console.log(path.basename(zipPath)); // dest.zip
console.log(path.dirname(zipPath)); // ../API-Node

console.log(path.parse(zipPath));
/*
{
  root: '',
  dir: '../API-Node',
  base: 'dest.zip',
  ext: '.zip',
  name: 'dest'
}
*/

const dirPath = 'API-Node';
const filePath = 'dest.zip';

console.log(path.join('..', dirPath, filePath)); // url relative assemble et simplifie (avec le bon séparateur)
console.log(path.resolve('..', dirPath, filePath)); // url absolue (par rapport au CWD) assemble et simplifie (avec le bon séparateur)

console.log(process.cwd()); // Current Working Dir (où vous trouvez dans le terminal)

// Bonnes pratiques pour faire référence à un fichier
// 1/ générer le chemin absolu à l'aide de __dirname :
// /Users/romain/Desktop/Formation_ST_Web_Advanced_2020_12/API-Node
console.log(path.resolve(__dirname, '..', dirPath, filePath)); // assemble et simplifie (avec le bon séparateur)

// 2/ placer le CWD dans __dirname
process.chdir(__dirname);
console.log(path.resolve('..', dirPath, filePath)); // assemble et simplifie (avec le bon séparateur)

