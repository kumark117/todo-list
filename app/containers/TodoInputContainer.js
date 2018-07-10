import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import TextInput from '../components/TextInput';
import ChipInputTags from '../components/ChipInputTags';
import AddButton from '../components/AddButton';
import SelectPriority from '../components/SelectPriority';
import { connect } from 'react-redux';
import { postTodo } from '../actions/postTodo_actions';
import { getTodos } from '../actions/getTodos_actions';

class TodoInputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: undefined,
            todo: "",
            priority: "medium",
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
            priority: "medium",
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

    onChangePriority = (event) => {
        this.setState({
            priority: event.target.value
        });
    }

    render() {
        return (
            <div style={{ 'width': '60%', 'marginBottom': 50 }}>
                <div style={{ 'width': '100%', 'display': 'flex', 'alignItems': 'center' }} >
                <TextInput
                    onChange={this.onChangeText}
                    value={this.state.todo} />
                <SelectPriority 
                    value={this.state.priority}
                    onChangePriority={this.onChangePriority} />
                </div>
                <div style={{ 'display': 'flex', 'alignItems': 'center' }}>
                    <ChipInputTags
                        value={this.state.tags}
                        onAddChip={this.onAddChip}
                        onRemoveChip={this.onRemoveChip} />
                    <AddButton
                        onClick={this.onClickButton}
                        disabled={this.state.todo.length > 0 ? false : true} />
                </div>
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