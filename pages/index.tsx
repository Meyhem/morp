import { compose } from 'recompose'
import { connect } from 'react-redux'
import _ from 'lodash'

import { RootState } from 'features/types'
import { selectUserList } from 'features/users/selectors'
import { User } from 'features/users/reducer'

interface Props {
  users: User[]
}

const enhance = compose<Props, Props>(
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

export const getInitialProps = ({ store }) => {
  console.log('Homecomp', store)

  return {}
}

export default enhance(Home)
