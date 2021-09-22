var mongoose = require('mongoose');
require('../mongodb_helper')
var Game = require('../../models/game.js');


describe('Game model', function() {
  
  beforeEach(function(done) {
      mongoose.connection.collections.games.drop(function() {

        
          done();
      });
  });

  it('has a game', function() {
    var game = new Game({ hostname: 'Dylan', gametype: 'blitz', description: 'Fast Chess', date: '2018-05-21', time: '18:00', address: '2 Burnt House Farm Cottages' });

    expect(game.gametype).toEqual('blitz');
  });

  it('can list all games', function(done) {
    
    Game.find(function(err, games) {
      expect(err).toBeNull();
      expect(games).toEqual([]);
      done();
    });
  });

  it('can save a game', function(done) {
    var game = new Game({ hostname: 'Dylan', gametype: 'blitz', description: 'Fast Chess', date: '2018-05-21', time: '18:00', address: '2 Burnt House Farm Cottages' });

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
    var game = new Game({ hostname: 'Dylan', gametype: 'blitz', description: 'Fast Chess', date: '2018-05-21', time: '18:00', address: '2 Burnt House Farm Cottages' });

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

  it('can find games by game type', function(done) {
    var game = new Game({ hostname: 'Dylan', gametype: 'rapid', description: 'Fast Chess', date: '2018-05-21', time: '18:00', address: '2 Burnt House Farm Cottages' });
    var game = new Game({ hostname: 'Player', gametype: 'blitz', description: 'Fast Chess', date: '2018-05-21', time: '18:00', address: '2 Burnt House Farm Cottages' });
    
    game.save(function(err) {
      expect(err).toBeNull();
      
      console.log(game)

      Game.find({ gametype: 'blitz' }, function(err, games) {
        console.log(game)
        expect(err).toBeNull();
        expect(games).toEqual(expect.objectContaining({ gametype: "blitz"}));
        expect(games).not.toContain('rapid')
        done();
        })
      });
    });
});