var User = require('../models/user');
const { genPassword } = require('../passport');
var fs = require('fs');

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
      img:{
        data: fs.readFileSync(req.files.userPhoto.path),
        contentType: 'image/png',
      },  
      hash: hash, 
      salt: salt
    });

    User.exists({$or:[{ username: req.body.username},{email: req.body.email }]}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        if (result === false) {
          user.save(function(err) {
            if (err) { throw err; }
            res.status(201).redirect('/user/login');
          }); 
        } else {
          res.render('user/signup');
        }      
      }
    });
  },

  Signin: function(req, res) {
    if (req.isAuthenticated()){
      res.redirect('/');
    } else {
      res.render('user/login.hbs')
    }
  },

  Logout: function(req,res, next) {
    req.logout();
    res.redirect('/');
    next();
  },

  Profile: function(req,res) {
    
    User.find({_id: req.params.id},function(err, user) {
      if (err) { throw err; }

      res.render('user/profile.hbs', { user: user });
    })
    
  }
 }

module.exports = UserController;