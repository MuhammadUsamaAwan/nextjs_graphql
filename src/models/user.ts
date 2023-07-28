import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  linkedinProfileUrl: { type: String, required: true },
  companyName: { type: String, required: true },
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
