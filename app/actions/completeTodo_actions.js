//import { urlBuilder } from '../utils/UrlBuilder';
import axios from 'axios';
import { 
    COMPLETE_TODO_BEGIN,
    COMPLETE_TODO_SUCCESS,
    COMPLETE_TODO_ERROR } from './types';

export const completeTodoBegin = () => {
    return {
        type: COMPLETE_TODO_BEGIN
    };
}

export const completeTodoSuccess = (response) => {
    return {
        type: COMPLETE_TODO_SUCCESS,
        payload: response
    };
}

export const completeTodoError = (error) => {
    return {
        type: COMPLETE_TODO_ERROR,
        payload: error
    }
}

export function completeTodo(id, complete) {
    return (dispatch) => {
        dispatch(completeTodoBegin())
        return axios.put(`http://localhost:8000/api/todos/complete/${id}`)
        .then(response => {
            if (response.status === 200) {
                dispatch(completeTodoSuccess(response))
            }
        })
        error => {
            dispatch(completeTodoError(error))
        };
    }
}