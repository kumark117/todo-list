import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import ChipInput from 'material-ui-chip-input';

const ChipTags = (props) => {

    return (
        <ChipInput
            style = {{ 'width': '100%', 'marginBottom': 20 }}
            fullWidth = {true}
            floatingLabelText = "Tags"
        />
    );
}

export default ChipTags;