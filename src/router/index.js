import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/frontPage',
    },
    {
      path:'/frontPage',
      name:'FrontPage',
      component:()=>import('../views/FrontPage/FrontPage.vue')
    },
    {
      path:'/home',
      name:'Home',
      component:()=>import('../views/Home/Home.vue')
    },
   

  ]
})

export default router
