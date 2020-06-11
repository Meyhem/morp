import { exampleReducer } from './reducer'

describe('exampleReducer', () => {
  test('exampleReducer inits', () => {
    const state = exampleReducer(undefined, {} as any)
    expect(state).not.toBeUndefined()
  })
})
