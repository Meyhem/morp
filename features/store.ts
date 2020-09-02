import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'

import { makeRootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'
import { RootState } from './types'

const makeStore = ({ ctx }: any) => {
  const rootReducer = makeRootReducer()
  const sagaMw = createSagaMiddleware()

  // choose compose function
  const composeEnhancers =
    (typeof window !== 'undefined' &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

  // list of registered middlewares
  const middleware = [sagaMw]
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  )
  const extendableStore = store as any

  // start saga and associate it with store
  extendableStore.saga = sagaMw.run(rootSaga)

  // ctx is present only on server
  if (ctx) {
    // create end function which will await current running saga and resolve on its end
    extendableStore.end = async () => {
      store.dispatch(END)
      await extendableStore.saga.toPromise()
    }
  } else {
    // on client its just NOOP
    extendableStore.end = () => Promise.resolve()
  }

  return store
}

export const storeWrapper = createWrapper<RootState>(makeStore, {
  debug: false,
})
