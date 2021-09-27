import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
 title: {
  type: String,
  required: [true, 'title please'],
 },
 authorId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Author',
  required: [true, 'author please'],
 },
})

export default mongoose.model('Book', bookSchema)
