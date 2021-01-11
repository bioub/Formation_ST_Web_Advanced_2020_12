const express = require('express');

const authenticate = require('../middlewares/authenticate');
const todoCtrl = require('../controllers/todo');

const router = express.Router();

router.get('/',
  todoCtrl.list,
);

router.get('/:id',
  todoCtrl.show,
);

router.post('/',
  authenticate,
  // hasRole('ADMIN'),
  express.json(),
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
