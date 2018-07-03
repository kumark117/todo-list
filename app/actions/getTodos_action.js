//import { urlBuilder } from '../utils/UrlBuilder';
import axios from 'axios';
import { 
    GET_TODOS_BEGIN,
    GET_TODOS_SUCCESS,
    GET_TODOS_ERROR } from './types';

export const getTodosBegin = () => {
    return {
        type: GET_TODOS_BEGIN
    };
}

export const getTodosSuccess = (response) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: response.data
    };
}

export const getTodosError = (error) => {
    return {
        type: GET_TODOS_ERROR,
        payload: error
    }
}

export function getTodos() {
    return dispatch => {
        dispatch(getTodosBegin())
        return axios.get('http://localhost:8000/api/todos')
        .then(response => {
            if (response.status === 200) {
                dispatch(getTodosSuccess(response))
            }
        })
        .catch(error => {
            dispatch(getTodosError(error))
        })     
    }
}