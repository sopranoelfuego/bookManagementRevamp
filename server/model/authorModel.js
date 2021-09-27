import mongoose from 'mongoose'

const authorSchema = mongoose.Schema({
 name: {
  type: String,
  required: [true, 'name please'],
 },
 email: { type: String, required: true },
})

export default mongoose.model('Author', authorSchema)
