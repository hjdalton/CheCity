describe('Go and inspect about us page', function() {
  
  it('allows a user to book a game when logged in', function(){
    cy.login()
    
    cy.get('[type="checkbox"]').check();
    cy.get('a[href="/about"]').click({force :true})
    cy.url().should('include', '/about');

  })
})