const router = require('express').Router();

const BookInstance = require('../models/bookinstance');

/// BookInstance ///

// POST request to create BookInstance.
router.post('/bookinstance/create', (request, response, next) => {
	const body = request.body;

	const bookInstance = new BookInstance ({
		imprint: body.title
	})
	
	bookInstance.save().then(savedBook => {
		response.json(savedBook.toJSON());
	})
	.catch((error) => next(error))
})

// POST request to delete BookInstance.
router.delete('/bookinstance/:id/delete', (request, response, next) => {
	BookInstance.findByIdAndRemove(request.params.id)
		.then(result => {
			response.status(204).end()
		})
		.catch(error => next(error))
})

// POST requst to update BookInstance.
router.put('/bookinstance/:id/update', (request, response) => {
	const body = request.body

	const bookInstance = {
		imprint: body.imprint
	}

	BookInstance.findByIdAndUpdate(request.params.id, bookinstance, { new: true })
		.then(updatedBookInstance => {
			response.json(updatedBookInstance)
		})
		.catch(error => next(error))
})

// GET request for one BookInstance.
router.get('/bookinstance/:id', (request, response, next) => {
	BookInstance.findById(request.params.id)
		.then(bookinstance => {
			if (bookinstance) {
				response.json(bookinstance);
			} else {
				response.status(404).end();
			}
		})
		.catch(error => next(error))
})

// GET request for list of all BookInstance.
router.get('/bookinstances', (request, response, next) => {
	BookInstance.find()
		.then(bookinstances => {
			if (bookinstances) {
				response.json(bookinstances);
			} else {
				response.status(404).end();
			}
		})
		.catch(error => next(error));
})

module.exports = router;