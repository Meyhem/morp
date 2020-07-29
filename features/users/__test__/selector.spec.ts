import { selectUserList } from '../selectors'

describe('exampleSelectors', () => {
  const state = {
    users: {
      loading: false,
      users: { '1': { id: '1', name: '123', surname: '432' } },
    },
  }

  test('exampleSelectors - selectSomething', () => {
    expect(selectUserList(state)).toEqual([
      { id: '1', name: '123', surname: '432' },
    ])
  })
})
