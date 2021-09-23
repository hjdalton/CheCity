var faker = require('faker');

describe('Log In', function() {
  it('does not allow a user to log in with incorrect credentials', function() {
    cy.visit('/user/login');
    cy.get('#login-form').find('[id="username"]').type('test_username');
    cy.get('#login-form').find('[id="password"]').type('1234');
    cy.get('#login-form').submit();

    cy.url().should('eq', 'http://localhost:3030/user/login');
  })

  it('allows a user to log in with correct credentials', function(){
    cy.visit('/user/signup');
    var username = faker.lorem.word();
    var email = faker.internet.email();
    
    cy.get('#signup-form').find('[id="firstname"]').type('cy.test');
    cy.get('#signup-form').find('[id="lastname"]').type('cy.test');
    cy.get('#signup-form').find('[id="username"]').type(username);
    cy.get('#signup-form').find('[id="email"]').type(email);
    cy.get('#signup-form').find('[id="password"]').type('1234');
    
    cy.get('#signup-form').submit();
    //refactor above 
    cy.visit('/user/login');
    cy.get('#login-form').find('[id="username"]').type(username);
    cy.get('#login-form').find('[id="password"]').type('1234');
    cy.get('#login-form').submit();

    cy.url().should('eq', 'http://localhost:3030/');

    cy.visit('/user/logout')
  })
})