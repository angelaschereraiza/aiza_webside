import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import AI from './pages/AI.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/ai', component: AI, meta: { title: 'Qwendoline' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  if (to.meta?.title) document.title = to.meta.title
})

export default router
