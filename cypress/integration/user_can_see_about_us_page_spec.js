var faker = require('faker');

describe('Go and inspect about us page', function() {
  
  it('allows a user to book a game when logged in', function(){
    cy.visit('/user/signup');
    var username = faker.lorem.word();
    
    cy.get('#sign-up-form').find('[id="firstname"]').type('cy.test');
    cy.get('#sign-up-form').find('[id="lastname"]').type('cy.test');
    cy.get('#sign-up-form').find('[id="username"]').type(username);
    cy.get('#sign-up-form').find('[id="email"]').type('cy.test@test.com');
    cy.get('#sign-up-form').find('[id="password"]').type('1234');
    
    cy.get('#sign-up-form').submit();
    //refactor above 
    cy.visit('/user/login');
    cy.get('#login-form').find('[id="username"]').type(username);
    cy.get('#login-form').find('[id="password"]').type('1234');
    cy.get('#login-form').submit();

    cy.url().should('eq', 'http://localhost:3030/');

    
    cy.get('[type="checkbox"]').check();
    cy.get('a[href="/about"]').click({force :true})
    cy.url().should('include', '/about');

    

  })
})