import _ from 'lodash'
import { TypeResolver } from './types'
import { RootQuery } from 'api/root-query'
import { RootMutation } from 'api/root-mutation'

export const rootResolver = {
  Query: RootQuery,
  Mutation: RootMutation,
}
