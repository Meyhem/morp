import { ApolloServer } from 'apollo-server-micro'
import makeCors from 'micro-cors'

const cors = makeCors({
  allowMethods: ['POST', 'OPTIONS'],
})

import { rootResolver, rootSchema } from 'api'

const apolloServer = new ApolloServer({
  typeDefs: rootSchema,
  resolvers: rootResolver,
  introspection: true,
})

const graphqlHandler = apolloServer.createHandler({ path: '/api/graphql' })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default cors(graphqlHandler)
