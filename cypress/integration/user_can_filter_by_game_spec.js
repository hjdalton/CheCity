var faker = require('faker');

describe('Filter Game', function() {
  it('can enter details to list a new game and displays them', function() {
    cy.visit('/user/signup');
    var username = faker.lorem.word();
    var email = faker.internet.email();
    // ------------ SIGN UP -------------//
    cy.get('#sign-up-form').find('[id="firstname"]').type('cy.test');
    cy.get('#sign-up-form').find('[id="lastname"]').type('cy.test');
    cy.get('#sign-up-form').find('[id="username"]').type(username);
    cy.get('#sign-up-form').find('[id="email"]').type(email);
    cy.get('#sign-up-form').find('[id="password"]').type('1234');
    
    cy.get('#sign-up-form').submit();
  // ------------ LOG IN -------------//
    cy.visit('/user/login');
    cy.get('#login-form').find('[id="username"]').type(username);
    cy.get('#login-form').find('[id="password"]').type('1234');
    cy.get('#login-form').submit();

// ------------ NEW GAME -------------//
    cy.visit('/newgame');
    var hostname = faker.name.findName();
    var randomDesc = faker.lorem.words();
    var randomDate = '2025-05-05'
    var randomTime = '18:00'
    var randomAddress = faker.lorem.words();

    cy.get('.new-game-form').find('[id="hostname"]').type(hostname);
    cy.get('.new-game-form').find('[id="gameoptions"]').select('Bullet Chess');
    cy.get('.new-game-form').find('[id="description"]').type(randomDesc);
    cy.get('.new-game-form').find('[id="date"]').type(randomDate);
    cy.get('.new-game-form').find('[id="time"]').type(randomTime);
    cy.get('.mapboxgl-ctrl-geocoder--input').type(randomAddress);
    cy.get('.new-game-form').submit();

    // ------------ ACTUAL TEST -------------//
    cy.url().should('eq', 'http://localhost:3030/');

    cy.get('#gametype').find('[id="gameoptions"]').select('Bullet Chess');
    cy.get('#gametype').submit();

    cy.url().should('eq', 'http://localhost:3030/filter');
// check that the game types only have bullet-chess
    cy.get('.games').should('not.contain', 'blitz');
    cy.get('.games').should('not.contain', 'rapid');
    cy.get('.games').should('not.contain', 'classic');

  })
})