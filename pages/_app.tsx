import App, { AppContext } from 'next/app'
import { compose } from 'recompose'
import { ThemeProvider } from 'styled-components'
import withReduxSaga from 'next-redux-saga'

import { theme } from 'common/theme'
import { storeWrapper } from 'features/store'

const enhance = compose(storeWrapper.withRedux, withReduxSaga)

class AppCompoment extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const p = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps: p }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default enhance(AppCompoment)
