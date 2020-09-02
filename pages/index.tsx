import React from 'react'
import { compose } from 'recompose'
import Link from 'next/link'

import { withTranslation, withPage, WithTranslation } from 'common/hoc'
import { publicConfig } from 'common/config'

type Props = WithTranslation

const enhance = compose<Props, Props>(withPage(), withTranslation(['common']))

function Home({ t }: Props) {
  return (
    <div>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <h1>Home page - ({t('test')})</h1>
      <br />
      <b>Public runtime configuration</b> - {JSON.stringify(publicConfig())}
    </div>
  )
}

export default enhance(Home)
