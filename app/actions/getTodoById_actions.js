import axios from 'axios';
import {
  GET_TODO_ID_BEGIN,
  GET_TODO_ID_SUCCESS,
  GET_TODO_ID_ERROR,
} from './types';

export const getTodoByIdBegin = () => {
  return {
    type: GET_TODO_ID_BEGIN,
  };
};

export const getTodoByIdSuccess = (response) => {
  return {
    type: GET_TODO_ID_SUCCESS,
    payload: response.data,
  };
};

export const getTodoByIdError = (error) => {
  return {
    type: GET_TODO_ID_ERROR,
    payload: error,
  };
};

export function getTodos() {
  return (dispatch) => {
    dispatch(getTodoByIdBegin());
    return axios.get(`http://localhost:8000/api/todos/${values}`)
      .then(response => {
        if (response.status === 200) {
          dispatch(getTodoByIdSuccess(response))
        }
      })
      (error) => {
        dispatch(getTodoIdByError(error))
      };
  };
}
