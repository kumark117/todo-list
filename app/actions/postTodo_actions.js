import axios from 'axios';
import {
  POST_TODO_BEGIN,
  POST_TODO_SUCCESS,
  POST_TODO_ERROR,
} from './types';

export const postTodoBegin = () => {
  return {
    type: POST_TODO_BEGIN,
  };
};

export const postTodoSuccess = (response) => {
  return {
    type: POST_TODO_SUCCESS,
    payload: response,
  };
};

export const postTodoError = (error) => {
  return {
    type: POST_TODO_ERROR,
    payload: error,
  };
};

export function postTodo(values) {
  console.log(values);
  return (dispatch) => {
    dispatch(postTodoBegin());
    return axios.post('http://localhost:8000/api/todos', values)
      .then(response => {
        if (response.status === 201) {
          dispatch(postTodoSuccess(response))
        }
      });
      error => {
        dispatch(postTodoError(error))
      };
  }
}