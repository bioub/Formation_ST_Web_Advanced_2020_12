const { tokens } = require('../models/user');

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
function authenticate(req, res, next) {
  if (tokens.includes(req.headers.authorization)) {
    return next();
  }

  res.statusCode = 401; // UNAUTHORIZED
  res.json({
    msg: 'Unauthorized',
  });
}

module.exports = authenticate;
