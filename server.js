const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('./public/models/user.js');
const Event = require('./public/models/event.js');

function runServer() {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(PORT, () => {
          console.log(`Your app is listening on port ${PORT}`);
          resolve();
        })
        .on('error', err => {
          mongoose.disconnect();
          reject(err);
        });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};



//app.get('/api/user', (req, res) => {

//});

//app.get('/api/user/:id'

//app.post('/api/user'

//app.put('/api/user/:id'

//app.delete('/api/user/:id')

// app.param('id', function())
// get get id if not real throw
// if real than save as req in requester object/
// then next

//app.delete('/api/user/:id/role/:role-name')

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(__dirname + '/build/index.html');
});

app.post('/', passport.authenticate('local'), function(req, res) {
  if (err) {
    throw err;
  }
  res.status(200);
  res.json(user); //without passowrd

  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
});




app.post('/register', (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  console.log(email);

  //validation
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();

  var errors = req.validationErrors();
  if (errors) {
    console.log('there are erorrs');
  } else {
    console.log('Passed');
  }
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return res.status(500).json({
        message: 'Internal server error'
      });
    }
    bcrypt.hash(password, salt, function(err, hash) {
      if (err) {
        return res.status(500).json({
          message: 'Internal server error'
        });
      }
      console.log(hash);
    });

    var user = new User({
      email: email,
      password: hash
    });

    user.save(function(err) {
      if (err) {
        return res.status(500).json({
          message: 'Internal server error'
        });
      }
      return res.status(201).json({});
    });
  });
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

// app.put('/event/:id', (req, res) => {


// req.body (has a body otherwise error)
//   let updatedItem = Event.update({
//     id: req.params.id;
//     attendees: req.body.attendees;
//   });
//   res.status(204).json(updatedItem);
// });

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
    'mongodb://ryanbozarth:QmdrKcFz3UB,zG@ds145848.mlab.com:45848/moto-event-manager' :
    'mongodb://localhost/moto-event-manager');
const PORT = process.env.PORT || 8080;

console.log('database_url: ' + DATABASE_URL);
console.log('port: ' + PORT);




module.exports = {
  app,
  runServer,
  closeServer
};
