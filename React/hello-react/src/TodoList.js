import { Component } from "react";

class TodoList extends Component {
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
      todos: [
        ...this.state.todos,
        {
          id: Math.random(),
          title: this.state.newTodo,
          completed: false,
        },
      ],
    });
  };
  handleDelete(todo) {
    /*
    Exercice 1 :
    Créer un nouveau tableau sans la todo reçu en paramètre (.filter)
    et le passer à this.setState()
    */
  }
  handleToggle = (event) => {
    const checked = event.target.checked;

    /*
    Exercice 2 :
    Créer un nouveau tableau ou toutes les clés completed (.map)
    reçoivent checked
    et le passer à this.setState()
    */
  }

  /*
  Exercice 3
  Comme sur todomvc.com
  Au clic d'une checkbox associé à la clé completed
  modifier la clé completed correspondant dans un nouveau tableau
  et le passer à this.setState()

  Au double clic de la balise span, la transformer en balise input
  et stocker la valeur saisie dans le tableau
  */
  render() {
    const todosJsx = this.state.todos.map((t) => (
      <div key={t.id}>
        <input type="checkbox" checked={t.completed} />
        <span>{t.title}</span>
        <button onClick={() => this.handleDelete(t)}>-</button>
      </div>
    ));

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

export default TodoList;
