const { createUser, signInUser, verifyEmail } = require('../controllers/user')
const { validateUser, validate } = require('../middlewares/validators')

const router = require('express').Router()

router.post('/create', validateUser, validate, createUser)
router.post('/signin', signInUser)
router.post('/verify-email', verifyEmail)

module.exports = router
