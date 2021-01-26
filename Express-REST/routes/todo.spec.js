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
