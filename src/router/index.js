import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/frontPage',
      name: 'FrontPage',
      component: () => import('../views/FrontPage/FrontPage.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home/Home.vue'),
    },
    {
      path: '/system',
      name: 'System',
      component: () => import('../views/System/Home.vue'),
      children: [
        {
          path: 'index',
          name: 'Index',
          component: () => import('../views/System/Index.vue')
        },
        {
          path: 'person',
          name: 'Person',
          component: () => import('../views/System/Person.vue')
        },
        {
          path: 'work',
          name: 'Work',
          component: () => import('../views/System/Work.vue')
        },
        {
          path: 'slot',
          name: 'Slot',
          component: () => import('../views/BowaSlot/Slot.vue')
        },
        {
          path: 'weather',
          name: 'Weather',
          component: () => import('../views/BowaWeather/Weather.vue')
        },
        {
          path: 'game',
          name: 'Game',
          component: () => import('../views/BowaGame/Game.vue')
        },
      ]
    }


  ]
})

export default router
