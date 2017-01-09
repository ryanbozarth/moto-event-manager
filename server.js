const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');
const User = require('./public/models/user.js');
const Event = require('./public/models/event.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200);
});

app.get('/intro', (req, res) => {
  res.sendfile('./build/intro.html');
  res.status(200);
});

app.get('/main/:user', (req, res) => {
  res.sendfile('./build/main.html');
  res.status(200);
});

app.get('/event-details/:id', (req, res) => {
  res.sendfile('./build/event-details.html');
  res.status(200);
  // req.params.user = ryanbozarth
  // get all rides for user
  // database requst find by user name. get back all rides for which user name = ryanbozarth
  // json object parse and display
});

app.get('/main/:id', (req, res) => {
  res.status(200);
});


app.get("*", function(req, res) {
    res.redirect("/");
});

app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));

exports.app = app;

const DATABASE_URL = process.env.DATABASE_URL ||
						global.DATABASE_URL ||
						(process.env.NODE_ENV === 'production' ?
							'mongodb://ryanbozarth:QmdrKcFz3UB,zG@ds145848.mlab.com:45848/moto-event-manager':
							'mongodb://localhost/moto-event-manager');
const PORT = process.env.PORT || 8080;

console.log('database_url: ' + DATABASE_URL);
console.log('port: ' + PORT);
