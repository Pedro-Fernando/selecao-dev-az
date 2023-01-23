## História de usuário

Como usuário, eu quero gerenciar proposições usando o sistema, incluindo a criação, edição, visualização e exclusão de proposições, para que eu possa visualizar e interagir com as proposições de maneira intuitiva e dinâmica.

> **Cenário: O usuário acessa o sistema de gerenciamento de proposições**
> * Quando o usuário acessa a página de gerenciamento de proposições
> * Então o sistema exibe uma lista de proposições existentes.

> **Cenário: O usuário cria uma nova proposição**
> * Dado que o usuário esteja na página de gerenciamento de proposições
> * Quando o usuário clica no botão "Criar nova proposição"
> * Então o sistema exibe um formulário para o usuário preencher as informações da nova proposição
> * Quando o usuário preenche e envia o formulário
> * Então o sistema valida as informações e, se estiverem corretas, cria uma nova proposição
> * E adicionar à lista existente, criando uma nova  Proposição.


> **Cenário: O usuário edita uma proposição existente**
> * Dado que o usuário esteja na página de gerenciamento de proposições
> * Quando o usuário clica no botão "Editar" em uma proposição da lista
> * Então o sistema exibe um formulário com as informações existentes da proposição
> * Quando o usuário edita e envia o formulário
> * Então o sistema valida as informações e, se estiverem corretas, atualiza a proposição

> **Cenário: O usuário exclui uma proposição**
> * Dado que o usuário esteja na página de gerenciamento de proposições
> * Quando o usuário clica no botão "Excluir" em uma proposição da lista
> * Então o sistema exibe uma mensagem de confirmação
> * Quando o usuário confirma a exclusão
> * Então o sistema remove a proposição da lista

> **Cenário: O usuário visualiza os detalhes de uma proposição**
> * Dado que o usuário esteja na página de gerenciamento de proposições
> * Quando o usuário clica no botão "Detalhes" em uma proposição da lista
> * Então o sistema exibe todos os detalhes da proposição incluindo descrição, autor, status e data de criação.

> **Cenário: O usuário filtra e pesquisa proposições**
> * Dado que o usuário esteja na página de gerenciamento de proposições
> * Quando o usuário preenche e envia o formulário de filtro e pesquisa
> * Então o sistema aplica os filtros e pesquisas correspondentes e atualiza a lista de proposições e elementos HTML dinamicamente via JavaScript.

Nota: As operações CRUD (Create, Read, Update, Delete) ainda são feitas através de requisições HTTP, o usuário pode visualizar e interagir com as proposições de maneira mais intuitiva e dinâmica.


