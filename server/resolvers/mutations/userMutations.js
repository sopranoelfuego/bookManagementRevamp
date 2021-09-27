import { ApolloError } from 'apollo-server-express'
import User from '../../model/userModel.js'
export const createUser = async (_, { input }, { models }, info) => {
 const { name, email, isAdmin } = input

 const user = new User({ name, email, isAdmin })

 return user
  .save()
  .then(result => {
   console.log('user created successfully', result._doc)
   return { ...result._doc }
  })
  .catch(err => new ApolloError(err))
}
