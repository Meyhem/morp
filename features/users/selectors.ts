import { createSelector } from 'reselect'
import _ from 'lodash'
import { RootState } from '../types'

export const selectUsers = createSelector(
  (s: RootState) => s.users,
  (u) => u
)

export const selectUserList = createSelector(selectUsers, (u) =>
  _.values(u.users)
)
