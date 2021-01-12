const express = require('express');

const app = express();

// all => quelque soit la méthode HTTP
// app.all('/', (req, res) => {

// });

// * => la méthode HTTP correspondant
// get, post, put, delete, head, trace, patch, options
// app.get('/', (req, res) => {});
// app.post('/', (req, res) => {});
// app.delete('/', (req, res) => {});
// app.put('/', (req, res) => {});
// app.patch('/', (req, res) => {});

// Home page
app.get('/', (req, res) => {
  // res.send pour répondre en HTML
  res.send('<h2>Home</h2>');

  // res.redirect pour créer une redirect response
  // res.render pour utiliser un moteur de template
  // res.sendFile pour retourner un fichier 
  // res.json pour répondre

  // TOUTES ces méthodes appellent .end();
  // DONC finir par l'appel de ces méthodes
});

// Pour répondre en JSON
app.get('/api/hello', (req, res) => {

  // penser au return sur du code conditionnel
  // if (test) {
  //   res.statusCode = 404; // version node http
  //   res.status(404); // version express
  //   return res.json();
  // }

  // res.json pour répondre en JSON
  res.json({
    msg: 'Hello'
  });
});

// Route avec paramètres
app.get('/api/hello/:name', (req, res) => {
  const name = req.params.name;

  res.json({
    msg: 'Hello ' + name,
  });
});


// ATTENTION à ne pas oublier express.json() (body-parser)
app.post('/api/user/register', express.json(),(req, res) => {
  const user = req.body;

  // TODO écrire dans la DB
  res.json(user);
});


app.listen(3000, () => {
  console.log('server started');
});