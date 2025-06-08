<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCategoryStore } from '../stores/catigories.store';
import ButtonIcon from './ButtonIcon.vue';
import IconPlus from '@/icons/IconPlus.vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store';
const categoriesStore = useCategoryStore();
const { categories } = storeToRefs(categoriesStore);
const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
  categoriesStore.fetchCategories();
});

const logout = () => {
  authStore.clearToken();
  router.push({
    name: 'auth',
  });
};
</script>
<template>
  <ul class="category-list" v-if="categories">
    <li class="category-list__item" v-for="item in categories" :key="item.id">
      <RouterLink active-class="active-link" :to="`/main/${item.alias}`">{{
        item.name
      }}</RouterLink>
    </li>
    <li class="category-list__item">
      <ButtonIcon @click="categoriesStore.createCategory">
        <IconPlus />
      </ButtonIcon>
    </li>
    <li class="category-list__item">
      <a class="" href="#" @click="logout">Выход</a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.category-list {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__item {
    font-size: 14px;
    font-weight: 400;

    &:hover {
      a {
        font-size: 24px;
        font-weight: 700;
        transition: all 0.5s;
      }
    }
  }
}

.active-link {
  font-size: 24px;
  font-weight: 700;
  transition: all 0.5s;
}
</style>
