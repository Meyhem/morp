import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise((r) =>
    setTimeout(() => {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ name: 'John Doe' }))
      r()
    }, 5000)
  )
}
