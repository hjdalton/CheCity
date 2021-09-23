describe('Book game', function() {
  
  it('allows a user to book a game when logged in', function(){
    cy.login()
    cy.newgame()

    cy.get('.games > :nth-child(1)').find('[id = "forms"]').find('[id = "book-game-form"]').submit();
    cy.get(`.games > :nth-child(1)`).contains('Spaces: 0');
  })
})