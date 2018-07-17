const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./server/config/api/routes');


const app = express();

// Body Parser Middleware

app.use(bodyParser.json());

// DB config

const db = require('./server/config/mongoose').mongoURI;

// Connect to Mongo

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err));


// Use routes

app.use('/api/users', routes);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


