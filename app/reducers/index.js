import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import getTodosReducer from './getTodos_reducer';

const rootReducer = combineReducers({
    todos: getTodosReducer,
});

export default rootReducer;