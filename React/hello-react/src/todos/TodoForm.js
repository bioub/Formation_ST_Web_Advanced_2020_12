function TodoForm({ newTodo, onNewTodoChange, onAdd }) {
  console.log('render form');
  function handleSubmit(event) {
    event.preventDefault();
    onAdd({
      // id: Math.random(),
      title: newTodo,
      completed: false,
    });
  }
  function handleChange(event) {
    const newTodo = event.target.value;
    onNewTodoChange(newTodo);
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="checkbox" />
      <input type="text" onChange={handleChange} value={newTodo} />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
