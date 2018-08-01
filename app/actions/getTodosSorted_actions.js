import axios from 'axios';
import { GET_TODOS_SORTED_SUCCESS } from './types';
import { getTodosBegin, getTodosError } from './getTodos_actions';

export const getTodosSortedSuccess = (response) => {
    return {
        type: GET_TODOS_SORTED_SUCCESS,
        payload: response.data,
    };
}

export function getTodosSorted() {
    return dispatch => {
        dispatch(getTodosBegin())
        return axios.get('http://localhost:8000/api/todos/sorted')
        .then(response => {
            if (response.status === 200) {
                dispatch(getTodosSortedSuccess(response))
            }
        })
        error => {
            dispatch(getTodosError(error))
        };     
    }
}