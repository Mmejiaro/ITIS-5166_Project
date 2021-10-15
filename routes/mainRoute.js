const express = require('express');
const controller = require('../controllers/mainController');

const router = express.Router();

// GET
router.get('/', controller.index);

router.get('/contact', controller.contact);

router.get('/about', controller.about);

module.exports = router;