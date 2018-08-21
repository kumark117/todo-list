import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

export default function SelectPriority(props) {
  const { value, onChangePriority } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <InputLabel style={{ fontSize: 12 }}>
          Priority
      </InputLabel>
      <Select
        value={value}
        onChange={onChangePriority}
        autoWidth={false}
      >
        <MenuItem value="high">
           High
        </MenuItem>
        <MenuItem value="medium">
          Medium
        </MenuItem>
        <MenuItem value="low">
          Low
        </MenuItem>
      </Select>
    </div>
  );
}

SelectPriority.propTypes = {
  value: PropTypes.string.isRequired,
  onChangePriority: PropTypes.func.isRequired,
};
