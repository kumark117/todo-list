/* eslint-disable */
import {
  GET_TODOS_BEGIN,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODOS_SORTED_SUCCESS,
  GET_TODO_ID_SUCCESS,
  SORT_TODOS,
  FILTER_TODOS,
} from '../actions/types';
import initialState from './InitialState';
import _ from 'lodash'

// a function to manually sort the todos by whether they are complete
const sortTodos = (state) => {
    //buildKeysList(state);
    const sortedKeys = Object.keys(state).sort((a, b) => state[a].complete - state[b].complete)
    let sortedMap = {};
    sortedKeys.map(key => {
        sortedMap[key] = state[key]
    })
    return sortedMap;
}

// function to return a filteredTodos object
const filterTodos = (state, filterParam) => {
    const filteredKeys = Object.keys(state).filter(key => {
        return state[key].priority === filterParam
    })
    let filteredMap = {};
    filteredKeys.map(key => {
        filteredMap[key] = state[key]
    })
    return filteredMap;
}

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
        todos: {
            ...state.todos,
            [action.payload._id]: action.payload,
        },
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
        todos: sortTodos(state.todos),
      };
    case FILTER_TODOS:
      return {
          ...state,
          filteredTodos: filterTodos(state.todos, action.payload),
      };
    default:
      return state;
  }
}

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