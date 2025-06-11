import { defineStore } from 'pinia';
import { ref } from 'vue';
import { client, API_ROUTES } from '@/api';
import type { Bookmark } from '@/interfaces/bookmark.interface';

export const usebookmarkStore = defineStore('bookmark', () => {
  const bookmarks = ref<Bookmark[]>([]);
  const activeSort = ref<string>('date');

  async function fetchBookmarks(categoryId: number, sort: string) {
    const { data } = await client().get<Bookmark[]>(`${API_ROUTES.bookmarks.get(categoryId)}`, {
      params: {
        sort: sort,
      },
    });
    bookmarks.value = data;
  }

  async function deleteBookmark(id: number, categoryId: number) {
    await client().delete(`${API_ROUTES.bookmarks.delete(id)}`);
    fetchBookmarks(categoryId, activeSort.value);
  }

  async function addBookmark(category_id: number, url: string) {
    const { data } = await client().post<Bookmark>(`${API_ROUTES.bookmarks.add}`, {
      category_id,
      url,
    });

    bookmarks.value.push(data);
  }
  return { bookmarks, fetchBookmarks, deleteBookmark, activeSort, addBookmark };
});
