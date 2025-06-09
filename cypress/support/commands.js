Cypress.Commands.add('login', (email = 'fulano@qa.com', password = '123456') => {
  cy.get('[data-testid="email-input"]')
    .type(email)
  cy.get('[data-testid="senha-input"]')
    .type(password)
  cy.get('[data-testid="entrar-btn"]')
    .click()
});