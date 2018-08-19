import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import TextInput from '../components/TextInput.jsx';
import ChipInputTags from '../components/ChipInputTags.jsx';
import AddButton from '../components/AddButton.jsx';
import SelectPriority from '../components/SelectPriority.jsx';
import { connect } from 'react-redux';
import { postTodo } from '../actions/postTodo_actions';
import { getTodos } from '../actions/getTodos_actions';

class TodoInputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: "",
            priority: "medium",
            tags: []
        };
    }

    onChangeText = (event) => {
        this.setState({
            todo: event.target.value
        });
    }

    onClickButton = () => {
        let valuesToPost = {
            ...this.state
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
            <div style={{ 'marginBottom': 50 }}>
                <div style={{ 'display': 'flex', 'alignItems': 'center' }} >
                    <TextInput
                        onChange={this.onChangeText}
                        value={this.state.todo} />
                </div>
                <div style={{ 'display': 'flex', 'width': '80%', 'alignItems': 'center', 'justifyContent': 'space-around' }}>
                    <ChipInputTags
                        value={this.state.tags}
                        onAddChip={this.onAddChip}
                        onRemoveChip={this.onRemoveChip} />
                    <SelectPriority 
                        value={this.state.priority}
                        onChangePriority={this.onChangePriority} />
                    <AddButton
                        onClick={this.onClickButton}
                        disabled={this.state.todo.length > 0 ? false : true} />
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch, values) { 
    return {
        postTodo: (values) => dispatch(postTodo(values)),
        getTodos: () => dispatch(getTodos())
    };
}

export default connect(null, mapDispatchToProps)(TodoInputContainer);