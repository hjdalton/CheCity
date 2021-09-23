var express = require('express');
var router = express.Router();
var passport = require('passport');
var UserController = require('../controllers/user');

router.get('/signup', UserController.Signup);
router.post('/signup', UserController.Register);
router.get('/login',UserController.Signin);
router.post('/login', passport.authenticate('local', { failureRedirect: '/user/login', successRedirect: '/' }));
router.get('/logout', UserController.Logout);
router.get('/profile/:id', UserController.Profile);

module.exports = router;