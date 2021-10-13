const express = require('express');

const router = express.Router();

// GET /connections
router.get('/', (req, res) => {
    res.render('index');
})

module.exports = router;