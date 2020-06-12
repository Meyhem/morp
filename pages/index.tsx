import { compose } from 'recompose'
import { connect } from 'react-redux'
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
    store.dispatch(fetchUsers())
    await store.sagaTask.toPromise()
  }),
  connect<Props>((state: RootState) => ({
    users: selectUserList(state),
  }))
)

function Home({ users }: Props) {
  return (
    <div>
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

export default enhance(Home)
