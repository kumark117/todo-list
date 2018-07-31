import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TodoInputContainer from './TodoInputContainer';
import { connect } from 'react-redux';
import { getTodosSorted } from '../actions/getTodosSorted_actions';
import { getTags } from '../actions/getTags_actions';
import TodoList from '../components/TodoList.jsx';
import CircularProgress from 'material-ui/CircularProgress';
import SummaryBar from './SummaryBar.jsx';

class HomePage extends Component {
  componentDidMount() {
    this.props.getTodosSorted();
    this.props.getTags();
  }

  renderTodoList = () => {
    if (!this.props.todos.length) {
      return <CircularProgress 
              size={40} thickness={5} />
    } else {
      console.log('todos at home', this.props.todos)
      return <TodoList 
              todos={this.props.todos} />
    };
  }

  renderSummaryBar = () => {
    if (!this.props.tags.length || !this.props.todos.length) {
      return <CircularProgress 
                size={40} thickness={5} />
    } else {
      return <SummaryBar />
    };
  }

  render() {
    return (
      <div style={{ 'padding': 40, 'display': 'flex' }}>
        <Paper
          zDepth={2}
          style={{'padding': 40, 'paddingTop': 20, 'marginRight': 25 }}
        >
          { this.renderSummaryBar() }
        </Paper>
        <Paper
          zDepth={2}
          style={{ 'width': '70%', 'padding': 40, 'paddingTop': 20 }} >
          <TodoInputContainer 
            todos={this.props.todos} />
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

function mapDispatchToProps(dispatch) {
  return {
    getTodosSorted: () => dispatch(getTodosSorted()),
    getTags: () => dispatch(getTags()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
