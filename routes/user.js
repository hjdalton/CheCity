var express = require('express');
var router = express.Router();
var passport = require('passport');
var passportFile = require('./../passport.js');
var connection = require('./../bin/www');

var UserController = require('../controllers/user');

router.get('/signup', UserController.Signup);
router.post('/signup', UserController.Register);

// login routes not using controller

router.get('/login', (req, res, next) => {
   
  const form = '<h1>Login Page</h1><form method="POST" action="/user/login">\
  Enter Username:<br><input type="text" name="username">\
  <br>Enter Password:<br><input type="password" name="password">\
  <br><br><input type="submit" value="Submit"></form>';

  res.send(form);
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/user/login', successRedirect: '/' }));


module.exports = router;