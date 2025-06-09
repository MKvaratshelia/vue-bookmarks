<script setup lang="ts">
import IconOk from '@/icons/IconOk.vue';
import ButtonIcon from './ButtonIcon.vue';
import InputString from './InputString.vue';
import IconDelete from '@/icons/IconDelete.vue';
import IconEdit from '@/icons/IconEdit.vue';
import { ref, watch } from 'vue';
import type { Category } from '@/interfaces/category.interface';
import { useCategoryStore } from '@/stores/catigories.store';
import { useRouter } from 'vue-router';
const { category } = defineProps<{ category: Category }>();
const router = useRouter();

const categoryStore = useCategoryStore();

const isEdit = ref<boolean>(false);
const newCategoryName = ref<string>(category.name);

const toggleEdit = () => {
  isEdit.value = !isEdit.value;
};

const onSubmit = () => {
  if (!newCategoryName.value) {
    return;
  }
  const newCategory = {
    ...category,
    name: newCategoryName.value,
  };
  categoryStore.updateCategory(newCategory);
  toggleEdit();
};

const onDelete = () => {
  categoryStore.deleteCategory(category.id);
  router.push({
    name: 'main',
  });
};

watch(
  () => category,
  () => {
    newCategoryName.value = category.name;
    isEdit.value = false;
  },
);
</script>
<template>
  <div class="category-header">
    <h1 v-if="!isEdit" class="category-header__title">{{ category.name }}</h1>
    <form @submit.prevent="onSubmit" v-else class="category-header__form">
      <InputString required placeholder="категория" type="text" v-model="newCategoryName" />
      <ButtonIcon type="submit">
        <IconOk />
      </ButtonIcon>
    </form>
    <div class="category-header__buttons">
      <ButtonIcon @click="onDelete">
        <IconDelete />
      </ButtonIcon>
      <ButtonIcon @click="toggleEdit">
        <IconEdit />
      </ButtonIcon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-header {
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &__form {
    display: flex;
    gap: 10px;
  }

  &__buttons {
    display: flex;
    gap: 10px;
  }
}
</style>
