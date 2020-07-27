import { delay, put } from 'redux-saga/effects'
import { getUsers } from '../saga'
import { addUser } from '../actions'

describe('getUsers()', () => {
  it('runs', () => {
    const g = getUsers()

    expect(g.next().value).toEqual(delay(100))
    expect(g.next().value).toEqual(
      put(addUser({ id: '1', name: 'Al', surname: 'Pacino' }))
    )
    expect(g.next().value).toEqual(delay(100))
    expect(g.next().value).toEqual(
      put(addUser({ id: '2', name: 'Raz', surname: "Al'Ghoul" }))
    )
    expect(g.next().value).toEqual(
      put(addUser({ id: '3', name: 'Bruce', surname: 'Wayne' }))
    )

    expect(g.next().done)
  })
})
