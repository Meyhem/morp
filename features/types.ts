import { HYDRATE } from 'next-redux-wrapper'
import { PayloadAction } from 'typesafe-actions'
import { makeRootReducer } from './rootReducer'

export type RootState = ReturnType<ReturnType<typeof makeRootReducer>>
