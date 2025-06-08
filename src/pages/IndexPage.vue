<script setup lang="ts"></script>
<template>
  <div class="index">
    <h1 class="index__title">Добро пожаловать в Bookmarkly!</h1>
    <p class="index__description">
      Чтобы начать пользоваться выберите категорию закладок или создайте новую.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  min-height: 50vh;

  &__title {
    color: var(--color-fg);
    font-size: 24px;
    font-weight: 500;
  }

  &__description {
    color: var(--color-fg);
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
