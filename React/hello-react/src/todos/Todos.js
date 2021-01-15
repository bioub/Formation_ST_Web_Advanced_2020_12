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

  handleNewTodoChange = (newTodo) => {
    //  this.setState({ newTodo: newTodo });
    this.setState({ newTodo }); // shorthand property ES6
  };

  handleAdd = (todo) => {
    this.setState({ newTodo: "", todos: [todo, ...this.state.todos] });
  };

  render() {
    const { newTodo, todos } = this.state;
    return (
      <div className="Todos">
        <TodoForm
          newTodo={newTodo}
          onNewTodoChange={this.handleNewTodoChange}
          onAdd={this.handleAdd}
        />
        <TodoList items={todos} />
      </div>
    );
  }
}

export default Todos;
