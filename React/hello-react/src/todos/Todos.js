import { Component } from "react";
import { fetchTodos, postTodo } from "./api";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class Todos extends Component {
  state = {
    newTodo: "ABC",
    todos: [],
    loading: true,
  };

  handleNewTodoChange = (newTodo) => {
    //  this.setState({ newTodo: newTodo });
    this.setState({ newTodo }); // shorthand property ES6
  };

  handleAdd = async (todo) => {
    this.setState({
      loading: true,
    });
    const todoFromExpress = await postTodo(todo);
    this.setState({
      loading: false,
      newTodo: "",
      todos: [todoFromExpress, ...this.state.todos],
    });
  };

  async componentDidMount() {
    const todos = await fetchTodos();
    this.setState({
      todos,
      loading: false,
    });
  }

  render() {
    const { newTodo, todos, loading } = this.state;
    return (
      <div className="Todos">
        {loading && <div>Chargement...</div>}
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
