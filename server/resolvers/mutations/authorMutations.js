import Author from '../../model/authorModel.js'
export const createAuthor = async (_, { input }, { models }) => {
 const newAuthor = new Author(input)
 return newAuthor
  .save()
  .then(document => {
   return { ...document._doc }
  })
  .catch(err => console.log(err.message))
}
