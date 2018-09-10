import axios from 'axios';
import urlBuilder from '../utils/urlBuilder';
import {
  REMOVE_TODO_BEGIN,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_ERROR,
} from './types';

export const removeTodoBegin = () => ({
  type: REMOVE_TODO_BEGIN,
});

export const removeTodoSuccess = response => ({
  type: REMOVE_TODO_SUCCESS,
  payload: response,
});

export const removeTodoError = error => ({
  type: REMOVE_TODO_ERROR,
  payload: error,
});

export function removeTodo(values) {
  return (dispatch) => {
    dispatch(removeTodoBegin());
    return axios.delete(urlBuilder(`todos/${values}`))
      .then((response) => {
        if (response.status === 200) {
          dispatch(removeTodoSuccess(response));
        }
      })
      .catch((error) => {
        dispatch(removeTodoError(error));
      });
  };
}
