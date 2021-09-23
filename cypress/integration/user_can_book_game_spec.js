var faker = require('faker');

describe('Book game', function() {
  
  it('allows a user to book a game when logged in', function(){
    cy.login()

    cy.visit('/newgame');

    var hostname = faker.name.findName();
    var randomGame = faker.lorem.word();
    var randomDesc = faker.lorem.words();
    var randomDate = '2025-05-05'
    var randomTime = '18:00'
    var randomAddress = faker.lorem.words();

    cy.get('.new-game-form').find('[id="hostname"]').type(hostname);
    cy.get('.new-game-form').find('[id="gametype"]').type(randomGame);
    cy.get('.new-game-form').find('[id="description"]').type(randomDesc);
    cy.get('.new-game-form').find('[id="date"]').type(randomDate);
    cy.get('.new-game-form').find('[id="time"]').type(randomTime);
    cy.get('.mapboxgl-ctrl-geocoder--input').type(randomAddress);
    cy.get('.new-game-form').submit();

    cy.get('.games').should('contain', randomGame);

    cy.get('.games').find(`[id = "${randomGame}"]`).find('[id = "forms"]').find('[id = "book-game-form"]').submit();
    cy.get(`[id = "${randomGame}"]`).contains('Spaces: 0');

  })
})