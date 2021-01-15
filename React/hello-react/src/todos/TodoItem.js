function TodoItem({ todo = {} }) {
  return (
    <div className="TodoItem">
      <input type="checkbox" defaultChecked={todo.completed} />
      <span>{todo.title}</span>
    </div>
  );
}

export default TodoItem;
