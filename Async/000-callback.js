function Parent() {
  function handleCountChange(valFromChild) {
    console.log(valFromChild);
  }
  CounterControlled(handleCountChange);
  CounterControlled(handleCountChange);
  CounterControlled(handleCountChange);
  CounterControlled(handleCountChange);
}

function CounterControlled(onCountChange) {
  onCountChange(Math.random());
}

function main() {
  function handleForEach(valFromArray) {
    console.log(valFromArray);
  }
  forEach(['A', 'B', 'C'], handleForEach);
}

function forEach(array, onForEach) {
  for (const el of array) {
    onForEach(el);
  }
}

main();
