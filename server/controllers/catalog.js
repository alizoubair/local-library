const router = require('express').Router();

const BookInstance = require('../models/bookinstance');

/// BookInstance ///

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

module.exports = router;