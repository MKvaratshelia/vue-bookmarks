import { createRouter, createWebHistory } from 'vue-router';

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
