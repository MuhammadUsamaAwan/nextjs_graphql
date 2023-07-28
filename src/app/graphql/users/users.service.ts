import User from '@/models/user'

export const getUsers = async () => {
  return await User.find()
}
