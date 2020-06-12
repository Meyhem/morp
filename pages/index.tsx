import { compose } from 'recompose'
import Link from 'next/link'
import _ from 'lodash'

interface Props {}

const enhance = compose<Props, Props>()

function Home({}: Props) {
  return (
    <div>
      <Link href="/users">
        <a>Users</a>
      </Link>

      <h1>Home page bruv</h1>
    </div>
  )
}

export default enhance(Home)
