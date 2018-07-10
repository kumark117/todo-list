import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { connect } from 'react-redux';
import { getTodos } from '../actions/getTodos_actions';
import TodoList from '../components/TodoList';
import TagsList from '../components/TagsList';
import CircularProgress from 'material-ui/CircularProgress';

export default class SummaryBar extends Component {

  render() {
    if (!this.props.todos || !this.props.tags) {
      return <CircularProgress size={40} thickness={5} />
    } else {
      return (
        <div>
          <p>{this.props.todos.length} items remaining</p>
          <p>Filter by</p>
          <TagsList tags={this.props.tags} />
        </div>
      )
    }
  }
}



  
