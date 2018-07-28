import React from 'react';
import TodoRowContainer from '../containers/TodoRowContainer';

export default function TodoList({ todos }) {
  return (
    <div>
      {
        todos.map(todo => (
          <TodoRowContainer
            key={todo._id}
            id={todo._id}
            todo={todo.todo}
            tags={todo.tags}
            complete={todo.complete}
          />
        ))
      }
    </div>
  );
}
