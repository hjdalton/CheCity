

describe('Filter Game', function() {
  it('can enter details to list a new game and displays them', function() {
    cy.login()
    cy.newgame()
    // ------------ ACTUAL TEST -------------//
    cy.url().should('eq', 'http://localhost:3030/');

    cy.get('#gametype').find('[id="gameoptions"]').select('Bullet Chess');
    cy.get('#gametype').submit();

    cy.url().should('eq', 'http://localhost:3030/filter');
// check that the game types only have bullet-chess
    cy.get('.games').should('not.contain', 'blitz');
    cy.get('.games').should('not.contain', 'rapid');
    cy.get('.games').should('not.contain', 'classic');

  })
})