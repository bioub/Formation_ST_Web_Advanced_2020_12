import Clock from "./Clock";
import Counter from "./Counter";
import ExHelloWorld from "./ExHelloWorld";
import ExMultiStateButton from "./ExMultiStateButton";
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
      <Clock format="HH:mm" />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <ExHelloWorld />
      <ExMultiStateButton values={['Rouge', 'Orange', 'Bleu']} />
    </div>
  );
}

export default App;
