const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const handlebars = require('handlebars');
const session = require('express-session')
const flash = require('connect-flash');
const cookie = require('cookie-parser');
const expressValidator = require('express-validator');

const User = require('./public/models/user.js');
const Event = require('./public/models/event.js');

app.use(express.static('build'));
app.use(bodyParser.json());
app.use(cookie());
app.use(flash());

//Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport initializ
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Flash messages
app.use(function(req, res , next) {
  res.locals.sucess_msg = req.flash('sucess_msg');
  res.locals.erro_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Set database port
const DATABASE_URL = process.env.DATABASE_URL ||
  global.DATABASE_URL ||
  (process.env.NODE_ENV === 'production' ?
    'mongodb://ryanbozarth:QmdrKcFz3UB,zG@ds145848.mlab.com:45848/moto-event-manager' :
    'mongodb://localhost/moto-event-manager');
const PORT = process.env.PORT || 8080;

console.log('database_url: ' + DATABASE_URL);
console.log('port: ' + PORT);

// Run and close the server
function runServer() {
  return new Promise((resolve, reject) => {
    console.log(DATABASE_URL);
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

app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(__dirname + '/build/index.html');
});

app.post('/register', (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  console.log(email);

  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      console.log('there are gensalt errors');
      return res.status(500).json({
        message: 'Internal server error'
      });
    }
    bcrypt.hash(password, salt, function(err, hash) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: 'Internal server error'
        });
      }
      var user = new User({
        email: email,
        password: hash
      });
      user.save(function(err) {
        if (err) {
          console.log('there is an error', err);
          return res.status(500).json({
            message: 'Internal server error'
          });
        }
        return res.status(201).json(user);
      });
    });
  });
});

app.put('/profile/:email', (req, res) => {
  console.log(req.body);
    User.findOneAndUpdate({email: req.body.email}, req.body, {}, function(err, profile) {
      if (err) {
        return res.status(500).json({
          message: 'Internal server error - update'
        });
      };
      return res.status(200).json(req.body);
    });
});

app.post('/login', passport.authenticate('local'), function(req, res) {
  if (err) {
    throw err;
  }
  res.status(200);
  res.json(user); //don't send password

  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
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



exports.app = app;


module.exports = {
  app,
  runServer,
  closeServer
};
