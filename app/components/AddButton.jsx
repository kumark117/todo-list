import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const AddButton = ({ onClick, disabled }) => (
  <Button
    style={{ marginTop: 20, marginLeft: 40 }}
    color="primary"
    variant="fab"
    onClick={onClick}
    disabled={disabled}
  >
    <AddIcon />
  </Button>
);

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default AddButton;
