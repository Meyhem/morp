import { theme } from './theme'

declare module 'redux' {
  export interface Store<S = any, A extends Action = AnyAction> {
    saga: {
      toPromise(): Promise
    }
    end(): Promise
  }
}
