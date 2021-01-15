const url = "http://localhost:3000/api/todos";

async function fetchTodos() {
  const res = await fetch(url);
  const todos = await res.json();
  return todos;
}

async function postTodo(todo) {
  const body = JSON.stringify(todo);
  const res = await fetch(url, {
    method: "POST",
    body,
    headers: {
      Authorization: "d4973653-9895-4123-a7dd-3e1387d0fbde",
    },
  });
  const todo = await res.json();
  return todo;
}
