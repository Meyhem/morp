export interface User {
  id: string
  name: string
  surname: string
}

export interface UsersState {
  users: Record<string, User>
}
