import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todosReducer from './todos_reducer';
import postTodoReducer from './postTodo_reducer';

const rootReducer = combineReducers({
    todos: todosReducer
});

export default rootReducer;