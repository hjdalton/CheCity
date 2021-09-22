var express = require('express');
var router = express.Router();
const checkAuth = require('./checkAuth.js').checkAuth;
var HomeController = require('../controllers/home');

router.get('/', HomeController.Index);
router.get('/newgame', checkAuth, HomeController.New);
router.post('/newgame', checkAuth, HomeController.Create);
router.post('/deletegame', checkAuth, HomeController.Delete);
router.get('/filter', HomeController.Select);
router.post('/filter', HomeController.Filtered);

module.exports = router;