import {takeEvery, put, call} from 'redux-saga/effects';
import {LOAD_CATEGORIES, putCategories} from './homeActions';
import axios from 'axios';

function fetchCategories() {
  return axios
    .get(`http://my-json-server.typicode.com/Evenhard/demo/categories`)
    .then((result) => result.data);
}

function* workerLoadCategories() {
  const data = yield call(fetchCategories);

  yield put(putCategories(data));
}

export default function* watcherSaga() {
  yield takeEvery(LOAD_CATEGORIES, workerLoadCategories);
}
