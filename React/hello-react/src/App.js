import Clock from "./Clock";
import Counter from "./Counter";
import Hello from "./Hello";

function App() {
  // React.createElement(Hello, { name: 'Romain' });
  // <Hello name="Romain" />

  const name = 'Toto';

  return (
    <div className="App">
      <Hello name="Romain" age={35} isInstructor />
      <Hello name="Jean" />
      <Hello name={"Eric"} />
      <Hello name={name} />
      <Clock />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
