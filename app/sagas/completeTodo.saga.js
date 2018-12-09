import "regenerator-runtime/runtime";   // prevents regeneratorRuntime error
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionType from '../actions/types';
import * as actions from '../actions';
import { putRequest } from '../utils/requests';

function* completeTodo(action) {
  try {
    const data = yield call(putRequest, action.payload, 'complete');
    yield put(actions.completeTodoSuccess(data));
  } catch (error) {
    yield put(actions.completeTodoError(error));
  }
}

function* completeAndGetTodo(action) {
  yield call(completeTodo, action);
  yield put(actions.getTodoByIdBegin(action.payload));
}

function* completeTodoSaga() {
  yield takeEvery(actionType.COMPLETE_TODO_BEGIN, completeAndGetTodo);
}

export default completeTodoSaga;
