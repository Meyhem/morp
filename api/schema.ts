import { gql } from 'apollo-server-micro'

export const rootSchema = gql`
  type Query {
    sayHello: String
  }
`
