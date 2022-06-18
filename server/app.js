const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const bodyParser = require('body-parser') 
const cors = require('cors')
const app = express();
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')
const config = require('./utils/config')
const bookinstancesRouter = require('./controllers/bookinstances')
const authorsRouter = require('./controllers/auhtors')

const path = require('path')

app.use(express.static('build'))
app.use(cors());
app.use(bodyParser.json())
app.use(middleware.requestLogger)

app.use(express.static(path.resolve(__dirname, '../client/build')))

// set up mongoose connection
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

console.log('connecting to', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.use('/', router)
app.use('/api/bookinstances', bookinstancesRouter)
app.use('/api/authors', authorsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app