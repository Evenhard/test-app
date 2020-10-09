import { fork, all } from 'redux-saga/effects';

import homeSagas from './home/homeSagas';
import productsListSagas from './productsList/productsListSagas';

/**
 * rootSaga
 */
export default function* root() {
  yield fork(homeSagas);
  yield fork(productsListSagas);
}
