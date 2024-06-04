# Projeto de Gerenciamento de Avaliações

Este é um projeto de gerenciamento de avaliações desenvolvido para fornecer uma interface para administradores gerenciarem avaliações, componentes curriculares, alunos e endereços.

## Funcionalidades

- **Gerenciamento de Avaliações:** Interface para criar, visualizar, atualizar e excluir avaliações.
- **Gerenciamento de Componentes Curriculares:** Interface para gerenciar componentes curriculares, incluindo operações CRUD.
- **Gerenciamento de Endereços:** Interface para administrar endereços dos alunos.
- **Listagem de Endereços na Tabela de Alunos:** Adiciona a listagem de endereços na coluna de endereço da tabela de alunos, representada como id - rua (ex.: 1 - Rua do Fullstack).
- **Listagem de Componentes Curriculares e Alunos na Tabela de Avaliações:** Adiciona a listagem de componentes curriculares e alunos nas respectivas colunas da tabela de avaliações, representados como id - Nome do Componente (ex.: 1 - Programação Web).

## Desenvolvimento

O projeto utiliza React para a construção da interface do usuário e o Axios para realizar chamadas remotas para operações CRUD. Além disso, desenvolvemos o [backend em Spring Boot](https://github.com/fabricio54/projeto-web) para fornecer os serviços RESTful necessários para o funcionamento da aplicação, por mais que não esteja implementado no frontend.

## Como Usar

1. Clone o repositório para o seu ambiente local.
2. Instale as dependências do projeto utilizando `npm install`.
3. Inicie o servidor de desenvolvimento com `npm start`.
4. Acesse a aplicação em seu navegador através do endereço [http://localhost:3000](http://localhost:3000).

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorar o projeto, sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
