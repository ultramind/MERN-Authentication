const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const verificationSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  token: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    expires: 3600,
    default: Date.now()
  }
})

verificationSchema.pre('save', async function (next) {
  if (this.isModified('token')) {
    const hashedToken = await bcrypt.hash(this.token, 8)
    this.token = hashedToken
  }
  next()
})

// compare tokens
verificationSchema.methods.compareToken = async function (token) {
  const result = await bcrypt.compareSync(token, this.token)
  return result
}

module.exports = mongoose.model('VerifcationToken', verificationSchema)
