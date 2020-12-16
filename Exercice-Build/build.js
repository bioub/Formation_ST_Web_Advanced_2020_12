const fs = require('fs-extra');
const path = require('path');
const md5 = require('md5');
const { minify } = require('terser');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

// fs-extra, est un bibliothèque qui hérite de fs
// les méthodes de fs existent :
// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html

// fs-extra ajoute des méthodes plus haut niveau :
// https://github.com/jprichardson/node-fs-extra

// Sur la partie promise
// avec fs on écrirait
// fs.promises.readFile().then()

// mais avec fs-extra
// fs.readFile().then()

// si vous utiliser un callback vous n'aurez plus la promesses
// fs.readFile('source.txt', () => {}) // donc pas de .then() possible
