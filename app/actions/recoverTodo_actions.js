import axios from 'axios';
import urlBuilder from '../utils/urlBuilder';
import {
  RECOVER_TODO_BEGIN,
  RECOVER_TODO_SUCCESS,
  RECOVER_TODO_ERROR,
} from './types';

export const recoverTodoBegin = () => ({
  type: RECOVER_TODO_BEGIN,
});

export const recoverTodoSuccess = response => ({
  type: RECOVER_TODO_SUCCESS,
  payload: response,
});

export const recoverTodoError = error => ({
  type: RECOVER_TODO_ERROR,
  payload: error,
});

export function recoverTodo(id) {
  return (dispatch) => {
    dispatch(recoverTodoBegin());
    return axios.put(urlBuilder(`todos/${id}/recover`))
      .then((response) => {
        if (response.status === 200) {
          dispatch(recoverTodoSuccess(response));
        }
      })
      .catch((error) => {
        dispatch(recoverTodoError(error));
      });
  };
}


// ------
// https://github.com/benvan/redux-asynch-middleware
// import {asynch} from 'redux-asynch-middleware'
// const RECOVER_TODO = asynch('RECOVER_TODO')

// export const recoverTodo = (id) => ({
//     type: RECOVER_TODO,
//     payload:{id},
//     promise: getJSON(`http://localhost:8000/api/todos/${id}/recover`)
// })