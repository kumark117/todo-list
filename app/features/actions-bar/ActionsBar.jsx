import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import TagsList from './TagsList.jsx';
import PriorityFilters from './PriorityFilters.jsx';
import AddButton from '../../components/AddButton.jsx';
import * as actions from '../../actions/types';

class ActionsBar extends Component {

  onSortTodos = () => {
    this.props.dispatch({ type: actions.SORT_TODOS })
  }

  onFilterTodos = (filterField, filter) => {
    if (filter === "All") {
        this.props.dispatch({ type: actions.UNFILTER_TODOS })
    } else {
        this.props.dispatch({
			type: actions.FILTER_TODOS,
			payload: {
				filterField,
				filter,
			}
        })
    }
  }

  render() {
    const { todos, tags } = this.props;
    const remainingTodos = Object.keys(todos).filter(key => !todos[key].complete);
    return (
      <div style={{ 'paddingTop': '15' }}>
        <strong>
          {remainingTodos.length} items remaining
        </strong>
        <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 20, paddingTop: 20 }}>
            <p>Sort by complete</p>
            <IconButton onClick={this.onSortTodos}>
                <FilterListIcon />
            </IconButton>
        </div>
        <div>
          <p> Filter by priority:</p>
          <PriorityFilters 
            onSelectPriority={this.onFilterTodos}
            todos={todos}
            remainingTodos={remainingTodos} 
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <p> Filter by tags:</p>
          <TagsList 
            tags={tags}
            onSelectTag={this.onFilterTodos}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  tags: state.tags.tags,
});

export default connect(mapStateToProps)(ActionsBar);
