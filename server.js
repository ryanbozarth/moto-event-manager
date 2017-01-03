var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function(req, res){

});

app.listen(process.env.PORT || 8080);

exports.app = app;
