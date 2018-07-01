import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const TextInput = (props) => {

    return (
        <TextField
            floatingLabelText="What do you need to do?"
            value={props.value}
            onChange={props.onChange}
            style={{ 'width': '100%', 'fontSize': 20, 'marginBottom': 10 }}
        />
    );
}

export default TextInput;