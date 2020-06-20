import { GQLContext } from 'api/types'

export async function addRole(ctx: GQLContext, name: string) {
  return await ctx.prisma.role.create({ data: { name: name } })
}

export async function removeRole(ctx: GQLContext, name: string) {
  await ctx.prisma.role.delete({ where: { name: name } })
}

export async function queryRoles(ctx: GQLContext) {
  return await ctx.prisma.role.findMany()
}
