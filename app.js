const express = require('express');

const app = express();

let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// route
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, host, () => {
    console.log('Server is running on port', port);
})