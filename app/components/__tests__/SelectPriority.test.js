/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import SelectPriority from '../SelectPriority.jsx';

describe('the SelectPriority component', () => {
  it('renders correctly', () => {
    const mockProps = { value: "High", onChangePriority: jest.fn() };
    const wrapper = shallow(<SelectPriority {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});