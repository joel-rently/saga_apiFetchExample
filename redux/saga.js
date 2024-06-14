// sagas.js
import {put, takeEvery} from 'redux-saga/effects';
import {SET_DATA, FETCH_DATA} from './actionTypes';

function* list() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  let data = yield fetch(url);
  data = yield data.json();
  yield put({type: SET_DATA, data});
}

function* Saga() {
  yield takeEvery(FETCH_DATA, list);
}
export default Saga;
