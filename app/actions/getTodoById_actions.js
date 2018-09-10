import axios from 'axios';
import urlBuilder from '../utils/urlBuilder';
import {
  GET_TODO_ID_BEGIN,
  GET_TODO_ID_SUCCESS,
  GET_TODO_ID_ERROR,
} from './types';

export const getTodoByIdBegin = () => ({
  type: GET_TODO_ID_BEGIN,
});

export const getTodoByIdSuccess = response => ({
  type: GET_TODO_ID_SUCCESS,
  payload: response.data,
});

export const getTodoByIdError = () => ({
  type: GET_TODO_ID_ERROR,
});

export function getTodoById(id) {
  return (dispatch) => {
    dispatch(getTodoByIdBegin());
    return axios.get(urlBuilder(`todos/${id}`))
      .then((response) => {
        if (response.status === 200) {
          dispatch(getTodoByIdSuccess(response));
        }
      })
      .catch((error) => {
        dispatch(getTodoByIdError(error));
      });
  };
}
