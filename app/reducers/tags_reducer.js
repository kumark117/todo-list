import {
  GET_TAGS_BEGIN,
  GET_TAGS_SUCCESS,
  GET_TAGS_ERROR,
} from '../actions/types';
import initialState from './InitialState';

export default function tagsReducer(state = initialState.tags, action) {
  switch (action.type) {
    case GET_TAGS_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TAGS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tags: action.payload,
      };
    case GET_TAGS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
