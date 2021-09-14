var mongoose = require('mongoose');

var GamesSchema = new mongoose.Schema({ 
  hostname: {
    type: String,
    required: true
  },
  gametype: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
},
  { timestamps: { createdAt: 'created_on', updatedAt: 'updated_on' }
});

var Game = mongoose.model('Game', GamesSchema);

module.exports = Game;