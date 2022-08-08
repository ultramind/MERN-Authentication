const express = require('express')
require('dotenv').config()
const userRoute = require('./routes/user')
require('./db')

const app = express()
app.use(express.json())

app.use('/api/user', userRoute)

app.get('/', (req, res) => {
  res.send('Authetication in React-Native')
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log('Server runing on port ' + PORT))
