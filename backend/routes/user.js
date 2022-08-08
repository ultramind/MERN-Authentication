const { createUser } = require('../controllers/user')

const router = require('express').Router()

router.post('/create', createUser)

module.exports = router
