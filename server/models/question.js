var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuestionSchema = new Schema(
    {
        text: {type: String},
        answerType: {type: String},
        multipleChoiceResponses: {type: String},
        creationDate: {type: Date}
    }
);

module.exports = mongoose.model('Question', QuestionSchema);

