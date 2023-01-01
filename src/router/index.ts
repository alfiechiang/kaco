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
          path:"/product",
          name:"product",
          component: ()=> import("../views/product/index.vue"),
          children:[
            {
              path:"category",
              name:"category",
              component :()=>import ("../views/product/categoey/index.vue")
            },
            {
              path:"list",
              name:"list",
              component :()=>import ("../views/product/list/index.vue")
            }

          ]
        },
       
      ]

    },
  ]
})

export default router
