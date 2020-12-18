const net = require('net');

const socket = net.connect(80, 'example.org');

socket.once('connect', () => {
  // streame la reponse dans le terminal
  socket.pipe(process.stdout);

  // Requete HTTP
  socket.write('GET / HTTP/1.1\r\n');
  socket.write('Host: example.org\r\n');
  socket.write('User-agent: Node.js/Bot\r\n');
  socket.end('\r\n');
});

