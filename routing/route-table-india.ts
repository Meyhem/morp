import Home from './pages/common/home'
import IndiaUsers from './pages/india/users'
import { RouteTable } from './types'

export const routeTable: RouteTable = {
  pages: {
    home: {
      component: Home,
    },
    users: {
      component: IndiaUsers,
      props: { exampleFromRouteTable: 'exampleFromRouteTable' },
    },
  },
}
