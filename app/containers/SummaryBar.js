import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TodoInputContainer from './TodoInputContainer';
import { connect } from 'react-redux';
import { getTodos } from '../actions/getTodos_actions';
import TodoList from '../components/TodoList';
import CircularProgress from 'material-ui/CircularProgress';

export default class SummaryBar extends Component {

  renderSummaryBar = () => {
    if (!this.props.todos || !this.props.tags) {
      return <CircularProgress size={40} thickness={5} />
    } else {
      return (
        <div>
          <p>{this.props.todos.length} items remaining</p>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderSummaryBar()}
      </div>
    )
  }
}


  
