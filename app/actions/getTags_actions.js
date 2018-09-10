import axios from 'axios';
import urlBuilder from '../utils/urlBuilder';
import {
  GET_TAGS_BEGIN,
  GET_TAGS_SUCCESS,
  GET_TAGS_ERROR,
} from './types';

export const getTagsBegin = () => ({
  type: GET_TAGS_BEGIN,
});

export const getTagsSuccess = response => ({
  type: GET_TAGS_SUCCESS,
  payload: response.data,
});

export const getTagsError = error => ({
  type: GET_TAGS_ERROR,
  payload: error,
});

export function getTags() {
  return (dispatch) => {
    dispatch(getTagsBegin());
    return axios.get(urlBuilder('tags'))
      .then((response) => {
        if (response.status === 200) {
          dispatch(getTagsSuccess(response));
        }
      })
      .catch((error) => {
        dispatch(getTagsError(error));
      });
  };
}
