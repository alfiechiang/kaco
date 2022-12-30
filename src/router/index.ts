import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout/index.vue'
import Info from '../views/Info.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children:[
        {

          path: '/info',
          name: 'info',
          component: Info,

        }
      ]

    },
  ]
})

export default router
