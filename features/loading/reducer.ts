import { Reducer } from 'redux'
import { ActionType } from 'typesafe-actions'
import _ from 'lodash'

import * as actions from './actions'
import { LoadingState, LoadingScope } from './types'

const initialState: LoadingState = {
  loading: false,
}

export type WithLoading<T> = T & LoadingState

export const withLoading = <T>(
  reducer: Reducer,
  scope: LoadingScope,
  wrapeeInitial: T
): Reducer<WithLoading<T>, ActionType<typeof actions>> => {
  return (state = { ...wrapeeInitial, ...initialState }, action) => {
    if (scope !== _.get(action, 'payload.scope')) return reducer(state, action)

    switch (action.type) {
      case 'SET_LOADING':
        return { loading: action.payload.loading }
      default:
        return reducer(state, action)
    }
  }
}
