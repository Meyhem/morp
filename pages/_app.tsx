import App, { AppContext } from 'next/app'
import { compose } from 'recompose'

import { storeWrapper } from 'features/store'

const enhance = compose(storeWrapper.withRedux)

class AppCompoment extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default enhance(AppCompoment)
