import { TypeResolver } from 'api/types'

import { queryRoles } from 'api/role'

export const RootQuery: TypeResolver = {
  roles: async (p, args, ctx) => {
    return await queryRoles(ctx)
  },
}
