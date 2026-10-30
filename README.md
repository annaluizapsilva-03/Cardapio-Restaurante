# Catálogo de Produtos - Josephina 🍽️

## Sobre o projeto

Esse projeto foi desenvolvido durante as aulas de React. A proposta foi criar um catálogo de produtos para o restaurante Josephina, onde o usuário consegue visualizar os produtos, pesquisar pelo nome e consultar mais informações sobre cada um.

Durante o desenvolvimento, trabalhamos com componentes, estados, propriedades e também aprendemos a buscar informações de uma API REST utilizando o `fetch`.

## Tecnologias utilizadas

- React
- JavaScript
- HTML
- CSS
- Vite
- JSON Server

## Imagens do projeto

### Tela inicial

![Tela inicial do catálogo](imagens/Captura%20de%20tela%202026-10-30%20121759.png)


### Detalhes de um produto

![Detalhes do produto](imagens/Captura%20de%20tela%202026-10-30%20121824.png)

## Funcionalidades

Na aplicação, o usuário consegue:

- Visualizar os produtos cadastrados.
- Pesquisar produtos pelo nome.
- Ver os detalhes de um produto selecionado.
- Consultar informações como nome, preço, categoria e descrição.

Também foram adicionadas mensagens para mostrar quando os dados estão carregando, quando acontece algum erro ou quando nenhum produto é encontrado.
## Organização do projeto

O projeto foi dividido em componentes para deixar o código mais organizado:

- **Header:** mostra o cabeçalho da aplicação.
- **ProductSearch:** permite pesquisar os produtos.
- **ProductList:** organiza e apresenta a lista de produtos.
- **ProductCard:** mostra as informações de cada produto.
- **ProductDetails:** apresenta os detalhes do produto selecionado.
- **productsApi:** contém as funções utilizadas para fazer as requisições à API.


## Como funciona a API?

Para buscar os produtos, utilizamos o `fetch`, que permite fazer requisições HTTP.

Foram utilizados dois endpoints:

- `GET /produtos`: busca todos os produtos cadastrados.
- `GET /produtos/:id`: busca um produto específico pelo seu ID.

Os dados são recebidos em formato JSON e utilizados pelo React para atualizar as informações na tela.

## Fluxo de dados entre os componentes

1. O App é o componente principal e controla os estados da aplicação.
2. Quando a página é aberta, o App utiliza o `useEffect` para buscar os produtos na API.
3. A função `getProducts` realiza a requisição utilizando o `fetch`.
4. O ProductSearch permite que o usuário digite o nome de um produto para pesquisar.
5. O App utiliza o texto digitado para filtrar a lista de produtos.
6. O ProductList recebe os produtos filtrados e utiliza o ProductCard para apresentar cada um deles.
7. Quando o usuário clica em ver detalhes, o ID do produto é enviado ao App.
8. O App busca as informações desse produto na API e envia os dados para o ProductDetails.
9. O ProductDetails apresenta as informações completas do produto selecionado.

## Como executar o projeto?

**1.** Instale as dependências:

npm install

**2.** Inicie a API em um terminal:

npm run server

**3** Em outro terminal, inicie o React:

npm run dev