var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuestionResponseSchema = new Schema(
    {
        response: {type: String},
        question: {type: String},
        date: {type: Date},
    }
);

QuestionResponseSchema
    .virtual('url')
    .get(function () {
        return '/catalog/book/' + this._id;
    });

module.exports = mongoose.model('QuestionResponse', QuestionResponseSchema);

