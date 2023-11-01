import body from "../fixtures/massa.json"

let emailAcesso = body.email
let senhaAcesso = body.senha

Cypress.Commands.add('realizarLoginComSucesso', () => {
    cy.get('#email').type(emailAcesso)
    cy.get('#senha').type(senhaAcesso)
})