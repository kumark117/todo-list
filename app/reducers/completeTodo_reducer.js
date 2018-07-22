import { 
    COMPLETE_TODO_BEGIN,
    COMPLETE_TODO_SUCCESS,
    COMPLETE_TODO_ERROR } from '../actions/types';

const initialState = {
    isLoading: false,
    error: null
}
    
export default function CompleteTodoReducer(state=initialState, action) {
    switch (action.type) {
        case COMPLETE_TODO_BEGIN:
            return {
                ...state, 
                isLoading: true
            }
        case COMPLETE_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case COMPLETE_TODO_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }  
        default:
            return state;
    }
}