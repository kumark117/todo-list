import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';
import tagsReducer from './tags_reducer';
import postTodoReducer from './postTodo_reducer';
import modifyTodoReducer from './modifyTodo_reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  tags: tagsReducer,
  postTodo: postTodoReducer,
  modifyTodo: modifyTodoReducer,
});

export default rootReducer;
