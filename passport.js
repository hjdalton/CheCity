var passport = require ('passport');
var LocalStrategy = require ('passport-local').Strategy;
var User = require ('./models/user.js')
var crypto = require('crypto');
var connection = require('./bin/www')

var verifyCallback = (username, password, done) => {

  User.findOne({ username: username })
  .then((user) => {

      if (!user) { return done(null, false) }
      
      const isValid = validPassword(password, user.hash, user.salt);
      
      if (isValid) {
          return done(null, user);
      } else {
          return done(null, false);
      }
  })
  .catch((err) => {   
      done(err);
  });

}

var strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});


// PasswordUtils
function genPassword(password) {
  var salt = crypto.randomBytes(32).toString('hex');
  var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  
  return {
    salt: salt,
    hash: genHash
  };
}

function validPassword(password, hash, salt) {
  var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return hash === hashVerify;
}

module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;


