import { compose } from 'recompose'
import { connect } from 'react-redux'
import _, { add } from 'lodash'

import { RootState } from 'features/types'
import { selectUserList } from 'features/users/selectors'
import { addUser } from 'features/users/actions'
import { User } from 'features/users/reducer'
import { withPage } from 'common/hoc'

interface Props {
  users: User[]
}

const enhance = compose<Props, Props>(
  withPage(async (c) =>
    c.store.dispatch(addUser({ id: '1', name: 'Al', surname: 'Pacino' }))
  ),
  connect<Props>((state: RootState) => ({
    users: selectUserList(state),
  }))
)

function Home({ users }: Props) {
  return (
    <div>
      <ul>
        {_.map(users, (u) => (
          <li key={u.id}>
            {u.name} {u.surname}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default enhance(Home)
