import { compose } from 'recompose'
import Link from 'next/link'
import _ from 'lodash'

import { withTranslation, WithTranslation } from 'common/hoc'

interface Props extends WithTranslation {}

const enhance = compose<Props, Props>(withTranslation())

function Home({ t }: Props) {
  return (
    <div>
      <Link href="/users">
        <a>Users</a>
      </Link>

      <h1>Home page bruv - ({t('test')})</h1>
    </div>
  )
}

export default enhance(Home)
