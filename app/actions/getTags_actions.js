//import { urlBuilder } from '../utils/UrlBuilder';
import axios from 'axios';
import { 
    GET_TAGS_BEGIN,
    GET_TAGS_SUCCESS,
    GET_TAGS_ERROR } from './types';

export const getTagsBegin = () => {
    return {
        type: GET_TAGS_BEGIN
    };
}

export const getTagsSuccess = (response) => {
    return {
        type: GET_TAGS_SUCCESS,
        payload: response.data
    };
}

export const getTagsError = (error) => {
    return {
        type: GET_TAGS_ERROR,
        payload: error
    }
}

export function getTags() {
    return dispatch => {
        dispatch(getTagsBegin())
        return axios.get('http://localhost:8000/api/tags')
        .then(response => {
            if (response.status === 200) {
                dispatch(getTagsSuccess(response))
            }
        })
        error => {
            dispatch(getTagsError(error))
        };    
    }
}