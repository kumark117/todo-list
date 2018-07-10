import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import ChipInput from 'material-ui-chip-input';

const ChipInputTags = (props) => {
    return (
        <ChipInput
            style = {{ 'marginRight': 15, 'marginBottom': 12.5 }}
            fullWidth = {true}
            floatingLabelText = "Tags"
            value={props.value}
            onRequestAdd={(chip) => props.onAddChip(chip)}
            onRequestDelete={(chip, index) => props.onRemoveChip(chip, index)}
        />
    );
}

ChipInputTags.propTypes = {
    floatingLabelText: PropTypes.string,
    value: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onRequestAdd: PropTypes.func.isRequired,
    onRequestDelete: PropTypes.func.isRequired
}

export default ChipInputTags;