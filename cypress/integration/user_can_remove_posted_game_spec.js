var faker = require('faker');

describe('Remove Game', function() {
  it('can remove posted game and see the changes', function() {

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
    cy.get('.new-game-form').find('[id="address"]').type(randomAddress);
    cy.get('.new-game-form').submit();

    cy.get('.games').should('contain', randomGame);
    
  
    cy.get('.games').find(`[id = "${randomGame}"]`).find('[id = "forms"]').find('[id = "delete-game-form"]').submit();
    cy.get(`[id = "${randomGame}"]`).should('not.exist'); 
  });
});
