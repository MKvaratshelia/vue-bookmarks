<script setup lang="ts">
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
    bookmarkStore.fetchBookmarks(category.value.id);
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
      bookmarkStore.fetchBookmarks(category.value.id);
    }
  },
  //   { immediate: true },
);
</script>
<template>
  <CategoryHeader v-if="category" :category="category" />
</template>

<style lang="scss" scoped></style>
