function TodoItem({ todo = {} }) {
  console.log('render item');
  return (
    <div className="TodoItem">
      <input type="checkbox" defaultChecked={todo.completed} />
      <span>{todo.title}</span>
    </div>
  );
}

export default TodoItem;
