import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodoById } from '../actions/getTodoById_actions';
import { getTodosSorted } from '../actions/getTodosSorted_actions';
import { completeTodo } from '../actions/completeTodo_actions';
import { recoverTodo } from '../actions/recoverTodo_actions';
import { removeTodo } from '../actions/removeTodo_actions';
import TodoRow from '../components/TodoRow.jsx';

class TodoRowContainer extends Component {

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

  onClickDelete = () => {
    this.props.removeTodo(this.props.id)
        .then(() => this.props.getTodosSorted());
  };

  render() {
    return (
      <TodoRow 
        id={this.props.id}
        todo={this.props.todo}
        tags={this.props.tags}
        complete={this.props.complete}
        onClickComplete={this.onClickComplete}
        onClickDelete={this.onClickDelete} 
      />
    );
  }
}

function mapStateToProps(state) {
  return { 
      /* todos: _.values(state.todos.todos), */
      todos: state.todos.todos,
      tags: state.todos.tags,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTodosSorted: () => dispatch(getTodosSorted()),
    getTodoById: (todoId) => dispatch(getTodoById(todoId)),
    completeTodo: (todoId) => dispatch(completeTodo(todoId)),
    recoverTodo: (todoId) => dispatch(recoverTodo(todoId)),
    removeTodo: (todoId) => dispatch(removeTodo(todoId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoRowContainer);

  
