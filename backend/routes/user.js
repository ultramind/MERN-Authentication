const { createUser } = require('../controllers/user')
const { validateUser, validate } = require('../middlewares/validators')

const router = require('express').Router()

router.post('/create', validateUser, validate, createUser)

module.exports = router
