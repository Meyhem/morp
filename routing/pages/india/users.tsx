import React from 'react'

import { compose } from 'recompose'
import { connect } from 'react-redux'
import Link from 'next/link'
import _ from 'lodash'
import { Dispatch } from 'redux'

import { withPage } from 'common/hoc'

import { RootState } from 'features/types'
import { usersActions, usersSelectors } from 'features/users'

import { styled } from 'ui/theme'

const UserList = styled.ul`
  font-size: 1.5em;
  font-weight: bold;
`

const mapState = (state: RootState) => ({
  users: usersSelectors.selectUserList(state),
})

const mapDispatch = (d: Dispatch) => ({})

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> & {
    exampleFromRouteTable: string
  }

const enhance = compose<Props, Props>(
  withPage(async ({ store }) => {
    store.dispatch(usersActions.fetchUsers())

    await store.end()
  }),
  connect(mapState, mapDispatch)
)

function Users({ users, exampleFromRouteTable }: Props) {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>India users !</h1>
      Custom prop: {exampleFromRouteTable}
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
