import React from 'react'
import { NextComponentType, NextPageContext } from 'next'

export interface WithPageProps {}

export const withPage = (f?: (c: NextPageContext) => Promise<any>) => (
  Component: NextComponentType<NextPageContext>
) =>
  class WithPage extends React.Component {
    static async getInitialProps(ctx: NextPageContext) {
      const p = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}

      if (f) {
        await f(ctx)
      }

      return { ...p, namespacesRequired: ['common'] }
    }

    render() {
      return <Component {...this.props} />
    }
  }
