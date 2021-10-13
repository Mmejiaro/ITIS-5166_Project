const express = require('express');

const router = express.Router();

// GET /connections
router.get('/', (req, res) => {
    res.send('send all connections');
});

// GET send form to create a new connection
router.get('/new', (req, res) => {
    res.send('send new form');
});

// POST create a new connection
router.post('/', (req, res) => {
    res.send('Created a new connection');
});

// GET /connections/:id send details of connection by id
router.get('/:id', (req, res) => {
    res.send('send story with id ' + req.params.id);
});

//GET /stories/:id/edit
router.get('/:id/edit', (req, res) => {
    res.send('send edit form');
});

// PUT /stories/:id update the story by id
router.put('/:id', (req, res) => {
    res.send('update story with id ' + req.params.id);
});

// DELETE /stories/:id delete the story by id
router.delete('/:id', (req, res) => {
    res.send('delete story with id ' + req.params.id);
});

module.exports = router;