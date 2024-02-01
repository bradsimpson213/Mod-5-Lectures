const express = require('express');

// Route Imports
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('./public'));


app.use('/users', usersRouter)
app.use('/posts', postsRouter)

app.get('/', (req, res) => {
    res.sendFile("index.html")
});


app.use((req, res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.status = 404;
    next(err);
});


module.exports = app;