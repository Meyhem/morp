import { DefaultTheme } from 'styled-components'
import { theme } from './theme'

type CustomTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}

declare module 'redux' {
  export interface Store<S = any, A extends Action = AnyAction> {
    sagaTask: {
      toPromise(): Promise
    }
  }
}
