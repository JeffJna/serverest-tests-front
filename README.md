# Serverest Automated Tests

Este repositório contém a suíte de testes automatizados para a aplicação Serverest, utilizando Cypress com suporte ao Cucumber (BDD).

---

## Funcionalidades Testadas

- Testes E2E do frontend
- Fluxos completos de cadastro de usuário e login
- Validações de erro e navegação

---

## Estrutura do Projeto

```
serverest-tests/
├── cypress/
│   ├── e2e/
│   │   └── features/        # Cenários de teste em Gherkin
│   ├── fixtures/            # Dados mockados
│   ├── pageObjects/         # Page Object Models
│   └── support/             # Comandos customizados e configurações
├── cypress.config.js        # Configurações do Cypress
├── package.json             # Dependências e scripts
```

---

## Casos de Teste

### Cadastro de Usuário
- Cadastro com sucesso (com e sem marcar administrador)
- Validação de erro ao tentar cadastrar com e-mail já existente

### Login de Usuário
- Login bem-sucedido
- Mensagem de erro com senha inválida
- Navegação para a tela de cadastro

---

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute os testes:

   - **Modo headless:**
     ```bash
     npm run cypress:run
     ```
   - **Modo interativo com interface gráfica:**
     ```bash
     npm run cypress:open
     ```

---

## Boas Práticas Aplicadas

- Padrão Page Object Model (POM) para separação das responsabilidades
- Estrutura BDD com Gherkin + @badeball/cypress-cucumber-preprocessor
- Dados externos em fixtures
- Comandos customizados reutilizáveis
- Testes com nomes descritivos e assertivos
- Isolamento entre testes para garantir independência

---

## Requisitos

- Node.js 16+
- npm 8+
- Cypress 13+

---

## Licença

Este projeto é de uso educacional/demonstração, sem vínculo com ambientes de produção reais.