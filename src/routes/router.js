import Home from '../components/templates/T_Home.vue'
import Register from '../components/templates/T_Register.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/tarefa/:id?', component: Register },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router