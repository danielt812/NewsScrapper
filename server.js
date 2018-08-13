//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');

//Express
var app = express();
var router = express.Router();
var PORT = process.env.PORT || 3000;
app.use(router);

//Routes
require('./config/routes')(router);

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//View Engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Serve Static Files
app.use(express.static(path.join(__dirname, 'public')));

//MongoDB
var db = process.env.MONGODB_URI || 'mongodb://localhost/TNWscrapper';

//Connect mongoose to database
mongoose.connect(db, function(error) {
    if(error) {
        console.log(error);
    }
    else {
        console.log('mongoose connection successful')
    }
})

//Listener
app.listen(PORT, function() {
    console.log('Listening on port:' + PORT);
});