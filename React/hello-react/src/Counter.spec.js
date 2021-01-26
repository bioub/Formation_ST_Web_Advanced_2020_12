import { shallow } from 'enzyme';

import Counter from './Counter.js';

test('Counter render without crash', () => {
  shallow(<Counter />);
});

test('Counter increment on click', () => {
  const wrapper = shallow(<Counter />);

  // document.querySelector('button').dispatchEvent(new MouseEvent('click'));
  wrapper.find('button').simulate('click');

  expect(wrapper.find('button').text()).toEqual('1');
});
