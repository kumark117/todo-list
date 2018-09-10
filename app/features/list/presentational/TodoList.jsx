import React from 'react';
import TodoRowContainer from '../TodoRowContainer.jsx';

const TodoList = ({ todos }) => (
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

export default TodoList;
