var userArgs = process.argv.slice(2);

var async = require('async')
var Question = require('./models/question')
var QuestionResponse = require('./models/questionresponse')
var User = require('./models/user')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var questions = []
var questionresponses = []
var users = [];

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


function userCreate(photo, name, email, cb) {

    userdetail = {
        photo: photo,
        name: name,
        email: email,
    }

    var user = new User(userdetail);

    user.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log("New User" + user);
        users.push(user);
        cb(null, user);
    }   );

}

function createQuestions(cb) {
    async.series([
        function (callback) {
            questionCreate('the num of push ups', 'number','false',Date.now(), callback);
        },
        function (callback) {
            questionCreate('running time', 'text','true',Date.now(), callback);
        },
    ],
        cb);
}

function createQuestionresponse(cb) {
    async.series([
        function (callback) {
            questionresponseCreate('5', '0', Date.now(), callback);
        },
        function (callback) {
            questionresponseCreate('1hour', '1', Date.now(), callback);
        },
    ],
        cb);
}

function createUser(cb) {
    async.series([
        function (callback) {
            userCreate('https://res.cloudinary.com/dojy9dmtd/image/upload/v1620832211/myphoto_sb25qb.jpg', 'Younghwan Cha', 'younghwan.cha@dayLogger.com', callback);
        },
    ],
        cb);
}

async.series([
    createQuestions,
    createQuestionresponse,
    createUser
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