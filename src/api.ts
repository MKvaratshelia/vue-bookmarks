import axios from 'axios';
import { useAuthStore } from './stores/auth.store';

export const API_BASE = 'http://localhost:3000/api/';
export const API_ROUTES = {
  profile: `profile`,
  categories: 'categories',
  bookmarks: (id: number) => `categories/${id}/bookmarks`,

  auth: {
    login: 'auth/login',
    profile: 'auth/profile',
  },
};

export const client = () => {
  const authStore = useAuthStore();

  return axios.create({
    baseURL: API_BASE,
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${authStore.getToken}`,
    },
  });
};
