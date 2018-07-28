import React from 'react';
import TagsList from '../components/TagsList.jsx';

const SummaryBar = () => {
  return (
    <div>
      <p>{this.props.todos.length} items remaining</p>
      <p>Filter by</p>
      <TagsList 
        tags={this.props.tags} />
    </div>
  );
};

export default SummaryBar;
