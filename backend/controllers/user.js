const { findOne } = require('../model/user')
const User = require('../model/user')
const { sendError } = require('../utils')
const jwt = require('jsonwebtoken')

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body

  const user = await User.findOne({ email })
  if (user) sendError(res, 'Email already exits!')

  const newUser = new User({
    name,
    email,
    password
  })

  await newUser.save()

  res.send(newUser)
}

exports.signInUser = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) sendError(res, 'Invalid emailand Password')

  const result = await user.comparePassword(password)
  if (!result) sendError(res, 'invalid email and Password')

  // generating token and send to user
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })

  res
    .status(200)
    .json({ id: user._id, name: user.name, email: user.email, token })
}
