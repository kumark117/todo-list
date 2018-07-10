import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import { connect } from 'react-redux';
import { getTodos } from '../actions/getTodos_actions';
import TodoList from '../components/TodoList';
import TagsList from '../components/TagsList';
import CircularProgress from 'material-ui/CircularProgress';

export default class SummaryBar extends Component {

  renderSummaryBar = () => {
    if (!this.props.todos || !this.props.tags) {
      return <CircularProgress size={40} thickness={5} />
    } else {
      console.log('props now exist')
      return (
        <div>
          <p>{this.props.todos.length} items remaining</p>
          <TagsList tags={this.props.tags} />
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


  
