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
    // TODO envoyer la requête à Node.js
  };
  handleDelete(todo) {
    /*
    Exercice 1 :
    Créer un nouveau tableau sans la todo reçu en paramètre (.filter)
    et le passer à this.setState()
    */
    this.setState({
      todos: this.state.todos.filter((t) => t !== todo),
    });
  }
  handleToggle = (event) => {
    const checked = event.target.checked;

    // this.setState({
    //   todos: this.state.todos.map((t) => {
    //     return {
    //       ...t,
    //       completed: checked
    //     };
    //   }),
    // });
    this.setState({
      todos: this.state.todos.map((t) => ({
        ...t,
        completed: checked,
      })),
    });
    /*
    Exercice 2 :
    Créer un nouveau tableau ou toutes les clés completed (.map)
    reçoivent checked
    et le passer à this.setState()
    */
  };

  /*
  Exercice 3
  Comme sur todomvc.com
  Au clic d'une checkbox associé à la clé completed
  modifier la clé completed correspondant dans un nouveau tableau
  et le passer à this.setState()

  Au double clic de la balise span, la transformer en balise input
  et stocker la valeur saisie dans le tableau
  */
  handleCheckboxChange = (todo) => {
    // this.setState({
    //   todos: this.state.todos.map((t) => {
    //     if (todo !== t) {
    //       return t;
    //     }

    //     return {
    //       ...t,
    //       completed: !t.completed,
    //     };
    //   }),
    // });

    this.setState({
      todos: this.state.todos.map((t) =>
        t !== todo ? t : { ...t, completed: !t.completed }
      ),
    });
  };

  handleToggleEdit = (todo) => {
    this.setState({
      todos: this.state.todos.map((t) =>
        t !== todo ? t : { ...t, edit: !t.edit }
      ),
    });
  };

  handleTitleChange = (todo, title) => {
    this.setState({
      todos: this.state.todos.map((t) => (t !== todo ? t : { ...t, title })),
    });
  };

  render() {
    const todosJsx = this.state.todos.map((t) => {
      let titleJsx;
      if (!t.edit) {
        titleJsx = (
          <span onDoubleClick={() => this.handleToggleEdit(t)}>{t.title}</span>
        );
      } else {
        titleJsx = (
          <input
            autoFocus
            value={t.title}
            onChange={(event) => this.handleTitleChange(t, event.target.value)}
            onBlur={() => this.handleToggleEdit(t)}
          />
        );
      }

      return (
        <div key={t.id}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => this.handleCheckboxChange(t)}
          />
          {titleJsx}
          <button onClick={() => this.handleDelete(t)}>-</button>
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

export default TodoList;
