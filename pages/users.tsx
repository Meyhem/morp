import { compose } from 'recompose'
import { connect } from 'react-redux'
import Link from 'next/link'
import _ from 'lodash'
import styled from 'styled-components'

import { RootState } from 'features/types'
import { selectUserList } from 'features/users/selectors'
import { User } from 'features/users/reducer'
import { fetchUsers } from 'features/users/actions'
import { withPage } from 'common/hoc'

const UserList = styled.ul`
  font-size: 1.5em;
  font-weight: bold;
`

interface Props {
  users: User[]
}

const enhance = compose<Props, Props>(
  withPage(async ({ store }) => {
    console.log('GIP Start')

    store.dispatch(fetchUsers())
    store.end()
    await store.saga.toPromise()

    console.log('GIP End')
  }),
  connect<Props>((state: RootState) => ({
    users: selectUserList(state),
  }))
)

function Users({ users }: Props) {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <UserList>
        {_.map(users, (u) => (
          <li key={u.id}>
            {u.name} {u.surname}
          </li>
        ))}
      </UserList>
    </div>
  )
}

export default enhance(Users)
