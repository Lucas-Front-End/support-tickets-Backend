# API de Gerenciamento de Tickets

Este projeto fornece um sistema backend para gerenciar tickets de suporte. Ele foi construído utilizando Node.js 20 e disponibiliza endpoints para criar, atualizar, fechar e deletar tickets, além de listar todos os tickets existentes.

## Funcionalidades

- **Listar Tickets**: Recupera todos os tickets existentes.
- **Criar Tickets**: Adiciona novos tickets ao sistema.
- **Atualizar Tickets**: Modifica os detalhes de um ticket.
- **Fechar Tickets**: Altera o status de um ticket para fechado.
- **Deletar Tickets**: Marca tickets como deletados.

## Requisitos

- [Node.js 20](https://nodejs.org/)
- npm (Node Package Manager)

## Instalação

1. Clone o repositório:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

## Executando a Aplicação

Para iniciar o servidor, execute:

```bash
npm start
```

O servidor será iniciado e ficará disponível na porta padrão (ex.: `http://localhost:3000`).

## Endpoints da API

### Listar Tickets
**GET** `/tickets`
- Recupera todos os tickets existentes.

### Criar Ticket
**POST** `/tickets`
- Cria um novo ticket.
- **Body**: Inclua os detalhes necessários do ticket em formato JSON.

### Atualizar Ticket
**PUT** `/tickets/:id`
- Atualiza um ticket existente pelo seu ID.
- **Parâmetros**: `id` - o ID do ticket a ser atualizado.

### Fechar Ticket
**PATCH** `/tickets/:id/closed`
- Atualiza o status de um ticket para fechado.
- **Parâmetros**: `id` - o ID do ticket a ser fechado.

### Deletar Ticket
**DELETE** `/tickets/:id/deleted`
- Marca um ticket como deletado.
- **Parâmetros**: `id` - o ID do ticket a ser deletado.

