import { dummySaga } from './saga'
import { put } from 'redux-saga/effects'

describe('featSaga - dummySaga', () => {
  test('dummySaga - puts twice', () => {
    const saga = dummySaga()

    expect(saga.next().value).toEqual(put({ type: 'TEST_YOUR_SAGAS' }))
    expect(saga.next().value).toEqual(put({ type: 'TEST_THEM_WELL' }))
    expect(saga.next().done).toBeTruthy()
  })
})
