import { put, takeLatest } from 'redux-saga/effects'
import data from './data/data.json';

function* fetchList() {
  yield put({type: 'FETCH_SUCCEEDED', payload: data});
}

function* sagas() {
  yield takeLatest('FETCH_REQUESTED', fetchList);
}

export default sagas;
