import { 
    POST_TODOS_BEGIN,
    POST_TODOS_SUCCESS,
    POST_TODOS_ERROR } from '../actions/types';

const initialState = {
    isLoading: false,
    error: null
}
    
export default function PostTodosReducer(state=initialState, action) {
    switch (action.type) {
        case POST_TODOS_BEGIN:
            return {
                ...state, 
                isLoading: true
            }
        case POST_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case POST_TODOS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }  
        default:
            return state;
    }
}