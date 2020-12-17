const fs = require("fs");

function logger(msg, type = "DEBUG", file = "logs/app.log") {
  const line = `[${type}] ${Date.now()} - ${msg}\n`;

  return fs.promises.appendFile(file, line);
}

fs.promises
  .access("logs")
  .catch((err) => {
    if (err.code === "ENOENT") {
      return fs.promises.mkdir("logs");
    }
    throw err;
  })
  .then(() => logger("Ligne 1"))
  .then(() => logger("Ligne 2"))
  .then(() => logger("Ligne 3"))
  .catch((err) => console.log(err));

async function ensureDir() {
  try {
    await fs.promises.access("logs");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.promises.mkdir("logs");
    }
    throw err;
  }
}

async function log3lines() {
  try {
    try {
      await fs.promises.access("logs");
    } catch (err) {
      if (err.code === "ENOENT") {
        await fs.promises.mkdir("logs");
      }
      throw err;
    }

    await logger("Ligne 1");
    await logger("Ligne 2");
    await logger("Ligne 3");
  } catch (err) {
    console.log(err);
  }
}

// ou avec une fonction
async function log3lines() {
  try {
    await ensureDir();

    await logger("Ligne 1");
    await logger("Ligne 2");
    await logger("Ligne 3");
  } catch (err) {
    console.log(err);
  }
}

log3lines();
