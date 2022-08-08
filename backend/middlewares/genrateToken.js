const jwt = require('jsonwebtoken')

exports.generateToken = (userId, next) => {
  const token = jwt.sign(userId, process.env.JWT_SECRET, { expiresIn: '1d' })
  return token
  next()
}
