# Controle de Pedidos em Express

Este projeto é um sistema de controle de pedidos desenvolvido usando o framework Express.js. Ele permite que você gerencie pedidos de clientes, incluindo operações de criação, leitura, atualização e exclusão.

## Descrição do Projeto

Este projeto se trata de um desafio do DevClub, no qual o objetivo era criar um sistema de controle de pedidos para rastrear e gerenciar pedidos de clientes. A aplicação permite que os usuários registrem os seguintes detalhes para cada pedido:

- Nome do Cliente
- Produto/Item do Pedido
- Preço
- Status do Pedido (por exemplo, "Em preparação" ou "Pronto")

Os principais recursos incluem:

- Adicionar novos pedidos.
- Listar todos os pedidos.
- Atualizar o status dos pedidos (por exemplo, de "Em preparação" para "Pronto").
- Excluir pedidos.

A aplicação também inclui middlewares personalizados para verificar a existência de pedidos e imprimir o método HTTP de cada solicitação.

## Instalação e Uso

1. Clone este repositório em sua máquina local.

2. Execute `npm install` para instalar as dependências.

3. Execute `npm start` para iniciar o servidor.

4. Acesse a aplicação em `http://localhost:3000`.

## Rotas

- `GET /orders`: Retorna a lista de todos os pedidos.

- `POST /orders`: Cria um novo pedido com os detalhes fornecidos no corpo da solicitação.

- `PATCH /orders/:id`: Atualiza o status de um pedido específico.

- `DELETE /orders/:id`: Exclui um pedido específico.

- `GET /order/:id`: Retorna os detalhes de um pedido específico.

## Middlewares

- `checkoutID`: Middleware para verificar a existência de um pedido com base no ID fornecido na rota.

- `printMetodo`: Middleware para imprimir o método HTTP de cada solicitação.
