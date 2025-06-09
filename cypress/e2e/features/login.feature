# language: pt

Funcionalidade: Login do usuário

  Cenário: Login com sucesso
    Dado que estou na página de login
    Quando preencho o email "fulano@qa.com" e a senha "teste"
    E clico no botão Entrar
    Então devo ser redirecionado para a página inicial

  Cenário: Login com senha inválida
    Dado que estou na página de login
    Quando preencho o email "fulano@qa.com" e a senha "errada"
    E clico no botão Entrar
    Então devo ver a mensagem de erro "Email e/ou senha inválidos"

  Cenário: Navegar para cadastro
    Dado que estou na página de login
    Quando clico em Cadastre-se
    Então devo ser redirecionado para a página de cadastro