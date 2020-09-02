import { NextApiRequest, NextApiResponse } from 'next'

// Will return sample object afted 5s delay
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
