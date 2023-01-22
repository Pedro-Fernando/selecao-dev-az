import Vue from 'vue'
import VueRouter from 'vue-router'
import GerenciamentoUsuario from '../views/usuario/GerenciamentoUsuario.vue'
import GerenciamentoProposicao from '../views/proposicao/GerenciamentoProposicao.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: GerenciamentoUsuario
  },
  {
    path: '/cadastro-usuarios',
    name: 'Cadastrar Usuario',
    component: () => import(/* webpackChunkName: "about" */ '../views/usuario/GerenciamentoUsuario.vue')
  },
  {
    path: '/cadastro-proposicoes',
    name: 'Cadastrar Proposicoes',
    component: GerenciamentoProposicao
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
