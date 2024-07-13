# Gerenciamento de usuários - frontend

Este projeto faz parte do trabalho da disciplina de Qualidade de Software para a Web do curso de pós-graduação em Desenvolvimento Web FullStack da PUC Minas. Ele foi desenvolvido para interagir com a API de usuários de um projeto backend Node.js, utilizando o framework React Admin para facilitar a criação de interfaces administrativas baseadas em React.

**Para executar este frontend, é necessário ter o [backend com a API de usuários](https://github.com/RicardoGPP/dwfs-qswol-users-backend) funcionando e executando corretamente.**

## Tecnologias Utilizadas

- **React**: Framework JavaScript para a construção da interface de usuário.
- **React Admin**: Biblioteca baseada em React para construção de painéis de administração.
- **Cypress**: Ferramenta de testes de ponta a ponta (end-to-end) para testar a interface do usuário.
- **Node.js**: Plataforma utilizada pelo projeto backend que fornece a API de usuários.

## Configuração e Execução

### Instalação

1. Instale as dependências:

```
npm install
```

2. Inicie a aplicação:

```
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## Testes com Cypress

Para executar os testes de ponta a ponta utilizando Cypress, utilize o seguinte comando:

```
npm run cypress:open
```

Isso abrirá a interface do Cypress, onde você poderá selecionar e executar os cenários de teste definidos.

## Estrutura dos Testes

Os cenários de teste estão localizados no arquivo `users.cy.ts` no diretório `/cypress/e2e`. Eles foram desenvolvidos para garantir o correto funcionamento das interações com a API de usuários através da interface do React Admin.

## Considerações

Por conta do projeto ter o foco nos testes e não na tela em si, não foi dado o devido tratamento à segurança da senha do usuário. Desta forma, o valor é exibido e trafegado sem qualquer tipo de criptografia.
