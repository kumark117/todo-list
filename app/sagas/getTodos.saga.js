import "regenerator-runtime/runtime";   // prevents regeneratorRuntime error
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionType from '../actions/types';
import * as actions from '../actions';
import { getRequest, getRequestById } from '../utils/requests';

// Worker sagas: make async request to get todos
function* getTodos() {
  try {
    const data = yield call(getRequest, 'todos');
    yield put(actions.getTodosSuccess(data));
  } catch (error) {
    yield put(actions.getTagsError(error));
  }
}

export function* getTodoById(action) {
  try {
    const data = yield call(getRequestById, action.payload);
    yield put(actions.getTodoByIdSuccess(data));
  } catch (error) {
    yield put(actions.getTodoByIdError(error));
  }
}

// Watcher saga: spawn a new getTodos task on each GET_TODOS_BEGIN
function* getTodosSaga() {
  yield takeEvery(actionType.GET_TODOS_BEGIN, getTodos);
  yield takeEvery(actionType.GET_TODO_ID_BEGIN, getTodoById);
}

export default getTodosSaga;
