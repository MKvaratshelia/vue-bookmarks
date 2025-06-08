import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

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
      alias: uuidv4(),
    });

    categories.value.push(data);
  }

  const getCategoryByAlias = (alias: string | string[]): Category | undefined => {
    if (typeof alias == 'string') {
      return categories.value.find((i) => i.alias === alias);
    } else {
      return;
    }
  };

  return { categories, fetchCategories, createCategory, getCategoryByAlias };
});
