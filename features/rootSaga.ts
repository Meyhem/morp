import { all } from 'redux-saga/effects'

// import feature sagas

export function* rootSaga() {
  yield all([
    // register feature sagas by direct call, e.g.:
    // myFeatureRootSaga()
  ])
}
