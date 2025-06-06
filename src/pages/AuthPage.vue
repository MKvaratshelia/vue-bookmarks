<script setup lang="ts">
import ButtonText from '@/component/ButtonText.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goTomain = () => {
  router.push({
    name: 'main',
  });
};
</script>
<template>
  <div class="auth-page">
    <div class="auth-page__form">
      <h1 class="auth-page__title">Bookmarkly</h1>
      <ButtonText @click="goTomain">Вход</ButtonText>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth-page {
  display: grid;
  place-items: center;

  min-height: 100vh;

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 52px;
  }

  &__title {
    font-size: 52px;
    font-weight: 700;
    color: var(--color-fg);
  }
}
</style>
