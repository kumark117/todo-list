import React from 'react';
import PropTypes from 'prop-types';
import TodoRowContainer from './TodoRowContainer.jsx';

const TodoList = ({ todos }) => (
  <React.Fragment>
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
  </React.Fragment>
);

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
};

export default TodoList;
