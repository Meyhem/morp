import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'

import { makeRootReducer } from './rootReducer'
import { rootSaga, serverRootSaga } from './rootSaga'
import { RootState } from './types'

const sagaMw = createSagaMiddleware()
const rootReducer = makeRootReducer()
const composeEnhancers =
  typeof window !== 'undefined'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

const log = (store) => (next) => (action) => {
  console.log('DISPATCHED', action.type)
  let result = next(action)
  return result
}

const middleware = [log, sagaMw]

const makeStore = ({ ctx }: any) => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  )
  const extendable = store as any

  if (ctx) {
    extendable.sagaTask = sagaMw.run(serverRootSaga)
  } else {
    extendable.sagaTask = sagaMw.run(rootSaga)
  }

  return store
}

export const storeWrapper = createWrapper<RootState>(makeStore, { debug: true })
