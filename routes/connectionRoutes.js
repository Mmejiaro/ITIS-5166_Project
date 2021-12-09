const express = require('express');
const controller = require('../controllers/connectionController');
const {isLoggedIn, isHost} = require('../middlewares/auth');
const { validateId, validateConnection, validateResult } = require('../middlewares/validator');

const router = express.Router();

// GET /connections
router.get('/', controller.index);

// GET send form to create a new connection
router.get('/new', isLoggedIn, controller.new);

// POST create a new connection
router.post('/', isLoggedIn, validateConnection, validateResult, controller.create);

// GET /connections/:id send details of connection by id
router.get('/:id', validateId, controller.show);

//GET /connections/:id/edit
router.get('/:id/edit', isLoggedIn, isHost, validateId, controller.edit);

// PUT /connections/:id update the story by id
router.put('/:id', isLoggedIn, isHost, validateId, validateConnection, validateResult, controller.update);

// DELETE /connections/:id delete the story by id
router.delete('/:id', isLoggedIn, isHost, validateId, controller.delete);

module.exports = router;