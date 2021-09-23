var faker = require('faker');

describe('Remove Game', function() {
  it('can remove posted game and see the changes', function() {
    cy.login()
    
    cy.visit('/newgame');

    var randomDesc = faker.lorem.words();
    var randomDate = '2025-05-05'
    var randomTime = '18:00'
    var randomAddress = faker.lorem.words();

    cy.get('.new-game-form').find('[id="gameoptions"]').select('Bullet Chess')
    cy.get('.new-game-form').find('[id="description"]').type(randomDesc);
    cy.get('.new-game-form').find('[id="date"]').type(randomDate);
    cy.get('.new-game-form').find('[id="time"]').type(randomTime);
    cy.get('.mapboxgl-ctrl-geocoder--input').type(randomAddress);
    cy.get('.new-game-form').submit();

    cy.get('.games').should('contain', randomDesc);
    
  
    cy.get('.games > :nth-child(1)').find('[id = "forms"]').find('[id = "delete-game-form"]').submit();
    cy.get('.games').should('not.contain', randomDesc);
  });
});
