var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuestionSchema = new Schema(
    {
        text: {type: String, required: true, maxlength: 100},
        answerType: {type: String, required: true},
        multipleChoiceResponses: {type: String},
        creationDate: {type: Date}
    }
);

module.exports = mongoose.model('Question', QuestionSchema);

