import "regenerator-runtime/runtime";   // prevents regeneratorRuntime error
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionType from '../actions/types';
import * as actions from '../actions';
import { deleteRequest } from '../utils/requests';

function* removeTodo(action) {
  try {
    const data = yield call(deleteRequest, action.payload);
    yield put(actions.removeTodoSuccess(data));
  } catch (error) {
    yield put(actions.removeTodoError(error));
  }
}

function* removeAndGetTodos(action) {
  yield call(removeTodo, action);
  yield put(actions.getTodosBegin());
}

function* removeTodoSaga() {
  yield takeEvery(actionType.REMOVE_TODO_BEGIN, removeAndGetTodos);
}

export default removeTodoSaga;
