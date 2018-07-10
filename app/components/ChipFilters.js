import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

ChipFilters.propTypes = {
    label: PropTypes.string.isRequired,
    clickable: PropTypes.bool
}

export default ChipFilters;