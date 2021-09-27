export const types = `
type Author{
    _id: ID!
    name:String!
    email: String!
    books:[Book!]
  }
  input inputAuthor{
    name:String!
    email: String!
  }
`
export const queries = `
getAuthor(id:ID):Author
getAuthors:[Author!]!
`
export const mutations = `
createAuthor(input:inputAuthor!):Author
   
`
