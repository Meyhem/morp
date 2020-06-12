import { all, race } from 'redux-saga/effects'

import { serverUserRootSaga, userRootSaga } from './users/saga'

export function* rootSaga() {
  yield all([userRootSaga()])
}

export function* serverRootSaga() {
  yield race([serverUserRootSaga()])
}
