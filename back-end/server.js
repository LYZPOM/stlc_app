var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var auth = require('./controllers/auth');
var activity = require('./controllers/activity');
var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./services/cors');

//Middleware
app.use(bodyParser.json());
app.use(cors);

//Requests
app.get('/api/activity', activity.get);

app.post('/auth/register', auth.register);

//Connection
mongoose.connect("mongodb://localhost:27017/stlc", function (err, db) {
    if (!err) {
        console.log("we are connected to mongo");
    }
})

var server = app.listen(5000, function () {
    console.log('listening on port ', server.address().port)
})
