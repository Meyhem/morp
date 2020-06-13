import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import _ from 'lodash'

import { makeRootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'
import { RootState } from './types'

const makeStore = ({ ctx }: any) => {
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

  const sagaMw = createSagaMiddleware()

  const middleware = [log, sagaMw]
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  )
  const extendable = store as any

  extendable.saga = sagaMw.run(rootSaga)

  if (ctx) {
    extendable.end = async () => {
      store.dispatch(END)
      await extendable.saga.toPromise()
    }
  } else {
    extendable.end = () => Promise.resolve()
  }

  return store
}

export const storeWrapper = createWrapper<RootState>(makeStore, { debug: true })
