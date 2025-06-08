import { defineStore } from 'pinia';

import { computed, ref } from 'vue';
import { client, API_ROUTES } from '@/api';
import type { AuthResponse } from '@/interfaces/auth.interface';

const TOKEN_STORE_KEY = 'token-store';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>();
  const initialValue = localStorage.getItem(TOKEN_STORE_KEY);

  if (initialValue) {
    token.value = initialValue;
  }

  async function login(email: string, password: string) {
    const { data } = await client().post<AuthResponse>(API_ROUTES.auth.login, {
      email,
      password,
    });
    setToken(data.token);
  }

  const setToken = (newToken: string) => {
    token.value = newToken;
    localStorage.setItem(TOKEN_STORE_KEY, newToken);
  };

  const getToken = computed(() => token.value);

  const clearToken = () => {
    token.value = undefined;
    localStorage.removeItem(TOKEN_STORE_KEY);
  };
  return { token, login, clearToken, getToken };
});
