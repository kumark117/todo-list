/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import SelectPriority from '../SelectPriority.jsx';

describe('SelectPriority', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SelectPriority />);
    expect(wrapper).toMatchSnapshot();
  });
});