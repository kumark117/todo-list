import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import TextInput from '../components/TextInput';
import ChipInput from '../components/ChipInput';
import AddButton from '../components/AddButton';
import { connect } from 'react-redux';
import { postTodo } from '../actions/postTodo_actions';

class TodoInputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: "",
            tags: []
        }
    };

    onChangeText = (event) => {
        console.log(this.state.todo)
        this.setState({
            todo: event.target.value
        });
    };

    onClickButton = () => {
        if (!this.state.todo) {
            console.log('enter text')
        } else {
            this.props.postTodo(this.state)
        };
        this.setState({
            todo: "",
            tags: []
        });
    }

    render() {
        return (
            <div style={{ 'marginBottom': 50 }}>
                <TextInput 
                    onChange={this.onChangeText}
                    value={this.state.todo} />
                <ChipInput />
                <AddButton
                    onClick={this.onClickButton} />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postTodo: () => dispatch(postTodo())
    };
}

export default connect(null, mapDispatchToProps)(TodoInputContainer);