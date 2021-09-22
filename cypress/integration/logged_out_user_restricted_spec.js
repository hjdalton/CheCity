describe('Log Out', function() { 
  it('it doesnt allow a user to access certain pages after logging out', function(){
  
    cy.signup()
    cy.login()

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