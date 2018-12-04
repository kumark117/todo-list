import {
  POST_TODO_BEGIN,
  POST_TODO_SUCCESS,
  POST_TODO_ERROR,
} from '../actions/types';
import initialState from './initialState';

export default function postTodoReducer(state = initialState.postTodo, action) {
  switch (action.type) {
    case POST_TODO_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case POST_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case POST_TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
