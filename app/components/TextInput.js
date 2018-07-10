import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

const TextInput = (props) => {

    return (
        <TextField
            floatingLabelText="What do you need to do?"
            value={props.value}
            onChange={props.onChange}
            style={{ 'fontSize': 20, 'marginBottom': 10 }}
        />
    );
}

TextInput.propTypes = {
    floatingLabelText: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TextInput;