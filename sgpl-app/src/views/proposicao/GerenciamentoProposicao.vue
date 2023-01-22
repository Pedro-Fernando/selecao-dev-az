<template>
  <div>
    <h1>Gerenciamento de Proposições</h1>
    <div>
      <h2>Crie seu layout</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GerenciamentoUsuario',
  data () {
    return {
      newUser: {
        name: ''
      },
      users: []
    }
  },
  methods: {
    addProposicao () {
      // Aqui você deve implementar a lógica para adicionar a proposição à lista
      // usando a propriedade "newProposicao" como fonte de dados
      // e gerando um id para o usuário
    }
  },
  created () {
    // Aqui você pode chamar uma função para carregar os usuários já cadastrados
    // e atribuir o resultado à propriedade "proposicoes"
  }
}
</script>
