const fs = require('fs');
const { createGzip } = require('zlib');

// ReadStream : en lecture (méthode read)
// ex: fs.createReadStream, process.stdin

// WriteSteam : en écriture (méthode write)
// ex: fs.createWriteStream, process.stdout et process.stderr

// DuplexStream : en lecture/écriture (méthodes read/write)
// ex: socket

// TransformStream : DuplexStream qui transforme entre la lecture et l'écriture (méthodes read/write)
// ex: createGzip

// fs.createReadStream('source.txt', {encoding: 'utf-8'}).on('data', (chunk) => {
//   console.log(chunk);
// });

fs.createReadStream('source.txt')
  .pipe(process.stdout);

fs.createReadStream('source.txt')
  .pipe(createGzip())
  .pipe(fs.createWriteStream('dest.zip'));

// .pipe est équivalent pipes shell (|, >, >>...)
// cat source.txt | gzip > dest.zip

// const fd = fs.open('source.txt');
// fs.read(fs, )