import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js'
import { typeDefs } from './schema/index.js'
import resolvers from './resolvers/index.js'

import { auth } from './middlware/authMiddleware.js'

dotenv.config()
const app = express()

connectDb()

const PORT = process.env.PORT || 5001
const server = new ApolloServer({
 typeDefs,
 resolvers,
 context: auth,
})
server.applyMiddleware({ app })
app.use('/', (req, res) => res.json({ message: 'hello welcome again ' }))
app.listen(PORT, () => console.log('connected and run on the port...', PORT))
