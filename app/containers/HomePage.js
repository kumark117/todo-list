import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TodoInputContainer from './TodoInputContainer';
import { connect } from 'react-redux';
import { getTodos } from '../actions/getTodos_actions';
import { getTags } from '../actions/getTags_actions';
import TodoList from '../components/TodoList';
import CircularProgress from 'material-ui/CircularProgress';
import SummaryBar from './SummaryBar';

class HomePage extends Component {
  componentDidMount() {
    this.props.getTodos();
    this.props.getTags();
  }

  renderTodoList = () => {
    if (!this.props.todos.length) {
      return <CircularProgress 
              size={40} thickness={5} />
    } else {
      return <TodoList 
              todos={this.props.todos} />
    };
  }

  renderSummaryBar = () => {
    if (!this.props.tags || !this.props.todos.length) {
      return <CircularProgress 
              size={40} thickness={5} />
    } else {
      return <SummaryBar
              todos={this.props.todos}
              tags={this.props.tags} />
    };
  }

  render() {
    return (
      <div style={{ 'padding': 50, 'display': 'flex' }}>
        <Paper
          zDepth={2}
          style={{'padding': 40, 'paddingTop': 20, 'marginRight': 25 }}
        >
          { this.renderSummaryBar() }
        </Paper>
        <Paper
          zDepth={2}
          style={{ 'width': '60%', 'padding': 40, 'paddingTop': 20 }} >
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
      isLoading: state.todos.isLoading,
      tags: state.tags.tags
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTodos: () => dispatch(getTodos()),
    getTags: () => dispatch(getTags())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

  
