import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import TodoInputContainer from '../input-form/TodoInput.jsx';
import TodoList from '../todo-list/TodoList.jsx';
import ActionsBar from '../actions-bar/ActionsBar.jsx';
import {
  getTodosBegin,
  getTagsBegin,
} from '../../actions';
import './HomePage.css';

class HomePage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getTodosBegin());
    dispatch(getTagsBegin());
  }

  renderTodoList() {
    const { todos, filteredTodos, isFiltered } = this.props;
    if (!todos) {
      return <CircularProgress size={40} thickness={5} />;
    }
    if (!isFiltered) {
      return <TodoList todos={todos} />;
    }
    if (isFiltered && Object.keys(filteredTodos).length) {
      return <TodoList todos={filteredTodos} />;
    }
    return <span>None</span>;
  }

  renderActionsBar() {
    const { todos } = this.props;
    if (!todos) {
      return <CircularProgress size={40} thickness={5} />;
    }
    return <ActionsBar />;
  }

  render() {
    const { todos } = this.props;
    return (
      <div className="Main">
        <Paper
          className="filter-bar-paper"
          zDepth={2}
        >
          { this.renderActionsBar() }
        </Paper>
        <Paper
          className="todos-paper"
          zDepth={2}
        >
          <TodoInputContainer todos={todos} />
          { this.renderTodoList() }
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  isFiltered: state.todos.isFiltered,
  filteredTodos: state.todos.filteredTodos,
  tags: state.tags.tags,
});

export default connect(mapStateToProps)(HomePage);
