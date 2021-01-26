import TestRenderer from 'react-test-renderer';

import CounterControlled from './CounterControlled';
import Parent from './Parent.js';

jest.mock('./CounterControlled');

test('Parent Component render without crashing (TestRenderer)', () => {
  // Remplace CounterControlled par un composant qui fait rien
  TestRenderer.create(<Parent />);
});

// test('Parent Component render without crashing mock implematation CounterControlled(TestRenderer)', () => {
//   CounterControlled.mockImplementationOnce(() => <button>Mock</button>);

//   const renderer = TestRenderer.create(<Parent />);
//   console.log(renderer.toJSON());
// });
