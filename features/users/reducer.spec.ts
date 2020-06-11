import { usersReducer } from './reducer'

describe('userReducer', () => {
  test('userReducer inits', () => {
    const state = usersReducer(undefined, {} as any)
    expect(state).not.toBeUndefined()
  })
})
