// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
Cypress.Commands.add('signup', () => {

    cy.visit('/user/signup');

    cy.get('#signup-form').find('[id="firstname"]').type('myname');
    cy.get('#signup-form').find('[id="lastname"]').type('lastname');
    cy.get('#signup-form').find('[id="username"]').type('testuser');
    cy.get('#signup-form').find('[id="email"]').type('email@email.com');
    cy.get('#signup-form').find('[id="password"]').type('1234');
    
    cy.get('#signup-form').submit();
  })


Cypress.Commands.add('login', () => {
 
  cy.visit('/user/login');
  cy.get('#login-form').find('[id="username"]').type('testuser');
  cy.get('#login-form').find('[id="password"]').type('1234');
  cy.get('#login-form').submit();
})

Cypress.Commands.add('newgame', () => {
  var faker = require('faker');

  var randomDesc = faker.lorem.words();
  var randomDate = '2025-05-05'
  var randomTime = '18:00'
  var randomAddress = faker.lorem.words();

  cy.visit('/newgame');

  cy.get('.new-game-form').find('[id="gameoptions"]').select('Bullet Chess');
  cy.get('.new-game-form').find('[id="description"]').type(randomDesc);
  cy.get('.new-game-form').find('[id="date"]').type(randomDate);
  cy.get('.new-game-form').find('[id="time"]').type(randomTime);
  cy.get('.mapboxgl-ctrl-geocoder--input').type(randomAddress);
  cy.get('.new-game-form').submit();
})
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
