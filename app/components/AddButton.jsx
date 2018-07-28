import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const AddButton = (props) => {
  const { onClick, disabled } = props;
  return (
    <Button
      style={{ marginTop: 20 }}
      color="primary"
      variant="fab"
      onClick={onClick}
      disabled={disabled}
    >
      <AddIcon />
    </Button>
  );
};

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default AddButton;
