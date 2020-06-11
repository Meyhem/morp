import App, { AppContext } from 'next/app'
import { compose } from 'recompose'

import { storeWrapper } from 'features/store'

const enhance = compose(storeWrapper.withRedux)

class AppCompoment extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const p = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}
    console.log('App GIP', p)
    return { pageProps: p }
  }

  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default enhance(AppCompoment)
