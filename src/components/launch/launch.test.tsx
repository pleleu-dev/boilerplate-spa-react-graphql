import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Launch from './launch';



configure({ adapter: new Adapter() });

test('renders the component', () => {
  const component = shallow(<Launch />);
  expect(component).toMatchSnapshot();
});
