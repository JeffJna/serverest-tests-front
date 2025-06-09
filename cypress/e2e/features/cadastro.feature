# language: pt

Funcionalidade: Cadastro de Usuário

  Cenário: Cadastro com sucesso
    Dado que estou na tela de cadastro
    Quando preencho o nome "João da Silva", um email único e a senha "senha123"
    E marco a opção de administrador
    E clico no botão Cadastrar
    Então devo ver uma mensagem de sucesso

  Cenário: Cadastro sem marcar administrador
    Dado que estou na tela de cadastro
    Quando preencho o nome "Maria Teste", um email único e a senha "senha123"
    E clico no botão Cadastrar
    Então devo ver uma mensagem de sucesso

  Cenário: Cadastro com email já existente 
    Dado que estou na tela de cadastro 
    Quando preencho o nome "Usuário Existente", um email já cadastrado e a senha "senha123"
    E clico no botão Cadastrar 
    Então devo ver a mensagem de erro "Este email já está sendo usado"