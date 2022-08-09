const { findOne } = require('../model/user')
const User = require('../model/user')
const { sendError, generateOTP } = require('../utils/helpers')
const jwt = require('jsonwebtoken')
const verificationToken = require('../model/verificationToken')
const { mailTransport, generateEmailTemplate, generateWelcomeEmailTemplate } = require('../utils/mails')
const { isValidObjectId } = require('mongoose')

exports.createUser = async (req, res) => {
  const { name, email, password } = req.body

  const user = await User.findOne({ email })
  if (user) sendError(res, 'Email already exits!')

  const newUser = new User({
    name,
    email,
    password
  })

  const otpNumber = generateOTP()

  const token = new verificationToken({
    owner: newUser._id,
    token: otpNumber
  })

  await token.save()
  await newUser.save()

  mailTransport().sendMail({
    from: 'authmern@fullstack.com',
    to: newUser.email,
    subject: 'Email verification',
    html: generateEmailTemplate(otpNumber)
  })

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

exports.verifyEmail = async (req, res) => {
  const { userId, otp } = req.body
  if (!userId || !otp.trim()) return sendError(res, 'Invalid request missing!')

  if (!isValidObjectId(userId)) return sendError(res, ' invalid user id!')

  const user = await User.findById(userId)

  if (!user) return sendError(res, 'User not found')

  if (user.verfied) return sendError(res, 'This account is already verified!')

  const token = await verificationToken.findOne({ owner: user._id })

  if (!token) return sendError(res, 'Sorry user not found!')

  const iseMatched = await token.compareToken(otp)
  if (!iseMatched) return sendError(res, 'Provide valid token!')

  user.verified = true
  await verificationToken.findByIdAndDelete(token._id)

  await user.save()

  mailTransport().sendMail({
    from: 'authmern@fullstack.com',
    to: user.email,
    subject: 'Welcome Mail',
    html: generateWelcomeEmailTemplate(user.name)
  })

  res.status(200).json({ id: user._id, name: user.name, email: user.email })
}
