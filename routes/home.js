var express = require('express');
var router = express.Router();
const checkAuth = require('./checkAuth.js').checkAuth;
var HomeController = require('../controllers/home');

router.get('/', HomeController.Index);
router.get('/newgame', checkAuth, HomeController.New);
router.post('/newgame', checkAuth, HomeController.Create);
router.post('/deletegame', checkAuth, HomeController.Delete);


module.exports = router;