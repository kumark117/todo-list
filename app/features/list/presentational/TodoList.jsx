import React from 'react';
import PropTypes from 'prop-types';
import TodoRowContainer from '../TodoRowContainer.jsx';

export default function TodoList({ todos }) {
  return (
    <div>
      {
        Object.keys(todos).map(key => (
          <TodoRowContainer
            key={todos[key]._id}
            id={todos[key]._id}
            todo={todos[key].todo}
            tags={todos[key].tags}
            complete={todos[key].complete}
          />
        ))
      }
    </div>
  );
}
