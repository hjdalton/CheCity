var Game = require('../models/games');

var HomeController = {
  Index: async function(req, res) {
    const games = await Game.find({}).sort({ 'created_on': -1 });
    res.render('home/index', { games: games });
  },

  New: function(req,res) {
    res.render('home/newgame.hbs')
  },

  Create: async function(req, res) {
    var game = new Game({ 
      hostname: req.body.hostname, 
      gametype: req.body.gametype, 
      description: req.body.description, 
      date: req.body.date, 
      time: req.body.time, 
      address: req.body.address })
    
    try {
      await game.save();
    res.status(201).redirect('/');
    } catch(err) {
      if (err) { throw err; }
    }
    
  }
}

module.exports = HomeController;