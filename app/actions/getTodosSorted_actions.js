import axios from 'axios';
import { GET_TODOS_SORTED_SUCCESS } from './types';
import { getTodosBegin, getTodosError } from './getTodos_actions';

export const getTodosSortedSuccess = response => ({
  type: GET_TODOS_SORTED_SUCCESS,
  payload: response.data,
});

export function getTodosSorted() {
  return (dispatch) => {
    dispatch(getTodosBegin());
    return axios.get('http://localhost:8000/api/todos?query=sorted')
      .then((response) => {
        if (response.status === 200) {
          dispatch(getTodosSortedSuccess(response));
        }
      })
      .catch((error) => {
        dispatch(getTodosError(error));
      });
  };
}
