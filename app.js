const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const connectionRoutes = require('./routes/connectionRoutes');
const mainRoute = require('./routes/mainRoute');
const userRoutes = require('./routes/userRoutes');

const app = express();

let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

// connect to database
mongoose.connect('mongodb://localhost:27017/project', {useUnifiedTopology: true})
.then(() => {
    app.listen(port, host, () => {
        console.log('Server is running on port', port);
    });
})
.catch(err => console.log(err.message));

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

app.use(session({
    secret: 'emfakldasdfasdfeac24asdf',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60*60*1000},
    store: new MongoStore({mongoUrl: 'mongodb://localhost:27017/project'}),
}));

app.use(flash());

app.use((req, res, next) => {
    res.locals.user = req.session.user||null;
    res.locals.successMessages = req.flash('success');
    res.locals.errorMessages = req.flash('error');
    next();
});

// route
app.use('/', mainRoute);

app.use('/connections', connectionRoutes);

app.use('/users', userRoutes);

app.use((req, res, next) => {
    let err =  new Error('The server cannot locate ' + req.url);
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) =>{
    if(!err.status){
        err.status = 500;
        err.message = ("Internal Server Error");
    }
    res.status(err.status);
    res.render('error', {error: err});
});
