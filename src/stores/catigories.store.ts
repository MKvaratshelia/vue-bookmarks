import { defineStore } from 'pinia';

import { ref } from 'vue';
import { api, API_ROUTES } from '@/api';
import type { Category } from '@/interfaces/category.interface';

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<Category[]>([]);

  async function fetchCategories() {
    const { data } = await api.get<Category[]>(API_ROUTES.categories);
    categories.value = data;
  }

  async function createCategory() {
    const { data } = await api.post<Category>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: 'new',
    });

    categories.value.push(data);
  }

  return { categories, fetchCategories, createCategory };
});
