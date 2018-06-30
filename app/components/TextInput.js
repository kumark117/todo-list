import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    };

    onChange = event => {
        console.log(this.state.text);
        const { value: text } = e.target;
        this.setState({
            text,
        });
    };

    onKeyDown = e => {
        const { value } = e.target;
        if (e.which === 13) {
            //this.props.onSubmit(value);
            console.log('Enter')
            this.setState({
                text: "",
            });
        }
    };

    render() {
        return (
            <TextField
                floatingLabelText="What do you need to do?"
                value={this.state.input}
                onChange={this.onChange}
                onKeyDown={this.onKeyDown}
            />
        );
    } 
}