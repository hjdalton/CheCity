var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    unique: false 
  },
  lastname: {
    type: String,
    required: true,
    unique: false 
  },
  username: {
    type: String,
    required: true,
    unique: true 
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  img: {
    data: Buffer,
    contentType: String
  },

  hash: String,

  salt: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;