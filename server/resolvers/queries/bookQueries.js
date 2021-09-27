import Author from '../../model/authorModel.js'
import Book from '../../model/bookModel.js'
export const getBooks = (_, {}, { user }) => {
 // (parent, args, context, info)
 console.log('am in getBOoks and this is user', user)
 return Book.find({})
  .then(bs => {
   return bs.map(b => ({
    ...b._doc,
    author: getByParent(b._doc?.authorId, Author),
   }))
  })
  .catch(err => console.log(err.message))
}

export const getBook = async (_, { id }, { models }) => {
 const { Book, Author } = models
 return Book.findById(id)
  .then(b => {
   return {
    ...b._doc,
    author: getByParent(b._doc?.authorId, Author),
   }
  })
  .catch(err => console.log(err.message))
}
export const getByParent = async (authorId, model) => {
 return await model.findById(authorId)
}
