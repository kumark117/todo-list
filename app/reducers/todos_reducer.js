/* eslint-disable */
import {
  GET_TODOS_BEGIN,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODOS_SORTED_SUCCESS,
  GET_TODO_ID_SUCCESS,
  SORT_TODOS,
} from '../actions/types';
import initialState from './InitialState';
import _ from 'lodash'

/* const updateTodoInsideTodos = (todos, todo) => {
    const x = {}
    for (k in todos) {
        x[k] = todos[k]
    }
    x[todo.id] = todo
    return x
}

const updateValueInMap = (map, key, value) => {
    return {
        ...map,
        [key]: value
    }
} */

/* return {
    ...state,
    isLoading: false,
    todos: {
        ...state.todos,
        [action.payload._id]: {
            ...action.payload,
        }
    }
  }; */


export const selectTodos = (state) => _.values(state.todos)
//map

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
        todos: _.keyBy(action.payload, '_id'),
      };
    case GET_TODOS_SORTED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: _.keyBy(action.payload, '_id'),
      };
    case GET_TODO_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: state.todos.map(todo => {
            if (todo._id === action.payload._id) {
                return action.payload;
            } else {
                return todo;
            }
        })
      };
    case GET_TODOS_ERROR:
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
