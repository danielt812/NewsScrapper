//Dependencies
var axios = require('axios');
var request = require('request');
var cheerio = require('cheerio');

var scrape = function(cb) {
    
    request('https://thenextweb.com/latest/', function(err, res, body) {
        
        var $ = cheerio.load(body);

        var articles = [];

        $('.story').each(function(i, element) {

            var title = $(this).find(".story-title").text().trim();
            var summary = $(this).find(".story-chunk").text().trim().replace(/(\r\n\t|\n|\r\t)/gm,"");
            var link = $(this).find('a').attr('href');
            var img = $(this).children('a').attr('data-src');

            var data = {
                title: title,
                summary: summary,
                link: link,
                img: img
            };

            articles.push(data)
        });
        cb(articles)
    });
};

module.exports = scrape;