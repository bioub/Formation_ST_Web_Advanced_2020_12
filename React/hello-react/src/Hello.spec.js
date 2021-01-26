import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';

import Hello from './Hello';

test('Hello Component render without crashing', () => {
  const rootEl = document.createElement('div');
  document.body.appendChild(rootEl);
  ReactDOM.render(<Hello name="Romain" age={35} />, rootEl);
});

test('Hello Component render without crashing (TestRenderer)', () => {
  TestRenderer.create(<Hello name="Romain" age={35} />);
});

test('Hello Component render props', () => {
  const rootEl = document.createElement('div');
  document.body.appendChild(rootEl);
  ReactDOM.render(<Hello name="Romain" age={35} />, rootEl, () => {
    expect(rootEl.textContent).toContain('Hello my name is Romain, I\'m 35');
  });
});
