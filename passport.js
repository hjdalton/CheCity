var passport = require ('passport');
var LocalStrategy = require ('passport-local').Strategy;
var User = require ('./models/user.js')
var crypto = require('crypto');
var connection = require('./bin/www')

var verifyCallback = (username, password, done) => {

  passport.use(new LocalStrategy(
    function(username, password, cb) {
        User.findOne({ username: username })
            .then((user) => {
  
                if (!user) { return done(null, false) }
                
                const isValid = validPassword(password, user.hash, user.salt);
                
                if (isValid) {
                    return cb(null, user);
                } else {
                    return cb(null, false);
                }
            })
            .catch((err) => {   
                cb(err);
            });
  }));

};

var strategy = new LocalStrategy();



// asswordUtils

function validPassword(password, hash, salt) {}
function genPassword(password) {}

module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;


