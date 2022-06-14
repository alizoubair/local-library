const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser') 
const cors = require('cors');
const app = express();

const catalogRouter = require('./controllers/catalog');

require('dotenv').config();

const path = require('path');

const PORT = process.env.PORT;

const requestLogger = (request, response, next) => {
	console.log('Method:', request.method)
	console.log('Path:  ', request.path)
	console.log('Body:  ', request.body)
	console.log('---')
	next()
}

app.use(cors());

app.use(express.static('build'))
app.use(bodyParser.json())
app.use(requestLogger)

app.use(express.static(path.resolve(__dirname, '../client/build')));

// set up mongoose connection
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

console.log('connecting to', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.use('/', router);
app.use('/catalog', catalogRouter);


const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' })
}

// handler of requests with unknown endpoint
app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
	console.error(error.mesage)

	if (error.name === 'CastError') {
		return response.status(400).send({ error: 'malformatted id' });
	}

	next(error);
}

// handler of requests with result to errors
app.use(errorHandler)

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`)
})