import { put, delay, race, all, takeEvery } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'

import { addUser, fetchUsers } from './actions'
import { takeSingle } from 'common/saga'

export function* getUsers() {
  yield delay(100)
  yield put(addUser({ id: '1', name: 'Al', surname: 'Pacino' }))
  yield put(addUser({ id: '2', name: 'Raz', surname: "Al'Ghoul" }))
  yield put(addUser({ id: '3', name: 'Bruce', surname: 'Wayne' }))
}

export function* userRootSaga() {
  yield all([takeEvery(getType(fetchUsers), getUsers)])
}

export function* serverUserRootSaga() {
  yield race([takeSingle(getType(fetchUsers), getUsers)])
}
