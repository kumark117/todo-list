import * as actions from './types';

/**
 * CRUD action creators for todos and tags
 */

// Actions creators for posting new todos
export const postTodoBegin = id => ({
  type: actions.POST_TODO_BEGIN,
  payload: id,
});

export const postTodoSuccess = response => ({
  type: actions.POST_TODO_SUCCESS,
  payload: response,
});

export const postTodoError = error => ({
  type: actions.POST_TODO_ERROR,
  payload: error,
});

// Action creators for getting todos
export const getTodoByIdBegin = id => ({
  type: actions.GET_TODO_ID_BEGIN,
  payload: id,
});

export const getTodoByIdSuccess = response => ({
  type: actions.GET_TODO_ID_SUCCESS,
  payload: response.data,
});

export const getTodoByIdError = () => ({
  type: actions.GET_TODO_ID_ERROR,
});

export const getTodosBegin = () => ({
  type: actions.GET_TODOS_BEGIN,
});

export const getTodosSuccess = response => ({
  type: actions.GET_TODOS_SUCCESS,
  payload: response.data,
});

export const getTodosError = error => ({
  type: actions.GET_TODOS_ERROR,
  payload: error,
});

// Action creators for completing/recovering todos
export const completeTodoBegin = id => ({
  type: actions.COMPLETE_TODO_BEGIN,
  payload: id,
});

export const completeTodoSuccess = response => ({
  type: actions.COMPLETE_TODO_SUCCESS,
  payload: response,
});

export const completeTodoError = error => ({
  type: actions.COMPLETE_TODO_ERROR,
  payload: error,
});

export const recoverTodoBegin = id => ({
  type: actions.RECOVER_TODO_BEGIN,
  payload: id,
});

export const recoverTodoSuccess = response => ({
  type: actions.RECOVER_TODO_SUCCESS,
  payload: response,
});

export const recoverTodoError = error => ({
  type: actions.RECOVER_TODO_ERROR,
  payload: error,
});

// Actions creactors for removing todos
export const removeTodoBegin = id => ({
  type: actions.REMOVE_TODO_BEGIN,
  payload: id,
});

export const removeTodoSuccess = response => ({
  type: actions.REMOVE_TODO_SUCCESS,
  payload: response,
});

export const removeTodoError = error => ({
  type: actions.REMOVE_TODO_ERROR,
  payload: error,
});

// Actions creators for getting tags
export const getTagsBegin = () => ({
  type: actions.GET_TAGS_BEGIN,
});

export const getTagsSuccess = response => ({
  type: actions.GET_TAGS_SUCCESS,
  payload: response.data,
});

export const getTagsError = error => ({
  type: actions.GET_TAGS_ERROR,
  payload: error,
});
