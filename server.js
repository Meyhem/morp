/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const next = require('next')
// const nextI18NextMiddleware = require('next-i18next/middleware').default

const nextI18next = require('./common/i18n')

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

;(async () => {
  await app.prepare()
  const server = express()
  server.disable('x-powered-by')
  await nextI18next.initPromise
  // server.use(nextI18NextMiddleware(nextI18next))

  server.all('*', (req, res) => handle(req, res))

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
  })
})()
