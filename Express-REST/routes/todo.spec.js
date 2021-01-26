const request = require('supertest');
const app = require('../app');
const Todo = require('../models/todo');

jest.mock('../models/todo');

test('GET /api/todos', async () => {
  // Todo.find.mockImplementationOnce(() => Promise.resolve([{_id: 1, title: 'A'}]));
  Todo.find.mockResolvedValueOnce([{_id: 1, title: 'A'}]);
  const res = await request(app).get('/api/todos');

  expect(res.status).toStrictEqual(200);
  expect(res.body).toStrictEqual([{id: 1, title: 'A'}]);
  expect(Todo.find).toHaveBeenCalledWith();
});

/*
Exercice
En vous inspirant de l'exemple ci dessus :
Vérifier que lorsque find nous donne une erreur :
Todo.find.mockRejectedValueOnce(new Error('Async error'));

Le status de la réponse vaut 500
Le body de la réponse contient le message d'erreur attendu (faire
un console.log de res.body si nécessaire)
*/
