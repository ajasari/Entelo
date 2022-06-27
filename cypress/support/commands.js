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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (email, password) => { 
    
/*
    cy.visit('https://reputedly.preprod-blue.entelo.com/')
      cy.title().should('eq','Entelo | Build great teams.')
      cy.get('.top-right-nav > ul > :nth-child(3) > a').click()
      cy.get('#user_email').type(this.data.email)
      cy.get('.btn').click()
      cy.get('#user_password').should('be.visible').should('be.enabled').type(this.data.pass)
      cy.get('.btn').click()
      cy.get('.navbar-user-name').contains('Jasari')

*/

      cy.visit('https://reputedly.preprod-blue.entelo.com/')
      cy.title().should('eq','Entelo | Build great teams.')
      cy.get('.top-right-nav > ul > :nth-child(3) > a').click()
      cy.get('#user_email').type('ajasari+2demo@entelo.com')
      cy.get('.btn').click()
      cy.get('#user_password').should('be.visible').should('be.enabled').type('Password33!!')
      cy.get('.btn').click()
      cy.get('.navbar-user-name').contains('Jasari')

 })