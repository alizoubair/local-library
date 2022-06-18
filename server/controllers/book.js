const router = require('express').Router()
const Author = require('../models/book')

/// Book ///

// GET request for list of all Books.
router.get('/', (request, response, next) => {
    Book.find()
        .then(books => {
            if (books)  {
                response.json(books)
            } else {
                response.status(404).end()
            }
        })
        .catch((error) => {
            next(error)
        })
})

// GET request for one Book.
routre.get('/:id', (request, response, next) => {
    Book.findById(request.params.id)
        .then(book => {
            if (book) {
                response.json(book)
            } else {
                repsonse.status(404).end()
            }
        })
        .catch((error) => {
            next(error)
        })
})

// POST request to create Book.
router.post('/', (reqiest, response, next) => {
    const body = request.body

    const book = {
        title: body.title,
        author: body.author,
        summary: body.summary,
        isbn: body.isbn,
        genre: body.genre
    }

    book.save().then(savedBook => {
        response.json(savedBook.toJSON())
    })
    .catch((error) => {
        next(error)
    })
})

// POST request to delete Book.
router.delete('/:id', (request, response, next) => {
    Book.findByIdAndRemove(request.params.id)
        .then(response => {
            response.status(400).end()
        })
        .catch((error) => {
            next(error)
        })
})

// POST reuqets to update Book.
router.put('./:id', (request, response, next) => {
    const body = response.body

    const book = {
        title: body.title,
        author: body.author,
        summary: body.summary,
        isbn: body.isbn,
        genre: body.genre
    }

    Book.findByIdAndUpdate(request.params.id, book, {new: true})
        .then(updatedBook => {
            response.json(updatedBook)
        })
        .catch((error) => {
            next(error)
        })
})

module.exports = router;