const { check, validationResult } = require('express-validator')
const { validate } = require('../model/user')
exports.validateUser = [
  check('name')
    .trim()
    .not()
    .isEmpty()
    .withMessage('name is missing')
    .isLength({ min: 3, max: 32 })
    .withMessage('Name must contain 3 to 20 character log'),
  check('email')
    .normalizeEmail()
    .isEmail()
    .withMessage('Email is not valid'),
  check('password')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Password is misiing')
    .isLength({ min: 4, max: 8 })
    .withMessage('Password mus contain atleast 4 character long!')
]

exports.validate = (req, res, next) => {
  const error = validationResult(req).array()
  if (!error.length) next()
  return res.status(500).json({ success: false, error: error[0].msg })
}
