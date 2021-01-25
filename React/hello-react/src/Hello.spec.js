import ReactDOM from 'react-dom';

import Hello from './Hello';

test('Hello Component render', () => {
  const rootEl = document.createElement('div');
  document.body.appendChild(rootEl);
  ReactDOM.render(<Hello name="Romain" age={35} />, rootEl);
});

test('Hello Component render props', () => {
  const rootEl = document.createElement('div');
  document.body.appendChild(rootEl);
  ReactDOM.render(<Hello name="Romain" age={35} />, rootEl, () => {
    expect(rootEl.textContent).toContain('Hello my name is Romain, I\'m 35');
  });
});
