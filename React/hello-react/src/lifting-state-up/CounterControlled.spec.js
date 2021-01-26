import { shallow } from 'enzyme';

import CounterControlled from './CounterControlled.js';

test('CounterControlled render without crash', () => {
  shallow(<CounterControlled />);
});

test('CounterControlled increment on click', () => {
  const onCountChange = jest.fn();
  const wrapper = shallow(<CounterControlled count={10} onCountChange={onCountChange} />);

  wrapper.find('button').simulate('click');

  expect(onCountChange).toHaveBeenCalledWith(11);
});
