import {takeEvery, put, call} from 'redux-saga/effects';
import {LOAD_PRODUCTS, putProducts} from './productsListActions';
import axios from 'axios';

function fetchProducts(categoryId) {
  return axios
    .get(`http://my-json-server.typicode.com/Evenhard/demo/categories/${categoryId}/products`)
    .then((result) => result.data);
}

function* workerLoadProducts(action) {
  const data = yield call(fetchProducts, action.categoryId);

  yield put(putProducts(data));
}

export default function* watcherSaga() {
  yield takeEvery(LOAD_PRODUCTS, workerLoadProducts);
}
