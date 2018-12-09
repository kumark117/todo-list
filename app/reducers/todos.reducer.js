/* eslint-disable */
import {
  GET_TODOS_BEGIN,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODOS_SORTED_SUCCESS,
  GET_TODO_ID_SUCCESS,
  SORT_TODOS,
  FILTER_TODOS,
  UNFILTER_TODOS,
} from '../actions/types';
import initialState from './initialState';
import _ from 'lodash';

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
          isFiltered: true,
          filteredTodos: filterTodos(state.todos, action.payload.filterField, action.payload.filter),
      };
    case UNFILTER_TODOS:
      return {
          ...state,
          isFiltered: false,
          filteredTodos: {},
      };
    default:
      return state;
  }
}

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
    switch(filterField) {
        case "priority":
            var filteredKeys = Object.keys(state).filter(key => {
                return state[key].priority === filterParam;
            });
            break;
        case "tag":
            var filteredKeys = Object.keys(state).filter(key => {
                return state[key].tags.includes(filterParam);
            });
            break;
    }
    let filteredMap = {};
    filteredKeys.map(key => {
        filteredMap[key] = state[key]
    })

    return filteredMap;
}

const updateFilteredTodos = (state, payload) => {
    if (Object.keys(state).length) {
        return {
            ...state,
            [payload._id]: payload,
        }
    } else {
        return {};
    }
}