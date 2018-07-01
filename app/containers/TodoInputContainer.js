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

    onAddChip = (chip) => {
        this.setState({
            tags: [...this.state.tags, chip]
        });
    }

    onRemoveChip = (chip, index) => {
        console.log(chip, index)
        this.setState({
            tags: this.state.tags.filter((_, i) => {
                i > 0
            })
        });
    }

    render() {
        console.log(this.state.tags)
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
                    onClick={this.onClickButton} />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch, values) { 
    return {
        postTodo: () => dispatch(postTodo(values))
    };
}

export default connect(null, mapDispatchToProps)(TodoInputContainer);