function List() {
  // const letters = ['A', 'B', 'C'];
  const letters = [<li key="A">A</li>, <li key="B">B</li>, <li key="C">C</li>]

  return (
    <ul>
      {letters}
    </ul>
  );
}

export default List;
