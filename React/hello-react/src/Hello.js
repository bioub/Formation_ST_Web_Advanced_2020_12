function Hello({name, age = 0, isInstructor = false}) {
  return (
    <div className="Hello">
      Hello my name is {name}, I'm {age}
    </div>
  );
}

export default Hello;
