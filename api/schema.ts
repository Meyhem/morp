import { gql } from 'apollo-server-micro'

export const rootSchema = gql`
  type Query {
    user(id: ID!): User
    users: [User]
  }

  type User {
    id: ID
    username: String
    passwordHash: String
    fullname: String
    active: Boolean
    roles: [Role]
  }

  type Role {
    id: ID
    name: String
    users: [User]
  }
`
