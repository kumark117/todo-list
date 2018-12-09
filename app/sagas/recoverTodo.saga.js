import "regenerator-runtime/runtime";   // prevents regeneratorRuntime error
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionType from '../actions/types';
import * as actions from '../actions';
import { putRequest } from '../utils/requests';

export function* recoverTodo(action) {
  try {
    const data = yield call(putRequest, action.payload, 'uncomplete');
    yield put(actions.recoverTodoSuccess(data));
  } catch (error) {
    yield put(actions.recoverTodoError(error));
  }
}

function* recoverAndGetTodo(action) {
  yield call(recoverTodo, action);
  yield put(actions.getTodoByIdBegin(action.payload));
}

function* recoverTodoSaga() {
  yield takeEvery(actionType.RECOVER_TODO_BEGIN, recoverAndGetTodo);
}

export default recoverTodoSaga;
