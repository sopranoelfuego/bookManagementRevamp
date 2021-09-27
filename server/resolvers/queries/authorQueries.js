import Author from '../../model/authorModel.js'
import Book from '../../model/bookModel.js'
export const getAuthors = async (_, {}, { models }) => {
 return Author.find({}).then(document => {
  return document.map(d => ({ ...d._doc, books: getBooks(d._doc._id, Book) }))
 })
}

export const getAuthor = (_, { id }, { models }) => {
 const { Author, Book } = models
 return Author.findById(id).then(document => {
  return document.map(d => ({ ...d._doc, books: getBooks(d._doc._id, Book) }))
 })
}
const getBooks = (authorId, model) => {
 return model
  .find({ authorId })
  .then(document => {
   return document.map(d => ({ ...d._doc }))
  })
  .catch(err => console.log('Err:', err.message))
}
