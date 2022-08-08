exports.sendError = (res, msg, status = 401) => {
  res.status(status).json({ success: false, error: msg })
}

