import { RootState } from '../types'
import {} from './selectors'

describe('exampleSelectors', () => {
  const state = {} as RootState
  test('exampleSelectors - selectSomething', () => {
    expect(selectSomething(state)).toEqual('hello')
  })
})
