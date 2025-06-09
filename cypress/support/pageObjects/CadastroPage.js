class CadastroPage {
  visit() {
    cy.visit('/cadastrarusuarios');
  }

  fillNome(nome) {
    cy.get('[data-testid="nome"]').clear().type(nome);
  }

  fillEmail(email) {
    cy.get('[data-testid="email"]').clear().type(email);
  }

  fillSenha(senha) {
    cy.get('[data-testid="password"]').clear().type(senha);
  }

  checkAdministrador() {
    cy.get('[data-testid="checkbox"]').check();
  }

  submit() {
    cy.get('[data-testid="cadastrar"]').click();
  }

  assertSuccess() {
    cy.contains('sucesso', { matchCase: false }).should('be.visible');
  }

  assertError(mensagem) {
    cy.contains(mensagem).should('be.visible');
  }
}

export default new CadastroPage();