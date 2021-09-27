export const types = `
  type User {
    _id: ID!
    name: String!
    email: String!
    isAdmin: Boolean
  }

  input inputUser {
    name: String!
    email: String!
    isAdmin: Boolean
  }

  
`;
export const queries = `
    getUser(id: String): User!
    getUsers: [User!]

`;
export const mutations = `
   createUser(input: inputUser): User!
`;
