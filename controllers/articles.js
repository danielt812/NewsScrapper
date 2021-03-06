//Require script modules
var scrape = require('../scripts/scrape');
var makeDate = require('../scripts/date');

//Require mongoose models
var Article = require('../models/Article');

module.exports = {
    fetch: function(cb) {
        scrape(function(data) {
            var articles = data;
            for(var i = 0; i < articles.length; i++) {
                articles[i].date = makeDate;
                articles[i].saved = false;
            }

            Article.collection.insertMany(articles, {ordered: false}, function(err, docs) {
                cb(err, docs);
            });
        });
    },
    delete: function(query, cb) {
        Article.remove(query, cb);
    },
    get: function(query, cb) {
        Article.find(query)
        .sort({
            _id: -1
        })
        .exec(function(err, doc) {
            cb(doc);
        });
    },
    update: function(query, cb) {
        Article.update({_id: query._id}, {
            $set: query
        }, {}, cb);
    }
}