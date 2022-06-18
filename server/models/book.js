const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        summary: { type: String, require: true },
        isbn: { type: STring, required: true },
        genre: { type: String, required: true }
    }
)

bookSchema.set('toJSON', {
    transform: (document, requiredObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})


module.exports = mongoose.model('Book', bookSchema);