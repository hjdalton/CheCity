var express = require('express');
var router = express.Router();

var HomeController = require('../controllers/user');

router.get('/signup', HomeController.Signup);
router.post('/signup', HomeController.Register);


module.exports = router;