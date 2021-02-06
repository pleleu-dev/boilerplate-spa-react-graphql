import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sample from './sample';



configure({ adapter: new Adapter() });

test('renders the component', () => {
  const component = shallow(<Sample />);
  expect(component).toMatchSnapshot();
});
