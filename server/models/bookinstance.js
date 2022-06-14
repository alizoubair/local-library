const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

const bookInstanceSchema = new mongoose.Schema(
	{
		imprint: String
	}
)

bookInstanceSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

module.exports = mongoose.model('BookInstance', bookInstanceSchema);