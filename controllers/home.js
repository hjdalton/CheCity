var Game = require('../models/games');

var HomeController = {
  Index: function(req, res) {
    res.render('home/index', { title: 'Games' });
  },

  New: function(req,res) {
    res.render('home/newgame.hbs')
  },

  Create: function(req, res) {
    var game = new Game({ 
      hostname: req.body.hostname, 
      gametype: req.body.gametype, 
      description: req.body.description, 
      date: req.body.date, 
      time: req.body.time, 
      address: req.body.address })
  
    game.save(function(err) {
      if (err) { throw err; }

    res.status(201).redirect('/');
    });
  }
}

module.exports = HomeController;