var faker = require('faker');

describe('Sign Up', function() {
  it('allows the user to sign up', function() {
    cy.visit('/user/signup');
    var username = faker.lorem.word();
    var email = faker.internet.email();
    
    cy.get('#signup-form').find('[id="firstname"]').type('cy.test');
    cy.get('#signup-form').find('[id="lastname"]').type('cy.test');
    cy.get('#signup-form').find('[id="username"]').type(username);
    cy.get('#signup-form').find('[id="email"]').type(email);
    cy.get('#signup-form').find('[id="password"]').type('test');
    
    cy.get('#signup-form').submit();
  });
});