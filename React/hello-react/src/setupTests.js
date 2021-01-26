// remplacer cette ligne par l'adaptateur officiel lorsqu'il sera
// compatible React 17
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
