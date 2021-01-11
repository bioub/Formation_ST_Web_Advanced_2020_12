// const todos = [
//   {
//     id: 1,
//     title: 'Acheter du pain',
//     completed: false,
//   },
//   {
//     id: 2,
//     title: 'Introduire Express',
//     completed: true,
//   }
// ];

// function generateId() {
//   const maxId = todos.reduce((acc, t) => t.id > acc ? t.id : acc, 0);
//   return maxId + 1;
// }

// // premier appel de reducer, le callback : 0, { id: 1 } => 1
// // premier appel de reducer, le callback : 1, { id: 2 } => 2
// // => 2

// function find() {
//   return Promise.resolve(todos);
// }

// function findById(id) {
//   id = Number(id);
//   const todo = todos.find((t) => t.id === id);

//   if (!todo) {
//     return Promise.resolve(null);
//   }

//   return Promise.resolve(todo);
// }

// function create(todo) {
//   todo.id = generateId();

//   todos.push(todo);

//   return Promise.resolve(todo);
// }

// function findByIdAndDelete(id) {
//   id = Number(id);
//   const todo = todos.find((c) => c.id === id);

//   if (!todo) {
//     return Promise.resolve(null);
//   }

//   const index = todos.indexOf(todo);
//   todos.splice(index, 1);

//   return Promise.resolve(todo);
// }

// function findByIdAndReplace(id, newTodo) {
//   id = Number(id);
//   const todo = todos.find((c) => c.id === id);
//   newTodo.id = id;

//   if (!todo) {
//     return Promise.resolve(null);
//   }

//   const index = todos.indexOf(todo);
//   todos[index] = newTodo;

//   return Promise.resolve(todo);

//   // return new Promise((resolve, reject) => {
//   //   resolve(todo);
//   // });
// }

// exports.find = find;
// exports.findById = findById;
// exports.create = create;
// exports.findByIdAndDelete = findByIdAndDelete;
// exports.findByIdAndReplace = findByIdAndReplace;

const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// // Trigger
// schema.on('presave', () => {

// })

const Todo = mongoose.model("Todo", schema);

// const obj = new Todo({title: 'Acheter du pain', completed: false});
// obj.save() // Model.prototype.save

// Todo.create({title: 'Acheter du pain', completed: false})

module.exports = Todo;
