const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url + ' ' + req.method);

  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.setHeader('Server', 'Node.js/Server Demo');
  res.write('Hello');
  res.end(); // obligatoire (en dernier) pour envoyer la réponse
});

server.on('error', (err) => {
  console.log('err', err);
});

server.listen(3000, () => {
  console.log('server started');
});