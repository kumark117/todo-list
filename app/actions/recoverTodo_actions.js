import axios from 'axios';
import { asynch } from 'redux-async-middleware';
import urlBuilder from '../utils/url-builder';
import {
  RECOVER_TODO_BEGIN,
  RECOVER_TODO_SUCCESS,
  RECOVER_TODO_ERROR,
} from './types';

const recoverTodoBegin = () => ({
  type: RECOVER_TODO_BEGIN,
});

const recoverTodoSuccess = response => ({
  type: RECOVER_TODO_SUCCESS,
  payload: response,
});

const recoverTodoError = error => ({
  type: RECOVER_TODO_ERROR,
  payload: error,
});

export default function recoverTodo(id) {
  return (dispatch) => {
    dispatch(recoverTodoBegin());
    return axios.put(urlBuilder(`todos/${id}/uncomplete`))
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
