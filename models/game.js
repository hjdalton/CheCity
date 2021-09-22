var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({ 
  hostname: {
    type: String,
    required: true
  },
  host_id: {
    type: String,
    required: false
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
  address: {
    type: String,
    required: true
  },
  spaces: {
    type: Number,
    required: false,
    default: 1,
    min: 0
  },
  guest_ids: {
    type: Array,
    required: false,
  }
},
  { timestamps: { createdAt: 'created_on', updatedAt: 'updated_on' }
});

var Game = mongoose.model('Game', GameSchema);

module.exports = Game;