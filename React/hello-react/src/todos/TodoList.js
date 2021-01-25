import { memo } from "react";

import TodoItem from "./TodoItem";

function TodoList({ items = [] }) {
  console.log('render list');
  return (
    <div className="TodoList">
      {items.map((it) => (
        <TodoItem key={it.id} todo={it} />
      ))}
    </div>
  );
}

export default memo(TodoList);
