describe('Log In', function() {
  it('allows a user to log in with correct credentials',function() {
    cy.visit('/user/login')
    cy.get('#login-form').find('[id="username"]').type('test_username')
    cy.get('#login-form').find('[id="password"]').type('1234')
  })
})