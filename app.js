const express = require('express')
const cors = require('cors')
const AWSservice = require('./middleware/AWSservice')
const logger = require('morgan')
const bodyParser = require('body-parser')
const AuthRouter = require('./routes/AuthRouter')
const PhotoRouter = require('./routes/PhotoRouter')
const CommentRouter = require('./routes/CommentRouter')
const UserRouter = require('./routes/UserRouter')
const PublicRouter = require('./routes/PublicRouter')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/auth', AuthRouter)
app.use('/photo', PhotoRouter)
app.use('/comment', CommentRouter)
app.use('/user', UserRouter)
app.use('/public', PublicRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

app.listen(PORT, async () => {
  try {
    AWSservice.init()
    console.log(`Server Running On Port: ${PORT}`)
  } catch (error) {
    throw new Error('Connection error')
  }
})
