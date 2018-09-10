import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import TodoInputContainer from '../form/TodoInputContainer.jsx';
import TodoList from '../list/presentational/TodoList.jsx';
import FilterBar from '../filter-bar/FilterBar.jsx';
import { getTodos } from '../../actions/getTodos_actions';
import { getTags } from '../../actions/getTags_actions';
import styles from './HomePage.css';

class HomePage extends Component {

  componentDidMount() {
    this.props.getTodos();
    this.props.getTags();
  }

  // only render the todo list once the todos have been returned from getSortedTodos()
  renderTodoList = () => {
    const { todos, filteredTodos } = this.props;
    if (!todos) {
      return <CircularProgress size={40} thickness={5} />
    } else {
        return <TodoList
                    todos={Object.keys(filteredTodos).length > 0 ? filteredTodos : todos} />
    }
  }

  // only render the filter bar once the tags and todos have been returned from getTags() and getSortedTodos()
  renderFilterBar = () => {
    if (!this.props.todos) {
      return <CircularProgress size={40} thickness={5} />
    } else {
      return <FilterBar />
    };
  }

  render() {
    return (
      <div className="Main" >
        <Paper
          className="filter-bar-paper"
          zDepth={2}
        >
          { this.renderFilterBar() }
        </Paper>
        <Paper
          className="todos-paper"
          zDepth={2}
        >
          <TodoInputContainer todos={this.props.todos} />
          { this.renderTodoList() }
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
      todos: state.todos.todos,
      filteredTodos: state.todos.filteredTodos,
      tags: state.tags.tags,
  };
}

export default connect(mapStateToProps, {
    getTodos,
    getTags
})(HomePage);
