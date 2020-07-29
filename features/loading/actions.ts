import { createAction } from 'typesafe-actions'
import { LoadingScope } from './types'

export const SET_LOADING = createAction('SET_LOADING')<{
  scope: LoadingScope
  loading: boolean
}>()
