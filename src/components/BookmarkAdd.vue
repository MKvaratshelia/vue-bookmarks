<script setup lang="ts">
import IconPlus from '@/icons/IconPlus.vue';
import ButtonIcon from './ButtonIcon.vue';
import InputString from './InputString.vue';
import IconOk from '@/icons/IconOk.vue';
import { ref } from 'vue';

import { usebookmarkStore } from '@/stores/bookmark.store';

const isEdit = ref<boolean>(false);
const bookmarkStore = usebookmarkStore();

const { category_id } = defineProps<{ category_id: number }>();

const toggleIsEdit = () => {
  isEdit.value = !isEdit.value;
};

const bookmarkUrl = ref<string>();

const onSubmit = () => {
  if (!bookmarkUrl.value) {
    return;
  }
  bookmarkStore.addBookmark(category_id, bookmarkUrl.value);
  bookmarkUrl.value = '';
  toggleIsEdit();
};
</script>
<template>
  <div class="bookmark-add">
    <form @submit.prevent="onSubmit" v-if="isEdit" action="" class="bookmark-add__form">
      <InputString
        is-focused
        v-model="bookmarkUrl"
        class="bookmark-add__form-input"
        placeholder="Вставьте ссылку"
      />
      <ButtonIcon :disabled="!bookmarkUrl" type="submit">
        <IconOk />
      </ButtonIcon>
    </form>
    <ButtonIcon v-if="!isEdit" @click="toggleIsEdit">
      <IconPlus />
    </ButtonIcon>
  </div>
</template>

<style lang="scss" scoped>
.bookmark-add {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg);
  border-radius: 30px;
  border: 1px dashed var(--color-fg);
  max-width: 300px;
  min-width: 300px;
  height: 337px;
  box-shadow: 0 10px 10px 0 rgba(245, 245, 247, 0.1);
  padding: 25px;

  &__form {
    display: flex;
    align-items: center;
    gap: 24px;

    &-input {
      font-size: 16px;
      font-weight: 400;
    }
  }
}
</style>
