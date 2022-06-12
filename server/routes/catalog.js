var express = require('express');
var router = express.Router();

var author_controller = require('../controllers/authorController');

/// BOOK ROUTES ///

// Get catalog home page.
router.get('/', bookController.index)

/// AUTHOR ROUTES ///

// Display Author create form on GET.
router.get('/author/create', author_controller.author_create_get);

// Handle Author create on POST.
router.post('/author/create', author_controller.author_create_get);

model.exports = router;