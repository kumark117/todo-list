import {
  GET_TODOS_BEGIN,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  POST_TODO_BEGIN,
  POST_TODO_SUCCESS,
  POST_TODO_ERROR,
  REMOVE_TODO_BEGIN,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_ERROR,
} from '../actions/types';

const initialState = {
  isLoading: false,
  error: null,
  todos: {},
};

export default function todosReducer(state = initialState, action) {
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
    case REMOVE_TODO_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case REMOVE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case REMOVE_TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
