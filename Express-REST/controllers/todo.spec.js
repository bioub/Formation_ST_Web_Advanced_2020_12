/*
Exercice
En vous inspirant de middleware/authenticate.spec.js
et de routes/todo.spec.js
Ecrire le test unitaire du controleur list
Il faudra comme dans routes/todo.spec.js faire le mock de la
 méthode find.
*/
const todoCtrl = require("./todo.js");
const Todo = require('../models/todo');

jest.mock('../models/todo');

test('todoCtrl.list call res.json on success', async () => {
  Todo.find.mockResolvedValueOnce([{_id: 1, title: 'A', completed: false}]);
  const req = {}; // Request Express
  const res = {
    json: jest.fn(),
  }; // Response Express
  const next = jest.fn(); // NextFunction Express
  await todoCtrl.list(req, res, next);

  expect(res.json).toHaveBeenCalledWith([{id: 1, title: 'A', completed: false}]);
});

test('todoCtrl.list call next(err) on error', async () => {
  Todo.find.mockRejectedValueOnce(new Error('find error'));

  const req = {}; // Request Express
  const res = {}; // Response Express
  const next = jest.fn(); // NextFunction Express
  await todoCtrl.list(req, res, next);
  expect(next).toHaveBeenCalledWith(new Error('find error'));
});


