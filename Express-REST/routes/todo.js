const express = require('express');

const authenticate = require('../middlewares/authenticate');
const todoCtrl = require('../controllers/todo');

const router = express.Router();

// GET /api/todos
router.get('/',
  todoCtrl.list,
);

// GET /api/todos/134
router.get('/:id',
  todoCtrl.show,
);

// POST /api/todos
router.post('/',
  authenticate,
  // hasRole('ADMIN'),
  express.json(), // parse body si l'entete Content-type vaut application/json
  todoCtrl.add
);

router.delete('/:id',
  authenticate,
  todoCtrl.delete,
);

router.put('/:id',
  authenticate,
  express.json(),
  todoCtrl.replace,
);

module.exports = router;
