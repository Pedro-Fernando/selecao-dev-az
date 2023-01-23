# AZ Avaliação

Projeto para avaliação e seleção de candidatos a vaga de programador full stack da empresa AZ Tecnologia em Gestão. 
Nesta avaliação você deverá criar uma aplicação completa utilizando os frameworks e banco de dados abaixo:

**Client**: Vue
 
**Server**: Spring Boot. 

**Banco de dados**: PostgreSQL

> **Nota:** A participação neste desafio de programação é voluntária e o participante tem liberdade para escolher o layout do _client_ que desejar, sem qualquer obrigação de seguir o layout proposto no desafio. 
## História de Usuário
[Clique aqui.](docs/userstory.md)

## Exercício 1
Crie um script para a criação do banco de dados (DDL) contendo todas as tables, columns, constraints (primary key, foreing key e unique) e sequence.


![alt Banco de dados][database]

## Exercício 2
Prepare script (DML) com uma massa de dados inicial para permitir que a aplicação seja testada. Adicione pelo menos 10 registros em cada tabela.

## Exercício 3
Prepare os serviços rest responsáveis pelas operações CRUD (Create, Read, Update e Delete) de **todas as tabelas**.
Utilize o seguinte padrão:

- GET /nomedatabela: Recupera todos os registros da tabela.
- GET /nomedatabela/:id: Recupera somente o registro que seja igual o :id informado.
- POST /nomedatabela: Insere um novo registro na tabela com os dados enviados no body da mensagem.
- PUT /nomedatabela/:id: Altera o registro que seja igual o :id informado e com os dados recebidos no body da mensagem.
- DELETE /nomedatabela/:id: Remove da tabela o registro com o :id informado.

Exemplos:

- GET /usuarios/1
- POST /usuarios
- PUT /proposicoes/2

### Padrões

#### Front-End 

* **Aplicação Cliente**: Front-End Vue. Separe bem o código em componentes.

#### Back-End

* **Controladores REST**: pacote controller - endpoints dos serviços rest (POST, PUT, UPDATE e DELETE)
* **Camada de serviço**: pacote service - implementação das regras de negócio
* **Camada de acesso a dados (Repository)**: pacote repository
* **Camada de domínio**: pacote entity

![alt_arquitetura][arquitetura]


## Exercício 4

Crie a tela principal do sistema no arquivo App.vue. Esta tela deve ter um menu para navegar de uma página para outra. 
O menu deve ter links com as opções: Cadastro de Usuarios e Cadastro de Proposições. 
Cada página deve ter uma view separada: views/proposicao/GerenciamentoProposicao.vue, views/usuario/GerenciamentoUsuario.vue, respectivamente. 
Ao clicar no link, o sistema deve mudar a url para #/nomedatela e o conteúdo interno da section root deve ser trocado pelo html da 
página selecionada.

- HTML da página inicial: App.vue
- URL da página proposições: http://server/cadastro-proposicoes
- URL da página usuários: http://server/cadastro-usuarios

## Exercício 5
Crie uma tela de consulta e edição simples para o cadastro de Usuários. 
Uma grid editável capaz de realizar todas as operações CRUD na tabela de Usuários. Siga os padrões:

- URL da página:            http://server/cadastro-usuarios
- URL dos serviços restful: http://server/usuarios (GET | POST | PUT | DELETE)
- HTML:                     views/usuario/GerenciamentoUsuario.vue

## Exercício 6
Crie uma tela de consulta parametrizada para cadastro de Proposições. 
Uma grid somente leitura contendo os atributos de proposição

- URL da página:            http://server/proposicoes
- URL dos serviços restful: http://server/proposicoes (GET | POST | PUT | DELETE)
- HTML:                     views/empresa/GerenciamentoProposicao.vue


## Teste tudo muito bem e boa sorte.

[database]: sgpl-api/src/main/resources/sql/database.png
[arquitetura]: sgpl-api/src/main/resources/arquitetura.png
