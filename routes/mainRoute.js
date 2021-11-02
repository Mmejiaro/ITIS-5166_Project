const express = require('express');
const controller = require('../controllers/mainController');

const router = express.Router();

// GET
router.get('/', controller.index);

router.get('/home/contact', controller.contact);

router.get('/home/about', controller.about);

module.exports = router;