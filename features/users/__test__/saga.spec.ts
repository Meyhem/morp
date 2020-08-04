import { delay, put, race, call } from 'redux-saga/effects'
import { fetchUsersSaga } from '../saga'
import { addUser } from '../actions'
import { apicall } from 'common/api'

describe('getUsers()', () => {
  it('runs', () => {
    const g = fetchUsersSaga()

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

    expect(g.next().value).toEqual(
      race({
        cancelled: delay(1000),
        request: call(apicall, ['http://localhost:3000/api/test-endpoint']),
      })
    )

    expect(g.next().done).toBeTruthy()
  })
})
