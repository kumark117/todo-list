import axios from 'axios';
import { GET_TODO_ID_SUCCESS } from './types';
import { getTodosBegin, getTodosError } from './getTodos_actions';

export const getTodoByIdSuccess = response => ({
  type: GET_TODO_ID_SUCCESS,
  payload: response.data,
});

export function getTodoById(id) {
  return (dispatch) => {
    dispatch(getTodosBegin());
    return axios.get(`http://localhost:8000/api/todos/${id}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(getTodoByIdSuccess(response));
        }
      })
      .catch((error) => {
        dispatch(getTodosError(error));
      });
  };
}
