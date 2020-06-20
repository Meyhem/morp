import _ from 'lodash'

var db: any = {
  users: [
    {
      id: '1',
      username: 'kekec',
      passwordHash: '123',
      fullname: 'Ke Kec',
      active: true,
    },
    {
      id: '2',
      username: 'kekec2',
      passwordHash: '1232',
      fullname: 'Ke Kec2',
      active: true,
    },
  ],
  roles: [
    {
      id: '1',
      name: 'Admin',
      users: ['1'],
    },
    {
      id: '2',
      name: 'Editor',
      users: ['1', '2'],
    },
  ],
}

function queryUser(id) {
  return _.filter(db.users, (u) => u.id === id)[0]
}

function queryUsersByIds(ids) {
  return _.filter(db.users, (u) => _.includes(ids, u.id))
}

function queryUsersByRoleId(roleId) {
  return queryUsersByIds(
    _.get(
      _.filter(db.roles, (r) => r.id === roleId),
      '0.users'
    )
  )
}

function queryRoles(userId) {
  return _.filter(db.roles, (r) => _.includes(r.users, userId))
}

export const rootResolver = {
  Query: {
    users: (parent, args, context) => {
      return db.users
    },
    user: (parent, { id }, context) => {
      console.log('getUser params', parent, id, context)
      return queryUser(id)
    },
  },
  User: {
    roles: (parent, args, context) => {
      console.log('roles params', parent, args, context)
      return queryRoles(parent.id)
    },
  },
  Role: {
    users: (parent, args, context) => {
      return queryUsersByRoleId(parent.id)
    },
  },
}
