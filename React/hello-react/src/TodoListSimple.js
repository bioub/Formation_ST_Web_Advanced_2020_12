import { Component } from "react";

class TodoListSimple extends Component {
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
  handleChange = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      newTodo: "",
      todos: [
        {
          id: Math.random(),
          title: this.state.newTodo,
          completed: false,
        },
        ...this.state.todos, // SPREAD (conversion du tableau en une liste d'élements)
      ],
    });
  };

  render() {
    const todosJsx = this.state.todos.map((t) => {
      return (
        <div key={t.id}>
          <input type="checkbox" defaultChecked={t.completed} />
          <span>{t.title}</span>
        </div>
      );
    });

    return (
      <div className="TodoList">
        <form onSubmit={this.handleSubmit}>
          <input type="checkbox" onClick={this.handleToggle} />
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <button>+</button>
        </form>
        <div>{todosJsx}</div>
      </div>
    );
  }
}

export default TodoListSimple;
