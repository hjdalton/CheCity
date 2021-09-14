var Game = require('../models/games');

var HomeController = {
  Index: function(req, res) {
    Game.find(function(err, games) {
      if (err) { throw err; }

      res.render('home/index', { games: games });
    }).sort({ 'created_on': -1 });
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