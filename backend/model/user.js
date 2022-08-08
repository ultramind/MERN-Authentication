const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: [4, 'Character must be more than 4 character']
  },
  avartar: {
    type: String,
    default: ''
  }
})

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hashedPassword = await bcrypt.hash(this.password, 8)
    this.password = hashedPassword
  }
  next()
})

// compare passwords
userSchema.methods.comparePassword = async function(password){
  const result = await bcrypt.compareSync(password, this.password)
  return result;
}

module.exports = mongoose.model('User', userSchema)
