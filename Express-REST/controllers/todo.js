const Todo = require("../models/todo");

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.list = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.json(
      todos.map((t) => ({ id: t._id, title: t.title, completed: t.completed }))
    );
  } catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.show = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      req.notFoundReason = `Todo ${req.params.id} not found`;
      return next();
    }

    res.json({id: todo._id, title: todo.title, completed: todo.completed});
  } catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.add = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);
    res.statusCode = 201;
    res.json({id: todo._id, title: todo.title, completed: todo.completed});
  } catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.delete = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      req.notFoundReason = `Todo ${req.params.id} not found`;
      return next();
    }

    res.json(todo);
  } catch (err) {
    next(err);
  }
};

/**
 * @param req {import('express').Request}
 * @param res {import('express').Response}
 * @param next {import('express').NextFunction}
 */
exports.replace = async (req, res, next) => {
  try {
    const todo = await Todo.findOneAndReplace({_id: req.params.id}, req.params.id, req.body);

    if (!todo) {
      req.notFoundReason = `Todo ${req.params.id} not found`;
      return next();
    }

    res.json(todo);
  } catch (err) {
    next(err);
  }
};
