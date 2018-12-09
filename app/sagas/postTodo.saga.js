import "regenerator-runtime/runtime";   // prevents regeneratorRuntime error
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionType from '../actions/types';
import * as actions from '../actions';
import { postRequest } from '../utils/requests';

function* postTodo(action) {
  try {
    const data = yield call(postRequest, action.payload);
    yield put(actions.postTodoSuccess(data));
  } catch (error) {
    yield put(actions.postTodoError(error));
  }
}

function* postAndGetTodo(action) {
  yield call(postTodo, action);
  yield put(actions.getTodosBegin(action.payload));
  yield put(actions.getTagsBegin());
}

function* postTodoSaga() {
  yield takeEvery(actionType.POST_TODO_BEGIN, postAndGetTodo);
}

export default postTodoSaga;
