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
        const { value: input } = event.target;
        this.setState({
            input
        });
    };

    onKeyDown = event => {
        const { value } = event.target;
        if (event.which === 13) {
            //this.props.onSubmit(value);
            console.log('Enter')
            this.setState({
                input: ""
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
                style={{ 'width': '100% ', 'fontSize': 20 }}
            />
        );
    } 
}