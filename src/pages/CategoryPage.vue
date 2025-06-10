<script setup lang="ts">
import BookmarkCard from '@/component/BookmarkCard.vue';
import BookmarkSort from '@/component/BookmarkSort.vue';
import CategoryHeader from '@/component/CategoryHeader.vue';
import type { Category } from '@/interfaces/category.interface';
import { usebookmarkStore } from '@/stores/bookmark.store';
import { useCategoryStore } from '@/stores/catigories.store';
import { watch, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryStore = useCategoryStore();
const bookmarkStore = usebookmarkStore();
const category = ref<Category>();

onMounted(() => {
  category.value = categoryStore.getCategoryByAlias(route.params.alias);
  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort);
  }
});

watch(
  () => ({
    alias: route.params.alias,
    categories: categoryStore.categories,
  }),
  (data) => {
    category.value = categoryStore.getCategoryByAlias(data.alias);
    if (category.value) {
      bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort);
    }
  },
  //   { immediate: true },
);

const sortBookmarks = (option: string) => {
  bookmarkStore.activeSort = option;
  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value?.id, bookmarkStore.activeSort);
  }
};
</script>
<template>
  <CategoryHeader v-if="category" :category="category" />
  <BookmarkSort @sort="sortBookmarks" :option="bookmarkStore.activeSort" />
  <div class="category__list">
    <BookmarkCard v-for="item in bookmarkStore.bookmarks" :key="item.id" v-bind="item" />
  </div>
</template>

<style lang="scss" scoped>
.category__list {
  margin-top: 40px;
  display: flex;
  gap: 35px;
  flex-wrap: wrap;
}
</style>
