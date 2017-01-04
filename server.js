const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');

app.use(express.static('public'));

app.get('/', function(req, res){

});

app.get('/intro', function (req, res){

});

app.get('/home', function (req, res){

});

app.get('/event-details/:id', function (req, res){

});

// endpoint = http://surfmoto/get-all-rides/ryan-bozarth
// getting = app.get('/get-all-rides/:user, function(req, res){ req.params.user = ryanbozarth}'
// get all rides for user
// database requst find by user name. get back all rides for which user name = ryanbozarth
// json object parse and display

app.listen(process.env.PORT || 8080);

exports.app = app;
