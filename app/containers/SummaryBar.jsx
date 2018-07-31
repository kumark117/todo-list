import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortTodos } from '../actions/sortTodos_actions';
import Button from '@material-ui/core/Button';
import TagsList from '../components/TagsList.jsx';
import PriorityFilters from '../components/PriorityFilters.jsx';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';

class SummaryBar extends Component {

  onSortTodos = () => {
    const sortedTodos = [...this.props.todos].sort((a, b) => a.complete - b.complete);
    this.props.sortTodos(sortedTodos);
  }

  render() {
    const remainingTodos = this.props.todos.filter((todo) => {
      return !todo.complete;
    });
    return (
      <div>
        <p>
          {remainingTodos.length}
          {' '}
          items remaining
        </p>
        <p>
          Filter by
        </p>
        <div style={{ 'display': 'flex', 'alignItems': 'flex-end' }}>
            <IconButton 
                onClick={this.onSortTodos}>
                <FilterListIcon />
            </IconButton>
            <p>complete</p>
        </div>
        <PriorityFilters />
        <TagsList
          tags={this.props.tags}
        />
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
        sortTodos: (sortedTodos) => dispatch(sortTodos(sortedTodos)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryBar);
