import { getUsers } from './users.service'

export const usersResolvers = {
  Query: {
    users: () => {
      return getUsers()
    },
  },
}
