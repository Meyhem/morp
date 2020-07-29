import { loadingActions } from 'features/loading'
import { usersReducer } from '../reducer'

describe('userReducer', () => {
  test('inits', () => {
    const state = usersReducer(undefined, {} as any)
    expect(state).not.toBeUndefined()
  })

  test('uses loading HOR', () => {
    const state1 = usersReducer(undefined, {} as any)
    const state2 = usersReducer(
      state1,
      loadingActions.SET_LOADING({ scope: 'users', loading: true })
    )
    const state3 = usersReducer(
      state2,
      loadingActions.SET_LOADING({ scope: 'users', loading: false })
    )

    expect(state1.loading).toBeFalsy()
    expect(state2.loading).toBeTruthy()
    expect(state3.loading).toBeFalsy()
  })
})
