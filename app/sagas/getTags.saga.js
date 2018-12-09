import "regenerator-runtime/runtime";   // prevents regeneratorRuntime error
import { call, put, takeEvery } from 'redux-saga/effects';
import * as actionType from '../actions/types';
import * as actions from '../actions';
import { getRequest } from '../utils/requests';

// Worker saga: make async request to get tags
export function* getTags() {
  try {
    const data = yield call(getRequest, 'tags');
    yield put(actions.getTagsSuccess(data));
  } catch (error) {
    yield put(actions.getTagsError(error));
  }
}

// Watcher saga: spawn a new getTags task on each GET_TAGS_BEGIN
function* getTagsSaga() {
  yield takeEvery(actionType.GET_TAGS_BEGIN, getTags);
}

export default getTagsSaga;
