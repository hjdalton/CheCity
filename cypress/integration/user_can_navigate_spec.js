var faker = require('faker');

describe('Navigation bar', function() {

  it('can navigate pages using links', function() {
    cy.visit('/user/signup');
    var username = faker.lorem.word();
    var email = faker.internet.email();
    // --- LOG IN --
    cy.get('#sign-up-form').find('[id="firstname"]').type('cy.test');
    cy.get('#sign-up-form').find('[id="lastname"]').type('cy.test');
    cy.get('#sign-up-form').find('[id="username"]').type(username);
    cy.get('#sign-up-form').find('[id="email"]').type(email);
    cy.get('#sign-up-form').find('[id="password"]').type('1234');
    
    cy.get('#sign-up-form').submit();
  
    cy.visit('/user/login');
    cy.get('#login-form').find('[id="username"]').type(username);
    cy.get('#login-form').find('[id="password"]').type('1234');
    cy.get('#login-form').submit();
    //---- LOG IN COMPLETE -----

    cy.visit('/');
    cy.get('[type="checkbox"]').check();
    cy.get('a[href="/newgame"]').click({force :true})
    cy.url().should('include', '/newgame');

    cy.get('[type="checkbox"]').check();
    cy.get('a[href ="/"]').click({force :true})
    cy.url().should('eq', 'http://localhost:3030/');
  });
});