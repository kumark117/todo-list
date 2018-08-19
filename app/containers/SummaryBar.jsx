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
    this.props.sortTodos();
  }

  render() {
    const { todos } = this.props;
    const remainingTodos = Object.keys(todos).filter(key => {
      return !todos[key].complete;
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

export default connect(mapStateToProps, {
    sortTodos
})(SummaryBar);
