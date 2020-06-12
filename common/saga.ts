import { take, call } from 'redux-saga/effects'

export function* takeSingle(type: string, saga: () => Generator) {
  const action = yield take(type)
  yield call(saga as any, action)
}
