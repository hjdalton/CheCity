var express = require('express');
var router = express.Router();
const isAuth = require('../routes/isAuth.js').isAuth;
var HomeController = require('../controllers/home');

router.get('/', HomeController.Index);
router.get('/newgame', isAuth, HomeController.New);
router.post('/newgame', HomeController.Create);
router.post('/deletegame', isAuth, HomeController.Delete);


module.exports = router;