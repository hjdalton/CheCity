var express = require('express');
var router = express.Router();

var HomeController = require('../controllers/home');

router.get('/newgame', HomeController.New);


module.exports = router;