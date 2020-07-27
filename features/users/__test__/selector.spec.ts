import { selectUserList } from '../selectors'

describe('exampleSelectors', () => {
  const state = {
    users: {
      users: { '1': { id: '1', name: '123', surname: '432' } },
    },
  }

  test('exampleSelectors - selectSomething', () => {
    expect(selectUserList(state)).toEqual([
      { id: '1', name: '123', surname: '432' },
    ])
  })
})
