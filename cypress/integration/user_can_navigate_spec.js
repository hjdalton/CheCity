describe('Home page', function() {
  it('can navigate', function() {
    cy.visit('/');
    cy.get('.homepage-nav').find('[href="/newgame"]').click();
    cy.url().should('include', '/newgame');
    cy.get('.newgame-nav').find('[href="/"]').click();
    cy.url().should('eq', 'http://localhost:3030/');
  });
});