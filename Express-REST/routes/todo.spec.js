const request = require('supertest');
const app = require('../app');
const Todo = require('../models/todo');

jest.mock('../models/todo');

test('GET /api/todos', async () => {
  Todo.find.mockImplementation(() => Promise.resolve([{_id: 1, title: 'A'}]));
  const res = await request(app).get('/api/todos');

  expect(res.status).toStrictEqual(200);
  expect(res.body).toStrictEqual([{id: 1, title: 'A'}]);
});
