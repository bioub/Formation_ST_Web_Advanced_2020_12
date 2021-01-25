const { tokens } = require("../models/user.js");
const authenticate = require("./authenticate.js");

test('authenticate with valid token', () => {
  tokens.push('1234');

  const req = {
    headers: {
      authorization: '1234',
    }
  }; // Request Express
  const res = {}; // Response Express
  const next = jest.fn(); // NextFunction Express
  authenticate(req, res, next);

  expect(next).toHaveBeenCalledWith();
  tokens.pop();
});


test('authenticate without valid token', () => {
  const req = {
    headers: {}
  }; // Request Express
  const res = {
    json: jest.fn(),
  }; // Response Express
  const next = () => {}; // NextFunction Express
  authenticate(req, res, next);

  expect(res.statusCode).toStrictEqual(401);
  expect(res.json).toHaveBeenCalledWith({
    msg: 'Unauthorized',
  });
});
