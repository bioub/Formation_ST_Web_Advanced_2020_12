const fs = require("fs-extra");
const path = require("path");
const chalk = require("chalk");
const { minify } = require("terser");
const crypto = require("crypto");

const distPath = path.resolve(__dirname, "dist");
const srcPath = path.resolve(__dirname, "src");
const horlogeJsPath = path.resolve(srcPath, "js", "horloge.js");
const indexJsPath = path.resolve(srcPath, "js", "index.js");
const indexHtmlPath = path.resolve(srcPath, "index.html");
const indexHtmlDistPath = path.resolve(distPath, "index.html");
const appJsDistPath = path.resolve(distPath, "app.js");

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv))
  .option("minify", { type: "boolean", default: false })
  .option("hash", { type: "boolean", default: false }).argv;

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

async function rmAndMkdir() {
  await fs.remove(distPath);
  await fs.mkdir(distPath);
}

async function buildJs() {
  // const bufferHorloge = await fs.readFile(horlogeJsPath);
  // const bufferIndex = await fs.readFile(indexJsPath);

  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  // await fs.appendFile(appJsDistPath, buffers[0]);
  // await fs.appendFile(appJsDistPath, buffers[1]);

  await fs.writeFile(appJsDistPath, Buffer.concat(buffers));
}

async function buildHtml() {
  let content = await fs.readFile(indexHtmlPath, { encoding: "utf-8" });

  content = content.replace(
    /<script.*<\/script>/s,
    '<script src="app.js"></script>'
  );

  await fs.writeFile(indexHtmlDistPath, content);
}

async function minifyJs() {
  const content = await fs.readFile(appJsDistPath, { encoding: "utf-8" });
  await fs.remove(appJsDistPath);

  const { code } = await minify(content);

  await fs.writeFile(appJsDistPath, code);
}

async function hashJs() {
  const content = await fs.readFile(appJsDistPath, { encoding: "utf-8" });
  const hash = crypto
    .createHash("md5")
    .update(content)
    .digest("hex")
    .slice(0, 7);
  await fs.remove(appJsDistPath);
  await fs.writeFile(appJsDistPath.replace(".js", `.${hash}.js`), content);

  let contentIndex = await fs.readFile(indexHtmlDistPath, {
    encoding: "utf-8",
  });

  contentIndex = contentIndex.replace(
    '<script src="app.js"></script>',
    `<script src="app.${hash}.js"></script>`
  );
  await fs.remove(indexHtmlDistPath);
  await fs.writeFile(indexHtmlDistPath, contentIndex);
}

async function build() {
  await rmAndMkdir();
  console.log(chalk.cyan("dist created"));
  await Promise.all([buildJs(), buildHtml()]);
  console.log(chalk.cyan("build js and html done"));

  if (argv.minify) {
    await minifyJs();
    console.log(chalk.cyan("minification done"));
  }

  if (argv.hash) {
    await hashJs();
    console.log(chalk.cyan("hash done"));
  }

  console.log(chalk.bgGreen("Build DONE"));
}

build();
