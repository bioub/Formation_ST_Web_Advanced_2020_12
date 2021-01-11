const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const todoRoutes = require('./routes/todo');
const userRoutes = require('./routes/user');

const app = express();

// Log Middleware
app.use(morgan('dev'));
// app.use((req, res, next) => {
//   console.log(req.method + ' ' + req.url);
//   next();
// });

// GET /api/todos   | POST /api/users/login | GET /api/todos/1234567    | GET /api/other
//    morgan        |      morgan           |         morgan            |     morgan
//      ↓ next      |        ↓ next         |       ↓ next              |     ↓ next
//     cors         |       cors            |      cors                 |     cors
//      ↓ next      |        ↓ next         |       ↓ next              |     ↓ next
// list ⥇ res.json |    bodyParser.json     |    show (todo not found)  |               |     notFound ⥇ res.json
//                           ↓ next         |       ↓ next              |
//                      login ⥇ res.json   |     notFound ⥇ res.json   |

// CORS Middleware (cross-domain requests)
// Cross Origin Resource Sharing
app.use(cors()); // Access-Control-Allow-Origin: *

// Routes
app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);

// eslint-disable-next-line no-unused-vars
app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  res.json({
    msg: req.notFoundReason || 'Not Found',
  });
});

// eslint-disable-next-line no-unused-vars
app.use('/api', (err, req, res, next) => {
  res.statusCode = 500;
  res.json({
    msg: err.message,
  });
});

module.exports = app;
