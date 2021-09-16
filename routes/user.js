var express = require('express');
var router = express.Router();

var UserController = require('../controllers/user');

router.get('/signup', UserController.Signup);
router.post('/signup', UserController.Register);


module.exports = router;