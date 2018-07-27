//import { urlBuilder } from '../utils/UrlBuilder';
import axios from 'axios';
import { 
    RECOVER_TODO_BEGIN,
    RECOVER_TODO_SUCCESS,
    RECOVER_TODO_ERROR } from './types';

export const recoverTodoBegin = () => {
    return {
        type: RECOVER_TODO_BEGIN
    };
}

export const recoverTodoSuccess = (response) => {
    return {
        type: RECOVER_TODO_SUCCESS,
        payload: response
    };
}

export const recoverTodoError = (error) => {
    return {
        type: RECOVER_TODO_ERROR,
        payload: error
    }
}

export function recoverTodo(id, complete) {
    return (dispatch) => {
        dispatch(recoverTodoBegin())
        return axios.put(`http://localhost:8000/api/todos/recover/${id}`)
        .then(response => {
            if (response.status === 200) {
                dispatch(recoverTodoSuccess(response))
            }
        })
        error => {
            dispatch(recoverTodoError(error))
        };
    }
}