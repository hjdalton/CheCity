var express = require('express');
var router = express.Router();
var passport = require('passport');
var UserController = require('../controllers/user');

router.get('/signup', UserController.Signup);
router.post('/signup', UserController.Register);

// login routes not using controller

router.get('/login', (req, res) => {
  if (req.isAuthenticated()){
    res.redirect('/');
  } else {
    res.render('user/login.hbs')
  }
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/user/login', successRedirect: '/' }));

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
  next();
});

module.exports = router;