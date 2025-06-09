import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

import { ref } from 'vue';
import { client, API_ROUTES } from '@/api';
import type { Category } from '@/interfaces/category.interface';

export const useCategoryStore = defineStore('categories', () => {
  const categories = ref<Category[]>([]);

  async function fetchCategories() {
    const { data } = await client().get<Category[]>(API_ROUTES.categories);
    categories.value = data;
  }

  async function createCategory() {
    const { data } = await client().post<Category>(API_ROUTES.categories, {
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

  async function updateCategory(category: Category) {
    await client().put(`${API_ROUTES.categories}/${category.id}`, {
      name: category.name,
      alias: category.alias,
    });
    fetchCategories();
  }
  async function deleteCategory(id: number) {
    await client().delete(`${API_ROUTES.categories}/${id}`);
    fetchCategories();
  }

  return {
    categories,
    fetchCategories,
    createCategory,
    getCategoryByAlias,
    updateCategory,
    deleteCategory,
  };
});
