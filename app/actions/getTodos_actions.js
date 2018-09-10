import axios from 'axios';
import urlBuilder from '../utils/urlBuilder';
import {
  GET_TODOS_BEGIN,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
} from './types';

export const getTodosBegin = () => ({
  type: GET_TODOS_BEGIN,
});

export const getTodosSuccess = response => ({
  type: GET_TODOS_SUCCESS,
  payload: response.data,
});

export const getTodosError = error => ({
  type: GET_TODOS_ERROR,
  payload: error,
});

export function getTodos() {
  return (dispatch) => {
    dispatch(getTodosBegin());
    return axios.get(urlBuilder('todos?query=sorted'))
      .then((response) => {
        if (response.status === 200) dispatch(getTodosSuccess(response))
      })
      .catch((error) => {
        dispatch(getTodosError(error));
      });
  };
}
