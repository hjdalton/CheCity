var mongoose = require('mongoose');
require('../mongodb_helper')
var Game = require('../../models/games');


describe('Game model', function() {
  
  beforeEach(function(done) {
      mongoose.connection.collections.games.drop(function() {
          done();
      });
  });

  it('has a game', function() {
    var game = new Game({ hostname: 'Dylan', gametype: 'some game', description: 'Fast Chess', date: '2018-05-21', time: '18:00', address: '2 Burnt House Farm Cottages' });

    expect(game.gametype).toEqual('some game');
  });

  it('can list all games', function(done) {
    Game.find(function(err, games) {
      expect(err).toBeNull();
      expect(games).toEqual([]);
      done();
    });
  });

  it('can save a game', function(done) {
    var game = new Game({ hostname: 'Dylan', gametype: 'some game', description: 'Fast Chess', date: '2018-05-21', time: '18:00', address: '2 Burnt House Farm Cottages' });

    game.save(function(err) {
      expect(err).toBeNull();

      Game.find(function(err, games) {
       
        expect(err).toBeNull();

        expect(games[0]).toMatchObject({ hostname: 'Dylan' });
        done();
      });
    });
  });

  it('can remove a posted game', function(done) {
    var game = new Game({ hostname: 'Dylan', gametype: 'some game', description: 'Fast Chess', date: '2018-05-21', time: '18:00', address: '2 Burnt House Farm Cottages' });
    
    game.save(function(err) {
      expect(err).toBeNull();
    
      Game.findByIdAndRemove({ _id: game._id }, function(err) {
        expect(err).toBeNull();

        Game.find(function(err, games) {
          expect(err).toBeNull();
          expect(games[0]).toBeUndefined();
          done();
        });
      });
    });  
  });

  // it('can delete a post', function(done) {
  //   var post = new Post({ message: 'check message' });
    
  //   post.save(function(err) {
  //     expect(err).toBeNull();
    
  //     Post.findByIdAndRemove({ _id: post._id }, function(err) {
  //       expect(err).toBeNull();

  //       Post.find(function(err, posts) {
  //         expect(err).toBeNull();
  //         expect(posts[0]).toBeUndefined();
  //         done();
  //       });
  //     });
  //   });  
  // });


});