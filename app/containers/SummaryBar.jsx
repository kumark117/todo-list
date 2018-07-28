import React from 'react';
import TagsList from '../components/TagsList.jsx';

const SummaryBar = ({ todos, tags }) => (
  <div>
    <p>
      {todos.length}
      items remaining
    </p>
    <p>
      Filter by
    </p>
    <TagsList
      tags={tags}
    />
  </div>
);

export default SummaryBar;
