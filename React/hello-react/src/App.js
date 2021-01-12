import Clock from "./Clock";
import Counter from "./Counter";
import ExHelloWorld from "./ExHelloWorld";
import ExMultiStateButton from "./ExMultiStateButton";
import Hello from "./Hello";
import List from "./List";
import TodoList from "./TodoList";

function App() {
  // React.createElement(Hello, { name: 'Romain' });
  // <Hello name="Romain" />

  const name = 'Toto';

  return (
    <div className="App">
      <h2>Hello</h2>
      <Hello name="Romain" age={35} isInstructor />
      <Hello name="Jean" />
      <Hello name={"Eric"} />
      <Hello name={name} />
      <h2>Clock</h2>
      <Clock format="HH:mm" />
      <h2>Counter</h2>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <h2>Exercices</h2>
      <ExHelloWorld />
      <ExMultiStateButton values={['Rouge', 'Orange', 'Bleu']} />
      <h2>List</h2>
      <List />
      <h2>Exercice TodoList</h2>
      <TodoList />
    </div>
  );
}

export default App;
