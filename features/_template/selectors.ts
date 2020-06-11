import { createSelector } from 'reselect'
import { RootState } from '../types'

export const selectSomething = createSelector(
  (s: RootState) => 123,
  (c) => 'hello'
)
