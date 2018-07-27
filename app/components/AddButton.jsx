import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const AddButton = (props) => {
    return (
        <Button
            style={{ 'marginTop': 20 }} 
            color="primary"
            variant="fab"
            onClick={props.onClick}
            disabled={props.disabled} >
            <AddIcon />
        </Button>
    )
}

AddButton.propTypes = {
    color: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}

export default AddButton;