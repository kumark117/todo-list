import React, { Component } from 'react';
import TextInput from './presentational/TextInput.jsx';
import ChipInputTags from './presentational/ChipInputTags.jsx';
import AddButton from './presentational/AddButton.jsx';
import SelectPriority from './presentational/SelectPriority.jsx';
import { connect } from 'react-redux';
import { postTodo } from '../../actions/postTodo_actions';
import { getTodos } from '../../actions/getTodos_actions';
import styles from './TodoInputContainer.css';

class TodoInputContainer extends Component {

    state = {
        todo: "",
        priority: "medium",
        tags: []
    }

    onChangeText = (event) => {
        this.setState({ todo: event.target.value });
    }

    onAddTodo = () => {
        let valuesToPost = { ...this.state };
        // post the new todos, and once the promise is resolved get all todos to re-render the list
        // which will now include the new todo
        this.props.postTodo(valuesToPost)
            .then(() => this.props.getTodos());
        this.setState({
            todo: "",
            priority: "medium",
            tags: []
        });
    }

    onAddChip = (chip) => {
        this.setState({ tags: [...this.state.tags, chip] });
    }

    // TODO as this seems to remove all chips
    onRemoveChip = (chip, index) => {
        this.setState({     
            tags: this.state.tags.filter((_, i) => {
                i > 0
            })
        });
    }

    onChangePriority = (event) => {
        this.setState({ priority: event.target.value });
    }

    render() {
        const { todo, priority, tags } = this.state;
        return (
            <div className="Main-Input" >
                <div className="Upper-input" >
                    <TextInput
                        onChange={this.onChangeText}
                        value={todo} />
                </div>
                <div className="Lower-input" >
                    <ChipInputTags
                        value={tags}
                        onAddChip={this.onAddChip}
                        onRemoveChip={this.onRemoveChip} />
                    <SelectPriority 
                        value={this.state.priority}
                        onChangePriority={this.onChangePriority} />
                    <AddButton
                        onClick={this.onAddTodo}
                        disabled={todo.length > 0 ? false : true} />
                </div>
            </div>
        );
    }
}

export default connect(null, {
    postTodo,
    getTodos,
})(TodoInputContainer);