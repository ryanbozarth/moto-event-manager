app.use(passport.initialize());

const basicStrategy = new BasicStrategy(function(username, password, callback) {
  let user;
  User
    .findOne({username: username})
    .exec()
    .then(_user => {
      user = _user;
      if (!user) {
        return callback(null, false, {message: 'Incorrect username'});
      }
      return user.validatePassword(password);
    })
    .then(isValid => {
      if (!isValid) {
        return callback(null, false, {message: 'Incorrect password'});
      }
      else {
        return callback(null, user)
      }
    });
});

// Load the password hash from DB
bcrypt.compare(password, hash, function(err, res) {
    // res == true then loginToAccoun
    // if not than error
});


app.post('/login', passport.authenticate('local', {session: false}), function(req, res) {
    res.json(req.user);
});


// Create username & password variables
const username = req.user.username;
const password = req.body.password;
username = username.trim();
password = password.trim();


// hash passowrd
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

    var user = new User({
      username: username,
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

    // Store hash in your password DB.
  });
});

};
