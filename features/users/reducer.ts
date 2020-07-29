import { ActionType } from 'typesafe-actions'
import { HYDRATE } from 'next-redux-wrapper'

import { withLoading } from 'features/loading'
import * as actions from './actions'

export interface User {
  id: string
  name: string
  surname: string
}

interface UsersState {
  users: Record<string, User>
}

const initialState: UsersState = { users: {} }

const baseUsersReducer = (
  state: UsersState = initialState,
  action: ActionType<typeof actions>
): UsersState => {
  switch (action.type) {
    case HYDRATE as any:
      return {
        ...state,
        ...(action as any).payload.users,
      }

    case 'ADD_USER':
      return {
        ...state,
        users: {
          ...state.users,
          [action.payload.id]: { ...action.payload },
        },
      }
    default:
      return state
  }
}

export const usersReducer = withLoading(baseUsersReducer, 'users', initialState)
