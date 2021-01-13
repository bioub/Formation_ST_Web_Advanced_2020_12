import { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class Todos extends Component {
  state = {
    newTodo: "ABC",
    todos: [
      {
        id: 1,
        title: "Acheter du pain",
        completed: false,
      },
      {
        id: 2,
        title: "Introduire Express",
        completed: true,
      },
    ],
  };

  render() {
    return (
      <div className="Todos">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default Todos;
