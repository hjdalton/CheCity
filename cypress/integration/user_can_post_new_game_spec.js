var faker = require('faker');

describe('New game', function() {
  it('can enter details to list a new game and displays them', function() {
    cy.visit('/user/signup');
    var username = faker.lorem.word();
    
    cy.get('#sign-up-form').find('[id="firstname"]').type('cy.test');
    cy.get('#sign-up-form').find('[id="lastname"]').type('cy.test');
    cy.get('#sign-up-form').find('[id="username"]').type(username);
    cy.get('#sign-up-form').find('[id="email"]').type('cy.test@test.com');
    cy.get('#sign-up-form').find('[id="password"]').type('1234');
    
    cy.get('#sign-up-form').submit();
  
    cy.visit('/user/login');
    cy.get('#login-form').find('[id="username"]').type(username);
    cy.get('#login-form').find('[id="password"]').type('1234');
    cy.get('#login-form').submit();


    cy.visit('/newgame');
    var hostname = faker.name.findName();
    var randomDesc = faker.lorem.words();
    var randomDate = '2025-05-05'
    var randomTime = '18:00'
    var randomAddress = faker.lorem.words();

    cy.get('.new-game-form').find('[id="hostname"]').type(hostname);
    cy.get('.new-game-form').find('[id="gameoptions"]').select('Bullet Chess')
    cy.get('.new-game-form').find('[id="description"]').type(randomDesc);
    cy.get('.new-game-form').find('[id="date"]').type(randomDate);
    cy.get('.new-game-form').find('[id="time"]').type(randomTime);
    cy.get('.mapboxgl-ctrl-geocoder--input').type(randomAddress);
    cy.get('.new-game-form').submit();

    cy.get('.games').should('contain', hostname);
    cy.get('.games').should('contain', 'bullet-chess');
    cy.get('.games').should('contain', randomDesc);
    cy.get('.games').should('contain', randomDate);
    cy.get('.games').should('contain', randomTime);
    cy.get('.games').should('contain', randomAddress);

  })
})