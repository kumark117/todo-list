import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';
import tagsReducer from './tags_reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  tags: tagsReducer,
});

export default rootReducer;
