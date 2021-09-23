var mongoose = require('mongoose');
require('../mongodb_helper')
var User = require('../../models/user.js');

describe('Sign up', function() {
  beforeEach(function(done) {
    mongoose.connection.collections.users.drop(function() {
    });

    var user = new User({  firstname: 'test', lastname: 'test', username: 'test', email: 'email@test.com',  hash: 'hash', salt: 'salt'}); 

    user.save(function(err) {
      expect(err).toBeNull();

      done();
    });
  });

  it('saves a user', function(done) {
      User.find(function(err, user) {
        expect(err).toBeNull();

        expect(user[0]).toMatchObject({ firstname: 'test', lastname: 'test', username: 'test', email: 'email@test.com', hash: 'hash', salt: 'salt' });
        done();
      });
  });
});
