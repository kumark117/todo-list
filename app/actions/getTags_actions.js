import axios from 'axios';
import urlBuilder from '../utils/url-builder';
import {
  GET_TAGS_BEGIN,
  GET_TAGS_SUCCESS,
  GET_TAGS_ERROR,
} from './types';

const getTagsBegin = () => ({
  type: GET_TAGS_BEGIN,
});

const getTagsSuccess = response => ({
  type: GET_TAGS_SUCCESS,
  payload: response.data,
});

const getTagsError = error => ({
  type: GET_TAGS_ERROR,
  payload: error,
});

export default function getTags() {
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
