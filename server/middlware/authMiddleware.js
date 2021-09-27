export const auth = ({ req }) => {
 let token = null
 console.log('am in authMiddlware', req.headers?.authorization)
 if (
  req.headers.authorization &&
  req.headers.authorization.startsWith('Bearer')
 ) {
  token = req.headers.authorization.split(' ')[1]
 }
 return token
}
