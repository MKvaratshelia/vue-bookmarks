<script setup lang="ts">
import ButtonText from '@/component/ButtonText.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goTomain = () => {
  router.push('/');
};
</script>
<template>
  <div class="not-found">
    <div class="not-found__form">
      <h1 class="not-found__title">404</h1>
      <ButtonText @click="goTomain">На главную</ButtonText>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
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
    font-size: 128px;
    font-weight: 700;
    color: var(--color-fg);
  }
}
</style>
