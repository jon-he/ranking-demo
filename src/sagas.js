import { call, put, takeLatest } from 'redux-saga/effects'

function* fetchList() {
  try {
    const res = yield call(fetch, 'https://webcdn.17app.co/campaign/pretest/data.json');
    const response = yield res.json();

    if (response) {
      yield put({type: 'FETCH_SUCCEEDED', payload: response});
    } else {
      yield put({type: 'FETCH_FAILED'});
    }
  } catch (error) {
    console.log(error);
    yield put({type: 'FETCH_FAILED'});
  }
}

function* sagas() {
  yield takeLatest('FETCH_REQUESTED', fetchList);
}

export default sagas;
