import axios from 'axios';
import {
  POST_TODO_BEGIN,
  POST_TODO_SUCCESS,
  POST_TODO_ERROR,
} from './types';

const postTodoBegin = () => ({
  type: POST_TODO_BEGIN,
});

const postTodoSuccess = response => ({
  type: POST_TODO_SUCCESS,
  payload: response,
});

const postTodoError = error => ({
  type: POST_TODO_ERROR,
  payload: error,
});

export default function postTodo(values) {
  return (dispatch) => {
    dispatch(postTodoBegin());
    return axios.post('http://localhost:8000/api/todos', values)
      .then((response) => {
        if (response.status === 201) {
          dispatch(postTodoSuccess(response));
        }
      })
      .catch((error) => {
        dispatch(postTodoError(error));
      });
  };
}
