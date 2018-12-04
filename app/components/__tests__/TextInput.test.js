/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import TextInput from '../TextInput.jsx';

describe('the TextInput component', () => {
  it('renders correctly', () => {
    const mockProps = { value: "Test input" };
    const wrapper = shallow(<TextInput {...mockProps}/>);
    expect(wrapper).toMatchSnapshot();
  });
});