export const types = `
  type File{
      filename:String!
      mimetype:String!
      encoding:String!
  }
`
export const queries = `
 getFiles:[File!]
`
export const mutations = `
  uploadFile(file:Upload!):File!
`
