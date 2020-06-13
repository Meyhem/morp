import { put, delay, race, all, takeEvery, call } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'

import { addUser, fetchUsers } from './actions'

export function* getUsers() {
  yield delay(100)
  yield put(addUser({ id: '1', name: 'Al', surname: 'Pacino' }))
  yield delay(100)
  yield put(addUser({ id: '2', name: 'Raz', surname: "Al'Ghoul" }))
  yield put(addUser({ id: '3', name: 'Bruce', surname: 'Wayne' }))
}

export function* userRootSaga() {
  yield all([takeEvery(getType(fetchUsers), getUsers)])
}
