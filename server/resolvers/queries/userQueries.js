import { ApolloError } from 'apollo-server-express'

export const getUser = async (_, { id }, { models }) => {
 const { User } = models
 return User.findById(id)
  .then(result => {
   return { ...result._doc }
  })
  .catch(err => new ApolloError(err))
}

export const getUsers = async (_, {}, { models }) => {
 const { User } = models
 return User.find()
  .then(document => {
   return document.map(doc => {
    return { ...doc._doc }
   })
  })
  .catch(err => new ApolloError(err.message))
}
