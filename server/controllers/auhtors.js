const router = require('express').Router()
const { ResultWithContext } = require('express-validator/src/chain')
const { json } = require('express/lib/response')
const Author = require('../models/author')

/// Author ///

// GET request for list of all Authors.
router.get('/', (request, response, next) => {
    Author.find()
        .then(authors => {
            if (authors) {
                response.json(authors)
            } else {
                response.status(404).end()
            }
        })
        .catch((error) => next(error))
})

// GET request for one Author.
router.get('/:id', (request, response, next) => {
    Author.findById(request.params.id)
        .then(author => {
            if (author) {
                response.json(author)
            } else {
                response.status(404).end()
            }
        })
        .catch((error) => next(error))
})

// POST request to create Author.
router.post('/', (request, response, next) => {
    const body = request.body

    const author = new Author( {
        first_name: body.first_name,
        family_name: body.family_name,
        date_of_birth: body.date_of_birth,
        date_of_death: body.date_of_death
    })

    author.save().then(savedAuthor => {
        response.json(savedAuthor.toJSON());
    })
    .catch((error) =>  next(error))
})

// POST request to delete Author.
router.delete('/:id', (request, response, next) => {
    Author.findByIdAndRemove(request.params.id)
        .then(response => {
            response.status(400).end()
        })
        .catch((error) => next(error))
})

// POST reuqest to update Auhtor.
router.put('/:id', (request, response, next) => {
    const body = request.body
    
    const author = {
        first_name: body.first_name,
        family_name: body.family_name,
        date_of_birth: body.date_of_birth,
        date_of_death: body.date_of_death
    }

    Author.findByIdAndUpdate(request.params.id, author, {new: true})
        .then(updatedAuthor => {
            response.json(updatedAuthor)
        })
        .catch((error) => next(error))
})

module.exports = router;