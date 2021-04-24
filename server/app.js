const express = require('express');
const mongoose = require('mongoose');
const Question = require('./models/question');
// const QuestionResponse = require('./models/questionresponse');
const ExpressError = require('./utils/ExpressError');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongoDB = 'mongodb://localhost:27017/Assignment3Data';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
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

app.get(`/api/questions`, wrapAsync(async function (req, res) {
    const questions = await Question.find({});
    res.json(questions);
}));

app.get('/api/questions/:id', wrapAsync(async function (req,res, next) {
    let id = req.params.id;
    if (mongoose.isValidObjectId(id)) {
        const question = await Question.findById(id);
        if (question) {
            res.json(question);
            return;
        } else {
            throw new ExpressError('Question Not Found', 404);
        }
    } else {
        throw new ExpressError('Invalid Question Id', 400);
    }
}));

app.delete('/api/questions', wrapAsync(async function (req, res) {
    const id = req.params.id;
    const result = await Question.findByIdAndDelete(id);
    console.log("Deleted successfully: " + result);
    res.json(result);
}));


app.post('/api/questions', wrapAsync(async function (req, res) {
    const newQuestion = new Question({
        text: "a",
        answerType: "b",
        multipleChoiceResponses: "treu",
        creationDate: "date"
    })
    await newQuestion.save();
    res.json(newQuestion);
}));




const handleValidationErr = err => {
    return new ExpressError(`Data validation error: ${err.message}`, 400)
}

app.use((err, req, res, next) => {
    console.log("Error name: " + err.name);
    if (err.name === 'ValidationError') {
        err = handleValidationErr(err)
    }
    next(err);
})

app.use((err, req, res, next) => {
    console.log("Error handling called");
    const { status = 500, message = 'An error has occurred' } = err;
    res.status(status).send(message);
})

port = process.env.PORT || 5000;
app.listen(port, () => { console.log('server started!') });