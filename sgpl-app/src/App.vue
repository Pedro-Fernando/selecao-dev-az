<template>
  <div id="app">
    <h1 class="title">SGPL</h1>
    <nav>
      <router-link class="link" to="/cadastro-usuarios">Cadastro de Usuários</router-link>
      <router-link class="link" to="/cadastro-proposicoes">Cadastro de Proposições</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.title {
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
}

.link {
  font-size: 1.2em;
  margin-right: 10px;
  text-decoration: none;
  color: #333;
  border: 1px solid #007bff;
  padding: 5px 10px;
  border-radius: 5px;
}

.link:hover {
  color: #007bff;
  border-color: #007bff;
  background-color: #f8f9fa;
}
</style>
