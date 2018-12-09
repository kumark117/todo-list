import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextInput from '../../components/TextInput.jsx';
import ChipInputTags from '../../components/ChipInputTags.jsx';
import AddButton from '../../components/AddButton.jsx';
import SelectPriority from '../../components/SelectPriority.jsx';
import {
  postTodoBegin,
  getTodos,
  getTags,
} from '../../actions';
import './TodoInput.css';

class TodoInputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      priority: 'Medium',
      tags: [],
    };
  }

  onChangeText = (event) => {
    this.setState({ todo: event.target.value });
  }

  // TODO - shouldn't round trip data
  onAddTodo = () => {
    const { dispatch } = this.props;
    const valuesToPost = { ...this.state };
    dispatch(postTodoBegin(valuesToPost));
    this.setState({
      todo: '',
      priority: 'Medium',
      tags: [],
    });
  }

  onAddChip = (chip) => {
    this.setState({ tags: [...this.state.tags, chip] });
  }

  onRemoveChip = (chip, index) => {
    this.setState({ tags: this.state.tags.filter((_, i) => i !== index) })
  }

  onChangePriority = (event) => {
    this.setState({ priority: event.target.value });
  }

  render() {
    const { todo, priority, tags } = this.state;
    return (
      <div className="main-input">
        <div className="upper-input">
          <TextInput
            label="What do you need to do?"
            onChange={this.onChangeText}
            value={todo}
          />
        </div>
        <div className="lower-input">
          <ChipInputTags
            value={tags}
            onAddChip={this.onAddChip}
            onRemoveChip={this.onRemoveChip}
          />
          <SelectPriority
            value={priority}
            onChangePriority={this.onChangePriority}
          />
          <AddButton
            onClick={this.onAddTodo}
            disabled={!todo.length}
          />
        </div>
      </div>
    );
  }
}

export default connect()(TodoInputContainer);
