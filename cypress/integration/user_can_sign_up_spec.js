var faker = require('faker');

describe('Sign Up', function() {
  it('allows the user to sign up', function() {
    cy.visit('/user/signup');
    var username = faker.lorem.word();
    
    cy.get('#sign-up-form').find('[id="firstname"]').type('cy.test');
    cy.get('#sign-up-form').find('[id="lastname"]').type('cy.test');
    cy.get('#sign-up-form').find('[id="username"]').type(username);
    cy.get('#sign-up-form').find('[id="email"]').type('cy.test@test.com');
    cy.get('#sign-up-form').find('[id="password"]').type('test');
    
    cy.get('#sign-up-form').submit();
  });
});