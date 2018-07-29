import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TagsList from '../components/TagsList.jsx';
import PriorityFilters from '../components/PriorityFilters.jsx';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';

class SummaryBar extends Component {

  onSortTodos = () => {
    console.log('being sorted')
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
        <IconButton 
            onClick={this.onSortTodos}>
            <FilterListIcon />
        </IconButton>
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

/* function mapDispatchToProps(dispatch, values) { 
    return {
        sortTodos: (values) => dispatch(sortTodos(values)),
    };
} */

export default connect(mapStateToProps, null)(SummaryBar);
