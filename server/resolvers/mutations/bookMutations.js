import Book from '../../model/bookModel.js'
export const createBook = async (_, { input }, { models }) => {
 const newBook = new Book(input)
 return newBook
  .save()
  .then(document => {
   return { ...document._doc }
  })
  .catch(err => console.log(err.message))
}
export const deleteAll = async (_, {}, { models }) => {
 const { n } = await Book.deleteMany({})
 if (n > 0) return { description: 'deleted successfully ...' }
}
