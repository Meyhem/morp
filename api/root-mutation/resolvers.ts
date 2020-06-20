import { TypeResolver } from 'api/types'

import { addRole, removeRole } from 'api/role'

export const RootMutation: TypeResolver = {
  addRole: async (p, args: { name: string }, ctx) => {
    return await addRole(ctx, args.name)
  },
  removeRole: async (p, args: { name: string }, ctx) => {
    return await removeRole(ctx, args.name)
  },
}
