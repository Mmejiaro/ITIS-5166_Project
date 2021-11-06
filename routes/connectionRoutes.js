const express = require('express');
const controller = require('../controllers/connectionController');
const {isLoggedIn} = require('../middlewares/auth');

const router = express.Router();

// GET /connections
router.get('/', controller.index);

// GET send form to create a new connection
router.get('/new', isLoggedIn, controller.new);

// POST create a new connection
router.post('/', isLoggedIn, controller.create);

// GET /connections/:id send details of connection by id
router.get('/:id', controller.show);

//GET /connections/:id/edit
router.get('/:id/edit', controller.edit);

// PUT /connections/:id update the story by id
router.put('/:id', controller.update);

// DELETE /connections/:id delete the story by id
router.delete('/:id', controller.delete);

module.exports = router;