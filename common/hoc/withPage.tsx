import React from 'react'
import { NextComponentType, NextPageContext } from 'next'

export const withPage = (f?: (c: NextPageContext) => Promise<any>) => (
  Component: NextComponentType<NextPageContext>
) =>
  class WithPage extends React.Component {
    static async getInitialProps(ctx: NextPageContext) {
      const p = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}

      let addProps = {}
      if (f) {
        addProps = (await f(ctx)) || addProps
      }

      return { ...p, ...addProps, namespacesRequired: ['common'] }
    }

    render() {
      return <Component {...this.props} />
    }
  }
