import { gql } from 'apollo-server-express'
import * as User from './userSchema.js'
import * as Book from './bookSchema.js'
import * as Author from './authorSchema.js'
import * as File from './fileSchema.js'

const types = []
const queries = []
const mutations = []

const allInOne = [User, Book, Author, File]
allInOne.forEach(item => {
 types.push(item.types)
 queries.push(item.queries)
 mutations.push(item.mutations)
})

export const typeDefs = gql`
  # types out here
  ${types.join('\n')}
  # QUERY
 type Query {
     ${queries.join('\n')}
 }
  # mutation
 type Mutation {
     ${mutations.join('\n')}
 }
`
