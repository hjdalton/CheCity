var User = require('../models/user');

var UserController = {
  Signup: function(req, res) {
    res.render('user/signup')
  },

  Register: function(req, res) {
    var user = new User( { firstname: req.body.firstname, lastname: req.body.lastname, username: req.body.username, email: req.body.email, password: req.body.password});
      
    User.exists({ username: req.body.username }, function(err, result) {
      if (err) {
        res.send(err); //redirect rather than crash...
      } else {
        if(result === false) {
          user.save(function(err) {
            if (err) { throw err; }
            console.log(req.session);
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