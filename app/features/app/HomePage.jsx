import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import TodoInputContainer from '../form/TodoInputContainer.jsx';
import TodoList from '../list/presentational/TodoList.jsx';
import FilterBar from '../filterBar/FilterBar.jsx';
import { getTodosSorted } from '../../actions/getTodosSorted_actions';
import { getTags } from '../../actions/getTags_actions';
import styles from './HomePage.css';

class HomePage extends Component {

  componentDidMount() {
    this.props.getTodosSorted();
    this.props.getTags();
  }

  renderTodoList = () => {
    if (!this.props.todos) {
      return <CircularProgress size={40} thickness={5} />
    } else {
      return <TodoList todos={this.props.todos} />
    };
  }

  renderFilterBar = () => {
    if (!this.props.tags.length || !this.props.todos) {
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
      tags: state.tags.tags,
  };
}

export default connect(mapStateToProps, {
    getTodosSorted,
    getTags
})(HomePage);
