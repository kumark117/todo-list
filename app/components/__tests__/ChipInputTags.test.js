/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import ChipInputTags from '../ChipInputTags.jsx';

describe('the ChipInputTags component', () => {
  it('renders correctly', () => {
    const mockProps = { 
      value: ["chipOne", "chip2"], 
      onAddChip: jest.fn(), 
      onRemoveChip: jest.fn() 
    };
    const wrapper = shallow(<ChipInputTags {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});