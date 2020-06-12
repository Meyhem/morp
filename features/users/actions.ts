import { createAction } from 'typesafe-actions'

export const addUser = createAction('ADD_USER')<{
  id: string
  name: string
  surname: string
}>()

export const fetchUsers = createAction('FETCH_USERS')()
