import Clock from "./Clock";
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
    </div>
  );
}

export default App;
