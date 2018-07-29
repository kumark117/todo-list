import {
  COMPLETE_TODO_BEGIN,
  COMPLETE_TODO_SUCCESS,
  COMPLETE_TODO_ERROR,
  RECOVER_TODO_BEGIN,
  RECOVER_TODO_SUCCESS,
  RECOVER_TODO_ERROR,
} from '../actions/types';
import initialState from './InitialState';

export default function modifyTodoReducer(state = initialState.modifyTodo, action) {
  switch (action.type) {
    case COMPLETE_TODO_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case COMPLETE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case COMPLETE_TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case RECOVER_TODO_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case RECOVER_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case RECOVER_TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
