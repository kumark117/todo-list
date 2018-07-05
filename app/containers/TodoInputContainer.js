import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import TextInput from '../components/TextInput';
import ChipInput from '../components/ChipInput';
import AddButton from '../components/AddButton';
import { connect } from 'react-redux';
import { postTodo } from '../actions/postTodo_actions';
import { getTodos } from '../actions/getTodos_actions';

class TodoInputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: undefined,
            todo: "",
            tags: []
        }
    };

    onChangeText = (event) => {
        this.setState({
            todo: event.target.value
        });
    };

    onClickButton = () => {
        let valuesToPost = {
            ...this.state,
            id: this.props.todos.length
        };
        this.props.postTodo(valuesToPost)
        .then(() => this.props.getTodos());
        this.setState({
            todo: "",
            tags: []
        });
    }

    onAddChip = (chip) => {
        this.setState({
            tags: [...this.state.tags, chip]
        });
    }

    onRemoveChip = (chip, index) => {
        this.setState({     // TODO
            tags: this.state.tags.filter((_, i) => {
                i > 0
            })
        });
    }

    render() {
        return (
            <div style={{ 'marginBottom': 50 }}>
                <TextInput 
                    onChange={this.onChangeText}
                    value={this.state.todo} />
                <ChipInput
                    value={this.state.tags}
                    onAddChip={this.onAddChip}
                    onRemoveChip={this.onRemoveChip} />
                <AddButton
                    onClick={this.onClickButton}
                    disabled={this.state.todo.length > 0 ? false : true} />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch, values) { 
    return {
        postTodo: (values) => dispatch(postTodo(values)),
        getTodos: () => dispatch(getTodos())
    };
}

export default connect(null, mapDispatchToProps)(TodoInputContainer);