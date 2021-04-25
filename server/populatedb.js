var userArgs = process.argv.slice(2);

var async = require('async')
var Question = require('./models/question')
var QuestionResponse = require('./models/questionresponse')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var questions = []
var questionresponses = []

function questionCreate(text, answerType, multipleChoiceResponses, creationDate, cb) {

    questiondetail = {
        text: text,
        answerType: answerType,
        multipleChoiceResponses: multipleChoiceResponses,
        creationDate: creationDate
    }

    var question = new Question(questiondetail);

    question.save(function (err) {
        if (err) {
            cb(err, null)
            return
        }
        console.log('New question: ' + question);
        questions.push(question)
        cb(null, question)
    }   );
}

function questionresponseCreate(response, question, date, cb) {

    questionresponsedetail = {
        response: response,
        question: question,
        date: date,
    }

    var questionresponse = new QuestionResponse(questionresponsedetail);

    questionresponse.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log("New Qrespnse" + questionresponse);
        questionresponses.push(questionresponse);
        cb(null, questionresponse);
    }   );

}

function createQuestions(cb) {
    async.series([
        function (callback) {
            questionCreate('the day', 'Rothfuss','Rothuss',Date.now(), callback);
        },
        function (callback) {
            questionCreate('th', 'Rfuss','Rothss',Date.now(), callback);
        },
    ],
        cb);
}

function createQuestionresponse(cb) {
    async.series([
        function (callback) {
            questionresponseCreate('the day', 'Rothfuss',Date.now(), callback);
        },
        function (callback) {
            questionresponseCreate('th', 'Rfuss',Date.now(), callback);
        },
    ],
        cb);
}

async.series([
    createQuestions,
    createQuestionresponse
],

function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Questions: '+questions);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});