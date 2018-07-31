import {
  GET_TODOS_BEGIN,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODOS_SORTED_BEGIN,
  GET_TODOS_SORTED_SUCCESS,
  GET_TODOS_SORTED_ERROR,
  GET_TODO_ID_BEGIN,
  GET_TODO_ID_SUCCESS,
  GET_TODO_ID_ERROR,
  SORT_TODOS,
} from '../actions/types';
import initialState from './InitialState';

export default function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case GET_TODOS_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case GET_TODOS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case GET_TODOS_SORTED_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SORTED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case GET_TODOS_SORTED_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case SORT_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
}
