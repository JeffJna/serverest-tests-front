import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../pageObjects/LoginPage';

Given('que estou na página de login', () => {
  LoginPage.visit();
});

When('preencho o email {string} e a senha {string}', (email, senha) => {
  LoginPage.fillEmail(email);
  LoginPage.fillSenha(senha);
});

When('clico no botão Entrar', () => {
  LoginPage.submit();
});

When('clico em Cadastre-se', () => {
  LoginPage.goToCadastro();
});

Then('devo ser redirecionado para a página inicial', () => {
  cy.url().should('include', '/home');
});

Then('devo ver a mensagem de erro {string}', (mensagem) => {
  cy.contains(mensagem).should('be.visible');
});

Then('devo ser redirecionado para a página de cadastro', () => {
  cy.url().should('include', '/cadastrarusuarios');
});