<template>
  <div>
    <div>
      <h2>Cadastrar usuário</h2>
      <form @submit.prevent="addUser">
        <label for="name">Nome:</label>
        <input v-model="newUser.name" type="text" id="name">
        <button type="submit">Cadastrar</button>
      </form>
    </div>
    <div>
      <h2>Lista de usuários</h2>
      <table>
        <thead>
        <tr>
          <th>ids</th>
          <th>Nomes</th>
          <th>Ações</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.nome }}</td>
          <td>
            <button class="edit-btn" @click="editUser(user)">Editar</button>
            <button class="delete-btn" @click="deleteUser(user)">Excluir</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  th {
    background-color: #f8f9fa;
    font-weight: bold;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  div {
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }
  h2 {
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  label {
    margin-bottom: 10px;
  }
  input {
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
  }
  button {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #3e8e41;
  }

  .edit-btn {
    background-color: #4CAF50;
    color: white;
    padding: 8px 15px;
    border: none;
    cursor: pointer;
    margin-right: 10px;
  }
  .edit-btn:hover {
    background-color: #3e8e41;
  }
  .delete-btn {
    background-color: #f44336;
    color: white;
    padding: 8px 15px;
    border: none;
    cursor: pointer;
  }
  .delete-btn:hover {
    background-color: #dc143c;
  }
</style>

<script>
import axios from 'axios'

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
    addUser () {
      // Aqui você deve implementar a lógica para adicionar o usuário à lista
      // usando a propriedade "newUser" como fonte de dados
      // e gerando um id para o usuário
      console.log('Adicionando usuario com nome : ' + this.newUser.name)
    },

    editUser (user) {
      console.log('Editando usuario com nome : ' + user.nome)
    },

    deleteUser (user) {
      console.log('Excluindo usuario com nome : ' + user.nome)
    }
  },
  created () {
    // Aqui você pode chamar uma função para carregar os usuários já cadastrados
    // e atribuir o resultado à propriedade "users"

    axios.get('http://localhost:8081/usuarios')
      .then(response => {
        this.users = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
