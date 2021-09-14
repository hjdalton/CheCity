describe('Home page', function() {
  it('can navigate', function() {
    cy.visit('/');
    cy.get('.homepage-nav').find('[href="/newgame"]').click();
    cy.url().should('include', '/newgame')
  });
});