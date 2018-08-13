//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var exphbs = require('express-handlebars');

//Express
var app = express();
var PORT = 3000 || process.env.PORT;

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//View Engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Serve Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Routes
require('./controllers/controller')(app);

//Listener
app.listen(PORT, function() {
    console.log('Listening on port:' + PORT);
});