import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/FullLayout.vue'),
      exact: true,
      children: [
        {
          path: '',
          name: 'home',
          meta: {
            requiresAuth: true
          },
          component: () => import('../views/Full/HomeView.vue'),
          exact: true
        }
      ]
    },
    {
      path: '/',
      component: () => import("@/layouts/LoginLayout.vue"),
      exact: true,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/Login/LoginView.vue'),
          exact: true
        },
        {
          path: '/change-password',
          name: 'changePassword',
          component: () => import('../views/Login/ForgetPasswordView.vue'),
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useUserStore()
  const loggedIn = store.loggedIn
  const requiresAuth = to.meta && to.meta.requiresAuth

  if (requiresAuth && !loggedIn) {
    next('/login')
  } else {
    next()
  }
})


export default router
