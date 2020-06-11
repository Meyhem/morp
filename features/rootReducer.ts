import { combineReducers } from 'redux'

import { usersReducer } from 'features/users'
// import your feature reducers

export const makeRootReducer = () =>
  combineReducers({
    users: usersReducer,
    // register feature reducers
  })
