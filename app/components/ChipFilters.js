import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Chip from '@material-ui/core/Chip';

const ChipFilters = (props) => {
    return (
        <Chip
            style = {{ 'width': '100%', 'marginBottom': 20 }}
            label={props.label}
            clickable
        />
    );
}

export default ChipFilters;