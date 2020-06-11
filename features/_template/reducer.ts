import { createReducer, ActionType } from 'typesafe-actions'

import * as actions from './actions'

interface ExampleState {}

const initialState: ExampleState = {}

export const exampleReducer = (
  state: ExampleState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case 'DUMMY_ACTION':
      return {}

    default:
      return state
  }
}
