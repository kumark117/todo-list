/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import TodoRow from '../TodoRow.jsx';

describe('TodoRow', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TodoRow />);
    expect(wrapper).toMatchSnapshot();
  });
});