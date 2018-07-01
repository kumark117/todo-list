//import { urlBuilder } from '../utils/UrlBuilder';
import axios from 'axios';
import { 
    POST_TODOS_BEGIN,
    POST_TODOS_SUCCESS,
    POST_TODOS_ERROR } from './types';

export const postTodosBegin = () => {
    return {
        type: POST_TODOS_BEGIN
    };
}

export const postTodosSuccess = (response) => {
    return {
        type: POST_TODOS_SUCCESS,
        payload: response
    };
}

export const postTodosError = (error) => {
    return {
        type: POST_TODOS_ERROR,
        payload: error
    }
}

export function postTransaction(values) {
    return (dispatch) => {
        dispatch(postTodosBegin())
        return axios.post('http://localhost:8000/api/todos', values)
        .then(response => {
            console.log(response)
            if (response.status === 201) {
                dispatch(postTodosSuccess(response))
            }
        })
        .catch(error => {
            dispatch(postTodosError(error))
        })
    }
}