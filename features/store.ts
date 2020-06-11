import { createStore, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Context, createWrapper } from 'next-redux-wrapper'

import { makeRootReducer } from './rootReducer'
// import { rootSaga } from './rootSaga'
import { RootState } from './types'

const sagaMw = createSagaMiddleware()
const rootReducer = makeRootReducer()
const composeEnhancers =
  typeof window !== 'undefined'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const middleware = []
// sagaMw.run(rootSaga)

const makeStore = (context: Context) =>
  createStore(rootReducer, composeEnhancers(...middleware))

export const storeWrapper = createWrapper<RootState>(makeStore, { debug: true })
