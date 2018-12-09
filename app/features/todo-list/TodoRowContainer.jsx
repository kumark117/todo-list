import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoRow from './TodoRow.jsx';
import { 
    getTodoByIdBegin,
    completeTodoBegin,
    recoverTodoBegin,
    removeTodoBegin
 } from '../../actions';

class TodoRowContainer extends Component {

  onClickComplete = () => {
    const { dispatch } = this.props;
    if (!this.props.complete) {
      dispatch(completeTodoBegin(this.props.id))
    } else {
      dispatch(recoverTodoBegin(this.props.id))
    }
  }

  onClickDelete = () => {
    this.props.dispatch(removeTodoBegin(this.props.id));
  };

  render() {

    const { id, todo, complete } = this.props;

    return (
      <TodoRow 
        id={id}
        todo={todo}
        complete={complete}
        onClickComplete={this.onClickComplete}
        onClickDelete={this.onClickDelete} 
      />
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
});

export default connect(mapStateToProps)(TodoRowContainer);

  
