import { ApolloServer } from 'apollo-server-micro'
import makeCors from 'micro-cors'

import { rootResolver, rootSchema } from 'api'
import { PrismaClient } from '@prisma/client'

const cors = makeCors({
  allowMethods: ['POST', 'OPTIONS'],
})

const apolloServer = new ApolloServer({
  typeDefs: rootSchema,
  resolvers: rootResolver,
  introspection: true,
  context: () => ({
    prisma: new PrismaClient(),
  }),
})

const graphqlHandler = apolloServer.createHandler({ path: '/api/graphql' })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default cors(graphqlHandler)
