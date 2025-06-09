class LoginPage {
  visit() {
    cy.visit('/login');
  }
  fillEmail(email) {
    cy.get('[data-testid="email"]').clear().type(email);
  }
  fillSenha(senha) {
    cy.get('[data-testid="senha"]').clear().type(senha);
  }
  submit() {
    cy.get('[data-testid="entrar"]').click();
  }
  goToCadastro() {
    cy.get('[data-testid="cadastrar"]').click();
  }
}
export default new LoginPage();