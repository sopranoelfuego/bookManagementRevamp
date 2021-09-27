export const uploadFile = async (_, { file }, {}) => {
 const { createReadStream, filename, mimetype, encoding } = file
 console.log('file out here', file)
 return { filename, mimetype, encoding }
}
