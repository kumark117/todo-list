/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import AddButton from '../AddButton.jsx';

describe('the AddButton component', () => {
  it('renders correctly', () => {
    const mockProps = { onClick: jest.fn() };
    const wrapper = shallow(<AddButton {...mockProps}/>);
    expect(wrapper).toMatchSnapshot();
  });
});