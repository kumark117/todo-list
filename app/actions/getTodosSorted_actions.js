import axios from 'axios';
import { 
    GET_TODOS_SORTED_BEGIN,
    GET_TODOS_SORTED_SUCCESS,
    GET_TODOS_SORTED_ERROR,
} from './types';

export const getTodosSortedBegin = () => {
    return {
        type: GET_TODOS_SORTED_BEGIN,
    };
}

export const getTodosSortedSuccess = (response) => {
    return {
        type: GET_TODOS_SORTED_SUCCESS,
        payload: response.data,
    };
}

export const getTodosSortedError = (error) => {
    return {
        type: GET_TODOS_SORTED_ERROR,
        payload: error,
    };
}

export function getTodosSorted() {
    return dispatch => {
        dispatch(getTodosSortedBegin())
        return axios.get('http://localhost:8000/api/todos/sorted')
        .then(response => {
            if (response.status === 200) {
                dispatch(getTodosSortedSuccess(response))
            }
        })
        error => {
            dispatch(getTodosSortedError(error))
        };     
    }
}