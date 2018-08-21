import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const TextInput = (props) => {
  const { value, onChange } = props;
  return (
    <TextField
      floatingLabelText="What do you need to do?"
      value={value}
      onChange={onChange}
      style={{ fontSize: 20, marginBottom: 10 }}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInput;
