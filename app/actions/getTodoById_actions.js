import axios from 'axios';
import urlBuilder from '../utils/url-builder';
import {
  GET_TODO_ID_BEGIN,
  GET_TODO_ID_SUCCESS,
  GET_TODO_ID_ERROR,
} from './types';

const getTodoByIdBegin = () => ({
  type: GET_TODO_ID_BEGIN,
});

const getTodoByIdSuccess = response => ({
  type: GET_TODO_ID_SUCCESS,
  payload: response.data,
});

const getTodoByIdError = () => ({
  type: GET_TODO_ID_ERROR,
});

export default function getTodoById(id) {
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
