const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

router.get('/new', controller.new);

router.post('/', controller.create);

router.get('/login', controller.loginForm);

router.post('/login', controller.login);

router.get('/profile', controller.profile);

router.get('/logoff', controller.logoff);

module.exports = router;