// import { memo } from "react";

import { Component, PureComponent } from "react";

import TodoItem from "./TodoItem";

// function TodoList({ items = [] }) {
//   console.log('render list');
//   return (
//     <div className="TodoList">
//       {items.map((it) => (
//         <TodoItem key={it.id} todo={it} />
//       ))}
//     </div>
//   );
// }

class TodoList extends PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   return nextProps.items !== this.props.items;
  // }
  render() {
    const { items = [] } = this.props;
    console.log("render list");
    return (
      <div className="TodoList">
        {items.map((it) => (
          <TodoItem key={it.id} todo={it} />
        ))}
      </div>
    );
  }
}

// export default memo(TodoList);

export default TodoList;
