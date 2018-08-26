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

// a function to manually sort the todos by complete
const sortTodos = (state) => {
    const sortedKeys = Object.keys(state).sort((a, b) => state[a].complete - state[b].complete)
    let sortedMap = {};
    sortedKeys.map(key => {
        sortedMap[key] = state[key]
    })
    return sortedMap;
}

// function to return a filteredTodos object
const filterTodos = (state, filterField, filterParam) => {
    if (filterField === "priority") {
        var filteredKeys = Object.keys(state).filter(key => {
            return state[key].priority === filterParam;
        })
    } else if (filterField === "tag") {
        var filteredKeys = Object.keys(state).filter(key => {
            return state[key].tags[0] === filterParam;
        })
    }
    let filteredMap = {};
    filteredKeys.map(key => {
        filteredMap[key] = state[key]
    })
    return filteredMap;
}

const updateFilteredTodos = (state, payload) => {
    if (Object.keys(state).length > 0) {
        return {
            ...state,
            [payload._id]: payload,
        }
    } else {
        return {};
    }
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
        filteredTodos: updateFilteredTodos(state.filteredTodos, action.payload),
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
          filteredTodos: filterTodos(state.todos, action.payload.filterField, action.payload.filter),
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