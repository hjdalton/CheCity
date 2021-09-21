var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({ 
  hostname: {
    type: String,
    required: true
  },
  gametype: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  hidden: {
    type: String,
    required: true
  }
},
  { timestamps: { createdAt: 'created_on', updatedAt: 'updated_on' }
});

var Game = mongoose.model('Game', GameSchema);

module.exports = Game;