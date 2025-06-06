import { createRouter, createWebHistory } from 'vue-router';
import TestComponent from './component/TestComponent.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
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
          component: TestComponent,
          name: 'main',
        },
      ],
    },
  ],
});
