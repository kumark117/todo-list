import axios from 'axios';
import urlBuilder from '../utils/url-builder';
import {
  COMPLETE_TODO_BEGIN,
  COMPLETE_TODO_SUCCESS,
  COMPLETE_TODO_ERROR,
} from './types';

const completeTodoBegin = () => ({
  type: COMPLETE_TODO_BEGIN,
});

const completeTodoSuccess = response => ({
  type: COMPLETE_TODO_SUCCESS,
  payload: response,
});

const completeTodoError = error => ({
  type: COMPLETE_TODO_ERROR,
  payload: error,
});

export default function completeTodo(id) {
  return (dispatch) => {
    dispatch(completeTodoBegin());
    return axios.put(urlBuilder(`todos/${id}/complete`))
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
