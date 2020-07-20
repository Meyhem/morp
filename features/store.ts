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

  const sagaMw = createSagaMiddleware()

  const middleware = [sagaMw]
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  )
  const extendableStore = store as any

  extendableStore.saga = sagaMw.run(rootSaga)

  if (ctx) {
    extendableStore.end = async () => {
      store.dispatch(END)
      await extendableStore.saga.toPromise()
    }
  } else {
    extendableStore.end = () => Promise.resolve()
  }

  return store
}

export const storeWrapper = createWrapper<RootState>(makeStore, { debug: true })
