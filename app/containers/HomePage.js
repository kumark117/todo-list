import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextInput from '../components/TextInput';
import { connect } from 'react-redux';
import { getTodos } from '../actions/getTodos_action';
import TodoList from '../components/TodoList';

class HomePage extends Component {
  componentDidMount() {
    this.props.getTodos();
  }
  
    render() {
      return (
        <div style={{ 'padding': 50 }}>
          <Paper
            zDepth={2}
            style={{ 'padding': 40, 'paddingTop': 20 }} >
            <TextInput />
            <TodoList />
          </Paper>
        </div>
      )
    }
}

function mapStateToProps(state) {
  return { 
      isLoading: state.todos.isLoading,
      data: state.todos.data 
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTodos: () => dispatch(getTodos())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

  
