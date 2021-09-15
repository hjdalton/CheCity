var User = require('../models/user');

var HomeController = {
  Signup: function(req, res) {
    res.render('user/signup')
  },

  New: function(req,res) {
    res.render('home/newgame.hbs')
  },

  Register: function(req, res) {
    var user = new User( { firstname: req.body.firstname, lastname: req.body.lastname, username: req.body.username, email: req.body.email, password: req.body.password});
      
    User.exists({ username: req.body.username }, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        user.save(function(err) {
          if (err) { throw err; }
          console.log(req.session);
          res.status(201).redirect('/');
        });      
      }
    });
  }
 }

module.exports = HomeController;