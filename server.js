/**
 * Created by BenMargis on 6/29/16.
 */

//Setup================================================================================================================

var express = require('express');
var app = express();                            //Create the app with express
var mongoose = require('mongoose');             //mongoose for mongodb
var morgan = require('morgan');                 //log requests to the console (express4)
var bodyParser = require('bodyParser');         //pull information from HTML POST (express4)
var methodOverride = require('methodOveride');  //simulate DELETE and PUT (express 4)

//Configuration========================================================================================================

mongoose.connect('');     //Connect to mongoDB on modulus.io

app.use(express.static(__dirname + '/public'));                     // set the static files location /public/img will be /img for user
app.use(morgan('dev'));                                             // log every request to the console
app.use(bodyParser.urlencoded({'extended' : 'true'}));              // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                         // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));      // parse application/vnd.api+json as json
app.use(methodOverride());

//Define model=========================================================================================================

var todo = mongoose.model({
    text : String
});

// listen (start app with node server.js)==============================================================================

app.listen(8080);
console.log("app listening on port 8080");

//Routes===============================================================================================================

    //api==============================================================================================================
    //Get all todos
    app.get('/api/todos', function(req, res) {

        //Use mongoose to get all todos in the database

    })
