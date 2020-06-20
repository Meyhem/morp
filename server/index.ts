import * as express from 'express'

import next from 'next'
import nextI18NextMiddleware from 'next-i18next/middleware'
import { ApolloServer } from 'apollo-server-micro'

import { rootResolver } from '../api/resolvers'
import { rootSchema } from '../api/schema'

import nextI18next from '../common/i18n'

const apolloServer = new ApolloServer({
  typeDefs: rootSchema,
  resolvers: rootResolver,
  introspection: true,
})
const graphqlHandler = apolloServer.createHandler({ path: '/api/graphql' })

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const nextHandler = app.getRequestHandler()

;(async () => {
  await app.prepare()
  const server = (express as any)()

  await nextI18next.initPromise
  server.use(nextI18NextMiddleware(nextI18next))

  server.all('/api/graphql', graphqlHandler)
  server.get('*', (req, res) => nextHandler(req, res))

  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()
