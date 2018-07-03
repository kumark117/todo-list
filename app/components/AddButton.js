import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const AddButton = (props) => {
    return (
        <Button 
            color="primary"
            variant="fab"
            onClick={props.onClick}
            disabled={props.disabled} >
            <AddIcon />
        </Button>
    )
}

export default AddButton;