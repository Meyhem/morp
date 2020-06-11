import { takeEvery, put } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'

import * as actions from './actions'

export function* exampleRootSaga() {
  yield takeEvery(getType(actions.dummyAction), dummySaga)
}

export function* dummySaga() {
  yield put({ type: 'TEST_YOUR_SAGAS' })
  yield put({ type: 'TEST_THEM_WELL' })
}
