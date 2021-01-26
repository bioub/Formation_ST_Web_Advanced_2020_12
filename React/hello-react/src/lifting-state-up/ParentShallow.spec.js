import ShallowRenderer from 'react-test-renderer/shallow';

import Parent from './Parent.js';

test('Parent Component render without crashing (TestRenderer)', () => {
  // Remplace CounterControlled par un composant qui fait rien
  const renderer = new ShallowRenderer();
  renderer.render(<Parent />)
});
