var express = require('express');
var router = express.Router();

var HomeController = require('../controllers/home');

router.get('/', HomeController.Index);
router.get('/newgame', HomeController.New);
router.post('/newgame', HomeController.Create);
router.post('deletegame',HomeController.Delete);


module.exports = router;