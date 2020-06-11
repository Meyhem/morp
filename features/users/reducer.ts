import { ActionType } from 'typesafe-actions'

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

export const usersReducer = (
  state: UsersState,
  action: ActionType<typeof actions>
): UsersState => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: {
          [action.payload.id]: { ...action.payload },
        },
      }
  }
  return initialState
}
