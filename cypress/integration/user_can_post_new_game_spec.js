var faker = require('faker');
const { ExpectationFailed } = require('http-errors');

describe('New game', function() {
  it('can enter details to list a new game', function() {
    cy.visit('/newgame');
    var hostname = faker.name.findName();
    var randomGame = faker.lorem.word();
    var randomDesc = faker.lorem.words();
    var randomDate = '2025-05-05'
    var randomTime = '18:00'
    var randomAddress = faker.lorem.words();

    cy.get('.new-game').find('[id="hostname"]').type(hostname);
    cy.get('.new-game').find('[id="gametype"]').type(randomGame);
    cy.get('.new-game').find('[id="description"]').type(randomDesc);
    cy.get('.new-game').find('[id="date"]').type(randomDate);
    cy.get('.new-game').find('[id="time"]').type(randomTime);
    cy.get('.new-game').find('[id="address"]').type(randomAddress);
    cy.get('.new-game').submit();

    cy.get('.games').should('contain', randomGame);
  })
})