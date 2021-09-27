export const types = `

 type Book{
  _id :ID!
  title:String!
  author:Author!
 }
  input inputBook{
    title:String!
    authorId:String!
  }
 type Confirm{
   description:String!
 }
`

export const queries = `
getBook(id:ID!):Book
getBooks:[Book!]


`
export const mutations = `
 createBook(input: inputUser!):Book!
 deleteBook(id:ID!):Book!
 deleteAll:Confirm!

`
