const express = require('express');
const mongoose = require('mongoose');
const Question = require('./models/question');
const QuestionResponse = require('./models/questionresponse');
const ExpressError = require('./utils/ExpressError');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongoDB = 'mongodb://localhost:27017/Assignment3Data';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

mongoose.set('useFindAndModify', false);

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

const handleValidationErr = err => {
    return new ExpressError(`Data validation error: ${err.message}`, 400)
}

app.use((err, req, res, next) => {
    console.log("Error name: " + err.name);
    // You can process a specific type of error, for example Mongoose validation errors:
    if (err.name === 'ValidationError') {
        err = handleValidationErr(err)
    }
    // Call the next middleware to handle the err object
    next(err);
})

app.use((err, req, res, next) => {
    console.log("Error handling called");
    const {status = 500, message = 'An error has occurred'} = err;
    res.status(status).send(message);
})

port = process.env.PORT || 5000;
app.listen(port, () => { console.log('server started!')});