/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import AddButton from '../AddButton.jsx';

describe('AddButton', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AddButton />);
    expect(wrapper).toMatchSnapshot();
  });
});