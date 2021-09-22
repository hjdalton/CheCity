describe('Navigation bar', function() {
  it('can navigate pages using links', function() {
    cy.login()

    cy.visit('/');
    cy.get('[type="checkbox"]').check();
    cy.get('a[href="/newgame"]').click({force :true})
    cy.url().should('include', '/newgame');

    cy.get('[type="checkbox"]').check();
    cy.get('a[href ="/"]').click({force :true})
    cy.url().should('eq', 'http://localhost:3030/');
  });
});