<script setup lang="ts">
import type { Bookmark } from '@/interfaces/bookmark.interface';
import ButtonIconBig from './ButtonIconBig.vue';
import IconDeleteBig from '@/icons/IconDeleteBig.vue';
import IconLink from '@/icons/IconLink.vue';
import { usebookmarkStore } from '@/stores/bookmark.store';

const { image, title, id, url, category_id } = defineProps<Bookmark>();
const bookmarkstore = usebookmarkStore();

const onDelete = () => {
  bookmarkstore.deleteBookmark(id, category_id);
};

const openLink = () => {
  window.open(url, '_blank');
};
</script>
<template>
  <div class="bookmark-card">
    <div class="bookmark-card__image" :style="{ backgroundImage: `url(${image})` }"></div>
    <h3 class="bookmark-card__title">{{ title }}</h3>
    <div class="bookmark-card__footer">
      <ButtonIconBig @click="onDelete">
        <IconDeleteBig />
      </ButtonIconBig>
      <ButtonIconBig @click="openLink">
        <IconLink />
      </ButtonIconBig>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bookmark-card {
  display: flex;
  flex-direction: column;
  background-color: var(--color-fg);
  border-radius: 30px;
  box-shadow: 0 10px 10px 0 rgba(245, 245, 247, 0.1);
  padding: 20px;
  gap: 25px;
  max-width: 300px;

  &__image {
    border-radius: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 162px;
  }

  &__title {
    color: var(--color-bg);
    font-size: 16px;
    font-weight: 500;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
  }
}
</style>
