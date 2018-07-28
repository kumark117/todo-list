import {
  GET_TAGS_BEGIN,
  GET_TAGS_SUCCESS,
  GET_TAGS_ERROR,
} from '../actions/types';

const initialState = {
  isLoading: false,
  error: null,
  tags: [],
};

export default function tagsReducer(state = initialState, action) {
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
