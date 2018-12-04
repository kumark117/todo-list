import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoRow from './TodoRow.jsx';
import getTodoById from '../../actions/getTodoById_actions';
import getTodos from '../../actions/getTodos_actions';
import completeTodo from '../../actions/completeTodo_actions';
import recoverTodo from '../../actions/recoverTodo_actions';
import removeTodo from '../../actions/removeTodo_actions';

class TodoRowContainer extends Component {

  // TODO - shouldn't round trip data
  onClickComplete = () => {
    if (this.props.complete) {
      this.props.recoverTodo(this.props.id)
        .then((result) => {
          this.props.getTodoById(this.props.id)
        })
    } else {
      this.props.completeTodo(this.props.id)
        .then((result) => {
          this.props.getTodoById(this.props.id)
        }) 
    }
  };

  // TODO - shouldn't round trip data
  onClickDelete = () => {
    this.props.removeTodo(this.props.id)
      .then(() => this.props.getTodos())
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

const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch(getTodos()),
  getTodoById: (todoId) => dispatch(getTodoById(todoId)),
  completeTodo: (todoId) => dispatch(completeTodo(todoId)),
  recoverTodo: (todoId) => dispatch(recoverTodo(todoId)),
  removeTodo: (todoId) => dispatch(removeTodo(todoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoRowContainer);

  
