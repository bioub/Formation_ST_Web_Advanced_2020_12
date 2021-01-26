/*
Exercice :
en utilisant Enzyme et sa fonction shallow

Passer des valeurs aux props items, selected
Passer une jest.fn() à onSelectedChange

Vérifier qu'au click de la <div class="Select-selected">
la popup s'ouvre (en vérifiant par exemple le contenu des Select-item)

Vérifier qu'un click d'un <div class="Select-item">
- la jest.fn() est bien appelée avec la valeur contenue dans la div
- la popup se referme
*/

import { shallow } from "enzyme";

import Select from "./Select";

test('Select component without crashing', () => {
  const items = ['A', 'B', 'C'];
  const selected = 'B';
  shallow(<Select items={items} selected={selected} />)
});

test('Select component', () => {
  const items = ['A', 'B', 'C'];
  const selected = 'B';
  const onSelectedChange = jest.fn();

  const wrapper = shallow(<Select items={items} selected={selected} onSelectedChange={onSelectedChange} />);

  expect(wrapper.find('.Select-items')).toHaveLength(0);
  wrapper.find('.Select-selected').simulate('click');
  expect(wrapper.find('.Select-items')).toHaveLength(1);

  // clic sur le dernier .Select-item (celui qui contient C)
  wrapper.find('.Select-item').last().simulate('click');

  expect(onSelectedChange).toHaveBeenCalledWith('C');
  expect(wrapper.find('.Select-items')).toHaveLength(0);
});
