# Trybesmith

## Descrição

Neste projeto, foi desenvolvido um CRUD (Create, Read, Update e Delete), no formato de uma API, de uma loja fictícia de itens mediecais, utilizando Typescript. Foram criados endpoints que irão ler e escrever em um banco de dados, utilizando o Sequelize.

## Conteúdo

Os objetivos desse projeto são:

1. Declarar variáveis e funções com tipagens Typescript;
2. Construir uma API Node Express utilizando o Typescript.
3. Utilizar o Sequelize para construção das QUERIES do SQL.

<strong>Diagrama Entidade Relacionamento do projeto:</strong>

<img src="/home/dell/Backend/project-trybesmith/sd-032-b-project-trybesmith/images/diagram-der.png" height="200px" />

## Desenvolvimento do projeto

`Requisito 1`
Criar um endpoint para o cadastro de produtos e testes que cubram as funcionalidades deste endpoint.
O endpoint deve ser acessível no caminho (/products).

`Requisito 2`
Criar um endpoint para a listagem de produtos e testes que cubram as funcionalidades deste endpoint.
O endpoint deve ser acessível no caminho (/products).

`Requisito 3`
Criar um endpoint para listar todos os pedidos e testes que cubram as funcionalidades deste endpoint.
 O endpoint deve ser acessível no caminho (/orders).
 Essa rota deve retornar todos os pedidos e os id`s dos produtos associados a estes.

`Requisito 4`
Criar um endpoint para o login de pessoas usuárias e testes que cubram as funcionalidades deste endpoint.
O endpoint deve ser acessível no caminho (/login).
A rota deve receber os campos username e password, e esses campos devem ser validados no banco de dados.
Um token JWT deve ser gerado e retornado caso haja sucesso no _login_. No seu _payload_ deve estar presente o _id_ e _username_.