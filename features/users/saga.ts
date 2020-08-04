import { put, delay, race, all, takeEvery, call } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'

import { apicall } from 'common/api'

import { addUser, fetchUsers } from './actions'

export function* fetchUsersSaga() {
  yield delay(100)
  yield put(addUser({ id: '1', name: 'Al', surname: 'Pacino' }))
  yield delay(100)
  yield put(addUser({ id: '2', name: 'Raz', surname: "Al'Ghoul" }))
  yield put(addUser({ id: '3', name: 'Bruce', surname: 'Wayne' }))

  yield race({
    cancelled: delay(1000), // will always win
    request: call(apicall, ['http://localhost:3000/api/test-endpoint']), // takes 5 seconds to resolve
  })
}

export function* userRootSaga() {
  yield all([takeEvery(getType(fetchUsers), fetchUsersSaga)])
}
