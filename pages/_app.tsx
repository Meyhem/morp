import App, { AppContext } from 'next/app'
import { compose } from 'recompose'
import { ThemeProvider } from 'styled-components'
import withReduxSaga from 'next-redux-saga'

import NextI18Next from '../common/i18n'
import { theme, GlobalStyle } from 'ui/theme'
import { storeWrapper } from 'features/store'

const enhance = compose(
  storeWrapper.withRedux,
  withReduxSaga,
  NextI18Next.appWithTranslation
)

class AppCompoment extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const p = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps: p, namespacesRequired: ['common'] }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default enhance(AppCompoment)
