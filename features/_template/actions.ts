import { createAction } from 'typesafe-actions'

export const dummyAction = createAction('DUMMY_ACTION')<{ example: boolean }>()
