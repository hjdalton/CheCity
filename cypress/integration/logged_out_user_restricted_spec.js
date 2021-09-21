var faker = require('faker');

describe('Log Out', function() {
 
  it('it doesnt allow a user to access certain pages after logging out', function(){
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

    cy.url().should('eq', 'http://localhost:3030/')

    cy.visit('/newgame')
    cy.url().should('eq', 'http://localhost:3030/newgame')

    cy.visit('/user/logout')
    cy.url().should('eq', 'http://localhost:3030/')

    //restricted page
    cy.visit('/newgame')
    cy.url().should('eq', 'http://localhost:3030/user/login')

  })
})