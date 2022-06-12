const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const catalogRouter = require('./routes/catalog');

const PORT = process.env.PORT || 3001;

const app = express();

// set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://alizoubair:alizoubair@cluster0.eyxafuc.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);

app.get("/", (req, res) => {
	res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
	console.log(`Servre listening on ${PORT}`)
})