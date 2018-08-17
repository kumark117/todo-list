import axios from 'axios';
import {
  COMPLETE_TODO_BEGIN,
  COMPLETE_TODO_SUCCESS,
  COMPLETE_TODO_ERROR,
} from './types';

export const completeTodoBegin = () => ({
  type: COMPLETE_TODO_BEGIN,
});

export const completeTodoSuccess = response => ({
  type: COMPLETE_TODO_SUCCESS,
  payload: response,
});

export const completeTodoError = error => ({
  type: COMPLETE_TODO_ERROR,
  payload: error,
});

export function completeTodo(id) {
  return (dispatch) => {
    dispatch(completeTodoBegin());
    return axios.put(`http://localhost:8000/api/todos/${id}/complete`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(completeTodoSuccess(response));
        }
      })
      .catch((error) => {
        dispatch(completeTodoError(error));
      });
  };
}
