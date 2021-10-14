const express = require('express');
const morgan = require('morgan');
const connectionRoutes = require('./routes/connectionRoutes');
const mainRoute = require('./routes/mainRoute');

const app = express();

let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

// route
app.get('/', mainRoute);

app.use('/connections', connectionRoutes);


app.listen(port, host, () => {
    console.log('Server is running on port', port);
})