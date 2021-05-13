const express = require('express');
const mongoose = require('mongoose');

const Question = require('./models/question');
const QuestionResponse = require('./models/questionresponse');
const User = require('./models/user')
const ExpressError = require('./utils/ExpressError');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());


var mongoDB = 'mongodb+srv://younghwan:young3961!@cluster0.lykn4.mongodb.net/edit_profile';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

mongoose.set('useFindAndModify', false);

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
};

app.use((req, res, next) => {
    req.requestTime = Date.now(); 0
    console.log(req.method, req.path);
    next();
});

app.get(`/api/questions`, wrapAsync(async function (req, res) {
    const questions = await Question.find({});
    res.json(questions);
}));

app.get('/api/questionresponses', wrapAsync(async function (req, res) {
    const questionresponses = await QuestionResponse.find({});
    res.json(questionresponses);
}));

app.get('/api/user', wrapAsync(async function (req, res) {
    const user = await User.find({});
    res.json(user);
}));

app.get('/api/questions/:id', wrapAsync(async function (req, res, next) {
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


app.put('/api/questions', wrapAsync(async function (req, res) {
    //console.log(req.body);

    const questions = await Question.find({});
    console.log('start')
    // console.log(questions)
    const check1 = req.body.length > questions.length;
    //  console.log(check1)
    const check2 = req.body.length === questions.length;
    //  console.log(check2)


    for (let [arrayIndex, item] of Object.entries(req.body)) {
        if (check2 && item._id < 10000) {
        }
        else if (check1 && item._id < 10000) {
            const newquestion = new Question({
                text: item.text,
                answerType: item.answerType,
                multipleChoiceResponse: item.multipleChoiceResponse,
                creationDate: Date.now()
            })
            await newquestion.save();
        }
        else {
            console.log(item._id);
            await Question.findByIdAndUpdate(item._id, {
                text: item.text,
                answerType: item.answerType,
                multipleChoiceResponse: item.multipleChoiceResponse,
                creationDate: Date.now()
            });
        }
    };
    for (let [arrayIndex, item] of Object.entries(questions)) {
        let check3 = true;
        console.log(req.body.length)
        for (i = 0; i < req.body.length; i++) {
            console.log(i)
            console.log(req.body[i]);
            console.log(item._id);
            console.log(req.body[i]._id);
            if (item._id == req.body[i]._id) {
                console.log('a');
                check3 = false;
            }
        }
        if (check3) {
            await Question.findByIdAndDelete(item._id);
        }
    }
    console.log(questions)

    res.send('test')
    //   res.json(THELISTOFQUESTIONS)

    /*  1. Create a list of all questions that have been created/added on the backend
  2. Send these back with res.json()
  3. On Frontend, get the result back and set these questions as the question state
  (This allows you to update the _id, for all newly created questions)    */
    // res.json(questions);
}));

app.put('/api/user', wrapAsync(async function (req, res) {
    for (let [arrayIndex, item] of Object.entries(req.body)) {
        const newuser = new User({
            photo: item.photo,
            name: item.name,
            email: item.email,
            ad1: item.ad1,
            ad2: item.ad2,
        })
        await newuser.save();
    }
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