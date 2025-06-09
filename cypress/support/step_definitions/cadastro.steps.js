import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CadastroPage from '../pageObjects/CadastroPage';
import { gerarEmailUnico } from '../utils/emailUtils';
import emails from '../../fixtures/emails.json';


Given('que estou na tela de cadastro', () => {
  CadastroPage.visit();
});

let emailGerado = '';

When('preencho o nome {string}, um email único e a senha {string}', (nome, senha) => {
  emailGerado = gerarEmailUnico();
  CadastroPage.fillNome(nome);
  CadastroPage.fillEmail(emailGerado);
  CadastroPage.fillSenha(senha);
});

When('marco a opção de administrador', () => {
  CadastroPage.checkAdministrador();
});

When('clico no botão Cadastrar', () => {
  CadastroPage.submit();
});

Then('devo ver uma mensagem de sucesso', () => {
  CadastroPage.assertSuccess();
});



When('preencho o nome {string}, um email já cadastrado e a senha {string}', (nome, senha) => {
  const ultimoEmail = emails.length > 0 ? emails[emails.length - 1].email : null;

  if (!ultimoEmail) {
    throw new Error('Nenhum email encontrado em emails.json.');
  }

  cy.log(`Usando e-mail já cadastrado: ${ultimoEmail}`);
  CadastroPage.fillNome(nome);
  CadastroPage.fillEmail(ultimoEmail);
  CadastroPage.fillSenha(senha);
});
