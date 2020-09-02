import { Action } from 'redux'

declare module 'redux' {
  export interface Store<S = any, A extends Action = AnyAction> {
    saga: {
      toPromise(): Promise
    }
    end(): Promise
  }

  export type Dispatch = (action: Action) => void
}
