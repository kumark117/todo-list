import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const TextInput = ({ value, onChange, label }) => (
  <TextField
    floatingLabelText={label}
    value={value}
    onChange={onChange}
    style={{ fontSize: 20, marginBottom: 10 }}
  />
);

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default TextInput;
