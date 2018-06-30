import { 
    GET_TODOS_BEGIN,
    GET_TODOS_SUCCESS,
    GET_TODOS_ERROR } from '../actions/types';

const initialState = {
    isLoading: false,
    error: null,
    todos: {}
}
    
export default function GetTodosReducer(state=initialState, action) {
    switch (action.type) {
        case GET_TODOS_BEGIN:
            return {
                ...state, 
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case GET_TODOS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }  
        default:
            return state;
    }
}