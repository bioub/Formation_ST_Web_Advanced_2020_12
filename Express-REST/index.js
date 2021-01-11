const http = require('http');

const config = require('./config');
const app  = require('./app');

const mongoose = require('mongoose');

// création du Pool de connexion (5 connexion max par défaut)
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});


const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err.message);
});

server.listen(config.port, () => {
  console.log('Server started on port ' + config.port);
});
