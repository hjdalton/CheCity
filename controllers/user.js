var User = require('../models/user');
const { genPassword } = require('../passport');

var UserController = {
  Signup: function(req, res) {
    if (req.isAuthenticated()) {
      res.redirect('/');
    } else {
      res.render('user/signup')
    } 
  },

  Register: function(req, res) {
    const saltHash = genPassword(req.body.password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    
    var user = new User( { 
      firstname: req.body.firstname, 
      lastname: req.body.lastname, 
      username: req.body.username, 
      email: req.body.email, 
      hash: hash, 
      salt: salt
    });
      
    User.exists({ username: req.body.username }, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        if (result === false) {
          user.save(function(err) {
            if (err) { throw err; }
            res.status(201).redirect('/');
          }); 
        } else {
          res.render('user/signup');
        }      
      }
    });
  }
 }

module.exports = UserController;