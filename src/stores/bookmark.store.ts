import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api, API_ROUTES } from '@/api';
import type { Bookmark } from '@/interfaces/bookmark.interface';

export const usebookmarkStore = defineStore('bookmark', () => {
  const bookmarks = ref<Bookmark[]>([]);

  async function fetchBookmarks(categoryId: number) {
    const { data } = await api.get<Bookmark[]>(`${API_ROUTES.bookmarks(categoryId)}`);
    bookmarks.value = data;
  }
  return { bookmarks, fetchBookmarks };
});
