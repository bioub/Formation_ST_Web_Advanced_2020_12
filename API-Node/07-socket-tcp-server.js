const net = require('net');

const server = net.createServer();

server.on('error', (err) => {
  console.log('err', err);
});

server.once('listening', () => {
  console.log('server started');
});

server.on('connection', (socket) => {
  // streame la requete dans le terminal
  socket.pipe(process.stdout);

  // Reponse HTTP
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-type: text/plain\r\n');
  socket.write('Server: Node.js/Server\r\n');
  socket.write('\r\n');
  socket.write('Hello\r\n');
  socket.end('\r\n')
});

server.listen(3000);