var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    headLine: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        required: true
    },
    date: {
        type: String,
    },
    img: {
        type: String,
        required: true,
        unique: true
    },
    saved: {
        type: Boolean,
        default: false
    }
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;