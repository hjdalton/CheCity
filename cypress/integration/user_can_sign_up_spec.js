describe('Sign Up', function() {
  it('allows the user to sign up', function() {
    cy.visit('/signup');
    
    cy.get('#sign-up-form').find('[id="firstname"]').type('cy.test');
    cy.get('#sign-up-form').find('[id="lastname"]').type('cy.test');
    cy.get('#sign-up-form').find('[id="username"]').type('cy.test');
    cy.get('#sign-up-form').find('[id="email"]').type('cy.test@test.com');
    cy.get('#sign-up-form').find('[id="password"]').type('test');
    
    cy.get('#sign-up-form').submit();
  });
});