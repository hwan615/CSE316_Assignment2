var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuestionResponseSchema = new Schema(
    {
        response: {type: String},
        question: {type: String},
        date: {type: Date},
    }
);

module.exports = mongoose.model('QuestionResponse', QuestionResponseSchema);

