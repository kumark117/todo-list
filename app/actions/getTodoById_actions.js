import axios from 'axios';
import { GET_TODO_ID_SUCCESS } from './types';
import { getTodosBegin, getTodosError } from './getTodos_actions';

export const getTodoByIdSuccess = (response) => {
  return {
    type: GET_TODO_ID_SUCCESS,
    payload: response.data,
  };
};

export function getTodos() {
  return (dispatch) => {
    dispatch(getTodosBegin());
    return axios.get(`http://localhost:8000/api/todos/${values}`)
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          dispatch(getTodoByIdSuccess(response))
        }
      })
      error => {
        dispatch(getTodosError(error))
      };
  };
}
