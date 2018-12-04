import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const options = ['High', 'Medium', 'Low'];

const SelectPriority = ({ value, onChangePriority }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <InputLabel style={{ fontSize: 12 }}>
      Priority
    </InputLabel>
    <Select
      value={value}
      onChange={onChangePriority}
      autoWidth={false}
    >
      {
          options.map(option => (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          ))
      }
    </Select>
  </div>
);

SelectPriority.propTypes = {
  value: PropTypes.string.isRequired,
  onChangePriority: PropTypes.func.isRequired,
};

export default SelectPriority;
