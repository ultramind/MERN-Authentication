exports.sendError = (res, msg, status = 401) => {
  res.status(status).json({ success: false, error: msg })
}

exports.generateOTP = () => {
  let otp = ''
  for (var i = 0; i <= 3; i++) {
    const randVal = Math.round(Math.random() * 9)
    otp = otp + randVal
  }
  return otp
}
