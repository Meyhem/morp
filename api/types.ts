import { PrismaClient } from '@prisma/client'

export interface GQLContext {
  prisma: PrismaClient
}

export interface ResolverFunction<P = any, A = any, T = unknown> {
  (parent: P, args: A, context: GQLContext): T
}

export interface TypeResolver {
  [key: string]: ResolverFunction
}
