import { combineReducers } from 'redux';
import todosReducer from './todos.reducer';
import tagsReducer from './tags.reducer';
import postTodoReducer from './postTodo.reducer';
import modifyTodoReducer from './modifyTodo.reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  tags: tagsReducer,
  postTodo: postTodoReducer,
  modifyTodo: modifyTodoReducer,
});

export default rootReducer;
