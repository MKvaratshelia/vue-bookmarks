import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './stores/auth.store';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./pages/NotFoundPage.vue'),
    },

    {
      path: '/',
      component: () => import('./pages/AuthPage.vue'),
      name: 'auth',
    },
    {
      path: '/main',
      component: () => import('./pages/MainPage.vue'),
      children: [
        {
          path: '',
          component: () => import('./pages/IndexPage.vue'),
          name: 'main',
        },

        {
          path: ':alias',
          component: () => import('./pages/CategoryPage.vue'),
        },
      ],
    },
  ],
});

router.beforeEach((to) => {
  const authStore = useAuthStore();

  if (!authStore.getToken && to.name !== 'auth') {
    return { name: 'auth' };
  }
});
