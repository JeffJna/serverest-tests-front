# Serverest Automated Tests

Este repositório contém testes automatizados para a aplicação Serverest utilizando o Cypress.

## Funcionalidades

- Testes E2E do Frontend
- Suporte a comandos customizados
- Fixtures para dados de teste
- Padrão Page Object

## Instalação e Execução

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute os testes:
   ```bash
   # Rodar todos os testes no modo headless
   npm run cypress:run

   # Abrir a interface gráfica do Cypress
   npm run cypress:open
   ```

## Suites de Testes

### Frontend

- **Login**
  - Login bem-sucedido com credenciais válidas
  - Tratamento de erro com credenciais inválidas
- **Produtos**
  - Adicionar produto ao carrinho
  - Filtrar produtos por categoria

### API

- **Usuários**
  - Criar novo usuário
  - Buscar usuário por ID
  - Atualizar informações do usuário

## Boas Práticas

- Implementação do padrão Page Object
- Comandos customizados para ações comuns
- Uso de fixtures para dados de teste
- Nomes de testes claros e descritivos
- Asserções robustas
- Isolamento entre testes
- Código limpo e de fácil manutenção
