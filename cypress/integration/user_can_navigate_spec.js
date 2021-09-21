describe('Home page', function() {
  it('can navigate', function() {
    cy.visit('/');
    cy.get('[type="checkbox"]').check();
    cy.get('a[href*="/newgame"]').click({force :true})
    cy.url().should('include', '/newgame');

    cy.get('[type="checkbox"]').check();
    cy.get('a[href*="/"]').click({force :true})
    cy.url().should('include', '/');

    cy.url().should('eq', 'http://localhost:3030/');
  });
});