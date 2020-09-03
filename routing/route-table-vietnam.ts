import Home from './pages/common/home'
import VietnamUsers from './pages/vietnam/users'
import { RouteTable } from './types'

export const routeTable: RouteTable = {
  pages: {
    home: {
      component: Home,
    },
    users: {
      component: VietnamUsers,
    },
  },
}
