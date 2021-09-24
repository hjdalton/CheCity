var Game = require('../models/game');

var HomeController = {
  Index: function(req, res) {
    Game.find(function(err, games) {
      if (err) { throw err; }

      res.render('home/index', {games: games, user: req.user});
    }).sort({ 'created_on': -1 });
  },

  New: function(req,res) {
    res.render('home/newgame.hbs', {user: req.user})
  },

  Create: function(req, res) {
    var game = new Game({ 
      hostname: req.body.hostname,
      hostid: req.body.hostid, 
      gametype: req.body.gametype, 
      description: req.body.description, 
      date: req.body.date, 
      time: req.body.time, 
      address: req.body.address })
  
    game.save(function(err) {
      if (err) { throw err; }

      res.status(201).redirect('/');
    });
  },

  Delete: function(req,res){
    Game.findByIdAndRemove({ _id: req.body.id }, function(err) {
      if (err) { throw err; }

      res.status(201).redirect('/');
    });
  },

  Book: function(req, res){
    Game.findOneAndUpdate({ _id: req.body.id, spaces: {$gt: 0}}, {$inc:{ spaces: -1 }, $push: {guest_ids: req.user._id}}, {new: true},function(err) {
      if (err) { throw err;} 
      res.status(201).redirect('/');
    });  
  },

  About: function(req,res) {
    res.render('home/about.hbs');
    },

  Select: function(req, res) {
      res.render('home/filter.hbs')
  },

  Filtered: function(req, res) {
    Game.find({ gametype: req.body.gameoptions }, function(err, games) {
      if (err) { throw err; }

      res.render('home/filter.hbs', { games: games });
    }).sort({ 'created_on': -1 });
  }

 }

module.exports = HomeController;