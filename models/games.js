var mongoose = require('mongoose');

var GamesSchema = new mongoose.Schema({ 
});

var Game = mongoose.model('Game', GamesSchema);

module.exports = Game;